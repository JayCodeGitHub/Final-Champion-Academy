import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import {sport, edukacja, obozy, animacje } from "../../assets/items/navigationItems"
import logo from "../../assets/images/Logo.jpg"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

function Navigation() {
  const [hamburger, sethamburger] = useState(false);
  return (
    <>
      <Popover className="relative pt-2 border-b-2 border-gray-500 bg-thirdary h-28">
      {({ open }) => (
                        <>
        <div className="max-w-full px-4 mx-auto lg:px-12 sm:px-6">
          <div className="flex items-center justify-between py-6 lg:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="w-auto h-16 rounded-full sm:h-14"
                  src={logo}
                  alt="logo link to main page"
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 lg:hidden ">
              <button onClick={() => sethamburger(true)} className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-thirdary hover:text-gray-100 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
              <Link
                to="/O-nas"
                className="text-base font-medium text-white hover:text-primary"
                activeClassName="text-primary"
              >
                O nas
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-primary" : "text-white",
                        "group bg-thirdary rounded-md inline-flex items-center text-base font-medium hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      )}
                    >
                      <span>Sport</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 max-w-md px-2 mt-3 -ml-4 transform w-72 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 px-5 py-6 bg-gray-900 sm:gap-8 sm:p-8 ">
                            {sport.map(item => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="flex items-start p-3 -m-3 text-white rounded-lg hover:bg-gray-500 hover:text-primary "
                                activeClassName="text-primary"
                              >
                                <div className="ml-4">
                                  <p className="text-base font-medium">
                                    {item.name}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-primary" : "text-white",
                        "group bg-thirdary rounded-md inline-flex items-center text-base font-medium hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      )}
                    >
                      <span>Edukacja</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 max-w-md px-2 mt-3 -ml-4 transform w-72 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 px-5 py-6 bg-gray-900 sm:gap-8 sm:p-8">
                            {edukacja.map(item => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="flex items-start p-3 -m-3 text-white rounded-lg hover:bg-gray-500 hover:text-primary "
                                activeClassName="text-primary"
                              >
                                <div className="ml-4 ">
                                  <p className="text-base font-medium">
                                    {item.name}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-primary" : "text-white",
                        "group bg-thirdary rounded-md inline-flex items-center text-base font-medium hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      )}
                    >
                      <span>Obozy</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 max-w-md px-2 mt-3 -ml-4 transform w-72 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 px-5 py-6 bg-gray-900 sm:gap-8 sm:p-8">
                            {obozy.map(item => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="flex items-start p-3 -m-3 text-white rounded-lg hover:bg-gray-500 hover:text-primary "
                                activeClassName="text-primary"
                              >
                                <div className="ml-4 ">
                                  <p className="text-base font-medium">
                                    {item.name}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-primary" : "text-white",
                        " group bg-thirdary rounded-md inline-flex items-center text-base font-medium hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      )}
                    >
                      <span>Animacje</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 max-w-md px-2 mt-3 -ml-4 transform w-72 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 px-5 py-6 bg-gray-900 sm:gap-8 sm:p-8 ">
                            {animacje.map(item => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="flex items-start p-3 -m-3 text-white rounded-lg hover:bg-gray-500 hover:text-primary "
                                activeClassName="text-primary"
                              >
                                <div className="ml-4">
                                  <p className="text-base font-medium">
                                    {item.name}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link
                to="/Cennik"
                className="text-base font-medium text-white hover:text-primary"
                activeClassName="text-primary"
              >
                Cennik
              </Link>
              <a
                target="_blank"
                href="https://www.facebook.com/BlochChampionAcademy/photos/?ref=page_internal"
                className="text-base font-medium text-white hover:text-primary"
                rel="noreferrer"
              >
                Galeria
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/BlochChampionAcademy"
                className="text-base font-medium text-white hover:text-primary"
                rel="noreferrer"
              >
                Blog
              </a>
              <Link
                to="/Kontakt"
                className="text-base font-medium text-white hover:text-primary"
                activeClassName="text-primary"
              >
                Kontakt
              </Link>
            </Popover.Group>
          </div>
        </div>

        </>
        )}
      </Popover>
      { hamburger ? (
          <div 
            className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform lg:hidden"
          >
            <div className="bg-gray-700 divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <Link to="/">
                    <div>
                      <button onClick={() => sethamburger(false)} >

                      <img
                        className="w-auto rounded-full h-14"
                        src={logo}
                        alt="Workflow"
                        />
                        </button>
                    </div>
                  </Link>
                  <div className="-mr-2">
                    <button onClick={() => sethamburger(false)} className="inline-flex items-center justify-center p-2 text-gray-100 bg-gray-500 rounded-md trigger: click hover:text-gray-100 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 bg-gray-700">
                <nav className="grid gap-y-8 ">
                    <Link
                      to="/O-nas"
                      className="flex items-center p-3 -m-3 text-white rounded-md hover:bg-gray-500 hover:text-primary"
                      activeClassName="text-primary"
                    >
                      <span className="ml-3 text-base font-medium">O nas</span>
                    </Link>
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? "text-primary" : "text-white",
                              "-m-3 p-3  flex items-center rounded-md text-white hover:bg-gray-500 hover:text-primary w-full"
                            )}
                          >
                            <span className="ml-3 text-base font-medium">
                              Sport
                            </span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-gray-600" : "text-gray-400",
                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel>
                              {sport.map(item => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="flex items-center p-3 pl-6 mt-4 -m-3 text-white rounded-md hover:bg-gray-500 hover:text-primary"
                                  activeClassName="text-primary"
                                >
                                  <div className="ml-4 ">
                                    <p className="text-base font-medium">
                                      {item.name}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? "text-primary" : "text-white",
                              "-m-3 p-3  flex items-center rounded-md text-white hover:bg-gray-500 hover:text-primary w-full"
                            )}
                          >
                            <span className="ml-3 text-base font-medium">
                              Edukacja
                            </span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-gray-600" : "text-gray-400",
                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel>
                              {edukacja.map(item => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="flex items-center p-3 pl-6 mt-4 -m-3 text-white rounded-md hover:bg-gray-500 hover:text-primary"
                                  activeClassName="text-primary"
                                >
                                  <div className="ml-4 ">
                                    <p className="text-base font-medium">
                                      {item.name}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? "text-primary" : "text-white",
                              "-m-3 p-3  flex items-center rounded-md text-white hover:bg-gray-500 hover:text-primary w-full"
                            )}
                          >
                            <span className="ml-3 text-base font-medium">
                              Obozy
                            </span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-gray-600" : "text-gray-400",
                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel>
                              {obozy.map(item => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="flex items-center p-3 pl-6 mt-4 -m-3 text-white rounded-md hover:bg-gray-500 hover:text-primary"
                                  activeClassName="text-primary"
                                >
                                  <div className="ml-4 ">
                                    <p className="text-base font-medium">
                                      {item.name}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? "text-primary" : "text-white",
                              "-m-3 p-3  flex items-center rounded-md text-white hover:bg-gray-500 hover:text-primary w-full"
                            )}
                          >
                            <span className="ml-3 text-base font-medium">
                              Animacje
                            </span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-gray-600" : "text-gray-400",
                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel>
                              {animacje.map(item => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="flex items-center p-3 pl-6 mt-4 -m-3 text-white rounded-md hover:bg-gray-500 hover:text-primary"
                                  activeClassName="text-primary"
                                >
                                  <div className="ml-4 ">
                                    <p className="text-base font-medium">
                                      {item.name}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    <Link
                      to="/Cennik"
                      className="flex items-center p-3 -m-3 text-white rounded-md hover:bg-gray-500 hover:text-primary"
                      activeClassName="text-primary"
                    >
                      <span className="ml-3 text-base font-medium">
                        Cennik
                      </span>
                    </Link>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/BlochChampionAcademy/photos/?ref=page_internal"
                      className="flex items-center p-3 -m-3 text-white rounded-md hover:bg-gray-500 hover:text-primary"
                      rel="noreferrer"
                    >
                      <span className="ml-3 text-base font-medium">
                        Galeria
                      </span>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/BlochChampionAcademy"
                      className="flex items-center p-3 -m-3 text-white rounded-md hover:bg-gray-500 hover:text-primary"
                      rel="noreferrer"
                    >
                      <span className="ml-3 text-base font-medium">Blog</span>
                    </a>
                    <Link
                      to="/Kontakt"
                      className="flex items-center p-3 -m-3 text-white rounded-md hover:bg-gray-500 hover:text-primary"
                      activeClassName="text-primary"
                    >
                      <span className="ml-3 text-base font-medium">
                        Kontakt
                      </span>
                    </Link>
                    </nav>
                </div>
              </div>
            </div>
          </div>
          ):(null)}
        
    </>
  )
}

export default Navigation
