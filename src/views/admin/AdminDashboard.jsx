import React from "react";
import { BsFillPinAngleFill } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3 space-y-6">
          {/* Grid for the first three smaller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 - Available Position */}
            <div className="flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-2 h-[130px] mx-auto">
              <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
                <span className="text-md font-medium text-[18px]">
                  Available Position
                </span>
                <h2 className="text-3xl font-bold">24</h2>
                <span className="text-md font-medium text-[#FF5151]">
                  4 Urgently needed
                </span>
              </div>
            </div>

            {/* Card 2 - Job Open */}
            <div className="flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-2 h-[130px] mx-auto">
              <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
                <span className="text-md font-medium text-[18px]">
                  Job Open
                </span>
                <h2 className="text-3xl font-bold">10</h2>
                <span className="text-md font-medium text-[#3786F1]">
                  4 Active hiring
                </span>
              </div>
            </div>

            {/* Card 3 - New Employees */}
            <div className="flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-2 h-[130px] mx-auto">
              <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
                <span className="text-md font-medium text-[18px]">
                  New Employees
                </span>
                <h2 className="text-3xl font-bold">24</h2>
                <span className="text-md font-medium text-[#EE61FC]">
                  4 Department
                </span>
              </div>
            </div>
          </div>

          {/* Grid for the last two larger cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 4 - Total Employees */}
            <div className="flex justify-between items-center border border-gray-300 px-3 rounded-md gap-2 h-[190px] mx-auto">
              <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
                <span className="text-md font-medium text-[19px] mb-3">
                  Total Employees
                </span>
                <h2 className="text-3xl font-bold text-[40px] mb-6">216</h2>
                <span className="text-md font-medium text-[12px] mb-1">
                  120 Men
                </span>
                <span className="text-md font-medium text-[12px]">
                  64 Women
                </span>
              </div>
              <div>
                <img
                  className="w-[104px] h-[120px]"
                  src="http://localhost:3000/images/Frame 52.jpg"
                  alt="Total Employees"
                />
              </div>
            </div>

            {/* Card 5 - Talent Request */}
            <div className="flex justify-between items-center border border-gray-300 px-3 rounded-md gap-2 h-[190px] mx-auto">
              <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
                <span className="text-md font-medium text-[19px] mb-3">
                  Talent Request
                </span>
                <h2 className="text-3xl font-bold text-[40px] mb-6">16</h2>
                <span className="text-md font-medium text-[12px] mb-1">
                  6 Men
                </span>
                <span className="text-md font-medium text-[12px]">
                  10 Women
                </span>
              </div>
              <div>
                <img
                  className="w-[104px] h-[120px]"
                  src="http://localhost:3000/images/Frame 51.jpg"
                  alt="Talent Request"
                />
              </div>
            </div>
          </div>

          {/* Announcement Section */}
          <div className="w-full p-4 rounded-md text-[#d0d2d6] border border-[#FAFAFA]-300">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-[#303030]">
                Announcement
              </h2>
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
        F
      </div>
    </div>
  );
};
export default AdminDashboard;
