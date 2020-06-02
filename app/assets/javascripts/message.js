$(function(){


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


  });
});