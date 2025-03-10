function Newsletter() {
    try {
        const [email, setEmail] = React.useState('');
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [error, setError] = React.useState('');
        
        const handleSubmit = async (e) => {
            e.preventDefault();
            
            // Validate email
            if (!email || !/\S+@\S+\.\S+/.test(email)) {
                setError('Please enter a valid email address');
                return;
            }
            
            setError('');
            setIsSubmitting(true);
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show success modal
                window.showModal('newsletterSuccess');
                
                // Reset form
                setEmail('');
            } catch (err) {
                setError('Failed to subscribe. Please try again.');
                window.showToast('Subscription failed. Please try again.', 'error');
            } finally {
                setIsSubmitting(false);
            }
        };
        
        return (
            <section data-name="newsletter" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-wave-primary rounded-2xl p-8 md:p-12 shadow-xl">
                        <div className="md:flex md:items-center md:justify-between">
                            <div className="md:w-1/2 mb-6 md:mb-0">
                                <h2 data-name="newsletter-title" className="text-3xl font-bold text-white mb-3">
                                    Stay in the Loop
                                </h2>
                                <p className="text-white text-opacity-80">
                                    Subscribe to our newsletter to receive the latest updates, tips, and exclusive content.
                                </p>
                            </div>
                            
                            <div className="md:w-1/2">
                                <form data-name="newsletter-form" onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                    <div className="flex-grow">
                                        <label htmlFor="email" className="sr-only">Email address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                                            disabled={isSubmitting}
                                            data-name="newsletter-input"
                                        />
                                        {error && <p className="mt-2 text-white text-opacity-90 text-sm">{error}</p>}
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-white text-wave-primary px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors disabled:opacity-70"
                                        disabled={isSubmitting}
                                        data-name="newsletter-button"
                                    >
                                        {isSubmitting ? (
                                            <i className="fas fa-spinner fa-spin"></i>
                                        ) : (
                                            'Subscribe'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Newsletter component error:', error);
        reportError(error);
    }
}
