/**
 *  数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */

function sumSequence(n, sum = 0) {
  if (n != 0) {
    return (sum = n + sumSequence(n - 1))
  }
  return sum
}

console.log(sumSequence(3))
console.log(sumSequence(10))
console.log(sumSequence(30))

/**
 *  フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */

// 参考URL： https://stackoverflow.com/questions/36415203/how-can-i-recursively-generate-an-array-of-the-fibonacci-sequence#:~:text=Notice%20that%20you%20start%20each%20function%20call%20with%20an%20empty%20array%20and%20then%20only%20add%201%20member%20to%20it.%20That%20won%27t%20work.

//  https://qiita.com/ryo2132/items/4bedeec846d0427f1ac7#%E3%82%B3%E3%83%BC%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF%E3%82%92%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B:~:text=%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82-,%E3%82%B3%E3%83%BC%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF%E3%82%92%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B,-%E6%AC%A1%E3%81%AB%E5%AE%9F%E9%9A%9B%E3%81%AB

function fibonacci(num) {
  debugger

  // /* num = 2以下になるまでfibonacci(num -1)を呼び出す
  //  * 呼び出した分Call Stackにfibonacci()が溜まっていく
  //  * 引数が10の場合は、
  //  * const array = fibonacci(num - 1)で呼び出される関数の引数がfibonacci(9)→fibonacci(8)→fibonacci(7)→~~~fibonacci(3)になるまで積まれていく？
  //  * numの値が2以下になったらarrayに [1, 1]が返される
  //  * Call Stackに溜まっていた分、「array.push(array[num - 2] + array[num - 3])」が呼び出される
  //  */

  if (num <= 1) {
    return [1]
  }

  // 引数が1以上2以下の場合は下記を返す
  if (num <= 2) {
    return [1, 1]
  }

  // const array = fibonacci(num - 1)で呼び出される関数の引数がfibonacci(9)→fibonacci(8)〜fibonacci(3)になるまでCall Stackに積まれていく？
  const array = fibonacci(num - 1)

  // numの値が2以下になったらarrayに [1, 1]が返される
  // 例）numの値が4の場合、array[num - 2] →array[2]とarray[num - 3]→array[1]を足した値が配列に追加されるので、3が追加される

  array.push(array[num - 2] + array[num - 3])
  return array

  // Call Stackには再帰関数 fibonacci(num - 1)の値も保持されており、保持されているnumの値は3→4〜8の順である
  // スタックなので、numの値が3→4〜8の順で「array.push(array[num - 2] + array[num - 3])」のnumの値に代入されていく？
}

fibonacci(8)

/**
 *  2.4.2 ディレクトリに含まれるファイルサイズの合計
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 *
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0,
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0,
 *          children: [
 *            {
 *              type: 'folder',
 *              size: 0,
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]
 *    }
 *    => 38
 */

function fileSize(node, sum = 0) {
  debugger
  if (node.type === 'file') return sum + node.size

  if (node.type === 'folder') {
    for (const val of node.children) {
      sum = fileSize(val, sum)
    }
  }

  return sum
}

module.exports = {
  sumSequence,
  fibonacci,
  fileSize,
}
