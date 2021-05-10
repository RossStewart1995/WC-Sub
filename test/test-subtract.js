var expect  = require('chai').expect;
var sub = require('../subtract');

const server = require('../server');
const request = require('supertest')(server)

function delay(interval) 
{
   return it('should delay', done => 
   {
      setTimeout(() => done(), interval)

   }).timeout(interval + 100) // The extra 100ms should guarantee the test will not fail due to exceeded timeout
}


it('Subtraction Test', function(done) {
        var x = 10;
        var y = 5;
        var a = x-y;
        expect(sub.subtract(x,y)).to.equal(a);
        done();
});

it('Subtraction Error Test Y', function(done) {
        var x = 10;
        var y = y;
        var a = "y is null";
        expect(sub.subtract(x,y)).to.equal(a);
        done();
});

it('Subtraction Error Test X', function(done) {
        var x = x;
        var y = 10;
        var a = "x is null";
        expect(sub.subtract(x,y)).to.equal(a);
        done();
});

it('Return status code 200', function(done) {
        request.get('/?x=3&y=4')
        .end((err, response) => {
                expect(response.statusCode).to.equal(200);
        });
        done();
});

delay(1000);

it('Return status code 400', function(done) {
        request.get('/?x=3')
        .end((err, response) => {
                expect(response.statusCode).to.equal(400);
        });
        done();
});






