const array = ['赤', '青', '黄']

// 0から始まる

const array_2 = [
  ['赤', '青', '黄'],
  ['紫', '緑', '黒']
];

console.log(array_2[0][2]);

// オブジェクト
const member = {
  // キー：　バリュー
  'name': '本田',
  'age': 19,
  'hobby': 'サッカー'
};

console.log(member.age);

const member_2 = {
  '本田': {
    height: 190,
    hobby: 'サッカー'
  },
  '香川': {
    height: 150,
    hobby: 'サッカー'
  }
};

console.log(member_2['香川']['height']);












