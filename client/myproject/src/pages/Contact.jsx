import { useState } from "react";

const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
    };

    return (
        <>
            <section className="bg-gray-50 py-10 flex items-center justify-center min-h-screen">
                <main className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                        
                        {/* Map Section */}
                        <div className="p-6 rounded-lg shadow-lg h-full flex flex-col justify-center">
                            <div className="mapswrapper w-full h-full flex justify-center">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    allowFullScreen
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Fareed%20Colony%20Orangi%20Town%20Karachi&zoom=15&maptype=roadmap"
                                    className="rounded-lg shadow-md"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <div className="p-6 rounded-lg shadow-lg bg-white h-full flex flex-col justify-center">
                            <h1 className="text-2xl font-bold mb-6 text-center">Contact Us Now</h1>

                            <form className="space-y-5" onSubmit={handleSubmit}>
                                {/* Username Field */}
                                <div>
                                    <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Enter Your Name"
                                        id="username"
                                        autoComplete="off"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={handleInput}
                                        value={contact.username}
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        id="email"
                                        autoComplete="off"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={handleInput}
                                        value={contact.email}
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Your Message"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        rows="5"
                                        onChange={handleInput}
                                        value={contact.message}
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="mt-6">
                                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default Contact;
