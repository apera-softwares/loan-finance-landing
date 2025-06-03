'use client'
import NavbarItem from '@/data/navbar'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaAngleDown, FaTimes } from 'react-icons/fa'
import SearchOption from './SearchOption'
import TopBar from './TopBar'

const SecondaryNavbar = ({ hideTopBar = false }) => {
  const { menuData } = NavbarItem
  const pathname = usePathname()
  const [showSearch, setShowSearch] = useState(false)
  const [innerMobileMenu, setInnerMobileMenu] = useState(false)
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 20) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar)

    return () => {
      window.removeEventListener('scroll', handleStickyNavbar)
    }
  }, [])

  return (
    <header>
      {!hideTopBar && <TopBar sticky={sticky} />}
      <div
        className={cn(
          'fixed left-0  z-50 w-full bg-transparent transition-all duration-500 max-md:z-[500]',
          sticky ? 'nav-sticky ' : '',
          !hideTopBar ? 'top-16' : 'top-8',
        )}>
        <nav className="container relative flex items-center">
          <div className="nav-logo">
            <Link href="/">
              <Image src={menuData.logoLight} alt="logo" className="dark:hidden" width={200} height={80} />
              <Image
                src={menuData.logoDark}
                alt="logo dark version"
                className="hidden dark:inline-block"
                width={200}
                height={80}
              />
            </Link>
          </div>

          <ul className="ml-auto flex items-center [&>*:not(:last-child)]:me-2.5">
            <li className="flex items-center max-lg:hidden">
              <Link href={menuData.btnLink} className="btn btn-navbar btn-sm">
                Login
              </Link>
            </li>
            <li className="max-lg:inline-block lg:hidden">
              <Link href={menuData.btnLink} className="btn btn-navbar btn-sm">
                Login
              </Link>
              {/* <button
                className="mobile-menu-button relative flex size-10 items-center justify-center rounded-full bg-white outline-none dark:bg-dark-200"
                onClick={() => setInnerMobileMenu(!innerMobileMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" className="size-5">
                  <path
                    d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                  <path
                    d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H9C8.44772 8 8 7.55228 8 7Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                  <path
                    d="M4 13C4 12.4477 4.44772 12 5 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H5C4.44772 14 4 13.5523 4 13Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                </svg>
              </button> */}
            </li>
          </ul>

          <div className={cn('mobile-menu max-lg:overflow-y-auto', innerMobileMenu ? 'open' : 'close')}>
            <button
              className=" navbar-toggle-close absolute right-6 top-5 flex size-10 items-center justify-center rounded-full bg-white outline-none dark:bg-dark-200"
              onClick={() => setInnerMobileMenu(!innerMobileMenu)}>
              <FaTimes />
            </button>
            <ul className="nav-list mt-28 flex w-full max-w-full flex-col gap-5 landscape:h-full">
              {menuData.menuContent.map((menuItem) => (
                <li className={`${menuItem.path ? '' : 'group relative'}`} key={menuItem.id}>
                  {menuItem.path ? (
                    <Link
                      href={menuItem.path}
                      className={cn(
                        'flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-paragraph transition-colors duration-500 hover:border-borderColor hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColor/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5',
                        pathname === menuItem.path ? 'active' : '',
                      )}
                      onClick={() => setInnerMobileMenu(!innerMobileMenu)}>
                      {menuItem.title}
                    </Link>
                  ) : menuItem.megaMenu ? (
                    <>
                      <Link
                        href="#"
                        className="hover:border-borderColour dark:hover:border-borderColour/10 group flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-paragraph transition-colors duration-500 hover:bg-white hover:duration-500 dark:text-white dark:hover:bg-dark-200 lg:px-4 xl:px-5">
                        {menuItem.title}
                        <FaAngleDown className="ml-auto mt-1 text-paragraph duration-500 group-hover:rotate-180 dark:text-white" />
                      </Link>
                      <div className="absolute left-0 top-12 z-10 w-full origin-top scale-y-0 items-center rounded-medium bg-white p-6 text-gray-900 opacity-0 shadow-lg duration-500 group-hover:scale-y-100 group-hover:opacity-100 dark:bg-dark-200 dark:text-white">
                        <ul className="mb-15 w-full columns-2 gap-10">
                          {menuItem.submenu.map((submenuItem) => (
                            <li
                              className="relative overflow-hidden py-2.5 text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform  before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                              key={submenuItem.id}>
                              <Link
                                href={submenuItem.path}
                                className="flex"
                                onClick={() => setInnerMobileMenu(!innerMobileMenu)}>
                                {submenuItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="max-w-full">
                          <Image
                            src={menuItem.imageLight}
                            width={350}
                            height={350}
                            alt="navbar"
                            className=" !w-full rounded-2xl dark:hidden"
                          />
                          <Image
                            src={menuItem.imageDark}
                            width={350}
                            height={350}
                            alt="navbar"
                            className="hidden !w-full rounded-2xl  dark:block"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        href="#"
                        className="flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-paragraph transition-colors duration-500 hover:border-borderColor hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColor/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5">
                        {menuItem.title}
                        <FaAngleDown className="ml-auto mt-1 text-paragraph duration-500 group-hover:rotate-180 dark:text-white" />
                      </Link>
                      <ul className="absolute left-0 top-12 z-10 min-w-full origin-top scale-y-0 rounded-3xl bg-white p-8 opacity-0 duration-500  group-hover:scale-y-100 group-hover:opacity-100 dark:bg-dark-200 [&>*:not(:first-child)]:mt-2.5 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark">
                        {menuItem.submenu.map((submenuItem) => (
                          <li
                            className="relative overflow-hidden pb-2.5 text-base capitalize text-paragraph duration-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                            key={submenuItem.id}>
                            <Link
                              href={submenuItem.path}
                              className="flex"
                              onClick={() => setInnerMobileMenu(!innerMobileMenu)}>
                              {submenuItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}

              <li>
                <Link href="http://app.lending-square.com/signin" className="btn btn-navbar btn-sm">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {showSearch && createPortal(<SearchOption onClose={() => setShowSearch(false)} />, document.body)}
    </header>
  )
}

export default SecondaryNavbar
