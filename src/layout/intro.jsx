import React from "react"
import Search from "../component/search"
import ListButton from "../component/listButton"
import hero from "../assets/hero2.jpg"

const Intro = () => {
	return (
		<div className='h-screen 2xl:h-[700px] bg-red-200 md:overflow-hidden relative'>
			<div className='absolute h-full w-full'>
				<img src={hero} alt={hero} className='object-cover h-full w-full ' />
			</div>
			<div className='absolute h-full w-full bg-black/60'></div>

			<div className='text-center xl:container mx-auto px-4 h-full flex justify-center relative text-white'>
				<div className='flex flex-col justify-center items-center gap-5'>
					<h1 className='text-4xl font-bold font-Rubik'>
						<p>Selamat Datang di Al-Quran Online</p>
						<p>Yuk Mulai Membaca</p>
					</h1>
					<p className='md:w-1/2 w-full'>
						Membaca Alquran berarti mengingat-ingat akan kebesaran Allah SWT.
						Ingatnya kita terhadap Allah SWT akan membuat hati terasa tentram
						dan lebih lembut dalam menyikapi sesuatu.
					</p>
					<Search />
					{/* <ListButton /> */}
				</div>
			</div>
		</div>
	)
}

export default Intro
