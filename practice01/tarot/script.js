'use strict';

{

    $('.title').fadeIn(800);


    // document.getElementById('btn_shuffle').onclick = function() {
    document.querySelector('button').addEventListener('click', () => {
        const targetNode04 = document.getElementById('card-04');
        targetNode04.classList.add('move');
        const targetNode05 = document.getElementById('card-05');
        targetNode05.classList.add('moveleft');

        const targetNode06 = document.getElementById('card-06');
        targetNode06.classList.add('movecenter');

        const number = Math.floor(Math.random() * 22);
        console.log(number);
        setTimeout(() => {
            if (window.confirm(`カードをめくって結果を見る！`)) { //この処理は、シャッフルが終わってから表示させたい。５？４？秒後に走るようにすればよい？
                console.log('カードをめくる！'); //numberが22ならワールドのカードを表示、21なら審判ジャッジメントのカードを、って0まで書くのか？
            } else {
                window.alert('見ないで終了する！');
            };
        }, 5000);
    });
}
// シャッフルするボタンをクリックしたら、０－２２でランダムで選ぶのと、カードのアニメーションをスタートさせるのと両方やりたい｛｝に全部入れたらできた！
// クラス名追加でアニメーションをスタートさせる-カード０４から０６まで一気に取得して一気にそれぞれに違うクラス名付与できるかな？配列？一個ずつ書かかなダメかな？
// ランダムで選ぶのはコンソールまではできた。→出た数字をどうimgに反映させる？ひもづけ？→カードをめくるconfirm出してクリックされたら表示させたい。