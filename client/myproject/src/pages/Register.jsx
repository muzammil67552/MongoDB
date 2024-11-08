import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Registering user:", user);

        try {
            const response = await fetch("http://localhost:9000/api/auth/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });
            
            if (response.ok) {
                console.log("User registered successfully:", await response.json());
                navigate("/")
                // Handle successful registration (e.g., navigate to login, show success message)
                
            } else {
                const errorData = await response.json();
                console.error("Failed to register:", errorData);
            }
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return (
        <section className="bg-gray-50 py-10 flex items-center justify-center min-h-screen">
            <main className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                    
                    {/* Map section */}
                    <div className="p-6 rounded-lg shadow-lg h-full flex flex-col justify-center">
                        <div className="mapswrapper w-full h-full flex justify-center">
                            <img
                                width="100%"
                                height="100%"
                                src="/img4.jpg"
                                alt="Map"
                            />
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="p-6 rounded-lg shadow-lg bg-white h-full flex flex-col justify-center">
                        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up Now</h1>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            
                            {/* Username Field */}
                            <div>
                                <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Enter Your Name"
                                    autoComplete="off"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInput}
                                    value={user.username}
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    autoComplete="off"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInput}
                                    value={user.email}
                                />
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Enter Your Phone Number"
                                    autoComplete="off"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInput}
                                    value={user.phone}
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter Your Password"
                                    autoComplete="off"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInput}
                                    value={user.password}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Sign Up Now
                                </button>
                            </div>

                            {/* Link to SignIn */}
                            <p className="text-center">
                                Already have an account?
                                <Link to="/login">
                                    <span className="p-2 text-xl text-blue-500">Sign In</span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Register;
