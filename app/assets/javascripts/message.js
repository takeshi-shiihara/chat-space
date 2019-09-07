$(function() {
  function buildHTML(message){
    var html = `<div class="message">
                  <div class="upper-message">
                    <p class="upper-message__user-name">
                       ${ message.user_name }
                    </p>
                    <p class="upper-message__date">
                      ${ message.time }
                    </p>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${ message.content }
                    </p>
                  </div>
                </div>
              </div>`
    return html;
  }
  $("#new_message").on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form__message').val('');
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({scrollTop: $('.message')[0].scrollHeight});
      return false
    })
    .fail(function(){
      alert('error')
      $('.form__submit').prop('disabled', false);
    })
  })
});
