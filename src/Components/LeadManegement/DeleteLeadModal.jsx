// components/modals/DeleteLeadModal.jsx
import React from "react";

const DeleteLeadModal = ({ lead, onClose }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="font-bold text-xl mb-4 capitalize text-center">
        Delete Lead
      </h2>
      <img src="/delete.png" alt="Delete Confirmation" className="w-16 h-16" />
      <p className="text-center font-bold text-xl">Are you Sure?</p>
      <p>Are you sure? Do you want to delete Permanently</p>
      <div className="flex gap-3 mt-4 justify-center">
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
          Close
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteLeadModal;
