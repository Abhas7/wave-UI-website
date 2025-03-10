function Timeline() {
    try {
        const timelineEvents = [
            {
                year: '2022',
                title: 'Project Launch',
                description: 'We started our journey with a vision to revolutionize web design.'
            },
            {
                year: '2023',
                title: 'First Major Release',
                description: 'Launched our first stable version with core features and functionality.'
            },
            {
                year: '2024',
                title: 'Community Growth',
                description: 'Expanded our community to over 10,000 developers worldwide.'
            },
            {
                year: '2025',
                title: 'Enterprise Solutions',
                description: 'Introduced enterprise-grade features for large-scale applications.'
            }
        ];
        
        const [visibleItems, setVisibleItems] = React.useState([]);
        
        React.useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleItems(prev => [...prev, entry.target.dataset.index]);
                    }
                });
            }, { threshold: 0.3 });
            
            document.querySelectorAll('.timeline-item').forEach(item => {
                observer.observe(item);
            });
            
            return () => observer.disconnect();
        }, []);
        
        return (
            <section id="timeline" data-name="timeline" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="timeline-title" className="text-4xl font-bold mb-4 bg-gradient-to-r from-wave-primary to-wave-secondary bg-clip-text text-transparent">
                            Our Journey
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Follow our path of innovation and growth through the years
                        </p>
                    </div>
                    
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100"></div>
                        
                        {timelineEvents.map((event, index) => (
                            <div 
                                key={index}
                                data-name={`timeline-item-${index}`}
                                data-index={index}
                                className={`timeline-item relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} ${
                                    visibleItems.includes(index.toString()) ? 'animate-fade-in' : 'opacity-0'
                                }`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md relative">
                                        {/* Year bubble */}
                                        <div className="absolute top-6 bg-wave-primary text-white py-1 px-3 rounded-full text-sm font-bold z-10
                                            transform -translate-y-1/2
                                            md:top-1/2
                                            md:w-12 md:h-12 md:flex md:items-center md:justify-center md:rounded-full md:p-0
                                            md:-translate-y-1/2
                                            md:-translate-x-1/2
                                            md:left-1/2
                                            ">
                                            {event.year}
                                        </div>
                                        
                                        <h3 className="text-xl font-semibold mb-2 mt-4 md:mt-0">{event.title}</h3>
                                        <p className="text-gray-600">{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Timeline component error:', error);
        reportError(error);
    }
}
