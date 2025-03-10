function WaveSection({ children, className = "" }) {
    try {
        return (
            <section data-name="wave-section" className={`wave-bg relative overflow-hidden ${className}`}>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
                <div className="wave"></div>
            </section>
        );
    } catch (error) {
        console.error('WaveSection component error:', error);
        reportError(error);
    }
}
