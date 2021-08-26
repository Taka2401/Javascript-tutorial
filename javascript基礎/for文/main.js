// 繰り返し
// for 繰り返しの回数を指定
// for in あまり使われない
// for of (ES6) 使いやすい

const scores = [10, 20, 30];

// one of them
for ( score of scores ) {
  console.log(score);
}

// for (初期値; 条件式; 増減 ++--)

for (i = 0; i <= 10; i++){
  console.log(i);
}