let counter = 0;

for (let i = 0; i < 1000; i++) {
  counter++;
  if (counter === 1000) {
    break;
  }
  console.log(counter);
}
