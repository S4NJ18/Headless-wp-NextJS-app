import Link from 'next/link'
 
export default function NotFound() {
  return (
<div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}