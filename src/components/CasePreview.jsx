import React from 'react'

const CasePreview = () => {
    const gotoCaseStudiesPage = () => {
        if (typeof window !== 'undefined') {
            window.history.pushState({}, '', '/case-studies');
            window.dispatchEvent(new Event('popstate'));
        }
    }

    return (
        <section id='blog-preview' className="relative z-10 text-white flex flex-col items-center px-4 py-8 md:py-12">
            <div>
                <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-center mb-3">
                    Case Studies
                </h2>
                <p className="text-sm text-gray-300 text-center max-w-md">
                    Real SEO results where I improved SEO performance for various clients.
                </p>
            </div>

            <div className='mt-5'>
                <button
                    onClick={gotoCaseStudiesPage}
                    className="text-sm bg-white/10 text-white px-3 py-1 rounded-md hover:bg-white/20 transition"
                    aria-label="View all case studies"
                >
                    View all case studies
                </button>
            </div>
        </section>
    )
}

export default CasePreview
