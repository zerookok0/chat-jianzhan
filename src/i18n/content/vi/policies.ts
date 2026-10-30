/**
 * VIỆT HOÁ — CHÍNH SÁCH
 * ------------------------------------------------------------------
 * Bốn trang chân trang. Bản dịch giữ nguyên mọi cam kết pháp lý:
 *   · 30 ngày đổi trả vô điều kiện, miễn phí chiều gửi trả, có nhãn
 *     trả trước, không phí nhập lại kho.
 *   · Không tuyên bố đã được chứng nhận, ngang tầm bảo tàng hay thẩm định.
 *
 * Khoá là `slug` trong src/data/policies/. Cấu trúc `sections` và `id`
 * phải khớp với bản tiếng Anh để anchor và mục lục vẫn đúng.
 */

import type { Policy } from '../../../data/policies/types'

export const shippingVi: Policy = {
  slug: 'shipping',
  eyebrow: 'Chính sách',
  title: 'Giao nhận & Đổi trả',
  metaTitle: 'Giao nhận & Đổi trả | JIANZHAN',
  description:
    'Gửi chuyển phát nhanh toàn cầu có bảo hiểm, đóng thùng gỗ riêng, và chính sách đổi trả vô điều kiện trong 30 ngày với chi phí gửi trả miễn phí, nhãn trả trước và không phụ phí.',
  intro:
    'Mỗi tác phẩm đều đi bằng chuyển phát nhanh có bảo hiểm, được đóng gói bằng tay cho một chất liệu dễ vỡ. Nếu chiếc chén không hợp với bạn, hãy gửi lại trong vòng ba mươi ngày — chi phí gửi trả do chúng tôi chịu.',
  updated: '1 tháng 1, 2025',
  sections: [
    {
      id: 'dispatch',
      heading: 'Xuất hàng & thời gian chờ',
      blocks: [
        {
          kind: 'p',
          text: 'Phần lớn tác phẩm rời xưởng trong vòng ba đến năm ngày làm việc kể từ khi đặt hàng. Những tác phẩm ghi "đặt làm theo yêu cầu" được nung theo đơn và thường cần sáu đến mười tuần; trang sản phẩm luôn ghi thời gian dự kiến hiện hành trước khi bạn mua. Khi tác phẩm sẵn sàng lên đường, chúng tôi chụp ảnh nó trong thùng gỗ, cấp mã theo dõi và gửi đường dẫn ngay trong ngày.',
        },
        {
          kind: 'list',
          items: [
            'Còn hàng — xuất trong 3 đến 5 ngày làm việc.',
            'Đặt làm theo yêu cầu — nung theo đơn, thường 6 đến 10 tuần.',
            'Lưu trữ và đặt lại — sắp xếp trực tiếp với xưởng.',
          ],
        },
      ],
    },
    {
      id: 'packing',
      heading: 'Đóng gói',
      blocks: [
        {
          kind: 'p',
          text: 'Không thể bảo hiểm đồ gốm một cách tử tế bằng cách bọc nó trong bìa carton. Mỗi chén được lót trong một hộp gỗ ngô đồng vừa khít, cố định bằng đệm xốp để không xê dịch, rồi cả hộp lót ấy được đặt vào một thùng gỗ đóng riêng. Thùng được dán kín, đai lại và ghi dấu hiệu xử lý riêng. Giấy ghi chú lần nung và thẻ hướng dẫn bảo quản đi cùng tác phẩm.',
        },
        {
          kind: 'p',
          text: 'Vì thùng gỗ được đóng riêng cho từng tác phẩm, nên nó không tái sử dụng được làm thùng vận chuyển. Chúng tôi khuyên bạn giữ lại để cất đồ; chiếc hộp bên trong phù hợp để trưng bày lâu dài.',
        },
      ],
    },
    {
      id: 'delivery',
      heading: 'Giao hàng & theo dõi',
      blocks: [
        {
          kind: 'p',
          text: 'Chúng tôi gửi hàng đi toàn cầu bằng chuyển phát nhanh có bảo hiểm. Mã theo dõi được cấp khi xuất hàng và cập nhật ở mỗi lần chuyển giao, kể cả khi thông quan. Hàng được giao tới địa chỉ bạn cung cấp khi thanh toán, và phần lớn điểm đến yêu cầu ký nhận; nếu không có người, đơn vị vận chuyển sẽ giao lại chứ không để thùng hàng nằm lại mà không ai trông coi.',
        },
        {
          kind: 'list',
          items: [
            'Châu Á — thường 1 đến 3 ngày làm việc sau khi xuất hàng.',
            'Châu Âu và Bắc Mỹ — thường 3 đến 5 ngày làm việc.',
            'Các khu vực còn lại — thường 5 đến 9 ngày làm việc.',
            'Thủ tục hải quan có thể kéo dài các mốc trên; chúng tôi theo dõi từng lô hàng cho tới khi xác nhận đã giao.',
          ],
        },
      ],
    },
    {
      id: 'duties',
      heading: 'Thuế & phí nhập khẩu',
      blocks: [
        {
          kind: 'p',
          text: 'Giá được báo bằng đơn vị tiền tệ bạn chọn và đã gồm thuế cho những điểm đến chúng tôi giao trực tiếp. Ở nơi có thuế nhập khẩu địa phương và do đơn vị vận chuyển thu, khoản này được hiển thị khi thanh toán trước khi trả tiền, không bao giờ xuất hoá đơn sau. Nếu đơn vị vận chuyển đưa ra một khoản phí bạn không thấy khi thanh toán, hãy gửi chúng tôi biên lai và chúng tôi sẽ thanh toán khoản đó.',
        },
      ],
    },
    {
      id: 'damage',
      heading: 'Hư hỏng trong vận chuyển',
      blocks: [
        {
          kind: 'p',
          text: 'Mọi lô hàng đều được bảo hiểm theo đúng giá trị và xử lý như hàng dễ vỡ. Trong trường hợp hiếm hoi tác phẩm tới nơi bị hư hỏng, hãy chụp ảnh thùng ngoài, hộp trong và chính tác phẩm trước khi mở thêm, rồi gửi email cho chúng tôi trong vòng bảy mươi hai giờ kể từ khi nhận. Chúng tôi sẽ thu xếp thu hồi và hoặc thay thế tác phẩm, hoặc hoàn lại toàn bộ tiền — tuỳ bạn chọn.',
        },
        {
          kind: 'callout',
          title: 'Đây không phải là biến thiên của lò',
          text: 'Một tác phẩm hư hỏng là bị vỡ, sứt hay nứt. Một lớp men đọng không đều, đổi màu, hay mang dấu của lửa thì không phải hư hỏng — đó là ghi chép về cách tác phẩm ấy được làm ra, và không bao giờ là căn cứ để hoàn tiền hay đổi trả.',
        },
      ],
    },
    {
      id: 'returns',
      heading: 'Đổi trả trong 30 ngày, vô điều kiện',
      blocks: [
        {
          kind: 'callout',
          title: 'Quyền đổi trả của bạn, không kèm điều kiện',
          text: 'Bạn có thể trả lại bất kỳ tác phẩm nào trong vòng ba mươi ngày kể từ khi nhận, vì bất kỳ lý do gì, hoặc không vì lý do nào. Chi phí gửi trả miễn phí, chúng tôi cấp nhãn trả trước, không có phụ phí nhập lại kho, và bạn được hoàn toàn bộ giá mua.',
          items: [
            'Thời hạn đổi trả: 30 ngày dương lịch kể từ ngày nhận hàng.',
            'Chi phí gửi trả cho bạn: không — chúng tôi chịu.',
            'Nhãn trả trước: do chúng tôi cấp theo yêu cầu.',
            'Phí nhập lại kho: không có.',
            'Hoàn tiền: toàn bộ số tiền bạn đã trả, gồm cả phí gửi ban đầu và thuế.',
            'Không cần giải thích, và không kèm điều kiện nào về lý do trả hàng.',
          ],
        },
        {
          kind: 'p',
          text: 'Để bắt đầu, hãy gửi email cho chúng tôi kèm mã đơn hàng. Chúng tôi trả lời trong vòng một ngày làm việc với nhãn trả trước và hướng dẫn thu gom. Hãy đóng gói lại tác phẩm trong thùng gỗ nguyên bản nếu có thể; nếu thùng không còn, hãy cho chúng tôi biết và chúng tôi sẽ gửi vật liệu đóng gói thay thế, chi phí do chúng tôi chịu.',
        },
        {
          kind: 'p',
          text: 'Chúng tôi hoàn tiền về phương thức thanh toán ban đầu sau khi tác phẩm về tới xưởng và đã được kiểm tra xem có hư hỏng ngoài mức sử dụng thông thường hay không. Sử dụng thông thường nghĩa là những dấu của việc dùng — một chút patina, một vòng đế đã chạm mặt bàn. Tác phẩm trả về mà bị vỡ vẫn được hoàn toàn bộ nếu lỗi thuộc về cách đóng gói của chúng tôi; nếu chúng tôi cho rằng không phải vậy, chúng tôi sẽ nói thẳng, và bạn vẫn giữ quyền yêu cầu giám định từ đơn vị bảo hiểm.',
        },
        {
          kind: 'list',
          items: [
            'Việc thu gom do chúng tôi sắp xếp qua chính mạng lưới vận chuyển đã giao tác phẩm.',
            'Tiền hoàn được xử lý trong vòng năm ngày làm việc kể từ khi hàng về xưởng; ngân hàng có thể cần thêm thời gian để ghi có.',
            'Người nhận quà có thể trả lại để nhận tín dụng tại xưởng hoặc hoàn tiền cho người mua; chúng tôi sẽ hỏi bạn chọn cách nào.',
            'Đơn trả từ ngoài quốc gia gốc được xử lý như nhau; chúng tôi chịu chi phí xuất và nhập khẩu ở chiều gửi trả.',
          ],
        },
      ],
    },
    {
      id: 'exceptions',
      heading: 'Những gì không thể trả lại',
      blocks: [
        {
          kind: 'p',
          text: 'Chính sách vô điều kiện áp dụng cho mọi tác phẩm trong danh mục. Chỉ có hai ngoại lệ: những đơn đặt riêng được làm theo đúng yêu cầu bạn đưa ra và đã được bạn phê duyệt lần cuối, và những tác phẩm đã bị thay đổi vật lý — sửa, nung lại, làm lại bề mặt hay khắc chữ — sau khi giao.',
        },
        {
          kind: 'p',
          text: 'Nếu bạn không chắc một món có thuộc các trường hợp này hay không, hãy hỏi trước khi đặt. Chúng tôi thà trả lời một câu hỏi còn hơn từ chối một lần trả hàng.',
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Liên hệ',
      blocks: [
        {
          kind: 'p',
          text: 'Câu hỏi về một lô hàng, một lần trả hàng, hay một điểm đến chưa có trong danh sách đều có thể gửi trực tiếp tới xưởng. Chúng tôi đọc mọi tin nhắn và trả lời trong vòng một ngày làm việc, từ Thứ Hai đến Thứ Sáu.',
        },
      ],
    },
  ],
}

export const careVi: Policy = {
  slug: 'care',
  eyebrow: 'Chính sách',
  title: 'Bảo quản & Sử dụng',
  metaTitle: 'Bảo quản & Sử dụng | JIANZHAN',
  description:
    'Cách chăm sóc một chiếc chén Kiến nhiều sắt: chỉ rửa tay, không dùng chất mài mòn, tránh sốc nhiệt, và cách lớp men lên patina qua nhiều tháng sử dụng.',
  intro:
    'Một chiếc chén Kiến không khó giữ, nhưng nó là một món đồ khác với đồ sứ. Hai nguyên tắc gánh phần lớn: rửa bằng tay, và đừng bao giờ làm nó sốc bởi một thay đổi nhiệt đột ngột.',
  updated: '1 tháng 1, 2025',
  sections: [
    {
      id: 'before-first-use',
      heading: 'Trước lần rót đầu tiên',
      blocks: [
        {
          kind: 'p',
          text: 'Tráng chén bằng nước ấm và để yên một phút. Việc này làm hai điều: rửa trôi bụi lò ở vòng đế, và làm ấm xương gốm từ từ để lần rót trà nóng đầu tiên gặp một món đồ đã gần đúng nhiệt độ. Lau thật khô bằng khăn mềm trước khi cất.',
        },
        {
          kind: 'p',
          text: 'Không cần luộc, ngâm hay tráng kín tác phẩm. Lớp men được nung ở nhiệt độ sành và không xốp theo cách của đồ đất nung nhiệt thấp. Các nghi thức dưỡng chén là thói quen cá nhân, không phải điều bắt buộc.',
        },
      ],
    },
    {
      id: 'washing',
      heading: 'Rửa & bảo dưỡng',
      blocks: [
        {
          kind: 'callout',
          title: 'Chỉ rửa tay',
          text: 'Rửa chén bằng tay với nước ấm và khăn mềm. Tuyệt đối không dùng búi cọ mài mòn, bùi nhùi thép, hay chất tẩy mạnh.',
        },
        {
          kind: 'list',
          items: [
            'Nước ấm và khăn mềm hoặc miếng bọt biển rất mềm.',
            'Chỉ dùng nước rửa chén dịu khi thật sự cần; nước sạch thường đã đủ.',
            'Không búi cọ mài mòn, không bột mài, không thuốc tẩy, không chất tẩy axit.',
            'Tráng kỹ và lau khô bằng khăn mềm.',
            'Úp khô trên bề mặt sạch để nước không đọng lại ở đế.',
          ],
        },
        {
          kind: 'p',
          text: 'Búi cọ mài mòn và hoá chất mạnh sẽ cắt vào bề mặt men, làm mờ đi chính những tinh thể khiến chiếc chén đáng sở hữu. Một khi đã xước, vết xước ấy không thể đánh bóng đi mà không bóc mất lớp men. Vòng đế — không tráng men, nhám hơn lòng trong — là phần dễ bị cọ mòn nhất; nó gần như không cần gì ngoài một lần tráng nước.',
        },
      ],
    },
    {
      id: 'thermal',
      heading: 'Sốc nhiệt & đặc tính của lò',
      blocks: [
        {
          kind: 'p',
          text: 'Xương gốm đặc, nhiều sắt và đổi nhiệt chậm. Thay đổi nhanh tạo ra ứng suất mà xương đã nung không hấp thụ được, và một vết nứt tóc có thể mở ra chỉ trong một lần rót.',
        },
        {
          kind: 'callout',
          title: 'Đừng rót nước sôi vào chén nguội',
          text: 'Tuyệt đối không rót nước sôi trực tiếp vào chén đang lạnh như đá. Hãy làm ấm chén trước bằng một ít nước nóng, và không bao giờ chuyển một chiếc chén lạnh thẳng sang bề mặt nóng hay vào lò còn ấm.',
        },
        {
          kind: 'list',
          items: [
            'Làm ấm chén dần trước khi rót nóng; một lần tráng nước ấm là đủ.',
            'Không để chén trong tủ lạnh rồi rót trà nóng vào.',
            'Không đặt chén lạnh lên bếp, bếp điện hay lò sưởi đang nóng.',
            'Không chuyển chén nóng sang bề mặt đá hay kim loại lạnh.',
            'Để tác phẩm về nhiệt độ phòng tự nhiên trước khi rửa.',
          ],
        },
      ],
    },
    {
      id: 'patina',
      heading: 'Patina, và cách lớp men chín dần',
      blocks: [
        {
          kind: 'p',
          text: 'Men Kiến thật nhiều sắt. Qua nhiều tháng uống trà mỗi ngày, khoáng từ trà và từ nước lắng vào vi cấu trúc của men, và bề mặt dần có một độ sâu mềm, ánh. Nền tối sẫm lại; Du Tích và những sợi Thỏ Hào lên một ánh ô liu và đồng ấm; vòng trong nơi mức trà đọng lại có thể mang một vệt trà mờ mà với phần lớn người sưu tầm, đó chính là điều đáng giá.',
        },
        {
          kind: 'p',
          text: 'Đây không phải hao mòn, cũng không phải lỗi. Đó là chiếc chén tự ghi lại việc nó được dùng. Nhiều người cố ý giữ một chiếc chén cho một nhóm trà — ví dụ một loại ô long sẫm — để patina phát triển theo một hướng thay vì nhiều hướng. Một chiếc chén được giữ kỹ, dùng hằng ngày trong một năm, sẽ trông khác hẳn ngày nó rời lò, và đẹp hơn vì thế.',
        },
        {
          kind: 'callout',
          title: 'Nếu bạn muốn patina chậm lại',
          text: 'Dùng trà nhạt hơn, tráng kỹ sau mỗi lần pha, và lau thật khô. Không chất tẩy nào đảo ngược được patina, và không nên dùng chất mài để thử. Nếu thật sự không muốn một vệt trà đậm, cách duy nhất chúng tôi có thể gợi ý là dùng khăn rất mềm với một chút bột bicarbonate, thoa nhẹ và thật ngắn — nhưng chúng tôi vẫn khuyên để nguyên.',
        },
      ],
    },
    {
      id: 'appliances',
      heading: 'Thiết bị & giới hạn',
      blocks: [
        {
          kind: 'callout',
          title: 'Không dùng cho lò vi sóng, lò nướng hay máy rửa chén',
          text: 'Không đặt bất kỳ tác phẩm JIANZHAN nào vào lò vi sóng, lò nướng, hay máy rửa chén tự động. Hàm lượng khoáng và sắt cao trong xương gốm phản ứng kém với việc gia nhiệt nhanh, không đều, và với nhiệt cùng chất tẩy duy trì trong một chu trình máy.',
        },
        {
          kind: 'list',
          items: [
            'Không lò vi sóng — xương nhiều sắt nóng không đều và men có thể rạn hoặc bong.',
            'Không lò nướng, kể cả ngăn hâm nóng và chế độ ủ.',
            'Không máy rửa chén, ở mọi chế độ, kể cả chế độ dịu.',
            'Không lửa trần hay tiếp xúc trực tiếp với bếp.',
            'Không ngăn đá, và không làm lạnh chính món đồ.',
          ],
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Cất giữ & cầm nắm',
      blocks: [
        {
          kind: 'p',
          text: 'Cất chén khi đã khô, đặt xuôi hoặc úp trên bề mặt mềm, trong hộp gỗ ngô đồng nếu bạn không dùng thường xuyên. Tránh xếp các tác phẩm chạm trực tiếp vào nhau; vòng đế của chiếc này sẽ để lại dấu trên men chiếc kia. Nếu trưng bày, hãy để xa nắng trực tiếp và xa hơi nóng tập trung của đèn — cả hai đều có thể làm bạc màu men qua nhiều năm.',
        },
        {
          kind: 'p',
          text: 'Nâng chén bằng hai tay và cả hai ngón cái, đừng chỉ cầm ở miệng — miệng là phần mỏng nhất của thành chén, và một chiếc chén nóng thì trơn. Với tác phẩm đã nằm trên bàn trà cả buổi tối, hãy đặt xuống trên gỗ hoặc vải, không bao giờ trên đá.',
        },
      ],
    },
    {
      id: 'crazing',
      heading: 'Men rạn, và những gì là bình thường',
      blocks: [
        {
          kind: 'p',
          text: 'Những vết rạn mịn trong lớp men — men rạn — có thể xuất hiện theo thời gian, đặc biệt ở ranh giới không tráng men nơi đế. Chừng nào vết rạn còn nằm trong lớp men và chưa chạm tới xương đất, đó là hiện tượng bề mặt, không phải lỗi kết cấu, và không ảnh hưởng việc sử dụng.',
        },
        {
          kind: 'p',
          text: 'Một vết nứt xuyên qua thành chén, một chỗ sứt ở miệng, hay một tác phẩm gõ vào nghe đục thay vì trong là vấn đề kết cấu. Hãy ngừng dùng và liên hệ xưởng.',
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Nếu bạn không chắc',
      blocks: [
        {
          kind: 'p',
          text: 'Hãy gửi xưởng một bức ảnh và một mô tả ngắn. Chúng tôi thà trả lời một câu hỏi về một vết hay một đường rạn tóc, còn hơn để một tác phẩm bị dùng theo cách không nên.',
        },
      ],
    },
  ],
}

export const privacyVi: Policy = {
  slug: 'privacy',
  eyebrow: 'Chính sách',
  title: 'Chính sách bảo mật',
  metaTitle: 'Chính sách bảo mật | JIANZHAN',
  description:
    'Cách JIANZHAN thu thập, sử dụng và bảo vệ dữ liệu cá nhân: mã hoá SSL/TLS, xử lý thanh toán theo chuẩn PCI, chính sách cookie, và các quyền theo GDPR cùng CCPA mà bạn có thể thực hiện bất cứ lúc nào.',
  intro:
    'Chúng tôi thu thập ít dữ liệu nhất mà một đơn hàng cần, mã hoá trên đường truyền, không bao giờ bán, và xoá đi khi không còn cần. Trang này nói rõ điều đó nghĩa là gì trên thực tế.',
  updated: '1 tháng 1, 2025',
  sections: [
    {
      id: 'scope',
      heading: 'Chúng tôi là ai, và chính sách này bao gồm những gì',
      blocks: [
        {
          kind: 'p',
          text: 'Xưởng JIANZHAN ("chúng tôi") là bên kiểm soát dữ liệu đối với thông tin cá nhân thu được qua website này và qua các đơn hàng đặt tại xưởng. Chính sách này áp dụng cho website, quá trình hỏi thăm và đặt hàng, các thông báo giao nhận và mọi trao đổi với chúng tôi. Chính sách không áp dụng cho trang của bên thứ ba mà bạn có thể tới khi bấm một liên kết ngoài.',
        },
        {
          kind: 'p',
          text: 'Chúng tôi là một xưởng nhỏ, không phải một doanh nghiệp quảng cáo. Chúng tôi không lập hồ sơ người dùng, không chạy quảng cáo nhắm theo hành vi trên site này, và không bán, cho thuê hay trao đổi thông tin cá nhân. Đó là một cam kết thường trực, không phải một thiết lập hiện thời.',
        },
      ],
    },
    {
      id: 'collect',
      heading: 'Chúng tôi thu thập những gì',
      blocks: [
        {
          kind: 'p',
          text: 'Chúng tôi chỉ thu thập những gì một đơn hàng, một lần giao nhận hay một câu hỏi trực tiếp thật sự cần.',
        },
        {
          kind: 'list',
          items: [
            'Thông tin nhận dạng và liên hệ — họ tên, địa chỉ email, số điện thoại, và địa chỉ giao hàng cùng địa chỉ thanh toán bạn cung cấp.',
            'Chi tiết đơn hàng — tác phẩm đã đặt, kích thước, số lượng, giá, đơn vị tiền tệ và cách giao hàng mong muốn.',
            'Thông tin thanh toán — do đơn vị xử lý thanh toán của chúng tôi xử lý; chúng tôi chỉ nhận một xác nhận, một mã giao dịch và bốn số cuối của thẻ, không bao giờ nhận toàn bộ số thẻ.',
            'Thư từ trao đổi — nội dung những tin nhắn bạn gửi, được giữ lại để chúng tôi có thể trả lời và tra cứu về sau.',
            'Dữ liệu kỹ thuật — địa chỉ IP, loại trình duyệt, loại thiết bị, trang giới thiệu và các trang đã xem, thu qua nhật ký máy chủ và phân tích giới hạn.',
            'Lựa chọn nhận tin — việc bạn có muốn nghe từ xưởng hay không, và về chủ đề nào.',
          ],
        },
        {
          kind: 'callout',
          title: 'Những gì chúng tôi không bao giờ thu thập',
          text: 'Chúng tôi không bao giờ hỏi toàn bộ số thẻ thanh toán, mã CVV hay thông tin ngân hàng trên site này. Nếu có một tin nhắn nào đó yêu cầu những thứ ấy, tin nhắn đó không phải từ chúng tôi — hãy báo ngay cho xưởng.',
        },
      ],
    },
    {
      id: 'why',
      heading: 'Vì sao chúng tôi dùng, và dựa trên căn cứ pháp lý nào',
      blocks: [
        {
          kind: 'p',
          text: 'Theo Quy định chung về bảo vệ dữ liệu của Anh và EU, chúng tôi dựa trên một số ít căn cứ hợp pháp, và nêu rõ ở đây thay vì để bạn tự suy ra.',
        },
        {
          kind: 'list',
          items: [
            'Hợp đồng — để thu tiền, đóng gói, gửi và giao đơn hàng, cùng xử lý đổi trả và hoàn tiền.',
            'Nghĩa vụ pháp lý — để lưu hồ sơ thuế, kế toán và hải quan trong những thời hạn luật quy định.',
            'Lợi ích chính đáng — để trả lời câu hỏi, phòng chống gian lận, bảo mật site và hiểu được một cách tổng hợp những trang nào được đọc.',
            'Sự đồng ý — để gửi thư của xưởng hoặc cập nhật tạp chí. Sự đồng ý là tự nguyện đăng ký, không bao giờ gộp vào một đơn hàng, và rút lại dễ như khi đưa ra.',
          ],
        },
        {
          kind: 'p',
          text: 'Chúng tôi không dùng thông tin cá nhân cho việc ra quyết định tự động có hệ quả pháp lý, và không dùng để huấn luyện mô hình của bên thứ ba.',
        },
      ],
    },
    {
      id: 'sharing',
      heading: 'Chúng tôi chia sẻ với ai',
      blocks: [
        {
          kind: 'p',
          text: 'Thông tin cá nhân chỉ được chia sẻ với những bên xử lý cần thiết để hoàn thành điều bạn yêu cầu, và chỉ trong phạm vi mỗi bên cần. Mỗi bên đều bị ràng buộc bằng hợp đồng chỉ được dùng thông tin cho đúng mục đích đó và bảo vệ theo chuẩn tương đương.',
        },
        {
          kind: 'list',
          items: [
            'Đơn vị xử lý thanh toán — để uỷ quyền và tất toán giao dịch. Dữ liệu thẻ được xử lý hoàn toàn trong môi trường đạt chuẩn PCI-DSS của họ.',
            'Đơn vị vận chuyển và đại lý giao nhận — họ tên, địa chỉ, số điện thoại và giá trị khai báo, để thùng hàng được giao và bảo hiểm.',
            'Đại lý hải quan — các chi tiết hoá đơn thương mại mà luật nhập khẩu yêu cầu.',
            'Nhà cung cấp dịch vụ lưu trữ, email và phân tích — hoạt động theo thoả thuận xử lý dữ liệu, quyền truy cập giới hạn đúng chức năng của họ.',
            'Cố vấn chuyên môn và cơ quan có thẩm quyền — chỉ khi pháp luật buộc phải công bố, hoặc khi cần để xác lập hay bảo vệ một yêu cầu pháp lý.',
          ],
        },
        {
          kind: 'p',
          text: 'Chúng tôi không bán thông tin cá nhân, không chia sẻ cho quảng cáo hành vi xuyên ngữ cảnh, và không tiết lộ cho các nhà môi giới dữ liệu. Nếu điều đó thay đổi, trang này sẽ nói rõ trước khi có hiệu lực, và bạn sẽ được đề nghị chọn không tham gia trước tiên.',
        },
      ],
    },
    {
      id: 'security',
      heading: 'Cách chúng tôi bảo vệ',
      blocks: [
        {
          kind: 'list',
          items: [
            'Mọi lưu lượng vào và ra khỏi site đều được mã hoá bằng SSL/TLS (HTTPS). Các yêu cầu không mã hoá sẽ được chuyển hướng.',
            'Trang thanh toán được phục vụ qua HTTPS bởi đơn vị đạt chuẩn PCI-DSS cấp 1; dữ liệu thẻ không bao giờ tới máy chủ của chúng tôi.',
            'Quyền truy cập dữ liệu đơn hàng chỉ dành cho nhân sự xưởng cần dùng để hoàn tất đơn, bảo vệ bằng tài khoản riêng và xác thực đa yếu tố.',
            'Máy chủ được cập nhật bản vá, có tường lửa và sao lưu; bản sao lưu được mã hoá và lưu theo lịch cuốn chiếu.',
            'Chúng tôi chỉ giữ dữ liệu cần thiết, và xem xét thời hạn lưu mỗi năm thay vì mặc định tích thêm.',
          ],
        },
        {
          kind: 'p',
          text: 'Không hệ thống nào an toàn tuyệt đối. Nếu xảy ra sự cố ảnh hưởng tới thông tin cá nhân của bạn, chúng tôi sẽ thông báo cho cơ quan giám sát liên quan trong vòng bảy mươi hai giờ kể từ khi phát hiện, và thông báo trực tiếp cho bạn không chậm trễ nếu sự cố có khả năng gây rủi ro cao cho quyền của bạn.',
        },
      ],
    },
    {
      id: 'cookies',
      heading: 'Cookie và công nghệ tương tự',
      blocks: [
        {
          kind: 'p',
          text: 'Cookie là một tệp văn bản nhỏ mà site lưu trong trình duyệt của bạn. Chúng tôi dùng tiết chế, ở ba nhóm.',
        },
        {
          kind: 'list',
          items: [
            'Thiết yếu — giữ giỏ hàng và vị trí của bạn trong bước thanh toán. Không thể tắt, vì cửa hàng không chạy được nếu thiếu.',
            'Tuỳ chọn — ghi nhớ đơn vị tiền tệ hay một thông báo đã đóng. Chỉ đặt khi bạn đưa ra lựa chọn.',
            'Phân tích — số lượt xem trang tổng hợp, ẩn danh, địa chỉ IP được rút gọn. Dùng để biết trang nào được đọc, không bao giờ để theo bạn sang site khác.',
          ],
        },
        {
          kind: 'p',
          text: 'Chúng tôi không đặt cookie quảng cáo hay theo dõi mạng xã hội trên site này. Bạn có thể chặn hoặc xoá cookie qua trình duyệt bất cứ lúc nào; chặn nhóm thiết yếu sẽ khiến giỏ hàng ngừng hoạt động. Ở nơi cần sự đồng ý — với phân tích, tại Anh và EU — chúng tôi hỏi trước khi đặt bất kỳ cookie nào như vậy, và từ chối không làm bạn mất gì ngoài những con số thống kê tổng hợp.',
        },
      ],
    },
    {
      id: 'transfers',
      heading: 'Chuyển dữ liệu quốc tế',
      blocks: [
        {
          kind: 'p',
          text: 'Chúng tôi gửi hàng đi toàn cầu, nên dữ liệu đơn hàng tất yếu phải qua biên giới. Việc chuyển dữ liệu ra ngoài Anh, EEA hay khu vực bạn cư trú chỉ được thực hiện theo một cơ chế đã được chấp thuận — Phụ lục chuyển dữ liệu quốc tế của Anh, Điều khoản hợp đồng chuẩn của EU, hoặc một quyết định đầy đủ — và chỉ tới những bên đã đồng ý các biện pháp bảo vệ tương ứng.',
        },
        {
          kind: 'p',
          text: 'Nhãn vận chuyển và hoá đơn hải quan sẽ hiển thị tên và địa chỉ người nhận cho đơn vị vận chuyển và, khi luật yêu cầu, cho hải quan. Việc tiết lộ đó là không thể tránh khi giao một món đồ vật lý qua biên giới.',
        },
      ],
    },
    {
      id: 'retention',
      heading: 'Chúng tôi lưu bao lâu',
      blocks: [
        {
          kind: 'list',
          items: [
            'Hồ sơ đơn hàng và giao dịch — giữ trong thời hạn luật thuế và luật công ty quy định, thường sáu đến mười năm.',
            'Câu hỏi và thư từ — giữ tối đa hai năm sau khi cuộc trao đổi kết thúc, sau đó xoá.',
            'Hồ sơ đồng ý nhận tin — giữ tới khi bạn rút lại sự đồng ý, cộng thêm một ghi nhận ngắn về chính lần rút lại đó.',
            'Nhật ký máy chủ và phân tích — giữ ở dạng nhận dạng được tối đa mười bốn tháng.',
            'Nội dung giỏ hàng — lưu trong chính trình duyệt của bạn, không trên máy chủ chúng tôi, và được xoá khi hoàn tất hoặc hết hạn.',
          ],
        },
        {
          kind: 'p',
          text: 'Khi hết thời hạn lưu, hồ sơ sẽ được xoá hoặc ẩn danh hoá không thể đảo ngược. Chúng tôi không giữ dữ liệu vô thời hạn "để phòng khi cần".',
        },
      ],
    },
    {
      id: 'rights',
      heading: 'Quyền của bạn',
      blocks: [
        {
          kind: 'p',
          text: 'Dù bạn sống ở đâu, chúng tôi dành cho bạn các quyền dưới đây miễn phí. Chúng tôi sẽ phản hồi trong vòng một tháng kể từ một yêu cầu đã được xác minh.',
        },
        {
          kind: 'list',
          items: [
            'Truy cập — một bản sao thông tin cá nhân chúng tôi đang giữ về bạn.',
            'Chỉnh sửa — sửa lại mọi thông tin không chính xác hoặc còn thiếu.',
            'Xoá — xoá dữ liệu mà chúng tôi không còn căn cứ pháp lý để tiếp tục giữ.',
            'Hạn chế — tạm dừng xử lý trong lúc một tranh chấp đang được giải quyết.',
            'Chuyển dữ liệu — một bản sao dạng đọc được bằng máy của dữ liệu bạn đã cung cấp, để chuyển sang nhà cung cấp khác.',
            'Phản đối — quyền phản đối việc xử lý dựa trên lợi ích chính đáng của chúng tôi, kể cả mọi hình thức tiếp thị trực tiếp, vào bất cứ lúc nào.',
            'Rút lại sự đồng ý — với mọi điều bạn từng đồng ý, có hiệu lực ngay và không bị thiệt hại gì.',
          ],
        },
        {
          kind: 'p',
          text: 'Cư dân California còn có quyền biết các nhóm thông tin cá nhân đã thu thập và tiết lộ, quyền yêu cầu xoá, quyền sửa thông tin không chính xác, và quyền chọn không tham gia việc bán hoặc chia sẻ thông tin cá nhân. Chúng tôi không bán và không chia sẻ thông tin cá nhân theo đúng định nghĩa của CCPA, nên không có gì để chọn không tham gia — nhưng quyền đó vẫn tồn tại, và bạn có thể chỉ định một đại diện được uỷ quyền thực hiện thay. Chúng tôi sẽ không phân biệt đối xử với bạn vì đã thực hiện bất kỳ quyền nào nêu ở đây.',
        },
        {
          kind: 'p',
          text: 'Để thực hiện một quyền, hãy viết cho xưởng kèm đủ chi tiết để xác định đơn hàng của bạn. Chúng tôi có thể yêu cầu xác minh trước khi hành động, và sẽ nói rõ nếu không thể đáp ứng cùng lý do.',
        },
      ],
    },
    {
      id: 'children',
      heading: 'Trẻ em',
      blocks: [
        {
          kind: 'p',
          text: 'Site này dành cho người lớn. Chúng tôi không cố ý thu thập thông tin cá nhân của bất kỳ ai dưới mười sáu tuổi. Nếu bạn cho rằng một đứa trẻ đã cung cấp thông tin cho chúng tôi, hãy liên hệ xưởng và chúng tôi sẽ xoá ngay.',
        },
      ],
    },
    {
      id: 'changes',
      heading: 'Thay đổi chính sách này',
      blocks: [
        {
          kind: 'p',
          text: 'Khi thay đổi chính sách, chúng tôi cập nhật ngày ở đầu trang. Nếu một thay đổi ảnh hưởng đáng kể tới cách chúng tôi dùng thông tin đã thu thập, chúng tôi sẽ thông báo cho khách hàng bị ảnh hưởng qua email trước khi thay đổi có hiệu lực. Việc tiếp tục dùng site sau khi cập nhật được hiểu là chấp nhận chính sách đã sửa.',
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Liên hệ & khiếu nại',
      blocks: [
        {
          kind: 'p',
          text: 'Câu hỏi, yêu cầu và khiếu nại về quyền riêng tư có thể gửi trực tiếp tới xưởng; chúng tôi sẽ xác nhận trong vòng hai ngày làm việc. Nếu chưa hài lòng với phản hồi của chúng tôi, bạn có thể khiếu nại lên cơ quan giám sát tại nơi bạn cư trú — tại Anh là Văn phòng Uỷ viên Thông tin; tại EU là cơ quan của quốc gia thành viên bạn ở; tại California là Bộ trưởng Tư pháp.',
        },
      ],
    },
  ],
}

export const termsVi: Policy = {
  slug: 'terms',
  eyebrow: 'Chính sách',
  title: 'Điều khoản dịch vụ',
  metaTitle: 'Điều khoản dịch vụ | JIANZHAN',
  description:
    'Các điều khoản điều chỉnh việc dùng website JIANZHAN và việc mua tác phẩm của xưởng: quyền sở hữu trí tuệ, lưu ý về thủ công và biến thiên của lò, việc chấp nhận đơn hàng, trách nhiệm và luật áp dụng.',
  intro:
    'Những điều khoản này điều chỉnh việc bạn dùng website và mọi đơn hàng bạn đặt tại xưởng. Chúng được viết để đọc, không phải để chịu đựng. Nếu có điều gì chưa rõ, hãy hỏi trước khi đặt.',
  updated: '1 tháng 1, 2025',
  sections: [
    {
      id: 'agreement',
      heading: 'Chấp nhận các điều khoản',
      blocks: [
        {
          kind: 'p',
          text: 'Khi duyệt website này hoặc đặt hàng, bạn đồng ý với các điều khoản này và với Chính sách bảo mật của chúng tôi. Nếu không chấp nhận, xin đừng dùng site. Không điều nào ở đây ảnh hưởng tới các quyền bạn có theo luật tiêu dùng bắt buộc tại quốc gia bạn cư trú; khi các điều khoản này xung đột với những quyền đó, quyền của bạn được ưu tiên.',
        },
        {
          kind: 'p',
          text: 'Site này do Xưởng JIANZHAN vận hành. Bạn phải từ mười tám tuổi trở lên, hoặc đủ tuổi thành niên tại nơi bạn sống, mới có thể đặt hàng.',
        },
      ],
    },
    {
      id: 'ip',
      heading: 'Quyền sở hữu trí tuệ',
      blocks: [
        {
          kind: 'p',
          text: 'Toàn bộ nội dung trên website này — ảnh, video, bài viết, tên và dấu hiệu JIANZHAN, bố cục, kiểu chữ và mã nguồn — thuộc sở hữu của Xưởng JIANZHAN hoặc được xưởng cấp phép, và được bảo vệ bởi luật bản quyền, nhãn hiệu và kiểu dáng.',
        },
        {
          kind: 'list',
          items: [
            'Bạn có thể xem, tải và in các trang cho mục đích cá nhân, phi thương mại.',
            'Bạn có thể chia sẻ liên kết tới bất kỳ trang nào một cách tự do.',
            'Bạn không được sao chép, tái bản, bán, thu thập tự động hay phân phối lại phần lớn nội dung của site, hoặc dùng nội dung ấy để huấn luyện mô hình máy học, nếu không có văn bản cho phép.',
            'Bạn không được dùng tên, dấu hiệu hay ảnh của chúng tôi để ngụ ý một sự bảo trợ, hợp tác hay xuất xứ chưa được chấp thuận bằng văn bản.',
            'Hình vẽ, sơ đồ và ảnh của từng tác phẩm vẫn thuộc xưởng; việc mua một tác phẩm chuyển giao món đồ, không chuyển giao quyền tác giả đối với hình ảnh của nó.',
          ],
        },
        {
          kind: 'p',
          text: 'Bản thân các tác phẩm gốm là đồ vật thủ công, không phải kiểu dáng đã đăng ký, và chúng tôi không tuyên bố độc quyền về dáng hay men đối với truyền thống thời Tống mà cách làm này bắt nguồn từ đó.',
        },
      ],
    },
    {
      id: 'craft',
      heading: 'Thủ công và biến thiên của lò',
      blocks: [
        {
          kind: 'callout',
          title: 'Mỗi tác phẩm là duy nhất — và đó chính là điều đáng nói',
          text: 'Tác phẩm của chúng tôi làm bằng tay và nung củi. Men đọng, màu dịch, mật độ Du Tích, sợi Thỏ Hào, những lỗ kim nhỏ, vết lò, miệng không đều và sai lệch về trọng lượng hay kích thước đều là kết quả được chờ đợi của quá trình, không phải lỗi. Tác phẩm bạn nhận sẽ giống — nhưng không hoàn toàn trùng khớp — với tác phẩm trong ảnh.',
        },
        {
          kind: 'p',
          text: 'Ảnh được chụp dưới ánh sáng xưởng có kiểm soát và màu có thể hiển thị khác nhau trên các màn hình. Chúng tôi không chỉnh sửa lớp men để nó trông đều hơn thực tế. Khi một tác phẩm có vết lò rõ rệt, chúng tôi cố gắng cho thấy điều đó.',
        },
        {
          kind: 'p',
          text: 'Vì biến thiên là cố hữu, nó không phải căn cứ để trả hàng hay hoàn tiền với lý do "không như mô tả". Tuy vậy, nó cũng không cản trở việc trả hàng: chính sách đổi trả vô điều kiện trong ba mươi ngày áp dụng cho mọi tác phẩm, vì bất kỳ lý do gì hoặc không vì lý do nào, miễn phí gửi trả và không phụ phí. Biến thiên của lò không phải hư hỏng; chỉ cần muốn một chiếc chén khác là đủ lý do.',
        },
        {
          kind: 'p',
          text: 'Chúng tôi không tuyên bố bất kỳ tác phẩm nào là ngang tầm bảo tàng, đã được chứng nhận, đã được thẩm định hay có nguồn gốc cổ vật đã kiểm chứng. Mạch nguồn chúng tôi nhận là một cách làm — đất nhiều sắt, lò rồng và lửa củi của các lò Kiến thời Tống ở Phúc Kiến — không phải một danh hiệu. Mọi tuyên bố về xuất xứ đều đi kèm tác phẩm bằng văn bản; điều gì không nêu bằng văn bản thì không được tuyên bố.',
        },
      ],
    },
    {
      id: 'orders',
      heading: 'Đơn hàng và việc chấp nhận',
      blocks: [
        {
          kind: 'p',
          text: 'Đơn hàng của bạn là một đề nghị mua. Hợp đồng chỉ được hình thành khi chúng tôi gửi xác nhận xuất hàng bằng văn bản. Trước đó, chúng tôi có thể từ chối một đơn — ví dụ khi tác phẩm đã được bán, khi có lỗi giá hay mô tả rõ ràng, khi không xác minh được tồn kho, hoặc khi chúng tôi nghi ngờ gian lận. Nếu từ chối sau khi đã thanh toán, chúng tôi hoàn lại toàn bộ ngay lập tức.',
        },
        {
          kind: 'list',
          items: [
            'Giá hiển thị bằng đơn vị tiền tệ chọn khi thanh toán và có thể thay đổi mà không báo trước; giá tại thời điểm đặt hàng là giá áp dụng.',
            'Thuế và phí nhập khẩu được hiển thị khi thanh toán ở nơi chúng tôi thu, ngoài ra thuộc trách nhiệm người nhận.',
            'Tác phẩm đặt làm bắt đầu sản xuất khi đơn được chấp nhận và tuân theo thời gian chờ ghi trên trang sản phẩm.',
            'Chúng tôi có thể giới hạn số lượng trong một đơn hoặc cho mỗi khách khi một mẻ nung chỉ cho ra rất ít tác phẩm.',
            'Khi một tác phẩm độc bản bị bán hai lần do nhầm lẫn, đơn được chấp nhận trước sẽ có hiệu lực và đơn sau được hoàn toàn bộ.',
          ],
        },
      ],
    },
    {
      id: 'payment',
      heading: 'Giá, thanh toán và quyền sở hữu',
      blocks: [
        {
          kind: 'p',
          text: 'Thanh toán được thực hiện tại thời điểm đặt hàng qua đơn vị xử lý thanh toán của chúng tôi. Chi tiết thẻ được xử lý hoàn toàn trong môi trường đạt chuẩn PCI-DSS của họ và không bao giờ tới máy chủ của chúng tôi. Mọi khoản tiền được trả bằng đơn vị tiền tệ hiển thị khi thanh toán; ngân hàng của bạn có thể áp phí chuyển đổi hoặc phí giao dịch nước ngoài mà chúng tôi không kiểm soát được.',
        },
        {
          kind: 'p',
          text: 'Quyền sở hữu tác phẩm chuyển cho bạn khi đã thanh toán đủ và đã giao hàng. Rủi ro chuyển khi giao hàng, hoặc khi đơn vị vận chuyển bạn chỉ định nhận hàng trong trường hợp bạn tự sắp xếp vận chuyển. Cho tới khi rủi ro chuyển, lô hàng được bảo hiểm theo đúng giá trị và xử lý như hàng dễ vỡ.',
        },
      ],
    },
    {
      id: 'shipping',
      heading: 'Giao nhận, đổi trả và huỷ đơn',
      blocks: [
        {
          kind: 'p',
          text: 'Việc giao nhận, khung thời gian, quy trình xử lý hư hỏng và toàn bộ chính sách đổi trả vô điều kiện trong ba mươi ngày — miễn phí gửi trả, có nhãn trả trước, không phụ phí nhập lại kho, hoàn toàn bộ tiền — được nêu trong chính sách Giao nhận & Đổi trả, và chính sách đó là một phần của các điều khoản này.',
        },
        {
          kind: 'p',
          text: 'Nếu bạn là người tiêu dùng tại Anh hoặc EU, bạn còn có quyền huỷ hợp đồng từ xa theo luật trong vòng mười bốn ngày kể từ khi nhận hàng, tách biệt và bổ sung cho cam kết ba mươi ngày của chúng tôi. Bạn không cần nêu lý do, và chúng tôi không thu phí khi bạn thực hiện quyền này. Khi hai bên chồng lấn, thời hạn dài hơn và rộng hơn sẽ áp dụng.',
        },
      ],
    },
    {
      id: 'use',
      heading: 'Sử dụng site hợp lý',
      blocks: [
        {
          kind: 'p',
          text: 'Bạn đồng ý không can thiệp vào hoạt động hay bảo mật của site, không cố truy cập trái phép bất kỳ tài khoản hay hệ thống nào, không đưa mã độc vào, không tạo tải tự động lên máy chủ vượt quá mức duyệt thông thường, và không dùng site theo cách trái pháp luật hay gây hiểu nhầm.',
        },
        {
          kind: 'p',
          text: 'Chúng tôi có thể tạm ngưng hoặc rút quyền truy cập site, toàn phần hay một phần, để bảo trì hoặc khi có lý do hợp lý cho rằng các điều khoản này đã bị vi phạm. Chúng tôi sẽ không dùng quyền đó để né tránh một đơn hàng còn tồn hay nghĩa vụ hoàn tiền.',
        },
      ],
    },
    {
      id: 'availability',
      heading: 'Tính sẵn có và độ chính xác',
      blocks: [
        {
          kind: 'p',
          text: 'Chúng tôi cẩn thận với từng mô tả, kích thước và ảnh, nhưng site là một danh mục và sai sót vẫn xảy ra. Nếu một lỗi giá hay lỗi mô tả rõ ràng ảnh hưởng tới đơn của bạn, chúng tôi sẽ liên hệ trước khi xuất hàng và đề nghị điều kiện đã sửa, hoặc huỷ và hoàn toàn bộ — tuỳ bạn chọn.',
        },
        {
          kind: 'p',
          text: 'Chúng tôi không bảo đảm site luôn sẵn có liên tục. Việc truy cập có thể bị tạm ngưng để sửa chữa, bảo trì hoặc vì lý do ngoài tầm kiểm soát của chúng tôi.',
        },
      ],
    },
    {
      id: 'liability',
      heading: 'Giới hạn trách nhiệm',
      blocks: [
        {
          kind: 'p',
          text: 'Không điều nào trong các điều khoản này giới hạn hay loại trừ trách nhiệm của chúng tôi đối với thiệt hại về tính mạng hay thương tích do sơ suất của chúng tôi, đối với gian lận hay trình bày gian dối, đối với vi phạm quyền tiêu dùng theo luật của bạn, hoặc đối với bất kỳ trách nhiệm nào khác không thể giới hạn hợp pháp.',
        },
        {
          kind: 'p',
          text: 'Trên cơ sở đó, và trong phạm vi pháp luật cho phép tối đa: chúng tôi không chịu trách nhiệm về thiệt hại gián tiếp hay hệ quả, mất lợi nhuận, mất cơ hội kinh doanh, mất khoản tiết kiệm dự kiến hay mất dữ liệu; và tổng trách nhiệm của chúng tôi phát sinh từ một đơn hàng được giới hạn ở số tiền bạn đã trả cho đơn hàng đó.',
        },
        {
          kind: 'p',
          text: 'Chúng tôi không chịu trách nhiệm về mất mát hay hư hỏng phát sinh từ việc dùng tác phẩm trái với hướng dẫn Bảo quản & Sử dụng — ví dụ sốc nhiệt do rót nước sôi vào chén đã làm lạnh, hay hư hỏng do lò vi sóng, lò nướng hoặc máy rửa chén — cũng không chịu trách nhiệm về hao mòn thông thường, patina hay men rạn hình thành trong lớp men qua quá trình dùng bình thường.',
        },
      ],
    },
    {
      id: 'third-party',
      heading: 'Liên kết và dịch vụ bên thứ ba',
      blocks: [
        {
          kind: 'p',
          text: 'Site có thể liên kết tới các trang bên ngoài, gồm trang của đơn vị xử lý thanh toán và trang theo dõi vận đơn. Những trang đó không thuộc quyền kiểm soát của chúng tôi và chúng tôi không chịu trách nhiệm về nội dung, điều khoản hay cách xử lý dữ liệu của họ. Một liên kết không phải là sự bảo trợ.',
        },
      ],
    },
    {
      id: 'law',
      heading: 'Luật áp dụng và tranh chấp',
      blocks: [
        {
          kind: 'p',
          text: 'Các điều khoản này được điều chỉnh bởi pháp luật Cộng hoà Nhân dân Trung Hoa, và toà án tỉnh Phúc Kiến có thẩm quyền không độc quyền. Không điều nào trong khoản này tước đi của người tiêu dùng sự bảo vệ theo luật bắt buộc của quốc gia nơi họ thường trú, hay quyền khởi kiện tại toà án của quốc gia đó.',
        },
        {
          kind: 'p',
          text: 'Trước khi tiến hành bất kỳ bước chính thức nào, xin hãy viết cho xưởng. Phần lớn tranh chấp về một món đồ thủ công được giải quyết bằng một bức ảnh và một cuộc trò chuyện thẳng thắn, và chúng tôi muốn bắt đầu từ đó.',
        },
      ],
    },
    {
      id: 'general',
      heading: 'Điều khoản chung',
      blocks: [
        {
          kind: 'list',
          items: [
            'Nếu một điều khoản bị xem là không thể thi hành, các điều còn lại vẫn có hiệu lực.',
            'Việc không thi hành một điều khoản không có nghĩa là từ bỏ điều khoản đó.',
            'Chúng tôi có thể chuyển giao quyền và nghĩa vụ của mình; bạn không thể nếu không có sự chấp thuận bằng văn bản của chúng tôi.',
            'Các điều khoản này, Chính sách bảo mật và chính sách Giao nhận & Đổi trả hợp thành toàn bộ thoả thuận giữa hai bên.',
            'Chúng tôi có thể sửa đổi các điều khoản này; phiên bản có hiệu lực là phiên bản được công bố khi đơn hàng của bạn được chấp nhận, và ngày ở đầu trang cho biết lần thay đổi gần nhất.',
          ],
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Liên hệ',
      blocks: [
        {
          kind: 'p',
          text: 'Câu hỏi về các điều khoản này, về một đơn hàng, hay về một tác phẩm đang trong tay bạn đều có thể gửi trực tiếp tới xưởng. Chúng tôi đọc mọi tin nhắn và trả lời trong vòng một ngày làm việc, từ Thứ Hai đến Thứ Sáu.',
        },
      ],
    },
  ],
}

/** Bốn trang chính sách theo slug, để lớp dữ liệu chọn theo ngôn ngữ. */
export const policiesVi: Record<string, Policy> = {
  shipping: shippingVi,
  care: careVi,
  privacy: privacyVi,
  terms: termsVi,
}
