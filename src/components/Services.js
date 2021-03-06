import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Services(){
    const [serviceData, setService] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "service"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
            )
            .then((data) => setService(data))
            .catch(console.error);
    }, []);
    return (
        <main className="bgd-main min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">
                    Our services
                </h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Thornhill and its subsidiaries offer their services for a better world.
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceData &&
                    serviceData.map((service, index) => (
                        <article key={index}>
                            <Link to={"/services/" + service.slug.current} key={service.slug.current}>
                  <span
                      className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-color-site"
                  >
                    <img
                        src={service.mainImage.asset.url}
                        alt={service.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-color-site font-bold rounded">
                        {service.title}
                      </h3>
                    </span>
                  </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}