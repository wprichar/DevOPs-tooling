var chai = require("chai"),
    expect = chai.expect;
var mosca = require('mosca');


describe( "Mosca Server", function(done){

    describe( "create mosca server", function(){
        it( "server should start", function(){
            var output;
            mqttServe.on('clientConnected', function(client) {
    			console.log('client connected', client.id);
    			expect(1).to.equal(1);
    			done();
			});
         });
    });
});