/* eslint-disable no-undef */
import charSort from '../js/app.js';

test('second test', () => {
  expect(
    charSort([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]),
  ).not.toBe([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
  expect(
    charSort([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]),
  ).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
  expect(
    charSort([
      { name: 'лучник', health: 97 },
      { name: 'маг', health: 98 },
      { name: 'мечник', health: 99 },
    ]),
  ).not.toBe([
    { name: 'мечник', health: 99 },
    { name: 'маг', health: 98 },
    { name: 'лучник', health: 97 },
  ]);
  expect(
    charSort([
      { name: 'лучник', health: 97 },
      { name: 'маг', health: 98 },
      { name: 'мечник', health: 99 },
    ]),
  ).toEqual([
    { name: 'мечник', health: 99 },
    { name: 'маг', health: 98 },
    { name: 'лучник', health: 97 },
  ]);
});
