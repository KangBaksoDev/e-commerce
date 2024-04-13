"use client";

import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <Link href={'/'} className="text-2xl font-semibold">E-Commerce</Link>
                <nav className="items-center hidden gap-4 font-semibold text-gray-600 md:flex">
                    <Link href="/" className="transition-all duration-300 hover:opacity-50">Home</Link>
                    <Link href="/" className="transition-all duration-300 hover:opacity-50">About</Link>
                    <Link href="/" className="transition-all duration-300 hover:opacity-50">Contact</Link>
                </nav>
                <nav className="items-center hidden gap-4 font-semibold text-gray-600 md:flex">
                    <Link href={"/login"} className="transition-all duration-300 hover:opacity-50">Login</Link>
                    <Link
                        href="/register"
                        className="px-4 py-2 transition-all duration-300 rounded-full hover:opacity-50"
                    >
                        Register
                    </Link>
                </nav>
                <MenuIcon isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 1 }}
                        className="relative z-10 block gap-4 p-4 font-semibold text-white transition-transform duration-500 bg-red-600 items-ce nter top-6 md:hidden"
                    >
                        <div className="flex flex-col items-center">
                            <nav className="flex items-center w-full justify-evenly">
                                <Link href="/" className="transition-all duration-300 hover:opacity-50">Home</Link>
                                <Link href="/" className="transition-all duration-300 hover:opacity-50">About</Link>
                                <Link href="/" className="transition-all duration-300 hover:opacity-50">Contact</Link>
                            </nav>
                            <nav className="flex items-center gap-4 pt-4">
                                <Link href={"/login"} className="transition-all duration-300 hover:opacity-50">Login</Link>
                                <Link
                                    href="/register"
                                    className="px-4 py-2 transition-all duration-300 rounded-full hover:opacity-50"
                                >
                                    Register
                                </Link>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}