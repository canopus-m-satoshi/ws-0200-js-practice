/**
 *  文字列の長さ
 *
 *  lengthをも使わずに引数で渡された文字列の長さを求める関数を定義してください
 *
 *  example:
 *    'banana' => output: 6
 *    'cucumber' => output: 8
 *    '' => output: 0
 *
 */

function length(str) {
  if (str === '') return 0
  return 1 + length(str.slice(1)) // slice： 第二引数(endの範囲指定)をしないと列の最後 (arr.length) までを取り出す
}

length('文字列を反転させる関数を実装してください')

/**
 *  文字列の反転
 *
 *  文字列を反転させる関数を実装してください
 *
 *  example:
 *    'library' => 'yrarbil'
 *    'krow' => 'work'
 *    'fizzbuzz' => 'zzubzzif'
 *
 */
function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('')
}

/**
 *  指定された文字列の位置を返却
 *
 *  指定された文字列の位置を返却する関数を定義してください
 *
 *  example:
 *    'library', a => output: 4
 *    'work', w => output: 0
 *    'bicycle', a => output: -1
 *
 */

function findIndex(str, char) {
  // const strToArry = str.split('')
  // for (let i = 0; i < strToArry.length; i++) {
  //   if (char === strToArry[i]) return i
  // }

  return str.indexOf(char)
}

/**
 *  指定された文字列を指定された文字で分割
 *
 *  指定された文字列aを指定された一文字bで分割して配列を返却する関数を定義してください
 *
 *  example:
 *    'library', a => output: ['libr', 'ry']
 *    'apple,banana,pineapple', w => output: ['apple', 'banana', 'pineapple']
 *    'bicycle', a => output: ['bicycle']
 *
 */

function split(a, b) {
  return a.split(b)
}

/**
 *  配列の合計
 *
 *  渡された配列の合計を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 20
 *    [2, 5, 3] => output: 10
 *    [1] => output: 1
 *
 */

function sum(array) {
  return array.reduce((prevVal, curVal) => {
    return prevVal + curVal
  }, 0)
}

/**
 *  配列の平均
 *
 *  渡された配列の合計を整数(小数切り捨て)で返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 5
 *    [2, 5, 3] => output: 3
 *    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => output: 5
 *    [1] => output: 1
 *    [] => output: 0
 *
 */

function average(array) {
  if (array.length === 0) return 0

  const average = array.reduce((a, b) => a + b) / array.length
  return Math.floor(average)
}

/**
 *  配列の結合
 *
 *  渡された二つの配列を連結する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9], [3, 4] => output: [1, 3, 7, 9, 3, 4]
 *    ['h', 'o', 'm', 'e'], ['w', 'o', 'r', 'k'] => output: ['h', 'o', 'm', 'e', 'w', 'o', 'r', 'k']
 *    [], [] => output: []
 *
 */

function concat(a, b) {
  return a.concat(b)
}

/**
 *  2.1.2 配列の個数
 *
 *  渡された配列の要素数を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 4
 *    [2, 5, 3] => output: 3
 *    [1] => output: 1
 *
 */

function size(array) {
  return array.length
}

/**
 *  2.1.3 配列の最大値と最小値
 *
 *  配列の最大値と最小値を出力する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => max: 20, min: 1
 *    [2, 5, 3, 6, 10, -1] => max: 10, min: -1
 *    [1] => max: 1, min: 1
 *    [] => 表示しない
 *
 */

function minMax(array) {
  if (array.length === 0) return

  // 下記のやり方では予期せぬエラーを起こす可能性あり？
  // https://qiita.com/ndj/items/82e9c5a4518fe16e539f
  // let min = Math.min(...array)
  // let max = Math.max(...array)

  // reduce関数を使用
  const arrayMax = function(a, b) {
    return Math.max(a, b)
  }
  const arrayMin = function(a, b) {
    return Math.min(a, b)
  }

  let max = array.reduce(arrayMax)
  let min = array.reduce(arrayMin)

  return console.log(`max: ${max}, min: ${min}`)
}

/**
 *  連番
 *
 *  指定された数字のまでの連番の配列を生成する関数を定義してください
 *
 *  example:
 *    5 => [0, 1, 2, 3, 4]
 *    0 => []
 *
 */

function seq(num) {
  const array = []
  for (let i = 0; i < num; i++) {
    array.push(i)
  }
  return array
}

/**
 *  奇数の連番
 *
 *  指定された数字までの奇数の連番の配列を生成する関数を定義してください
 *
 *  example:
 *    5 => [1, 3, 5]
 *    10 => [1, 3, 5, 7, 9]
 *    0 => []
 *
 */

function omitSeq(num) {
  const array = []
  // for (let i = 0; i <= num; i++) {
  //   if (i % 2 === 1) {
  //     array.push(i)
  //   }
  // }

  for (let i = 1; i <= num; i += 2) {
    array.push(i)
  }

  return array
}

omitSeq(7)

/**
 *  指定された数値以下の配列
 *
 *  指定された数字以下を抜き出した配列を返す関数を定義してください
 *
 *  example:
 *    [1, 7, 5, 4], 3 => [1]
 *    [1, 7, 5, 4], 7 => [1, 7, 5, 4]
 *    [], 7 => []
 *
 */

function filter(array, num) {
  const result = array.filter((el) => el <= num)
  return result
}

/**
 *  Fizz Buzz
 *
 *  1から100の数字までをカウントして、数字が3の倍数の場合にFizz
 *  5の倍数の場合にBuzz、3と5の倍数の時にFizzBuzzと表示する関数を実装してください。
 *
 *  example:
 *    1
 *    2
 *    3 Fizz
 *    4
 *    5 Buzz
 *    6
 *    7
 *    ..
 *    15 FizzBuzz
 *    ..
 *    18 Fizz
 *    ...
 *    30 FizzBuzz
 *    ...
 */

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} FizzBuzz`)
    } else if (i % 3 === 0) {
      console.log(`${i} Fizz`)
    } else if (i % 5 === 0) {
      console.log(`${i} Buzz`)
    } else {
      console.log(i)
    }
  }
}

module.exports = {
  length,
  reverse,
  findIndex,
  split,
  sum,
  size,
  average,
  size,
  minMax,
  concat,
  seq,
  filter,
  omitSeq,
  fizzBuzz,
}
