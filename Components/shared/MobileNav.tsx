"use client"
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, UserButton } from "@clerk/clerk-react"
import { SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'
import { Button } from "../ui/button"


const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div>
      <header className="header"><Link href='/' className="flex item-center gap-2 md:py-2"><p className="font-extrabold text-2xl">SPON<span className="text-red-600">SIFY</span></p>

      </Link>
        <nav className="flex gap-2">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <Sheet>
              <SheetTrigger><Image src='/assets/icons/menu.png' alt="menu" width={32} height={32} className="cursor-pointer" /></SheetTrigger>
              <SheetContent className="sheet-content sm:w-64">
                <>
                  <p className="font-extrabold text-2xl">SPON<span className="text-red-600">SIFY</span></p>
                  <ul className='header-nav_elements'>
                    {navLinks.map((link) => {
                      const isActive = link.route === pathname
                      return (
                        <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                        ><Link className='sidebar-link' href={link.route}>
                            <Image src={link.icon} alt='logo' width={24} height={24} className={`${isActive && 'brightness-200'}`} />
                            {link.label}
                          </Link>
                        </li>
                      )
                    })}
                    <li className='flex-center cursor-pointer gap-2 p-4'>
                      <UserButton afterSignOutUrl='/' showName />
                    </li>
                  </ul>
                </>
              </SheetContent>
            </Sheet>
          </SignedIn>
          <SignedOut>
            <Button asChild className='button bg-gray-gradient bg-black'>
              <Link href='/sign-in'>
                Login
              </Link>
            </Button>
          </SignedOut>
        </nav>
      </header>
    </div>
  )
}

export default MobileNav
