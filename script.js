// Small helpers
    document.getElementById('yr').textContent = new Date().getFullYear();

    function scrollToContact(){
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    }

    // Smooth scroll for nav links
    document.querySelectorAll('nav a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      })
    });

    document.querySelectorAll(".vm-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    // reset
    document.querySelectorAll(".vm-tab").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".vm-panel").forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});
