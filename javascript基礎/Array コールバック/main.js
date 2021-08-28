// const fruits = Array.new();
const fruits = [ //シンタックスシュガー（簡単な書き方）
  'りんご','バナナ'
];

console.log(fruits);

fruits.push('ブドウ');

// const(定数)でも後から中身を追加できる
console.log(fruits);

// 関数の中に関数があるのがコールバック関数
fruits.forEach(function(input) {
  console.log(input);
});