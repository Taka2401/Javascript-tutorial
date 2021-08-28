// Array.filter();

const scores = ['10', '20', '30', '40'];

const getScores = scores.filter(value => {
  return value >= 30;
});

// 省略
// const getScores = scores.filter((value) => value >= 30);
console.log(getScores);

// Array.find();

const members = ['本田','香川','長友'];

const member = members.find(value => value === '香川');

console.log(member);

// Array.map(); 配列を元に新しい配列を作る

const userList = [10,20,30,40];

// テンプレート文字列　`${}`バッククォート
const userIdList = userList.map(value => `user_${value}`);

console.log(userIdList);

console.table(userIdList);