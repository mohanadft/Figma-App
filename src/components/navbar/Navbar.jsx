import React, { useContext } from 'react'
import './navbar.css'
import { BiSearch } from 'react-icons/bi'
import { style, ThemeContext } from '../../App'

const Navbar = () => {
	const { darkTheme } = useContext(ThemeContext)

	return (
		<section className="navbar py-10" style={style(darkTheme)}>
			<div className="container flex justify-between items-center flex-wrap">
				<div className="left-side__navbar flex items-center gap-4">
					<svg
						width="22"
						height="24"
						viewBox="0 0 22 24"
						fill={`${darkTheme ? 'white' : 'black'}`}
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M9.97101 2.78354C10.6044 2.40353 11.3956 2.40353 12.029 2.78355L19.029 6.98356C19.6314 7.34501 20 7.99602 20 8.69854V15.3014C20 16.0039 19.6314 16.6549 19.029 17.0164L12.029 21.2165C11.3956 21.5965 10.6044 21.5965 9.97099 21.2165L2.97099 17.0164C2.36859 16.6549 2 16.0039 2 15.3014V8.69844C2 7.99591 2.36861 7.34489 2.97103 6.98344L9.97101 2.78354ZM13.058 1.06856C11.7913 0.308533 10.2088 0.308524 8.94203 1.06854L1.94205 5.26845C0.737211 5.99134 0 7.29338 0 8.69844V15.3014C0 16.7065 0.737182 18.0085 1.94199 18.7314L8.94198 22.9315C10.2087 23.6915 11.7913 23.6915 13.058 22.9315L20.058 18.7314C21.2628 18.0085 22 16.7065 22 15.3014V8.69854C22 7.29349 21.2628 5.99147 20.058 5.26857L13.058 1.06856ZM8 12C8 10.3432 9.34315 9.00003 11 9.00003C12.6569 9.00003 14 10.3432 14 12C14 13.6569 12.6569 15 11 15C9.34315 15 8 13.6569 8 12ZM11 7.00003C8.23858 7.00003 6 9.23861 6 12C6 14.7615 8.23858 17 11 17C13.7614 17 16 14.7615 16 12C16 9.23861 13.7614 7.00003 11 7.00003Z"
							fillOpacity="0.8"
						/>
					</svg>
					<h1 className="font-bold">LearningHub</h1>
				</div>
				<div className="center">
					<ul className="nav-list flex list-none text-sm gap-5">
						<li className="nav-item">
							<a href="##">Code</a>
						</li>
						<li className="nav-item">
							<a href="##">Design</a>
						</li>
						<li className="nav-item">
							<a href="##">Prototyping</a>
						</li>
					</ul>
				</div>
				<div>
					<BiSearch
						className="cursor-pointer"
						fill={`${darkTheme ? 'white' : 'black'}`}
					/>
				</div>
			</div>
		</section>
	)
}

export default Navbar
