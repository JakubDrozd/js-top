function lcsOf3(X, Y, Z, m, n, o) {
  let L = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    L[i] = new Array(n + 1);
    for (let j = 0; j < n + 1; j++) {
      L[i][j] = new Array(o + 1);
      for (let k = 0; k < o + 1; k++) {
        L[i][j][k] = 0;
      }
    }
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= o; k++) {
        if (i == 0 || j == 0 || k == 0) L[i][j][k] = 0;
        else if (X[i - 1] == Y[j - 1] && X[i - 1] == Z[k - 1])
          L[i][j][k] = L[i - 1][j - 1][k - 1] + 1;
        else
          L[i][j][k] = Math.max(
            Math.max(L[i - 1][j][k], L[i][j - 1][k]),
            L[i][j][k - 1]
          );
      }
    }
  }
  return L[m][n][o];
}

let X = "KBCC";
let Y = "BCCD";
let Z = "ABCC";
let m = X.length;
let n = Y.length;
let o = Z.length;

document.write("Length of LCS is " + lcsOf3(X, Y, Z, m, n, o));
