import React from "react"
import { PhoneIcon, LocationMarkerIcon } from "@heroicons/react/solid"
import { MailIcon } from "@heroicons/react/outline"
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { AiFillYoutube } from "react-icons/ai"

const ContactPageLayout = () => (
  <>
    <div className="md:h-96 w-3/4 md:flex m-auto md:mt-32 mt-16">
      <div className="md:h-96 h-72 md:w-1/2 w-full md:border-r-4 md:border-b-0 border-r-0 border-b-4">
        <div className="h-1/3 w-full flex justify-center items-center">
          <div className="rounded-full h-14 w-14 mr-3 text-primary border-primary">
            <LocationMarkerIcon />
          </div>
          Gołaszyńska 35, Oborniki
        </div>
        <div className="h-1/3 w-full flex justify-center items-center">
          <div className="rounded-full h-14 w-14 text-primary border-primary">
            <MailIcon />
          </div>
          blochacademy@gmail.com
        </div>
        <div className="h-1/3 w-full flex justify-center items-center">
          <div className="rounded-full h-14 w-14 mr-3 text-primary border-primary">
            <PhoneIcon />
          </div>
          696 162 080
        </div>
      </div>
      <div className="md:h-96 h-72 md:w-1/2 w-full">
        <a
          href="https://www.facebook.com/BlochChampionAcademy"
          target="_blank"
          rel="noreferrer"
        >
          <div className="h-1/3 w-full flex justify-center items-center">
            <div className="border-2 text-3xl rounded-full h-14 w-14 flex items-center justify-center text-primary border-primary hover:text-secondary hover:border-secondary mr-7">
              <FaFacebookF />
            </div>
            Facebook
          </div>
        </a>
        <a
          href="https://www.instagram.com/champion_academy_oborniki/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="h-1/3 w-full flex justify-center items-center">
            <div className="border-2 text-3xl rounded-full h-14 w-14 flex items-center justify-center text-primary border-primary hover:text-secondary hover:border-secondary mr-7">
              <FiInstagram />
            </div>
            Instagram
          </div>
        </a>
        <a
          href="https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q/featured"
          target="_blank"
          rel="noreferrer"
        >
          <div className="h-1/3 w-full flex justify-center items-center">
            <div className="border-2 text-3xl rounded-full h-14 w-14 flex items-center justify-center text-primary border-primary hover:text-secondary hover:border-secondary mr-7">
              <AiFillYoutube />
            </div>
            YouTube
          </div>
        </a>
      </div>
    </div>
  </>
)

export default ContactPageLayout
