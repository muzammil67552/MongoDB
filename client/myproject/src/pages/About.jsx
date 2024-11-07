/* eslint-disable react/no-unescaped-entities */
const About = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 text-center">
                {/* Heading */}
                <h1 className="text-4xl font-semibold text-blue-600 mb-8">Why Choose Our Service</h1>

                {/* Description */}
                <p className="text-xl text-gray-600 mb-12">
                    We are dedicated to providing top-quality services to our clients, focusing on their needs and delivering results that exceed expectations. 
                    Here's why our service stands out:
                </p>

                {/* Key Points */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-bold text-blue-600 mb-4">Expert Team</h3>
                        <p className="text-gray-600">
                            Our team consists of professionals with years of experience in the industry, offering you unmatched expertise.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-bold text-blue-600 mb-4">Customer-Centric Approach</h3>
                        <p className="text-gray-600">
                            We prioritize your satisfaction, ensuring that all our solutions are tailored to meet your specific needs.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-bold text-blue-600 mb-4">Innovative Solutions</h3>
                        <p className="text-gray-600">
                            We leverage the latest technologies and strategies to provide innovative solutions that drive growth and success.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12">
                    <a
                        href="#contact"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
                    >
                        Contact Us Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
