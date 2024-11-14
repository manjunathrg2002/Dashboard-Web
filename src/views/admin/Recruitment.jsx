import React from "react";
import { BsFillPinAngleFill } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Recruitment = () => {
  

  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "short", // Day as a 3-character abbreviation (e.g., "Mon")
    month: "short", // Month as a 3-character abbreviation (e.g., "Nov")
    day: "numeric", // Day of the month
    year: "numeric",
  });

  return (
    <div className="px-2 md:px-7 py-2">
      <div>
        <h1 className="text-[24px] font-semibold ml-1">Recruitment</h1>
      </div>

      <div className="w-full flex flex-wrap mt-2">
        <div className="w-full lg:w-7/12 lg:pr-3 space-y-6">
          {/* Grid for the first three smaller cards */}


          {/* Announcement Section */}
          <div className="w-full p-4 rounded-md text-[#d0d2d6] border border-[#FAFAFA]-300">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-[#303030]">
                Announcement
              </h2>
              <time
                className="font-semibold text-nowrap text-[#303030] cursor-pointer border p-1 rounded-lg flex items-center"
                
              >
                {formattedDate}
                <FaChevronDown className="text-[#B2B2B2] ml-2" />
              </time>
            </div>

            <div className="flex flex-col gap-2 pt-4 text-[#d0d2d6]">
              <ol className="relative border-1">
                <li className="mb-3">
                  <div className="p-4 bg-[#FAFAFA] rounded-lg border border-[#FAFAFA]-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-medium text-[#303030]">
                        Outing schedule for every department
                      </Link>
                      <div className="flex items-center space-x-2 py-auto">
                        <BsFillPinAngleFill className="text-[22px] mx-6" />
                        <HiDotsHorizontal className="text-[22px] mx-6" />
                      </div>
                    </div>
                    <div className="text-[#686868] text-[12px]">
                      5 Minutes ago
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="p-4 bg-[#FAFAFA] rounded-lg border border-[#FAFAFA]-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-medium text-[#303030]">
                        Outing schedule for every department
                      </Link>
                      <div className="flex items-center space-x-2">
                        <BsFillPinAngleFill className="text-[22px] mx-6" />
                        <HiDotsHorizontal className="text-[22px] mx-6" />
                      </div>
                    </div>
                    <div className="text-[#686868] text-[12px]">
                      5 Minutes ago
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="p-4 bg-[#FAFAFA] rounded-lg border border-[#FAFAFA]-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-medium text-[#303030]">
                        Outing schedule for every department
                      </Link>
                      <div className="flex items-center space-x-2">
                        <BsFillPinAngleFill className="text-[22px] mx-6" />
                        <HiDotsHorizontal className="text-[22px] mx-6" />
                      </div>
                    </div>
                    <div className="text-[#686868] text-[12px]">
                      5 Minutes ago
                    </div>
                  </div>
                </li>
              </ol>
              <hr className="border-t border-gray-300" />
              <div className="text-[#FF5151] text-center">
                See All Announcement
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#161E54] p-4 rounded-md text-[#d0d2d6]">
            <div className="w-full flex justify-between bg-[#1B204A] items-center">
              <h2 className="font-semibold text-lg  text-[#FFFFFF] p-2 pb-3">
                Recently Activity
              </h2>
              
            </div>

            <div className="flex flex-col justify-start items-start text-[#FFFFFF]">
              <div className="text-[10px] text-[#d0d2d6] px-2">
                10.40 AM, Fri 10 Sept 2021
              </div>
              <span className="text-md font-medium text-[18px] p-2">
                You Posted a New Job
              </span>

              <span className="text-md  text-[14px] p-2 text-[#d0d2d6] ">
                Kindly check the requirements and terms of work and make sure
                everything is right.
              </span>
            </div>
            <div className="flex justify-between items-center text-white p-2">
              <div>Today you made 12 Activities</div>
              <div>
                <button className="bg-[#FF5151] text-white px-4 py-2 rounded">
                  See All Activity
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-4 rounded-md text-[#d0d2d6] border border-gray-300 mt-6">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-[#303030]">
                Upcoming Schedule
              </h2>
              <time
                className="font-semibold text-nowrap text-[#303030] cursor-pointer border p-1 rounded-lg flex items-center"
                
              >
                {formattedDate}
                <FaChevronDown className="text-[#B2B2B2] ml-2" />
              </time>
            </div>

            <div className="flex flex-col gap-2 pt-2 text-[#d0d2d6]">
              <ol className="relative border-1">
                <li className="mb-3">
                  <div className="py-2 text-[#686868]">Priority</div>
                  <div className="p-4 bg-[#FAFAFA]  rounded-lg border border-[#FAFAFA]-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-medium text-[#303030]">
                        Review candidate applications
                      </Link>
                      <div className="flex items-center space-x-2 py-auto ">
                        <HiDotsHorizontal className="text-[22px] mx-6" />
                      </div>
                    </div>

                    <div className="text-[#686868] text-[12px]">
                      Today - 11.30 AM
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="py-2 text-[#686868]">Other</div>
                  <div className="p-4 bg-[#FAFAFA]  rounded-lg border border-[#FAFAFA]-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-medium text-[#303030]">
                        Interview with candidates
                      </Link>
                      <div className="flex items-center space-x-2">
                        <HiDotsHorizontal className="text-[22px] mx-6" />
                      </div>
                    </div>

                    <div className="text-[#686868] text-[12px]">
                      Today - 10.30 AM
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="p-4 bg-[#FAFAFA]  rounded-lg border border-[#FAFAFA]-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-medium text-[#303030]">
                        Short meeting with product designer from IT Departement
                      </Link>
                      <div className="flex items-center space-x-2">
                        <HiDotsHorizontal className="text-[22px] mx-6" />
                      </div>
                    </div>

                    <div className="text-[#686868] text-[12px]">
                      Today - 09.15 AM
                    </div>
                  </div>
                </li>
              </ol>
              <hr className="border-t border-gray-300" />
              <div className="text-[#FF5151] text-center">
                Creat a New Schedule
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recruitment;
