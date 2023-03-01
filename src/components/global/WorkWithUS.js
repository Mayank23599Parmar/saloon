import Link from 'next/link'
import React from 'react'

export default function WorkWithUS() {
  return (
    <div className='work-with-us py-12'>
        <div className='container'>
            <div className='work-with-us-wrapper text-center'>
                <h5 className='text-xl'>Operate food store or restaurants? <Link href={"#"} className="text-primary">Work With Us</Link></h5>
            </div>
        </div>
    </div>
  )
}
