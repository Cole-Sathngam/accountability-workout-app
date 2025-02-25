import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
          Welcome to My App
        </h1>
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          Get started by exploring our features and discover a whole new way to experience our platform.
        </p>
        <Link 
          href="/dashboard" 
          className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium 
            hover:opacity-90 transition-all duration-200 
            transform hover:scale-105 
            shadow-lg hover:shadow-xl 
            active:scale-95 
            cursor-pointer 
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Get Started
        </Link>
      </div>
    </main>
  )
}