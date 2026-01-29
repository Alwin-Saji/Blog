import { SignedIn, SignedOut, SignInButton, UserButton ,SignIn} from '@clerk/clerk-react';

function Login() {
  return (
    <div>
        <div className='mt-10 flex justify-center items-center '>
        <SignIn signUpUrl="/register" />
        </div>
    </div>
  );
}
export default Login;