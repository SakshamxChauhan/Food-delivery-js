
const btn = document.querySelector('.logout-btn');
if (btn) {
    btn.addEventListener('click', function() {
        localStorage.clear();
        window.location.replace("login.html");
    });
}


const loginBtn = document.querySelector('.login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'home.html';
    });
}