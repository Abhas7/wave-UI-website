function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const [scrolled, setScrolled] = React.useState(false);
        const [activeLink, setActiveLink] = React.useState(null);
        
        React.useEffect(() => {
            const handleScroll = () => {
                setScrolled(window.scrollY > 50);
                
                // Update active section based on scroll position
                const sections = ['features', 'timeline', 'testimonials', 'posts', 'contact'];
                let currentSection = null;
                
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 100 && rect.bottom >= 100) {
                            currentSection = section;
                            break;
                        }
                    }
                }
                
                setActiveLink(currentSection);
            };
            
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
        
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };
        
        const scrollToSection = (sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
            }
        };

        return (
            <header 
                data-name="header" 
                className={`fixed w-full top-0 z-50 transition-all duration-500 ${
                    scrolled 
                        ? 'py-2 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-lg' 
                        : 'py-5 bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div 
                                data-name="logo" 
                                className="flex items-center mr-8"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg mr-3">
                                    <i className="fas fa-wave-square text-white text-xl"></i>
                                </div>
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    WaveUI
                                </span>
                            </div>
                            
                            {/* Desktop Navigation */}
                            <nav data-name="desktop-nav" className="hidden md:flex space-x-1">
                                {[
                                    { id: 'features', label: 'Features', icon: 'fa-star' },
                                    { id: 'timeline', label: 'Timeline', icon: 'fa-clock' },
                                    { id: 'testimonials', label: 'Testimonials', icon: 'fa-quote-right' },
                                    { id: 'posts', label: 'Updates', icon: 'fa-newspaper' },
                                    { id: 'contact', label: 'Contact', icon: 'fa-envelope' }
                                ].map(item => (
                                    <button 
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all relative group ${
                                            activeLink === item.id 
                                                ? 'text-blue-600 dark:text-blue-400' 
                                                : scrolled 
                                                    ? 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400' 
                                                    : 'text-white hover:text-blue-200'
                                        }`}
                                    >
                                        <span className="flex items-center">
                                            <i className={`fas ${item.icon} mr-2 text-xs opacity-70`}></i>
                                            {item.label}
                                        </span>
                                        
                                        {/* Animated underline */}
                                        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-left transition-transform duration-300 ${
                                            activeLink === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`}></span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:block">
                                <ThemeToggle />
                            </div>
                            
                            <div className="hidden md:block">
                                <button 
                                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center"
                                    onClick={() => window.showToast('Download feature coming soon!', 'info')}
                                >
                                    <i className="fas fa-download mr-2"></i>
                                    Download
                                </button>
                            </div>
                            
                            {/* Mobile menu button */}
                            <button 
                                data-name="mobile-menu-button"
                                className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                onClick={toggleMenu}
                                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            >
                                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                            </button>
                        </div>
                    </div>
                    
                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav 
                            data-name="mobile-nav" 
                            className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 animate-fade-in"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
                                <h3 className="font-medium text-gray-800 dark:text-gray-200">Navigation</h3>
                                <div className="sm:hidden">
                                    <ThemeToggle />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { id: 'features', label: 'Features', icon: 'fa-star' },
                                    { id: 'timeline', label: 'Timeline', icon: 'fa-clock' },
                                    { id: 'testimonials', label: 'Testimonials', icon: 'fa-quote-right' },
                                    { id: 'posts', label: 'Updates', icon: 'fa-newspaper' },
                                    { id: 'contact', label: 'Contact', icon: 'fa-envelope' }
                                ].map(item => (
                                    <button 
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`flex items-center p-3 rounded-lg transition-all ${
                                            activeLink === item.id 
                                                ? 'bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-blue-400' 
                                                : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                                        }`}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                            activeLink === item.id
                                                ? 'bg-blue-100 dark:bg-gray-600'
                                                : 'bg-gray-100 dark:bg-gray-700'
                                        }`}>
                                            <i className={`fas ${item.icon} ${
                                                activeLink === item.id
                                                    ? 'text-blue-600 dark:text-blue-400'
                                                    : 'text-gray-500 dark:text-gray-400'
                                            }`}></i>
                                        </div>
                                        <span>{item.label}</span>
                                    </button>
                                ))}
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <button 
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                                    onClick={() => window.showToast('Download feature coming soon!', 'info')}
                                >
                                    <i className="fas fa-download mr-2"></i>
                                    Download WaveUI
                                </button>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
