fetch(
  "http://apilayer.net/api/rate?access_key=2485523a0a3dcf93f9583de545073711&use_client_ip=1&format=1"
)
  .then((response) => response.json())
  .then((data) => console.log(data.standard_rate));
