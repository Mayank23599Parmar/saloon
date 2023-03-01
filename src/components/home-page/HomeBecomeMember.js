import React from 'react'

export default function HomeBecomeMember() {
    return (
        <div className='become-member py-10  border-b'>
            <div className='container'>
                <div className='become-memner-wrapper text-center mb-12'>
                    <h2 className='font-bold text-3xl md:text-4xl mb-2'>Become a Member</h2>
                    <p className='font-normal text-[#7a7e8a] text-sm relative after:content-[""]  after:absolute  after:-bottom-4  after:w-12 after:bg-[#5e5e5e]  after:h-1  after:left-1/2 after:-translate-x-1/2 ' >Lorem Ipsum is simply dummy text of</p>
                </div>
                <div className='member-btn'>
                    <div className='btn-wrapper text-center cursor-pointer bg-secondary rounded-md shadow-btn-shadow py-3 max-w-[220px] w-full mx-auto'>
                        <span className='text-white text-sm tracking-wide'>
                            Create an Account </span>
                        <i className='fa fa-chevron-circle-right text-white'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
