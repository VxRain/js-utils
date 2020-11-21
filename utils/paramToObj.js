/**
 * @param {string} url 一个URL链接或包含?号的query字符串
 * @returns {object} 返回一个参数对象 
 */
function paramToObj(url) {
	const query = url.split('?')[1];
	if (!query) {
		return {};
	}
	return JSON.parse(
		'{"' +
		decodeURIComponent(query)
		.replace(/"/g, '\\"')
		.replace(/&/g, '","')
		.replace(/=/g, '":"')
		.replace(/\+/g, ' ') +
		'"}'
	);
}
export default paramToObj;
