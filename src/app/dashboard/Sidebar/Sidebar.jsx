
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaHome, FaUsers, FaNetworkWired, FaNewspaper, FaProjectDiagram, FaWpforms, FaList, FaRegListAlt } from "react-icons/fa";
import { MdBroadcastOnHome, MdMedicalServices, MdOutlineMiscellaneousServices, MdMiscellaneousServices, MdCategory } from "react-icons/md";
import { GiLifeBar, GiNewspaper, GiChoice } from "react-icons/gi";
import { VscServerProcess } from "react-icons/vsc";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { FaFileWaveform } from 'react-icons/fa6';
import { FaEdit } from "react-icons/fa";
import { LuUsersRound } from 'react-icons/lu';



function Sidebar() {
  const pathname = usePathname();

  // Separate dropdown states
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [AllUsersdropDown, setAllUsers] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);
  const [processDropdown, setProcessDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [blogsDropdown, setBlogsDropdown] = useState(false);
  const [careersDropdown, setCareersDropdown] = useState(false);


  const isActive = (href) => {
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  const menuItemClass = (active) =>
    `text-lg font-semibold flex gap-3 items-center  pb-4 ${active ? "text-[#9EFF00]" : "text-white"}`;

  const renderDropdownIcon = (open) =>
    <IoIosArrowDown className={`text-2xl transition-transform ${open ? "rotate-180" : "rotate-0"}`} />;

  return (
    <div className="bg-[#191919] h-full ">
      <div className="max-w-[1596px] mx-auto ">
        {/* Home */}
        <li className={`${menuItemClass(isActive("/"))} flex-col gap-3 py-2  px-5`}>
          <div className="flex items-center  justify-between cursor-pointer w-full" onClick={() => setHomeDropdown(!homeDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaHome /></span>
              <span>Home</span>
            </div>
            <div>
              {renderDropdownIcon(homeDropdown)}
            </div>
          </div>
          {homeDropdown && (
            <ul className="ml-6 mt-2 border-l border-gray-600 pl-4">
              <li className={menuItemClass(isActive("/components/Work"))}>
                <span className="text-2xl"><MdMiscellaneousServices /></span>
                <Link href="/components/Work">Our Service</Link>
              </li>
              <li className={menuItemClass(isActive("/components/Process"))}>
                <span className="text-2xl"><GiChoice /></span>
                <Link href="/components/Process">Why Choice</Link>
              </li>
              <li className={menuItemClass(isActive("/components/AboutUs"))}>
                <span className="text-2xl"><FaUsers /></span>
                <Link href="/components/AboutUs">Client Say</Link>
              </li>
            </ul>
          )}
        </li>
        {/* Login logout users */}
      

        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setAllUsers(!AllUsersdropDown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaUsers /></span>
              <span>All User Information</span>
            </div>
            {renderDropdownIcon(AllUsersdropDown)}
          </div>
          {AllUsersdropDown && (
            <ul className=" mt-2 border-l border-gray-600 pl-4">
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><LuUsersRound /></span>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers">All Users</Link>
              </li>

            </ul>
          )}
        </li>

        {/* Services */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setServiceDropdown(!serviceDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><MdOutlineMiscellaneousServices /></span>
              <span>Services</span>
            </div>
            {renderDropdownIcon(serviceDropdown)}
          </div>
          {serviceDropdown && (
            <ul className="ml-6 mt-2 border-l border-gray-500 pl-4">
              <li className={menuItemClass(isActive("/components/Work"))}>
                <span className="text-2xl"><MdMedicalServices /></span>
                <Link href="/components/Work">All Services</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Work */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setWorkDropdown(!workDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaNetworkWired /></span>
              <span>Work</span>
            </div>
            {renderDropdownIcon(workDropdown)}
          </div>
          {workDropdown && (
            <ul className=" mt-2  ">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaProjectDiagram /></span>
                <Link href="/dashboard/DashboardWork/AllProject">All Project</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaWpforms /></span>

                <Link href="/dashboard/DashboardWork/ProjectForm">Project Form</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Process */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setProcessDropdown(!processDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><VscServerProcess /></span>
              <span>Process</span>
            </div>
            {renderDropdownIcon(processDropdown)}
          </div>
          {processDropdown && (
            <ul className="ml-6 mt-2 border-l border-gray-500 pl-4">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><VscServerProcess /></span>
                <Link href="/components/Process">Process</Link>
              </li>
            </ul>
          )}
        </li>

        {/* About */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setAboutDropdown(!aboutDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><TbArrowRoundaboutRight /></span>
              <span>About</span>
            </div>
            {renderDropdownIcon(aboutDropdown)}
          </div>
          {aboutDropdown && (
            <ul className="ml-6 mt-2 border-l border-gray-500 pl-4">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><MdBroadcastOnHome /></span>
                <Link href="/components/Process">About</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Blogs */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setBlogsDropdown(!blogsDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaNewspaper /></span>
              <span>Blogs</span>
            </div>
            {renderDropdownIcon(blogsDropdown)}
          </div>
          {blogsDropdown && (
            <ul className=" mt-2 border-l border-gray-500 pl-4">
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/AllBlogs'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaRegListAlt /></span>
                <Link href="/dashboard/DashboardBlogs/AllCategory">All Category</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/AllBlogs'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/dashboard/DashboardBlogs/AllBlogs">All Blogs</Link>
              </li>

              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/BlogCategroy'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DashboardBlogs/BlogCategroy">Blog Categroy From</Link>
              </li>

              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/BlogPostForm'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/dashboard/DashboardBlogs/BlogPostForm">Blog Post Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/EditBlog'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaEdit /></span>
                <Link href="/dashboard/DashboardBlogs/EditBlog">Blog Edit Form</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/EditBlog'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaEdit /></span>
                <Link href="/dashboard/DashboardBlogs/EditBlog">Blogs All Category</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Careers */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setCareersDropdown(!careersDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><GiLifeBar /></span>
              <span>Careers</span>
            </div>
            {renderDropdownIcon(careersDropdown)}
          </div>
          {careersDropdown && (
            <ul className="ml-6 mt-2 border-l border-gray-500 pl-4">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><GiNewspaper /></span>
                <Link href="/components/Process">Careers</Link>
              </li>
            </ul>
          )}
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
