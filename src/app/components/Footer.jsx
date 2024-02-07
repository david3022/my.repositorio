import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
       <img src="/images/logo.png" alt="Logo" className="mr-2 h-24 w-24" />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );  
};

export default Footer;
