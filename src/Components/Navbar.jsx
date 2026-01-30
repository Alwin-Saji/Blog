import Logo from '../assets/images/Logo.png';
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from './Image.jsx';
import { SignedIn, SignedOut, SignInButton, UserButton ,SignUp,useAuth} from '@clerk/clerk-react';
 

function Navbar() {
   const navigate = useNavigate();
   const [Open,SetOpen]=useState(false);

   const{getToken} = useAuth();

   useEffect(()=>{getToken().then((token)=>console.log(token))},[])

    return (
        <>
        {/* {Desktop and Md} */}

          <div className='relative w-full cursor-default mx-auto flex px-8 py-4 text-white shadow-md justify-between items-center'>
            <div className='flex flex-col items-center hover:scale-[1.07] transform duration-300'>
            <img src={Logo} alt="Dev Hive" width={32} height={32} />
              <div className='text-lg font-semibold unica-one-regular'>Dev Hive</div>
          </div>
        <div className='hidden sm:flex justify-between  '>
          <nav className='flex text-[#464b4b] space-x-6 sm:mr-10 text-xl mt-2 unica-one-regular'>          
            <Link to="/" className='no-underline font-medium transition-colors duration-300 hover:text-blue-400'>Home</Link>
            {/* <Link to="/post/1" className='no-underline font-medium transition-colors duration-300 hover:text-blue-400'>Post</Link> */}
            <Link to="/postlistpage" className='no-underline font-medium transition-colors duration-300 hover:text-blue-400'>PostList</Link>
            <Link to="/about" className='no-underline font-medium transition-colors duration-300 hover:text-blue-400'>About</Link>
            <Link to="/write" className='no-underline font-medium transition-colors duration-300 hover:text-blue-400'>Write</Link>
          </nav>  

              <SignedOut>
            <Link to="/login">
              <button className='bg-blue-500 hover:bg-white px-4 py-2 unica-one-bold shadow-[-0px_0px_8px_rgba(59,130,246,0.5)] hover:shadow-[0_0px_20px_rgba(59,130,246,0.7)] rounded-xl text-white no-underline text-xl transition-all duration-300 hover:text-blue-400'>Login</button>
            </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
       </div>

     {/* Mobile */}
   <div className='sm:hidden'>
        <div onClick={() => SetOpen(!Open)}>
            <div className='transition-transform duration-300 top-8 text-xl right-10 absolute z-50 cursor-pointer hover:scale-110'>
                {Open ? '✕' : '☰'}
            </div>
            <div className={`fixed w-full h-screen flex flex-col gap-6 unica-one-bold text-2xl py-16 top-0 left-[50vw] bg-slate-700 text-white shadow-lg transition-all duration-500 ease-in-out z-40 ${
                Open 
                ? ' -translate-x-0' 
                : ' translate-x-full pointer-events-none'
            }`}>
                <Link to="/" className='px-6 py-3 mx-4 rounded-lg transition-colors duration-200 hover:bg-slate-600'>Home</Link>
                <Link to="/post/1" className='px-6 py-3 mx-4 rounded-lg transition-colors duration-200 hover:bg-slate-600'>Post</Link>
                <Link to="/register" className='px-6 py-3 mx-4 rounded-lg transition-colors duration-200 hover:bg-slate-600'>Register</Link>
                <Link to="/write" className='px-6 py-3 mx-4 rounded-lg transition-colors duration-200 hover:bg-slate-600'>Write</Link>
                <button onClick={() => navigate('/login')} className='bg-blue-500 hover:bg-white py-2 unica-one-bold shadow-[-0px_0px_8px_rgba(59,130,246,0.5)] hover:shadow-[0_0px_20px_rgba(59,130,246,0.7)] rounded-xl text-white no-underline text-xl transition-all duration-300 ml-8 w-[20vw] hover:text-blue-400'>Login</button>
            </div>
        </div>
   </div>


       </div>
        </>
    )

}
export default Navbar;