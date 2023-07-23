/**
 *  リストの実装
 *
 *  オブジェクト指向やJavaScriptの組み込みAPIの成り立ちを理解するためにも
 *  データ構造をクラスで実装してみましょう。
 *  実際に使われるリストは要素の型の縛りはありませんが、今回のリストは要素を数値に限定します。
 *
 *  TODO: のついているメソッドを実際に実装してください
 *
 */

class List {
  data = []
  /**
   * Listクラスのインスタンスを作成する。
   * @constructor
   * @this {List}
   * @param {Number} array リストのデータ
   */
  constructor(array) {
    this.data = array
  }

  /** リストの長さを返す
   *
   * @return {Number}
   */
  get size() {
    // TODO:
    return this.data.length
  }

  /** 引数で渡された添字のデータを取得する
   *
   * @param {Number} index
   * @return {Number}
   */
  index(index) {
    // TODO:
    return this.data[index]
  }

  /** リストの 要素を追加する
   *
   * @param {Number} item
   * @return {Number}
   */
  push(item) {
    // TODO:
    return this.data.push(item)
  }

  /** 与えられた引数により、リストの 要素を削除する
   *
   * @param {Number} targetIndex
   * @return {Number}
   */
  remove(targetIndex) {
    // TODO:
    return this.data.splice(targetIndex, 1)[0] // 削除した要素の配列を返すので削除した要素(=targetIndex)のみ格納される、そのため削除した要素を取得したい場合は、index[0]とする
  }

  /** リストの 末尾の要素を取得する
   *
   * @param {Number} targetIndex
   * @return {Number}
   */
  pop() {
    // TODO:
    return this.data.pop()
  }

  /** リストの 先頭の要素を取得する
   *
   * @return {Number}
   */
  shift() {
    // TODO:
    return this.data.shift()
  }

  /** リストの の中から引数に合致する値を取得する
   *
   * XXX: find関数は使わずにfor文、while文を活用して実装しましょう
   *
   * @param {Number} target
   * @return {Number | undefined}
   */
  find(target) {
    // TODO:
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === target) {
        return this.data[i]
      }
    }
    return undefined
  }

  /** リストの の中から引数に合致する値のindexを取得する。見つからない場合は-1を返す
   *
   * XXX: findIndex関数は使わずにfor文、while文を活用して実装しましょう
   *
   * @param {Number} target
   * @return {Number}
   */
  findIndex(target) {
    // TODO:
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === target) {
        return i
      }
    }
    return -1
  }

  /** リストの の中から要素に合致する数を取り除く
   *
   * 実際のデータ(this.data)に変更を加えることなく、新しい配列を返す形で実装しましょう。
   *
   * XXX: filter関数は使わずにfor文、while文を活用して実装しましょう
   *
   * @param {Number} target
   * @return {List}
   */
  filter(target) {
    // TODO:
    const newArray = []

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] !== target) {
        newArray.push(this.data[i])
      }
    }
    return new List(newArray)
    // return newArray
  }
}

/**
 *  スタックの実装
 *
 *  スタックの実装を理解して、要素の追加、取り出しのメソッドをそれぞれ実装しましょう。
 *  https://qiita.com/drken/items/6a95b57d2e374a3d3292
 *
 *  TODO: のついているメソッドを実際に実装してください
 *
 */

class Stack {
  data = []

  /** スタックの長さを返す
   *
   * @return {Number}
   */
  get size() {
    return this.data.length
  }

  /** スタックに要素を追加する
   *
   * @param {Number} item
   */
  push(item) {
    // TODO:
    return this.data.push(item)
  }

  /** スタックから要素を取得する
   *
   * @param {Number} item
   * @return {Number}
   */
  pop() {
    // TODO:
    return this.data.pop()
  }

  /** スタックの末尾の要素を参照する
   *
   * @param {Number} item
   * @return {Number}
   */
  peek() {
    // TODO:
    // for (let i = 0; i < this.data.length; i++) {
    //   if (i === this.data.length) {
    //     return this.data[i]
    //   }
    // }
    if (this.size > 0) {
      return this.data[this.size - 1]
    }
  }
}

/**
 *  キューの実装
 *
 *  キューの実装を理解して、要素の追加、取り出しのメソッドをそれぞれ実装しましょう。
 *  https://qiita.com/drken/items/6a95b57d2e374a3d3292
 *
 *  TODO: のついているメソッドを実際に実装してください
 *
 */

class Queue {
  data = []

  /** キューの長さを返す
   *
   * @return {Number}
   */
  get size() {
    return this.data.length
  }

  /** キューに要素を追加する
   *
   * @param {Number} item
   * @return {Number}
   */
  enqueue(item) {
    // TODO:
    return this.data.push(item)
  }

  /** キューから要素を取得する
   *
   * @return {Number}
   */
  dequeue() {
    // TODO:
    return this.data.shift()
  }

  /** キューの要素を参照する
   *
   * @return {Number}
   */
  peek() {
    // TODO:
    if (this.size > 0) {
      return this.data[0]
    }
  }
}

module.exports = {
  List,
  Stack,
  Queue,
}
