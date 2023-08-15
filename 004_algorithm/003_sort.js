/** 
 * O記法についての参考サイト
 * 
 * https://qiita.com/drken/items/872ebc3a2b5caaa4a0d0
 * 
 *  O(N) → Nに比例した回数の計算ステップを要する
 *         例）for文やwhile文で軽い処理を行う時など
 * 
 *  O(N^2) → N^2に比例した回数の計算ステップを要する
 *           例）2重でfor文を回す時など
 *  O(N log N) → N log Nに比例した回数の計算ステップを要する
 *              例）マージソートなど
 *  O(1)→データ量がどんなに増えても、常に一回しか処理を行わないこと
 *      一番高速
 * function log(arr) {
 * console.log(array[0]);
 * }

 * 
 */

/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 *
 *  参考サイト：https://note.com/tasting/n/n5d7ebd0e36d1
 *  バブルソート＝隣接する要素同士を比較して必要に応じて入れ替えを行い、配列を昇順に整列させるアルゴリズム
 *  大規模なデータセットには非効率(nの値に比例して計算量が増えるから)
 *  平均計算量：O(n^2)
 *  最良計算量：O(n)
 *  最悪計算量：O(n^2)
 */

function bubbleSort(array) {
  debugger
  //配列の数だけループする
  for (let i = 0; i < array.length; i++) {
    //配列の左側から比較していく
    for (let j = array.length - 1; i < j; j--) {
      //右側の数より左側の数が大きい場合は入れ替える。
      if (array[j] < array[j - 1]) {
        let tmp = array[j - 1]
        array[j - 1] = array[j]
        array[j] = tmp
      }
    }
  }

  return array
}

bubbleSort([3, 2, 1, 6, 4, 5])

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 *
 * 挿入ソート：
 * データの左側から順番にソートしていく
 * 左側の値をソート済みにし、残りのソートしていない一番左の値とソート済みの値比べ、小さい順になるように、適切な場所に挿入していく
 * 部分的に整列されたデータに対しては高速だが、データ数が多い場合には効率が悪くなる
 *
 * 平均計算量：O(n^2)
 * 最良計算量：O(n)
 * 最悪計算量：O(n^2)
 *
 * 最良計算量が発生するのはすでにある程度整列されたデータが与えられた場合など
 */

// 参考サイト：https://zenn.dev/k_log24/articles/ffab2892d9a667#%E6%8C%BF%E5%85%A5%E3%82%BD%E3%83%BC%E3%83%88:~:text=%E5%8B%95%E4%BD%9C%E3%81%97%E3%81%BE%E3%81%99%E3%80%82-,%E6%8C%BF%E5%85%A5%E3%82%BD%E3%83%BC%E3%83%88,-%E9%85%8D%E5%88%97%E3%81%AE%E5%85%88%E9%A0%AD

// https://note.com/tasting/n/n5d7ebd0e36d1#:~:text=copy-,%E6%8C%BF%E5%85%A5%E3%82%BD%E3%83%BC%E3%83%88,-%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E5%B7%A6%E5%81%B4

function insertSort(array) {
  debugger
  for (let i = 1; i < array.length; i++) {
    // 挿入する値を一時的に保存する
    let currentVal = array[i]
    let j = i - 1

    // 挿入する位置を探索する
    // j が 0 以上かつ挿入する要素よりも大きい要素がある限り、その要素を1つ後ろに移動
    while (j >= 0 && array[j] > currentVal) {
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = currentVal
  }

  return array
}

insertSort([5, 2, 3, 4, 1])

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 *
 * マージソート: 整列対象のデータを2分割していく操作を繰り返し、要素数が1になるまで細分化、そして細分化した要素同士を整列しながら戻していく
 * 平均計算量：O(n log n)
 * 最良計算量：O(n log n)
 * 最悪計算量：O(n log n)
 *
 *
 */

function mergeSort(arr) {
  debugger
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid) // 配列を中央で分割して左側を取得
  const right = arr.slice(mid) // 配列を中央で分割して右側を取得

  // left, rightそれぞれに対して再帰的にソート
  // 再帰関数の終了条件(今回の場合：arr.length <= 1)を満たすまで配列を分割していく
  // その後にmerge関数が実行される
  // merge関数でソートが完了したら、Call Stackに積まれた残りの半分に分割した配列をmerge関数が実行できるまで分割していく
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  debugger
  let result = [] // 空の配列を用意して、結果を格納する
  let leftIndex = 0 // 左側の配列を走査するためのインデックス
  let rightIndex = 0 // 右側の配列を走査するためのインデックス

  // 左側と右側の配列の要素を比較しながら、小さい方を result 配列に追加
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  // 左側の配列にまだ要素が残っている場合、それらを result に追加
  while (leftIndex < left.length) {
    result.push(left[leftIndex])
    leftIndex++
  }

  // 右側の配列にまだ要素が残っている場合、それらを result に追加
  while (rightIndex < right.length) {
    result.push(right[rightIndex])
    rightIndex++
  }

  return result // 左側と右側の配列をマージしてソートされた結果を返す
}

mergeSort([5, 3, 2, 10, 4])

/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

/**
 * クイックソート：適当な基準値（pivot）を定めて「基準値より小さい値」のグループと「基準値より大きい値」のグループに分ける作業を繰り返して整列していく手法
 *
 *
 * 平均計算量：O(n log n)
 * 最良計算量：O(n log n)
 * 最悪計算量：O(n^2)
 *
 * 最悪計算量 O(n^2) になるケースは、基準要素（ピボット）の選択が常に最小値または最大値となる場合など
 *
 * ピボット（pivot）： 配列を分割するための基準となる要素
 */

const quickSort = (array) => {
  debugger
  if (array.length <= 1) return array

  const pivotIndex = Math.floor(array.length / 2)
  const pivot = array[pivotIndex]
  const leftArray = [] // 基準値pivotより小さい値のグループ
  const rightArray = [] // 基準値pivotより大きい値のグループ

  // ピボットを選ぶ位置を取り除いた配列を作成する
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue

    if (array[i] < pivot) {
      leftArray.push(array[i])
    } else {
      rightArray.push(array[i])
    }
  }

  // 再帰的に処理を行い、左側ソート結果 + 基準要素 + 右側ソート結果の順に結合
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

quickSort([2, 3, 4, 5, 1])

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort,
}
