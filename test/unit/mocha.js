var chai = require("chai"),
    expect = chai.expect;
var mosca = require('mosca');


describe( "Mosca Server", function(done){

    describe( "create mosca server", function(){
        it( "server should start", function(done){
            var output;
            var mqttServe = new mosca.Server({});
            server.on('ready', setup);
            function setup() {
  					console.log('Mosca server is up and running');
  					expect(client.id).to.equal(5);
    				done();
			}
         });
    });
});