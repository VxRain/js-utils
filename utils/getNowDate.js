/**
 * 获取当前日期
 * @param {string} separator 日期间的分隔符，默认为 "-"
 * @returns {string} 当前的日期
 * @example
 * getNowDate(); // 返回 2020-10-11
 * getNowDate("."); // 返回 2020.10.11
 *
 */
function getNowDate(separator = "-") {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let currentDate = [year, month, day];
  return currentDate.join(separator);
}

export default getNowDate;