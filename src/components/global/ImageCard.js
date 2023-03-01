import Image from 'next/image'
import React from 'react'
const CARD_IMAGE = [
    {
        src: "/images/pro1.jpg"
    },
    {
        src: "/images/pro2.jpg"
    },
    {
        src: "/images/pro3.jpg"
    },
    {
        src: "/images/pro4.jpg"
    }
]
export const ImageCard = () => {
    return (
        <div className='image-card my-8'>
            <div className='container'>
                <div className='image-card-wrapper row'>
                    {
                        CARD_IMAGE.map((image, index) => {
                            return <div className='image col-md-3 col-6 mb-3 cursor-pointer' key={index}>
                                <Image src={image.src} alt={"image"} className="rounded-md" width={300} height={300} />
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    )
}
