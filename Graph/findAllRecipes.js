/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  const graph = {};
  const suppliers = new Set(supplies);
  const indegree = {};
  const res = [];
  const q = [];

  for (let recipe of recipes) {
    indegree[recipe] = 0;
  }

  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < ingredients[i].length; j++) {
      if (!suppliers.has(ingredients[i][j])) {
        if (!graph.hasOwnProperty([ingredients[i][j]])) {
          graph[ingredients[i][j]] = [];
        }
        graph[ingredients[i][j]].push(recipes[i]);
        indegree[recipes[i]]++;
      }
    }
  }
  debugger;

  //   kahn's algorithm

  for (const key in indegree) {
    if (indegree[key] === 0) {
      q.push(key);
    }
  }

  while (q.length) {
    const tmp = q.shift();
    res.push(tmp);
    if (graph[tmp]) {
      for (let nbr of graph[tmp]) {
        indegree[nbr]--;
        if (indegree[nbr] === 0) q.push(nbr);
      }
    }
  }

  return res;
};
