import React from 'react';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "fb7bb008-65fd-40d3-8dee-c41618d4f84d");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                event.target.reset();
            } else {
                setResult(data.message || "Error sending message");
            }
        } catch (error) {
            setResult("Network error. Please try again.");
        } finally {
            setTimeout(() => setResult(""), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-[#151312] flex flex-col items-center py-1 px-4 sm:px-6 lg:px-8">
            {/* Success/Error Message */}
            {result && (
                <div className={`mb-8 w-full max-w-md p-4 rounded-lg text-center font-medium ${
                    result.includes("success") 
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                }`}>
                    {result}
                </div>
            )}

            <div className="w-full max-w-4xl space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                        Let's Connect!
                    </h1>
                    <p className="text-lg text-gray-300">
                        Have a project in mind or want to collaborate? Send me a message.
                    </p>
                </div>

                <div className="bg-[#1e1c1d] rounded-xl shadow-lg p-6 sm:p-8 md:p-10 border border-gray-700">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-[#2a2829] text-white border border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-[#2a2829] text-white border border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Write your message here..."
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#2a2829] text-white border border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
                            ></textarea>
                        </div>

                        <input type="hidden" name="subject" value="New message from portfolio" />

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full md:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#1e1c1d]"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;