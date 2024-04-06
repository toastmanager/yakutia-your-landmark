import LandingStats from '../components/Landing/Stats'
import LandingBlockOne from '../components/Landing/LandingBlockOne'
import Navbar from '../layouts/Navbar'

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <div className='w-[1220px] h-screen px-[8px] py-[32px] flex flex-col gap-[150px]'>
          <LandingBlockOne />
          <LandingStats />
        </div>
      </div>
    </>
  )
}

export default LandingPage
