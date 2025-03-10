function Hero() {
    try {
        const titleText = "Welcome to the Wave";
        const [titleLetters, setTitleLetters] = React.useState([]);
        
        React.useEffect(() => {
            const letters = titleText.split('').map((letter, index) => (
                <span 
                    key={index} 
                    className="inline-block hover:text-wave-accent transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.05}s` }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </span>
            ));
            setTitleLetters(letters);
        }, []);

        return (
            <section data-name="hero" className="wave-bg pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
                    <div className="absolute top-20 left-1/4 w-20 h-20 bg-white opacity-10 rounded-full blur-xl animate-pulse-slow"></div>
                    <div className="absolute bottom-40 right-1/4 w-32 h-32 bg-white opacity-10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
                    
                    <h2 data-name="hero-title" className="text-5xl sm:text-6xl font-bold mb-6 wave-text-effect">
                        {titleLetters}
                    </h2>
                    <p data-name="hero-description" className="text-xl sm:text-2xl mb-12 opacity-90 max-w-2xl mx-auto animate-fade-in">
                        Experience the future of web development with our modern wave design
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <button 
                            data-name="cta-button"
                            onClick={() => document.querySelector('#features').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-wave-primary px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 pulse-ring"
                        >
                            <i className="fas fa-chevron-down mr-2"></i>
                            Dive In
                        </button>
                        <button 
                            data-name="demo-button"
                            onClick={() => window.showModal('demoModal')}
                            className="bg-transparent text-white border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-wave-primary transition-all duration-300"
                        >
                            <i className="fas fa-play mr-2"></i>
                            Watch Demo
                        </button>
                    </div>
                    
                    <div className="mt-20">
                        <div className="floating inline-block">
                            <i className="fas fa-chevron-down text-2xl animate-bounce-slow"></i>
                        </div>
                    </div>
                </div>
                <div className="wave"></div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}
