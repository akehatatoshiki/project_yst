// テストは以下の方法で実行できます
// https://ics.media/entry/11735


// 動作確認用のメソッド
// 受け取ったresultがexpectedと等しいか確かめる
function assert(resut, expected){
  console.log('.');
  console.assert(actual === expected, '\nact: ' + actual + '\nexp: ' + expected);
}

// 盤面情報を表現するハッシュを生成するメソッド
// 各キーの説明
// enemies: 敵の盤上の駒情報
// { 駒の座標: 駒の種類 }のハッシュが格納される
// allies: 味方の盤上の駒情報（敵と同様）
// **_stock: 手持ちの駒の個数
// { '駒の種類': 個数 }のハッシュが格納される
// テストしたい盤面に合わせて設定お願いします
function board_infomation() {
  var hash = {
    'enemies': {
      '1,9': 'kyousya',
      '2,9': 'keima'
      // 以下適宜入力をお願いします
    },
    'enemy_stock': {
      'hu': 1
    },
    'allies': {
      '1,1': 'kyousya'
    },
    'allies_stock': {
      'hu': 2
    }
  }
  return hash;
}

// 盤面情報を受け取って次の一手を評価するメソッド
// 期待する出力はハッシュ。移動前(beore)と移動後(after)の2つのキーを持ち、
// それぞれ{ '座標': '駒の種類' }のハッシュを持つ
// { 'before': { '座標': '駒の種類' }, 'after': { '座標': '駒の種類' } }
function eval_move() {
  var info = board_infomation();
  var resut;
  assert(result, {});
}

// 実行
eval_move();
