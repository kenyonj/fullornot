jQuery(function() {
  $('body').prepend('<div id="fb-root"></div>');
  return $.ajax({
    url: "" + window.location.protocol + "//connect.facebook.net/en_US/all.js",
    dataType: 'script',
    cache: true
  });
});

window.fbAsyncInit = function() {
  FB.init({
    appId: '<%= ENV.fetch('FACEBOOK_APP_ID') %>',
    cookie: true
  });
  return $('#sign_in').click(function(e) {
    return e.preventDefault();
  });
};
