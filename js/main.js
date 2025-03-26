document.querySelectorAll('.icon-link,.sidebar-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.icon-link,.sidebar-link').forEach(item => {
            item.classList.remove('clicked');
        });
        this.classList.add('clicked');
    });
});
const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const clickedTitle = this.querySelector('.title').textContent || this.querySelector('.title').innerText;
            document.getElementById('header-title').textContent = clickedTitle;
            
        });
    });
    