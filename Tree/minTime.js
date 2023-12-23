/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  const adj = new Array(n).fill(0).map(() => []);

  // construct a graph
  for (const [parent, child] of edges) {
    adj[parent].push(child);
    adj[child].push(parent);
  }

  const dfs = (curr, parent) => {
    let time = 0;
    debugger;
    // adj[curr] -> 0: [1, 2]
    for (const child of adj[curr]) {
      if (child === parent) {
        continue;
      }
      let childTime = dfs(child, curr);
      if (childTime || hasApple[child]) {
        time += 2 + childTime;
      }
    }

    return time;
  };

  return dfs(0, -1);
};
