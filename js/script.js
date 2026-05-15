
const mainImg = document.querySelector('#headerImg');
console.log(mainImg);

// ---------------メイン画像を監視対象にする---------------

//　１　動作内容を関数で定義
//  (ここでのentriesは交差状態の情報が配列として入ってくる。名前はなんでも可)
const showImg = (entries) => {
    const keyframes = {
        opacity: [0, 1],
    };
    const options = {
        duration: 1200
    };
    entries[0].target.animate(keyframes, options);
}
//　２　新しい名前を付けて監視ロボットを導入する
//　３　かっこ内には関数名を入れる
const imgObserver = new IntersectionObserver(showImg);
//  ４　監視ロボットに監視対象を教えて監視してもらう
imgObserver.observe(mainImg);
//--------------------------------------------------------


