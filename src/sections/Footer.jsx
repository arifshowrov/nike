import { footerLogo } from "../assets/images"
import  { socialMedia } from "../constans"
import        {footerLinks} from "../constans"
import {copyrightSign } from "../assets/icons"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) =>(
              <div className="bg-white p-3 rounded-full" >
                <img src={icon.src} alt={icon.alt} height={24} width={24} className="" />
              </div>
            ))}           
          </div>

        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap text-white">
          {footerLinks.map((item) =>(
            <div key={item}>
              <h4 className="font-mon text-2xl leading-normal font-medium mb-6">
              {item.title}
              </h4>
              <ul>
                {item.links.map((link) =>(
                  <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer" 
                  key={link.name}
                  >
                    <a href="">{link.name}</a>

                  </li>
                ))}
                <li>

                </li>
              </ul>

            </div>


          ))}


        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="Logo" width={20} height={20} />
          <p>Copyright. All rights reserved by ARIF</p>

        </div>
        <p className="font-montserrat cursor-pointer">

        Terms & Conditions</p>

      </div>
    </footer>
  )
}

export default Footer
