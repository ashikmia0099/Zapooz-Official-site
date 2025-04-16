import React from 'react'
import { FaEdit } from "react-icons/fa";

import { MdDeleteForever } from 'react-icons/md'

function AllBlogs() {
  return (
    <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
      <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Create Blog Category</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Blog Title</th>
              <th>Blog Category</th>
              <th>Update</th>
              <th>Delete</th>


            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>

              <td className="font-bold">
                BlogChain Technology
              </td>
              <td>
                BlockChain
              </td>
              <td><FaEdit className=' text-3xl text-[#9EFF00]' /></td>
              <td><MdDeleteForever className=' text-3xl text-red-500' /></td>

            </tr>


          </tbody>

        </table>
      </div>
    </div>
  )
}

export default AllBlogs