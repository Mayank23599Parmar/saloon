import React, { useState } from 'react'
const QUICK_SEARCH = [
    {
        label: "Quick Searches",
        value: "Quick Searches"
    },
    {
        label: "Breakfast",
        value: "Breakfast"
    },
    {
        label: "Lunch",
        value: "Lunch"
    },
    {
        label: "Dinner",
        value: "Dinner"
    },
    {
        label: "Cafés",
        value: "Cafés"
    },
]
export default function HomeCategeorySearch() {
    const [showQuickCategory, setShowQuickCategory] = useState(false)
    const [category, setCategogy] = useState({
        label: "Quick Searches",
        value: "Quick Searches"
    },)
    const [location, setLocation] = useState("")
    const toggoleQuickCategory = () => {
        setShowQuickCategory((prevState) => {
            return !prevState
        })
    }
    const selectCategory = (selectedCategory) => {
        setCategogy({
            label: selectedCategory.label,
            value: selectedCategory.value
        })
        setShowQuickCategory(false)
    }
    const onLocationChangeHandler = (e) => {
        setLocation(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <form className='category-search-wrapper block md:flex items-center justify-between ' onSubmit={submitHandler}>
            <div className='quick-search-wrapper relative mb-3 w-full md:w-1/4 md:mr-2 '>
                <div className='quick-search justify-around md:justify-start rounded-md flex items-center  bg-white px-2 py-2 cursor-pointer w-full' onClick={toggoleQuickCategory}>
                    <div className='ion-wrapper'>
                        <i className="fa fa-location-arrow text-sm" ></i>
                    </div>
                    <div className='category mx-[10px]'>
                        <p className='text-sm md:text-[11px] text-[#444]'>{category.value}</p>
                    </div>
                    <div className='category-drop-down'>
                        {
                            showQuickCategory ? <i className="fa fa-caret-up text-sm text-[#888]" ></i> : <i className="fa fa-caret-down text-sm text-[#888]" ></i>
                        }
                    </div>
                </div>
                {
                    showQuickCategory && <div className='category-list-wrapper z-10 absolute w-full bg-white text-center top-11 rounded-md md:top-11'>
                        <ul className='px-1'>
                            {
                                QUICK_SEARCH.map((category, index) => {
                                    return <li key={index} className="text-xs px-3 py-2  rounded-md hover:bg-primary cursor-pointer" onClick={() => selectCategory({ label: category.label, value: category.value })}> {category.value}</li>
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
            <div className='location-wrapper relative mb-3 w-full md:w-7/12 md:mr-2 '>
                <div className='location-input'>
                    <input type={"text"} onChange={onLocationChangeHandler} value={location} placeholder="Enter your delivery location" className='px-3 py-3 md:py-2 w-full text-sm md:text-base rounded-md border-none outline-none' />
                    <div className=' cursor-pointer location-icon-wrapper bg-[#ececec] rounded-md py-1 px-3 absolute top-1/2 -translate-y-1/2 right-1'>
                        <div>
                            <span><i className="fa fa-map-marker text-xs text-[#666] "></i></span>
                            <span className='text-xs text-[#666]'> Locate Me</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='submit w-full mb-3 md:w-2/12'>
                <button className='border-none outline-none bg-primary w-full text-white text-sm font-semibold py-3 px-1 rounded-md' >Search</button>
            </div>
        </form>
    )
}
