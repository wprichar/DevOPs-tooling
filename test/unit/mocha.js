var chai = require("chai"),
    expect = chai.expect;
var mosca = require('mosca');


describe( "Mosca Server", function(done){

    describe( "create mosca server", function(){
        it( "server should start", function(done){
            var output;
            var mqttServe = new mosca.Server({});
            mqttServe.on('clientConnected', function(client) {
    			console.log('client connected', client.id);
    			expect(client.id).to.equal(5);
    			done();
			});
         });
    });
});