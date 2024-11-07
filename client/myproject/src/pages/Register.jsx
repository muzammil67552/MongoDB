import { useState } from "react";

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault(),
        console.log(user)
    }

    return (
        <>
            <section className="bg-gray-50 py-10 flex items-center justify-center min-h-screen">
                <main className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                        
                        {/* Image Section with Hover Effect */}
                        <div className="flex justify-center md:justify-end h-full">
                            <img 
                                src="/register.jpg" 
                                alt="Register" 
                                className="w-full max-w-sm h-full rounded-md shadow-md object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                            />
                        </div>
                        
                        {/* Registration Form Section */}
                        <div className="p-6 rounded-lg shadow-lg bg-white h-full flex flex-col justify-center">
                            <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
                            
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                {/* Username Field */}
                                <div>
                                    <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Enter Name"
                                        id="username"
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
                                        placeholder="Enter Your Email"
                                        id="email"
                                        autoComplete="off"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={handleInput}
                                        value={user.email}
                                    />
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone No</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter Your Contact Num"
                                        id="phone"
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
                                        placeholder="Enter Password"
                                        id="password"
                                        autoComplete="off"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={handleInput}
                                        value={user.password}
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="mt-6">
                                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                        Register
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

export default Register;
