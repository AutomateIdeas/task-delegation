import React from "react"
import { Input } from "@nextui-org/react"
import Logo from "../Image/Logo.png"

function Login() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] md:w-2/5 w-11/12 ">
          <div className="m-1 bg-white rounded-[23px] flex justify-center items-center flex-col px-4">
            <div className="md:text-5xl text-4xl font-extrabold my-4">
              Log in
            </div>
            <div className="w-full">
              <Input
                type="Email"
                variant="bordered"
                placeholder="Email"
                isInvalid={false}
                errorMessage="Please enter a valid email"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
