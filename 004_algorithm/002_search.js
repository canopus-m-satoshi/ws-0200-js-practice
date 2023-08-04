// 参考サイト：https://qiita.com/may88seiji/items/189002cb497e61578114

// https://szenn.dev/k_log24/articles/ffab2892d9a667

/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return 1
  }

  return -1
}

// 参考URL：https://qiita.com/may88seiji/items/189002cb497e61578114#:~:text=%5Bindex%5D)%3B-,%E4%BA%8C%E5%88%86%E6%8E%A2%E7%B4%A2(%E3%83%90%E3%82%A4%E3%83%8A%E3%83%AA%E3%82%B5%E3%83%BC%E3%83%81),-%E3%80%8C%E8%AA%BF%E3%81%B9%E3%82%8B%E7%AF%84%E5%9B%B2%E3%82%92

/**
 *  2.3.2 バイナリサーチ
 * バイナリ(binary) = 2分の、二進(法)の
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

function binarySearch(array, target) {
  let res = -1 // 数値がなかった場合は-1を返す
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)

    if (array[middle] === target) {
      res = middle
      break
    }

    if (array[middle] < target) {
      left = middle + 1
    }

    if (array[middle] > target) {
      right = middle - 1
    }
  }

  return res
}

binarySearch([1, 10, 20, 30, 40, 50, 90, 100], 40)
binarySearch([1, 10, 20, 30, 40, 50, 90, 100], 110)

module.exports = {
  linearSearch,
  binarySearch,
}
