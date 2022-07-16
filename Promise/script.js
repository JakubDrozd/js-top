fetch("http://api.icndb.cosm/jokes/random/10")
  .then((res) => {
    res.json().then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });
