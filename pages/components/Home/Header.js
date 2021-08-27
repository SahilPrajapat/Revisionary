import Button from "@material-tailwind/react/Button";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import {auth} from "./../../../firebase";


function Header() {

  const router = useRouter();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(authUser) {
          // user has logged in.....
          setUser(authUser);
          // console.log(user);
          // const displayName = user.displayName;
        }else {
          //user has logged out....
          setUser(null);
        }
      })
  
      return () => {
        //perform some cleanup action
        unsubscribe();
      }
    }, [user, email]);

    function logout(){
      auth.signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

    }

  return (
    <header className="sticky top-0 grid grid-cols-3 px-4 py-4 bg-regal-blue">
      {/* left */}
      <div className="flex flex-row">
        <Button
          buttonType="outline"
          color=""
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="md:inline-flex h-15 w-20 border-0 bg-blue-800"
          onClick={() => router.push("/")}  
        >
          <h1 className="text-white text-lg">Home</h1>
        </Button>
        <Button
          buttonType="outline"
          color=""
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="md:inline-flex h-15 w-28 border-0 mx-9 sm:hidden bg-blue-800"  
        >
          <div onClick={() => router.push('/courses')}>
            <h1 className="text-white text-lg">Courses</h1>

          </div>
        </Button>

        <Button
          color="white"
          buttonType="contained"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="md:inline-flex h-10 w-20 border-0 sm:hidden bg-white"
        >
          <h1 className="text-blue-800 justify-center">Add +</h1>
        </Button>
      </div>

      <div className="justify-self-center px-20">
        <h1 className="text-white font-bold text-2xl cursor-pointer align-middle">
          Revisionary
        </h1>
      </div>

      {/* right */}
      
      <div className="flex items-center justify-end cursor-pointer" onClick={!user ? () => router.push("Signin") : logout}>
        {/* <img
          loading="lazy"
          className="cursor-pointer h-11 w-11 rounded-full ml-2 bg-blue-800"
             src={session?.user?.image}
          alt=""
        /> */}
        <Button
          color="white"
          buttonType="contained"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="h-10 w-20 border-0 sm:hidden bg-white"
        >
        <p className="text-blue-800 ">
            {user ? `${user.displayName}` : "Sign In"}
        </p>
        </Button>
      </div>
    </header>
  );
}

export default Header;
