import './Hero.scss'
import { MainNavbar } from '../../molecules/MainNavbar/MainNavbar'
import heroVideo from '../../../assets/hero-video.mp4'
import heroVideoMobile from '../../../assets/hero_video_mobile.mp4'
import heroLogo from '../../../assets/hero-logo.svg'
import { RxCaretRight } from 'react-icons/rx'

export function Hero() {
  return (
    <section id="hero-container">
      <MainNavbar isHero />
      <div className="hero-content">
        <img src={heroLogo} alt="Apple logo" />
        <button>Apply now</button>
      </div>
      <video
        className="hero-video-desktop"
        src={heroVideo}
        autoPlay
        muted
      />
      <video
        className="hero-video-mobile"
        src={heroVideoMobile}
        autoPlay
        muted
      />
      <footer>
        <div className="footer-inner">
          <div className="bg-gradient"></div>
          <p>Get up to 3% unlimited Daily Cash back on every purchase. Every day. <a>Apply now <RxCaretRight/></a></p>
        </div>
      </footer>
    </section>
  )
}