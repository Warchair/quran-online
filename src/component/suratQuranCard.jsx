import React from "react"
import { Link } from "react-router-dom"

const SuratQuranCard = ({ surah }) => {
	return (
		<Link
			to={`/quran/${surah?.name?.transliteration?.id}/${surah.number}`}
			className='rounded-md bg-white p-4 drop-shadow-sm border-[1px]'>
			<div className='flex justify-between gap-2'>
				<div>
					<h5 className='text-lg font-semibold text-gray-700'>
						{surah?.name?.transliteration?.id}
					</h5>
					<p>{surah?.name?.translation?.id}</p>
				</div>
				<h1 className='font-bold text-xl'>#{surah.number}</h1>
			</div>
			<div className='w-full flex justify-end '>
				<p>{surah?.revelation.id}</p>
			</div>
		</Link>
	)
}

export default SuratQuranCard
