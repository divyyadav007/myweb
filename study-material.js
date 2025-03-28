document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filters = document.querySelectorAll('.filters select');
    const materialCards = document.querySelectorAll('.material-card');

    filters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });

    function applyFilters() {
        const semester = document.getElementById('semesterFilter').value;
        const subject = document.getElementById('subjectFilter').value;
        const type = document.getElementById('typeFilter').value;

        materialCards.forEach(card => {
            const tags = card.querySelectorAll('.tag');
            const tagsText = Array.from(tags).map(tag => tag.textContent.toLowerCase());
            
            const matchesSemester = !semester || tagsText.some(t => t.includes(`semester ${semester}`));
            const matchesSubject = !subject || tagsText.some(t => t.includes(subject.toLowerCase()));
            const matchesType = !type || card.textContent.toLowerCase().includes(type.toLowerCase());

            card.style.display = (matchesSemester && matchesSubject && matchesType) ? 'flex' : 'none';
        });
    }

    // Preview functionality
    const previewButtons = document.querySelectorAll('.btn-preview');
    previewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Add preview functionality here
            alert('Preview functionality will be implemented here');
        });
    });

    // Download functionality
    const downloadButtons = document.querySelectorAll('.btn-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Add download functionality here
            alert('Download functionality will be implemented here');
        });
    });

    // Active navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Loading animation
    const loaderWrapper = document.querySelector('.loader-wrapper');
    window.addEventListener('load', () => {
        loaderWrapper.classList.add('fade-out');
        setTimeout(() => {
            loaderWrapper.style.display = 'none';
        }, 500);
    });

    // Scroll to top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
