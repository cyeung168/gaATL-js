$(document).ready(function(){
  var clientId = "XRTYbYTheqjC8Ns9QEbXJkTeH6jBDZ1t";
  var myUserId = "cyeung168";
  var userFollowsApi = "http://www.behance.net/v2/users/" + myUserId + "/following?client_id=" + clientId;

  $.getJSON(userFollowsApi, function(follows) {
    var followsArray = [];
    $.each(follows, function() {
      var user = follows.username;
      followsArray.push(user);
    });
    console.log(followsArray)

    var source   = $("#handlebars-template").html();
    var template = Handlebars.compile(source);
    // var context = {title: "My New Post", body: "This is my first post!"};
    var html = template(follows);
  });
});