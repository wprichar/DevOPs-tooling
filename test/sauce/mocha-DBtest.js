var chai = require("chai"),
    expect = chai.expect;
var mosca = require('mosca');
var request = require('request');
before(function() {

})

after(function() {
  
})

describe( "Query database to confirm message was sent ", function(done){

        it( "send request", function(done){
              request.get('https://c7bd8318-c9eb-473b-b9f2-7f83a88a0b55-bluemix:3c8116e9eddcb29c467c0dfd66dc34ac5daa754a484852450979e5ba85791409@c7bd8318-c9eb-473b-b9f2-7f83a88a0b55-bluemix.cloudant.com/my_sample_db/_all_docs', function (err, res, body){
               expect(res.statusCode).to.equal(400);
               expect(res.body).to.equal('wrong header');
               done();
               });
         });

});