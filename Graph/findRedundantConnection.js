// dfs
// /**
//  * @param {number[][]} edges
//  * @return {number[]}
//  */
// var findRedundantConnection = function (edges) {
//   const graph = new Map();
//   const dfs = (source, target, seen) => {
//     if (!seen.has(source)) {
//       seen.add(source);
//       if (source === target) {
//         return true;
//       }
//       const neighbors = graph.get(source);

//       for (const nei of neighbors) {
//         if (dfs(nei, target, seen)) {
//           return true;
//         }
//       }
//     }

//     return false;
//   };
//   for (const [u, v] of edges) {
//     const seen = new Set();
//     if (graph.has(u) && graph.has(v) && dfs(u, v, seen)) {
//       return [u, v];
//     }
//     if (!graph.has(u)) {
//       graph.set(u, new Set());
//     }
//     if (!graph.has(v)) {
//       graph.set(v, new Set());
//     }
//     graph.get(u).add(v);
//     graph.get(v).add(u);
//   }

//   return [];
// };

//  a tree is an undirected graph, connected and has no cycles.

// {
//     1: [2, 3],
//     2: [1],
//     3: [1]
// }

// 2, 3
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const parent = new Array(edges.length + 1).fill(0).map((_, idx) => idx);
  const rank = new Array(edges.length + 1).fill(1).map(() => 1);

  //   create union-find
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
      return false;
    }

    if (rank[p1] > rank[p2]) {
      parent[p2] = p1;
      rank[p1] += 1;
    } else {
      parent[p1] = p2;
      rank[p2] += 1;
    }

    return true;
  };

  for (const [u, v] of edges) {
    if (!union(u, v)) {
      return [u, v];
    }
  }
  return [];
};

// parent: 1 2 3
// rank  : 1 1 1

// [1, 2]

// parent: 1 1 3
// rank:   2 1 1

console.log(
  findRedundantConnection([
    [1, 2],
    [1, 3],
    [2, 3],
  ])
);
