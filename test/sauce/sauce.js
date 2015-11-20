var wd = require('wd'),
    chai = require('chai'),
    expect = chai.expect,
    _ = require('underscore'),
    fs = require('fs'),
    path = require('path'),
    uuid = require('uuid-js');

var VARS = {};

// This assumes that selenium is running at http://127.0.0.1:4444/wd/hub/
var noop = function() {},
    b = wd.remote();

describe('Test message sent', function() {

  this.timeout(60000);

  it('test message is sent and messageCount is incrumented', function(done) {

    b.chain(function(err) {
      done(err);
    })
    .init({
      browserName: 'chrome'
    })
    .get("http://deops-architecture.mybluemix.net/")
    .elementById("message", function(err, el) {
      b.next('clear', el, function(err) {
        b.next('type', el, "test", noop);
      });
    })
    .elementById("send", function(err, el) {
      b.next('clickElement', el, noop);
    })
	.elementById('messageCount').should.become(1)
    .close(function(err) {
      done(err);
    });

  });
});

afterEach(function() {
  b.quit();
});
