const signal = 'blue';

if (signal === 'red') {
  console.log('止まれ');
} else if (signal === 'yellow') {
  console.log('一旦停止');
} else {
  console.log('進め');
};

const speed = 60;

if (signal === 'blue') {
  if (speed >= 60) {
    console.log('スピード違反です');
  }
};