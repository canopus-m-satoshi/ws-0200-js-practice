/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
  return str.length
}

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
  // if (str.length % 2 === 0) {
  //   return true
  // }
  // return false

  // →if文で書く必要なし
  return str.length % 2 === 0 // 返却値はtrue/falseのため、if文で記述しなくても大丈夫。より簡潔に書ける
}

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

function firstChar(str) {
  // →文字列は配列のように扱えるので、
  // 添字のようにして確認することができる
  // return str.charAt(0)

  return str[0]
}

/**
 *  4.4 文字列の末尾一文字目を返却するメソッドを実装してください
 *
 */

function lastChar(str) {
  return str[str.length - 1]
}

/**
 *  4.5 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

function substring(str, a, b) {
  return str.substring(a - 1, b) // 添字分引く
}

/**
 *  4.6 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 * */

function isInclude(a, b) {
  // if (a.includes(b)) {
  //   return true
  // } else {
  //   return false
  // }

  // includesはtrue または falseを返すため、if文で書く必要がない
  //  より簡潔に記述できる
  return a.includes(b)
}

// →if文で書く必要なし
// より簡潔に記述できる

/**
 *  4.7 引数で渡された文字列を一文字ずつ表示するメソッドを実装してください
 *
 * example:
 *   'library'
 *    出力 => 'l'
 *           'i'
 *           'b'
 *           'r'
 *           'a'
 *           'r'
 *           'y'
 *
 */

function printByChar(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    console.log(char)
  }
}

module.exports = {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar,
}
