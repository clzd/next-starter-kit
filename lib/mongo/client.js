import { MongoClient } from 'mongodb'

const URI = process.env.MONGO_URI
const options = {}

if (!url) throw new Error('Please add your Mongo URI to ')

let client = new MongoClient(URI, options)
let clientPromise

if (process.env.NODE_ENV !== 'production') {
	if (!global._mongoClientPromise) {
		global._mongoClientPromisew = client.connect()
	}

	clientPromise = global._mongoClientPromise
} else {
	clientPromise = client.connect()
}

export default clientPromise