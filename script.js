function generatePlan() {
    const budget = document.getElementById("budget").value;
    if (!budget || budget <= 0) {
        alert("Vui lòng nhập số tiền hợp lệ!");
        return;
    }

    const planGroups = [
        {
            title: "🏡 1. Chi tiêu gia đình & chuẩn bị Tết",
            items: [
                "Mua bánh kẹo Tết",
                "Mua hoa, cây cảnh",
                "Mua mâm ngũ quả",
                "Trang trí nhà – đèn, dây treo",
                "Dọn dẹp – bao rác, nước lau sàn",
                "Đồ dùng bếp mới"
            ]
        },
        {
            title: "🎁 2. Quà biếu & thăm hỏi",
            items: [
                "Quà biếu ông bà",
                "Quà biếu họ hàng",
                "Quà biếu thầy cô",
                "Quà biếu hàng xóm",
                "Tiền thăm hỏi"
            ]
        },
        {
            title: "🧧 3. Lì xì Tết",
            items: [
                "Lì xì cho trẻ em",
                "Lì xì cho anh chị em",
                "Lì xì cho bố mẹ",
                "Lì xì bạn bè",
                "Lì xì phát sinh"
            ]
        },
        {
            title: "👕 4. Trang phục & cá nhân",
            items: [
                "Mua quần áo mới",
                "Giày dép",
                "Cắt tóc – nhuộm",
                "Mỹ phẩm – skincare",
                "Phụ kiện (vòng, nón...)"
            ]
        },
        {
            title: "🍜 5. Ăn uống – đi chơi",
            items: [
                "Đi cafe – trà sữa",
                "Đi ăn với bạn",
                "Đi xem phim",
                "Đi chơi hội hoa",
                "Tiền xăng / xe bus",
                "Lưu niệm",
                "Đi du lịch"
            ]
        },
        {
            title: "📚 6. Học tập đầu năm",
            items: [
                "Dụng cụ học tập",
                "Sách mới",
                "Dán màn hình – ốp điện thoại",
                "In ảnh – lưu niệm"
            ]
        },
        {
            title: "🛡️ 7. Quỹ dự phòng",
            items: [
                "Phát sinh bất ngờ",
                "Quỹ khẩn cấp"
            ]
        }
    ];

    let html = "";

    planGroups.forEach(group => {
        html += `
            <div class="card">
                <h3>${group.title}</h3>
                <ul>
                    ${group.items.map(item => `<li>${item}</li>`).join("")}
                </ul>
            </div>
        `;
    });

    document.getElementById("planContainer").innerHTML = html;
}
