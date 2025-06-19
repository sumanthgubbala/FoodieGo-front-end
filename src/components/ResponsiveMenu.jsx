import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const ResponsiveMenu = ({ open , links }) => {
    return (
        <AnimatePresence>
            {
                open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='absolute top-20 left-0 w-full h-screen z-20 overflow-hidden'
                    >
                        <div className='text-xl font-semibold uppercase bg-orange-300 
                        text-white py-10 m-6 rounded-3xl'>
                        <ul className='flex flex-col justify-center items-center gap-10'>
                            {links.map((link,index)=>(
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className='hover:bg-orange-100 hover:text-black'
                                        >{link.title}
                                        </a>
                                </li>
                            ))

                            }
                        </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default ResponsiveMenu