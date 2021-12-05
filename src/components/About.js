import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import image from "../cam.jpg"

export default function About(){
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
                                    At PwC, we’re committed to providing quality audit, tax and consulting services to our public and private clients in Belgium and internationally.

                                    Our value promise starts with our relationship with you. We aim to start building value from day one.
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
                        {/*<BlockContent
                            blocks={singleServices.description}
                            projectId="r3u99q74"
                            dataset="production"
                        />*/}
                        Test test test test
                    </div>
                </div>
            </article>
        </main>
    );
}