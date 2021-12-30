import React from "react"
import { PhoneIcon, LocationMarkerIcon } from "@heroicons/react/solid"
import { MailIcon } from "@heroicons/react/outline"
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { AiFillYoutube } from "react-icons/ai"

const Footer = () => (
  <>
    <div className="bg-thirdary w-full h-60 lg:h-28 md:h-50 xl:px-12 lg:px-0 border-t-4 border-gray-500">
      <div className="hidden w-full h-full lg:flex">
        <div className="w-1/4 h-full flex justify-center">
          <div className="w-1/3 h-full flex items-center justify-center">
            <a
              href="https://www.facebook.com/BlochChampionAcademy"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-2 text-primary border-primary hover:text-secondary hover:border-secondary text-3xl rounded-full h-14 w-14 mr-3 flex items-center justify-center">
                <FaFacebookF />
              </div>
            </a>
          </div>
          <div className="w-1/3 h-full flex items-center justify-center">
            <a
              href="https://www.instagram.com/champion_academy_oborniki/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-2 text-primary border-primary hover:text-secondary hover:border-secondary text-3xl rounded-full h-14 w-14 mr-3 flex items-center justify-center">
                <FiInstagram />
              </div>
            </a>
          </div>
          <div className="w-1/3 h-full flex items-center justify-center">
            <a
              href="https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q/featured"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-2 text-primary border-primary hover:text-secondary hover:border-secondary text-3xl rounded-full h-14 w-14 mr-3 flex items-center justify-center">
                <AiFillYoutube />
              </div>
            </a>
          </div>
        </div>
        <div className="w-3/4 h-full flex justify-center">
          <div className="w-1/3 h-full flex items-center justify-center text-white">
            <div className="rounded-full h-14 w-14 mr-3 text-primary border-primary">
              <LocationMarkerIcon />
            </div>
            Gołaszyńska 35, Oborniki
          </div>
          <div className="w-1/3 h-full flex items-center justify-center text-white">
            <div className="rounded-full h-14 w-14 mr-3  text-primary border-primary">
              <MailIcon />
            </div>
            blochacademy@gmail.com
          </div>
          <div className="w-1/3 h-full flex items-center justify-center text-white">
            <div className="rounded-full h-14 w-14 mr-3 text-primary border-primary">
              <PhoneIcon />
            </div>
            696 162 080
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full h-full">
        <div className="w-full h-3/4 text-white">
          <div className="w-full h-1/3 flex items-center justify-center">
            <div className=" rounded-full h-10 w-10 mr-3 text-primary border-primary">
              <PhoneIcon />
            </div>
            696 162 080
          </div>
          <div className="w-full h-1/3 flex items-center justify-center">
            <div className=" rounded-full h-10 w-10 mr-3 text-primary border-primary">
              <MailIcon />
            </div>
            blochacademy@gmail.com
          </div>
          <div className="w-full h-1/3 flex items-center justify-center">
            <div className=" rounded-full h-10 w-10 mr-3 text-primary border-primary">
              <LocationMarkerIcon />
            </div>
            Gołaszyńska 35, Oborniki
          </div>
        </div>
        <div className="w-full h-1/4 0 flex">
          <div className="w-1/3 h-full flex items-center justify-center">
            <a
              href="https://www.facebook.com/BlochChampionAcademy"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-2 text-2xl rounded-full h-10 w-10 flex items-center justify-center text-primary border-primary hover:text-secondary hover:border-secondary">
                <FaFacebookF />
              </div>
            </a>
          </div>
          <div className="w-1/3 h-full flex items-center justify-center">
            <a
              href="https://www.instagram.com/champion_academy_oborniki/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-2 text-2xl rounded-full h-10 w-10 flex items-center justify-center text-primary border-primary hover:text-secondary hover:border-secondary">
                <FiInstagram />
              </div>
            </a>
          </div>
          <div className="w-1/3 h-full flex items-center justify-center">
            <a
              href="https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q/featured"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-2 text-2xl rounded-full h-10 w-10 flex items-center justify-center text-primary border-primary hover:text-secondary hover:border-secondary">
                <AiFillYoutube />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Footer
