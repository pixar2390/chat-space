$(function(){
  
  var last_message_id = $('.message:last').data("message-id");
  console.log(last_message_id);

  function buildHTML(message){
    if ( message.image ) {
      var html =
      `<div class="message">
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
      `<div class="message">
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()

    var fd = new FormData(this);
    var url = $(this).attr('action')

    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: fd,  //リクエスト先に送るデータ
      dataType: 'json', //送信データの形式
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.conversation').append(html);
      $('.conversation').animate({ scrollTop: $('.conversation')[0].scrollHeight});
      $('form')[0].reset();
      $('.form__submit').prop('disabled', false);
    })
    
    .fail(function(){
      alert('非同期通信に失敗しました');
    });

  });
});