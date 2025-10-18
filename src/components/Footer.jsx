import React from 'react'

const Footer = () => {
    return (
        <div className=" relative z-10 flex justify-center items-center h-auto w-[70%] border-t mx-auto mt-5">
            <h6 className="text-sm p-4 text-white">
                &#xA9; {new Date().getFullYear()} ABID KHAN
            </h6>
        </div>
    )
}

export default Footer
