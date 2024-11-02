import axios from "axios"
import { useEffect, useState } from "react"
import React  from 'react'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { MdExposurePlus1 } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mainURL = "https://dummyjson.com"

const Cards = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        axios.get(`${mainURL}/products`)
            .then(res => {
                console.log(res)
                setProducts(res.data.products)
            })
            .catch(err => console.log(err))
    }, [])

    const showToast = () => {
        toast.success('Saqlandi');
    }

    const renderCard = products?.map((item) => {
        const roundedRating = Math.round(item.rating); // Bahoni yaxlitlaymiz

        return (
            <div key={item.id} className="flex flex-col justify-between h-full p-4 bg-white rounded-lg shadow-md hover:shadow-xl"> 
                <div>
                    <img src={item.images[0]} alt={item.title} className="h-48 w-full object-contain rounded-md"/>
                </div>
                <div className="flex items-center justify-between py-4">
                    <b>{item.title}</b>
                    <b> {item.price} $</b>
                </div>
                <p>{item.description}</p>
                <div className="flex justify-between items-center py-4">
                    <button className="p-3 bg-[#dc780b] rounded text-white text-xl" onClick={showToast}><MdExposurePlus1 /></button>
                    <div className="flex">
                        {[...Array(5)].map((_, index) => (index < roundedRating ? <IoIosStar key={index} className="text-2xl text-yellow-500" /> : 
                        <IoIosStarOutline key={index} className="text-2xl text-yellow-500" />
                        ))}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='container-render'>
                <div className='text-center pb-14'>
                    <p className='text-[#dc780b]'>MENU</p>
                    <p className='font-bold text-2xl py-4'>Food Full of treaty Love</p>
                    <p className='text-[#00000075]'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls <br /> with Persons but also specialized equipment, Skills to manage Customers, </p>
                </div>
                <div className='grid grid-cols-3 gap-7'>
                    {renderCard}
                </div>
            </div>
            <ToastContainer/>
        </section>
    )
}

export default Cards
