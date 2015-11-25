var chai = require("chai"),
    expect = chai.expect;
var request = require('request');
before(function() {

})

after(function() {

})

describe( "Query database to confirm message was sent ", function(){

        it( "send request ... if id property exists message was sent to database", function(done){
              this.timeout(10000);
              request.get(process.env.url, function (err, res, body){
                     expect(res.statusCode).to.equal(200);
                     output = JSON.parse(res.body);
                     expect(output.rows[0].id).to.equal(null);
                     done();
               });
         });

});
