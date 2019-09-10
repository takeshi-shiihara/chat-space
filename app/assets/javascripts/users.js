$(function() {

var search_list = $("#user-search-result");

function appendUser(user) {
  var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">
                  ${ user.name }
                </p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">
                  追加
                </div>
              </div>`;
  search_list.append(html);
  }

  function appendErrMsgToHTML(msg) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${msg}</p>
                </div>`;
    search_list.append(html);
  }

  function appendMenbers(user_name, user_id) {
    var html = `<div class='chat-group-user'>
                  <input name='group[user_ids][]' type='hidden' value='${ user_id }'>
                  <p class='chat-group-user__name'>
                    ${ user_name }
                  </p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>
                    削除
                  </div>
                </div>`;
    $('#chat-group-users').append(html);
  }

  $("#user-search-field").on("keyup", function(e) {
    e.preventDefault();
    var input = $("#user-search-field").val();
    
      
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json',
    })

    .done(function(user) {
      $('#user-search-result').empty();{
        if (user.length !== 0) {
          user.forEach(function(user){
            appendUser(user);
          });
        }
        else {
          appendErrMsgToHTML("一致するユーザーはいません");
        }}
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });

  $(function() {
  $("#user-search-result").on("click", ".user-search-add", function(){
    var user_name = $(this).data('user-name');
    var user_id =  $(this).data('user-id');
    var html = appendMenbers(user_name, user_id);
    $(this).parent().remove();
  });

  $("#chat-group-users").on("click", ".user-search-remove", function(){
    $(this).parent().remove();
  });
  });
});