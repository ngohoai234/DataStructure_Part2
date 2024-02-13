// dfs

// /**
//  *
//  * @param {number} n
//  * @param {number[][]} edges
//  */
// var validTree = function (n, edges) {
//   if (!n) {
//     return false;
//   }
//   const visited = new Set();
//   const graph = new Array(n).fill(0).map(() => []);

//   for (const [u, v] of edges) {
//     graph[u].push(v);
//     graph[v].push(u);
//   }

//   const dfs = (source, prev) => {
//     if (visited.has(source)) {
//       return false;
//     }
//     visited.add(source);

//     for (const nei of graph[source]) {
//       if (nei === prev) {
//         continue;
//       }
//       if (!dfs(nei, source)) {
//         return false;
//       }
//     }

//     return true;
//   };

//   return dfs(0, -1) && visited.size === n;
//   //   return dfs(0, -1) && visited.size === n;
// };

// // Input: n = 5 edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
// // Output: true.

// // Input: n = 5 edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
// // Output: false.

// console.log(
//   validTree(5, [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//     [1, 3],
//     [1, 4],
//   ])
// );

// Union find
/**
 *
 * @param {number} n
 * @param {number[][]} edges
 */
var validTree = function (n, edges) {
  const parent = new Array(n).fill(0).map((_, idx) => idx);
  const rank = new Array(n).fill(0).map(() => 1);
  let count = 0;

  //   construct find
  const find = (n) => {
    const p = parent[n];

    while (p !== parent[p]) {
      parent[p] = parent[parent[p]];
      p = parent[p];
    }
    return p;
  };

  const union = (u1, u2) => {
    const p1 = find(u1);
    const p2 = find(u2);

    // the same parent
    if (p1 === p2) {
      return;
    }

    if (rank[p1] > rank[2]) {
      parent[p2] = p1;
      rank[p1] += 1;
    } else {
      parent[p1] = p2;
      rank[p2] += 1;
    }

    count -= 1;
  };

  for (const [u, v] of edges) {
    union(u, v);
  }

  //   check how many parent
  return count === 1;
};

//
