import React, { useState } from "react";
import {
  IconEye,
  IconEdit,
  IconTrash,
  IconArrowsSort,
  IconFilter,
  IconPlus,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
// Top of LeadManagement.jsx
import AddLeadModal from "./AddLeadModal";
import EditLeadModal from "./EditLeadModal";
import DeleteLeadModal from "./DeleteLeadModal";

function LeadManagement() {
  const statusOptions = ["New", "Pending", "Converted", "Loss", "Follow Up"];
  const leads = Array.from({ length: 20 }, (_, index) => ({
    id: `LD-00${index + 1}`,
    name: `John Doe ${index + 1}`,
    date: "2024-03-28",
    source: index % 2 === 0 ? "Referral" : "Website",
    status: statusOptions[index % statusOptions.length],
    assign: "Alex Smith",
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
      <div className="absolute top-2 left-65 z-50">
        <p className="text-[#635E5E] text-lg source-sans">
          Lead Management/Table
        </p>
        <p className="font-bold text-xl">Lead Management</p>
      </div>

      <div className="p-5 flex justify-end items-center relative">
        <div className="flex gap-3">
          <button
            className="px-4 py-2 bg-[#151C39] text-white rounded-md"
            onClick={() => {
              setModalType("Add");
            }}
          >
            <div className="flex items-center gap-1">
              <IconPlus size={12} />
              <p>Add New Lead</p>
            </div>
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
      <div className="flex overflow-auto p-2 rounded-md">
        <table className="w-full rounded-md">
          <thead className="sticky top-0 bg-white shadow-md rounded-md source-sans">
            <tr>
              {[
                "S.No",
                "Lead ID",
                "Name",
                "Date",
                "Source",
                "Status",
                "Assign",
                "Action",
              ].map((heading) => (
                <th key={heading} className="py-3 px-4 text-lg text-center">
                  <div className="flex items-center justify-center gap-1">
                    {heading}
                    <IconArrowsSort
                      size={16}
                      className="cursor-pointer text-[#211F1F] mt-1"
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white text-[#8A8A8A] text-base source-sans">
            {currentLeads.map((lead, index) => (
              <tr key={lead.id} className="shadow-md">
                <td className="py-3 px-4 text-center">
                  {indexOfFirstLead + index + 1}
                </td>
                <td className="py-5 px-4 text-center">{lead.id}</td>
                <td className="py-3 px-4 text-center">{lead.name}</td>
                <td className="py-3 px-4 text-center">{lead.date}</td>
                <td className="py-3 px-4 text-center">{lead.source}</td>
                <td
                  className={`py-3 px-4 text-center ${
                    lead.status === "New"
                      ? "text-green-600"
                      : lead.status === "Pending"
                      ? "text-yellow-600"
                      : lead.status === "Converted"
                      ? "text-yellow-500"
                      : lead.status === "Loss"
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {lead.status}
                </td>
                <td className="py-3 px-4 text-center">{lead.assign}</td>
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
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            {modalType === "Add" && (
              <AddLeadModal onClose={() => setModalType(null)} />
            )}
            {modalType === "edit" && selectedLead && (
              <EditLeadModal
                lead={selectedLead}
                onClose={() => setModalType(null)}
              />
            )}
            {modalType === "delete" && selectedLead && (
              <DeleteLeadModal
                lead={selectedLead}
                onClose={() => setModalType(null)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LeadManagement;
