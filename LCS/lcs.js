let a = process.argv.slice(2);
function LCS(n) {
  var o = n.length;
  let g = n[0];
  var l = g.length;
  let r = "";
  for (let t = 0; t < l; t++)
    for (let e = t + 1; e <= l; e++) {
      var s = g.substring(t, e - t);
      let l = 1;
      for (l = 1; l < o && n[l].includes(s); l++);
      l == o && r.length < s.length && (r = s);
    }
  console.log(r);
}
a.length <= 0 ? console.log("") : LCS(a);
