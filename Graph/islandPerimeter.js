// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var islandPerimeter = function (grid) {
//   const dfs = (r, c) => {
//     if (
//       r < 0 ||
//       r >= grid.length ||
//       c < 0 ||
//       c >= grid[0].length ||
//       grid[r][c] === 0
//     ) {
//       return 1;
//     }

//     if (grid[r][c] === '#') {
//       return 0;
//     }

//     grid[r][c] = '#';

//     let curr = dfs(r, c + 1);
//     curr += dfs(r + 1, c);
//     curr += dfs(r, c - 1);
//     curr += dfs(r - 1, c);

//     return curr;
//   };

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === 1) {
//         return dfs(i, j);
//       }
//     }
//   }

//   return 0;
// };

// console.log(islandPerimeter([[1, 0]]));

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let islands = 0;
  let neighbors = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        islands++;
        // check for the bottom
        if (i < grid.length - 1 && grid[i + 1][j] === 1) {
          neighbors++;
        }

        // check for the right
        if (j < grid[i].length - 1 && grid[i][j + 1] === 1) {
          neighbors++;
        }
      }
    }
  }
  return islands * 4 - neighbors * 2;
};
