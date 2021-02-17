export default function charSort(option) {
  let charsItem = Object.keys(option);
  charsItem = charsItem.sort((a, b) => option[b].health - option[a].health);
  let sortOption = [];
  for (let item in charsItem) {
    sortOption.push(option[charsItem[item]]);
  }
  return sortOption;
}
