function Testimonials() {
    try {
        const testimonials = [
            {
                name: "Sarah Johnson",
                role: "Design Lead",
                company: "Creative Studios",
                image: "https://randomuser.me/api/portraits/women/32.jpg",
                quote: "The Wave interface has completely transformed our design workflow. The animations are smooth and the customization options are endless."
            },
            {
                name: "Michael Chen",
                role: "Frontend Developer",
                company: "Tech Innovations",
                image: "https://randomuser.me/api/portraits/men/44.jpg",
                quote: "I've worked with many UI frameworks, but Wave stands out for its clean code and intuitive API. It's made our development process so much faster."
            },
            {
                name: "Emma Rodriguez",
                role: "Product Manager",
                company: "Next Solutions",
                image: "https://randomuser.me/api/portraits/women/63.jpg",
                quote: "Our users love the new interface built with Wave. We've seen a significant increase in engagement and positive feedback since the redesign."
            }
        ];
        
        const [activeIndex, setActiveIndex] = React.useState(0);
        
        React.useEffect(() => {
            const interval = setInterval(() => {
                setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
            }, 5000);
            
            return () => clearInterval(interval);
        }, [testimonials.length]);
        
        const handleDotClick = (index) => {
            setActiveIndex(index);
        };
        
        return (
            <section id="testimonials" data-name="testimonials" className="wave-bg py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 data-name="testimonials-title" className="text-4xl font-bold mb-4 text-white">
                            What Our Users Say
                        </h2>
                        <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
                            Hear from the people who use Wave in their projects
                        </p>
                    </div>
                    
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div 
                                className="flex transition-transform duration-500 ease-in-out" 
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div 
                                        key={index}
                                        data-name={`testimonial-${index}`}
                                        className="w-full flex-shrink-0 px-4"
                                    >
                                        <div className="bg-white rounded-xl p-8 shadow-xl">
                                            <div className="flex items-center mb-6">
                                                <img 
                                                    src={testimonial.image} 
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                                />
                                                <div>
                                                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                                    <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Navigation dots */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        activeIndex === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                        
                        {/* Navigation arrows */}
                        <button 
                            onClick={() => setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button 
                            onClick={() => setActiveIndex(prev => (prev + 1) % testimonials.length)}
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div className="wave"></div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials component error:', error);
        reportError(error);
    }
}
