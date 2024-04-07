import LandingStats from '../components/Landing/Stats'
import LandingBeginBlock from '../components/Landing/LandingBeginBlock'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <div className='w-[1220px] h-screen px-[8px] py-[32px] flex flex-col gap-[150px]'>
          <LandingBeginBlock />
          <LandingStats />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LandingPage
