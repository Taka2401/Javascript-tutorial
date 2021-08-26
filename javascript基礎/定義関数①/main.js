// インプット引数無し
// アウトプットなし

function test() {
  console.log('テスト');
}

test();

// インプット引数あり
// アウトプット戻り値なし

const comment = 'コメント';

function getComment(string) {
  console.log(string);
}

getComment(comment);

// インプット引数なし
// アウトプット戻り値あり

function numberOfComment() {
  return 5;
}

console.log(numberOfComment());

const NumberOfComment = numberOfComment();

console.log(NumberOfComment);

// インプット 二つ
// アウトプット戻り値あり

function sumPrice(int1, int2) {
  let int3 = int1 + int2;
  return int3;
};

const total = sumPrice(4, 10);

console.log(total);
























