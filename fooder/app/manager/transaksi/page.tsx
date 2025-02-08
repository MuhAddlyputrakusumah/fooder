"use client";

import Image from "next/image";
import { menu } from "../../../data/transaksi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

type QuantityState = {
    [key: string]: { count: number; price: number };
};

function DashboardPage() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category") || "";

    const filteredTransaksi = category
        ? menu.filter((post) => post.category.toLowerCase() === category.toLowerCase())
        : menu;

    const [quantities, setQuantities] = useState<QuantityState>({});
    const [orderPlaced, setOrderPlaced] = useState(false);

    const increaseQuantity = (id: string, price: number | string) => {
        const numericPrice = typeof price === "number" ? price : Number(price);
        setQuantities((prev) => ({
            ...prev,
            [id]: { count: (prev[id]?.count || 0) + 1, price: numericPrice },
        }));
    };

    const decreaseQuantity = (id: string) => {
        setQuantities((prev) => {
            if (!prev[id] || prev[id].count === 0) return prev;
            const newQuantities = { ...prev };
            newQuantities[id].count -= 1;
            if (newQuantities[id].count === 0) delete newQuantities[id];
            return newQuantities;
        });
    };

    const handleOrder = () => {
        const orderDetails = Object.entries(quantities)
            .map(([id, { count, price }]) => `Item ${id}: ${count} x $${price} = $${count * price}`)
            .join("\n");
        alert(`Pesanan Anda:\n${orderDetails}\n\nTotal Semua: $${totalOrderAmount.toLocaleString()}\n\nTerima kasih telah memesan!`);
        setOrderPlaced(true);
    };

    const totalOrderAmount = Object.values(quantities).reduce(
        (acc, { count, price }) => acc + count * price,
        0
    );

    return (
        <>
            <div className="h-[1500px] container">
                <div className="py-10 space-y-6">
                    <h1 className="font-normal text-base text-abu text-center">Our Menu</h1>
                    <h1 className="font-amatic font-medium text-5xl text-center">
                        Check Our <span className="text-primary">Yummy Menu</span>
                    </h1>
                </div>

                <div className="mt-4 mb-6 flex justify-center space-x-4">
                    <Link href={`/menu`} className={`text-abu ${!category ? 'font-bold' : ''}`}>All</Link>
                    <Link href={`/menu?category=makanan`} className={`text-abu ${category === 'makanan' ? 'font-bold' : ''}`}>Makanan</Link>
                    <Link href={`/menu?category=minuman`} className={`text-abu ${category === 'minuman' ? 'font-bold' : ''}`}>Minuman</Link>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 place-items-center'>
                    {filteredTransaksi.map((item) => {
                        const itemId = String(item.id);
                        const quantity = quantities[itemId]?.count || 0;
                        const numericPrice = typeof item.price === "number" ? item.price : Number(item.price);
                        const totalPrice = quantity * numericPrice;

                        return (
                            <div key={itemId} className="border px-10 py-4 rounded-lg shadow-md">
                                <Image src={item.img} alt="Gambar Menu" className="max-w-[250px] mx-auto block py-3" />
                                <div className="space-y-2 font-roboto text-center">
                                    <h1 className="text-dasar1 font-normal text-2xl">{item.name}</h1>
                                    <p className="text-abu font-normal text-base">{item.deskripsi}</p>
                                    <h1 className="text-primary font-bold text-2xl">$ {numericPrice.toLocaleString()}</h1>
                                </div>

                                <div className="flex justify-center items-center space-x-4 mt-4">
                                    <button onClick={() => decreaseQuantity(itemId)} className="px-3 py-2 bg-gray-300 rounded-lg">-</button>
                                    <span className="text-lg font-semibold">{quantity}</span>
                                    <button onClick={() => increaseQuantity(itemId, numericPrice)} className="px-3 py-2 bg-blue-500 text-white rounded-lg">+</button>
                                </div>

                                {quantity > 0 && (
                                    <p className="text-center mt-2 text-primary font-bold">
                                        Total: $ {totalPrice.toLocaleString()}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                {totalOrderAmount > 0 && !orderPlaced && (
                    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg cursor-pointer text-lg font-semibold" onClick={handleOrder}>
                        Pesan Sekarang ($ {totalOrderAmount.toLocaleString()})
                    </div>
                )}
            </div>
        </>
    );
}

export default DashboardPage;
