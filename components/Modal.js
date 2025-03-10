function Modal() {
    try {
        const [modalState, setModalState] = React.useState({
            visible: false,
            id: null,
            content: null,
            title: '',
            onClose: null
        });
        
        React.useEffect(() => {
            // Expose modal functions to window for global access
            window.showModal = (id, props = {}) => {
                let modalContent;
                let modalTitle = '';
                
                // Define different modal contents based on id
                switch (id) {
                    case 'demoModal':
                        modalContent = (
                            <div className="p-4">
                                <div className="aspect-w-16 aspect-h-9 mb-4">
                                    <iframe 
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                                        title="Demo Video"
                                        className="w-full h-64 rounded-lg"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <p className="text-gray-600">
                                    Experience the power of Wave with our interactive demo. See how our platform can transform your web development process.
                                </p>
                            </div>
                        );
                        modalTitle = 'Wave Demo';
                        break;
                        
                    case 'newsletterSuccess':
                        modalContent = (
                            <div className="p-4 text-center">
                                <div className="text-green-500 text-6xl mb-4">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Subscription Confirmed!</h3>
                                <p className="text-gray-600">
                                    Thank you for subscribing to our newsletter. You'll receive the latest updates directly to your inbox.
                                </p>
                            </div>
                        );
                        modalTitle = 'Success';
                        break;
                        
                    default:
                        modalContent = props.content || <div>Modal content</div>;
                        modalTitle = props.title || 'Modal';
                }
                
                setModalState({
                    visible: true,
                    id,
                    content: modalContent,
                    title: modalTitle,
                    onClose: props.onClose || null
                });
            };
            
            window.hideModal = () => {
                setModalState(prev => ({ ...prev, visible: false }));
                
                // Execute onClose callback if provided
                if (modalState.onClose && typeof modalState.onClose === 'function') {
                    modalState.onClose();
                }
            };
            
            // Cleanup
            return () => {
                window.showModal = null;
                window.hideModal = null;
            };
        }, [modalState.onClose]);
        
        // Close on escape key
        React.useEffect(() => {
            const handleEscape = (e) => {
                if (e.key === 'Escape' && modalState.visible) {
                    window.hideModal();
                }
            };
            
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }, [modalState.visible]);
        
        if (!modalState.visible) return null;
        
        return (
            <div data-name="modal-overlay" className="modal-overlay" onClick={window.hideModal}>
                <div 
                    data-name="modal-content"
                    className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-auto animate-fade-in shadow-2xl"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center border-b p-4">
                        <h3 data-name="modal-title" className="text-xl font-semibold">{modalState.title}</h3>
                        <button 
                            data-name="modal-close"
                            onClick={window.hideModal}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div data-name="modal-body">
                        {modalState.content}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Modal component error:', error);
        reportError(error);
    }
}
