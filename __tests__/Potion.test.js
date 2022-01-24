const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
  const potion = new Potion('health');

  expect(potion.name).toBe('health');
  expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});














// const randomNumber = require('../lib/random');

// test('gets random number between 1 and 10', () => {
//   expect(randomNumber()).toBeGreaterThanOrEqual(1);
//   expect(randomNumber()).toBeLessThanOrEqual(10);
// });


// const checkIfEqual = require('../lib/random');

// test('checks if 10 is equal to 10', () => {
//   expect(checkIfEqual(10,10)).toBe(true);
// })

// test('checks to see if 2 plus 3 equals 5', () => {
//   expect(checkIfEqual.add(2,3)).toBe(5);
// })