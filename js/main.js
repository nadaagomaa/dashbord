document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggler = document.querySelector('.sidebar-toggler');
    const navLinks = document.querySelectorAll('.nav-link');
    const mainContent = document.querySelector('.main-content');
    

    let isSidebarCollapsed = false;
    function collapseSidebarOnResize() {
        if (window.innerWidth < 992) {
            if (!sidebar.classList.contains('closed-sidenav')) {
                toggleSidebar();
            }
        } else {
            if (sidebar.classList.contains('closed-sidenav')) {
                toggleSidebar();
            }
        }
    }

    collapseSidebarOnResize();

    window.addEventListener('resize', collapseSidebarOnResize);

    // Sidebar toggle
    function toggleSidebar() {
        isSidebarCollapsed = !isSidebarCollapsed;

        // Switch between collapsed/expanded sidebar
        sidebar.classList.toggle('closed-sidenav', isSidebarCollapsed);
        sidebar.classList.toggle('opened-sidenav', !isSidebarCollapsed);

        mainContent.classList.toggle('collapsed-content', isSidebarCollapsed);
        mainContent.classList.toggle('expanded-content', !isSidebarCollapsed);
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
      
    if (window.innerWidth < 992) {
        if (!sidebar.classList.contains('closed-sidenav')) {
             toggleSidebar();
        }
    }else{
        sidebar.classList.add("opened-sidenav");

    }
});






