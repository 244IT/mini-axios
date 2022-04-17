function isArray(val) {
  return Object.prototype.toString.call(val) === "[object Array]";
}

function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = val.bind(thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

function forEach(obj, fn) {
  // 不处理null和undefined
  if (obj === null || typeof obj === "undefined") {
    return;
  }

  // 基本类型强制转为数组
  if (typeof obj !== "object") {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // 遍历数组
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // 遍历对象
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === "object" && typeof val === "object") {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

export { isArray, extend, forEach, merge };
