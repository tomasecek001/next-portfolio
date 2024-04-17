import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav
    className="border-b border-gray-200 bg-white/75 backdrop-blur-lg sticky top-0"
  >
    <div
      className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <Link href="#" className="font-bold text-xl text-gray-900">tomasecek001</Link>
      <button
        id="menu-button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
        >
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              aria-current="page"
              >Home</Link
            >
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >Pricing</Link
            >
          </li>
          <li>
            <Link
              href="/contact.html"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >Contact</Link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
