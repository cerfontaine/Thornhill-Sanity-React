import React from "react"
import image from "../background.jpg"

export default function Home(){
    return (
        <main>
            <img src={image} alt="Construction" className="absolute object-cover w-full h-full home-image"/>
            <section className="relative flex justify-center pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl font-bold cursive leading-none text-white p-5 lg:leading-snug home-name h1-home-page">Let us become the energy that changes everything.</h1>
            </section>
        </main>
    )
}