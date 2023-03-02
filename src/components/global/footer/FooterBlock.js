import Link from 'next/link'
import React from 'react'

export default function FooterBlock({footerLinks,title,showSearchInput=false}) {
    return (
        <div>
            <h5 className='text-black font-medium  text-sm mb-3 uppercase'>{title}</h5>
            {
                !showSearchInput ? <ul>
                {
                    footerLinks?.map((cv, index) => {
                        return <li key={index}><Link className='text-[#6c8293] text-xs font-medium' href={cv.url}>{cv.label}</Link></li>
                    })
                }
            </ul>:<div className='news-letter-wrapper mb-5'>
               <div className='news-letter-input relative'>
               <input  type={'text'} placeholder="Please enter your email" className='rounded-md w-full py-2 px-2 text-sm outline-none border-none'/>
               <button className='btn bg-primary text-white absolute top-1/2 -translate-y-1/2 right-0 p-2 rounded-md text-sm outline-none border-none'>Subscribe</button>
               </div>
               <p className='mt-3 text-[#7a7e8a] text-sm'><Link href={"#"} className="text-secondary">Register now</Link> {" "} to get updates on {" "} <Link href={"#"} className="text-primary">Offers and Coupons</Link> </p>
            </div>
            }
           
        </div>
    )
}
