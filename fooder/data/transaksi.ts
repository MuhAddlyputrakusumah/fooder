import Img from '@/public/image/menu/menu-item-1.png'
import Img2 from '@/public/image/menu/menu-item-2.png'
import Img3 from '@/public/image/menu/menu-item-3.png'
import Img4 from '@/public/image/menu/menu-item-4.png'
import Img5 from '@/public/image/menu/menu-item-5.png'
import Img6 from '@/public/image/menu/menu-item-6.png'

export interface dataTransaksi {
    id: number;
    img: any;
    name: string;
    deskripsi: string
    price: number
    category: string
}

export const menu: dataTransaksi[] = [
    {
        id: 1,
        img: Img,
        name: "Magnam Tiste",
        price: 5.95,
        deskripsi: "Lorem, deren, trataro, filede, nerada",
        category: "makanan"
    },
    {
        id: 2,
        img: Img2,
        name: "Aut Luia",
        price: 14.95,
        deskripsi: "Lorem, deren, trataro, filede, nerada",
        category: "makanan"
    },

    {
        id: 3,
        img: Img3,
        name: "Est Eligendi",
        price: 8.95,
        deskripsi: "Lorem, deren, trataro, filede, nerada",
        category: "makanan"
    },
    {
        id: 4,
        img: Img4,
        name: "Eos Mushroom",
        price: 13.12,
        deskripsi: "Lorem, deren, trataro, filede, nerada",
        category: "makanan"
    },
    {
        id: 5,
        img: Img5,
        name: "Eos Luibusdam",
        price: 12.95,
        deskripsi: "Lorem, deren, trataro, filede, nerada",
        category: "makanan"
    },
    {
        id: 6,
        img: Img6,
        name: "Laboriosam Direva",
        price: 9.95,
        deskripsi: "Lorem, deren, trataro, filede, nerada",
        category: "makanan"
    },
]