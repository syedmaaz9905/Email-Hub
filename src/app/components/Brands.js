"use client"

// Next Image
import Image from "next/image"

// Framer Motion
import { motion } from 'framer-motion'

// Variants
import { fadeIn } from "../../../variants"

const Brands = () => {
    return (
        <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
            <div className="container mx-auto">
                {/* Brand Wrapper */}
                <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
                    <div>
                        <Image src={'icons/brands/ford.svg'} width={85} height={32} alt='' />
                    </div>

                    <div>
                        <Image src={'icons/brands/mercedes.svg'} width={60} height={60} alt='' />
                    </div>

                    <div>
                        <Image src={'icons/brands/audi.svg'} width={85} height={50} alt='' />
                    </div>

                    <div>
                        <Image src={'icons/brands/bmw.svg'} width={60} height={60} alt='' />
                    </div>

                    <div>
                        <Image src={'icons/brands/vw.svg'} width={60} height={60} alt='' />
                    </div>

                    <div>
                        <Image src={'icons/brands/skoda.svg'} width={60} height={60} alt='' />
                    </div>

                    <div>
                        <Image src={'icons/brands/mazda.svg'} width={62} height={50} alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands