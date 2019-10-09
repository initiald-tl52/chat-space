$(function() {
  function appendProduct(message) {
    var html = 
                `<div class="message" data-id=${message.id}>
                  <div class="message__upper-info">
                    <div class="message__upper-info__talker">
                    ${message.user_name}
                    </div>
                    <div class="message__upper-info__date">
                    ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-message">
                    ${message.content?
                    `<p class="message__text" data-message-id=${message.id}>
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
  
  var reloadMessages = function() {
    last_message_id = $('.message__text:last').data('message-id');
    console.log("last_message_id  "+last_message_id);
    $.ajax({
      url: 'api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      $.each(messages, function(index, message) {
        insertHTML += appendProduct(message);
      });
      $('.messages').append(insertHTML);
      console.log("messages offset   "+$('.message__text:last').offset().top);
      $("html,body").animate({scrollTop:$('.message__text:last').offset().top});
      console.log("scrolled");
    })
    .fail(function() {
      console.log('error');
    });
  };
  setInterval(reloadMessages, 5000);
});
