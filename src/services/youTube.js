angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(query, cb) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: query,
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
        console.log(response);
      });
    };
  });
