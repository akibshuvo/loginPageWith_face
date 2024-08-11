import { useState } from 'react'
import { IoMdEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";

import open from './assets/open.jpg'
import close from './assets/close.jpg'


function App() {

  const [show, setShow] = useState(false)


  return (
    <>
      <div className='flex justify-center w-full h-screen bg-[#30776c]'>
        <div className='w-[500px] h-[640px] bg-[#f2f4f8] shadow-lg pt-10 px-8 mt-[8%] rounded-xl'>
        
        
          <div className='w-44 h-44 border-2 border-[#2e9a7a] rounded-full flex ml-[50%] translate-x-[-50%]'>
         {show? <img className='rounded-full' src={open}  />:<img className='rounded-full' src={close}  />} 
          
          </div>
          <h2 className='flex justify-center font-bold text-3xl mb-6 mt-2'>Log In</h2>

        
          
         
          <label>Name:</label>
          <input type="text" className='border outline-none w-full px-4 py-2 mt-1 mb-4' placeholder='Enter Your Name'/>
        
        <div className='relative'>
          <label>Password:</label>
          <input type={show?'text' : 'password'} className='border outline-none w-full px-4 py-2 mt-1' placeholder='Enter Your Password'/>
          <p className='flex justify-end font-mono'>Forget Password</p>

          {show
          ?
          <IoIosEye onClick={()=>setShow(false)} className='absolute top-[42px] right-5'/>
          :
          <IoMdEyeOff onClick={()=>setShow(true)} className='absolute top-[42px] right-5'/>
        }
          </div>


          <button className='bg-[#2e9a7a] text-white w-full mt-12 py-2 font-semibold'>LogIn</button>
          <p className='flex justify-center mt-2 font-mono'>Already Have an account</p>
        
          </div>
          
         
         
        </div>
      
    
    </>
  )
}

export default App



// import { useState } from 'react';
// import { IoMdEyeOff, IoIosEye } from "react-icons/io";

// const InputField = ({ label, type, value, onChange, placeholder, icon, iconClick }) => (
//   <div className='mb-4 relative'>
//     <label>{label}</label>
//     <input 
//       type={type} 
//       value={value} 
//       onChange={onChange} 
//       className='border outline-none w-full px-4 py-2 mt-1' 
//       placeholder={placeholder} 
//     />
//     {icon && (
//       <span className='absolute top-[42px] right-5 cursor-pointer' onClick={iconClick}>
//         {icon}
//       </span>
//     )}
//   </div>
// );


// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <div className='flex justify-center w-full h-screen bg-[#30776c]'>
//       <div className='w-[500px] h-[640px] bg-[#f2f4f8] shadow-lg pt-10 px-8 mt-[8%] rounded-xl'>
//         <div className='w-40 h-40 border-2 border-[#2e9a7a] rounded-full mx-auto'></div>
//         <h2 className='text-center font-bold text-3xl my-6'>Log In</h2>

//         <InputField 
//           label="Name:" 
//           type="text" 
//           placeholder="Enter Your Name" 
//         />

//         <InputField 
//           label="Password:" 
//           type={show ? 'text' : 'password'} 
//           placeholder="Enter Your Password" 
//           icon={show ? <IoIosEye /> : <IoMdEyeOff />}
//           iconClick={() => setShow(!show)}
//         />
//         <p className='text-right font-mono mb-4 cursor-pointer'>Forget Password</p>

//         <button className='bg-[#2e9a7a] text-white w-full py-2 font-semibold'>Log In</button>
//         <p className='text-center mt-2 font-mono'>Already Have an account</p>
//       </div>
//     </div>
//   );
// }

// export default App;

