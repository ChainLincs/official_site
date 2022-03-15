function send_webhook() {
    const headers = new Headers();
    headers.append('content-type', 'application/json');

    var twitter_id = $('#twitter_id').val();
    var type = $("#type").val();
    var message = $("#message").val();


    //エラー処理
    if(type == "お問い合わせの種類を選択してください"){
        alert("お問い合わせの種類を選択してください");
        exit;
    }else if(message == ""){
        alert("お問い合わせの内容を入力してください");
        exit;
    }else if(twitter_id == ""){
        alert("TwitterIDを入力してください");
        exit;
    }

    const body = `{
    "content": "[新規問い合わせ通知]` + type + `",
    "embeds": [
        {
        "title": "@` + twitter_id + `さんからの新規問い合わせ",
        "description": "` + message + `",
        "url": "https://twitter.com/` + twitter_id + `",
        "color": 5620992,
        "footer": {
            "text": "yuri___2006",
            "icon_url": "https://pbs.twimg.com/profile_images/1489261067859415045/tFOpOabM_400x400.jpg"
        }
        }
    ]
    }`;

    const init = {
    method: 'POST',
    headers,
    body
    };

    fetch('https://discord.com/api/webhooks/953176350934573056/1uvdikBm0K-cV52NMXCrHMIdegPwreL2x_G2oj6k-NA0vN8dxYGUY6KrWChzHzMz6-Zp', init)
    .then((response) => {
        $('#twitter_id').val() = "";
        $("#type").val() = "";
        $("#message").val() = "";
        alert("送信しました");
    })
    .then((text) => {
    // text is the response body
    })
    .catch((e) => {
    // error in e.message
    });

}

//send_webhook();