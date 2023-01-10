const revString = require('./revString');

test('revString fn exists', () => {
    expect(revString).toBeDefined();
});

test('string reverses', () => {
    expect(revString('hello')).toEqual('olleh');
});
