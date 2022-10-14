import axios from "axios"
import { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Layout from "./layout/layout"
import ChapterQuran from "./component/chapterQuran"
import SurahAllAyat from "./component/surahAllAyat"
import ScrollTop from "./component/scrollTop"
import TafsirAyat from "./component/tafsirAyat"

function App() {
	return (
		<div className='App'>
			<ScrollTop />
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<ChapterQuran />} />
					<Route path='/quran/:name/:id' element={<SurahAllAyat />} />
					<Route path='/quran/:number/ayat-:id' element={<TafsirAyat />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
