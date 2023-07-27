/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  return days
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
  // for文で書き換え 簡潔に書ける
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) return true
  }
  return false
}

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  // obj {} にarray内のデータを格納し、keyにarray[i]、値に「true」を格納していく

  const obj = {}

  for (let i = 0; i < array.length; i++) {
    const value = array[i]

    // obj[value]がtrue＝重複しているということなので、trueを返却
    if (obj[value]) return true

    // for文でのループ時に、objのkeyにarray[i]、値にtrueを格納していく
    // この時格納されるtrueを↑のif文での重複チェックに利用する
    obj[value] = true
  }

  // for文内で、trueがreturnされない場合は重複はないのでfalseを返却する
  return false
}

// function isDuplicate(array) {
//   let setLength = new Set(array).size // 最適解なのか？
//   if (array.length !== setLength) {
//     return true
//   } else {
//     return false
//   }
// }

// →Set関数を利用している
// 一度解いたものは説明できるようにしっかりと理解していく

// for文でも解けるので調整してみる
// for文の場合の方が応用が効くので調整してみる

// 基本的に再代入する場合にのみletを使用する
// 基本的にはconstを使用する
// 使わなくていいのならletは使用せず、constを使用する

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate,
}
