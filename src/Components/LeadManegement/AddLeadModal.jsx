// components/modals/AddLeadModal.jsx
import React from "react";

const AddLeadModal = ({ onClose }) => {
  return (
    <div className="flex flex-col space-y-3">
      <h2 className="font-bold text-xl mb-4 capitalize text-center">
        Add New Lead
      </h2>
      {["Lead ID", "Name", "Date", "Source", "Status", "Assigned To"].map(
        (label) => (
          <div
            className="flex flex-row justify-between items-center"
            key={label}
          >
            <label className="font-medium">{label}:</label>
            <input
              type="text"
              placeholder={`Enter ${label}`}
              className="border p-2 rounded bg-gray-100"
            />
          </div>
        )
      )}
      <div className="flex gap-3 mt-4 justify-center">
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
          Close
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddLeadModal;
