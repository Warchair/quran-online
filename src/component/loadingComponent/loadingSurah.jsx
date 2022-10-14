import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const LoadingSurah = () => {
	return (
		<div className='rounded-md bg-white p-4 drop-shadow-sm border-[1px]'>
			<div className='flex justify-between gap-2'>
				<div>
					<h5 className='text-lg font-semibold text-gray-700'>
						<Skeleton height={25} width={120} />
					</h5>

					<p>
						<Skeleton width={100} />
					</p>
				</div>

				<h1 className='font-bold text-xl'>
					<Skeleton height={25} width={40} />
				</h1>
			</div>
			<div className='w-full flex justify-end '>
				<Skeleton width={50} />
				<p></p>
			</div>
		</div>
	)
}

export default LoadingSurah
