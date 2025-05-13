import { IconArrowsSort } from "@tabler/icons-react";

import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
function LeadDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const lead = location.state?.lead;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleFollowUpSubmit = () => {
    // Handle follow-up submission logic (e.g., API call)
    console.log("Follow-up Submitted: ", followUpData);
    setIsModalOpen(false); // Close the modal after submission
  };
  if (!lead) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-xl font-semibold">No Lead Data Found</p>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-90px)] overflow-auto">
      <div className="flex justify-end mb-2 mr-2">
        <button
          className="p-2 bg-[#151C39] text-white rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Add Follow Up
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-2 mb-2">
        <div className="w-96 bg-white p-5 rounded-lg shadow-md">
          <h2 className="font-bold mb-4">Lead Details</h2>
          <p className="flex justify-between">
            <strong>Lead ID:</strong> {lead.id}
          </p>
          <p className="flex justify-between">
            <strong>Name:</strong> {lead.name}
          </p>
          <p className="flex justify-between">
            <strong>Date:</strong> {lead.date}
          </p>
          <p className="flex justify-between">
            <strong>Source:</strong> {lead.source}
          </p>
          <p className="flex justify-between">
            <strong>Status:</strong> {lead.status}
          </p>
          <p className="flex justify-between">
            <strong>Assigned To:</strong> {lead.assign}
          </p>
        </div>
        <div className="bg-white">
          <p className="font-bold p-5">Notes</p>

          <div className="flex flex-col justify-center p-3">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              laborum aperiam dicta facilis obcaecati mollitia deleniti
              quibusdam, fuga nisi quas aliquid minus officia in corrupti ut
              tempora, culpa illo dolore!
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              laborum aperiam dicta facilis obcaecati mollitia deleniti
              quibusdam, fuga nisi quas aliquid minus officia in corrupti ut
              tempora, culpa illo dolore!
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-auto  bg-white rounded-lg shadow-md text-sm">
        <table className="w-full border-collapse ">
          <thead className="sticky top-0 bg-white shadow-md">
            <tr>
              {["S.No", "Name", "Date", "Notes", "Next Follow-up Date"].map(
                (heading) => (
                  <th
                    key={heading}
                    className="py-3 px-4 font-medium text-center bg-white"
                  >
                    <div className="flex items-center justify-center gap-1">
                      {heading}
                      <IconArrowsSort
                        size={16}
                        className="cursor-pointer text-gray-500 mt-1"
                      />
                    </div>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 1,
                name: "John Doe",
                date: "2025-04-01",
                notes: "Interested in premium package",
                followUp: "2025-04-05",
              },
              {
                id: 2,
                name: "Jane Smith",
                date: "2025-04-02",
                notes: "Requires discount details",
                followUp: "2025-04-06",
              },
              {
                id: 3,
                name: "Michael Johnson",
                date: "2025-04-03",
                notes: "Requested call back",
                followUp: "2025-04-07",
              },
              {
                id: 4,
                name: "John Doe",
                date: "2025-04-01",
                notes: "Interested in premium package",
                followUp: "2025-04-05",
              },
              {
                id: 2,
                name: "Jane Smith",
                date: "2025-04-02",
                notes: "Requires discount details",
                followUp: "2025-04-06",
              },
              {
                id: 2,
                name: "Jane Smith",
                date: "2025-04-02",
                notes: "Requires discount details",
                followUp: "2025-04-06",
              },
              {
                id: 2,
                name: "Jane Smith",
                date: "2025-04-02",
                notes: "Requires discount details",
                followUp: "2025-04-06",
              },
              {
                id: 2,
                name: "Jane Smith",
                date: "2025-04-02",
                notes: "Requires discount details",
                followUp: "2025-04-06",
              },
              {
                id: 2,
                name: "Jane Smith",
                date: "2025-04-02",
                notes: "Requires discount details",
                followUp: "2025-04-06",
              },
              {
                id: 2,
                name: "Jane Smith",
                date: "2025-04-02",
                notes: "Requires discount details",
                followUp: "2025-04-06",
              },
            ].map((lead, index) => (
              <tr key={lead.id} className="border-b border-gray-300">
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4 text-center">{lead.name}</td>
                <td className="py-3 px-4 text-center">{lead.date}</td>
                <td className="py-3 px-4 text-center">{lead.notes}</td>
                <td className="py-3 px-4 text-center">{lead.followUp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-50 backdrop-blur-md">
          <div className="flex flex-col bg-white p-6 rounded-lg w-[400px]">
            <h2 className="font-bold text-xl mb-4 text-center">
              Add Follow Up
            </h2>

            <div className="space-y-3">
              {/* Lead Name */}
              <div className="flex justify-between">
                <label className="font-medium">Lead Name:</label>
                <input
                  type="text"
                  name="leadName"
                  readOnly
                  className="border p-2 rounded bg-gray-100 "
                />
              </div>

              {/* Follow Up Date */}
              <div className="flex justify-between">
                <label className="font-medium">Follow Up Date:</label>
                <input
                  type="date"
                  name="followUpDate"
                  className="border p-2 rounded"
                />
              </div>

              {/* Schedule Follow Up */}
              <div className="flex justify-between">
                <label className="font-medium">Schedule Follow Up:</label>
                <input
                  type="date"
                  name="scheduleFollowUp"
                  className="border p-2 rounded"
                />
              </div>

              {/* Convert to Sales */}
              <div className="flex justify-between">
                <label className="font-medium">Convert to Sales:</label>
                <input
                   type="text"
                  name="convertToSales"
                  className="border p-2 rounded"
                />
              </div>

              {/* Notes */}
              <div className="flex justify-between">
                <label className="font-medium">Notes:</label>
                <textarea name="notes" className="border p-2 rounded" />
              </div>
            </div>

            <div className="mt-4 gap-2 flex justify-end">
              <button
                onClick={handleModalClose}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleFollowUpSubmit}
                className="bg-[#151C39] text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeadDetails;
