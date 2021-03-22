/**
 * 判断两个对象是否相等
 * @param {Object} obj1 用于比较的第一个对象
 * @param {Object} obj2 用户比较的第二个对象
 */
function isEqualObj(obj1, obj2) {
  // 不是对象，直接返回false
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  // 相等，说明两个对象的引用指向了同一块内存，不用再比较
  if (obj1 === obj2) {
    return true;
  }

  // 比较两个对象的键的数量
  let arr1 = Object.getOwnPropertyNames(obj1),
    arr2 = Object.getOwnPropertyNames(obj2);
  if (arr1.length !== arr2.length) {
    return false;
  }

  // 比较两个对象的键名是否一致
  for (const item of arr1) {
    if (arr2.includes(item)) {
      // 如果有子对象，递归调用去比较
      if (typeof obj1[item] === 'object') {
        if (!isEqualObj(obj1[item], obj2[item])) {
          return false;
        }
      } else if (obj1[item] !== obj2[item]) {
        return false;
      }
    } else {
      return false;
    }
  }

  // 通过所有测试，返回true
  return true;
}

export default isEqualObj;
