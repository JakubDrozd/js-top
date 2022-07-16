fetch("http://api.icndb.com/jokes/random/10")
  .then((res) => {
    res.json().then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });
