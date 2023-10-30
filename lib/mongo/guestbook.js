import clientPromise from "@/lib/mongo/client"

let client
let db
let guestbook

async function init() {
	if (db) return
	try {
		client = await clientPromise
		db = await client.db('guestbook')

		guestbook = await db.collection('guestbook')
		console.log(guestbook)
	} catch (error) {
		// throw new Error('Failed to connect to database.')
		console.log(error)
	}
}

; (async () => {
	await init()
})()

// guestbook //

export const getGuestbookEntries = async () => {
	try {

		if (!guestbook) await init()

		console.log('fetching entries...')

		const entries = await guestbook
			.find({})
			.map(entry => ({ ...entry, _id: entry._id.toString() }))
			.toArray()
		// console.log(entries)
		return { entries }
	} catch (error) {
		// console.log(error)
		return { error: 'Failed to fetch guesbook!' }
	}
}

export const createGuestbookEntry = async ({ name, message }) => {
	try {
		if (!guestbook) await init()

		return await guestbook.insertOne({ name, message, updatedAt: new Date() })
	} catch (error) {
		return { error: 'Failed to create entry!' }
	}
}