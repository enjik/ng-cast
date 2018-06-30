angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
  
    controller: function(youTube) {
      this.$onInit = function() {
        this.result();
        this.input = '';
      };
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      // this.searchResults = (that, response) => {
      //   that.currentVideo = response[0];
      //   that.videos = response;
      // }
      this.result = (input) => {
        var that = this;
        youTube.search(input, (response) => {
          that.currentVideo = response[0];
          that.videos = response;
        });
      };
    }
  });