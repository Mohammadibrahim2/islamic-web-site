import React from "react";
import { Link } from "react-router-dom";

const Register=()=>{

    const handlesignup=(event)=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        console.log({email,password})
      

    }

    return(
        <div className="h-[70vh]  w-96 mx-auto mb-[200px] bg-white">
            <form className="bg-base-200 py-5 px-3 drop-shadow-2xl"onSubmit={handlesignup}>
                <h1 className="text-orange-500 font-semibold text-3xl my-5">Register</h1>

                <input type="email" name="email"  placeholder="Enter your email"className="px-5 py-3 w-full"/>
                <input type="password" name="password" placeholder="Enter your password" className="px-5 py-3 w-full my-5"/>
                <input type="submit"placeholder="enter your password" className="w-full bg-orange-500 text-white py-3 px-5"/>
                <h1 className="text-white my-3">Already have an account<Link to="/login"> <span className="text-orange-500">Please login</span></Link></h1>
                <div className="divider">OR</div>
                <input type="submit"value="Google sign in"name="password" className="w-full bg-orange-500 text-white py-3 px-5"/>
            </form>
        </div>
    )

}
export default Register