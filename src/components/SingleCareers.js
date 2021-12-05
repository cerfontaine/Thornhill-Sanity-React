import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import {Link, useParams} from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";

export default function SingleCareers(){
    const [singleCareers, setSingleCareers] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == "${slug}"]{
            name,
            _id,
            slug,
            description,
            requirements,
            apply,
            "joblocation": location->name,
            "jobtype": jobtype->name,
            "serviceprovider": serviceprovider->name
        }`
            )
            .then((data) => setSingleCareers(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!singleCareers) return <div>Loading...</div>;
    return (
        <main className="bgd-main min-h-screen">
            <section className="mx-auto">
                <div className="bg-color-site-1">
                    <div className="container py-10">
                        <h1 className="text-5xl flex cursive roboto text-white bg-black py-2 w-max">
                            {singleCareers.name}
                        </h1>
                    </div>
                </div>
                <div className="container text-right py-10">
                    <Link className="return-page p-3" to={"/careers/"}>Return to job search</Link>
                </div>
                <div className="container border-t pt-5 border-gray-100 flex ">
                    <article className="w-9/12 flex flex-col">
                        <div className=" px-2 py-5">
                            <span className="py-5 font-bold">Job Description</span>
                            <BlockContent
                                blocks={singleCareers.description}
                                projectId="r3u99q74"
                                dataset="production"
                            />
                        </div>
                        <div className=" px-2 py-5">
                            <span className="py-5 font-bold">Job requirements</span>
                            <BlockContent
                                blocks={singleCareers.requirements}
                                projectId="r3u99q74"
                                dataset="production"
                            />
                        </div>
                        <div className=" px-2 py-5">
                            <span className="py-5 font-bold">How to apply ?</span>
                            <BlockContent
                                blocks={singleCareers.apply}
                                projectId="r3u99q74"
                                dataset="production"
                            />
                        </div>
                    </article>
                    <aside className="w-1/4 border-t-4 border-color-site fff flex flex-col">
                        <span className="px-2 py-5"><b>Location: </b>{singleCareers.joblocation}</span>
                        <span className="px-2 py-5"><b>Job type: </b>{singleCareers.jobtype}</span>
                        <span className="px-2 py-5"><b>Service provider: </b>{singleCareers.serviceprovider}</span>
                    </aside>
                </div>
            </section>
        </main>
    );
}