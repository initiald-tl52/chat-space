$(function() {
  $("#new_message").on("submit", function(e) {
    e.preventDefault();
    var form_data = new FormData(this);
    $.ajax({
      type: 'POST',
      url: '/groups//messages',
      data: form_data,
      processData: false,
      dataType: 'json'
    })
  });
});