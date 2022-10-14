import React, { useState } from "react"
import { Link } from "react-router-dom"

const lang = [
	{ id: 1, lang: "English", unavailable: false },
	{ id: 2, lang: "Indonesia", unavailable: false },
	{ id: 3, lang: "Melayu", unavailable: false },
	{ id: 4, lang: "Germany", unavailable: true },
]

const Header = () => {
	const [selectedLang, setSelectedLang] = useState(lang[0])
	return (
		<div className='w-full h-[72px] bg-white border-b-[1px] drop-shadow-sm fixed 2xl:sticky top-0 z-[999]'>
			<div className='xl:container mx-auto px-4 h-full flex justify-center'>
				<div className='flex justify-between items-center w-full'>
					<Link to='/'>
						<h1 className='text-xl font-semibold'>Al-Quran</h1>
					</Link>
					<button className='text-lg font-medium flex gap-3  items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 '>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802'
							/>
						</svg>
						<p className='md:block hidden'>Bahasa</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header
