const toggle = document.getElementById('search-toggle');
const form = document.getElementById('search-form');

toggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up
    form.classList.toggle('hidden');

    if (!form.classList.contains('hidden')) {
        form.querySelector('input').focus();
    }
});

// Close form when clicking outside
document.addEventListener('click', (e) => {
    if (!form.classList.contains('hidden')) {
        const isClickInside = form.contains(e.target) || toggle.contains(e.target);
        if (!isClickInside) {
            form.classList.add('hidden');
        }
    }
});


document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
    const desc = btn.nextElementSibling;
    const isVisible = getComputedStyle(desc).display === 'block';
    desc.style.display = isVisible ? 'none' : 'block';
    btn.textContent = isVisible ? '▼ Description' : '▲ Hide Description';
    });
});
});
