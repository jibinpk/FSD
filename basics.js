// let x=10;
// console.log(x);

// {
//     let x=20;
//     console.log(x);
// }

// a=true;
// console.log(a);
// console.log(typeof(a));

// a=1;
// b=++a;
// console.log(a,b);

// temp=29;
// if(temp>30)
// {
//     console.log("it is a hot day");

// }
// else if(temp<=30 && temp>20)
// {
//     console.log("it is a pleasent day");

// }
// else
//     console.log("it is a cold day")

// for(let i=0; i<=5; i++)
// {
//     console.log(i);
// }
// let i=0
// while(i<=5)
// {
//     console.log(i);
//     i++;
// }
// i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<=3);


// let i=0;
// while(i<=15)
// {
//     if(i%2==0)
//         console.log(i,"even");
//     else
//         console.log(i,"odd");
//         i++;
// }


let fruits=["apple", "orange", "banana" ];
// console.log(fruits);
// console.log(fruits.length);
// fruits[0]="banana";
// console.log(fruits);
// for(i=0;i<fruits.length;i++)
//     console.log(fruits[i]);
// fruits.pop());
// fruits.push("kiwi");
// fruits.unshift("grape");
// fruits.shift();
// fruits.unshift("grape");
// console.log(fruits);
// function greet(name)
// {
//     console.log("Welcome "+" "+name+"!");
// }
// greet("Jibin");
// greet("Arjun");


// function add(num1,num2)
// {
//     console.log(num1+" + "+num2+" = "+(num1+num2));
// }
// add(10,35)

// function add(a,b)
// {
//      return a + b;
// }
// console.log("sum : "+add(2,5));

// let person={
//     name:'John',
//     age:34,
//     city:'Kozhikode',
    
// };
// console.log("Name : " +person.name);
// console.log("Age : "+person.age);
// console.log("City : "+person.city);


// let person=[
// {
//     name:'John',
//     age:34,
//     city:'Kozhikode',
    
// },
// {
//     name:"Tania",
//     age:35,
//     city:"Kochi",
// },
// {
//     name:"Samantha",
//     age:23,
//     city:"Trivandrum",
// }
// ];
// for(let i=0;i<person.length;i++)
// {
// console.log("Name : " +person[i].name);
// console.log("Age : "+person[i].age);
// console.log("City : "+person[i].city+"\n");
// }






// var add=(a,b)=>{
//     var sum=a+b
//     console.log(sum);
//     console.log(`sum is ${sum}`);
// }
// add(3,5);

// var [a,b,c,d]=["apple","banana","cardmom","durian"];
// console.log(a);
// console.log(b);


// array spread operator

// var a=[1,2,3,4];
// var b=[5,6,7];
// var c=[...a,...b];
// console.log(c);

var [a,b,...c]=[1,2,3,4,5,6];
console.log(a,b);
console.log(c);
