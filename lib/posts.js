import fs from 'fs'
import path from 'path'

import { compileMDX } from 'next-mdx-remote/rsc'

const rootDirectory = path.join(process.cwd(), 'content')

const components = {
	h1: props => (
		<h1 {...props} className='text-emerald-400'>
			{props.children}
		</h1>
	),
}

export async function getPostBySlug(slug) {
	const realSlug = slug.replace(/\.mdx$/, '')

	const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

	const { content, frontmatter } = await compileMDX({
		source: fileContent,
		components: {

		},
		options: {
			parseFrontmatter: true
		}
	})

	return { content, frontmatter }
}