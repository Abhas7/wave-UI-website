function App() {
    try {
        React.useEffect(() => {
            // Initialize animations
            if (window.waveAnimations) {
                window.waveAnimations.initScrollAnimations();
            }
            
            // Check for saved theme preference
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark-theme');
            }
        }, []);
        
        return (
            <div data-name="app" className="min-h-screen bg-gray-50">
                <Header />
                <main>
                    <Hero />
                    <Features />
                    <Timeline />
                    <Testimonials />
                    <PostList />
                    <Newsletter />
                    <ContactForm />
                </main>
                <Toast />
                <Modal />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
