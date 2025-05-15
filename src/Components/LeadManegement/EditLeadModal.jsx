// components/modals/EditLeadModal.jsx
import React from "react";

const EditLeadModal = ({ lead, onClose }) => {
  return (
    <div className="flex flex-col space-y-3">
      <h2 className="font-bold text-xl mb-4 capitalize text-center">
        Edit Lead
      </h2>
      <div className="flex flex-row justify-between items-center">
        <label className="font-medium">Name:</label>
        <input
          type="text"
          value={lead.name}
          readOnly
          className="border p-2 rounded bg-gray-100"
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <label className="font-medium">Date:</label>
        <input
          type="text"
          value={lead.date}
          readOnly
          className="border p-2 rounded bg-gray-100"
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <label className="font-medium">Source:</label>
        <input
          type="text"
          value={lead.source}
          readOnly
          className="border p-2 rounded bg-gray-100"
        />
      </div>
      <div className="flex  flex-row justify-between items-center">
        <label className="font-medium">Status:</label>
        <select defaultValue={lead.status} className="w-44 border p-2 rounded">
          <option>New</option>
          <option>Pending</option>
          <option>Converted</option>
          <option>Loss</option>
          <option>Follow Up</option>
        </select>
      </div>
      <div className="flex  flex-row justify-between items-center">
        <label className="font-medium">Assigned to Sales Person</label>
        <input
          type="text"
          defaultValue={lead.assign}
          className="border p-2 rounded"
        />
      </div>
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

export default EditLeadModal;
