/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-9xl font-extrabold text-red-600">404</h1>
            <p className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page not found</p>
            <p className="text-gray-600 mt-2 text-center max-w-xs md:max-w-md">
                The page you're looking for doesn't exist. It might have been removed or you may have mistyped the URL.
            </p>
            <Link 
                to="/" // Keeps user on the same page
                className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default Error;
