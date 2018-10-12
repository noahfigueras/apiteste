const axios = require('axios');

let url = 'http://api.thingspeak.com/channels/228790/feeds.json?api_key=VPJQCNSATG2O9FYQ&results=1';

axios.get(url)
  .then(response => {
    let data = response.data;
    console.log('ID: ' + data.channel.name)
    console.log('ID de leitura: ' + data.feeds[0].entry_id)
    console.log('A temperatura atual é ' + data.feeds[0].field2);
    console.log('A radiação atual é ' + data.feeds[0].field1)
    console.log('A umidade atual é ' + data.feeds[0].field3)
    console.log('Ultima leitura em ' + data.feeds[0].created_at)
  })
  .catch(error => {
    console.log(error);
  });