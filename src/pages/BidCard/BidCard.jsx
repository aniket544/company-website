import React, { useState } from "react";
import "./BidCard.css";
import { useNavigate } from "react-router-dom";

const BidCard = ({ cards }) => {
  const navigate = useNavigate();

  // Pagination state only
  const cardsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Format bid data for display
  const formattedCards = cards.map((item) => ({
    bidNo: item.bid_no || "N/A",
    bidLink: item.bid_link || "#",
    raNo: item.ra_no || "—",
    items: item.items || "N/A",
    quantity: item.quantity || "—",
    department: `${item.department_name || ""}, ${item.address || ""}`,
    startDate: item.start_date || "—",
    endDate: item.end_date || "—",
    original: item, // keep full bid object to pass forward
  }));

  // Pagination calculations
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = formattedCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(formattedCards.length / cardsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    const delta = 2;
    const start = Math.max(2, currentPage - delta);
    const end = Math.min(totalPages - 1, currentPage + delta);

    if (totalPages > 1) pages.push(1);
    if (start > 2) pages.push("...");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const handlePageClick = (num) => {
    if (num !== "...") setCurrentPage(num);
  };

  // Direct navigation on Participate — no company selection
  const handleParticipateClick = (bid) => {
    const fullBidData = bid.original;

    // Optional: store in sessionStorage as fallback
    try {
      sessionStorage.setItem("selectedBid", JSON.stringify(fullBidData));
    } catch (e) {
      console.warn("sessionStorage write failed:", e);
    }

    // Navigate directly with bid data
    navigate("/participation-form", {
      state: { bid: fullBidData },
    });
  };

  return (
    <div>
      {/* ===== Cards Section ===== */}
      <div className="bid-container">
        {currentCards.map((bid, index) => (
          <div key={index} className="bid-card">
            <div className="bid-header">
              <div>
                <strong>Bid No.:</strong>{" "}
                <a
                  href={bid.bidLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blue-text"
                >
                  {bid.bidNo}
                </a>
              </div>
            </div>

            <div className="bid-body">
              <div className="bid-left">
                <p>
                  <strong>Items:</strong>{" "}
                  <span className="neela-text">{bid.items}</span>
                </p>
                <p>
                  <strong>Quantity:</strong> {bid.quantity}
                </p>
              </div>

              <div className="bid-right">
                <p>
                  <strong>Department Name And Address:</strong>
                </p>
                <p>{bid.department}</p>
              </div>

              <div className="bid-dates">
                <p>
                  <strong>Start Date:</strong>{" "}
                  <span className="green-text">{bid.startDate}</span>
                </p>
                <p>
                  <strong>End Date:</strong>{" "}
                  <span className="orange-text">{bid.endDate}</span>
                </p>
              </div>

              <button
                id="kalooo"
                onClick={() => handleParticipateClick(bid)}
              >
                Participate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Pagination ===== */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {getPageNumbers().map((num, idx) => (
            <button
              key={idx}
              onClick={() => handlePageClick(num)}
              className={currentPage === num ? "active" : ""}
              disabled={num === "..."}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BidCard;