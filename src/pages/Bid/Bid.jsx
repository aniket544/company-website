// import React, { useState, useEffect, useMemo } from 'react';
// import './bid.css';
// import { IoSearchCircle } from "react-icons/io5";
// import { FaFilter } from "react-icons/fa";
// import BidCard from '../../pages/BidCard/BidCard.jsx';
// import axios from 'axios';
// import * as XLSX from 'xlsx';

// function Bid() {
//   const [cards, setCards] = useState([]);
//   const [query, setQuery] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCompany, setSelectedCompany] = useState("");
//   const [companyKeywords, setCompanyKeywords] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Static companies — no login needed
//   const companies = [
//     { id: 1, company_name: "Tata Steel", nature_of_business: { products: ["steel", "pipes", "iron"], services: ["construction"] } },
//     { id: 2, company_name: "Reliance Industries", nature_of_business: { products: ["petrochemicals", "refinery"], services: ["energy"] } },
//     { id: 3, company_name: "Infosys", nature_of_business: { products: ["software", "laptop", "IT hardware"], services: ["consulting", "cloud"] } },
//     { id: 4, company_name: "Adani Ports", nature_of_business: { products: ["cement", "coal"], services: ["logistics", "shipping"] } },
//     { id: 5, company_name: "L&T Construction", nature_of_business: { products: ["cement", "steel", "machinery"], services: ["civil", "infrastructure"] } },
//   ];

//   // Fetch bids — NO TOKEN, NO AUTH, FULL PUBLIC
//   useEffect(() => {
//     const fetchBids = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         const res = await axios.get("http://localhost:5000/api/bids");
//         setCards(res.data || []);
//       } catch (err) {
//         console.error("Failed to fetch bids:", err);
//         setError("Server down hai, demo data dikha raha hoon");
//         // Demo data fallback
//         setCards([
//           { bid_number: "GEM/2025/B/500123", title: "Supply of Steel Pipes", department: "PWD", state: "Maharashtra", value: "₹85 Lakh", items: "steel pipes cement", closing_date: "2025-12-20" },
//           { bid_number: "GEM/2025/B/500456", title: "Laptop & IT Equipment", department: "Education", state: "Karnataka", value: "₹2.5 Crore", items: "laptop desktop software printer", closing_date: "2025-12-25" },
//           { bid_number: "NHAI/2025/789", title: "Highway Construction", department: "NHAI", state: "Uttar Pradesh", value: "₹120 Crore", items: "cement bitumen machinery", closing_date: "2025-12-30" },
//           { bid_number: "MOH/2025/101", title: "Medical Equipment Supply", department: "Health Ministry", state: "Delhi", value: "₹8 Crore", items: "ventilator mri machine", closing_date: "2025-12-28" },
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBids();
//   }, []); // Sirf ek baar chalega

//   // Company filter
//   const handleCompanyChange = (e) => {
//     const id = e.target.value;
//     setSelectedCompany(id);
//     if (id) {
//       const comp = companies.find(c => c.id === parseInt(id));
//       const keywords = [...(comp?.nature_of_business?.products || []), ...(comp?.nature_of_business?.services || [])].join(" ");
//       setCompanyKeywords(keywords);
//     } else {
//       setCompanyKeywords("");
//     }
//   };

//   // Super fast filtering
//   const filteredCards = useMemo(() => {
//     let result = cards;

//     const allKeywords = `${query} ${companyKeywords}`.trim().toLowerCase();
//     if (allKeywords) {
//       const terms = allKeywords.split(/\s+/).filter(Boolean);
//       result = result.filter(card =>
//         terms.some(term =>
//           Object.values(card).some(val =>
//             String(val || "").toLowerCase().includes(term)
//           )
//         )
//       );
//     }

//     if (selectedState) {
//       result = result.filter(card =>
//         Object.values(card).some(val =>
//           String(val || "").toLowerCase().includes(selectedState.toLowerCase())
//         )
//       );
//     }

//     return result;
//   }, [cards, query, companyKeywords, selectedState]);

//   // Download Excel
//   const handleDownload = () => {
//     if (filteredCards.length === 0) return alert("Koi bid nahi mila download karne ko!");
//     const ws = XLSX.utils.json_to_sheet(filteredCards);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Bids");
//     XLSX.writeFile(wb, `Tender_Bids_${new Date().toLocaleDateString('en-IN')}.xlsx`);
//   };

//   return (
//     <div className="Cont min-h-screen bg-gray-100">
//       <div className="page max-w-7xl mx-auto p-4">

//         {/* Top Search */}
//         <div className="Search mb-8">
//           <form onSubmit={e => e.preventDefault()} className="relative">
//             <input
//               type="text"
//               placeholder="Search bids by number, title, items, department..."
//               className="w-full p-4 pr-16 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 outline-none"
//               value={query}
//               onChange={e => setQuery(e.target.value)}
//             />
//             <IoSearchCircle className="absolute right-4 top-4 size-12 text-blue-600 cursor-pointer hover:text-blue-800" />
//           </form>
//         </div>

//         {/* Filters */}
//         <div className="card1 bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">

//             <div className="flex items-center gap-3 text-xl font-bold text-blue-700">
//               <FaFilter /> Filters
//             </div>

//             <div>
//               <label className="block font-medium mb-1">State</label>
//               <select
//                 className="w-full p-3 border rounded-lg"
//                 value={selectedState}
//                 onChange={e => setSelectedState(e.target.value)}
//               >
//                 <option value="">All States</option>
//                 <option value="Maharashtra">Maharashtra</option>
//                 <option value="Karnataka">Karnataka</option>
//                 <option value="Delhi">Delhi</option>
//                 <option value="Gujarat">Gujarat</option>
//                 <option value="Tamil Nadu">Tamil Nadu</option>
//                 <option value="Uttar Pradesh">Uttar Pradesh</option>
//                 <option value="Rajasthan">Rajasthan</option>
//                 <option value="West Bengal">West Bengal</option>
//               </select>
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Company Match</label>
//               <select
//                 className="w-full p-3 border rounded-lg"
//                 value={selectedCompany}
//                 onChange={handleCompanyChange}
//               >
//                 <option value="">Any Company</option>
//                 {companies.map(c => (
//                   <option key={c.id} value={c.id}>{c.company_name}</option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Keyword</label>
//               <input
//                 type="text"
//                 className="w-full p-3 border rounded-lg"
//                 placeholder="e.g. laptop, cement"
//                 value={query}
//                 onChange={e => setQuery(e.target.value)}
//               />
//             </div>

//             <div className="flex gap-2">
//               <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
//                 Apply
//               </button>
//               <button
//                 onClick={() => {
//                   setQuery(""); setSelectedState(""); setSelectedCompany(""); setCompanyKeywords("");
//                 }}
//                 className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
//               >
//                 Clear
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Results */}
//         <div className="mt-8">
//           {loading && (
//             <div className="text-center py-20">
//               <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
//               <p className="mt-4 text-xl">Latest tenders load ho rahe hain...</p>
//             </div>
//           )}

//           {error && <div className="text-center text-red-600 text-lg mb-4">{error}</div>}

//           {!loading && filteredCards.length === 0 && (
//             <div className="text-center py-20 text-2xl text-gray-500">
//               Koi bid match nahi hua
//             </div>
//           )}

//           {!loading && filteredCards.length > 0 && (
//             <>
//               <div className="text-right mb-4 text-xl font-bold text-green-600">
//                 {filteredCards.length} bids mile
//               </div>
//               <BidCard cards={filteredCards} />
//             </>
//           )}

//           <div className="text-center mt-10">
//             <button
//               onClick={handleDownload}
//               className="bg-green-600 text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-green-700 shadow-xl transition"
//             >
//               Download Excel
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Bid;

// import React from 'react';
// import { FaSearch, FaFilter, FaFileDownload, FaClock, FaBuilding } from 'react-icons/fa';
// import { GridBackground } from '../../components/UI/GridBackground'; // Agar path alag ho to adjust kar lena

// const Bid = () => {
//   // Dummy Data for UI (Isse page bhara hua lagega)
//   const tenders = [
//     {
//       id: "GEM/2025/B/4521",
//       title: "Supply of High Performance Laptops",
//       dept: "Ministry of Defence",
//       value: "₹ 1.2 Cr",
//       endDate: "2 Days Left",
//       status: "Closing Soon",
//       statusColor: "text-orange-400 bg-orange-400/10 border-orange-400/20"
//     },
//     {
//       id: "GEM/2025/B/8892",
//       title: "Annual Maintenance Contract (AMC) for Servers",
//       dept: "Indian Railways",
//       value: "₹ 45 Lakhs",
//       endDate: "15 Jan 2026",
//       status: "Active",
//       statusColor: "text-green-400 bg-green-400/10 border-green-400/20"
//     },
//     {
//       id: "GEM/2025/B/1209",
//       title: "Procurement of Office Furniture & Chairs",
//       dept: "Central Public Works Dept (CPWD)",
//       value: "₹ 8.5 Lakhs",
//       endDate: "Expired",
//       status: "Closed",
//       statusColor: "text-red-400 bg-red-400/10 border-red-400/20"
//     },
//     {
//       id: "GEM/2025/B/6734",
//       title: "Installation of CCTV Surveillance System",
//       dept: "Delhi Police HQ",
//       value: "₹ 2.5 Cr",
//       endDate: "5 Days Left",
//       status: "Active",
//       statusColor: "text-green-400 bg-green-400/10 border-green-400/20"
//     },
//     {
//       id: "GEM/2025/B/9921",
//       title: "Supply of Medical Equipment Kit",
//       dept: "AIIMS New Delhi",
//       value: "₹ 55 Lakhs",
//       endDate: "Today",
//       status: "Urgent",
//       statusColor: "text-purple-400 bg-purple-400/10 border-purple-400/20"
//     },
//     {
//       id: "GEM/2025/B/3344",
//       title: "Web Development Services for Portal",
//       dept: "Digital India Corporation",
//       value: "₹ 15 Lakhs",
//       endDate: "20 Jan 2026",
//       status: "Active",
//       statusColor: "text-green-400 bg-green-400/10 border-green-400/20"
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen bg-white dark:bg-black relative pt-24 pb-20 px-4 md:px-10">
//        {/* Background Grid (Agar component nahi hai to manually class add kar lena) */}
//        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none"></div>
       
//        {/* Page Header */}
//        <div className="relative z-10 max-w-7xl mx-auto mb-12 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:via-cyan-100 dark:to-[var(--accent-cyan)] bg-clip-text text-transparent">
//             Live Tenders & Bids
//           </h1>
//           <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">
//             Explore the latest government opportunities. Stay updated with real-time bid tracking and easy documentation.
//           </p>
//        </div>

//        {/* Search & Filter Bar */}
//        <div className="relative z-10 max-w-7xl mx-auto mb-10">
//           <div className="flex flex-col md:flex-row gap-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-2 rounded-2xl backdrop-blur-md">
            
//             {/* Search Input */}
//             <div className="flex-1 flex items-center px-4 bg-white dark:bg-black/40 rounded-xl border border-gray-200 dark:border-white/10 h-14">
//               <FaSearch className="text-gray-400 text-lg" />
//               <input 
//                 type="text" 
//                 placeholder="Search by Bid Number, Keyword..." 
//                 className="w-full bg-transparent border-none outline-none text-gray-800 dark:text-white ml-3 placeholder-gray-500"
//               />
//             </div>

//             {/* Filter Button */}
//             <button className="flex items-center justify-center gap-2 px-6 h-14 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-all">
//               <FaFilter /> Filters
//             </button>

//             {/* Search Button */}
//             <button className="px-8 h-14 rounded-xl bg-[var(--accent-cyan)] text-black font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(107,211,211,0.3)]">
//               Search
//             </button>
//           </div>
//        </div>

//        {/* Tenders Grid */}
//        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {tenders.map((tender, index) => (
//             <div key={index} className="group relative bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-6 hover:border-[var(--accent-cyan)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(107,211,211,0.1)]">
              
//               {/* Status Badge */}
//               <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold border ${tender.statusColor}`}>
//                 {tender.status}
//               </div>

//               {/* Tender ID */}
//               <div className="text-xs font-mono text-[var(--accent-cyan)] mb-2 tracking-wider">
//                 {tender.id}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2 leading-tight">
//                 {tender.title}
//               </h3>

//               {/* Dept Info */}
//               <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
//                 <FaBuilding /> {tender.dept}
//               </div>

//               {/* Divider */}
//               <div className="h-px w-full bg-gray-200 dark:bg-white/10 mb-5"></div>

//               {/* Details Row */}
//               <div className="flex justify-between items-end">
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Estimated Value</p>
//                   <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{tender.value}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-xs text-gray-500 mb-1 flex items-center gap-1 justify-end">
//                     <FaClock className="text-[var(--accent-cyan)]" /> Deadline
//                   </p>
//                   <p className="text-sm font-semibold text-gray-700 dark:text-white">{tender.endDate}</p>
//                 </div>
//               </div>

//               {/* Action Button */}
//               <button className="w-full mt-6 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white font-semibold group-hover:bg-[var(--accent-cyan)] group-hover:text-black group-hover:border-transparent transition-all flex items-center justify-center gap-2">
//                 <FaFileDownload /> View Document
//               </button>
//             </div>
//           ))}
//        </div>

//     </div>
//   );
// };

// export default Bid;




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