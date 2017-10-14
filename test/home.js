var assert = require('assert');
var cheerio = require('cheerio');
var fs = require('fs');

describe('Home page', () => {
  const indexPage = fs.readFileSync('index.html', 'utf8');
  const $ = cheerio.load(indexPage);

  it('should have the title text', (done) => {
    assert.equal($('p').text(), "What a nice day!");
    done();
  });

  it('should have the footer text', (done) => {
    assert.equal($('footer').text(), 'Enjoy your life.');
    done();
  });

});
