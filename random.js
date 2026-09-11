function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(10, 50)); // Số nguyên từ 10 đến 50
