// let Admin = ("John");
// let newName = ("John")

// alert(Admin)



// let balance = 2000
// let amount = 300
// function withdraw(balance, amount) {
//     if (amount > balance) {
//         return("insufficient funds")
//     } else {
//         if (amount < balance) {
//             return("successful")
//     }
//     }
// }
// let response = withdraw(amount, balance)
// alert(response)

// let sum = 0
// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for (let i = 20; i < 20; i++);
//     alert (array)


// var side1 = 7; 
// var side2 = 3.5; 
// var area =  Math((side2 / 2) *side1);
// alert(area);

class users {
    constructor(email, myname, login){
        this.email = email;
        this.myname = myname;
        this.login = login;
        this.loginMessage = function(){
            if (this.login=== true) {
                return `${myname} has successfully logged in`
            } else {
                return `please you need to login`
            }
        }
    }
}
const skipper = new users("eandre70@gmail.com" , "skipper", true);
const ik = new users("erikumeikechukwu@gmail.com" , "ik", false );

console.log(skipper.loginMessage());
console.log(ik.loginMessage());