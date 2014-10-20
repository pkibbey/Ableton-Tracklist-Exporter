AbletonTracklistExporter.FileUploadComponent = Ember.TextField.extend({
  file: null,
  type: 'file',
  change: function() {
    // Disable the input field
    this.set('disabled', true);

    var reader = new FileReader(),
    that = this;
    reader.onload = function(event) {
        var fileToUpload = event.target.result;
        Ember.run(function() {
            that.set('file', fileToUpload);
        });
    };
    return reader.readAsDataURL(event.target.files[0]);
  }
});