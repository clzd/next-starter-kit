import { wait } from '@/lib/posts'
import React from 'react'

const Pageviews = async ({ slug }) => {
	// fetch page view counts from db
	// const views = await getPageview(slug)

	// await wait(2000)
	await wait

	return (
		<div>views: 100</div>
	)
}

export default Pageviews