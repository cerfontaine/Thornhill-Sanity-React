import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../cam.jpg"

export default function About(){
    const [setAbout] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "about"]{
                post,
                slug,
            }`
            )
            .then((data) => setAbout(data))
            .catch(console.error);
    }, []);
    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bgd-main rounded-lg">
                <header className="relative bg-color-site-1">
                    <div className="absolute h-full w-full flex items-center p-8">
                        <div className="bg-white bg-opacity-75 rounded p-12">
                            <h1 className="cursive text-3xl lg:text-6xl mb-4 text-gray-800">
                                About us
                            </h1>
                            <div className="flex justify-center text-gray-800">
                                <p className="cursive flex items-center pl-2">
                                    Thornhill Utilities is a privately held company specializing in public power infrastructure.

                                    They are responsible for the maintenance of power lines and the installation of public routers for the state of New York in the United States.
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        src={image}
                        alt="test"
                        className="w-full object-cover rounded-t"
                        style={{ height: "400px" }}
                    />
                </header>
                <div className="flex py-10 items-start">
                    <div className="px-4 prose lg:prose-xl max-w-full">
                        <h2>Empowering Consumers</h2>



                        Insight for Tomorrow. Connected Living Today


                        Direct Energy is subsidiary of Thornhill Utilities and gives customers choice, simplicity, and innovation where energy, data, and technology meet.


                        We make energy work harder for our over four million home and business customers across North America.

                    </div>
                </div>
            </article>
        </main>
    );
}