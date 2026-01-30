import {SignUp} from '@clerk/clerk-react';


function Register() {
  return (
    <div className="text-white">
      <h1>Welcome to the Register Page</h1>
           <div className='flex justify-center items-center '>
        <SignUp signInUrl="/login" />
        </div>
    </div>

  );
}
export default Register;