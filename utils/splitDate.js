/**
 * @param {string|number} date 日期，如20200701
 * @param {string} separator 分隔符 
 * @returns {string} 分割后的字符串
 * @example splitDate(20201015) 返回 "2020.10.15"
 */
function splitDate(date, separator = ".") {
	date = date + "";
	return date.replace(/(\d{4})(\d{2})(\d{2})/, `$1${separator}$2${separator}$3`);
}

export default splitDate;
