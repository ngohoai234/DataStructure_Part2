// bfs
// /**
//  * @param {number[][]} graph
//  * @return {boolean}
//  */
// var isBipartite = function (graph) {
//   // odd 1, even - 1
//   const odds = new Array(graph.length).fill(0).map(() => 0);

//   const bfs = (source) => {
//     if (odds[source]) {
//       return true;
//     }
//     odds[source] = -1;
//     const queue = [source];

//     while (queue.length) {
//       const newSource = queue.shift();

//       for (const nei of graph[newSource]) {
//         if (odds[nei] && odds[nei] === odds[newSource]) {
//           return false;
//         } else if (!odds[nei]) {
//           queue.push(nei);
//           odds[nei] = -1 * odds[newSource];
//         }
//       }
//     }

//     return true;
//   };

//   for (let i = 0; i < graph.length; i++) {
//     if (!bfs(i)) {
//       return false;
//     }
//   }

//   return true;
// };

// // dfs
// 0: Haven't been colored yet.
// 1: Blue.
// -1: Red.
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const colors = new Array(graph.length).fill(0).map(() => 0);

  const dfs = (source, color) => {
    if (colors[source] !== 0) {
      // already visited
      return colors[source] === color;
    }
    colors[source] = color; // assign the set

    for (const nei of graph[source]) {
      if (!dfs(nei, -1 * color)) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < graph.length; i++) {
    if (colors[i] === 0 && !dfs(i, 1)) {
      return false;
    }
  }

  return true;
};

// trong một nhóm bất kỳ sẽ không có kết nối giữa 2 đỉnh bất kỳ

// một đỉnh bất kỳ trong 1 nhóm sẽ có ít nhất 1 kết nối với 1 đỉnh bất kỳ ở nhóm khác

console.log(
  isBipartite([
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
  ])
);
