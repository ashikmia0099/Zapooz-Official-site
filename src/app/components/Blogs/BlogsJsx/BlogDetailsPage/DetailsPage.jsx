import React from 'react'

import blogimage from "../../../../../../public/images/blogsimages/Container2.png"
import Image from 'next/image'

function DetailsPage() {
    return (

        <div className='bg-[#191919]'>
            <div className='max-w-[1596px] mx-auto pt-16 '>
                {/* user and title section */}
                <div className='gap-10 grid grid-cols-2 border-b pb-10'>
                    {/* image seciton */}
                    <div>
                        <Image src={blogimage} className=' w-full h-[450px]'></Image>
                    </div>
                    {/* text section */}
                    <div className=' pr-5'>
                        <h1 className=' text-4xl leading-14 font-semibold uppercase'>Is Graph Machine Learning the New Cryptocurrency Police?  </h1>
                        <div className=' flex items-center gap-6 mt-10'>
                            <div>
                                <Image src={blogimage} className=' h-16 w-16 rounded-full'></Image>
                            </div>
                            <div className=''>
                                <div className=' flex gap-7 py-2'>
                                    <h1 className=' text-2xl font-semibold'>Ashik Ahammed <span className='pl-3'> |</span></h1>
                                    <h1 className=' text-2xl font-semibold -pl-1'>Junior web developer</h1>
                                </div>
                                <div className=' flex gap-5 font-semibold'>
                                    <h4>15 min read</h4>
                                    <h4>Apr 3, 2025</h4>
                                </div>
                            </div>
                        </div>
                        <div className=' py-4 flex gap-6 items-center '>

                            <div className="rating">
                                <div className="mask mask-star text-3xl" aria-label="1 star"></div>
                                <div className="mask mask-star text-3xl" aria-label="2 star"></div>
                                <div className="mask mask-star text-3xl" aria-label="3 star" aria-current="true"></div>
                                <div className="mask mask-star text-3xl" aria-label="4 star"></div>
                                <div className="mask mask-star text-3xl" aria-label="5 star"></div>
                            </div>
                            <div className='text-xl font-semibold'>
                                Rating 4.5/5
                            </div>
                        </div>
                        <div>
                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure text-primary">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="inline-block h-8 w-8 stroke-current">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="stat-title">Total Likes</div>
                                    <div className="stat-value text-primary">25.6K</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="inline-block h-8 w-8 stroke-current">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    <div className="stat-title">Page Views</div>
                                    <div className="stat-value text-secondary">2.6M</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <div className="avatar online">
                                            <div className="w-16 rounded-full">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stat-value">86%</div>
                                    <div className="stat-title">Tasks done</div>
                                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* pragraph section */}

                <div className=' w-[90%] py-16 mx-auto border-b pb-20'>
                    <h3 className=' text-3xl font-semibold py-6'> Introduction</h3>
                    <p className=' text-xl'>

                        We can notice the occurrence of graphs everywhere. When faced with decision making one of the first approaches that are thaught to children are decision trees. Later on, we are prompted to draw mind maps. With a little bit of observation, we can see that social circles are also graphs. Roads and cities can be graphs, molecules can be graphs and even citing papers in this article can form a graph. [3]
                    </p>
                    <h3 className=' text-3xl font-semibold py-6'> Bitcoin Transactions</h3>
                    <p className=' text-xl'>

                        A Bitcoin transaction is the transfer of value from one Bitcoin address to another. While understanding the mechanisms in detail is not crucial, it does explain why tackle this problem in the first place. First, the transaction is initiated when the sender creates a new transaction of funds. This includes specifying the recipient, the amount of money sent, and other information. It generates a unique private key that is later used for verification. The transaction is then broadcasted to the Bitcoin network and this is where graphs come into the equation. Verification by miners on the network who solve complex mathematical problems is required for the funds to go through. Now the transaction is finally added to the blockchain and it is considered confirmed. When a transaction is broadcasted, it is picked up and forwarded by multiple nodes. [5]
                    </p>
                    <h3 className=' text-3xl font-semibold py-6'> Dataset</h3>
                    <p className=' text-xl'>

                        A few years back an interesting article was published by Mark Weber called Experimenting with Graph Convolutional Networks for Financial Forensics. It provides an Eliptic Data Set of Bitcoin Transaction Graph. The nodes represent transactions and edges the flow of Bitcoins between them. This graph is not connected but can be viewed as a set of connected directed graphs each in a different timeframe. Each step captures 3 hours of continuous network traffic. The steps are evenly spaced with 2 weeks between graphs. Altogether there are 49 timeframes, 203,769 nodes, and 234,355 edges. [6]
                    </p>
                    <h3 className=' text-3xl font-semibold py-6'> Basics Overview</h3>
                    <p className=' text-xl'>

                        Note: because this is a very broad topic in order to understand the next few segments at least a little bit of knowledge is required.

                        Graphs are often denoted as a set of sets G
                        - V represents the set of nodes or vertices.
                        - E is short for the set of all edges in a graph
                        - X is a matrix where rows are feature vectors of the nodes.
                        - Y classifies each node in one of the graph’s classes. It is a vector as well.

                        Furthermore, there is some other important notation we should use:
                        - A is the adjacency matrix and it holds information about the graph's connectivity. Another way to store this data is with an edge index.
                        - D is a diagonal matrix and its elements are node degrees.

                        Now we are presented with a problem. Given some dataset, could we train the model to predict certain graph qualities? There are many different tasks that require different techniques. One could focus on link prediction or perhaps, if looking at the broader picture, even graph classification. An example of the first one would be predicting the side effects of different drugs when paired together. [3]

                        One of the very common tasks in this field is node classification. This is also the task that was relevant to our problem because we were trying to predict which nodes are licit or illicit. We are trying to solve an inductive problem so we assume all of the nodes in the graph will be unlabeled. To base our problem better we decided to ask a couple of important questions before starting our research. [3]


                    </p>
                </div>
                {/* comment Section */}

                <div className=' pb-20'>
                    <div className=' w-[60%] mx-auto' >
                        <form action="" >
                            <div className=' mt-2'>
                                <legend className="fieldset-legend text-2xl pt-10 pb-5">Comment</legend>
                                <textarea className="textarea w-full" placeholder="Enter Your Comment" rows={10}></textarea>
                            </div>
                            
                            <div className=' mt-6'>
                                <button className=' btn w-full shadow-2xs rounded-full bg-[#9EFF00] text-lg text-black'>Submit</button>
                            </div>


                        </form>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DetailsPage