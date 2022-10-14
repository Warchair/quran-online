import React, { useState } from "react"
import SurahQuran from "./surahQuran"
import LoadingSurah from "./loadingComponent/loadingSurah"
import Intro from "../layout/intro"
import { Listbox } from "@headlessui/react"
import { Helmet } from "react-helmet"

const filtering = [
	{ id: 1, name: "All" },
	{ id: 2, name: "Makkiyyah" },
	{ id: 3, name: "Madaniyyah" },
]

const ChapterQuran = () => {
	const [selectedFilter, setSelectedFilter] = useState(filtering[0].name)

	return (
		<div>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Al-Quran Online</title>
			</Helmet>
			<Intro />
			<div className='xl:container mx-auto px-4 h-full font-Rubik py-5'>
				<div className='flex justify-between items-center'>
					<h1 className='lg:text-3xl md:text-2xl text-xl font-semibold'>
						Al Quran
					</h1>
					<Listbox
						as='div'
						value={selectedFilter}
						onChange={setSelectedFilter}
						className='relative'>
						<Listbox.Button>
							<button className='text-md flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-5 h-5'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
									/>
								</svg>
								<p>{selectedFilter}</p>
							</button>
						</Listbox.Button>
						<Listbox.Options className='absolute right-0 z-[10] bg-white  rounded-md border-[1px] drop-shadow-md mt-2'>
							{filtering.map((item) => (
								<Listbox.Option
									key={item.id}
									value={item.name}
									disabled={item.unavailable}
									className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
									{item.name}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Listbox>
				</div>
				<SurahQuran dataChapter={selectedFilter} />
			</div>
		</div>
	)
}

export default ChapterQuran
