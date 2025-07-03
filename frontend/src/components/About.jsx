// AboutSection.tsx
import React from "react";
import { Github } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
    const sectionTitle = "About This Website"
    const sectionDescription = ""
    return (
        <section className="max-w-3xl mx-auto p-6 text-center space-y-6">
            <SectionHeader title={sectionTitle} description={sectionDescription} />
            <p>This website is built using the <b>MERN</b> (MongoDB, Express.js, React.js, Node.js) stack, using <b>Tailwind CSS</b>, and hosted on Render.com. Relevant images and files are stored on <b>Amazon S3</b>. The learning and building processes are accelerated with <b>engineered prompts</b> with the help of <b>ChatGPT</b>.</p>
            <div className="flex justify-center items-center gap-4">
                <a
                    href="https://github.com/DakePeng/DakePeng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex px-4 py-2 text-sm mt-6 font-semibold text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition duration-300"
                    aria-label="View source code on GitHub"
                >
                    <Github className="w-5 h-5 mr-2" />
                    View Source on GitHub
                </a>
            </div>

            <div className="text-sm text-gray-500 mt-12">
                <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:underline"
                >
                <img
                    src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"
                    alt="Creative Commons License"
                    className="h-6"
                />
                Licensed under CC BY-NC-SA 4.0
                </a>
            </div>
        </section>
    );
}
