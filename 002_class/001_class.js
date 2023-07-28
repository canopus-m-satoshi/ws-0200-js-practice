/**
 *  クラスの定義
 *
 *  ※※※ main関数は修正しないでください！！※※※
 *
 *  1. PersonクラスにインスタンスメソッドsayHi()を実装してください。
 *     sayHi()メソッドでは、 Hi!! という文字列を標準出力するように実装してください
 *  2. Personクラスにクラスメソッドdescribe()を実装してください
 *     describeメソッドでは、This is a Person class という文字列を表示するように実装してください
 *  3. Personクラスにname, age, bioフィールドを追加してください
 *     デフォルト値はname => '', age => 0, bio => ''
 *  4. Personクラスにコンストラクタを宣言して、name, age, bioフィールドを初期化できるようにしてください
 *  5. PersonクラスにisUnderageのゲッターを宣言してくだい。メソッドでは、ageが20歳未満であればtrue,
 *     そうでなければfalseを返すように実装してください
 *  6. 下記のmain関数が動くように、それぞれ実装をしてください。main関数の修正は不要です。
 *  　　1 ~ 5 が完了していれば、toStringのメソッドを実装するだけで大丈夫です。
 *     toStringは下記の内容の文字列が返却されることが期待値です。(先頭、末尾の空白は不要）
 *
 *      name: ichiro, age: 54, bio: I like to play baseball
 *
 */

class Person {
  constructor(name = '', age = 0, bio = '') {
    this.name = name
    this.age = age
    this.bio = bio
  }
  // インスタンスメソッド：インスタンスを作成した後にそのインスタンスからアクセスできる
  // インスタンスのプロパティ（状態）にアクセスしたり、それを変更したりすることができる
  sayHi() {
    console.log('Hi!!')
  }
  // クラスメソッド：静的メソッドでインスタンスを作成せずに直接クラスから呼び出せる
  // 使用時＝インスタンスの状態に依存しない操作を行いたい時または全てのインスタンスに共通の機能を提供する場合
  // ファクトリーメソッド：新しいPersonインスタンスを作成する代替手段として、特定のセットアップまたは初期化手順をカプセル化する
  // ユーティリティメソッド：Personクラスに関連するが、特定のPersonインスタンスには依存しない機能
  static describe() {
    console.log('This is a Person class')
  }
  toString() {
    return `name: ${this.name}, age: ${this.age}, bio: ${this.bio}`
  }
  get isUnderage() {
    // 比較演算子の返却値はtrue or falseなので、if文で記述しなくてもいい
    return this.age < 20

    // if (this.age >= 20) {
    //   return false
    // } else {
    //   return true
    // }
  }
}

function main() {
  const person = new Person('ichiro', 54, 'I like to play baseball')
  console.log('インスタンス化後：', person)
  person.sayHi()
  Person.describe()
  person.isUnderage

  person.bio = 'I like to play basketball'
  console.log('プロパティ定義後：', person)
  return person.toString()
}

main()

module.exports = {
  Person,
  main,
}
