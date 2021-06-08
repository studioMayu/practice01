'use strict'; {
    function update() {
        document.querySelector('h2').textContent = 'Try it!';
    }

    setTimeout(update, 2000);
}

function check() {
    let str = [];

    //ラジオボタンの中身を取得
    const q = [document.shitsumon.q0, document.shitsumon.q1, document.shitsumon.q2];

    //A・B・Cそれぞれの合計点数を入れるための変数
    var ppp = 0;
    var vvv = 0;
    var kkk = 0;

    //どのラジオボタンが選択されたか判定し、点数を加算
    for (let n = 0; n < q.length; n++) {
        for (let i = 0; i < q[n].length; i++) {
            if (q[n][i].checked) {
                str[n] = q[n][i].value;
                if (str[n] == "P") {
                    ppp++;
                } else if (str[n] == "V") {
                    vvv++;
                } else if (str[n] == "K") {
                    kkk++;
                }
                break;
            }
        }
    }

    //コメントの条件分岐
    var message = "";
    if (ppp > vvv && ppp > kkk) {
        message = "ピッタ（火）の気質だよ";
    } else if (vvv > ppp && vvv > kkk) {
        message = "ヴァータ（風）の気質だよ";
    } else if (kkk > ppp && kkk > vvv) {
        message = "カパ（水）の気質だよ";
    } else {
        message = "バランスの良いチョイスだね！";
    }

    //HTMLへ出力
    var html = '<div>';
    html += 'P=' + ppp + '個<br>';
    html += 'V=' + vvv + '個<br>';
    html += 'K=' + kkk + '個<br><br>';
    html += '' + message + '';
    html += '</div>';
    document.getElementById("kekka").innerHTML = html;
}