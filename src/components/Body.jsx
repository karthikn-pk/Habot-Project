import React, { useState } from "react";
import { ImUserPlus } from "react-icons/im";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { FaUserPen } from "react-icons/fa6";
import { PiNotePencilBold } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa6";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const Body = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div
        className="bg-cover flex bg-center w-full h-[450px]"
        style={{
          backgroundImage: `url('https://i.ytimg.com/vi/lflCmjW7RlI/maxresdefault.jpg')`,
        }}>
        <div className="bg-blue-700 bg-opacity-60 w-full h-full flex flex-col justify-center items-center ">
          <h1 className="text-white font-bold text-5xl m-4">
            Are You a Supplier?
          </h1>
          <h1 className="text-white text-4xl m-4">
            Explore Matching Opportunities
          </h1>
          <div className="flex m-4 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BsFillBriefcaseFill className="text-orange-500 text-3xl" />
            </div>
            <input
              type="text"
              className="p-4 pl-12 pr-4 m-2 w-[300px] rounded-md"
              placeholder="Search your required service here"
            />

            <div className="absolute inset-y-0 left-[45%] pl-3 flex items-center pointer-events-none">
              <MdLocationOn className=" text-orange-600 text-3xl" />{" "}
            </div>
            <input
              type="text"
              className="p-4 pl-12 pr-4 m-2 w-[300px] rounded-md"
              placeholder="Search your desired location here"
            />

            <button className="bg-green-800 w-24 h-12 mt-3 font-bold rounded-md text-white">
              Search
            </button>
          </div>
          <div className="flex text-white m-4">
            <p>Are you a Buyer? </p>{" "}
            <p className="underline">
              Click here if you are looking to post a requirements
            </p>
          </div>
        </div>
      </div>
      {/* second div */}
      <div className="flex p-16 justify-center items-center">
        <div className="w-[650px] p-6 ">
          <h1 className="text-4xl font-bold">
            Ready to dive into <span className="text-violet-900">HABOT?</span>{" "}
          </h1>
          <p className="m-4 text-xl">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="bg-green-700 text-xl font-bold text-white w-80 rounded-md p-4">
            {" "}
            Sign up Today !
          </button>
        </div>
        <div className="w-[650px] p-6 grid grid-cols-2 gap-4">
          <button className="btn-hover">Abu Dhabi</button>
          <button className="btn-hover">Dubai</button>
          <button className="btn-hover">Sharjah & Ajman</button>
          <button className="btn-hover">Fujairah</button>
          <button className="btn-hover">Ras Al Khaimah</button>
          <button className="btn-hover">Umm Al Quwain</button>
        </div>
      </div>

      {/* THIRD div */}
      <div className="bg-blue-950 flex w-[1400px] h-[650px] mx-auto justify-around rounded-md">
        <div className="my-auto">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/i8tgRHXx4oQ?si=DbPD-Ekq_zN8Prvp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            className="rounded-md"
            allowfullscreen></iframe>
        </div>
        <div className=" mt-[10%]">
          <div className="text-white  ">
            <button
              className="text-3xl focus:text-orange-500 focus:border-b-3 focus:border-orange-500 mr-5"
              onClick={() => {
                setToggle(!toggle);
              }}>
              Buyer
            </button>
            <button
              className="text-3xl focus:text-orange-500 focus:border-b-3 focus:border-orange-500"
              onClick={() => {
                setToggle(!toggle);
              }}>
              Supplier
            </button>
            {toggle ? (
              <ul className="m-4 text-xl list-disc">
                <li>Post your Requirements</li>
                <li>Sit back for multiple suppliers to contact you</li>
                <li>
                  Choose among the supplier based on the rating and reviews
                </li>
              </ul>
            ) : (
              <ul className="m-4 text-xl list-disc">
                <li>Complete your Profile and get Verified.</li>
                <li>Select service tags for relavant Opportunities.</li>
                <li>Reach out to buyers and expand your business.</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* fourth div */}

      <div className="bg-green-100 flex justify-around h-[200px] my-8">
        <div className="my-auto text-5xl">
          Let Suppliers{" "}
          <span className="border-b-4 border-red-500">Find You</span>
        </div>
        <div className="my-auto">
          <button className="bg-red-500 p-3 text-white rounded-md">
            Get Verified
          </button>
        </div>
      </div>

      {/* fifth div */}

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-6 text-center">
            <div className="text-8xl ml-[40%]">
              <ImUserPlus />
            </div>

            <h3 className="font-semibold text-lg">
              Select Your Role and Sign Up
            </h3>
          </div>
          <div className=" p-6 text-center">
            <div className="text-8xl ml-[40%]">
              <HiOutlineDocumentCheck />
            </div>

            <h3 className="font-semibold text-lg">
              Buyers Post Your Requirements
            </h3>
          </div>
          <div className="bg-blue-100 p-6 text-center">
            <div className="text-8xl ml-[40%]">
              {" "}
              <HiDocumentMagnifyingGlass />
            </div>

            <h3 className="font-semibold text-lg">
              Review, Select, and Contact the Best Suppliers
            </h3>
          </div>
          <div className=" p-6 text-center">
            <div className="text-8xl ml-[40%]">
              <FaUserPen />
            </div>

            <h3 className="font-semibold text-lg">
              Suppliers Complete Your Profile and Get Notified for Opportunities
            </h3>
          </div>
          <div className="bg-blue-100 p-6 text-center">
            <div className="text-8xl ml-[40%]">
              <PiNotePencilBold />
            </div>

            <h3 className="font-semibold text-lg">
              Contact to Buyers and Share Your Quote for the Service
            </h3>
          </div>
          <div className=" p-6 text-center">
            <div className="text-8xl ml-[40%]">
              {" "}
              <FaRegHandshake />
            </div>

            <h3 className="font-semibold text-lg">
              Both the Parties Can Connect and Make Business Leave a Feedback
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
