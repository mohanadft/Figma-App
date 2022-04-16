import React from 'react'
import './pre-header.css'

const PreHeader = () => {
	return (
		<section className="pre-header p-4 sm:text-sm text-xs text-center">
			<p className="text-white leading-4">
				<span className="bg-white text-xs rounded px-1 mr-2 new">NEW</span>
				LearningHub had just been launched! Check out the{' '}
				<span className="underline">Welcome post.</span>
			</p>
		</section>
	)
}

export default PreHeader
