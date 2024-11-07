/* eslint-disable react/no-unescaped-entities */
import Register from './Register'

const Home = () => {
  return (

    <div>
    <section
      className="bg-cover bg-center min-h-screen md:py-32 py-8"
      style={{ backgroundImage: 'url(/img5.jpg)' }}
    >
      <div className="container mx-auto px-4 text-center justify-center">
        <div className="bg-white bg-opacity-55 rounded-lg shadow-lg p-10 max-w-4xl mx-auto">
          {/* Heading aligned to the left */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left">
            Welcome to Our Website
          </h1>

          {/* Subheading aligned to the left */}
          <h2 className="text-2xl text-gray-600 mb-6 text-left">
            Your one-stop solution for all your needs
          </h2>

          {/* Paragraph */}
          <p className="text-lg text-gray-700 mb-6 text-left">
            At our company, we pride ourselves on delivering exceptional services tailored to your specific needs. Whether you're looking for personalized consultations, premium products, or expert advice, we have a team of professionals ready to assist you every step of the way. Let us help you achieve your goals with ease and expertise.
          </p>

          {/* Contact Now Button */}
          <div className="text-left">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-10 flex items-center justify-center min-h-screen">
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-white rounded-lg shadow-lg p-6 lg:px-48 px-0">
          
          {/* Image Section (Left Side) */}
          <div className="flex justify-center md:justify-start h-full">
            <img
              src="/homepage.jpg"
              alt="Content Image"
              className="w-full max-w-md h-full rounded-md shadow-md object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            />
          </div>

          {/* Content Section (Right Side) */}
          <div className="p-6 rounded-lg shadow-lg bg-white h-full flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4 text-left text-gray-800">
              Welcome to Our Platform
            </h1>
            <h2 className="text-2xl mb-6 text-left text-gray-600">
              We Provide Excellent Services to Help You Achieve Your Goals
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-left">
              Our platform is dedicated to providing exceptional services designed to cater to your specific needs. Whether you're looking for personalized solutions or expert guidance, we have a team of professionals ready to assist you every step of the way. Join us today and experience the difference!
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Contact Now
            </button>
          </div>
          
        </div>
      </main>
    </section>
    <Register/>
    </div>
  );
};

export default Home;
