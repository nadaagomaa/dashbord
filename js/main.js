document.querySelectorAll('.icon-link,.nav-link,.icon-btn').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.icon-link,.nav-link,.icon-btn').forEach(item => {
            item.classList.remove('clicked');
        });
        this.classList.add('clicked');
    });
});
const sidebarLinks = document.querySelectorAll('.nav-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const clickedTitle = this.querySelector('.link-text').textContent || this.querySelector('.title').innerText;
            document.getElementById('header-title').textContent = clickedTitle;
            
        });
    });
    