'use client'
import React from 'react'
import { FaEdit } from "react-icons/fa";

import { MdDeleteForever } from 'react-icons/md'
import { useAuth } from '../../../../../context/AuthContext';

function AllBlogs() {


  const { allblogs, setblogs } = useAuth();
  console.log(allblogs)

  return (
    <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
      <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Create Blog Category</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th className=' text-center'>Index</th>
              <th className=' text-center'>Blog Title</th>
              <th className=' text-center'>Blog Category</th>
              <th className=' text-center'>Author Name</th>
              <th className=' text-center'>Update</th>
              <th className=' text-center'>Delete</th>


            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
              allblogs.map((blog,index) => <tr key={blog._id}>
              <td className="font-bold text-center">
                {index + 1}
              </td>
              <td className="font-bold text-center">
                {blog.BlogTitle}
              </td>
              <td className="text-center">
                {blog.BlogCategory}
              </td>
              <td className="text-center">
                {blog.AuthorName}
              </td>
              <td className="text-center"><FaEdit className=' text-3xl text-[#9EFF00] text-center' /></td>
              <td className="text-center"><MdDeleteForever className=' text-3xl text-red-500 text-center' /></td>

            </tr>)
            }
           


          </tbody>

        </table>
      </div>
    </div>
  )
}

export default AllBlogs