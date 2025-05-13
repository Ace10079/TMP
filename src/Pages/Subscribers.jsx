import { IconEdit, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";

function Subscribers() {
  const [modalType, setModalType] = useState("subscription_plan"); // Default: Edit Profile
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleModalClose = () => {
    setModalType("subscription_plan"); // Reset to Edit Profile
    setSelectedPlan(null);       // Reset selected plan
  };
  
  

  const plans = [
    { id: 1, name: "Basic Plan", price: 56, strikePrice: 60, features: ["Feature 1 added successfully", "Feature 2 added successfully ", "Feature 3 added successfully","Feature 1 added successfully", "Feature 2 added successfully ", "Feature 3 added successfully"] },
    { id: 2, name: "Standard Plan", price: 75, strikePrice: 80, features: ["Feature A", "Feature B", "Feature C","Feature A", "Feature B", "Feature C"] },
    { id: 3, name: "Premium Plan", price: 100, strikePrice: 120, features: ["Feature X", "Feature Y", "Feature Z","Feature A", "Feature B", "Feature C"] },
    { id: 4, name: "Basic Plan", price: 56, strikePrice: 60, features: ["Feature 1", "Feature 2", "Feature 3"] },
    { id: 5, name: "Standard Plan", price: 75, strikePrice: 80, features: ["Feature A", "Feature B", "Feature C"] },
    { id: 6, name: "Premium Plan", price: 100, strikePrice: 120, features: ["Feature X", "Feature Y", "Feature Z"] }
  ];

  return (
    <div className="p-5">
      {/* Buttons for Switching Between Forms */}
      <div className="flex gap-5">
        <button
          className={`p-2 ${modalType === "subscription_plan" ? "bg-[#151C39] text-white" : "bg-gray-200"}`}
          onClick={() => {
            setModalType("subscription_plan");
            setIsModalOpen(true);
          }}
        >
         Subscription Plan
        </button>
        <button
          className={`p-2 ${modalType === "changePassword" ? "bg-[#151C39] text-white" : "bg-gray-200"}`}
          onClick={() => {
            setModalType("changePassword");
            setIsModalOpen(true);
          }}
        >
          User Subscription
        </button>
      </div>
      <div className="flex justify-end">
      <button
  className="p-2 border-[#151C39] text-black border"
  onClick={() => {
    setModalType("add");
    setSelectedPlan({ name: "", price: "", features: [] }); // Initialize with empty values
    setIsModalOpen(true);
  }}
>
  Add Package
</button>
      </div>

      {/* Render Form Below the Buttons */}
      {isModalOpen && (
        <div className="">
          {/* Edit Profile Form */}
          {modalType === "subscription_plan" && (
            <div className="grid md:grid-cols-3 gap-5 h-[calc(100vh-210px)] overflow-y-auto mt-5">
              {plans.map((plan) => (
                <div key={plan.id} className="border bg-white text-xl rounded shadow-lg text-center md:h-[60vh] flex flex-col justify-center">
                  <h2 className="font-bold text-xl">{plan.name}</h2>
                  <p className="text-gray-500">
                    <span className="line-through text-xl">${plan.strikePrice}</span> ${plan.price} per month
                  </p>
                  <p className="text-xl">Features</p>
                  <ul className="mt-2 text-sm text-gray-600">
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex justify-center gap-2 mt-3 mb-3">
                    <button
                      className="bg-[#151C39] text-white px-3 py-1 rounded"
                      onClick={() => {
                        setModalType("edit");
                        setSelectedPlan(plan);
                        setIsModalOpen(true);
                      }}
                    >
                     Edit
                    </button>
                    <button
                      className="border border-[#FD1717] text-[#FD1717] px-3 py-1 rounded"
                      onClick={() => {
                        setModalType("delete");
                        setSelectedPlan(plan);
                        setIsModalOpen(true);
                      }}
                    >
                     Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Edit Modal */}
          {modalType === "edit" && selectedPlan && (
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
              <div className="bg-white flex flex-col space-y-5 p-5 rounded-lg shadow-lg w-96">
                <h2 className="font-bold text-xl text-center mb-4">Edit Packages</h2>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Plan Name</label>
                  <input
                    type="text"
                    value={selectedPlan.name}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Price</label>
                  <input
                    type="text"
                    value={selectedPlan.price}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Start Date</label>
                  <input
                    type="date"
                    value={selectedPlan.name}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">End Date</label>
                  <input
                    type="date"
                    value={selectedPlan.name}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Features</label>
                  <input
                    type="text"
                    value={selectedPlan.features}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button className="bg-gray-300 px-4 py-2 rounded" onClick={handleModalClose}>
                    Cancel
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                </div>
              </div>
            </div>
          )}
           {modalType === "add" && selectedPlan && (
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
              <div className="bg-white flex flex-col space-y-5 p-5 rounded-lg shadow-lg w-96">
                <h2 className="font-bold text-xl text-center mb-4">Edit Packages</h2>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Plan Name</label>
                  <input
                    type="text"
                    value={selectedPlan.name}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Price</label>
                  <input
                    type="text"
                    value={selectedPlan.price}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Start Date</label>
                  <input
                    type="date"
                    value={selectedPlan.name}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">End Date</label>
                  <input
                    type="date"
                    value={selectedPlan.name}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Features</label>
                  <input
                    type="text"
                    value={selectedPlan.features}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button className="bg-gray-300 px-4 py-2 rounded" onClick={handleModalClose}>
                    Cancel
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                </div>
              </div>
            </div>
          )}

          {/* Delete Modal */}
          {modalType === "delete" && selectedPlan && (
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
              <div className="bg-white p-5 rounded-lg shadow-lg w-96 text-center">
               
                <img
                  src="/delete.png"
                  alt="Delete Confirmation"
                  className="w-20 h-20 mx-auto"
                />
                 <h2 className="font-bold text-xl mb-4">Are you Sure?</h2>
                <p className="text-center mb-4">Do you want to delete Permanently?</p>
                <div className="flex justify-center gap-2">
                  <button className="bg-gray-300 px-4 py-2 rounded" onClick={handleModalClose}>
                    Cancel
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                </div>
              </div>
            </div>
          )}

          {/* Change Password Form */}
          {modalType === "changePassword" && (
             <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
             <div className="bg-white flex flex-col space-y-5 p-5 rounded-lg shadow-lg w-96">
               <h2 className="font-bold text-xl text-center mb-4">User Subscriptions</h2>
               <div className="flex flex-row justify-between items-center">
                 <label className="font-medium">User Name</label>
                 <input
                   type="text"
                   value=""
                   readOnly
                   className="border p-2 rounded bg-gray-100"
                 />
               </div>
               <div className="flex flex-row justify-between items-center">
                 <label className="font-medium">Plan Name</label>
                 <input
                   type="text"
                   value=""
                   readOnly
                   className="border p-2 rounded bg-gray-100"
                 />
               </div>
               <div className="flex flex-row justify-between items-center">
                 <label className="font-medium">Start Date</label>
                 <input
                   type="date"
                   value=""
                   readOnly
                   className="border p-2 rounded bg-gray-100"
                 />
               </div>
               <div className="flex flex-row justify-between items-center">
                 <label className="font-medium">End Date</label>
                 <input
                   type="date"
                   value=""
                   readOnly
                   className="border p-2 rounded bg-gray-100"
                 />
               </div>
               <div className="flex flex-row justify-between items-center">
                 <label className="font-medium">Payment Status</label>
                 <input
                   type="text"
                   value=""
                   readOnly
                   className="border p-2 rounded bg-gray-100"
                 />
               </div>
               <div className="flex justify-end gap-2">
                 <button className="bg-gray-300 px-4 py-2 rounded" onClick={handleModalClose}>
                   Cancel
                 </button>
                 <button className="bg-[#151C39] text-white px-4 py-2 rounded">Upgrade</button>
               </div>
             </div>
           </div>
          )}

          {/* Buttons */}
         
        </div>
      )}
    </div>
  );
}

export default Subscribers;
