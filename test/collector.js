require('../server.js');

var expect = require("chai").expect;
var request = require("request");

describe('Link Collector API', function() {
  describe('POST link to Collector', function () {
   
    var url = "http://localhost:1337";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});