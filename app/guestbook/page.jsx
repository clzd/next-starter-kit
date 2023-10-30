import { getGuestbookEntries } from '@/lib/mongo/guestbook'

async function getData() {
  const { entries, error } = await getGuestbookEntries()

  if (!entries || error) throw new Error('Failed to fetch entries.')

  return entries
}

const Page = async () => {
  // fetch previous entries
  const entries = await getData()

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Guestbook</h1>

        <ul className='mt-8 flex flex-col gap-y-2'>
          {entries.map(e => (
            <li key={e._id} className='flex gap-x-3'>
              <span className='text-grey-500'>{e.name}:</span>
              <span>{e.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page
