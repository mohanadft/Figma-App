import React, { useContext } from 'react'
import { ThemeContext, style } from '../../App'

const Footer = () => {
	const links = [
		['Code', 'Design', 'Prototyping'],
		['Web3', 'React', 'Crypto']
	]
	const { darkTheme } = useContext(ThemeContext)

	return (
		<footer
			className="pt-20"
			style={{
				...style(darkTheme),
				transition: '0.3s all ease-in-out'
			}}
		>
			<div className="container flex justify-center items-center flex-wrap text-center gap-20">
				<div>
					<h2 className="text-lg">Tutorials</h2>
					<ul>
						{links[0].map((link, index) => {
							return (
								<li key={index} className="nav-item">
									<a className="nav-link text-xs" href="##">
										{link}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
				<div>
					<h2 className="text-lg">Tags</h2>
					<ul>
						{links[1].map((link, index) => {
							return (
								<li className="nav-item" key={index}>
									<a className="nav-link text-xs" href="##">
										{link}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
				<div>
					<h2 className="text-lg">Tutorials</h2>
					<ul>
						{links[0].map((link, index) => {
							return (
								<li key={index} className="nav-item">
									<a className="nav-link text-xs" href="##">
										{link}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
				<div>
					<h2 className="text-lg">Tutorials</h2>
					<ul>
						{links[0].map((link, index) => {
							return (
								<li key={index} className="nav-item">
									<a className="nav-link text-xs" href="##">
										{link}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
			<div className="container text-sm flex pt-12 pb-8 flex-wrap md:justify-between justify-center gap-5">
				<p>© learn.to</p>
				<ul className="flex gap-5 flex-wrap justify-center">
					<li>
						<a href="##">Cookies</a>
					</li>
					<li>
						<a href="##">Terms of Service</a>
					</li>
					<li>
						<a href="##">Privacy Policy</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
