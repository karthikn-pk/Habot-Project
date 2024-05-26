import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-900 h-[250px]">
      <div className="py-8 m-8 ">
        <hr className="border-t-2 border-gray-500 my-4" />
        <div className="flex justify-around">
          <div className="flex justify-between">
            <div className="text-white">
              <img
                src="https://storage.googleapis.com/varal-habot-vault-marketplace-10032022/images/updated%20trans-Habot-logo-png.png"
                alt=""
                className="w-[180px]"
              />
              <p>© R Singhania</p>
            </div>
            <div className="flex text-white p-4">
              <ul className="m-2">
                <p className="font-bold">Company</p>
                <li>About</li>
                <li>FAQ</li>
                <li></li>
              </ul>
              <ul className="m-2">
                <p className="font-bold">Terms</p>
                <li>Data Privacy</li>
                <li>Terms</li>
                <li>Accessiblity</li>
              </ul>
              <ul className="m-2">
                <p className="font-bold">Related</p>
                <li>Find Buyer</li>
                <li>Feedback</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="bg-white text-blue-900 text-3xl  rounded-md m-2">
              <BsLinkedin />
            </p>
            <p className="bg-white text-blue-900 text-3xl rounded-md m-2">
              <ImFacebook2 />
            </p>
            <p className="bg-white text-blue-900 text-3xl border border-gray-500 rounded-md m-2">
              <SlSocialTwitter />
            </p>
            <p className="bg-white text-blue-900 text-3xl border border-gray-500 rounded-md m-2">
              <FaInstagramSquare />
            </p>
          </div>
        </div>
        <hr className="border-t-2 border-gray-500 my-4" />
      </div>
    </div>
  );
};

export default Footer;
