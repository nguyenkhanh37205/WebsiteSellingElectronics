document.querySelector('#loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    // Lấy giá trị từ input
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Kiểm tra email
    if (email === '') {
        setErrorFor(document.getElementById('email'), 'Email không được để trống');
        isValid = false;
    } else if (!isEmail(email)) {
        setErrorFor(document.getElementById('email'), 'Email không hợp lệ');
        isValid = false;
    } else {
        setSuccessFor(document.getElementById('email'));
    }

    // Kiểm tra mật khẩu
    if (password === '') {
        setErrorFor(document.getElementById('password'), 'Mật khẩu không được để trống');
        isValid = false;
    } else {
        setSuccessFor(document.getElementById('password'));
    }

    if (isValid) {
        alert('Đăng nhập thành công!');
        window.location.href ="./TrangChu";
    }
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
