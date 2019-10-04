$(function() {
  $("#new_message").on("submit", function(e) {
    e.preventDefault();
    debugger;
    var form_data = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      type: 'POST',
      url: url,
      data: form_data,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(){
      //通信に成功した場合の処理
    })
    .fail(function(){
      //通信に失敗した場合の処理
    })
  });
});