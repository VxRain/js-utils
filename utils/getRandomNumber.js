/**
 * 生成随机数
 * @param {Number} start 起点，默认1
 * @param {Number} end 终点，默认10
 * @param {Number} length 生成长度，默认为1，如果大于1，会返回一个数组
 * @returns {Number | Array}
 * @example
 * getRandomNumber() 返回1 ~ 10之间(包含1和10)的随机数
 * getRandomNumber(1, 10, 100) 返回一个包含100个元素的数组，元素为1 ~ 10之间(包含1和10)
 */
function getRandomNumber(start = 1, end = 10, length = 1) {
	if (length <= 1) {
		return Math.floor(Math.random() * (end - start + 1) + start);
	}
	let i = 0;
	let randomNumberList = [];
	while (i < length) {
		randomNumberList.push(Math.floor(Math.random() * (end - start + 1) + start));
		i++;
	}
	return randomNumberList
}

export default getRandomNumber;