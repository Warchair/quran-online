import React, { useState } from "react"
import LoadingAyat from "./loadingComponent/loadingAyat"
import { Markup } from "interweave"
import { Link } from "react-router-dom"

const AyatQuran = ({ surah, number }) => {
	console.log(surah)
	return (
		<>
			<div id={surah.number.inSurah} className='p-4 even:bg-gray-50'>
				<div className='flex justify-between items-center py-2'>
					<div className='flex items-center gap-3'>
						<h1 className='text-xl font-semibold '>#{surah.number.inSurah}</h1>
						<div>
							<audio src={surah?.audio?.primary}></audio>
						</div>
					</div>
					<div className='flex gap-3 items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
							/>
						</svg>
						<Link to={`/quran/${number}/ayat-${surah.number.inSurah}`}>
							<button className='md:px-4 px-2 py-1 rounded-lg border-[1px] border-black md:text-base text-sm'>
								Tafsir
							</button>
						</Link>
					</div>
				</div>
				<div
					lang='ar'
					className='lg:text-5xl md:text-4xl text-3xl text-right font-medium mt-4 font-IsepMisbah lg:leading-[75px] md:leading-[64px] leading-[48px]'>
					<Markup content={surah.text.arab} />
				</div>
				<p className='mt-4 md:text-base text-sm'>
					<Markup content={surah.translation.id} />
				</p>
			</div>
		</>
	)
}

export default AyatQuran
