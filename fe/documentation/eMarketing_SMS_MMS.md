1. eMarketing: 
  - Tạo (CRUD) template mình sẽ import một số tamplate đã có sẳn hoặc get từ mail-gun trở về.
  - Tạo (CRUD) campaign chọn group customer, Extra Options(Have birthday in month, Have anniversary in month, Have birthday, Have anniversary, Have membership, Have point > ?, Customer Favorites,...) và ngày giờ (chỉ có thể chọn ngày lớn hơn hiện tại đều quy về UTC time) để gửi cho khách hàng.     
     a) Gửi ngay bây giờ nên dùng (Job) để làm, ước tính cho khách hàng biết cost của campaign.
     b) Gửi vài ngày sau đó kết hợp cronjob + Job gửi đi xong đo lượng reach của khách hàng khi nhận đc email, ước tính cho khách hàng biết cost của campaign.	
     c) Thống kê summary các số tổng cho 1 campaign (ví dụ: Clicked: 1,000, Open: 5,000, subscribe: 400, Un-subscribe: 100, ..)
     d) Compare 2 hoặc nhiều campaign với nhau.
     e) Có thể chèn mã coupon, giftcard, QR code trong email(Họ có thể click nhận mã này thống kê nó)
  - Tạo (Logs)
     a) Tracking status từng email(Lấy cost fee global config thể hiện 1 SMS/MMS họ sẽ tốn bao nhiêu)
     b) Bộ lọc cho từng campaign, group, ngày giờ from+to, status, Extra Options(Have birthday in month, Have anniversary in month, Have birthday, Have anniversary, Have membership, Have point > ?, Customer Favorites,...), khách hàng (clicked, Open, subscribe, Un-subscribe, ...), keyword, cusotmer name, telephone, email,.. 
  - Report:
     - Bộ lọc cho phần report: 
       Bộ lọc cho từng campaign, group, ngày giờ from+to, status, Extra Options(Have birthday in month, Have anniversary in month, Have birthday, Have anniversary, Have membership, Have point > ?, Customer Favorites,...)

     a) Thống kê charter cho từng campaign phân tích lượng reach của khách hàng (ví dụ: Clicked: 1,000, Open: 5,000, subscribe: 400, Un-subscribe: 100, ..)
     b) Thống kê từng group khách hàng (Ví dụ: Group A, Group B), Extra Options(Have birthday in month, Have anniversary in month, Have birthday, Have anniversary, Have membership, Have point > ?, Customer Favorites,...) lưu ý chỉ dành cho những khách hàng đã gửi eMaketing.
     c) Thống kê bill campaign từng tháng và thể hiện sự chênh lệch (ví dụ: Clicked: 1,000, Open: 5,000, subscribe: 400, Un-subscribe: 100, ..)
     d) Thống kê cost phí cho hàng tháng sử dụng dịch vụ.
     
  - Lưu ý: Xử lý data số lượng lớn nên cân nhắc ko nên run direct một lần gửi hết các danh sách customer.
   
Reference: https://documentation.mailgun.com/en/latest/

2. SMS hoặc MMS(Chỉ support các nước đc chỉ định)
  - Tạo (CRUD) template mình sẽ import một số tamplate đã có sẳn.
  - Tạo (CRUD) campaign chọn group customer và ngày giờ(chỉ có thể chọn ngày lớn hơn hiện tại đều quy về UTC time) để gửi cho khách hàng.
       a) Gửi ngay bây giờ nên dùng (Job) để làm.
       b) Gửi vài ngày sau đó kết hợp cronjob + Job gửi đi xong đo lượng reach của khách hàng khi nhận đc sms/mms.
       c) Có thể chèn mã coupon, giftcard, QR code trong email(Họ có thể click nhận mã này thống kê nó)
       d) Compare 2 hoặc nhiều campaign với nhau.
  - Tạo (Logs)
      a) Tracking status từng sms/mms
      b) Thống kê lượng Feadback SMS/MMS từ khách hàng forward cho owner(Note: Sẽ tính cost fee cho mỗi lần forward SMS/MMS)
      b) Bộ lọc cho từng campaign, group, ngày giờ from+to, status, khách hàng (Open, Feadback), keyword, cusotmer name, telephone, email,..
  - Report:
     - Bộ lọc cho phần report: 
       Bộ lọc cho từng campaign, group, ngày giờ from+to, status, Extra Options(Have birthday in month, Have anniversary in month, Have birthday, Have anniversary, Have membership, Have point > ?, Customer Favorites,...)

     a) Thống kê charter cho từng campaign phân tích lượng reach của khách hàng (ví dụ: Clicked: 1,000, Open: 5,000, subscribe: 400, Un-subscribe: 100, ..)
     b) Thống kê từng group khách hàng (Ví dụ: Group A, Group B),  lưu ý chỉ dành cho những khách hàng đã gửi eMaketing.
     c) Thống kê bill campaign từng tháng và thể hiện sự chênh lệch (ví dụ: Open, Feadback, Customer Come back, )
     d) Thống kê cost phí cho hàng tháng sử dụng dịch vụ.

  - Reference: 
     Tracking status: https://support.twilio.com/hc/en-us/articles/223134347-What-are-the-Possible-SMS-and-MMS-Message-Statuses-and-What-do-They-Mean-
     SMS/MMS: https://www.twilio.com/docs/sms

    
  