function findLCS(arr) {
  let n = arr.length;
  let s = arr[0];
  let len = s.length;
  let res = "";

  for (let i = 0; i < len; i++) {
    for (let j = i; j <= len; j++) {
      stem = s.substring(i, j);
      let k = 1;
      for (k = 1; k < n; k++) {
        if (!arr.includes(stem)) break;
      }
      if (k == n && res.length < stem.length) res = stem;
    }
  }
  console.log(res);
}
