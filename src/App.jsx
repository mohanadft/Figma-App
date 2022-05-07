import React, { createContext, useEffect, useState } from 'react'
import {
	PreHeader,
	Navbar,
	Header,
	Top,
	Recent,
	Categories
} from './components'

import { MdDarkMode, MdLightMode } from 'react-icons/md'
import Footer from './components/footer/Footer'

export const ThemeContext = createContext()

export const style = darkTheme => ({
	background: darkTheme ? 'var(--text-color)' : 'var(--bg-color)',
	color: darkTheme ? 'var(--bg-color)' : 'var(--text-color)'
})

const App = () => {
	const [darkTheme, setDarkTheme] = useState(
		JSON.parse(localStorage.getItem('theme')) || false
	)

	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(darkTheme))
	}, [darkTheme])

	return (
		<ThemeContext.Provider value={{ darkTheme }}>
			<>
				<button
					onClick={() => setDarkTheme(!darkTheme)}
					className="flex items-center justify-center fixed left-5 top-20 text-xl p-1 rounded-full bg-white"
				>
					{darkTheme ? <MdLightMode /> : <MdDarkMode />}
				</button>
				<PreHeader />
				<Navbar />
				<Header />
				<Top />
				<Recent />
				<Categories />
				<Footer />
			</>
		</ThemeContext.Provider>
	)
}

export default App
