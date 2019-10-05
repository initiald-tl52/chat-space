$(function() {
  function appendProduct(message) {
    var html = 
                `<div class="message">
                  <div class="message__upper-info">
                    <div class="message__upper-info__talker">
                    ${message.name}
                    </div>
                    <div class="message__upper-info__date">
                    ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="message__text">
                    ${message.content}
                    </p>
                  </div>
                </div>`
    return html;
  }
  $("#new_message").on("submit", function(e) {
    e.preventDefault();
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
    .done(function(message){
      var html = appendProduct(message);
      console.log(html);
      $('.messages').append(html);
      console.log($('.messages'));
    })
    .fail(function(){
      //通信に失敗した場合の処理
    })
  });
});