/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const dfs = (source) => {
    visited.add(source);

    for (const nei of rooms[source]) {
      if (visited.has(nei)) {
        continue;
      }
      dfs(nei);
    }
  };
  dfs(0);

  return visited.size === rooms.length;
};

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
