function ThemeToggle() {
    try {
        const [isDarkTheme, setIsDarkTheme] = React.useState(false);
        
        React.useEffect(() => {
            // Check for saved theme preference or system preference
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                setIsDarkTheme(true);
                document.documentElement.classList.add('dark-theme');
            }
        }, []);
        
        const toggleTheme = () => {
            if (isDarkTheme) {
                document.documentElement.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            }
            
            setIsDarkTheme(!isDarkTheme);
            
            // Announce theme change for screen readers
            const message = isDarkTheme ? 'Light theme enabled' : 'Dark theme enabled';
            window.showToast(message, 'info', 1500);
        };
        
        return (
            <div data-name="theme-toggle" className="flex items-center">
                <label className="theme-switch">
                    <input 
                        type="checkbox" 
                        checked={isDarkTheme} 
                        onChange={toggleTheme}
                        aria-label="Toggle dark theme"
                    />
                    <span className="slider">
                        <span className="sun">
                            <i className="fas fa-sun"></i>
                        </span>
                        <span className="moon">
                            <i className="fas fa-moon"></i>
                        </span>
                    </span>
                </label>
                <span className="ml-2 text-sm hidden md:inline-block">
                    {isDarkTheme ? 'Dark Mode' : 'Light Mode'}
                </span>
            </div>
        );
    } catch (error) {
        console.error('ThemeToggle component error:', error);
        reportError(error);
    }
}
