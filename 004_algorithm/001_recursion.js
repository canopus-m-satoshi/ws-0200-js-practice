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
    return n + sumSequence(n - 1)
  }
  return n
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

function fibonacci(num) {
  let fib = [0, 1]

  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  }

  return fib.slice(1)
}

fibonacci(10)

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
  let nodeSize = node.size

  if (node.children) {
    return fileSize(sum + nodeSize)
  }

  if (nodeSize != 0) return sum + nodeSize
}

const data2 = {
  type: 'folder',
  size: 0,
  children: [
    {
      type: 'file',
      size: 10,
    },
    {
      type: 'file',
      size: 5,
    },
  ],
}

fileSize(data2)

module.exports = {
  sumSequence,
  fibonacci,
  fileSize,
}
