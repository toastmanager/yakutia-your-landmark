import LandingBlockOne from '../components/LandingBlockOne'
import Navbar from '../layouts/Navbar'
import '../styles/App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <div className='w-[1220px] h-screen px-[8px] py-[32px]'>
          <LandingBlockOne />
        </div>
      </div>
    </>
  )
}

export default App
