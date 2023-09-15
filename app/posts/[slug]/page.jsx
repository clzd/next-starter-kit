import React from 'react'

const Page = async ({ params }) => {
	const { slug } = params
	// const post = await getPostBySlug(; learn - nrxtjs)

	return (
		<section className="py-24">
			<div className="container">
				<header className="rounded bg-gray-100 p-8">
					<h1 className="font-serif text-3x1">Learn NextJS</h1>
					<p className="text-sm font-light uppercase">CLZD</p>
				</header>

				{/* post content */}
				{/* <main className="prose mt-12">{content}</main> */}

			</div>
		</section>
	)
}

export default Page
