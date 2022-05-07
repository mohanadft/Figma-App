import React, { useContext } from 'react'
import { phoneixIcon, rubyIcon, typeScriptIcon } from './icons'
import './recent.css'
import { ThemeContext, style } from './../../App'

const Recent = () => {
	const { darkTheme } = useContext(ThemeContext)

	const topics = [
		{
			id: 1,
			title: 'TypeScript 101',
			info: 'TypeScript is a programming language developed and maintained by Microsoft.',
			bgColorVar: '--burble-bg',
			icon: typeScriptIcon
		},
		{
			id: 2,
			title: 'Learn Phoenix',
			info: 'Phoenix is a web development framework written in the functional programming language Elixir. ',
			bgColorVar: '--pink-bg',
			icon: phoneixIcon
		},
		{
			id: 3,
			title: 'Learn Ruby on Rails',
			info: 'Ruby on Rails, or Rails, is a server-side web application framework written in Ruby.',
			bgColorVar: '--green-bg',
			icon: rubyIcon
		}
	]
	return (
		<section className="recent" style={style(darkTheme)}>
			<div className="container">
				<div className="header flex justify-between items-center mb-5">
					<h3 className="font-semibold">Recent</h3>
					<a href="/" className="text-blue-500 text-sm">
						See all
					</a>
				</div>
				<div className="topics flex justify-between items-stretch flex-wrap gap-5">
					{topics.map(topic => {
						return (
							<div className="topic" key={topic.id}>
								<div
									className="bg flex justify-center items-center rounded-t-md"
									style={{
										background: `var(${topic.bgColorVar})`
									}}
								>
									{topic.icon}
								</div>
								<div className="py-4 px-6 flex flex-col gap-2">
									<h1 className="font-bold lg:text-xl md:text-lg sm:text-lg text-md">
										{topic.title}
									</h1>
									<p className="text-neutral-500 lg:text-sm text-xs">
										{topic.info}
									</p>
									<button className="btn lg:text-md md:text-md sm:text-sm text-xs bg-blue-500 hover:bg-blue-600 text-white rounded-md px-2 py-1 w-fit">
										Read &gt;
									</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Recent
