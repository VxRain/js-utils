/**
 * @param {string} string 判断传入的字符串是否是有效的JSON
 * @returns {boolean} True | False
 * @example isJSON(1) 返回false; isJSON('{}') 返回true
 */
function isJSON(string) {
	if (typeof string !== 'string') {
		return false;
	}
	try {
		JSON.parse(string);
		return true;
	} catch (e) {
		return false;
	}
}
export default isJSON;
