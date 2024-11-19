// PARAMETERIZED FUNCTION


// import React from 'react'

// const App = () => {
//   const ClickHandler = () => {
//     console.log("Button Clicked");
    
//   }
//   return (
//     <div className="w-[80%] mx-auto rounded mt-10 bg-slate-300 p-10"><div>App</div>                  
//     <button onClick={ClickHandler} className='px-4 py2 bg-red-500'>Click ME</button>
//     </div>
//   )
// }

// export default App



// add one more function as wrapper function in ClickHandler



// import React from 'react'

// const App = () => {
//   const ClickHandler = (msg) => {
//     console.log(msg);
//   }

//   const wrapper = () => {
//     console.log("Button Clicked");
    
//   }
//   return (
//     <div className="w-[80%] mx-auto rounded mt-10 bg-slate-300 p-10"><div>App</div>                  
//     <button onClick={wrapper} className='px-4 py2 bg-red-500'>Click ME</button>
//     </div>
//   )
// }

// export default App



// making it a parameterised function by removing wrapper class and 
// adding direct anonymous function in the Event Listener





import React from 'react'

const App = () => {
  const ClickHandler = (msg) => {
    console.log(msg);
  }

  // const wrapper = () => console.log("Button Clicked");
    

  return (
    <div className="w-[80%] mx-auto rounded mt-10 bg-slate-300 p-10"><div>App</div>                  
    <button onClick={() => console.log("Button Clicked")} className='px-4 py2 bg-red-500'>Click ME</button>
    <h1>{import.meta.env.VITE_PASSWORD}</h1>
    </div>
  )
}

export default App