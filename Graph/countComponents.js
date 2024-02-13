// // dfs
// /**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @return {number}
//  */
// var countComponents = function (n, edges) {
//   const seen = new Set();
//   const graph = new Array(n).fill(0).map(() => []);
//   let res = 0;

//   const dfs = (source) => {
//     if (!seen.has(source)) {
//       seen.add(source);
//       for (const nei of graph[source]) {
//         dfs(nei);
//       }
//     }
//   };

//   for (const [u, v] of edges) {
//     graph[u].push(v);
//     graph[v].push(u);
//   }

//   for (let i = 0; i < n; i++) {
//     if (seen.has(i)) {
//       continue;
//     }
//     dfs(i);
//     res += 1;
//   }

//   return res;
// };

// console.log(
//   countComponents(5, [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//     [3, 4],
//   ])
// );

// Union Find
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const parent = new Array(n).fill(0).map((_, idx) => idx);
  const rank = new Array(n).fill(0).map((_) => 1);
  let count = n;

  const find = (n) => {
    let p = parent[n];

    while (p !== parent[p]) {
      parent[p] = parent[parent[p]];
      p = parent[p];
    }

    return p;
  };

  const union = (u1, u2) => {
    const p1 = find(u1);
    const p2 = find(u2);

    if (p1 === p2) {
      return;
    }

    if (rank[p1] > rank[p2]) {
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

  return count;
};

console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
