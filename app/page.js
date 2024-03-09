import { HeroSection } from './components/HeroSection'
import Navbar from './components/Navbar'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <div style={{backgroundImage:`url('/images/banner-bg-sin-as.png')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <Navbar />
        <div className='mt-24 mx-auto px-12 py-4' >
          <HeroSection/>
          <AboutSection/>
          <ProjectsSection/>
        </div>
        <Footer />
      </div>
    </main>
  )
}
