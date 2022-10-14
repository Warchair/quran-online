import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const LoadingAyat = () => {
	return (
		<div className='p-4 odd:bg-gray-50 '>
			<div className='lg:w-[150px] w-[75px]'>
				<Skeleton className='w-full' />
			</div>
			<div>
				<div className='w-full flex justify-end '>
					<div className='w-1/2'>
						<Skeleton className='w-full' />
					</div>
				</div>
				<div className='w-full flex justify-end '>
					<div className='w-3/4'>
						<Skeleton className='w-full' />
					</div>
				</div>
				<div className='w-full flex justify-end '>
					<div className='w-2/3'>
						<Skeleton className='w-full' />
					</div>
				</div>
				<div className='w-full flex justify-end '>
					<div className='w-1/3'>
						<Skeleton className='w-full' />
					</div>
				</div>
			</div>

			<div className='mt-4 text-base'>
				<div className='w-1/3'>
					<Skeleton className='w-full' />
				</div>
				<div className='w-1/2'>
					<Skeleton className='w-full' />
				</div>
				<div className='w-1/4'>
					<Skeleton className='w-full' />
				</div>
			</div>
		</div>
	)
}

export default LoadingAyat
