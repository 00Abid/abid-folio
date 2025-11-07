import React from 'react'


const BlogPreview = () => {

    const gotoBlogPage = () => {
        if (typeof window !== 'undefined') {
            window.history.pushState({}, '', '/blog')
            window.dispatchEvent(new PopStateEvent('popstate'))
        }
    }

    return (
        <section id='blog-preview' className="relative z-10 text-white flex flex-col items-center px-4 py-8 md:py-12">
            <div>
                <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-center mb-6">
                    Blogs
                </h2>
                <p className="text-sm text-gray-300">Thoughts on SEO, performance and frontend engineering.</p>
            </div>

            <div className='mt-4'>
                <button
                    onClick={gotoBlogPage}
                    className="text-sm bg-white/6 text-white px-3 py-1 rounded-md hover:bg-white/10"
                    aria-label="View all blog posts"
                >
                    View all posts
                </button>
            </div>
        </section>
    )
}

export default BlogPreview
