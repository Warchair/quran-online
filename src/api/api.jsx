import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const quranApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://quran-onlinee.herokuapp.com/",
	}),
	endpoints: (builder) => ({
		getAllChapter: builder.query({
			query: () => "surah",
		}),
		getAyatQuran: builder.query({
			query: (id) => `surah/${id}`,
		}),
		getSpesificAyatQuran: builder.query({
			query: ({ number, id }) => `surah/${number}/${id}`,
		}),
	}),
})

export const {
	useGetAllChapterQuery,
	useGetAyatQuranQuery,
	useGetSpesificAyatQuranQuery,
} = quranApi
