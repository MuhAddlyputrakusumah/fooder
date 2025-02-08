"use client"

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import img1 from "@/public/image/user/shincan.png"
import img2 from "@/public/image/user/shincan2.png"
import img3 from "@/public/image/user/shincan3.jpg"
import Image from "next/image";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    text: string;
    rating: number;
    img: any;
}

const DashboardPage = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([
        {
            id: 1,
            name: "Saul Goodman",
            role: "CEO & Founder",
            text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
            rating: 5,
            img: img1
        },
        {
            id: 2,
            name: "Saul Goodman",
            role: "CEO & Founder",
            text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
            rating: 5,
            img: img2
        },
        {
            id: 3,
            name: "Saul Goodman",
            role: "CEO & Founder",
            text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
            rating: 5,
            img: img3
        },
    ]);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [newText, setNewText] = useState<string>("");

    const handleEdit = (testimonial: Testimonial) => {
        setEditingId(testimonial.id);
        setNewText(testimonial.text);
    };

    const handleSave = (id: number) => {
        setTestimonials(
            testimonials.map((t) => (t.id === id ? { ...t, text: newText } : t))
        );
        setEditingId(null);
    };

    const handleDelete = (id: number) => {
        setTestimonials(testimonials.filter((t) => t.id !== id));
    };

    return (
        <div className="container">
            <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 space-y-8">
                <h2 className="text-gray-600 text-sm uppercase font-medium font-roboto">Testimonials</h2>
                <h1 className="mb-4 font-amatic text-5xl font-semibold">
                    What Are They <span className="text-red-500 font-amatic font-semibold">Saying About Us</span>
                </h1>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 shadow-lg rounded-lg w-2/3 flex items-center space-x-4">
                        <div className="w-3/4">
                            {editingId === testimonial.id ? (
                                <textarea
                                    className="border p-2 w-full rounded"
                                    value={newText}
                                    onChange={(e) => setNewText(e.target.value)}
                                />
                            ) : (
                                <p className="italic text-gray-600">{testimonial.text}</p>
                            )}
                            <h3 className="mt-2 font-bold text-gray-800">{testimonial.name}</h3>
                            <p className="text-gray-500 text-sm">{testimonial.role}</p>
                            <div className="flex text-yellow-500 mt-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <div className="mt-3 space-x-2">
                                {editingId === testimonial.id ? (
                                    <button
                                        onClick={() => handleSave(testimonial.id)}
                                        className="bg-green-500 text-white px-3 py-1 rounded"
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleEdit(testimonial)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                )}
                                <button
                                    onClick={() => handleDelete(testimonial.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <Image
                                src={testimonial.img}
                                alt="User"
                                className="rounded-full bg-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default DashboardPage;
