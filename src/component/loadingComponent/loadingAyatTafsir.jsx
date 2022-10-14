import React from "react"
import Skeleton from "react-loading-skeleton"

const LoadingAyatTafsir = () => {
	return (
		<div className='pt-[76px] p-4 bg-gray-50 h-screen'>
			<div className='flex justify-between items-center py-2'>
				<div className='flex items-center gap-3'>
					<div className='w-[70px]'>
						<Skeleton className='w-full' />
					</div>
				</div>
				<div className='flex gap-3 items-center'>
					<div className='w-[70px]'>
						<Skeleton className='w-full' />
					</div>
				</div>
			</div>
			<div>
				<div lang='ar' className='flex flex-col items-end mt-4'>
					<div className='mt-3 w-2/3'>
						<Skeleton className='md:h-[30px] w-full' />
					</div>
					<div className='mt-3 w-3/4'>
						<Skeleton className='md:h-[30px] w-full' />
					</div>
					<div className='mt-3 w-1/2'>
						<Skeleton className='md:h-[30px] w-full' />
					</div>
					<div className='mt-3 w-2/3'>
						<Skeleton className='md:h-[30px] w-full' />
					</div>
					<div className='mt-3 w-1/4'>
						<Skeleton className='md:h-[30px] w-full' />
					</div>
				</div>
			</div>
			<div className='mt-10'>
				<div className=' w-2/3'>
					<Skeleton className=' w-full' />
				</div>
				<div className=' w-3/4'>
					<Skeleton className=' w-full' />
				</div>
				<div className=' w-1/2'>
					<Skeleton className=' w-full' />
				</div>
				<div className=' w-1/3'>
					<Skeleton className=' w-full' />
				</div>
			</div>
			<div className='mt-4'>
				<div className=' w-2/3'>
					<Skeleton className=' w-full' />
				</div>
				<div className=' w-3/4'>
					<Skeleton className=' w-full' />
				</div>
				<div className=' w-1/2'>
					<Skeleton className=' w-full' />
				</div>
				<div className=' w-1/3'>
					<Skeleton className=' w-full' />
				</div>
			</div>
		</div>
	)
}

export default LoadingAyatTafsir
