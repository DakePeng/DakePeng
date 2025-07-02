import SectionHeader from "./SectionHeader";
export default function Contact() {
    const sectionTitle = "Get in Touch"
    const sectionDescription = "Have a question, project, or just want to say hi? Drop me a message!"
    return (
        <section className="w-full px-4 md:px-8 lg:px-24" id="contact">
        <div className="max-w-4xl mx-auto text-center">
            <SectionHeader title={sectionTitle} description={sectionDescription}/>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                </div>
                <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-full border border-gray-300 p-4 mb-18 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition duration-300 cursor-pointer"
                >
                Send Message
            </button>
            </form>
        </div>
        </section>
    );
    }
