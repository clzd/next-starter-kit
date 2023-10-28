import Link from 'next/link'
import React from 'react'
import NavLink from '../ui/NavLink'
import ContactButton from '../ui/ContactButton'
import ThemeButton from '../ui/ThemeButton'

const Header = () => {
	return (
		<header className="p-4">
			<nav className='container flex items-center justify-between'>
				<ul className='flex gap-3'>
					<li>
						<NavLink href="/">Home</NavLink>
					</li>
					<li>
						<NavLink href="/about">About</NavLink>
					</li>
					<li>
						<NavLink href="/posts">Blog</NavLink>
					</li>
					<li>
						<NavLink href="/guestbook">Guestbook</NavLink>
					</li>
				</ul>
				<ThemeButton />
			</nav>
		</header>
	)
}

export default Header