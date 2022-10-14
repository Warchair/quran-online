import React, { Fragment, useState, useEffect } from "react"
import { Link } from "react-scroll"
import { Listbox, Transition } from "@headlessui/react"

const ListBox = ({ ayatNum }) => {
	const [selectedAyat, setSelectedAyat] = useState(1)

	return (
		<div className='sticky top-[72px] right-0'>
			<Listbox value={selectedAyat} onChange={setSelectedAyat}>
				<div className='relative mt-1 text-center'>
					<Listbox.Button className='relative w-full cursor-default rounded-lg bg-gray-50 py-2 px-8 text-left  sm:text-sm'>
						<span className='block truncate'>{selectedAyat}</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<Listbox.Options className='absolute mt-1 max-h-60 w-full  rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm overflow-auto'>
							{ayatNum?.map((ayat, index) => (
								<Link
									key={index}
									activeClass='active'
									to={ayat?.number?.inSurah}
									spy={true}
									smooth={true}
									offset={-132}
									duration={500}>
									<Listbox.Option
										className={({ active }) =>
											`relative cursor-default select-none py-2 px-4 ${
												active ? "bg-gray-100 text-black" : "text-gray-900"
											}`
										}
										value={ayat?.number?.inSurah}>
										{({ selected }) => (
											<>
												<span
													className={`block truncate ${
														selected ? "font-medium" : "font-normal"
													}`}>
													{ayat?.number?.inSurah}
												</span>
											</>
										)}
									</Listbox.Option>
								</Link>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	)
}

export default ListBox
