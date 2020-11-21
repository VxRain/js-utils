/**
 * 判断是否是Hex颜色值
 * @param {string} str 判断的字符串（颜色值需包含#号）
 * @return {boolean} true | false
 */
function isHexColor(str) {
	let re = /^#(?:[0-9a-fA-F]{3}){1,2}$/
	return re.test(str);
}
export default isHexColor;
