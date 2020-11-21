/**
 * 随机获取一个可显示的ASCII字符
 * @returns string
 * @example getRandomASCII(); 返回 '!'
 */
function getRandomASCII() {
	let start = 33,
		end = 126;
	let randomCode = Math.floor(Math.random() * (end - start + 1) + start);
	return String.fromCharCode(randomCode);
}
export default getRandomASCII;
