$(function() {
  var names_component = $("#user-search-result");
  function append_names(user){
    var html =`<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="1023" data-user-name="orihata">追加</a>
              </div>`
    names_component.append(html);
  }

  $("#user-search-field").keyup(function(){
    var input = $("#user-search-field").val();
    if(input.length == 0){
      return false;
    } 
    $.ajax({
      type: 'GET',
      url:  '/users',
      data: { keyword: input },
      dataType: 'json',
    })
    .done(function(users){
      users.forEach(function(user){
        // テキストフィールド生成して、ユーザー名を一つずつ入れる。
        append_names(user);
      });
      
    })
    .fail(function(){

    })
  });
});
