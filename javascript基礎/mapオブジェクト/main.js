const myMap = new Map();

myMap.set('id', 3);
myMap.set('name', '田中');

// オブジェクトを返す
console.log(myMap);

// getでkeyを指定
console.log(myMap.get('name'));

// valuesで値を取る
const valueList = myMap.values();

for ( value of valueList ) {
  console.log(value);
}