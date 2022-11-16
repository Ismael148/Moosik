import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://shazam-core.p.rapidapi.com/v1/charts/world',
  headers: {
    'X-RapidAPI-Key': 'b28c43b316mshd85d16b2de5809ap17b5f9jsn24712d699240',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
