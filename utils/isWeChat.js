/**
 * 根据UserAgent判断是否是微信环境
 * @returns {boolean}
 */
function isWeChat() {
	if (navigator) {
		return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger";
	}
	return false;
}

export default isWeChat;
module.exports = isWeChat
