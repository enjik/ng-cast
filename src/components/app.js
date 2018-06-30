angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
  
    controller: function(youTube) {
      this.input = '';
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      this.changeVideo = (video) => {
        this.currentVideo = video;
      };
      this.onSearch = (input) => {
        console.log([this.input, 2]);
        var that = this;
        youTube.searchYoutube(input, function(response) {
          that.currentVideo = response[0];
          that.videos = response;
        });
        // this.input = '';
      };
    }
  });