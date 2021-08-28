// 一般的な関数
// function getItem(){};

const fruits = [
  'りんご','バナナ'
];
// fruits.forEach(function(input) {
//   console.log(input);
// });

// コールバック関数 名前がない関数（無名関数、匿名関数）
// ES6　アロー関数

// 関数の名前あり
// const getItem = () => {console.log('アロー')};
// 一行なら{}が必要ない
const getItem = () => console.log('アロー');
getItem();

// 関数の名前なし
fruits.forEach(input => console.log(input));