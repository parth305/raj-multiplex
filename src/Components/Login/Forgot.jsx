import React from 'react'
import { Link } from 'react-router-dom'

const Forgot = () => {
    return (
        <div
            className="mx-auto flex my-16 max-w-lg items-center justify-center text-black shadow-2xl py-7">
            <section className="flex w-full flex-col space-y-2 px-5">
                <div className="text-center text-4xl font-medium my-9">Forget Password</div>

                <div className="w-full px-1">
                    <input className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="email" name='email' type="email" placeholder='Enter Your Email' />
                </div>
                <div className="text-center">OR</div>
                <div className="w-full px-1">
                    <input className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="phone" name='phone' type="phone" placeholder='Enter Your Phone number' />
                </div>
                <div className="w-full px-1">
                    <input className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="email" name='email' type="email" placeholder='Enter OTP' />
                </div>

                <button className="rounded-sm text-white bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700">
                    Continue
                </button>
                <section className="flex flex-col space-y-5">

                    <p className="text-center text-lg">
                        Already have an Account? &nbsp;
                        <Link to={"/Login"}><a href="#" className="font-medium  text-indigo-500 underline-offset-4 hover:underline" >Login</a ></Link>
                    </p>
                </section>
            </section>
        </div>
    )
}

export default Forgot
