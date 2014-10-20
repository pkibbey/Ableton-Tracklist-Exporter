AbletonTracklistExporter.IndexController = Ember.Controller.extend({
  fileUploadDisabled: false,
  file: null,
  actions: {
    resetFileUpload: function() {
      this.set('file', null);
      this.set('fileUploadDisabled', false);
    }
  }
})