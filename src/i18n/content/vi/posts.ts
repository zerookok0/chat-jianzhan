/**
 * VIỆT HOÁ — TẠP CHÍ
 * ------------------------------------------------------------------
 * Bốn bài viết, viết lại theo giọng của xưởng: ngắn, thực dụng, không
 * lên gân. Khoá là `slug` trong src/data/posts.ts.
 */

export interface PostBlockCopy {
  heading?: string
  text: string
}

export interface PostCopy {
  title: string
  kicker: string
  excerpt: string
  body: PostBlockCopy[]
}

export const postsVi: Record<string, PostCopy> = {
  'reading-a-glaze': {
    title: 'Đọc một lớp men',
    kicker: 'Men',
    excerpt:
      'Ba chén cùng ra từ một lò có thể trông như ba chất liệu khác nhau. Vài ghi chú để hiểu bề mặt đang nói điều gì.',
    body: [
      {
        text: 'Men là một lớp thuỷ tinh mỏng. Mọi thứ bạn thấy trên một tác phẩm đã hoàn tất — màu, độ bóng, và cả những chỗ đứt gãy nhỏ trong hai thứ đó — đều xảy ra bên trong một lớp thường không dày hơn móng tay. Học cách đọc lớp ấy là phần lớn việc sưu tầm những chiếc chén này.',
      },
      {
        heading: 'Nhìn ánh sáng, đừng nhìn vật',
        text: 'Phần lớn men sắt trông phẳng lì dưới ánh sáng tán xạ, rồi bỗng dữ dội khi chỉ còn một nguồn sáng gần và hẹp. Hãy xoay chén chậm, đừng xoay đèn. Du Tích dường như nổi lên trên nền men; Thỏ Hào lại như chìm vào trong đó.',
      },
      {
        heading: 'Tìm chỗ nguội',
        text: 'Tinh thể cần thời gian. Mở lò quá sớm, bề mặt ở lại bóng trơn và khá nhạt. Những quầng đẹp nhất thường đến từ một lần nung nguội hàng giờ, chứ không phải hàng phút.',
      },
      {
        heading: 'Đừng bỏ qua phần đế',
        text: 'Đế không tráng men là nơi việc làm hiện ra: dấu bàn xoay, một đường hạt cát, màu của đất sống. Đó là phần ít được chụp nhất của chiếc chén, và cũng là cách nhanh nhất để phân biệt hàng nặn tay với hàng đổ khuôn.',
      },
    ],
  },

  'fire-and-time': {
    title: 'Lửa và thời gian',
    kicker: 'Quy trình',
    excerpt:
      'Vì sao lò củi vẫn có lý trong thời của bộ điều khiển điện — và cái giá phải trả để dùng nó.',
    body: [
      {
        text: 'Lò củi không phải một phiên bản lãng mạn hơn của lò điện. Nó là một nhạc cụ khác. Nhiệt đến không đều, tro rơi đúng nơi nó rơi, và khí quyển trong buồng lò đổi liên tục theo từng thanh củi và từng luồng gió đi qua.',
      },
      {
        heading: 'Ca trực dài',
        text: 'Một lần nung tính bằng ngày, không phải bằng giờ, và lò được canh theo ca. Phải có người ở đó suốt lúc lên nhiệt và cả lúc nguội sau đó; chính giai đoạn nguội thường quyết định bề mặt cuối cùng nhiều hơn mức nhiệt cao nhất.',
      },
      {
        heading: 'Nhận phần mất',
        text: 'Nung củi luôn sinh ra phế phẩm. Chén nứt, men chảy xuống tấm kê, và một chiếc trông đầy hứa hẹn trong lò lại mở ra xỉn màu. Số tác phẩm dùng được từ một mẻ chỉ là một phần của những gì đưa vào — đó cũng là lý do những món đồ này có giá như chúng đang có.',
      },
      {
        heading: 'Những gì còn lại',
        text: 'Tro bám, vệt lửa, và vài đốm sắt nhỏ là bản ghi nhìn thấy được của quá trình ấy. Chúng không phải lỗi cần đánh bóng đi, mà chính là lý do bề mặt không thể sao chép lại y nguyên.',
      },
    ],
  },

  'caring-for-a-bowl': {
    title: 'Giữ một chiếc chén',
    kicker: 'Bảo quản',
    excerpt:
      'Ghi chú thực dụng về cách dùng, rửa và cất giữ một chiếc chén tráng men mà không làm mờ bề mặt.',
    body: [
      {
        text: 'Những chiếc chén này làm ra để dùng. Men bền, nhưng vẫn là thuỷ tinh, và vài thói quen nhỏ sẽ giữ cho bề mặt đọc được như khi nó rời lò.',
      },
      {
        heading: 'Rửa',
        text: 'Nước ấm, khăn mềm, không dùng búi cọ mài mòn. Tránh thay đổi nhiệt đột ngột — đừng rót nước sôi vào chén nguội, cũng đừng dội nước lạnh lên chén vừa rót trà nóng.',
      },
      {
        heading: 'Làm khô',
        text: 'Úp chén lên khăn và để thật khô tự nhiên trước khi cất. Ẩm đọng lại ở phần đế không tráng men là nguyên nhân thường gặp nhất của mùi cũ.',
      },
      {
        heading: 'Cất giữ',
        text: 'Đừng để các tác phẩm chạm vào nhau; một tấm vải mềm giữa hai chén là đủ. Tránh nắng trực tiếp, vì nhiều năm nắng sẽ làm một số màu men dịch dần.',
      },
      {
        heading: 'Patina',
        text: 'Men rạn mịn và màu sẫm dần là chuyện bình thường khi dùng. Đó không phải hư hại, và nhiều người sưu tầm xem chính điều đó là điểm đáng giá.',
      },
    ],
  },

  'the-case-for-the-object': {
    title: 'Vì một món đồ',
    kicker: 'Sưu tầm',
    excerpt:
      'Về việc mua ít đi, và mua những thứ mà bề mặt còn đáng nhìn lại lần thứ hai, thứ ba.',
    body: [
      {
        text: 'Năm chiếc chén, mỗi chiếc đổi khác dưới ánh sáng, thú vị hơn một kệ năm mươi chiếc không đổi gì. Lý lẽ của cách sưu tầm này không nằm ở thị trường khan hiếm; nó nằm ở sự chú ý.',
      },
      {
        heading: 'Từng chiếc một',
        text: 'Sống với một tác phẩm trong một mùa rồi hãy thêm chiếc khác. Bạn sẽ biết mình thật sự phản ứng với điều gì — bề mặt, trọng lượng, cách miệng chén chạm môi — chứ không phải điều gì lên ảnh đẹp.',
      },
      {
        heading: 'Hỏi về lần nung',
        text: 'Người làm nghiêm túc nào cũng nói được tác phẩm đã nung thế nào và đại khái khi nào. Nếu không có thông tin ấy, hãy xem món đồ như vật trang trí, chứ không phải vật sưu tầm.',
      },
      {
        heading: 'Giữ lại ghi chép',
        text: 'Ghi tên người làm, năm và lần nung vào một tấm thẻ cất cùng hộp. Hai mươi năm nữa, đó sẽ là thứ giá trị nhất của món đồ, chỉ sau chính món đồ.',
      },
    ],
  },
}
