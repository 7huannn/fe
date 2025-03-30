-Hiển thị & hoạt ảnh:

animation.js	        Xử lý hiệu ứng chuyển động (animations) như mở, đóng popup hoặc chuyển cảnh.
responsive.js	        Điều chỉnh giao diện tùy theo kích thước màn hình (desktop / mobile).
mobile-sidebar.js	    Quản lý sidebar ở chế độ mobile – đóng/mở menu khi nhấn hamburger.

-Lịch & giao diện lịch:

calendar.js	        Phần chính điều khiển toàn bộ lịch – hiển thị, điều hướng, cập nhật ngày.
month-calendar.js	Hiển thị lịch theo tháng (month view).
week-calendar.js	Hiển thị lịch theo tuần (week view).
mini-calendar.js	Lịch nhỏ ở sidebar để chọn ngày nhanh.
view-select.js	    Điều khiển nút chọn chế độ xem (tuần / tháng).

-Sự kiện (Event):

event.js	            Xử lý logic cơ bản của sự kiện như tạo mới, chỉnh sửa, định dạng.
event-list.js	        Hiển thị danh sách sự kiện trong một ngày hoặc khoảng thời gian.
event-form.js	        Xử lý form nhập dữ liệu khi thêm hoặc sửa sự kiện.
event-create-button.js	Gắn sự kiện khi nhấn nút “Tạo sự kiện”.
event-form-dialog.js	Hiển thị popup form để nhập thông tin sự kiện.
event-details-dialog.js	Hiển thị chi tiết của một sự kiện khi nhấn vào.
event-delete-dialog.js	Xử lý popup xác nhận xoá sự kiện.
event-store.js	        Lưu trữ toàn bộ dữ liệu sự kiện trong localStorage.

-Xử lý logic & dữ liệu:

date.js	    Xử lý các hàm liên quan đến ngày tháng: so sánh ngày, định dạng ngày.
url.js	    Lấy thông tin từ URL hoặc thay đổi URL để điều hướng.
sync.js	    (Có thể) chuẩn bị sẵn cho việc đồng bộ dữ liệu với server – chưa dùng vì bạn không có backend.


-Điều hướng & giao diện:

nav.js	            Điều khiển thanh điều hướng: các nút Home, Calendar...
hamburger.js	    Xử lý nút hamburger để mở/đóng menu sidebar.
toaster.js	        Hiển thị thông báo ngắn (“Đã lưu sự kiện”, “Xoá thành công”, v.v.).
notifications.js	Quản lý hiển thị thông báo người dùng, có thể là thông báo hệ thống hoặc thời gian.

-Trang chính & logic chung:

home.js	    Logic cho trang Home nếu có – có thể là giới thiệu app, hoặc redirect.
index.js	Entry point chính của app – load các thành phần cần thiết khi khởi chạy.
login.js	Logic đăng nhập – có thể chỉ là giả lập (nếu không có backend thật).
