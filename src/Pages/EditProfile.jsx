import React, { useState } from "react";

function EditProfile() {
  const [modalType, setModalType] = useState("editProfile");
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="p-5">
      {/* Buttons for Switching Between Forms */}
      <div className="flex flex-col sm:flex-row gap-5">
        <button
          className={`p-2 ${
            modalType === "editProfile"
              ? "bg-[#151C39] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => {
            setModalType("editProfile");
            setIsModalOpen(true);
          }}
        >
          Edit Profile
        </button>
        <button
          className={`p-2 ${
            modalType === "changePassword"
              ? "bg-[#151C39] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => {
            setModalType("changePassword");
            setIsModalOpen(true);
          }}
        >
          Change Password
        </button>
      </div>

      {/* Render Form Below the Buttons */}
      {isModalOpen && (
        <div className="flex items-center justify-center">
          <div className="flex flex-col justify-center bg-white p-5 rounded-lg shadow-lg mt-5 border  max-w-3xl">
            {/* Edit Profile Form */}
            {modalType === "editProfile" && (
              <form className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-sm font-medium text-gray-600">
                      First Name
                    </label>
                    <input type="text" className="border p-2 rounded" />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-sm font-medium text-gray-600">
                      Last Name
                    </label>
                    <input type="text" className="border p-2 rounded" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input type="text" className="border p-2 rounded" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    Phone Number
                  </label>
                  <input type="text" className="border p-2 rounded" />
                </div>
              </form>
            )}

            {/* Change Password Form */}
            {modalType === "changePassword" && (
              <div className="flex justify-center">
              <form className="flex flex-col gap-3 w-full max-w-md">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">Password</label>
                  <input type="text" className="border p-2 rounded w-full" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600">Confirm Password</label>
                  <input type="text" className="border p-2 rounded w-full" />
                  <p className="font-bold">Important Note</p>
                  <p className="text-sm">
                    Password must contain at least one capital letter, one small letter, one number, one special character and it should be minimum 9 characters
                  </p>
                  <p>Example: Pass@2020</p>
                </div>
              </form>
            </div>
            
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 mt-4">
              <button
                className="px-10 py-2 border border-[#EF8038] text-[#EF8038] rounded cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button className="px-10 py-2 bg-[#EF8038] text-white rounded cursor-pointer">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditProfile;
