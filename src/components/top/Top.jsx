import React from 'react'
import { msgIcon, nextJSIcon, remixIcon } from './icons'
import { ThemeContext, style } from '../../App'

import './top.css'
import { useContext } from 'react'

const Top = () => {
	const { darkTheme } = useContext(ThemeContext)
	const topics = [
		{
			id: 1,
			title: 'Next.js Introduction',
			info: 'Next.js is an open-source development framework built on top of Node.js.',
			bgColorVar: '--burble-bg',
			logo: nextJSIcon
		},
		{
			id: 2,
			title: 'Remix Introduction',
			info: 'Remix is a new framework that blurs the line between server and client.',
			bgColorVar: '--pink-bg',
			logo: remixIcon
		}
	]
	return (
		<section className="top py-10" style={style(darkTheme)}>
			<div className="container">
				<div className="header flex justify-between items-center">
					<h3 className="font-semibold">Top</h3>
					<a href="/" className="text-blue-500 text-sm">
						See all
					</a>
				</div>
				<div className="flex justify-center md:flex-nowrap flex-wrap gap-16 items-center my-8">
					{topics.map(topic => {
						return (
							<div className="topic" key={topic.id}>
								<div
									className="bg flex justify-center items-center rounded-t-md"
									style={{
										background: `var(${topic.bgColorVar})`
									}}
								>
									{topic.logo}
								</div>
								<div className="py-4 px-6 flex flex-col gap-2">
									<h1 className="font-bold lg:text-xl md:text-lg sm:text-lg text-md">
										{topic.title}
									</h1>
									<p className="text-neutral-500 lg:text-md md:text-md sm:text-sm text-xs">
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
				<div
					className="news flex justify-center items-center p-5 mt-20 flex-col text-center gap-2"
					style={{
						background: darkTheme
							? 'rgba(255, 255, 255, 0.08)'
							: 'rgba(0, 0, 0, 0.03)'
					}}
				>
					<div className="left flex items-center gap-5 justify-center flex-wrap">
						{msgIcon}
						<div>
							<h1 className="text-md font-bold lg:text-lg md:text-md sm:text-md">
								The best NewsLetter on the web
							</h1>
							<p className="text-neutral-500 text-xs lg:text-xs md:text-xs sm:text-xs w-full">
								Recieve posts updates straight to your inbox, including full
								additional posts.
							</p>
						</div>
					</div>
					<div className="right flex items-center gap-2 flex-wrap justify-center">
						<input
							type="email"
							className="border-none text-sm px-2 py-1 w-full lg:w-64 md:w-64 sm:w-64"
							placeholder="Email address"
						/>
						<button
							className="border-none bg-white text-sm py-1 px-2 font-semibold hover:bg-black hover:text-white ease-linear duration-200"
							style={style(darkTheme)}
						>
							Subsicribe &gt;
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Top
