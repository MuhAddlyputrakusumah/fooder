"use client";

import Image from "next/image";
import { menu } from "../../../data/menu";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function DashboardPage() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category"); // Gunakan .get() untuk membaca parameter URL

    const filteredMenu = category
        ? menu.filter((post) => post.category.toLowerCase() === category.toLowerCase())
        : menu;



    return (
        <>
            <div className='h-[3000px] container'>
                <div className="py-10 space-y-6">
                    <h1 className="font-normal text-base text-abu text-center">Our Menu</h1>
                    <h1 className="font-amatic font-medium text-5xl text-center">Check Our  <span className="text-primary">Yummy Menu</span></h1>
                </div>

                <div className="mt-4 mb-6 flex justify-center space-x-4">
                    <Link href="./menu" className={`text-abu ${!category ? 'font-bold' : ''}`}>All</Link>
                    <Link href="menu?category=makanan" className={`text-abu ${category === 'makanan' ? 'font-bold' : ''}`}>Makanan</Link>
                    <Link href="menu?category=minuman" className={`text-abu ${category === 'minuman' ? 'font-bold' : ''}`}>Minuman</Link>
                </div>

                <div className="py-10 space-y-3">
                    <h1 className="font-normal text-base text-abu text-center">Menu</h1>
                    <h1 className="font-amatic font-semibold text-5xl text-center text-primary">Starters</h1>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 place-items-center'>
                    {
                        filteredMenu.map((item) => {
                            return (
                                <div key={item.id}>
                                    <Image
                                        src={item.img}
                                        alt='Gambar Menu'
                                        className='max-w-[350px] mx-auto block py-3' />
                                    <div className='space-y-2 font-roboto text-center'>
                                        <h1 className='text-dasar1 font-normal text-2xl'>{item.name}</h1>
                                        <p className='text-abu font-normal text-base'>{item.deskripsi}</p>
                                        <h1 className='text-primary font-bold text-2xl'>{item.price}</h1>
                                        <a href="./transaksi" className="inline-block pt-3">
                                            <button className=" py-2 px-28 bg-primary text-white rounded-full text-2xl font-semibold">Order Now</button>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DashboardPage
