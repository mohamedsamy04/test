// JavaScript to hide loading screen when page is fully loaded
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = 0;
    loadingScreen.style.transition = 'opacity 1s ease-out';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500); // مدة التلاشي تتماشى مع مدة الانتقال
  });
  
window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");
    const dropdownIcons = document.querySelectorAll(".dropdown-icon");

    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open");
        menuBtnChange();
    });

    searchBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open");
        menuBtnChange();
    });

    dropdownIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            const subMenu = this.parentElement.nextElementSibling;
            subMenu.classList.toggle("show");
            this.classList.toggle("bx-chevron-up");
            this.classList.toggle("bx-chevron-down");
        });
    });

    function menuBtnChange(){
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu","bx-menu-alt-right");
        }else{
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
        }
    }
}

