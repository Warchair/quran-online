import React from "react"
import { useGetAllChapterQuery } from "../api/api"
import SuratQuranCard from "./suratQuranCard"
import LoadingSurah from "./loadingComponent/loadingSurah"

const SurahQuran = ({ dataChapter }) => {
	const { data, isLoading, isError, isSuccess } = useGetAllChapterQuery()

	let Chapters
	if (dataChapter === "All") {
		Chapters = data?.data
	} else if (dataChapter === "Makkiyyah") {
		Chapters = data?.data.filter(
			(chapter) =>
				chapter.revelation.id.toLowerCase() === dataChapter.toLowerCase(),
		)
	} else if (dataChapter === "Madaniyyah") {
		Chapters = data?.data.filter(
			(chapter) =>
				chapter.revelation.id.toLowerCase() === dataChapter.toLowerCase(),
		)
	}

	return (
		<div className='mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 capitalize'>
			{isLoading ? (
				<>
					<LoadingSurah />
					<LoadingSurah />
					<LoadingSurah />
					<LoadingSurah />
				</>
			) : (
				<>
					{Chapters?.map((surah, index) => (
						<SuratQuranCard key={index} surah={surah} />
					))}
				</>
			)}
		</div>
	)
}

export default SurahQuran
