angular.module('video-player')
  .service('youTube', function($http) {
    this.searchYoutube = function(query, cb) {
      console.log(query);
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          query: query,
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          embeddable: true,
          type: 'video',
          safeSearch: 'moderate',
          part: 'snippet',
        }
      }).then(function successCallback(response) {
        cb(response.data.items);
      }, function errorCallback(response) {
        console.log('no');
      });
    };
  });
