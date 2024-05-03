import React from "react";

const Blog = () => {
    // Sample blog data
    const blogs = [
        { id: 1, title: "Blog 1", description: "Description for Blog 1" },
        { id: 2, title: "Blog 2", description: "Description for Blog 2" },
        { id: 3, title: "Blog 3", description: "Description for Blog 3" },
        { id: 4, title: "Blog 4", description: "Description for Blog 4" },
        { id: 5, title: "Blog 5", description: "Description for Blog 5" },
        { id: 6, title: "Blog 6", description: "Description for Blog 6" },
    ];

    return (
        <div className='bg-bgcolor text-whitesmoke pt-4 pb-4' id="blogs">
            <h1 className='text-5xl font-bold mb-4 md:w-3/2 text-center text-blue'>Blogs</h1>
            <div className='px-4 lg:px-14 max-w-screen-4x1 mx-auto mt-4 mb-12'>
                <div className="grid grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="blog-item">
                            <div className="blog-content bg-gray-200 p-4 rounded-md shadow-md border-2 border-blue-500">
                                <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                                <p>{blog.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
