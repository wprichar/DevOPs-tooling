describe('mocha spec examples', function() {
 
    it('should get home page', function* () {
        yield browser.url('/');
        expect(yield browser.getTitle()).toBe('Node.js');
        expect(yield browser.getText('#home-intro')).toContain('JavaScript runtime');
    });
 
    it('should go to the doc page', function* () {
        yield browser.click('=API Docs');
        expect(yield browser.getTitle()).toContain('Manual');
    });
 
    it('should return to the home page', function* () {
        yield browser.click('=V8');
        expect(yield browser.getText('#apicontent h1')).toContain('V8');
    });
});