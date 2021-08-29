'user strict';
// 定数・変数チェック

const globalVariable = 'グローバル';
// // 全ての範囲で使える

function checkScope() {
  const localVariable = 'ローカル';
  // 関数の中で定義したものは関数の中でしか使用できない

  // localVariable = 'ローカル'; //グローバル バグ注意

  console.log(globalVariable);
  console.log(localVariable);
};

checkScope();

