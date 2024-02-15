/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function (roads, seats) {
  const graph = Array.from({ length: roads.length + 1 }).map(() => []);
  let res = 0;

  for (const [u, v] of roads) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const dfs = (current, parent) => {
    let passengers = 0;
    debugger;

    for (const nei of graph[current]) {
      if (nei === parent) {
        continue;
      }

      let childPassenger = dfs(nei, current);
      passengers += childPassenger;
      res += Math.ceil(childPassenger / seats);
    }
    return passengers + 1;
  };
  dfs(0, -1);
  return res;
};

// seat = 2
// [[1,2,3], [0], [0,4,5], [0]]

console.log(
  minimumFuelCost(
    [
      [3, 1],
      [3, 2],
      [1, 0],
      [0, 4],
      [0, 5],
      [4, 6],
    ],
    2
  )
);
