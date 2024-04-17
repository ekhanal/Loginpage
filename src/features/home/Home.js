import React from 'react';

const Home = () =>{
    return(
        <div className='max-w-[500px] bg-slate-300 flex justify-end items-end'>
            <div className="bx h-10 w-20 bg-red-500">
            <h1>Box 1</h1>
            </div>
            <div className="bx h-10 w-20 bg-purple-500">
            <h1>Box 2</h1>
            </div>
            <div className="bx h-10 w-20 bg-gray-500">
            <h1>Box 3</h1>
            </div>
            <div className="bx h-10 w-20 bg-pink-500">
            <h1>Box 4</h1>
            </div>
            <div className="bx h-10 w-20 bg-orange-500">
            <h1>Box 5</h1>
            </div>
          
        </div>
    )

}
export default Home