
import { useEffect, useState } from 'react'
import navBarImg from '../assets/images/svg/logo.svg'
import CustomButton from './common/CustomButton'
const NavBar = () => {
  const [navBar, setNavBar] = useState(false)
  const toggleNavBar = () => {
    setNavBar(!navBar)
  }
  useEffect(() => {
    if (navBar) {
    document.body.classList.add('max-lg:overflow-hidden')
    }
    else {
      document.body.classList.remove('max-lg:overflow-hidden')
    }
  }, [navBar])
return (
  <nav>
    <div className="max-w-[1320px] w-full flex justify-between items-center gap-6 mx-auto px-3">
      <div className="flex gap-[15px]">
        <a href="#"><img src={navBarImg} alt="logo"/></a>
        <a className='flex justify-center items-center' href="#"> <h2 className="flex justify-center items-center lg:text-[36px] sm:text-[30px] text-[24px] font-bold text-[#2C49FE]">Events<span className="text-[#01C8FF]">Free</span></h2></a>
      </div>
      <ul className={`flex lg:max-w-[590px] w-full lg:justify-between items-center max-lg:flex-col gap-y-7 justify-center max-lg:fixed max-lg:top-0 max-lg:bg-[#4b5558] z-50 max-lg:min-h-screen duration-300 text-white ${navBar ? 'right-0' : '-right-full'}`}>
        <li className="text-[16px] font-semibold opacity-80 duration-300 hover:opacity-100"><a onClick={() => setNavBar(false)} href="#">HOME</a></li>
        <li className="text-[16px] font-semibold opacity-80 duration-300 hover:opacity-100"><a onClick={() => setNavBar(false)} href="#">EVENTS</a></li>
        <li className="text-[16px] font-semibold opacity-80 duration-300 hover:opacity-100"><a onClick={() => setNavBar(false)} href="#">FEED</a></li>
        <li className="text-[16px] font-semibold opacity-80 duration-300 hover:opacity-100"><a onClick={() => setNavBar(false)} href="#">USER NAME</a></li>
        <CustomButton onClick={() => setNavBar(false)}>Log Out</CustomButton>
      </ul>
      <div onClick={toggleNavBar} className="w-10 h-6 flex flex-col items-center justify-between relative z-[51] lg:hidden">
        <span className={`w-full h-1 rounded-full bg-white  duration-300 ${navBar ? 'rotate-45 absolute top-1/2 -translate-y-1/2' : ''}`}></span>
        <span className={`w-full h-1 rounded-full bg-white  duration-300 ${navBar ? 'opacity-0' : ''}`}></span>
        <span className={`w-full h-1 rounded-full bg-white  duration-300 ${navBar ? '-rotate-45 absolute top-1/2 -translate-y-1/2' : ''}`}></span>
      </div>
    </div>
  </nav>
)
}
export default NavBar