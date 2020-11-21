/**
 * 将一个参数对象，转换为参数字符串
 * @param {object} obj 参数对象
 * @retuns {string} 参数字符串
 * @example objToParam({key1:'value1', key2:'value2', key3:'value3'}) 返回"key1=value1&key2=value2&key3=value3"
 */
function objToParam(obj) {
	let params = [];
	if (typeof obj !== 'object') {
		throw new Error("TypeError：参数不是对象。");
	}
	for (let key in obj) {
		if (obj[key] !== null && obj[key] !== undefined) {
			params.push(`${key}=${obj[key]}`);
		}
	}
	return params.join('&');
}
export default objToParam;
