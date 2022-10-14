import React from "react"
import { useParams } from "react-router-dom"
import { useGetSpesificAyatQuranQuery } from "../api/api"
import { Markup } from "interweave"
import LoadingAyatTafsir from "./loadingComponent/loadingAyatTafsir"
import { Helmet } from "react-helmet"

const TafsirAyat = () => {
	const { number, id } = useParams()
	const {
		data: surah,
		isError,
		isLoading,
		isSuccess,
	} = useGetSpesificAyatQuranQuery({
		number,
		id,
	})

	console.log(surah)

	let content
	if (isLoading) {
		content = <LoadingAyatTafsir />
	} else if (isSuccess) {
		content = (
			<div
				id={surah?.data?.number?.inSurah}
				className='mt-[72px] p-4 even:bg-gray-50'>
				<Helmet>
					<meta charSet='utf-8' />
					<title>{`${surah?.data?.surah?.name?.transliteration?.id} ayat ${surah?.data?.number?.inSurah}`}</title>
				</Helmet>
				<div className='flex justify-between items-center py-2'>
					<div className='flex items-center gap-3'>
						<h1 className='text-xl font-semibold '>
							#{surah?.data?.number?.inSurah}
						</h1>
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
					</div>
				</div>
				<div
					lang='ar'
					className='lg:text-5xl md:text-4xl text-3xl text-right font-medium mt-4 font-IsepMisbah lg:leading-[75px] md:leading-[64px] leading-[48px]'>
					<Markup content={surah?.data?.text?.arab} />
				</div>
				<div className='mt-4'>
					<p className='text-lg font-bold my-3'>Terjemahan</p>
					<p className=' md:text-base text-sm'>
						<Markup content={surah?.data?.translation?.id} />
					</p>
				</div>
				<div className='mt-4'>
					<p className='text-lg font-bold my-3'>Tafsir</p>
					<p className=' md:text-base text-sm'>
						<Markup content={surah?.data?.tafsir?.id?.long} />
					</p>
				</div>
			</div>
		)
	}

	return (
		<div className='2xl:mt-0  lg:w-[1000px] w-full mx-auto  h-full font-Rubik'>
			{content}
		</div>
	)
}

export default TafsirAyat
