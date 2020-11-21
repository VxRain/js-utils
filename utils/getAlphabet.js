/**
 * 获取一个包含26个字母的数组
 * @returns {Array} 包含26个字母的数组
 * @example getAlphabet() 返回 Array(26) [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", … ]
 */
function getAlphabet() {
  let letter = "A";
  let letters = [];
  for (let i = 0; i < 26; i++) {
    letters.push(String.fromCharCode(letter.charCodeAt(0) + i));
  }
  return letters;
}

export default getAlphabet;
