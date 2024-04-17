// import { FaLinkedin, FaStar } from "react-icons/fa";
// import { FaClapperboard } from "react-icons/fa6";

import { SiAlteryx } from "react-icons/si";

// const App = () => {


//   const users = ['ram', 'shyam', 'hari','sita','sina','lina'];
//   //users.push('lio');
//   // users.push('lio');
//   // users.unshift('ari');
//   // users.pop();
//   // users.shift()
//   console.log(users.includrs('ram'));
//   // ascending order bata sorting hunchha
//   console.log(users.sort());
//   users.splice(4, 1);
//     ///mutable
//   ///immutable

// let greet = 'hello jee';
// greet[1] = 'r';
// console.log(greet);
// // const users = ['ram', 'shyam', 'hari', 'sita', 'gita'];
// // users[1] = 'lita';
// // console.log(users);

//   console.log(users);


//   // users.pop();
//   users.shift()
//   //const position = users.at(2);
//   // console.log(users);

//   // console.log(users.length);
//   // console.log(users.at(2));
//   // console.log(users.concat('lio'));
//   console.log(users);
// let i=0;
// while(i<20)
// {
//   if(i%2==0)
//   {
//     console.log(i + "is an even number");
//   }
//   else{
//     console.log(i + "is a odd number");
//   }
//   i++
// }

// for(let i=0; i<=15;i++)
// {
//   if(i% 5 && i % 3===0)
//   {
//     console.log( i + "is fizz buzz");
//   }
//   else if(i % 3 ===0)
//   {
//     console.log( i +"is fizz")
//   }
//   else if(i % 5 ===0)
//   {
//     console.log( i + "is buzz");
//   }
// }
// =================================================================
// let calcOdd = 0;
// let calcEven = 0;
// for(let i=0; i<=15;i++)
//   {
//     if(i % 2===0)
//     {
//       console.log(i);
//       calcEven+= i;
//     }
//     else if(i % 2!==0)
//     {
//       console.log(i);
//       calcOdd+= i;
//     }
//   }
//   console.log("Sum of odd Number is" + calcOdd);
//   console.log("Sum of even Number is" + calcEven);

// =================================================================
// const App = () =>{
//   let total = 0;
//   let avg=0;
//   const numbers = [11, 22, 44, 55, 77];
//   for(let i of numbers)
//   {
//     console.log(i);
//     total+= i;
   
//   }
//   console.log(total);
//   console.log(avg=total/numbers.length);
// }
// App()
// =================================================================
// const App = () => {
//   const ratings = [4, 4, 3, 2, 5, 1, 2, 5, 5, 3];
//   const numbers = [11, 22, 44, 55, 77];

//   const ni = numbers.forEach((rat, i) => {
//     console.log(rat); // Single content display
//     console.log(i);   // Index number 
//   });
// };

// App(); // Call the function to execute it

// =================================================================
// const numbers = [11, 22, 44, 55, 77];
//   const somes = numbers.filter((n) => {
//     return n > 50;
//   });
//   console.log(somes);

// ==========================
// creating objects
// const person = {
//   name: 'Jee',
//   age: 25,
//   address: {
//     site: 'ktm'
//   },
// occupation: 'Software Engineer',
// habits: ['sing', 'dance']
// };
// const medBlog = {
//   first:'Members only story',
//   label: 'April Brings America\’s First Total Eclipse Since 2017: What You Need to Know',
//   author: {
//     name: 'Rebecca Jean T',
//     button:'follow',
//     blogLength: '7 min read',
//     createdAt: 'Mar 8, 2024'
//   },
//   liked: '3K',
//   comment: '44',
//   detail: 'In just one month the skies of North America, including Mexico, the United States, and Canada, will be graced with a total solar eclipse. This is the first total eclipse. ',
// };

//   return (
//      <div>
// {/* <h1 className="text-pink-900 text-2xl uppercase font-bold">Hello Jee</h1>
//       <div class="container">
//         <div class="container-1">
//           <div class="member">
//             <FaStar></FaStar>
//             <h1>{medBlog.first}</h1>
//           </div>
//           <div class="title">
//               <h1>{medBlog.label}</h1>
//           </div>
//           <div class="profile">
//             <div class='image'>
//               <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
//             </div>
//             <div class="info-1">
//                <h1>{medBlog.author.name}</h1>
//             <div class="button">
//                 <h1>{medBlog.author.button}</h1>
//             </div>
          

//             </div>
            
//           </div>
//           <div class="footer">
            
//           </div>
//         </div>

//       </div>
    

//  */}
// =====
// accessing array in react
// const App = () => {

//   const person = {
//     name: 'hari',
//     habits: ['sing', 'dance']
//   };

//   return (
//     <div>
//       {person.name}
//       <br />
//       {person.habits.map((a, i) => {
//         return <div key={i}>
//           <h1>{a}</h1>
//         </div>
//       })}
//     </div>
//   )
// }
// export default App

// const App = () => {

//   const data = [
//     {
//       "id": 1,
//       "todo": "Do something nice for someone I care about",
//       "completed": true,
//       "userId": 26
//     },
//     {
//       "id": 2,
//       "todo": "Memorize the fifty states and their capitals",
//       "completed": true,
//       "userId": 48
//     },
//     {
//       "id": 3,
//       "todo": "Watch a classic movie",
//       "completed": false,
//       "userId": 4
//     },
//   ];

//     return (
//       <div className="p-10">
//         {data.map((d) => {
//           return <div key={d.id} className="shadow-xl p-2 bg-pink-100 mb-10 hover:scale-105">
//             <h1 className="text-[20px] font-bold">{d.todo}</h1>
//             <p>userId: {d.userId}</p>
//             <input className={d.completed ? 'animate-bounce' : 'animate-none'} type="checkbox" checked={d.completed} />
//           </div>
//         })}
  
//       </div>
//     )
//   }
//   export default App

// const App = () => {
//   const products = [
//     {
//       "id": 59,
//       "title": "Spring and summershoes",
//       "price": 20,
//       "quantity": 3,
//       "total": 60,
//       "discountPercentage": 8.71,
//       "discountedPrice": 55,
//       "thumbnail": "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
//     },
//     {
//       "id": 88,
//       "title": "TC Reusable Silicone Magic Washing Gloves",
//       "price": 29,
//       "quantity": 2,
//       "total": 58,
//       "discountPercentage": 3.19,
//       "discountedPrice": 56,
//       "thumbnail": "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg"
//     },
//   ];

//   return (
//     <div >
//    {products.map((p)=>{
//     // return <div key={p.id}>
//     //   <p>Title:{p.title}</p>
//     return <div key={p.id} className="shadow-xl p-2 bg-gray-100 mb-10  ml-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 ">
//     <h1 className="text-[20px] font-bold">{p.title}</h1>
//       <p>Price:{p.price}</p>
//       <p>Quantity:{p.quantity}</p>
//       <p>DiscpuntPercentage:{p.discountPercentage}</p>
//       <p>DiscountedPrice:{p.discountedPrice}</p>
//       {/* <img src={p.thumbnail} alt={p.title} /> */}
//       <img src={p.thumbnail} alt={p.title} className="w-24 h-24" />
       
//     </div>
//    })}

//     </div>
//   )
// }
// export default App


// 


// const App = () => {

//   const colors = ['green', 'black', 'blue', 'kio'];
//   const newColors = ['golden', 'purple', 'tomato'];

//   const allList = [...colors, ...newColors, 'lio'];

//   const person = {
//     name: 'ram',
//     age: 90
//   };
  
//   delete person['name']

//   const newPerson = { ...person, g: 90, c: 100 };
  

//   console.log(newPerson);



//   return (
//     <div >

//     </div>
//   )
// }
// export default App

// const App = () => {
//   const person ={
//     name: 'ram',
//     age: 90
//   };
//   const{age, name} = person;
//   const data ={
//     address: [
//       {ad1:{road:'90km', city:'ktm'} }
//     ]
//   };
//   console.log(age);
//   return (
//     <div>

//     </div>
//   )
// }
// export default App

// const App = () => {

//   const person = {
//     a: 9,
//     name: 'hari',
//     age: 90
//   };


//   // const { age, name } = person;
//   const data = {
//     address: [
//       { ad1: { road: '90km', city: 'ktm' } }
//     ]
//   };

//   const {address: [{ad1: {city}}]} =data;
//   // const { address } = data;
//   // const [a] = address;
//   // const { ad1 } = a;
//   // const { city } = ad1;



//   console.log(city);

//   return (
//     <div >

//     </div>
//   )
// }
// export default App



// -function

//  const App = () => {
//   const greet = (a) =>{
//     if(a<=12)
//     {
//       return <h1>Good Morning</h1>
//     }
//     else if(a>12 && a<=18)
//     {
//       return <h1>Good Afternoon</h1>
//     }
//     else if(a>18 && a<=24)
//     {
//       return <h1>Good Evening</h1>
//     }
//     else if(a>24)
//     {
//       return <h1>Good Night</h1>
//     }
//   } 
//   greet(12);
//   return(
//     <div>

//     </div>
//   )
//  }
//  export default App


//  import React from 'react';

// const App = () => {
//   const getGreeting = (time) => {
//     if (time>= 0 && time < 12) {
//       return 'Good Morning';
//     } else if (time >= 12 && time < 18) {
//       return 'Good Afternoon';
//     } else if (time >= 18 && time < 24) {
//       return 'Good Evening';
//     } else {
//       return 'Good Night';
//     }
//   };
//   const currentHour = 15; 
//   const greeting = getGreeting(currentHour);
//   return (
//     <div>
//       <h1>{greeting}</h1>
//     </div>
//   );
// };

// export default App;

// ========================
// const App = () => {
//      let sum=0;
//      let avg=0;
//   const greet =(a, ...args) =>{
//   for(let i of args)  {
//        sum=sum+i;
// }
// return sum;
// avg=sum/args.length;
// return avg;

//   }
//   const numbers= greet(70,11,22,44,55,66,77,88,90,99,100);
// return(
//     <div> 
//       <h1>{sum}</h1>
//       <h1>Hello</h1>
//       <h1>{avg}</h1>
//     </div>
//   )
// }
// export default App

// ========================
// const App = () => {
  // console.log(window);
  // alert("Hello world")
  // to take an input from user we use prompt
  // prompt("What is your name");
  // window.confirm("Please enter your name");
  // const val= prompt("What is your name?");
  // console.log( typeof(val));-->to chcek type of value

//   const App = () => {
//   const age = prompt('What is your age ?')
//   if (age < 18) {
//     alert('Teenager')
//   } else if (age >= 18 && age < 50) {
//     alert('Adult')
//   } else if (age >= 50) {
//     alert('Old')
//   }
//  return(
//     <div>
  
//     </div>
//   )
// }
// export default App;

// ======================== event handlers(yeta rakheko bhanda dherai chha aru pani herne) =================
// const App = () => {


//   const someMessage = (a) => {
//     alert('hello jee');
//   }
//   const handleCopy = () => {
//     alert('please dont copy it');
//   }
//   return (
//     <div className="p-2">

//       {/* <button onClick={someMessage} className="bg-black
//       text-white px-2 py-2 rounded-lg" >Click On</button> */}

//       {/* <button onMouseDown={someMessage} className="bg-lightgreen
//       text-white px-2 py-2 rounded-lg" >Click On</button>

//      <button onKeyDown={someMessage} className="bg-lightgreen
//       text-white px-2 py-2 rounded-lg" >Click On</button> */}
//     <p onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Nulla eos voluptatibus maiores architecto officiis rem pariatur soluta eum quas eligendi?</p>

//     </div>
//   )
// }
// export default App


// // ===============================================
// const App = () => {


//   const someMessage = (a) => {
//     alert('hello jee');
//   }
//   const handleCopy = () => {
//     alert('please dont copy it');
//   }

//   const handleClickOne = (e, a) => {
//     console.log(e);
//     console.log(a);
//   }
//   window.addEventListener('', (e) => {
//     console.log('hello jee');
//   });


//   return (
//     <div className="p-2">

//       <div>
//         <input onKeyDown={(e) => {
//           console.log(e.key);
//         }} className="border-2 border-black" type="text" />
//       </div>
//       <br />


//       <button onClick={(e) => handleClickOne(e, 90)} className="bg-black text-white px-2 py-2 rounded-lg" >Click On 1</button>
//       <br />
//       <br />

//       <button onDoubleClick={someMessage} className="bg-black text-white px-2 py-2 rounded-lg" >Click On</button>

//       <p onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos voluptatibus maiores architecto officiis rem pariatur soluta eum quas eligendi?</p>

//     </div>
//   )
// }
// export default App

// ================================================================


// ===== from here react is started =================================
import React from 'react'
import Home from './features/home/Home'
import Header from "./ui/Header";
import Loginform from "./features/home/Loginform";

const App = () => {
  return (
    <div>
      {/* <Header />
      <Home /> */}
      <Loginform />
    </div>
  )
}

export default App
