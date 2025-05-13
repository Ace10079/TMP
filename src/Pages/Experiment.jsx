import React, { useState } from "react";
import {
  IconEye,
  IconEdit,
  IconTrash,
  IconArrowsSort,
  IconFilter,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function Experiment() {
  const statusOptions = ["New", "Pending", "Converted", "Loss", "Follow Up"];
  const leads = Array.from({ length: 20 }, (_, index) => ({
    id: `LD-00${index + 1}`,
    grade_level: `Grade ${index + 1}`,
    date: "2024-03-28",
    experiment_count:"25 Experiments",
  }));
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [customDate, setCustomDate] = useState("");
  const [modalType, setModalType] = useState(null);
  const [selectedLead, setSelectedLead] = useState(null);

  const leadsPerPage = 10;
  const totalPages = Math.ceil(leads.length / leadsPerPage);
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col text-sm">
      {/* Header Section */}
      <div className="p-5 flex justify-between items-center relative">
        <p className="text-lg font-semibold">Lead Management</p>
        <div className="flex gap-3">
          <button
            className="px-4 py-2 bg-[#151C39] text-white rounded-md"
            onClick={() => {
              setModalType("Add");
            }}
          >
            Add New Lead
          </button>
          <button
            className="flex gap-1 bg-white px-4 py-2 text-black rounded-md"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            Filter
            <IconFilter />
          </button>
        </div>

        {/* Filter Dropdown */}
        {isFilterOpen && (
          <div className="absolute top-15 right-5 bg-[#DBE9FF] text-[#005D67] p-3 rounded shadow-lg z-50">
            {[
              "Today",
              "Last 7 Days",
              "This Month",
              "Last 30 Days",
              "This Year",
              "Custom Date",
            ].map((option) => (
              <button
                key={option}
                className="block w-full text-left px-3 py-2 "
                onClick={() => setSelectedFilter(option)}
              >
                {option}
              </button>
            ))}
            {selectedFilter === "Custom Date" && (
              <div className="mt-3">
                <input
                  type="date"
                  className="border p-2 w-full rounded"
                  value={customDate}
                  onChange={(e) => setCustomDate(e.target.value)}
                />
                <button className="mt-2 bg-[#151C39] text-white w-full p-2 rounded">
                  Search
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Scrollable Table Section */}
      <div className="flex overflow-auto p-2 ">
        <table className="w-full rounded-md ">
          <thead className="sticky top-0 bg-white shadow-md rounded-md">
            <tr>
              {[
                "S.No",
                "Grade Level",
                "Experiment Count",
                "Experiment Added in Date",
                "Action",
              ].map((heading) => (
                <th key={heading} className="py-3 px-4 font-medium text-center">
                  <div className="flex items-center justify-center gap-1">
                    {heading}
                    <IconArrowsSort
                      size={16}
                      className="cursor-pointer text-gray-500 mt-1"
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentLeads.map((lead, index) => (
              <tr key={lead.id} className="border-b border-gray-600">
                <td className="py-3 px-4 text-center">
                  {indexOfFirstLead + index + 1}
                </td>
                <td className="py-3 px-4 text-center">{lead.grade_level}</td>
                <td className="py-3 px-4 text-center">{lead.experiment_count}</td>
                <td className="py-3 px-4 text-center">{lead.date}</td>
                <td className="py-3 px-4 flex gap-2 justify-center">
                  <button
                    className="p-1 text-[#34C759] bg-[#CAFFCA]"
                    onClick={() => {
                      navigate("/dashboard/lead-details", { state: { lead } });
                    }}
                  >
                    <IconEye size={18} />
                  </button>
                  <button
                    className="p-1 text-[#0000FF] bg-[#DFDFFF]"
                    onClick={() => {
                      setModalType("edit");
                      setSelectedLead(lead);
                    }}
                  >
                    <IconEdit size={18} />
                  </button>
                  <button
                    className="p-1 text-[#FF0000] bg-[#FFDBDB]"
                    onClick={() => {
                      setModalType("delete");
                      setSelectedLead(lead);
                    }}
                  >
                    <IconTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      {totalPages > 1 && (
        <div className="p-4 flex justify-end items-center gap-2">
          <button
            className="px-3 py-1"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, pageIndex) => (
            <button
              key={pageIndex}
              className="px-3 py-1"
              onClick={() => setCurrentPage(pageIndex + 1)}
            >
              {pageIndex + 1}
            </button>
          ))}
          <button
            className="px-3"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Modals */}
      {modalType && (
        <div className="fixed inset-0 flex items-center justify-center  backdrop-blur-md">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            {/* Add Modal */}
            {modalType === "Add" && (
              <div className="flex flex-col space-y-3">
                <h2 className="font-bold text-xl mb-4 capitalize text-center">
                  Add New Lead
                </h2>
                <div className="flex flex-row justify-between items-center">
                  <label className="text-center">Lead ID:</label>
                  <input
                    type="text"
                    placeholder="Enter Lead ID"
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Name:</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Date:</label>
                  <input
                    type="text"
                    placeholder="Enter Date"
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Source:</label>
                  <input
                    type="text"
                    placeholder="Enter Source"
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Status:</label>
                  <input
                    type="text"
                    placeholder="Enter Status"
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Assigned To:</label>
                  <input
                    type="text"
                    placeholder="Enter Assign"
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
              </div>
            )}

            {/* Edit Modal */}
            {modalType === "edit" && selectedLead && (
              <div className="flex flex-col space-y-3 ">
                <h2 className="font-bold text-xl mb-4 capitalize text-center">
                  Edit Lead
                </h2>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Name:</label>
                  <input
                    type="text"
                    value={selectedLead.name}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Date:</label>
                  <input
                    type="text"
                    value={selectedLead.date}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <label className="font-medium">Source:</label>
                  <input
                    type="text"
                    value={selectedLead.source}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex  flex-row justify-between items-center">
                  <label className="font-medium">Status:</label>
                  <select
                    defaultValue={selectedLead.status}
                    className="w-44 border p-2 rounded"
                  >
                    <option>New</option>
                    <option>Pending</option>
                    <option>Converted</option>
                    <option>Loss</option>
                    <option>Follow Up</option>
                  </select>
                </div>
                <div className="flex  flex-row justify-between items-center">
                  <label className="font-medium">
                    Assigned to Sales Person
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedLead.assign}
                    className="border p-2 rounded"
                  />
                </div>
              </div>
            )}

            {/* Delete Modal */}
            {modalType === "delete" && selectedLead && (
              <div className="flex flex-col items-center space-y-4">
                <h2 className="font-bold text-xl mb-4 capitalize text-center">
                  Delete Lead
                </h2>
                <img
                  src="/delete.png"
                  alt="Delete Confirmation"
                  className="w-16 h-16"
                />
                <p className="text-center font-bold text-xl">Are you Sure?</p>
                <p>Are you sure? Do you want to delete Permanently</p>
              </div>
            )}

            {/* Modal Buttons */}
            <div className="flex gap-3 mt-4 justify-center">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setModalType(null)}
              >
                Close
              </button>
              {modalType === "edit" && (
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Save
                </button>
              )}
              {modalType === "delete" && (
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Delete
                </button>
              )}
              {modalType === "Add" && (
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experiment;
