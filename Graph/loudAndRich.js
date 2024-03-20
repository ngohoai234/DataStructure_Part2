/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  const graph = new Array(quiet.length).fill(0).map(() => []);
  const res = new Array(quiet.length).fill(0).map(() => -1);

  const dfs = (source) => {
    if (res[source] === -1) {
      res[source] = source;

      for (const nei of graph[source]) {
        const cand = dfs(nei);
        if (quiet[cand] < quiet[res[source]]) {
          res[source] = cand;
        }
      }
    }

    return res[source];
  };

  // build richer graph
  for (const [u, v] of richer) {
    graph[v].push(u);
  }

  for (let i = 0; i < quiet.length; i++) {
    dfs(i);
  }

  return res;
};

// richer[i] = [ai, bi] indicates that ai has more money than bi

// where quiet[i] is the quietness of the ith person.

// Return an integer array answer where answer[i] = y if y is the least quiet person (that is, the person y with the smallest value of quiet[y]) among all people who definitely have equal to or more money than the person i.

console.log(
  loudAndRich(
    [
      [1, 0],
      [2, 1],
      [3, 1],
      [3, 7],
      [4, 3],
      [5, 3],
      [6, 3],
    ],
    [3, 2, 5, 4, 6, 1, 7, 0]
  )
);
