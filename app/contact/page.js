'use client';

import React, { useEffect } from 'react';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { ProductList } from '../data/ProductList';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
    // resetCount state to reset checkbox state
    const [resetCount, setResetCount] = useState(0);

    // loading state for submit button
    const [loading, setLoading] = useState(false);

    // checkbox state to track which products are selected
    const [checkedOptions, setCheckedOptions] = useState(new Set())

    // phone number state to format phone number
    const [phoneNumber, setPhoneNumber] = useState('');



    // notify functions to display toast messages
    const notifySuccess = () => {
        toast.success('Email sent successfully');
    };

    const notifyError = () => {
        toast.error('Failed to send email');
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            message: event.target.message.value,
            products: Array.from(checkedOptions),
        };

        console.log(data);
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log('response worked');

            // reset form
            event.target.reset();
            setCheckedOptions(new Set());

            // After successful submission and form reset
            setResetCount(prevCount => prevCount + 1);

            // display toast message when email is sent successfully
            notifySuccess();
        }
        if (!response.ok) {
            setLoading(false);
            console.log('Error sending message');

            // display toast message when email fails to send
            notifyError();
        }
    };


    // format phone number as user types
    const handlePhoneChange = (e) => {
        let input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (input.length > 10) {
            input = input.slice(0, 10); // Limit to 10 digits
        }
        // Format the phone number as XXX-XXX-XXXX
        let formattedNumber = '';
        for (let i = 0; i < input.length; i++) {
            if (i === 3 || i === 6) {
                formattedNumber += '-';
            }
            formattedNumber += input[i];
        }
        setPhoneNumber(formattedNumber);
    };


    return (
        <>
            <section id='contact' className="h-full p-2 pt-16 md:pb-5 md:px-1 lg:px-10 md:pt-4 text-gray-200">
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <div className="grid grid-col-1 gap-3 xl:gap-6">
                            <div className="mx-auto">
                                <h2 className="text-4xl font-semibold dark:text-slate-100">Contact Us</h2>
                            </div>
                            {/* Name */}
                            <div className="p-1 border  border-slate-200 dark:border-slate-100 rounded-sm w-11/12 md:w-2/4 mx-auto">
                                <input
                                    id='name'
                                    className="dark:text-stone-100 text-black p-3 w-full bg-transparent"
                                    type="text"
                                    minLength={2}
                                    maxLength={150}
                                    placeholder="Name"
                                    autoComplete="on"
                                />
                            </div>

                            {/* Phone */}
                            <div className="p-1 border  border-slate-200 dark:border-slate-100 rounded-sm w-11/12 md:w-2/4 mx-auto">
                                <input
                                    id='phone'
                                    className="dark:text-stone-100 text-black p-3 w-full bg-transparent"
                                    type="text"
                                    minLength={7}
                                    maxLength={15}
                                    placeholder="Phone"
                                    autoComplete="on"
                                    value={phoneNumber}
                                    onChange={handlePhoneChange}
                                />
                            </div>

                            {/* Email */}
                            <div className="p-1 border  border-slate-200 dark:border-slate-100 rounded-sm w-11/12 md:w-2/4 mx-auto">
                                <input
                                    id='email'
                                    className="dark:text-stone-100 text-black p-3 w-full bg-transparent"
                                    required
                                    type="email"
                                    minLength={5}
                                    maxLength={150}
                                    autoComplete="on"
                                    placeholder="Email"
                                />
                            </div>

                            {/* Message */}
                            <div className="p-1 mb-5 md:mb-0 border  border-slate-200 dark:border-slate-100 rounded-sm w-11/12 md:w-2/4 mx-auto">
                                <textarea
                                    id="message"
                                    className="dark:text-stone-100 text-black w-full p-3 bg-transparent"
                                    placeholder="Leave a message..."
                                    name="message"
                                    rows="4"
                                    autoComplete="off"
                                    minLength={10}
                                    maxLength={500}
                                />
                            </div>
                            <div className="mx-auto hidden md:block">
                                <h2 className='italic text-sm'>Select the product(s) that interest you...</h2>
                            </div>
                            <section className="mx-auto ">
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                    {ProductList.map(({ id, name, productActive }) => (
                                        productActive
                                            ? <div key={id} className="">
                                                <input
                                                    onChange={(e) => {
                                                        const copy = new Set(checkedOptions);
                                                        if (copy.has(id)) {
                                                            copy.delete(id);
                                                        } else {
                                                            copy.add(id);
                                                        }
                                                        setCheckedOptions(copy);
                                                    }}
                                                    type="checkbox"
                                                    id={id}
                                                    name={name}
                                                    value={id}
                                                    checked={checkedOptions.has(id)} // Dynamically set the checked state based on whether id is in checkedOptions set
                                                />
                                                <label htmlFor={id} className="text-xs ml-1 capitalize" >{name}</label>
                                            </div>
                                            : null

                                    ))}
                                </div>
                            </section>
                            <div className="flex justify-center mb-7 md:mb-0 md:mt-7">
                                <button
                                    disabled={loading}
                                    className={loading ? "bg-green-700 dark:bg-green-800 bg-opacity-40 dark:bg-opacity-30 rounded-lg py-2 px-7 shadow-2xl w-fit" : "bg-slate-700 dark:bg-slate-500 rounded-lg py-2 px-7 shadow-2xl w-fit"}>
                                    {loading
                                        ? <h2 className="uppercase text-yellow-300 text-xl font-bold">Success!!!</h2>
                                        : <h2 className="uppercase text-slate-100 text-lg font-bold">Submit</h2>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section >
            {/* toast container */}
            <div className='z-11'>
                <ToastContainer
                    position='top-center'
                    autoClose={2000}
                />
            </div>
        </>
    )
}