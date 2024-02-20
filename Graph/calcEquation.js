/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = new Map();
  const res = Array.from({ length: queries.length })
    .fill(-1)
    .map(() => -1);

  for (let i = 0; i < equations.length; i++) {
    const u = equations[i][0];
    const v = equations[i][1];

    if (!graph.has(u)) {
      graph.set(u, new Map());
    }

    if (!graph.has(v)) {
      graph.set(v, new Map());
    }

    graph.get(u).set(v, values[i]);
    graph.get(v).set(u, 1 / values[i]);
  }

  const dfs = (source, target, seen) => {
    if (!graph.has(source)) {
      return -1;
    }

    if (graph.get(source).has(target)) {
      return graph.get(source).get(target);
    }

    seen.add(source);

    for (const nei of graph.get(source).keys()) {
      if (seen.has(nei)) {
        continue;
      }
      const matchingValue = dfs(nei, target, seen);

      if (matchingValue !== -1) {
        return graph.get(source).get(nei) * matchingValue;
      }
    }

    return -1;
  };

  for (let i = 0; i < queries.length; i++) {
    const [a, b] = queries[i];
    res[i] = dfs(a, b, new Set());
  }

  return res;
};

//  equations = [["a","b"],["b","c"]],

// values = [2.0,3.0]

// queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]

// b / a = ?

// a / b = 2

// b / c = 3

console.log(
  calcEquation(
    [
      ['a', 'b'],
      ['b', 'c'],
    ],
    [2.0, 3.0],
    [
      ['a', 'c'],
      ['b', 'a'],
      ['a', 'e'],
      ['a', 'a'],
    ]
  )
);
