$(function() {

  function  addUser(user){
    var template = `
              <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</div>
              </div>
              `
    $("#user-search-result").append(template);
  }

  function  addNoUser(){
    var template = `
              <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">ユーザーが見つかりません</p>
              </div>`
    $("#user-search-result").append(template);
}



  $("#user-search-field").on("keyup", function() {
    let input = $("#user-search-field").val();
    var url = $('.edit_group').attr('action')

    $.ajax({
      type: 'GET',    //HTTPメソッド
      url: '/users',       //users_controllerの、indexアクションにリクエストの送信先を設定する
      dataType: 'json',
      data:  { keyword: input }   //テキストフィールドに入力された文字を設定する
    })

    .done(function(users) {
      //emptyメソッドで一度検索結果を空にする
      $("#user-search-result").empty();
      //usersが空かどうかで条件分岐
      if (users.length !== 0) {
      //配列オブジェクト１つ１つに対する処理
        users.forEach(function(user) {
          addUser(user);
        });
      } else if (input.length == 0) {
        return false;
      } else {
        addNoUser();
      }     

    })
    .fail(function() {
      alert("通信エラーです。ユーザーが表示できません。");
    });


  });
});