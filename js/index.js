// window.addEventListener('scroll', function () {
//   const nav = document.querySelector('.navbar');
//   if (window.scrollY > 0) {
//     nav.classList.add('scrolled');
//   } else {
//     nav.classList.remove('scrolled');
//   }
// });

    // Scroll to top when clicked
    var toTopBtn = document.getElementById("toTopBtn");
        window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    };
    
    toTopBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };