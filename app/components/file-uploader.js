import Ember from 'ember';

export default Ember.Component.extend({
  uploading: false,
  data: null,
  upload: null,
  actions: {
    deleteFile() {
      this.set('data', null);
      this.set('upload', null);
      this.$('.upload-progress-container').css('display', 'none');
      this.sendAction('fileAction', null);
      this.set('status.fail', false);
    }
  },
  didInsertElement: function() {
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#upload-preview').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }

    $("#fileupload").change(function () {
      readURL(this);
    });

    const component = this;
    this.$('#fileupload').fileupload({
      url: 'http://localhost:3000/api/messages',
      method: 'post',
      add (e, data) {
        component.set('data', data);
        if (data.files.length) {
          component.$('.upload-progress-container').css('display', 'block');
          component.set('upload', data.files[0]);
          component.sendAction('fileAction', data);
        }
      },
      done (e, data) {
        component.set('status.success', true);
        component.actions.deleteFile.bind(component)();
        component.sendAction('messageSendSucceed');
      },
      fail (e, data) {
        component.set('status.fail', true);
      }
    });
  }
});
