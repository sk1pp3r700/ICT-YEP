// const greeting = (person: string) => {
//     console.log('Good day ' +person);
// };
// greeting('SKIPPER')


var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("SKIPPER", 1);
console.log(user);
