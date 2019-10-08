$(function() {
  var names_component = $("#user-search-result");
  function append_names(user){
    var html =`<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
              </div>`
    names_component.append(html);
  }

  function show_name(id,name){
    var html =`<div class='chat-group-user'>
                <input name='group[user_ids][]' type='hidden' value='${id}'>
                <p class='chat-group-user__name'>${name}</p>
                <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
              </div>`
    $('.chat-group-users').append(html);
  }

  $(document).on('click','.user-search-add', function(){
    var id = $(this).data('user-id');
    var name = $(this).data('user-name');
    $(this).parent().remove();
    show_name(id,name);
  });
  $(document).on('click','.user-search-remove', function(){
    $(this).parent().remove();
  });

  $("#user-search-field").on('keyup',function(){
    var input = $(this).val();
    if(input.length == 0){
      names_component.empty();
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
        append_names(user);
      });
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  });
});
