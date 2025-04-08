
   //set the first sidebar item as active by default
function setDefaultActiveSidebar() {
    const firstSidebarLink = document.querySelector('.nav-link');
    if (firstSidebarLink) {
        firstSidebarLink.classList.add('clicked');
        const defaultTitle = firstSidebarLink.querySelector('.link-text').textContent;
        document.getElementById('topbar-title').textContent = defaultTitle;
    }
}

const sidebarLinks = document.querySelectorAll('.nav-link');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove "clicked" class from all sidebar links
        sidebarLinks.forEach(item => item.classList.remove('clicked'));

        // Add "clicked" class to the clicked link
        this.classList.add('clicked');

        // Update the topbar title with the clicked link's text
        const clickedTitle = this.querySelector('.link-text').textContent;
        document.getElementById('topbar-title').textContent = clickedTitle;
    });
});

const topbarButtons = document.querySelectorAll('.icon-btn, .icon-link');
topbarButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove "clicked" class from all topbar buttons/icons
        topbarButtons.forEach(item => item.classList.remove('clicked'));

        // Add "clicked" class to the clicked button/icon
        this.classList.add('clicked');
    });
});

document.querySelectorAll('.icon-btn, .icon-link').forEach(button => {
    button.addEventListener('click', function () {
    });
});

// default active state 
setDefaultActiveSidebar();

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggler = document.querySelector('.sidebar-toggler');
    const logoImg = document.querySelector('.logo img');
    const navLinks = document.querySelectorAll('.nav-link');
    const mainContent = document.querySelector('.main-content');

    let isSidebarCollapsed = false;
    const collapsedWidth = 83; 
    const expandedWidth = 242;

    // toggle the sidebar
    function toggleSidebar() {
        isSidebarCollapsed = !isSidebarCollapsed;

        //sidebar width transition
        sidebar.style.transition = 'width 0.3s ease';
        sidebar.style.width = isSidebarCollapsed ? `${collapsedWidth}px` : `${expandedWidth}px`;

        //main-content margin transition
        mainContent.style.transition = 'margin-inline-start 0.3s ease';
        mainContent.style.marginInlineStart = isSidebarCollapsed ? `${collapsedWidth}px` : `${expandedWidth}px`;

       // Toggle visibility of link text with smooth transition
       navLinks.forEach(link => {
        const linkText = link.querySelector('.link-text');
        if (linkText) {
            linkText.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
            if (isSidebarCollapsed) {
                linkText.style.opacity = 0;
                linkText.style.visibility = 'hidden';
            } else {
                linkText.style.visibility = 'visible';
                linkText.style.opacity = 1;
            }
        }
    });
        
        if (isSidebarCollapsed) {
            logoImg.src = 'assets/imgs/io.png';       
        } else {
            logoImg.src = 'assets/imgs/ioTASK.png';        
        }
    }
    sidebarToggler.addEventListener('click', function(e) {
        e.preventDefault();
        toggleSidebar();
    });
});





