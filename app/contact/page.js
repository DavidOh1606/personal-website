'use client';

import Home from "../../components/Home.jsx";
import { useState } from 'react';

export default function ContactsPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Helper to update state when user types
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default page reload

        // Create the Subject and Body templates
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Hi,\n\n` +
            `You have a new message from your portfolio contact form.\n\n` +
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
    );

        // Open the user's email client with the data pre-filled
        window.location.href = `mailto:david.oh1606@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="contacts-container">
            <section className="page-section">
                <div className="page-header">
                    <Home></Home>
                    <h2>Contact Me</h2>
                </div>

                <p className="contact-intro">Feel free to contact me about whatever!</p>

                <div className="contact-content">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="your.email@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                placeholder="Hello! I'd like to talk about..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
            
        </div>
    )




}