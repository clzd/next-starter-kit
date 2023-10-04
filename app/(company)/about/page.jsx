import { wait } from '@/lib/posts'
import React from 'react'

const Page = async () => {
	await wait(3000)

	return (
		<div>About page</div>
	)
}

export default Page