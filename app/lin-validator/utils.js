'use strict'

/**
 * 获取一个实例的所有方法
 * @param obj 对象实例
 * @param option 参数
 *
 * ```js
 *     let validateFuncKeys: string[] = getAllMethodNames(this, {
 *     filter: key =>
 *   /validate([A-Z])\w+/g.test(key) && typeof this[key] === "function"
 *  });
 * ```
 */
function getAllMethodNames(obj, option) {
  const methods = new Set()
  // tslint:disable-next-line:no-conditional-assignment
  while ((obj = Reflect.getPrototypeOf(obj))) {
    const keys = Reflect.ownKeys(obj)
    keys.forEach(k => methods.add(k))
  }
  const keys = Array.from(methods.values())
  return prefixAndFilter(keys, option)
}
exports.getAllMethodNames = getAllMethodNames
/**
 * 获得实例的所有字段名
 * @param obj 实例
 * @param option 参数项
 *
 * ```js
 *     let keys = getAllFieldNames(this, {
 *      filter: key => {
 *    const value = this[key];
 *    if (isArray(value)) {
 *      if (value.length === 0) {
 *      return false;
 *    }
 *    for (const it of value) {
 *       if (!(it instanceof Rule)) {
 *         throw new Error("every item must be a instance of Rule");
 *      }
 *    }
 *    return true;
 *   } else {
 *    return value instanceof Rule;
 *    }
 *   }
 *  });
 * ```
 */
function getAllFieldNames(obj, option) {
  const keys = Reflect.ownKeys(obj)
  return prefixAndFilter(keys, option)
}
exports.getAllFieldNames = getAllFieldNames

function prefixAndFilter(keys, option) {
  option &&
        option.prefix &&
        (keys = keys.filter(key => key.toString().startsWith(option.prefix)))
  option && option.filter && (keys = keys.filter(option.filter))
  return keys
}