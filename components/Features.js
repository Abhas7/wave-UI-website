function Features() {
    try {
        const features = [
            {
                icon: 'fas fa-wave-square',
                title: 'Modern Design',
                description: 'Beautiful wave-inspired interface with cutting-edge animations and transitions.'
            },
            {
                icon: 'fas fa-mobile-alt',
                title: 'Responsive',
                description: 'Perfect on every device, from mobile phones to large desktop screens.'
            },
            {
                icon: 'fas fa-paint-brush',
                title: 'Creative',
                description: 'Unique animations and effects that bring your content to life.'
            },
            {
                icon: 'fas fa-tachometer-alt',
                title: 'High Performance',
                description: 'Optimized code ensures your website loads quickly and runs smoothly.'
            },
            {
                icon: 'fas fa-universal-access',
                title: 'Accessible',
                description: 'Built with accessibility in mind to reach all users effectively.'
            },
            {
                icon: 'fas fa-code',
                title: 'Clean Code',
                description: 'Well-structured, maintainable code that follows best practices.'
            }
        ];

        const [hoveredIndex, setHoveredIndex] = React.useState(null);

        return (
            <section id="features" data-name="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="features-title" className="text-4xl font-bold mb-4 bg-gradient-to-r from-wave-primary to-wave-secondary bg-clip-text text-transparent">
                            Ride the Wave of Innovation
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the powerful features that make our platform stand out from the competition
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                data-name={`feature-card-${index}`}
                                className={`bg-white rounded-2xl p-8 text-center shadow-lg transition-all duration-300 transform ${
                                    hoveredIndex === index ? 'scale-105 shadow-xl' : 'hover:-translate-y-1'
                                }`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={`inline-block p-4 rounded-full mb-6 transition-all duration-300 ${
                                    hoveredIndex === index ? 'bg-wave-primary text-white' : 'bg-indigo-100 text-wave-primary'
                                }`}>
                                    <i className={`${feature.icon} text-3xl`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                                
                                <button 
                                    className={`mt-6 text-sm font-medium transition-all duration-300 ${
                                        hoveredIndex === index ? 'text-wave-primary' : 'text-gray-500'
                                    }`}
                                    onClick={() => window.showToast(`Learn more about ${feature.title}`, 'info')}
                                >
                                    Learn More <i className="fas fa-arrow-right ml-1"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        reportError(error);
    }
}
