import React from "react"

export default function Careers(){
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
                            <th className="job-line">Line of service</th>
                            <th className="job-location">Location</th>
                            <th className="job-type">Job type</th>
                            <th className="job-empty"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The table bodyv bzhbbgzgh jzbjghjz bhzjgghj</td>
                            <td>with two columns</td>
                            <td>with two columns</td>
                            <td>with two columns</td>
                            <td>Learn more</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
}