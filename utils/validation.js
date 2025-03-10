function validateForm(data) {
    const errors = {};

    if (!data.name || !data.name.trim()) {
        errors.name = 'Name is required';
    }

    if (!data.email || !data.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    if (data.subject !== undefined && !data.subject.trim()) {
        errors.subject = 'Subject is required';
    }

    if (!data.message || !data.message.trim()) {
        errors.message = 'Message is required';
    } else if (data.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters long';
    }

    return errors;
}
