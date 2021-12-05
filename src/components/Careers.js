import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Careers(){
    const [careerData, setCareer] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "career"]{
                name,
                slug,
                "joblocation": location->name,
                "jobtype": jobtype->name,
                "serviceprovider": serviceprovider->name,
            }`
            )
            .then((data) => setCareer(data))
            .catch(console.error);
    }, []);
    return (
        <main className="bgd-main min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">
                    Discover your new career with Thornhill
                </h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12 mt-2">
                    We offer a wide range of career opportunities for a bright future.
                </h2>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="job-title">Job title</th>
                            <th className="job-line">Service provider</th>
                            <th className="job-location">Location</th>
                            <th className="job-type">Job type</th>
                            <th className="job-empty"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {careerData &&
                    careerData.map((career, index) => (
                        <tr key={index}>
                            <td><Link className="career" to={"/career/" + career.slug.current} key={career.slug.current}>{career.name}</Link></td>
                            <td>{career.serviceprovider}</td>
                            <td>{career.joblocation}</td>
                            <td>{career.jobtype}</td>
                            <td><Link className="career" to={"/career/" + career.slug.current} key={career.slug.current}>Learn more</Link></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}