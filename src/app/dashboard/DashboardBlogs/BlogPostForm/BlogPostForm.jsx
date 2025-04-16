

// 'use client'

// import React, { useState } from 'react';
// import { TiPlus } from "react-icons/ti";
// import { useAuth } from '../../../../../context/AuthContext';
// import Swal from 'sweetalert2';
// import UploadToImageKit from '@/app/ImageUploadSite/UploadToImageKit';

// function BlogPostForm() {

//     const { blogallcategory, setblogallcategory } = useAuth()
//     const [increseDescripton, setincreseDescripton] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState(null);


//     const addSection = () => {
//         setincreseDescripton(prev => [...prev, { id: Date.now() }]);
//     };

//     console.log(blogallcategory)


//     // handle form data


//     // const handleFormSubmit = async (e) => {
//     //     e.preventDefault();
//     //     const form = new FormData(e.target);

//     //     const AuthorName = form.get('authorname');
//     //     const PassionName = form.get('passonename');
//     //     const BlogCategory = form.get('categorytype');
//     //     const BlogTitle = form.get('blogtitle');
//     //     const BlogImage = form.get('blogimage');

//     //     // Static Section 1
//     //     const DescriptionTitle = form.get('descriptiontitle');
//     //     const DescriptionImage = form.get('descriptionimage');
//     //     const Description = form.get('description');

//     //     // Dynamic Sections
//     //     const dynamicDescriptions = increseDescripton.map((section, index) => ({
//     //         title: form.get(`descriptionTitle_${index}`),
//     //         image: form.get(`descriptionImage_${index}`),
//     //         text: form.get(`descriptionDescription_${index}`),
//     //     }));

//     //     // Example Output
//     //     console.log({
//     //         AuthorName,
//     //         PassionName,
//     //         BlogCategory,
//     //         BlogTitle,
//     //         BlogImage,
//     //         DescriptionTitle,
//     //         DescriptionImage,
//     //         Description,
//     //         dynamicDescriptions,
//     //     });

//     //     const blogsData = {
//     //         AuthorName: AuthorName,
//     //         PassionName: PassionName,
//     //         BlogCategory: BlogCategory,
//     //         BlogTitle: BlogTitle,
//     //         BlogImage: BlogImage,
//     //         DescriptionTitle: DescriptionTitle,
//     //         DescriptionImage: DescriptionImage,
//     //         Description: Description,
//     //         dynamicDescriptions: dynamicDescriptions,
//     //     }



//     //     try {
//     //         const blogdatares = await fetch("http://localhost:3000/api/blogsapi/BlogPostapi", {
//     //             method: 'POST',
//     //             headers: {
//     //                 'content-type': 'application/json'
//     //             },
//     //             body: JSON.stringify(blogsData)
//     //         })

//     //         const res = await  blogdatares.json();
//     //         if (res.insertedId) {
//     //             Swal.fire({
//     //                 position: 'top-end',
//     //                 icon: 'success',
//     //                 title: 'Your Post Successfully Added!',
//     //                 showConfirmButton: false,
//     //                 timer: 1500
//     //             });
//     //             e.target.reset();
//     //         } else {
//     //             Swal.fire({
//     //                 title: 'Error!',
//     //                 text: 'Something went wrong.',
//     //                 icon: 'error',
//     //                 confirmButtonText: 'Try again'
//     //             });
//     //         }

//     //     } catch (error) {
//     //         Swal.fire({
//     //             title: 'Network Error!',
//     //             text: error.message,
//     //             icon: 'error',
//     //             confirmButtonText: 'OK'
//     //         });
//     //     }




//     // };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         const form = new FormData(e.target);

//         const AuthorName = form.get('authorname');
//         const PassionName = form.get('passonename');
//         const BlogCategory = form.get('categorytype');
//         const BlogTitle = form.get('blogtitle');
//         const BlogImageFile = form.get('blogimage');

//         const BlogImage = await UploadToImageKit(BlogImageFile);
//         const DescriptionTitle = form.get('descriptiontitle');
//         const DescriptionImageFile = form.get('descriptionimage');
//         const DescriptionImage = await UploadToImageKit(DescriptionImageFile);
//         const Description = form.get('description');
        




//         const dynamicDescriptions = await Promise.all(
//             increseDescripton.map(async (section, index) => {
//                 const title = form.get(`descriptionTitle_${index}`);
//                 const imageFile = form.get(`descriptionImage_${index}`);
//                 const image = imageFile ? await UploadToImageKit(imageFile) : null;
//                 const text = form.get(`descriptionDescription_${index}`);
        
//                 return { title, image, text };
//             })
//         );

//         const blogsData = {
//             AuthorName,
//             PassionName,
//             BlogCategory,
//             BlogTitle,
//             BlogImage,
//             DescriptionTitle,
//             DescriptionImage,
//             Description,
//             dynamicDescriptions,
//         };

//         try {
//             const response = await fetch("http://localhost:3000/api/blogsapi/BlogPostapi", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': "application/json"
//                 },
//                 body: JSON.stringify(blogsData)
//             });

//             const res = await response.json();

//             if (res.insertedId) {
//                 Swal.fire({
//                     position: 'top-end',
//                     icon: 'success',
//                     title: 'Your Post Successfully Added!',
//                     showConfirmButton: false,
//                     timer: 1500
//                 });

//             } else {
//                 Swal.fire({
//                     title: 'Error!',
//                     text: 'Something went wrong.',
//                     icon: 'error',
//                     confirmButtonText: 'Try again'
//                 });
//             }

//         } catch (error) {
//             Swal.fire({
//                 title: 'Network Error!',
//                 text: error.message,
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//         }
//     };



//     return (
//         <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
//             <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Post your Blog</h1>
//             <form onSubmit={handleFormSubmit}>
//                 <fieldset className="fieldset pt-2">
//                     {/* author name */}
//                     <legend className="fieldset-legend text-lg font-semibold pt-5">Author Name</legend>
//                     <input type="text" name='authorname' className="input w-full" placeholder="Author Name" required />
//                     {/* passion name  */}
//                     <legend className="fieldset-legend text-lg font-semibold pt-5">Passion Name</legend>
//                     <input type="text" name='passonename' className="input w-full" placeholder="Passion Name" required />
//                     {/* select blog catgory */}
//                     <legend className="fieldset-legend text-lg font-semibold pt-5">Select Blog Category</legend>
//                     <select
//                         name="categorytype"
//                         onChange={(e) => {
//                             const category = blogallcategory.find(
//                                 (cat) => cat.Blog_Category === e.target.value
//                             );
//                             setSelectedCategory(category);
//                         }}
//                         defaultValue=""
//                         className="select w-full"
//                     >
//                         <option disabled value="">Choose Category Name</option>
//                         {Array.isArray(blogallcategory) &&
//                             blogallcategory.map((singleCategory) => (
//                                 <option key={singleCategory._id}>
//                                     {singleCategory.Blog_Category}
//                                 </option>
//                             ))}
//                     </select>


//                     {/* blog title and image */}
//                     <div className='grid grid-cols-2 gap-3'>
//                         <div>
//                             <legend className="fieldset-legend text-lg font-semibold pt-5">Blog Title</legend>
//                             <input type="text" name='blogtitle' className="input w-full" placeholder="Blog Title" required />
//                         </div>
//                         <div>
//                             <legend className="fieldset-legend text-lg font-semibold pt-5">Blog Image</legend>
//                             <input type="file" name='blogimage' className="file-input w-full" required />
//                         </div>
//                     </div>
//                     {/* increase and descripton */}
//                     <div className='py-4 flex justify-between items-center'>
//                         <h4 className='text-2xl font-semibold uppercase'>Increase Description</h4>
//                         <button
//                             type="button"
//                             className='btn bg-[#9EFF00] border-none text-5xl font-semibold text-black'
//                             onClick={addSection}
//                         >
//                             <TiPlus />
//                         </button>
//                     </div>
//                     {/* default post section */}
//                     <div className=' py-10 pb-16'>
//                         <div>
//                             <h4 className=' text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10' >Section 1</h4>
//                         </div>
//                         <div className='grid grid-cols-2 gap-3'>
//                             <div>
//                                 <legend className="fieldset-legend text-lg font-semibold pt-5">Description Title</legend>
//                                 <input type="text" name='descriptiontitle' className="input w-full" placeholder="Description Title" required />
//                             </div>
//                             <div>
//                                 <legend className="fieldset-legend text-lg font-semibold pt-5">Description Image</legend>
//                                 <input type="file" name='descriptionimage' className="file-input w-full" />
//                             </div>
//                         </div>
//                         <div>
//                             <legend className="fieldset-legend text-lg font-semibold pt-5">Description</legend>
//                             <textarea className="textarea w-full" name='description' placeholder="Description" rows={12} required></textarea>
//                         </div>
//                     </div>
//                     {/* dynamic Descriptions Section */}
//                     {increseDescripton.map((section, index) => (

//                         <div key={section.id} className=' py-10 pb-16'>
//                             <div>
//                                 <h4 className=' text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10' >Section {index + 2}</h4>
//                             </div>
//                             <div className='grid grid-cols-2 gap-3'>
//                                 <div>
//                                     <legend className="fieldset-legend text-lg font-semibold pt-5">Description Title</legend>
//                                     <input type="text" name={`descriptionTitle_${index}`} className="input w-full" placeholder="Description Title" required />
//                                 </div>
//                                 <div>
//                                     <legend className="fieldset-legend text-lg font-semibold pt-5">Description Image</legend>
//                                     <input type="file" name={`descriptionImage_${index}`} className="file-input w-full" />
//                                 </div>
//                             </div>
//                             <div>
//                                 <legend className="fieldset-legend text-lg font-semibold pt-5">Description</legend>
//                                 <textarea className="textarea w-full" name={`descriptionDescription_${index}`} placeholder="Description" rows={12} required></textarea>
//                             </div>
//                         </div>
//                     ))}

//                     <div className='mt-6'>
//                         <button className='btn w-full shadow-2xs rounded-full bg-[#9EFF00] text-lg text-black'>
//                             Submit
//                         </button>
//                     </div>
//                 </fieldset>
//             </form>
//         </div>
//     );
// }

// export default BlogPostForm;




'use client'

import React, { useState } from 'react';
import { TiPlus } from "react-icons/ti";
import { useAuth } from '../../../../../context/AuthContext';
import Swal from 'sweetalert2';
import uploadToImageKit from '@/app/ImageUploadSite/UploadToImageKit';


function BlogPostForm() {
    const { blogallcategory } = useAuth();
    const [increseDescripton, setincreseDescripton] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const addSection = () => {
        setincreseDescripton(prev => [...prev, { id: Date.now() }]);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const AuthorName = form.get('authorname');
        const PassionName = form.get('passonename');
        const BlogCategory = form.get('categorytype');
        const BlogTitle = form.get('blogtitle');

        const BlogImageFile = form.get('blogimage');
        const BlogImage = BlogImageFile ? await uploadToImageKit(BlogImageFile) : '';

        const DescriptionTitle = form.get('descriptiontitle');
        const DescriptionImageFile = form.get('descriptionimage');
        const DescriptionImage = DescriptionImageFile ? await uploadToImageKit(DescriptionImageFile) : '';
        const Description = form.get('description');

        const dynamicDescriptions = await Promise.all(
            increseDescripton.map(async (section, index) => {
                const title = form.get(`descriptionTitle_${index}`);
                const imageFile = form.get(`descriptionImage_${index}`);
                const image = imageFile ? await uploadToImageKit(imageFile) : null;
                const text = form.get(`descriptionDescription_${index}`);
                return { title, image, text };
            })
        );

        const blogsData = {
            AuthorName,
            PassionName,
            BlogCategory,
            BlogTitle,
            BlogImage,
            DescriptionTitle,
            DescriptionImage,
            Description,
            dynamicDescriptions,
        };

        try {
            const response = await fetch("http://localhost:3000/api/blogsapi/BlogPostapi", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blogsData),
            });

            const res = await response.json();

            if (res.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Post Successfully Added!',
                    showConfirmButton: false,
                    timer: 1500
                });
                e.target.reset();
                setincreseDescripton([]);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong.',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Network Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Post your Blog</h1>
            <form onSubmit={handleFormSubmit}>
                <fieldset className="fieldset pt-2">
                    <legend className="text-lg font-semibold pt-5">Author Name</legend>
                    <input type="text" name='authorname' className="input w-full" placeholder="Author Name" required />

                    <legend className="text-lg font-semibold pt-5">Passion Name</legend>
                    <input type="text" name='passonename' className="input w-full" placeholder="Passion Name" required />

                    <legend className="text-lg font-semibold pt-5">Select Blog Category</legend>
                    <select
                        name="categorytype"
                        onChange={(e) => {
                            const category = blogallcategory.find(cat => cat.Blog_Category === e.target.value);
                            setSelectedCategory(category);
                        }}
                        defaultValue=""
                        className="select w-full"
                    >
                        <option disabled value="">Choose Category Name</option>
                        {Array.isArray(blogallcategory) && blogallcategory.map(cat => (
                            <option key={cat._id}>{cat.Blog_Category}</option>
                        ))}
                    </select>

                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <legend className="text-lg font-semibold pt-5">Blog Title</legend>
                            <input type="text" name='blogtitle' className="input w-full" placeholder="Blog Title" required />
                        </div>
                        <div>
                            <legend className="text-lg font-semibold pt-5">Blog Image</legend>
                            <input type="file" name='blogimage' className="file-input w-full" required />
                        </div>
                    </div>

                    <div className='py-4 flex justify-between items-center'>
                        <h4 className='text-2xl font-semibold uppercase'>Increase Description</h4>
                        <button
                            type="button"
                            className='btn bg-[#9EFF00] border-none text-5xl font-semibold text-black'
                            onClick={addSection}
                        >
                            <TiPlus />
                        </button>
                    </div>

                    <div className='py-10 pb-16'>
                        <div>
                            <h4 className='text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10'>Section 1</h4>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Description Title</legend>
                                <input type="text" name='descriptiontitle' className="input w-full" placeholder="Description Title" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Description Image</legend>
                                <input type="file" name='descriptionimage' className="file-input w-full" />
                            </div>
                        </div>
                        <div>
                            <legend className="text-lg font-semibold pt-5">Description</legend>
                            <textarea className="textarea w-full" name='description' placeholder="Description" rows={12} required></textarea>
                        </div>
                    </div>

                    {increseDescripton.map((section, index) => (
                        <div key={section.id} className='py-10 pb-16'>
                            <div>
                                <h4 className='text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10'>
                                    Section {index + 2}
                                </h4>
                            </div>
                            <div className='grid grid-cols-2 gap-3'>
                                <div>
                                    <legend className="text-lg font-semibold pt-5">Description Title</legend>
                                    <input type="text" name={`descriptionTitle_${index}`} className="input w-full" placeholder="Description Title" required />
                                </div>
                                <div>
                                    <legend className="text-lg font-semibold pt-5">Description Image</legend>
                                    <input type="file" name={`descriptionImage_${index}`} className="file-input w-full" />
                                </div>
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5">Description</legend>
                                <textarea className="textarea w-full" name={`descriptionDescription_${index}`} placeholder="Description" rows={12} required></textarea>
                            </div>
                        </div>
                    ))}

                    <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                        Submit Blog Post
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default BlogPostForm;
