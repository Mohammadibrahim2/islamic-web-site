import React from "react";
import { Link } from "react-router-dom";

const Login=()=>{

    const handlelogin=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
      
       const password=form.password.value
        console.log({email,password})
        

    }

    return(
        <div className="h-auto  w-full  mb-[200px] bg-base-200 py-10 px-10">
            <form className=" bg-white py-10 px-5 drop-shadow-2xl rounded-lg mx-auto lg:w-1/3 md:w-1/2 w-full"onSubmit={handlelogin}>
                <h1 className="text-orange-500 font-semibold text-5xl mb-7">Log in</h1>

      
                <input type="email" name="email"  placeholder="Enter your email"className=" my-5 text-white rounded-lg px-5 py-4 w-full"/>
                <input type="password" name="password"  placeholder="Enter your password"className="  text-white rounded-lg px-5 py-4 w-full mb-5"/>

               <input type="submit"placeholder="enter your password" className="hover:bg-black hover:text-orange-600 font-semibold rounded-lg w-full bg-orange-500 text-white py-3 px-5"/>
               <h2 className="text-black my-3">Create a new account<Link to="/register"> <span className="text-orange-500">Please Register</span></Link> </h2>
                <div className="divider">OR</div>
                <input type="submit"value="Google sign in"name="password" className="hover:bg-black hover:text-orange-600 font-semibold rounded-lg w-full bg-orange-500 text-white py-3 px-5"/>
            </form>
        </div>
    )

}
export default Login