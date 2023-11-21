const times = process.argv.slice(2);


for (const time of times) {
  if (time === undefined) {
    break;
  }
  if (time < 0) {
    continue;
  }
  if (isNaN(time)) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
}
