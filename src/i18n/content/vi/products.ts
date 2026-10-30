/**
 * VIỆT HOÁ — TÁC PHẨM
 * ------------------------------------------------------------------
 * Mỗi chén được viết riêng, theo đúng lớp men và khí chất của nó.
 * Không dùng câu mẫu, không chỉ thay tên chén.
 *
 * Khoá là `slug` trong src/data/products.ts. Thiếu một slug nghĩa là
 * tác phẩm đó hiển thị bằng tiếng Anh — nên danh sách này phải đủ.
 */

import type { SpecItem } from '../../../data/types'

export interface ProductCopy {
  name: string
  subtitle: string
  description: string
  specifications: SpecItem[]
  /** Optional overrides for the page title and meta/OG description. */
  seoTitle?: string
  seoDescription?: string
}

const bodyIron = 'Sành nhiều sắt'
const bodyStone = 'Sành'
const bodySlip = 'Sành phủ hồ sắt'

export const productsVi: Record<string, ProductCopy> = {
  /* ------------------------------------------------------------------ */
  'midnight-oil-spot-bowl': {
    name: "Chén Kiến 'Lông Công' — Men Du Tích Đêm",
    subtitle:
      'Chén Kiến cao cấp, men du tích nhiều màu tựa lông công, thủ công bởi nghệ nhân Ding Changsheng, nung ở 1300°C.',
    description:
      'Chén Kiến cao cấp, thủ công bởi nghệ nhân nổi tiếng Ding Changsheng (Đinh Trường Sinh). Lớp men du tích nhiều màu tựa lông công xòe rực rỡ; sắc xanh ánh kim đổi thay theo ánh sáng, hé lộ những tầng tím, lục và vàng óng. Mỗi chiếc chén mang một vân men riêng, được lò nung 1300°C tạo nên tự nhiên. Chén đi kèm hộp quà thanh nhã và chứng nhận chính hãng có chữ ký tay của nghệ nhân.',
    seoTitle: "Chén Kiến 'Lông Công' — Men Du Tích Đêm | Dáng Shu Kou",
    seoDescription:
      'Chén Kiến thủ công bởi Ding Changsheng, men du tích ánh lông công đổi sắc theo ánh sáng. Dáng Shu Kou, 75 ml, kèm hộp quà và chứng nhận có chữ ký nghệ nhân.',
    specifications: [
      { label: 'Dáng', value: 'Shu Kou' },
      { label: 'Kích thước', value: '9,8 × 5 cm' },
      { label: 'Dung tích', value: '75 ml' },
      { label: 'Lò vi sóng', value: 'Không dùng lò vi sóng' },
      { label: 'Nghệ nhân', value: 'Ding Changsheng (丁长生)' },
      { label: 'Nhiệt độ nung', value: '1300°C' },
      { label: 'Bao gồm', value: 'Hộp quà + chứng nhận chính hãng có chữ ký tay' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'hares-fur-bowl': {
    name: 'Thỏ Hào',
    subtitle: 'Những vệt do lửa vẽ nên',
    description:
      'Sợi nâu ánh đồng chạy dọc từ miệng xuống đế, men theo con đường lửa đã đi qua buồng lò. Đây không phải hoa văn được vẽ lên; đó là bản ghi của gió và nhiệt. Vì thế mà không có hai chén nào cùng một độ rơi của ánh sáng.',
    specifications: [
      { label: 'Đường kính', value: '11,8 cm' },
      { label: 'Chiều cao', value: '6,2 cm' },
      { label: 'Dung tích', value: '160 ml' },
      { label: 'Trọng lượng', value: '285 g' },
      { label: 'Xương gốm', value: bodyIron },
      { label: 'Nung', value: 'Nung củi, 1300 °C' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'iridescent-blue-bowl': {
    name: 'Diệu Biến Xanh',
    subtitle: 'Sắc xanh ma ảnh, đánh thức bởi ánh sáng',
    description:
      'Một sắc xanh như ma ảnh — chỉ hiện lên khi có ánh sáng chạm vào, đổi thay như sao trời giữ trong đá tối. Màu này không nhờ sắc tố nào cả. Nó là một màng men mỏng can thiệp vào chính ánh sáng, nên câu trả lời thay đổi theo góc nhìn, và theo giờ trong ngày.',
    specifications: [
      { label: 'Đường kính', value: '12,6 cm' },
      { label: 'Chiều cao', value: '7,0 cm' },
      { label: 'Dung tích', value: '190 ml' },
      { label: 'Trọng lượng', value: '330 g' },
      { label: 'Xương gốm', value: bodyIron },
      { label: 'Nung', value: 'Nung củi, 1310 °C' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'jade-glaze-bowl': {
    name: 'Men Ngọc',
    subtitle: 'Xanh dịu dưới một lớp áo tối',
    description:
      'Một chiếc chén lặng. Men đọng lại thành sắc ngọc dịu nơi lòng trong, còn mặt ngoài ở lại trong bóng. Đẹp nhất khi để trống, hoặc với một loại trà nhạt để lớp men được nói thay mình.',
    specifications: [
      { label: 'Đường kính', value: '11,5 cm' },
      { label: 'Chiều cao', value: '6,0 cm' },
      { label: 'Dung tích', value: '150 ml' },
      { label: 'Trọng lượng', value: '270 g' },
      { label: 'Xương gốm', value: bodySlip },
      { label: 'Nung', value: 'Hoàn nguyên, 1280 °C' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'tea-dust-vessel': {
    name: 'Trà Mạt',
    subtitle: 'Bề mặt mờ, màu của bụi và rêu',
    description:
      'Làm để đựng trà khô, không đựng nước. Bề mặt chưa đánh bóng sẽ mềm dần theo tay người dùng, lên một lớp ánh mờ — đó là toàn bộ patina mà lớp men này sẽ có.',
    specifications: [
      { label: 'Đường kính', value: '9,8 cm' },
      { label: 'Chiều cao', value: '10,5 cm' },
      { label: 'Dung tích', value: '320 ml' },
      { label: 'Trọng lượng', value: '365 g' },
      { label: 'Xương gốm', value: bodyStone },
      { label: 'Nung', value: 'Hoàn nguyên, 1260 °C' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'connoisseur-pair': {
    name: 'Đôi Chén Tri Kỷ',
    subtitle: 'Hai chén, một mẻ nung, cố ý khác nhau',
    description:
      'Hai chén được chọn ra từ cùng một mẻ lò để giữ lại sự tương phản: một nghiêng về Du Tích, một nghiêng về Thỏ Hào. Bán theo bộ, đựng trong hộp vải lanh, kèm giấy ghi chú lần nung.',
    specifications: [
      { label: 'Số chén', value: '2' },
      { label: 'Đường kính', value: '12,0 cm mỗi chiếc' },
      { label: 'Chiều cao', value: '6,5 cm mỗi chiếc' },
      { label: 'Dung tích', value: '175 ml mỗi chiếc' },
      { label: 'Xương gốm', value: bodyIron },
      { label: 'Trình bày', value: 'Hộp bọc vải lanh' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'ash-shadow-bowl': {
    name: 'Bóng Tro',
    subtitle: 'Tro lắng lại nơi lửa chậm',
    description:
      'Tro từ lần nung lắng không đều trên vai chén, để lại một vệt xám ngả lục trên nền xương sẫm. Chiếc này thuộc một mẻ nhỏ, khi lò được để nguội thật chậm.',
    specifications: [
      { label: 'Đường kính', value: '12,1 cm' },
      { label: 'Chiều cao', value: '6,4 cm' },
      { label: 'Dung tích', value: '170 ml' },
      { label: 'Trọng lượng', value: '300 g' },
      { label: 'Xương gốm', value: bodyStone },
      { label: 'Nung', value: 'Nung củi, 1290 °C' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'deep-iridescence-bowl': {
    name: 'Diệu Biến Thẫm',
    subtitle: 'Một cách đọc tối hơn của men xanh',
    description:
      'Nơi Diệu Biến Xanh mở ra phía tím, chiếc chén này giữ màu sâu hơn, gần với nền đen hơn. Bề mặt chỉ trả lời khi có một nguồn sáng mạnh và duy nhất.',
    specifications: [
      { label: 'Đường kính', value: '13,0 cm' },
      { label: 'Chiều cao', value: '7,2 cm' },
      { label: 'Dung tích', value: '200 ml' },
      { label: 'Trọng lượng', value: '345 g' },
      { label: 'Xương gốm', value: bodyIron },
      { label: 'Nung', value: 'Nung củi, 1310 °C' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'hare-fur-teacup': {
    name: 'Chén Thỏ Hào',
    subtitle: 'Cùng một lớp men, ở cỡ nhỏ hơn',
    description:
      'Bạn đồng hành của chén Thỏ Hào cỡ lớn, nặn mỏng hơn để những sợi men hiện rõ ở khoảng cách gần. Dùng hằng ngày, và rửa bằng tay.',
    specifications: [
      { label: 'Đường kính', value: '8,6 cm' },
      { label: 'Chiều cao', value: '5,0 cm' },
      { label: 'Dung tích', value: '90 ml' },
      { label: 'Trọng lượng', value: '175 g' },
      { label: 'Xương gốm', value: bodyIron },
      { label: 'Nung', value: 'Nung củi, 1300 °C' },
    ],
  },

  'new-piece-mgl7l': {
    name: "Chén Kiến 'Khởi Nguyên Sự Sống' — Men Xanh, Dáng Đấu Lạp",
    subtitle: 'Vân men như những tế bào đầu tiên',
    description:
      'Chén Kiến dáng đấu lạp — chiếc nón lá úp ngược — một dáng chén cổ điển của thời Tống. Qua lò nung 1300°C, lớp men tự kết thành những vân xanh bạc, gợi hình ảnh những cấu trúc tế bào đầu tiên của sự sống. Vì thế, chúng tôi gọi tác phẩm này là “Khởi Nguyên Sự Sống”.',
    specifications: [
      { label: 'Đường kính', value: '9,8 cm' },
      { label: 'Chiều cao', value: '5,9 cm' },
      { label: 'Dung tích', value: '170 ml' },
      { label: 'Lò vi sóng', value: 'Không dùng lò vi sóng' },
    ],
  },

  'new-piece-mkxe8': {
    name: "Chén Kiến 'Bách Hoa' — Dáng Bát",
    subtitle: 'Trăm hoa cùng nở trong lửa',
    description:
      "Chén Kiến 'Bách Hoa' theo tinh thần thời Tống. Lớp men xanh bạc lấp lánh như trăm đóa hoa cùng nở, được tạo nên trong lò nung 1300°C. Dáng Bát — phỏng theo chiếc bình bát của nhà sư khất thực — mang lại cảm giác tròn đầy, khiêm nhường và tĩnh tại.",
    specifications: [
      { label: 'Đường kính', value: '5,2 cm' },
      { label: 'Chiều cao', value: '9,7 cm' },
      { label: 'Dung tích', value: '105 ml' },
      { label: 'Lò vi sóng', value: 'Không dùng lò vi sóng' },
    ],
  },

  'new-piece-mmpkh': {
    name: "Chén Kiến 'Lông Thỏ' — Men Nâu",
    subtitle: 'Những sợi nâu chảy dọc như lông thú',
    description:
      "Chén Kiến men nâu, với những vệt dọc mảnh như lông thú — dân gian gọi là “lông thỏ”. Vân men không được vẽ lên, mà do nhiệt độ lò 1300°C và dòng chảy của men tạo nên tự nhiên. Mỗi chiếc chén giữ một nhịp chảy riêng, không chiếc nào lặp lại.",
    specifications: [
      { label: 'Đường kính', value: '9,5 cm' },
      { label: 'Chiều cao', value: '5,5 cm' },
      { label: 'Dung tích', value: '175 ml' },
      { label: 'Lò vi sóng', value: 'Không dùng lò vi sóng' },
    ],
  },

  'new-piece-p6gye': {
    name: "Mingche 'Cõi Sen Đôn Hoàng' — Mạ Vàng, Thiền Trà",
    subtitle: 'Một đóa sen nở giữa ốc đảo ngàn năm',
    description:
      "Giữa ốc đảo Đôn Hoàng xa xôi, những đóa sen thiêng lặng lẽ nở dưới những bức bích họa rực rỡ của thời xưa. Chén Kiến 'Cõi Sen Đôn Hoàng' mang trên mình những cánh sen mềm mại, như giữ lại một nhịp thiền thanh tịnh và tinh khôi. Một đóa sen chạm nổi nơi đáy chén, như bóng hoa lay động trên mặt nước trong; mỗi lần rót trà, quá khứ và hiện tại, tĩnh và động, cùng lắng lại trong một khoảnh khắc. Hơi trà mỏng manh bay lên, hương sen thoảng trong ánh sáng đổi thay — một khoảng lặng sáng trong cho tâm hồn. Từng cánh sen ôm lấy nhau, kể câu chuyện ngàn năm của sự thanh nhã. Chén được làm từ gốm cao cấp, mài tỉ mỉ và nung ở nhiệt độ cao, cho cảm giác mịn như ngọc. Hoa văn sen cổ hòa cùng lớp men biến ảo của lò nung; đường nét mềm mại và bề mặt lốm đốm bắt sáng. Mỗi ngụm trà để lại một vị ngọt dịu. Đây không chỉ là chén trà thường ngày, mà còn là món quà mang theo sự trân trọng và tấm lòng — dành cho đối tác, bạn bè, hay người mình quý. Đóng gói chỉn chu, chân thành trong từng chi tiết.",
    specifications: [
      { label: 'Đường kính', value: '9,2 cm' },
      { label: 'Chiều cao', value: '5,5 cm' },
      { label: 'Dung tích', value: '170 ml' },
      { label: 'Lò vi sóng', value: 'Không dùng lò vi sóng' },
    ],
  },
}

/* ------------------------------------------------------------------ */
/* Men — tên gọi Hán Việt, kèm một dòng giải thích ngắn               */
/* ------------------------------------------------------------------ */

export interface GlazeCopy {
  name: string
  tagline: string
  description: string
}

export const glazesVi: Record<string, GlazeCopy> = {
  'oil-spot': {
    name: 'Du Tích (giọt dầu)',
    tagline: 'Tinh thể sắt, nguội thật chậm',
    description:
      'Trong lúc nung, oxit sắt trong men tụ lại thành từng giọt. Nếu lò nguội đúng nhịp, những giọt ấy kết tinh thành điểm kim loại sáng, nổi lên trên nền men tối.',
  },
  iridescent: {
    name: 'Diệu Biến',
    tagline: 'Màu sắc không cần sắc tố',
    description:
      'Một lớp bề mặt cực mỏng tách ánh sáng trắng thành tím, đồng, và xanh thiên thanh. Thứ ánh lung linh khó nắm, đổi theo ánh mắt — từ xưa vẫn được xem là đỉnh cao của đồ trà.',
  },
  'hare-fur': {
    name: 'Thỏ Hào (lông thỏ)',
    tagline: 'Những vệt lửa để lại',
    description:
      'Men nhiều sắt chảy thành những sợi dọc mảnh khi tan, kéo vệt đồng và gỉ sét từ miệng xuống đế. Hướng của mỗi vệt ghi lại cách nhiệt đã đi qua lò.',
  },
  jade: {
    name: 'Men Ngọc',
    tagline: 'Xanh giữ dưới bóng',
    description:
      'Một đối trọng dịu hơn cho các lớp men sắt. Nơi những men kia lấp lánh, men này hút ánh sáng, đọng lại thành sắc ngọc dịu bên trong một chiếc chén tối.',
  },
  'tea-dust': {
    name: 'Trà Mạt',
    tagline: 'Mờ, khoáng, lặng',
    description:
      'Lớp men mờ lốm đốm ô liu và tro. Đây là bề mặt ít phản chiếu nhất trong bộ sưu tập, và cũng là bề mặt đổi chậm nhất khi được dùng.',
  },
}

/* ------------------------------------------------------------------ */
/* Nhãn loại                                                          */
/* ------------------------------------------------------------------ */

export const categoriesVi: Record<string, string> = {
  'tea-bowl': 'Chén trà',
  vessel: 'Bình, hũ',
  set: 'Bộ',
}
