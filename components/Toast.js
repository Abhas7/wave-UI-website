function Toast() {
    try {
        const [toast, setToast] = React.useState({
            visible: false,
            message: '',
            type: 'info',
            duration: 3000
        });
        
        React.useEffect(() => {
            // Expose toast function to window for global access
            window.showToast = (message, type = 'info', duration = 3000) => {
                setToast({
                    visible: true,
                    message,
                    type,
                    duration
                });
                
                // Auto-hide toast after duration
                setTimeout(() => {
                    setToast(prev => ({ ...prev, visible: false }));
                }, duration);
            };
            
            // Cleanup
            return () => {
                window.showToast = null;
            };
        }, []);
        
        // Toast type styles with enhanced gradients
        const toastStyles = {
            info: 'bg-gradient-to-r from-blue-500 to-blue-600 border-l-4 border-blue-700',
            success: 'bg-gradient-to-r from-green-500 to-green-600 border-l-4 border-green-700',
            warning: 'bg-gradient-to-r from-yellow-500 to-yellow-600 border-l-4 border-yellow-700',
            error: 'bg-gradient-to-r from-red-500 to-red-600 border-l-4 border-red-700'
        };
        
        // Toast icons
        const toastIcons = {
            info: 'fa-info-circle',
            success: 'fa-check-circle',
            warning: 'fa-exclamation-triangle',
            error: 'fa-exclamation-circle'
        };
        
        if (!toast.visible) return null;
        
        return (
            <div 
                data-name="toast"
                className={`toast fixed bottom-4 right-4 py-3 px-5 rounded-lg text-white flex items-center shadow-lg ${
                    toastStyles[toast.type]
                } ${toast.visible ? 'show' : ''}`}
            >
                <div className="mr-3 text-xl">
                    <i className={`fas ${toastIcons[toast.type]}`}></i>
                </div>
                <div className="flex-1">
                    <p data-name="toast-message" className="font-medium">{toast.message}</p>
                </div>
                <button 
                    className="ml-4 text-white text-opacity-70 hover:text-opacity-100 transition-opacity"
                    onClick={() => setToast(prev => ({ ...prev, visible: false }))}
                >
                    <i className="fas fa-times"></i>
                </button>
            </div>
        );
    } catch (error) {
        console.error('Toast component error:', error);
        reportError(error);
    }
}
