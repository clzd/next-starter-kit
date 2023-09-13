'use client'

import Link from 'next/link'
import { usePathName } from 'next/navigation'

const NavLink = ({ href, ...rest }) => {
	const pathname = usePathName()
	const isActive = href.startsWith(pathname)

	console.log(isActive)

	return <Link href={href} {...rest} />
}

export default NavLink