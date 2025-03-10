function ContactForm() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        const [errors, setErrors] = React.useState({});
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [formFocus, setFormFocus] = React.useState(null);

        const handleSubmit = async (e) => {
            e.preventDefault();
            const validationErrors = validateForm(formData);
            
            if (Object.keys(validationErrors).length === 0) {
                setIsSubmitting(true);
                
                try {
                    // Simulate API call
                    await new Promise(resolve => setTimeout(resolve, 1500));
                    window.showToast('Message sent successfully!', 'success');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setErrors({});
                } catch (err) {
                    window.showToast('Failed to send message. Please try again.', 'error');
                } finally {
                    setIsSubmitting(false);
                }
            } else {
                setErrors(validationErrors);
            }
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
            if (errors[name]) {
                setErrors(prev => ({
                    ...prev,
                    [name]: ''
                }));
            }
        };

        const handleFocus = (field) => {
            setFormFocus(field);
        };

        const handleBlur = () => {
            setFormFocus(null);
        };

        return (
            <section id="contact" data-name="contact" className="wave-bg py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 data-name="contact-title" className="text-4xl font-bold text-white mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-xl text-white text-opacity-80 max-w-2xl mx-auto">
                            Have questions or want to learn more? Send us a message and we'll get back to you soon.
                        </p>
                    </div>
                    
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-2/5 bg-wave-primary p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                                    <p className="mb-6 text-white text-opacity-80">
                                        Fill out the form and our team will get back to you within 24 hours.
                                    </p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="mr-3 text-white text-opacity-80">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <span>MP Nagar Zone1 Bhopal,Madhya Pradesh</span>
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <div className="mr-3 text-white text-opacity-80">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <span>+91 7890324562</span>
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <div className="mr-3 text-white text-opacity-80">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <span>contact@waveUI.com</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-12">
                                        <div className="flex space-x-4">
                                            <a href="#" className="text-white hover:text-white hover:opacity-80 transition-opacity">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#" className="text-white hover:text-white hover:opacity-80 transition-opacity">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                            <a href="#" className="text-white hover:text-white hover:opacity-80 transition-opacity">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                            <a href="#" className="text-white hover:text-white hover:opacity-80 transition-opacity">
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="md:w-3/5 p-8">
                                    <form data-name="contact-form" onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label 
                                                htmlFor="name" 
                                                className={`block text-sm font-medium transition-colors duration-300 ${
                                                    formFocus === 'name' ? 'text-wave-primary' : 'text-gray-700'
                                                }`}
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('name')}
                                                onBlur={handleBlur}
                                                className={`mt-1 w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                                                    errors.name ? 'border-red-500' : 
                                                    formFocus === 'name' ? 'border-wave-primary' : 'border-gray-300'
                                                } focus:outline-none focus:ring-2 focus:ring-wave-primary focus:border-wave-primary`}
                                                data-name="name-input"
                                            />
                                            {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                                        </div>
                                        
                                        <div>
                                            <label 
                                                htmlFor="email" 
                                                className={`block text-sm font-medium transition-colors duration-300 ${
                                                    formFocus === 'email' ? 'text-wave-primary' : 'text-gray-700'
                                                }`}
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('email')}
                                                onBlur={handleBlur}
                                                className={`mt-1 w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                                                    errors.email ? 'border-red-500' : 
                                                    formFocus === 'email' ? 'border-wave-primary' : 'border-gray-300'
                                                } focus:outline-none focus:ring-2 focus:ring-wave-primary focus:border-wave-primary`}
                                                data-name="email-input"
                                            />
                                            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                                        </div>
                                        
                                        <div>
                                            <label 
                                                htmlFor="subject" 
                                                className={`block text-sm font-medium transition-colors duration-300 ${
                                                    formFocus === 'subject' ? 'text-wave-primary' : 'text-gray-700'
                                                }`}
                                            >
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('subject')}
                                                onBlur={handleBlur}
                                                className={`mt-1 w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                                                    errors.subject ? 'border-red-500' : 
                                                    formFocus === 'subject' ? 'border-wave-primary' : 'border-gray-300'
                                                } focus:outline-none focus:ring-2 focus:ring-wave-primary focus:border-wave-primary`}
                                                data-name="subject-input"
                                            />
                                            {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject}</p>}
                                        </div>
                                        
                                        <div>
                                            <label 
                                                htmlFor="message" 
                                                className={`block text-sm font-medium transition-colors duration-300 ${
                                                    formFocus === 'message' ? 'text-wave-primary' : 'text-gray-700'
                                                }`}
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('message')}
                                                onBlur={handleBlur}
                                                rows="4"
                                                className={`mt-1 w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                                                    errors.message ? 'border-red-500' : 
                                                    formFocus === 'message' ? 'border-wave-primary' : 'border-gray-300'
                                                } focus:outline-none focus:ring-2 focus:ring-wave-primary focus:border-wave-primary`}
                                                data-name="message-input"
                                            ></textarea>
                                            {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                                        </div>
                                        
                                        <button
                                            type="submit"
                                            className="w-full bg-wave-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-wave-secondary transition-colors transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:transform-none disabled:hover:shadow-none"
                                            disabled={isSubmitting}
                                            data-name="submit-button"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                                    Sending...
                                                </span>
                                            ) : (
                                                'Send Message'
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave"></div>
            </section>
        );
    } catch (error) {
        console.error('ContactForm component error:', error);
        reportError(error);
    }
}
