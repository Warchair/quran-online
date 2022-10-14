import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import AyatQuran from "./ayatQuran"
import { useGetAyatQuranQuery } from "../api/api"
import LoadingAyat from "./loadingComponent/loadingAyat"
import ListBox from "./listBox"
import { Helmet } from "react-helmet"

const SurahAllAyat = () => {
	const { name, id } = useParams()

	const { data, isLoading, isError, isSuccess } = useGetAyatQuranQuery(id)
	return (
		<div className='2xl:mt-0 mt-[71px] lg:w-[1000px] w-full mx-auto  h-full font-Rubik'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>{name}</title>
			</Helmet>
			<div className='flex justify-between items-center sticky top-[71px] bg-white px-4 z-[10]'>
				<div className='flex gap-4 sm:text-2xl text-lg py-4'>
					<h1 className='font-bold'>#{id}</h1>
					<h2 className='font-semibold text-gray-600'>{name}</h2>
				</div>
				<ListBox ayatNum={data?.data?.verses} />
			</div>
			<div className=''>
				{isLoading ? (
					<div>
						<LoadingAyat />
						<LoadingAyat />
						<LoadingAyat />
					</div>
				) : (
					<div>
						{id !== 1 && (
							<div className='md:py-8 py-4'>
								<p
									lang='ar'
									className='lg:text-5xl md:text-4xl text-3xl text-center font-medium font-IsepMisbah '>
									بِسۡمِ اللهِ الرَّحۡمٰنِ الرَّحِيۡمِ
								</p>
							</div>
						)}

						{data?.data?.verses?.map((surah, index) => (
							<AyatQuran
								surah={surah}
								key={index}
								number={data?.data?.number}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default SurahAllAyat
