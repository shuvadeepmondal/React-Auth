
import { Link } from "react-router-dom"

function ForgotPass(){
    return(
    <div className="  bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
          <h1 className="text-5xl font-semibold">Forgot Password</h1>
               <div className="mt-8">
                    <div>
                     <label className="text-lg font-medium">Email</label>
                     <input className='w-full border-2 border-gray-100 rounded-2xl p-3 mt-1 bg-transparent' placeholder="Enter Your Email" type="email"/>
                    </div>
               </div>
               <div className="mt-8 flex flex-col gap-y-4">
                    <button className=" active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-2xl  bg-blue-700 text-white text-lg font-bold">Find Account</button>
               </div>
               <div className='mt-8 flex justify-center items-center'>
                    <p className="font-medium text-base">Don't Have an Account?</p>
                    <button className="text-blue-700 text-base font-medium ml-2"o ><Link to ='/Register'>Sign Up</Link></button>
                </div> 
    </div>
    )
}

export default ForgotPass