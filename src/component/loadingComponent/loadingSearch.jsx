import React from "react"
import Skeleton from "react-loading-skeleton"

const LoadingSearch = () => {
	return (
		<div className='px-4 py-4 text-left hover:bg-gray-100'>
			<Skeleton width={100} height={18} />
		</div>
	)
}

export default LoadingSearch
