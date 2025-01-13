// Bắt sự kiện submit form
document.querySelector('#registerForm').addEventListener('submit', function (e) {
	e.preventDefault(); // Ngăn trình duyệt tự reload

	// Biến kiểm tra trạng thái hợp lệ
	let isValid = true;

	// Lấy giá trị các trường nhập liệu
	const username = document.getElementById('username').value.trim();
	const email = document.getElementById('email').value.trim();
	const password = document.getElementById('password').value.trim();
	const password2 = document.getElementById('password2').value.trim();

	// Kiểm tra tên người dùng
	if (username === '') {
		setErrorFor(document.getElementById('username'), 'Tên người dùng không được để trống');
		isValid = false;
	} else {
		setSuccessFor(document.getElementById('username'));
	}

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

	// Kiểm tra xác nhận mật khẩu
	if (password2 === '') {
		setErrorFor(document.getElementById('password2'), 'Xác nhận mật khẩu không được để trống');
		isValid = false;
	} else if (password !== password2) {
		setErrorFor(document.getElementById('password2'), 'Mật khẩu không khớp');
		isValid = false;
	} else {
		setSuccessFor(document.getElementById('password2'));
	}

	// Nếu tất cả đều hợp lệ, chuyển hướng đến trang chủ
	if (isValid) {
		window.location.href = "/TrangChu";
	}
});

// Hàm thiết lập trạng thái lỗi
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message; // Hiển thị thông báo lỗi
}

// Hàm thiết lập trạng thái thành công
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// Hàm kiểm tra định dạng email hợp lệ
function isEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
