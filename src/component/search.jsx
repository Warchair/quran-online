import React, { useState, useEffect } from "react"
import { useGetAllChapterQuery } from "../api/api"
import { Combobox } from "@headlessui/react"
import { Link } from "react-router-dom"
import LoadingSearch from "./loadingComponent/loadingSearch"

const Search = () => {
	const [surah, setSurah] = useState()
	const [query, setQuery] = useState("")
	const { data, isLoading, isError } = useGetAllChapterQuery()

	const filteredSurah =
		query === ""
			? data?.data
			: data?.data.filter((surah) => {
					return surah?.name?.transliteration?.id
						.toLowerCase()
						.includes(query.toLowerCase())
			  })

	return (
		<div>
			<Combobox as='div' value={surah} onChange={setSurah} className='relative'>
				<div className='relative md:w-[600px] w-full text-gray-600'>
					<div className='absolute p-5 '>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 text-gray-600'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
					</div>
					<Combobox.Input
						onChange={(event) => setQuery(event.target.value)}
						type='text'
						className='px-14 py-4 text-lg focus:outline-none w-full '
						placeholder='Search'
					/>
				</div>
				<Combobox.Options className='w-full bg-white text-black absolute max-h-[200px] overflow-auto border-[1px] drop-shadow-md'>
					{filteredSurah?.map((surah, index) => (
						<Link
							key={index}
							to={`/quran/${surah?.name?.transliteration?.id}/${surah.number}`}>
							<Combobox.Option
								className='px-4 py-4 text-left hover:bg-gray-100'
								key={index}>
								{surah?.name?.transliteration?.id}
							</Combobox.Option>
						</Link>
					))}
				</Combobox.Options>
			</Combobox>
		</div>
	)
}

export default Search
