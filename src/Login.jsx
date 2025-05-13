import React, { useState } from "react";
import {
  IconBrandGoogle,
  IconBrandApple,
  IconBrandFacebook,
} from "@tabler/icons-react";
import ForgotPasswordModal from "./Modals/ForgotPasswordModal";
import ResetPasswordModal from "./Modals/ResetPasswordModal";
import CheckEmailModal from "./Modals/CheckEmailModal";
import PasswordChangedModal from "./Modals/PasswordChangedModal";
import { useNavigate } from "react-router-dom";

function Login() {
  const [modal, setModal] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="">
      {/* Header Section (Always Visible) */}
      <div className="flex gap-2 md:flex-row md:justify-between justify-center p-5">
        <img src="./logo.png" className="h-20 w-25" />
        <p className="mt-3 text-center">Don't have an account? Register Now</p>
      </div>

      {/* Login Form (Hidden When Modal is Open) */}
      {modal === null && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 flex-col rounded-lg shadow-lg">
          <div className="bg-white p-5 flex flex-col gap-2">
            <div>
              <p className="text-2xl font-bold text-center text-[#151C39]">
                Login
              </p>
              <p className="text-[#635E5E] text-center text-sm">
                Enter your details to log in to your account.
              </p>
            </div>
            <div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-bold text-[#151C39]">
                  Email/Phone Number
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder=""
                  className="w-96 mb-3 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 font-bold text-[#151C39]">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder=""
                  className="w-96 mb-4 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <p
                  className="flex justify-end text-[#151C39] cursor-pointer"
                  onClick={() => setModal("forgotPassword")}
                >
                  Forgot Password?
                </p>
              </div>

              <button
                onClick={() => navigate("/dashboard/cards")}
                className="w-96 bg-[#151C39] text-white p-2 rounded-md mt-2 cursor-pointer"
              >
                Login
              </button>
            </div>
            <div>
            <div className="flex items-center mb-5 mt-5 ">
  <div className="flex-grow border-t border-[#635E5E]"></div>
  <p className="mx-4 text-center text-[#151C39]">Or Sign in with</p>
  <div className="flex-grow border-t border-[#635E5E]"></div>
</div>
              <div className="flex gap-5">
                <button className="border px-4 py-2 rounded-md flex gap-1 cursor-pointer hover:bg-[#151C39] hover:text-white">
                  <IconBrandGoogle stroke={2} /> Google
                </button>
                <button className="border px-4 py-2 rounded-md flex gap-1 hover:bg-[#151C39] hover:text-white">
                  <IconBrandApple stroke={2} /> Apple
                </button>
                <button className="border px-4 py-2 rounded-md flex gap-1 hover:bg-[#151C39] hover:text-white">
                  <IconBrandFacebook stroke={2} /> Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Render Modals Based on State */}
      {modal === "forgotPassword" && (
        <ForgotPasswordModal
          onClose={() => setModal(null)}
          setModal={setModal}
        />
      )}

      {modal === "checkEmail" && (
        <CheckEmailModal onClose={() => setModal(null)} setModal={setModal} />
      )}
      {modal === "resetPassword" && (
        <ResetPasswordModal
          onClose={() => setModal(null)}
          setModal={setModal}
        />
      )}
      {modal === "passwordChanged" && (
        <PasswordChangedModal onClose={() => setModal(null)} />
      )}
    </div>
  );
}

export default Login;
