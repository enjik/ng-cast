angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html',
    controller: function($sce) {
      // this.changeToUrl = function(videoId) {
      //   return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);
      // };
    }
  });
