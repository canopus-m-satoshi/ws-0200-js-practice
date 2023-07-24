/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  const strLen = str.length

  num = ((num % strLen) + strLen) % strLen
  return str.slice(-num) + str.slice(0, -num)
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  // gフラグ=全ての一致を検索
  // iフラグ=大文字と小文字を区別しない
  return str.replace(/[aeiou]/gi, '')
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  let count = 0
  for (let i = 0; i <= s1.length - s2.length; i++) {
    if (s1.slice(i, i + s2.length) === s2) {
      count++
    }
  }

  return count
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      c => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  let strLength = str.length

  // 文字列(str)の半分までループ
  for (let i = 0; i < strLength / 2; i++) {
    //　頭からi番目の文字(str[i])と後ろからi番目の文字(str[strLength - 1 - i])を比較
    if (str[i] !== str[strLength - 1 - i]) {
      return false
    }
  }

  return true
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */

/* 
~ MEMO ~
ある数が素数でない（つまり合成数である）場合、その数の因数（その数を割り切る数）は必ずその数の平方根以下に存在します。なぜなら、もし平方根より大きい因数が存在するとしたら、その対（その数をその因数で割った結果得られる数）は必ず平方根以下になるからです。

例えば、36を考えてみましょう。36の平方根は6です。36の因数は1, 2, 3, 4, 6, 9, 12, 18, 36ですが、これらの因数の中で平方根（6）より大きいものは9, 12, 18, 36です。しかし、これらの因数で36を割ると、それぞれ4, 3, 2, 1となり、これらは全て平方根以下になります。

したがって、ある数が素数であるかどうかを判定するためには、その数の平方根までの数で割り切れるかどうかを確認すれば十分です。これにより、必要な計算量を大幅に削減することができます。
*/

function isPrime(num) {
  if (num === 1) return false

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false
  }
  return true
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  let skipNext4 = false

  return array.reduce((sum, currentValue) => {
    if (skipNext4) {
      if (currentValue !== 4) {
        skipNext4 = false
      }
      return sum
    }
    if (currentValue === 4) {
      skipNext4 = true
      return sum
    }

    return sum + currentValue
  }, 0)
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext,
}
