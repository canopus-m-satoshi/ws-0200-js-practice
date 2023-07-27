/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  const obj = {
    name: 'Bob',
    age: 32,
    gender: 'male',
  }

  return obj
}

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
  const newPerson = {
    name: 'Mary',
    age: 37,
    gender: 'female',
  }
  return newPerson
}
const A = {
  name: 'Bob',
  age: 32,
  gender: 'male',
}

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

function assignNumber(persons) {
  let obj = {}

  persons.forEach((person) => {
    let random = Math.floor(Math.random() * 10) + 1
    obj[person] = random
  })

  return obj
}

let persons = ['Bob', 'Mary', 'Ann', 'Mike']

assignNumber(persons)

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

// 同じ解き方でできる: 5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
function isDuplicate(array) {
  const obj = {}

  for (let i = 0; i < array.length; i++) {
    const value = array[i]

    if (obj[value]) return true

    obj[value] = array[i]
  }

  return false
}

// 配列（Array）：順序を持った複数の値を格納するデータ構造
// オブジェクト（Object）：キーと値のペア(keyとvalueのペアをpropertyという)を格納するデータ構造

let arrayA = [1, 2, 2, 3]
let arrayB = [1, 2, 3, 2]

isDuplicate(arrayA)
isDuplicate(arrayB)

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate,
}
