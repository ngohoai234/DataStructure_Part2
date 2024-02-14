// // dfs

// /**
//  * @param {string[][]} accounts
//  * @return {string[][]}
//  */
// var accountsMerge = function (accounts) {
//   const visited = new Set();
//   const emailsToAccount = {};
//   const res = [];

//   //   build graph
//   for (let i = 0; i < accounts.length; i++) {
//     for (let j = 1; j < accounts[i].length; j++) {
//       const email = accounts[i][j];
//       if (!emailsToAccount.hasOwnProperty(email)) {
//         emailsToAccount[email] = [];
//       }
//       emailsToAccount[email].push(i);
//     }
//   }

//   //   DFS to traverse accounts
//   const dfs = (i, emails) => {
//     if (visited.has(i)) {
//       return;
//     }
//     visited.add(i);

//     for (let j = 1; j < accounts[i].length; j++) {
//       const email = accounts[i][j];
//       emails.add(email);

//       for (const nei of emailsToAccount[email]) {
//         dfs(nei, emails);
//       }
//     }
//   };

//   for (let i = 0; i < accounts.length; i++) {
//     if (visited.has(i)) {
//       continue;
//     }
//     const account = accounts[i][0];
//     const emails = new Set();

//     dfs(i, emails);

//     res.push([account, ...[...emails].sort()]);
//   }

//   return res;
// };

// // accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

// // [
// //     ["John", "johnsmith@mail.com", "john00@mail.com"], # Account 0
// //     ["John", "johnnybravo@mail.com"], # Account 1
// //     ["John", "johnsmith@mail.com", "john_newyork@mail.com"],  # Account 2
// //     ["Mary", "mary@mail.com"] # Account 3
// //   ]

// // emails -> accounts

// // {
// //     "johnsmith@mail.com": [0, 2],
// //     "john00@mail.com": [0],
// //     "johnnybravo@mail.com": [1],
// //     "john_newyork@mail.com": [2],
// //     "mary@mail.com": [3]
// // }

// // accounts -> emails only visit once

// // []
// // [0]
// // john ->

// console.log(
//   accountsMerge([
//     ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
//     ['John', 'johnsmith@mail.com', 'john00@mail.com'],
//     ['Mary', 'mary@mail.com'],
//     ['John', 'johnnybravo@mail.com'],
//   ])
// );

// union find
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const parent = new Array(accounts.length).fill(0).map((_, idx) => idx);
  const rank = new Array(accounts.length).fill(1).map(() => 1);
  const emailsToAccounts = {};
  const emailGroup = new Array(accounts.length).fill(0).map(() => []);
  const res = [];

  //   create union-find
  const find = (n) => {
    let p = parent[n];

    while (p !== parent[p]) {
      parent[p] = parent[parent[p]];
      p = parent[p];
    }

    return p;
  };

  const union = (u1, u2) => {
    const p1 = find(u1);
    const p2 = find(u2);

    if (p1 === p2) {
      return false;
    }

    if (rank[p1] > rank[p2]) {
      parent[p2] = p1;
      rank[p1] += 1;
    } else {
      parent[p1] = p2;
      rank[p2] += 1;
    }

    return true;
  };

  // union the account with the same email

  for (let i = 0; i < accounts.length; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      const email = accounts[i][j];
      if (emailsToAccounts.hasOwnProperty(email)) {
        union(i, emailsToAccounts[email]);
      } else {
        emailsToAccounts[email] = i;
      }
    }
  }

  // group email with the same rank
  for (const [e, i] of Object.entries(emailsToAccounts)) {
    const parent = find(i);
    emailGroup[parent].push(e);
  }
  // return the result
  for (let i = 0; i < emailGroup.length; i++) {
    const name = accounts[i][0];
    const emails = emailGroup[i];
    if (emails.length) {
      res.push([name, ...emails.sort()]);
    }
  }
  return res;
};

// The intuition:

//  email ->  account index

console.log(
  accountsMerge([
    ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
    ['John', 'johnsmith@mail.com', 'john00@mail.com'],
    ['Mary', 'mary@mail.com'],
    ['John', 'johnnybravo@mail.com'],
  ])
);
