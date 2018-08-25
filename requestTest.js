
var request = require('request');
request('http://api.thingspeak.com/channels/228790/feeds.json?api_key=VPJQCNSATG2O9FYQ&results=1', function (error, response, body) {
	//console.log('error:', error); 
	//console.log('statusCode:', response && response.statusCode); 
	var dadoLido = JSON.parse(body);
	console.log(dadoLido["channel"]["name"]); 
	console.log('ID de leitura: ' + dadoLido['feeds'][0].entry_id)
	console.log('A temperatura atual é ' + dadoLido['feeds'][0].field2);
	console.log('A radiação atual é ' + dadoLido['feeds'][0].field1)
	console.log('A umidade atual é ' + dadoLido['feeds'][0].field3)
	console.log('Ultima leitura em ' + dadoLido['feeds'][0].created_at)

});
