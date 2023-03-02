import React from 'react'
import FooterBlock from './FooterBlock'
const ABOUT_US_TITLE = "about us"
const ABOUT_US = [
    {
        label: "About Us",
        url: "#"
    },
    {
        label: "Culture",
        url: "#"
    },
    {
        label: "Blog",
        url: "#"
    },
    {
        label: "Careers",
        url: "#"
    },
    {
        label: "Contact",
        url: "#"
    }
]
const COTEGORY_1_TITLE = "For Foodies"
const COTEGORY_2_TITLE = "For Restaurants"
const COTEGORY_1 = [
    {
        label: "Community",
        url: "#"
    },
    {
        label: "Developers",
        url: "#"
    },
    {
        label: "Blogger Help",
        url: "#"
    },
    {
        label: "Verified Users",
        url: "#"
    },
    {
        label: "Code of Conduct",
        url: "#"
    }
]
const COTEGORY_2 = [
    {
        label: "Advertise",
        url: "#"
    },
    {
        label: "Add a Restaurant",
        url: "#"
    },
    {
        label: "Claim your Listing",
        url: "#"
    },
    {
        label: "For Businesses",
        url: "#"
    },
    {
        label: "Owner Guidelines",
        url: "#"
    }
]
const NEWS_LETETR_TITLE="Subscribe to our Newsletter"
export default function Footer() {
    return (
        <div className='footer-wrapper bg-bg_color py-16'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                    <FooterBlock  title={NEWS_LETETR_TITLE} showSearchInput={true}/>
                    </div>
                    <div className='col-1 hidden md:block'></div>
                    <div className='col-6 col-md-2' >
                        <FooterBlock footerLinks={ABOUT_US} title={COTEGORY_1_TITLE} />
                    </div>
                    <div className='col-6 col-md-2 hidden md:block'>
                        <FooterBlock footerLinks={COTEGORY_1} title={ABOUT_US_TITLE} />
                    </div>
                    <div className='col-6 col-md-2'>
                        <FooterBlock footerLinks={COTEGORY_2} title={COTEGORY_2_TITLE} />
                    </div>
                    <div className='col-1 hidden md:block'></div>
                </div>
            </div>
        </div>
    )
}
