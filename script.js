document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const toggleButton = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙';
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        toggleButton.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Editable description
    const description = document.querySelector('.Introduction_text p');
    const editBtn = document.getElementById('edit-desc-btn');

    if (description && editBtn) {
        editBtn.addEventListener('click', () => {
            if (description.contentEditable === 'true') {
                description.contentEditable = 'false';
                editBtn.textContent = 'Edit';
                description.classList.remove('editing');
                localStorage.setItem('description', description.innerHTML);
            } else {
                description.contentEditable = 'true';
                editBtn.textContent = 'Save';
                description.classList.add('editing');
                description.focus();
            }
        });

        const savedDesc = localStorage.getItem('description');
        if (savedDesc) {
            description.innerHTML = savedDesc;
        }
    }
});