/**
 * 判断是否是Safari浏览器
 * @returns {Boolean}
 */
function isSafari() {
	const UA = navigator.userAgent;
	return /Safari/.test(UA) && !/Chrome/.test(UA);
}

export default isSafari;