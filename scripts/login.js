document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const showForgotLink = document.getElementById("showForgotPassword");
    const backToLoginLink = document.getElementById("backToLogin");
    const forgotFormContainer = document.querySelector(".forgot-password");
    const signInContainer = document.querySelector(".sign-in");
    
    if (showForgotLink && backToLoginLink && forgotFormContainer && signInContainer) {

        forgotFormContainer.style.display = "";

        showForgotLink.addEventListener("click", (e) => {
            e.preventDefault();
            container.classList.remove("active");       // Tắt toggle slide
            container.classList.add("forgot-mode");     // Hiện form quên mật khẩu
        });
    
        backToLoginLink.addEventListener("click", (e) => {
            e.preventDefault();
            container.classList.remove("forgot-mode");  // Ẩn form quên mật khẩu
            container.classList.add("active");          // Quay lại form login
        });
    }

    if (registerBtn && loginBtn && container) {
        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });
    }

    //------------------------------------------SIGN IN------------------------------------------------------
    const signInForm = document.querySelector('.sign-in form');

    if (signInForm) {
        signInForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = signInForm.querySelector('input[type="email"]').value;
            const password = signInForm.querySelector('input[type="password"]').value;

            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            if (!isValidEmail(email)) {
                alert('Invalid email format');
                return;
            }

            // ----------- Tạm dừng sử dụng API ------------------
            // const apiUrl = 'https://e069-203-205-32-65.ngrok-free.app/login';

            // try {
            //     const response = await fetch(apiUrl, {
            //         method: 'POST',
            //         headers: { 'Content-Type': 'application/json' },
            //         body: JSON.stringify({ email, password })
            //     });

            //     const data = await response.json();

            //     if (response.ok) {
            //         alert('Login successful! Redirecting...');
            //         window.location.href = '../pages/index.html';
            //     } else if (response.status === 400) {
            //         alert('Invalid credentials! Please try again.');
            //     } else if (response.status === 500) {
            //         alert('Server error. Please try again later.');
            //     } else {
            //         alert('Login failed: ' + (data.message || 'Unknown error'));
            //     }
            // } catch (error) {
            //     if (error.message.includes('Failed to fetch')) {
            //         alert('Network error: Please check your internet connection.');
            //     } else {
            //         alert('An error occurred: ' + error.message);
            //     }
            // }

            // ----------- Test local (Không dùng API) ------------------
            alert('Login successful! (Local test mode)');
            window.location.href = '../pages/index.html';
        });
    }

    //------------------------------------------SIGN UP------------------------------------------------------
    const signUpForm = document.querySelector('.sign-up form');

    if (signUpForm) {
        signUpForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            // const name = signUpForm.querySelector('input[type="text"]').value;
            const email = signUpForm.querySelector('input[type="email"]').value;
            const password = signUpForm.querySelector('input[type="password"]').value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            if (!isValidEmail(email)) {
                alert('Invalid email format');
                return;
            }


            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }
    
            // TODO: Thêm logic gọi API đăng ký ở đây
            alert("Sign up successful! (Local test)");
            // ----------- Tạm dừng sử dụng API ------------------
            // const apiUrl = 'https://e069-203-205-32-65.ngrok-free.app/register';

            // try {
            //     const response = await fetch(apiUrl, {
            //         method: 'POST',
            //         headers: { 'Content-Type': 'application/json' },
            //         body: JSON.stringify({ email, password })
            //     });

            //     const data = await response.json();

            //     if (response.ok) {
            //         alert('Registration successful! Please log in.');
            //         container.classList.remove("active");
            //     } else {
            //         alert('Registration failed: ' + (data.message || 'Error occurred'));
            //     }
            // } catch (error) {
            //     if (error.message.includes('Failed to fetch')) {
            //         alert('Network error: Please check your internet connection.');
            //     } else {
            //         alert('An error occurred: ' + error.message);
            //     }
            // }

            // ----------- Test local (Không dùng API) ------------------
            alert('Registration successful! (Local test mode)');
            container.classList.remove("active");
        });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const forgotForm = document.getElementById("forgotPasswordForm");

    if (forgotForm) {
        forgotForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("forgotEmail").value.trim();

            if (!email || !isValidEmail(email)) {
                alert("Please enter a valid email.");
                return;
            }

            // TODO: Gọi API thực nếu có
            alert("A reset link has been sent to your email (simulated).");
            forgotForm.reset();
        });
    }
});

