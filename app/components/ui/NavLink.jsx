'use client'

import Link from 'next/link'
import React from 'react'

const NavLink = (href, ...rest) => {
	return <Link href={href} {...rest} />
}

export default NavLink