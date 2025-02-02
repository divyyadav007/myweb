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
});
