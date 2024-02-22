/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const res = [];

  const bt = (source, destination, path) => {
    debugger;
    if (source === destination) {
      res.push([...path]);
      return;
    }
    for (const nei of graph[source]) {
      path.push(nei);
      bt(nei, destination, path);
      path.pop();
    }
  };
  bt(0, graph.length - 1, [0]);
  return res;
};
