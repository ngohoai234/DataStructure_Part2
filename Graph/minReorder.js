/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const graph = new Array(n).fill([]).map(() => []);

  const visited = new Set();

  for (let connect of connections) {
    graph[connect[0]].push(connect[1]);
    graph[connect[1]].push(-connect[0]);
  }

  const dfs = (curr) => {
    let changes = 0;
    visited.add(curr);

    for (const next of graph[curr]) {
      if (!visited.has(Math.abs(next))) {
        changes += dfs(Math.abs(next)) + (next > 0 ? 1 : 0);
      }
    }

    return changes;
  };

  return dfs(0);
};

console.log(
  minReorder(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ])
);
