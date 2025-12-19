import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { FaSearch, FaFilter, FaFileDownload, FaBuilding, FaClock, FaMapMarkerAlt, FaIndustry } from 'react-icons/fa';

// Agar GridBackground component nahi hai toh ye CSS class handle kar legi.
// Make sure 'index.css' mein wo .grid-pattern wala code ho jo maine pehle diya tha.

function Bid() {
  // --- STATE MANAGEMENT (Tera Wala Logic) ---
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [companyKeywords, setCompanyKeywords] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Static companies configuration
  const companies = [
    { id: 1, company_name: "Tata Steel", nature_of_business: { products: ["steel", "pipes", "iron"], services: ["construction"] } },
    { id: 2, company_name: "Reliance Industries", nature_of_business: { products: ["petrochemicals", "refinery"], services: ["energy"] } },
    { id: 3, company_name: "Infosys", nature_of_business: { products: ["software", "laptop", "IT hardware"], services: ["consulting", "cloud"] } },
    { id: 4, company_name: "Adani Ports", nature_of_business: { products: ["cement", "coal"], services: ["logistics", "shipping"] } },
    { id: 5, company_name: "L&T Construction", nature_of_business: { products: ["cement", "steel", "machinery"], services: ["civil", "infrastructure"] } },
  ];

  // --- API CALL (Tera Wala Logic) ---
  useEffect(() => {
    const fetchBids = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get("http://localhost:5000/api/bids");
        setCards(res.data || []);
      } catch (err) {
        console.error("Failed to fetch bids:", err);
        setError("Live data unavailable. Showing demo opportunities.");
        
        // Demo Data (Fallback)
        setCards([
          { bid_number: "GEM/2025/B/500123", title: "Supply of High Grade Steel Pipes", department: "PWD", state: "Maharashtra", value: "₹85 Lakh", items: "steel pipes cement", closing_date: "2025-12-20", status: "Active" },
          { bid_number: "GEM/2025/B/500456", title: "Procurement of i7 Laptops & Servers", department: "Education Dept", state: "Karnataka", value: "₹2.5 Cr", items: "laptop desktop software printer", closing_date: "2025-12-25", status: "Closing Soon" },
          { bid_number: "NHAI/2025/789", title: "National Highway Road Construction", department: "NHAI", state: "Uttar Pradesh", value: "₹120 Cr", items: "cement bitumen machinery", closing_date: "2025-12-30", status: "Active" },
          { bid_number: "MOH/2025/101", title: "Advanced MRI Machines Supply", department: "Health Ministry", state: "Delhi", value: "₹8 Cr", items: "ventilator mri machine", closing_date: "2025-12-28", status: "Urgent" },
          { bid_number: "RLY/2025/990", title: "Signaling Cable Installation", department: "Indian Railways", state: "West Bengal", value: "₹45 Lakh", items: "cables wiring", closing_date: "2026-01-15", status: "Active" },
          { bid_number: "GEM/2025/B/1122", title: "Annual Maintenance of Servers", department: "NIC", state: "Gujarat", value: "₹12 Lakh", items: "amc service", closing_date: "2025-12-18", status: "Closed" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBids();
  }, []);

  // --- FILTER LOGIC (Tera Wala Logic) ---
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

  // --- EXCEL DOWNLOAD (Tera Wala Logic) ---
  const handleDownload = () => {
    if (filteredCards.length === 0) return alert("No bids available to download!");
    const ws = XLSX.utils.json_to_sheet(filteredCards);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Bids");
    XLSX.writeFile(wb, `Tender_Bids_${new Date().toLocaleDateString('en-IN')}.xlsx`);
  };

  // --- UI RENDERING (Mera Wala Modern Design) ---
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black relative pt-24 pb-20 px-4 md:px-10 overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none"></div>
      
      {/* Cyan Blob Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-cyan)]/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Page Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:via-cyan-100 dark:to-[var(--accent-cyan)] bg-clip-text text-transparent">
          Live Tenders Marketplace
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">
          Real-time access to government bids. Filter by state, company match, or keywords.
        </p>
      </div>

      {/* Modern Filter Bar (Glassmorphism) */}
      <div className="relative z-10 max-w-7xl mx-auto mb-10">
        <div className="flex flex-col lg:flex-row gap-4 bg-white/80 dark:bg-zinc-900/50 border border-gray-200 dark:border-white/10 p-4 rounded-3xl backdrop-blur-xl shadow-lg">
          
          {/* Search Input */}
          <div className="flex-grow flex items-center px-4 bg-gray-50 dark:bg-black/40 rounded-xl border border-gray-200 dark:border-white/10 h-14 focus-within:border-[var(--accent-cyan)] transition-all">
            <FaSearch className="text-gray-400 text-lg" />
            <input 
              type="text" 
              placeholder="Search by ID, Item, Title..." 
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-gray-800 dark:text-white ml-3 placeholder-gray-500 font-medium"
            />
          </div>

          {/* State Dropdown */}
          <div className="min-w-[200px] h-14 relative">
            <select
              value={selectedState}
              onChange={e => setSelectedState(e.target.value)}
              className="w-full h-full appearance-none bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 text-gray-700 dark:text-white font-medium focus:border-[var(--accent-cyan)] outline-none cursor-pointer"
            >
              <option value="">All States</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Delhi">Delhi</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Gujarat">Gujarat</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            <FaMapMarkerAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          {/* Company Match Dropdown */}
          <div className="min-w-[200px] h-14 relative">
            <select
              value={selectedCompany}
              onChange={handleCompanyChange}
              className="w-full h-full appearance-none bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 text-gray-700 dark:text-white font-medium focus:border-[var(--accent-cyan)] outline-none cursor-pointer"
            >
              <option value="">Match Company</option>
              {companies.map(c => (
                <option key={c.id} value={c.id}>{c.company_name}</option>
              ))}
            </select>
            <FaIndustry className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          {/* Download Button */}
          <button 
            onClick={handleDownload}
            className="h-14 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-green-500/30 transition-all whitespace-nowrap"
          >
            <FaFileDownload /> Excel
          </button>

          {/* Clear Button */}
          <button 
            onClick={() => { setQuery(""); setSelectedState(""); setSelectedCompany(""); setCompanyKeywords(""); }}
            className="h-14 px-4 rounded-xl border border-red-200 dark:border-red-900/50 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium transition-all"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-cyan)]"></div>
            <p className="mt-4 text-gray-500">Fetching latest opportunities...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-orange-100 dark:bg-orange-900/20 border border-orange-200 text-orange-600 px-4 py-3 rounded-xl mb-6 text-center">
            {error}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredCards.length === 0 && (
          <div className="text-center py-20 bg-gray-50 dark:bg-white/5 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-700 dark:text-white">No Bids Found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query.</p>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!loading && filteredCards.map((card, index) => (
            <div key={index} className="group relative bg-white/80 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-6 hover:border-[var(--accent-cyan)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(107,211,211,0.1)] flex flex-col justify-between">
              
              <div>
                {/* Header: ID & Status */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs font-mono bg-gray-100 dark:bg-white/5 text-[var(--accent-cyan)] px-2 py-1 rounded">
                    {card.bid_number}
                  </div>
                  {card.status && (
                    <div className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      card.status === 'Urgent' ? 'text-purple-400 border-purple-400/30 bg-purple-400/10' :
                      card.status === 'Closing Soon' ? 'text-orange-400 border-orange-400/30 bg-orange-400/10' :
                      'text-green-400 border-green-400/30 bg-green-400/10'
                    }`}>
                      {card.status}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-2 leading-tight">
                  {card.title}
                </h3>

                {/* Department & State */}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <FaBuilding className="text-gray-400" /> 
                  <span className="font-medium">{card.department}</span>
                  <span className="text-gray-300">•</span>
                  <span>{card.state}</span>
                </div>

                {/* Items Tag */}
                <div className="mb-6">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Items Required</p>
                  <div className="flex flex-wrap gap-2">
                    {card.items && card.items.split(' ').slice(0, 3).map((item, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md text-gray-600 dark:text-gray-300 capitalize">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Section: Value & Date */}
              <div>
                <div className="h-px w-full bg-gray-200 dark:bg-white/10 mb-4"></div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Bid Value</p>
                    <p className="text-lg font-bold text-gray-800 dark:text-gray-100">{card.value}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-0.5 flex items-center gap-1 justify-end">
                      <FaClock className="text-[var(--accent-cyan)]" /> Deadline
                    </p>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white">{card.closing_date}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bid;