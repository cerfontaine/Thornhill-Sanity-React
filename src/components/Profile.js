import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import gray from "../gray.png";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function SingleServices() {
    const [user, setUser] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == "${slug}"]{
            name,
            image,
            slug,
            "bio": bio[0].children[0].text,
            "authorImage": image.asset->url
        }`
            )
            .then((data) => setUser(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!user) return <div>Loading...</div>;

    return (
        <main className="relative">
            <img src={gray} alt="Background" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bgd-main rounded-lg shadow-2xl lg:flex p-20">
                    <img
                        src={urlFor(user.authorImage).url()}
                        className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                        alt="Kapehe"
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl mb-4">
                            {user.name} Profile's
                        </h1>
                        <p className="text-lg">{user.bio}</p>
                    </div>
                </section>
            </div>
        </main>
    );
}