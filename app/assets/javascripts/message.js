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
                    ${message.content?
                    `<p class="message__text">
                    ${message.content}</p>`:``}
                    ${message.image.url?
                    `<img src=${message.image.url} class="lower-message__image">`:``}
                  </div>
                </div>`
    return html;
  }

  function goBottom(targetclass) {
    var target = $(targetclass);
    $(target).scrollTop(target[0].scrollHeight);
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
      $('.messages').append(html);
      $('.new_message')[0].reset();
      goBottom('.messages');
    })
    .fail(function(){
      alert('error');
    })
    .always(function(){
      $(".submit-btn").removeAttr("disabled");
    });
  });
});