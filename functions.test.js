const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

test('Adds 2+2 equals 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Adds 2+2 NOT equals 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

test('should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy;
});

test('user should be Nanditha PJ', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Nanditha',
        lastName: 'PJ'
    });
});

test('should be less than 1600', () => {
    const load1=100;
    const load2=150;
    expect(load1 + load2).toBeLessThan(1600);
    //idhe mari toBeLessThanOrEqual adhelam
});

test('there is no I in team', () => {
    expect('team').not.toMatch(/i/);
});

test('admin should be in usernames', () => {
    usernames = ['john','aparna','admin'];
    expect(usernames).toContain('admin');
});

//working with async data

//promise
// test('user fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser().then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         });
// });

//async await
// test('User fetched name should be Leanne Graham', async () => {
//     expect.assertions(1);
//     const data = await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham');
//   });

