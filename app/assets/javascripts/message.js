$(function() {
  $("#new_message").on("submit", function(e) {
    e.preventDefault();
    var form_data = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      type: 'POST',
      url: url,
      data: form_data,
      processData: false,
      dataType: 'json',
      contentType: false
    })
  });
});