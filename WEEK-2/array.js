// var animal="lion";
// var animals=["sheep" , "goat" , "dog" , "cat"];
// animal.push(animal)
// alert(animals.pop());
// alert(animals)

// let arr = ["I" , "study" , "javascript"]
// arr.splice(1,1)
// alert(arr)

// Arr.splice([start], [end])
// let Arr

// let arr=[1,2]
// alert(arr.concat([2,3]))

// var animals=["sheep" , "goat" , "dog" , "cat"];
// animals.forEach(function (animal) {
//     alert(`${animal} can also speak?`);
// });

// var animals=["sheep" , "goat" , "dog" , "cat"];
// animals.forEach((animal) => alert(`${animal} can also speak?`));

    // let user = [
    //     {id: 1, myname: "John", age:18 },
    //     {id: 2, myname: "pete", age:44 },
    //     {id: 3, myname: "steve", age:56 }
    //  ];
    //  let someUsers = user.filter((user) => user.id < 3);   
    
    //  alert(someUsers[0].myname);

    // let arr = ["bilbo" , "gandalf" , "nazgul"]
    // let lenghts = arr.map(item => item.lenght);
    // alert(lenghts)

    // let arr2= [4, 12, 33]
    // let calculate = arr2.map( item => item * 6);
    // console.log(calculate)

    // let arr = [1,2,3,4,5]
    // arr.reverse();
    // console.log(arr)

    // let names = 'bilbo , gandalf, nazgul'
    // let arr = names.split(', ');
    // arr.forEach((myname) => {
    //     console.log(`A message to ${myname}.`);
    // })

    // let arr2 = ["bilbo" , "gandalf" , "nazgul"];
    // let str = arr2.join(';');
    // let combine = arr2.join()
    // console.log(str);
    // console.log(combine); 

    class IceCreamFactory {
        constructor(){
            this.createIceCream = function (flavor) {
                let iceCream;
                if (flavor=== 'chocolate') {
                iceCream = new Chocolate()                    
                } 
                else if(flavor=== 'mint'){
                iceCream = new Mint ();                    
                }
                else if(flavor=== 'strawberry'){
                    iceCream = new Strawberry ();   
            }
            return iceCream;
            }
        }
    }
    class Chocolate{
        constructor(){
            this.icecreamFlavor = "chocolate";
            this.message = function () {
                return `You chose the ${this.icecreamFlavor} flavor`
            };
        }
    }
    class Mint{
        constructor(){
            this.icecreamFlavor = "mint";
            this.message = function () {
                return `You chose the ${this.icecreamFlavor} flavor`
            };
        }
    }
    class Strawberry{
        constructor(){
            this.icecreamFlavor = "strawberry";
            this.message = function () {
                return `You chose the ${this.icecreamFlavor} flavor`
            };
        }
    }
    
    // creating objects

    const iceCreamfactory = new IceCreamFactory();

    const chocolate =
    iceCreamfactory.createIceCream('chocolate');
    const mint = iceCreamfactory.createIceCream('mint');
    const strawberry = 
    iceCreamfactory.createIceCream('strawberry');

    console.log(chocolate.message());
    console.log(mint.message());
    console.log(strawberry.message());