/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export default function charSort(option) {
  let charsItem = Object.keys(option);
  charsItem = charsItem.sort((a, b) => option[b].health - option[a].health);
  const sortOption = [];
  // eslint-disable-next-line linebreak-style
  for (const item in charsItem) {
    sortOption.push(option[charsItem[item]]);
  }
  return sortOption;
}
