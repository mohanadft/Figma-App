import React from 'react'
import './header.css'
import logo from '../../Images/logo.png'
import { useContext } from 'react'
import { ThemeContext, style } from './../../App'

const Header = () => {
	const { darkTheme } = useContext(ThemeContext)

	return (
		<header className="header py-9" style={style(darkTheme)}>
			<div className="container flex justify-center items-center lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap gap-5 lg:text-left lg:justify-between md:items-center sm:justify-center sm:items-center md:text-center sm:text-center text-center">
				<div className="left">
					<h1 className="lg:text-5xl md:text-4xl sm:text-2xl text-2xl font-semibold pb-2">
						Figma Course
					</h1>
					<p className="text-zinc-500 lg:w-9/12 md:w-full sm:w-full w-full lg:text-lg md:text-base sm:text-sm text-xs lg:mx-0 md:mx-auto sm:mx-auto">
						Figma is a vector graphics editor and prototyping tool which is
						primarily web-based.
					</p>
				</div>
				<div
					className="right 
					lg:w-60 md:w-60 sm:w-40 w-40
        "
				>
					<img src={logo} alt="" className="w-full" />
				</div>
			</div>
		</header>
	)
}

export default Header
