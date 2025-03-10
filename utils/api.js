async function fetchJsonPlaceholderPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

// Mock translation function - in a real app, this would call an actual translation API
async function translateToBritishEnglish(text) {
    // This is a mock function that simulates translation to UK English
    // In a real app, you would use a service like Google Translate API
    
    // For demo purposes, we'll convert some US English spellings to UK English
    const ukEnglishText = text
        .replace(/color/g, 'colour')
        .replace(/center/g, 'centre')
        .replace(/optimize/g, 'optimise')
        .replace(/optimization/g, 'optimisation')
        .replace(/analyze/g, 'analyse')
        .replace(/behavior/g, 'behaviour')
        .replace(/program/g, 'programme')
        .replace(/license/g, 'licence')
        .replace(/practice/g, 'practise')
        .replace(/catalog/g, 'catalogue')
        .replace(/dialog/g, 'dialogue')
        .replace(/defense/g, 'defence')
        .replace(/gray/g, 'grey');
    
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ukEnglishText);
        }, 100);
    });
}
