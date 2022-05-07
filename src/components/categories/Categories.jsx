import React, { useContext } from 'react'

import './categories.css'
import { ThemeContext, style } from '../../App'
const Categories = () => {
	const { darkTheme } = useContext(ThemeContext)

	const categories = [
		{ id: 1, title: 'Code', bgColorVar: '--pink-bg' },
		{ id: 2, title: 'Design', bgColorVar: '--burble-bg' },
		{ id: 3, title: 'Prototyping', bgColorVar: '--orange-bg' }
	]
	return (
		<section className="categories" style={style(darkTheme)}>
			<div className="container">
				<div className="header flex justify-between items-center">
					<h3 className="font-semibold">Categories</h3>
					<a href="/" className="text-blue-500 text-sm">
						See all
					</a>
				</div>
				<div
					className="categories-list flex flex-wrap justify-between gap-5 items-center py-8"
					style={{ ...style(darkTheme), transition: '0.3s all ease-in-out' }}
				>
					{categories.map(category => {
						return (
							<div
								key={category.id}
								className="category text-white font-semibold flex items-center justify-center rounded-md"
								style={{
									background: `var(${category.bgColorVar})`,
									width: '300px',
									height: '200px'
								}}
							>
								{category.title}
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Categories
