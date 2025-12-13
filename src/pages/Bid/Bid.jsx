import React, { useState, useEffect, useMemo } from 'react';
import './bid.css';
import { IoSearchCircle } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import BidCard from '../../pages/BidCard/BidCard.jsx';
import axios from 'axios';
import * as XLSX from 'xlsx';

function Bid() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [companyKeywords, setCompanyKeywords] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Static companies — no login needed
  const companies = [
    { id: 1, company_name: "Tata Steel", nature_of_business: { products: ["steel", "pipes", "iron"], services: ["construction"] } },
    { id: 2, company_name: "Reliance Industries", nature_of_business: { products: ["petrochemicals", "refinery"], services: ["energy"] } },
    { id: 3, company_name: "Infosys", nature_of_business: { products: ["software", "laptop", "IT hardware"], services: ["consulting", "cloud"] } },
    { id: 4, company_name: "Adani Ports", nature_of_business: { products: ["cement", "coal"], services: ["logistics", "shipping"] } },
    { id: 5, company_name: "L&T Construction", nature_of_business: { products: ["cement", "steel", "machinery"], services: ["civil", "infrastructure"] } },
  ];

  // Fetch bids — NO TOKEN, NO AUTH, FULL PUBLIC
  useEffect(() => {
    const fetchBids = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get("http://localhost:5000/api/bids");
        setCards(res.data || []);
      } catch (err) {
        console.error("Failed to fetch bids:", err);
        setError("Server down hai, demo data dikha raha hoon");
        // Demo data fallback
        setCards([
          { bid_number: "GEM/2025/B/500123", title: "Supply of Steel Pipes", department: "PWD", state: "Maharashtra", value: "₹85 Lakh", items: "steel pipes cement", closing_date: "2025-12-20" },
          { bid_number: "GEM/2025/B/500456", title: "Laptop & IT Equipment", department: "Education", state: "Karnataka", value: "₹2.5 Crore", items: "laptop desktop software printer", closing_date: "2025-12-25" },
          { bid_number: "NHAI/2025/789", title: "Highway Construction", department: "NHAI", state: "Uttar Pradesh", value: "₹120 Crore", items: "cement bitumen machinery", closing_date: "2025-12-30" },
          { bid_number: "MOH/2025/101", title: "Medical Equipment Supply", department: "Health Ministry", state: "Delhi", value: "₹8 Crore", items: "ventilator mri machine", closing_date: "2025-12-28" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBids();
  }, []); // Sirf ek baar chalega

  // Company filter
  const handleCompanyChange = (e) => {
    const id = e.target.value;
    setSelectedCompany(id);
    if (id) {
      const comp = companies.find(c => c.id === parseInt(id));
      const keywords = [...(comp?.nature_of_business?.products || []), ...(comp?.nature_of_business?.services || [])].join(" ");
      setCompanyKeywords(keywords);
    } else {
      setCompanyKeywords("");
    }
  };

  // Super fast filtering
  const filteredCards = useMemo(() => {
    let result = cards;

    const allKeywords = `${query} ${companyKeywords}`.trim().toLowerCase();
    if (allKeywords) {
      const terms = allKeywords.split(/\s+/).filter(Boolean);
      result = result.filter(card =>
        terms.some(term =>
          Object.values(card).some(val =>
            String(val || "").toLowerCase().includes(term)
          )
        )
      );
    }

    if (selectedState) {
      result = result.filter(card =>
        Object.values(card).some(val =>
          String(val || "").toLowerCase().includes(selectedState.toLowerCase())
        )
      );
    }

    return result;
  }, [cards, query, companyKeywords, selectedState]);

  // Download Excel
  const handleDownload = () => {
    if (filteredCards.length === 0) return alert("Koi bid nahi mila download karne ko!");
    const ws = XLSX.utils.json_to_sheet(filteredCards);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Bids");
    XLSX.writeFile(wb, `Tender_Bids_${new Date().toLocaleDateString('en-IN')}.xlsx`);
  };

  return (
    <div className="Cont min-h-screen bg-gray-100">
      <div className="page max-w-7xl mx-auto p-4">

        {/* Top Search */}
        <div className="Search mb-8">
          <form onSubmit={e => e.preventDefault()} className="relative">
            <input
              type="text"
              placeholder="Search bids by number, title, items, department..."
              className="w-full p-4 pr-16 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 outline-none"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <IoSearchCircle className="absolute right-4 top-4 size-12 text-blue-600 cursor-pointer hover:text-blue-800" />
          </form>
        </div>

        {/* Filters */}
        <div className="card1 bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">

            <div className="flex items-center gap-3 text-xl font-bold text-blue-700">
              <FaFilter /> Filters
            </div>

            <div>
              <label className="block font-medium mb-1">State</label>
              <select
                className="w-full p-3 border rounded-lg"
                value={selectedState}
                onChange={e => setSelectedState(e.target.value)}
              >
                <option value="">All States</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Delhi">Delhi</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Company Match</label>
              <select
                className="w-full p-3 border rounded-lg"
                value={selectedCompany}
                onChange={handleCompanyChange}
              >
                <option value="">Any Company</option>
                {companies.map(c => (
                  <option key={c.id} value={c.id}>{c.company_name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Keyword</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="e.g. laptop, cement"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Apply
              </button>
              <button
                onClick={() => {
                  setQuery(""); setSelectedState(""); setSelectedCompany(""); setCompanyKeywords("");
                }}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8">
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
              <p className="mt-4 text-xl">Latest tenders load ho rahe hain...</p>
            </div>
          )}

          {error && <div className="text-center text-red-600 text-lg mb-4">{error}</div>}

          {!loading && filteredCards.length === 0 && (
            <div className="text-center py-20 text-2xl text-gray-500">
              Koi bid match nahi hua
            </div>
          )}

          {!loading && filteredCards.length > 0 && (
            <>
              <div className="text-right mb-4 text-xl font-bold text-green-600">
                {filteredCards.length} bids mile
              </div>
              <BidCard cards={filteredCards} />
            </>
          )}

          <div className="text-center mt-10">
            <button
              onClick={handleDownload}
              className="bg-green-600 text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-green-700 shadow-xl transition"
            >
              Download Excel
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Bid;