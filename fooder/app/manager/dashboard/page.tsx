'use client';

import { useState } from 'react';
import { ShoppingCart, Utensils } from 'lucide-react';
import Image from 'next/image';
import Burger from '@/public/image/Burger.jpg'
import Pasta from '@/public/image/Pasta.jpg'
import Pizza from '@/public/image/Pizza.jpg'
import Shusi from '@/public/image/Shusi.jpg'



const foodItems = [
    { id: 1, name: 'Sushi', price: '$12', image: Shusi },
    { id: 2, name: 'Burger', price: '$8', image: Burger },
    { id: 3, name: 'Pasta', price: '$10', image: Pasta },
    { id: 4, name: 'Pizza', price: '$15', image: Pizza },
];

const DashboardPage = () => { 
    const [cart, setCart] = useState<{ id: number; name: string; price: string; image: any }[]>([]);

    const addToCart = (item: { id: number; name: string; price: string; image: any }) => {
        setCart([...cart, item]);
    };
          
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold flex text-red-600 items-center gap-2"><Utensils /> Food Dashboard</h1>
                <button className="flex items-center gap-2 border px-4 py-2 rounded-lg shadow-sm">
                    <ShoppingCart /> Cart ({cart.length})
                </button>
            </header>
            <main className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {foodItems.map((item) => (
                    <div key={item.id} className="shadow-lg rounded-lg bg-white overflow-hidden">
                        <Image src={item.image} alt={item.name} className="w-full h-[300px] object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">{item.name}</h2>
                            <p className="text-lg font-semibold">{item.price}</p>
                            <button onClick={() => addToCart(item)} className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default DashboardPage;
