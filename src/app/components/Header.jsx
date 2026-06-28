'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Services', href: '/services' },
  { name: 'Upcoming Classes', href: '/upcoming' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/sky.jpg"
            alt="Sky Solutions"
            width={120}
            height={70}
            className="object-cover"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative font-medium text-gray-700 transition hover:text-[#1877AE] group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#1877AE] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-4">

          <Link
            href="/login"
            className="rounded-lg border border-[#1877AE] px-6 py-2 font-semibold text-[#1877AE] transition hover:bg-[#1877AE] hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/enrollment"
            className="rounded-lg bg-[#1877AE] px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0F5E8C]"
          >
            Enroll Now
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
        >
          {isOpen ? (
            <X size={28} className="text-[#1877AE]" />
          ) : (
            <Menu size={28} className="text-[#1877AE]" />
          )}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden bg-white transition-all duration-300 ${
          isOpen ? 'max-h-[420px] border-t' : 'max-h-0'
        }`}
      >

        <div className="space-y-2 px-6 py-5">

          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-[#1877AE]/10 hover:text-[#1877AE]"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg border border-[#1877AE] py-3 text-center font-semibold text-[#1877AE] hover:bg-[#1877AE] hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/enrollment"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg bg-[#1877AE] py-3 text-center font-semibold text-white hover:bg-[#0F5E8C]"
          >
            Enroll Now
          </Link>

        </div>
      </div>

    </header>
  )
}