$(document).ready(function() {
  $('.delete').on('click', function() {
    var bearId = $(this).attr('id');
    $.ajax({
      url: '/api/bears/' + bearId,
      method: 'DELETE'
    }).done(function(data) {
      console.log("bear deleted");
      window.location = '/bears';
    });
  });
  $('#add').on('click', function() {
    var bearId = $(this).attr('id');
    $.ajax({
      url: '/api/bears/' + bearId,
      method: 'DELETE'
    }).done(function(data) {
      console.log("bear deleted");
    });
  });
});
