// trim(); 前後の空白をなくす

const greeting = '  Hello world   ';
console.log(greeting);

const greeting_2 = '  Hello world   ';
console.log(greeting_2.trim());

// substring(); 文字を切り取る(start, 直前の文字まで)

const name = 'tanaka';
console.log(name.substring(0, 4));

// replace(); 文字を置き換える(before, after);

const test = 'テストです';
console.log(test.replace('テスト', 'ファイト'));