function getFlightInfo() {
  const init = {
    method: 'GET',
    headers: { datatype: 'json', data: {access_key: 'a8f3f007b5b6084882a8e2c359e3e4d5'}  },
  };
  fetch('http://api.aviationstack.com/v1/flights', init)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    });
  // $.ajax({
  //   url: 'http://api.aviationstack.com/v1/flights',
  //   data: {
  //     access_key: 'a8f3f007b5b6084882a8e2c359e3e4d5'
  //   },
  //   dataType: 'json',
  //   success: console.log
  // });
}

getFlightInfo()
