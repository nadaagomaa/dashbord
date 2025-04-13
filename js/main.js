
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggler = document.querySelector('.sidebar-toggler');
    const logoImg = document.querySelector('.logo img');
    const navLinks = document.querySelectorAll('.nav-link');
    const mainContent = document.querySelector('.main-content');

    let isSidebarCollapsed = false;

    // Sidebar toggle
    function toggleSidebar() {
        isSidebarCollapsed = !isSidebarCollapsed;

        // Switch between  collapsed/expanded 
        sidebar.classList.toggle('closed-sidenav', isSidebarCollapsed);
        sidebar.classList.toggle('opened-sidenav', !isSidebarCollapsed);

        mainContent.classList.toggle('collapsed-content', isSidebarCollapsed);
        mainContent.classList.toggle('expanded-content', !isSidebarCollapsed);

        // Toggle visibility of link text
        navLinks.forEach(link => {
            const linkText = link.querySelector('.link-text');
            if (linkText) {
                linkText.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
                linkText.style.opacity = isSidebarCollapsed ? 0 : 1;
                linkText.style.visibility = isSidebarCollapsed ? 'hidden' : 'visible';
            }
        });

        // change logo image based on sidebar state
        logoImg.src = isSidebarCollapsed ? 'assets/imgs/io.png' : 'assets/imgs/ioTASK.png';
    }

    sidebarToggler.addEventListener('click', function (e) {
        e.preventDefault();
        toggleSidebar();
    });

    // Sidebar links active state
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove "active" class from all links and add it to the clicked one
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            // Update the topbar title with the clicked link's text
            const clickedTitle = this.querySelector('.link-text').textContent;
            document.getElementById('topbar-title').textContent = clickedTitle;
        });
    });
});







