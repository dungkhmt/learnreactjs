import React from "react";
import "./App.css";
import Box from "./Box";
export default function App() {
  return (
    <>
      <div className="box-row" style={{ backgroundColor: "white" }}>
        <Box id="2" bgcolor="green" />
        <Box id="5" />
        <Box id="2" bgcolor="green" />
        <Box id="5" />
        <Box id="2" bgcolor="green" />
        <Box id="5" />
        <Box id="2" bgcolor="green" />
        <Box id="5" />
      </div>
      <div className="box-row">
        <Box />
        <Box />
      </div>

      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">Giới thiệu</li>
          <li className="nav-item">Download</li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">Đăng nhập</li>
          <li className="nav-item">Đăng ký</li>
        </ul>
      </div>

      <div className="form-container">
        <form action="" className="form">
          <div className="form-row">
            <label class="form-label">Name</label>
            <input className="form_input" type="text"></input>
          </div>
          <div className="form-row">
            <label class="form-label">Password</label>
            <input className="form_input" type="text"></input>
          </div>
        </form>
      </div>

      <div className="column-layout">
        <div className="column-item sidebar-one">
          <h2>Sidebar one</h2>
          <p>
            Lượng người ra đường ở nhiều tuyến phố "vùng xanh" đông hơn, các
            hàng quán trong diện được phép hoạt động bắt đầu mở cửa trở lại, từ
            12h trưa 16/9. Trên đường Hồ Tùng Mậu và Cầu Diễn hướng vào trung
            tâm Hà Nội, hai chốt kiểm soát dịch do Đội cảnh sát giao thông số 6
            phụ trách không yêu cầu các phương tiện dừng lại để kiểm tra như
            những ngày trước. Một cảnh sát cho biết, từ sáng nay (16/9) chốt đã
            dừng kiểm tra giấy đi đường. "Chúng tôi chủ yếu xem xét lượng phương
            tiện, nếu có trường hợp nào khả nghi thì mới dừng xe để kiểm soát",
            vị này nói.
          </p>
        </div>
        <div className="column-item sidebar-main">
          <h2>Sidebar Main</h2>
          <p>
            Lượng người ra đường ở nhiều tuyến phố "vùng xanh" đông hơn, các
            hàng quán trong diện được phép hoạt động bắt đầu mở cửa trở lại, từ
            12h trưa 16/9. Trên đường Hồ Tùng Mậu và Cầu Diễn hướng vào trung
            tâm Hà Nội, hai chốt kiểm soát dịch do Đội cảnh sát giao thông số 6
            phụ trách không yêu cầu các phương tiện dừng lại để kiểm tra như
            những ngày trước. Một cảnh sát cho biết, từ sáng nay (16/9) chốt đã
            dừng kiểm tra giấy đi đường. "Chúng tôi chủ yếu xem xét lượng phương
            tiện, nếu có trường hợp nào khả nghi thì mới dừng xe để kiểm soát",
            vị này nói.
          </p>
          <p>
            Theo Đại úy Trần Quang Chinh, Phó Đội trưởng CSGT số 6 (Công an TP
            Hà Nội) lưu lượng phương tiện qua chốt (khu vực giáp ranh quận Bắc
            Từ Liêm và Cầu Giấy) vào trưa nay bình thường, tuy nhiên đã tăng dần
            vào buổi chiều. "Chúng tôi bố trí lực lượng để kiểm soát ùn tắc vào
            giờ cao điểm chiều nay", ông Chinh cho biết.
          </p>
          <p>
            Theo Đại úy Trần Quang Chinh, Phó Đội trưởng CSGT số 6 (Công an TP
            Hà Nội) lưu lượng phương tiện qua chốt (khu vực giáp ranh quận Bắc
            Từ Liêm và Cầu Giấy) vào trưa nay bình thường, tuy nhiên đã tăng dần
            vào buổi chiều. "Chúng tôi bố trí lực lượng để kiểm soát ùn tắc vào
            giờ cao điểm chiều nay", ông Chinh cho biết.
          </p>
        </div>
        <div className="column-item sidebar-two">
          <h2>Sidebar Two</h2>
          <p>
            Lượng người ra đường ở nhiều tuyến phố "vùng xanh" đông hơn, các
            hàng quán trong diện được phép hoạt động bắt đầu mở cửa trở lại, từ
            12h trưa 16/9.
          </p>
        </div>
      </div>

      <div className="feature-layout">
        <div
          id="F1"
          onClick={(e) => {
            alert("click id " + e.target.id);
          }}
          className="feature-item"
        >
          <h1>Feature 1</h1>
          <p>SP very good</p>
        </div>
        <div
          id="F2"
          onClick={(e) => {
            alert("click id " + e.target.id);
          }}
          className="feature-item"
        >
          <h1>Feature 2</h1>
          <p>
            Từ trưa nay (16/9), trên phố Tô Hiệu dài hơn một km - khu ẩm thực
            từng sầm uất nhất quận Cầu Giấy, có 8 cửa hàng mở lại. Hàng chục cơ
            sở khác vẫn đóng cửa, bên trong nhân viên dọn dẹp vệ sinh; một số
            nơi dán biển cho thuê mặt bằng, không có dấu hiệu hoạt động trở lại.
          </p>
        </div>
        <div className="feature-item">
          <h1>Feature 3</h1>
          <p>
            Vừa mở được chưa đầy 10 phút, ba khách đã đến đặt 6 bát bánh đa. Chủ
            quán đưa tận tay khách vẻ hồ hởi, không quên thông báo hôm nay quán
            sẽ mở đến 21h.
          </p>
        </div>
      </div>

      <div className="wrap-layout">
        <div className="wrap-layout__item">1</div>
        <div className="wrap-layout__item">2</div>
        <div className="wrap-layout__item">3</div>
        <div className="wrap-layout__item">4</div>
        <div className="wrap-layout__item">5</div>
        <div className="wrap-layout__item">6</div>
      </div>

      <div className="the-end">
        <div className="the-end-first">
          <p>
            Gần hai tháng qua, anh Đạt phải chi trả tiền thuê mặt bằng, tiền
            lương nuôi ăn ở cho 9 nhân viên, hơn 100 triệu đồng. Trước khi phải
            đóng cửa theo chủ trương giãn cách xã hội của thành phố (từ 24/7),
            quán của anh mỗi ngày bán được hơn 400 suất ăn.
          </p>
          <p>
            Hơn 8 năm mở quán, chưa bao giờ anh gặp phải tình cảnh khó khăn như
            thời gian qua. "Tôi mong chờ từng ngày quyết định nới lỏng, nếu kéo
            dài thêm một tháng, tôi sẽ phải trả lại lại mặt bằng. Bán mang về,
            chắc chắn sẽ số lượng bán sẽ giảm một nửa nhưng dù sao vẫn đủ để cầm
            cự", anh Đạt chia sẻ.
          </p>
          <p>
            Cách phố Tô Hiệu hơn 3 km, chị Chu Thị Thêm, 32 tuổi, chủ quán phở
            trên phố Văn Cao, quận Ba Đình, cùng hai nhân viên tranh thủ dọn
            dẹp. "Sau hai tháng nghỉ mọi thứ bừa bộn, chắc phải hai hôm nữa tôi
            mới mở bán trở lại", chị Thêm nói.
          </p>
        </div>
        <div className="the-end-second">
          <div className="the-end-second-one">
            <p>
              Cạnh quán chị Thêm, chị Trương Thanh Thủy, 45 tuổi, luôn tay bốc
              bánh phở, đóng hộp nước lèo cho 10 khách đang đứng đợi. "Mọi người
              đứng cách nhau 2 m giúp cho ạ!", chị liên tục nói to. Trong vòng
              30 phút, quán của chị bán được gần 50 bát phở.
            </p>
          </div>
          <div className="the-end-second-two">
            <p>
              Cạnh quán chị Thêm, chị Trương Thanh Thủy, 45 tuổi, luôn tay bốc
              bánh phở, đóng hộp nước lèo cho 10 khách đang đứng đợi. "Mọi người
              đứng cách nhau 2 m giúp cho ạ!", chị liên tục nói to. Trong vòng
              30 phút, quán của chị bán được gần 50 bát phở.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
