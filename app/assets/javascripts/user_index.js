$(function() {
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
        
      });
      // テキストフィールド生成して、ユーザー名を一つずつ入れる。
    })
    .fail(function(){

    })
  });
});
