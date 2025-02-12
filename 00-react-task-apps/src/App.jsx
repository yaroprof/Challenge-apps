import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4'>
       <h2 className="text-xl font-semibold mb-4">Another Task Component</h2>
       <p className="text-red-600">This is a placeholder for another task component.</p>

      <button class="text px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">Submit</button>

    </div>
  )
}

export default App
