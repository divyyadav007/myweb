document.addEventListener('DOMContentLoaded', function() {
    // Get filter elements
    const yearFilter = document.getElementById('yearFilter');
    const semesterFilter = document.getElementById('semesterFilter');
    const subjectFilter = document.getElementById('subjectFilter');
    const papersContainer = document.querySelector('.papers-container');

    // Add event listeners to filters
    [yearFilter, semesterFilter, subjectFilter].forEach(filter => {
        filter.addEventListener('change', filterPapers);
    });

    function filterPapers() {
        const year = yearFilter.value;
        const semester = semesterFilter.value;
        const subject = subjectFilter.value;

        // Get all paper cards
        const papers = document.querySelectorAll('.paper-card');

        papers.forEach(paper => {
            const paperInfo = paper.querySelector('.paper-info p').textContent;
            const paperTags = paper.querySelector('.tags').textContent;

            let showPaper = true;

            // Apply filters
            if (year && !paperInfo.includes(year)) showPaper = false;
            if (semester && !paperInfo.includes(`Semester: ${semester}`)) showPaper = false;
            if (subject && !paperTags.toLowerCase().includes(subject)) showPaper = false;

            // Show/hide paper based on filters
            paper.style.display = showPaper ? 'flex' : 'none';
        });
    }

    // Add click handlers for download buttons
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Download starting... (Demo)');
        });
    });

    // Add click handlers for preview buttons
    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Opening preview... (Demo)');
        });
    });
     // Scroll to top button functionality
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

      // Hide loading animation after everything is loaded
      document.querySelector('.loader-wrapper').classList.add('fade-out');
});
