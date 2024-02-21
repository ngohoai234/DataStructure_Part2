/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
  const graph = new Array(bombs.length).fill([]).map(() => new Set());

  for (let i = 0; i < bombs.length; i++) {
    for (let j = i + 1; j < bombs.length; j++) {
      const [x1, y1, r1] = bombs[i];
      const [x2, y2, r2] = bombs[j];

      const d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

      if (d <= r1) {
        graph[i].add(j);
      }

      if (d <= r2) {
        graph[j].add(i);
      }
    }
  }

  const dfs = (source, visited) => {
    if (visited.has(source)) {
      return 0;
    }
    visited.add(source);
    let c = 1;

    for (const nei of graph[source].keys()) {
      c += dfs(nei, visited);
    }

    return c;
  };

  let res = 0;

  for (let i = 0; i < bombs.length; i++) {
    res = Math.max(res, dfs(i, new Set()));
  }

  return res;
};
