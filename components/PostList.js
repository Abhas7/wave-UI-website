function PostList() {
    try {
        const [posts, setPosts] = React.useState([]);
        const [loading, setLoading] = React.useState(true);
        const [error, setError] = React.useState(null);
        const [hoveredPost, setHoveredPost] = React.useState(null);

        React.useEffect(() => {
            // Simulate fetching posts
            setTimeout(() => {
                setPosts(aiUpdates);
                setLoading(false);
            }, 1000);
        }, []);

        // AI app updates content with enhanced descriptions and icons
        const aiUpdates = [
            {
                id: 1,
                title: "New GPT-4 Integration",
                body: "We've integrated the latest GPT-4 model into our platform. This brings significant improvements to response quality and understanding of complex queries.",
                date: "24 May 2023",
                category: "Feature Update",
                icon: "fa-robot",
                color: "from-blue-400 to-indigo-600"
            },
            {
                id: 2,
                title: "Voice Recognition Enhancement",
                body: "Our voice recognition system now supports 17 additional languages and has improved accuracy by 35% for noisy environments.",
                date: "18 May 2023",
                category: "Enhancement",
                icon: "fa-microphone",
                color: "from-green-400 to-emerald-600"
            },
            {
                id: 3,
                title: "New Code Completion Tool",
                body: "Developers will love our new code completion tool that supports TypeScript, Python, and Rust with context-aware suggestions and documentation integration.",
                date: "12 May 2023",
                category: "New Tool",
                icon: "fa-code",
                color: "from-purple-400 to-violet-600"
            },
            {
                id: 4,
                title: "Image Generation API",
                body: "Introducing our new API for AI image generation. Create stunning visuals from text descriptions with fine-tuned control over style and content.",
                date: "5 May 2023",
                category: "API Release",
                icon: "fa-image",
                color: "from-yellow-400 to-amber-600"
            },
            {
                id: 5,
                title: "Performance Optimisation",
                body: "We've optimised our backend systems for faster response times. Users should now experience a 40% reduction in latency for most queries.",
                date: "29 April 2023",
                category: "Performance",
                icon: "fa-bolt",
                color: "from-pink-400 to-rose-600"
            },
            {
                id: 6,
                title: "Mobile App Beta Launch",
                body: "Our mobile application is now available for beta testing on iOS and Android. Join our beta programme to experience AI assistance on the go.",
                date: "22 April 2023",
                category: "Product Launch",
                icon: "fa-mobile-alt",
                color: "from-indigo-400 to-blue-600"
            }
        ];

        // Category badge colors with enhanced styling
        const categoryColors = {
            "Feature Update": "bg-gradient-to-r from-blue-500 to-indigo-600 text-white",
            "Enhancement": "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
            "New Tool": "bg-gradient-to-r from-purple-500 to-violet-600 text-white",
            "API Release": "bg-gradient-to-r from-yellow-500 to-amber-600 text-white",
            "Performance": "bg-gradient-to-r from-pink-500 to-rose-600 text-white",
            "Product Launch": "bg-gradient-to-r from-indigo-500 to-blue-600 text-white"
        };

        if (loading) {
            return (
                <div data-name="loading" className="text-center py-20">
                    <div className="inline-block animate-spin text-primary mb-4">
                        <i className="fas fa-circle-notch text-5xl"></i>
                    </div>
                    <p className="mt-4 text-xl text-gray-600 font-light">
                        Loading AI updates<span className="animate-pulse">...</span>
                    </p>
                    <div className="mt-6 max-w-md mx-auto h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-pulse" style={{width: '70%'}}></div>
                    </div>
                </div>
            );
        }

        if (error) {
            return (
                <div data-name="error" className="text-center py-20">
                    <div className="inline-block text-red-500 mb-4">
                        <i className="fas fa-exclamation-circle text-5xl"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-red-500 mb-2">{error}</h3>
                    <p className="text-gray-600 mb-6">We couldn't load the latest updates. Please try again.</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="theme-button-primary"
                    >
                        <i className="fas fa-sync-alt mr-2"></i>
                        Retry
                    </button>
                </div>
            );
        }

        return (
            <section id="posts" data-name="posts" className="py-24 bg-gray-50 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent opacity-70"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-md text-sm font-medium mb-4 shadow-sm">
                            <i className="fas fa-sparkles mr-2"></i>
                            Latest Updates
                        </span>
                        <h2 data-name="posts-title" className="text-4xl font-bold mb-6 text-gray-900">
                            AI Innovation Hub
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Stay informed about our newest AI features, improvements, and releases
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map(post => (
                            <article 
                                key={post.id}
                                data-name={`post-${post.id}`}
                                className={`modern-card p-0 transition-all duration-300 transform ${
                                    hoveredPost === post.id ? 'scale-105' : ''
                                }`}
                                onMouseEnter={() => setHoveredPost(post.id)}
                                onMouseLeave={() => setHoveredPost(null)}
                            >
                                {/* Card header with icon and category */}
                                <div className="p-6 pb-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-r ${post.color} text-white shadow-md`}>
                                            <i className={`fas ${post.icon} text-xl`}></i>
                                        </div>
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category]} shadow-sm`}>
                                            {post.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
                                </div>
                                
                                {/* Card footer */}
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-sm text-gray-500 flex items-center">
                                        <i className="far fa-calendar-alt mr-2"></i>
                                        {post.date}
                                    </span>
                                    <button 
                                        className={`text-blue-600 hover:text-blue-800 transition-colors flex items-center font-medium ${
                                            hoveredPost === post.id ? 'text-blue-800' : ''
                                        }`}
                                        onClick={() => window.showToast(`More details about ${post.title} coming soon!`, 'info')}
                                    >
                                        Learn more 
                                        <i className={`fas fa-arrow-right ml-2 transition-transform ${
                                            hoveredPost === post.id ? 'transform translate-x-1' : ''
                                        }`}></i>
                                    </button>
                                </div>
                                
                                {/* Interactive elements - only visible on hover */}
                                <div className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-800 to-transparent opacity-0 transition-opacity duration-300 flex justify-center space-x-4 ${
                                    hoveredPost === post.id ? 'opacity-100' : ''
                                }`}>
                                    <button 
                                        className="text-white hover:text-blue-300 transition-colors"
                                        onClick={() => window.showToast('Added to bookmarks!', 'success')}
                                    >
                                        <i className="far fa-bookmark"></i>
                                    </button>
                                    <button 
                                        className="text-white hover:text-blue-300 transition-colors"
                                        onClick={() => window.showToast('Copied to clipboard!', 'success')}
                                    >
                                        <i className="far fa-copy"></i>
                                    </button>
                                    <button 
                                        className="text-white hover:text-blue-300 transition-colors"
                                        onClick={() => window.showToast('Share options coming soon!', 'info')}
                                    >
                                        <i className="far fa-share-square"></i>
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                    
                    {/* View all button */}
                    <div className="text-center mt-12">
                        <button 
                            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                            onClick={() => window.showToast('More updates coming soon!', 'info')}
                        >
                            View all updates
                            <i className="fas fa-chevron-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('PostList component error:', error);
        reportError(error);
    }
}
