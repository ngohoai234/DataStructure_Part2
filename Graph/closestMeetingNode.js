/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  let res = -1;
  let minDict = Infinity;
  const dicts1 = new Array(edges.length).fill(-1);
  const dicts2 = new Array(edges.length).fill(-1);

  const dfs = (source, dicts, move) => {
    while (source !== -1 && dicts[source] === -1) {
      dicts[source] = move++;
      source = edges[source];
    }
  };

  dfs(node1, dicts1, 0);
  dfs(node2, dicts2, 0);

  for (let i = 0; i < edges.length; i++) {
    if (
      dicts1[i] !== -1 &&
      dicts2[i] !== -1 &&
      minDict > Math.max(dicts1[i], dicts2[i])
    ) {
      minDict = Math.max(dicts1[i], dicts2[i]);
      res = i;
    }
  }

  return res;
};

console.log(closestMeetingNode([2, 2, 3, -1], 0, 1));
