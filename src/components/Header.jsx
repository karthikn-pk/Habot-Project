import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-4">
      <div>
        <img
          src="https://storage.googleapis.com/varal-habot-vault-marketplace-10032022/images/updated%20trans-Habot-logo-png.png"
          alt=""
          className="w-[180px] ml-6"
        />
      </div>
      <div className="p-6">
        <button className="m-3 text-gray-600">Find Suppliers</button>
        <button className="m-3  text-gray-600">Find Service Tags</button>
        <button className="p-4 font-bold text-green-700 text-xl border border-green-700 rounded-md">
          Login / Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
