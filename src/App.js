import image from './cage.jpg'

export function App() {
  return (
    <main className='w-full h-screen flex flex-col items-center bg-gray-100'>
      <div>
        <h1 className='text-gray-900 text-5xl mt-8 mb-4 font-bold'>Hello...</h1>
        <figure>
          <img
            className='rounded border border-gray-900'
            src={image}
            alt='Nicholas Cage'
          />
          <figcaption className='mt-6 text-sm text-gray-900'>
            I&apos;m going to steal the Declaration of Independence.
          </figcaption>
        </figure>
      </div>
    </main>
  )
}
