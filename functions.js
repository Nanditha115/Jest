const axios= require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    // isNull: () => undefined    -- fail aidum
    checkValue: x => x,
    createUser: () => {
        const user = {firstName: 'Nanditha'};
        user['lastName'] = 'PJ';
        return user;
    },

    fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error')
};

module.exports = functions;