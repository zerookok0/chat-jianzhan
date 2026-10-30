/**
 * TIẾNG VIỆT
 * ------------------------------------------------------------------
 * Bản dịch được viết lại cho đúng nhịp đọc tiếng Việt, không dịch từng
 * chữ. Câu ngắn, chừa khoảng lặng, tránh văn phong quảng cáo.
 *
 * Thuật ngữ cố định:
 *   Chén Kiến (Kiến Trản) — cách gọi chính
 *   thưởng trà · nghệ nhân · nung củi · men · lò · men rạn · độc bản
 *   Thỏ Hào (lông thỏ) · Du Tích (giọt dầu) · Chá Cô Ban · Diệu Biến
 *
 * Mọi key ở đây phải tồn tại trong `en.ts`; thiếu key là lỗi build.
 */

import type { Dict } from '../types'

const vi: Dict = {
  /* ---------------------------------------------------------------- */
  /* Shared                                                            */
  /* ---------------------------------------------------------------- */
  'common.skip': 'Tới nội dung chính',
  'common.home': 'Trang chủ',
  'common.collection': 'Bộ sưu tập',
  'common.allPieces': 'Tất cả tác phẩm',
  'common.allEntries': 'Tất cả bài viết',
  'common.readEntry': 'Đọc bài',
  'common.breadcrumb': 'Đường dẫn',

  /* ---------------------------------------------------------------- */
  /* Brand                                                             */
  /* ---------------------------------------------------------------- */
  'site.tagline': 'Đất trong tay bạn, vũ trụ trong lớp men.',
  'site.studio': 'Kiến Dương, Nam Bình, Phúc Kiến, Trung Quốc',
  'site.hours': 'Thứ Hai – Thứ Sáu, 09:00 – 18:00 (GMT+8)',

  /* ---------------------------------------------------------------- */
  /* Navigation                                                        */
  /* ---------------------------------------------------------------- */
  'nav.home': 'Trang chủ',
  'nav.collection': 'Bộ sưu tập',
  'nav.craft': 'Nghề làm',
  'nav.journal': 'Tạp chí',
  'nav.about': 'Về chúng tôi',
  'nav.primaryAria': 'Điều hướng chính',
  'nav.mobileAria': 'Điều hướng di động',

  /* ---------------------------------------------------------------- */
  /* Header & menu                                                     */
  /* ---------------------------------------------------------------- */
  'header.brandHome': 'trang chủ',
  'header.searchAria': 'Tìm trong bộ sưu tập',
  'header.cartAriaEmpty': 'Mở giỏ hàng, đang trống',
  'header.cartAria': 'Mở giỏ hàng, {count} món',
  'header.openMenu': 'Mở menu',
  'header.closeMenu': 'Đóng menu',

  /* ---------------------------------------------------------------- */
  /* Footer                                                            */
  /* ---------------------------------------------------------------- */
  'footer.navAria': 'Chân trang',
  'footer.explore': 'Khám phá',
  'footer.studio': 'Xưởng',
  'footer.policies': 'Chính sách',
  'footer.rights': '© {year} {name}. Bảo lưu mọi quyền.',
  'footer.socialAria': 'Mạng xã hội',
  'footer.note':
    'Gốm trà phong cách Tống, làm hoàn toàn bằng tay. Nung theo từng mẻ nhỏ tại Kiến Dương, Phúc Kiến.',

  /* Policy link labels */
  'policy.shipping': 'Giao nhận & Đổi trả',
  'policy.care': 'Bảo quản & Sử dụng',
  'policy.privacy': 'Chính sách bảo mật',
  'policy.terms': 'Điều khoản dịch vụ',

  /* ---------------------------------------------------------------- */
  /* Language switcher                                                 */
  /* ---------------------------------------------------------------- */
  'lang.switcherAria': 'Ngôn ngữ — hiện tại: {language}',
  'lang.menuAria': 'Chọn ngôn ngữ',
  'lang.groupAria': 'Ngôn ngữ hiển thị',

  /* ---------------------------------------------------------------- */
  /* Home                                                              */
  /* ---------------------------------------------------------------- */
  'home.kicker': 'Chén Kiến · Mạch Tống',
  'home.title1': 'Cả vũ trụ',
  'home.title2': 'trong một chén',
  'home.line': 'Nơi lửa là người duy nhất cầm bút.',
  'home.sub':
    'Đất nhiều sắt, lửa thông, và thời gian lắng lại. Một mạch Tống lưu giữ những chòm sao thoáng qua trong nền men tối.',
  'home.cta': 'Xem bộ sưu tập',
  'home.scroll': 'Cuộn xuống',
  'home.heroAlt': 'Chén trà Kiến men tối hứng một vệt sáng ấm trên nền đá',

  'home.soulEyebrow': 'Hồn cốt Kiến Trản',
  'home.soulTitle1': 'Sinh từ lửa,',
  'home.soulTitle2': 'thành bởi thời gian',
  'home.soulLede':
    'Chén Kiến (Kiến Trản) không chỉ là một chén trà. Đó là cuộc gặp giữa đất và những tình cờ của trời. Bàn tay nặn, lò rồng xưa nung, một thứ đất vào lò mà vạn sắc màu bước ra. Lửa quyết điều gì, nghệ nhân nhận điều ấy.',
  'home.soulCta': 'Xem thêm',
  'home.soulAlt': 'Cận cảnh bề mặt men tối bắt lấy ánh sáng ấm',
  'home.soulFigNum': 'Hình 01',
  'home.soulFigCaption': 'Chi tiết men — tinh thể sắt trên nền đen',

  'home.collEyebrow': 'Bộ sưu tập',
  'home.collTitle': 'Tác phẩm chọn lọc',
  'home.collNote':
    'Mỗi chiếc chén là một lần duy nhất — lớp men sinh ra từ khoảnh khắc nhiệt, gió và tro khoáng cùng gặp nhau, thứ bàn tay người không thể lặp lại.',

  'home.craftEyebrow': 'Nghề thủ công truyền đời',
  'home.craftTitle': 'Được truyền qua nhiều thế hệ',
  'home.craftBody':
    'Nghệ nhân của chúng tôi giữ cách làm thời Tống: nung khoáng thô trong lò củi. Không có giai đoạn nào bị rút ngắn — tạo hình, sấy, tráng men và những ngày nằm trong lửa đều phó mặc cho nhịp chậm của lò.',
  'home.craftCta': 'Tìm hiểu thêm',
  'home.craftAlt': 'Đôi bàn tay nặn chiếc chén trên bàn xoay trong xưởng tối',

  'home.giftEyebrow': 'Sưu tầm & Trao tặng',
  'home.giftTitle': 'Một món đồ lặng lẽ, giữ được cả đời',
  'home.giftBody':
    'Mỗi tác phẩm được gói trong vải lanh, kèm một tờ ghi chú về lần nung — năm, chiếc lò và điều kiện ra đời. Hợp với kệ của người sưu tầm, mặt bàn trà, hay một món quà sống lâu hơn dịp tặng.',
  'home.giftLi1': 'Hộp trình bày bọc vải lanh',
  'home.giftLi2': 'Giấy ghi chú nung có chữ ký xưởng',
  'home.giftLi3': 'Thẻ hướng dẫn dùng và vệ sinh',
  'home.giftCta': 'Xem các tác phẩm sưu tầm',
  'home.giftAlt': 'Một nhóm chén thủ công đặt cạnh nhau trên mặt tối',

  'home.journalEyebrow': 'Tạp chí',
  'home.journalTitle': 'Ghi chép về men & cách làm',

  'home.closingEyebrow': 'Đất trong tay bạn',
  'home.closingTitle1': 'Lửa và thời gian,',
  'home.closingTitle2': 'lắng lại',
  'home.closingLede':
    'Lò không uốn theo ý người. Ta chỉ nặn đất; còn lớp men, để tự nhiên hoàn tất.',
  'home.closingCta1': 'Xem bộ sưu tập',
  'home.closingCta2': 'Câu chuyện của chúng tôi',
  'home.srCatalogue': 'Danh mục gồm {count} tác phẩm. Tác phẩm nổi bật từ {price}.',

  /* ---------------------------------------------------------------- */
  /* Glaze explorer                                                    */
  /* ---------------------------------------------------------------- */
  'glaze.eyebrow': 'Khám phá men',
  'glaze.title': 'Năm bề mặt, một chiếc lò',
  'glaze.body':
    'Cùng một thứ đất, cùng một ngọn lửa, mà mỗi chén mang một gương mặt khác. Chọn một loại men để xem tác phẩm của nó.',
  'glaze.see': 'Xem các chén men này',
  'glaze.tabsAria': 'Các loại men',
  'glaze.alt': 'Men {name} — {tagline}',

  /* ---------------------------------------------------------------- */
  /* Collection listing                                                */
  /* ---------------------------------------------------------------- */
  'coll.eyebrow': 'Bộ sưu tập',
  'coll.title1': 'Tác phẩm từ đất,',
  'coll.title2': 'lửa và men',
  'coll.lede':
    'Danh mục đang lưu hành của chén Kiến. Mỗi chén nung riêng từng chiếc; bề mặt khác nhau và không thể đặt làm lại theo đúng một mẫu.',
  'coll.factPieces': 'Tác phẩm',
  'coll.factGlazes': 'Dòng men',
  'coll.factFrom': 'Từ',
  'coll.filters': 'Bộ lọc',
  'coll.filtersCount': 'Bộ lọc ({count})',
  'coll.count': '{count} tác phẩm',
  'coll.countPlural': '{count} tác phẩm',
  'coll.sort': 'Sắp xếp',
  'coll.sortCurated': 'Tuyển chọn',
  'coll.sortNewest': 'Mới nhất',
  'coll.sortPriceAsc': 'Giá — thấp đến cao',
  'coll.sortPriceDesc': 'Giá — cao đến thấp',
  'coll.glaze': 'Men',
  'coll.category': 'Loại',
  'coll.all': 'Tất cả',
  'coll.clear': 'Bỏ bộ lọc',
  'coll.emptyTitle': 'Không có tác phẩm nào khớp bộ lọc',
  'coll.emptyBody':
    'Thử một dòng men hay loại khác — toàn bộ danh mục có {count} tác phẩm.',
  'coll.emptyCta': 'Xem tất cả tác phẩm',
  'coll.loadMore': 'Xem thêm — còn {count} tác phẩm',
  'coll.noteEyebrow': 'Từ xưởng',
  'coll.noteBody':
    'Mỗi tác phẩm trong bộ sưu tập đều được nung củi tại Kiến Dương. Với đơn đặt riêng hoặc tuyển chọn cá nhân, xin liên hệ xưởng.',
  'coll.noteCta': 'Viết cho xưởng',
  'coll.noteAlt': 'Dụng cụ làm gốm trên bàn xưởng',

  /* Category labels */
  'cat.tea-bowl': 'Chén trà',
  'cat.vessel': 'Bình, hũ',
  'cat.set': 'Bộ',

  /* ---------------------------------------------------------------- */
  /* Product detail                                                    */
  /* ---------------------------------------------------------------- */
  'prod.notFoundEyebrow': 'Không tìm thấy',
  'prod.notFoundTitle': 'Tác phẩm này không còn trong danh mục',
  'prod.notFoundBody':
    'Có thể đã được lưu trữ hoặc chuyển đi. Danh mục hiện hành là nơi nên xem tiếp.',
  'prod.notFoundCta': 'Về bộ sưu tập',
  'prod.openImage': 'Mở ảnh {index} của {name} toàn màn hình',
  'prod.imageAlt': '{name} — {subtitle}, ảnh {index}',
  'prod.zoom': 'Phóng to',
  'prod.thumbsAria': 'Ảnh tác phẩm',
  'prod.showImage': 'Xem ảnh {index}',
  'prod.duties': 'Đã gồm thuế · đổi trả trong 30 ngày',
  'prod.specs': 'Thông số',
  'prod.singleFiring': 'Nung một lần',
  'prod.making': 'Cách làm',
  'prod.makingBody':
    'Nặn tay trên bàn xoay, sấy chậm, rồi tráng men và nung trong lò củi. Bề mặt cuối cùng tuỳ thuộc vào cách nhiệt và tro đi qua buồng lò, và vào nhịp nguội sau đó — những yếu tố nghệ nhân dẫn dắt nhưng không nắm chắc.',
  'prod.dimensions': 'Kích thước & chất liệu',
  'prod.careTitle': 'Bảo quản',
  'prod.careBody':
    'Chỉ rửa tay bằng nước ấm và khăn mềm; không dùng búi cọ mài mòn hay chất tẩy mạnh. Tránh sốc nhiệt — đừng rót nước sôi vào chén nguội. Không dùng cho lò vi sóng, lò nướng hay máy rửa chén. Lớp men nhiều sắt sẽ sẫm lại và lên độ bóng mềm theo thời gian dùng; lớp patina ấy chính là dấu vết của một món đồ đã sống cùng người.',
  'prod.shippingTitle': 'Giao nhận',
  'prod.shippingBody':
    'Sinh ra ở Nam Bình, Phúc Kiến, Trung Quốc. Mọi tác phẩm đang niêm yết đều đã về kho địa phương của chúng tôi và sẽ được giao trong vòng 2–3 ngày làm việc.',
  'prod.packagingTitle': 'Đóng gói',
  'prod.packagingBody':
    'Mỗi tác phẩm được gửi bằng dịch vụ chuyển phát nhanh có bảo hiểm, nằm trong thùng gỗ đặt riêng và lớp chèn chống sốc. Mã theo dõi được cấp ngay khi kiện hàng rời xưởng, và mỗi chén đều đi kèm phiếu ghi chú nung. Nhận đổi trả miễn phí trong 30 ngày kể từ khi nhận hàng.',
  'prod.characteristicsTitle': 'Đặc tính',
  'prod.characteristicsBody':
    'Kiến Trản được tạo nên bởi cả bàn tay lẫn cơ duyên. Ngọn lửa, tro và lớp men nguội dần quyết định vân men cuối cùng, nên không có hai chén nào giống hệt nhau — mỗi chiếc là một tác phẩm duy nhất, không thể lặp lại.',
  'prod.disclaimer':
    'Kèm hộp trình bày bằng gỗ ngô đồng có chữ ký xưởng và giấy chứng nhận lần nung.',
  'prod.relatedEyebrow': 'Xem tiếp',
  'prod.relatedTitle': 'Tác phẩm cùng nhóm',

  /* Availability */
  'avail.available': 'Còn hàng',
  'avail.made-to-order': 'Đặt làm theo yêu cầu',
  'avail.sold-out': 'Đã bán — lưu trữ',
  'avail.enquire': 'Hỏi thăm',
  'prod.badgeArchive': 'Lưu trữ',

  /* Spec labels */
  'spec.Diameter': 'Đường kính',
  'spec.Height': 'Chiều cao',
  'spec.Capacity': 'Dung tích',
  'spec.Weight': 'Trọng lượng',
  'spec.Body': 'Xương gốm',
  'spec.Firing': 'Nung',
  'spec.Bowls': 'Số chén',
  'spec.Presentation': 'Trình bày',
  'spec.value.ironStoneware': 'Sành nhiều sắt',
  'spec.value.stoneware': 'Sành',
  'spec.value.stonewareSlip': 'Sành phủ hồ sắt',
  'spec.value.woodFired': 'Nung củi, {temp} °C',
  'spec.value.reduction': 'Hoàn nguyên, {temp} °C',
  'spec.value.linenBox': 'Hộp bọc vải lanh',
  'spec.value.each': '{value} mỗi chiếc',

  /* ---------------------------------------------------------------- */
  /* Buy / cart                                                        */
  /* ---------------------------------------------------------------- */
  'buy.addToCart': 'Thêm vào giỏ',
  'buy.added': 'Đã thêm vào giỏ',
  'buy.chooseSize': 'Chọn cỡ',
  'buy.size': 'Cỡ',
  'buy.orderViaStore': 'Đặt qua cửa hàng',
  'buy.archived': 'Đã lưu trữ — không bán',
  'buy.requestPiece': 'Hỏi về tác phẩm này',
  'buy.enquirePiece': 'Liên hệ về tác phẩm này',
  'buy.noteArchived':
    'Tác phẩm đã rời xưởng và được giữ trong kho lưu trữ. Những chén tương đương sẽ ra mắt ở các mẻ nung sau.',
  'buy.noteBackOrder':
    'Nung theo đơn tại xưởng. Hãy viết cho chúng tôi, xưởng sẽ xác nhận thời gian chờ hiện tại và giữ một suất trong mẻ nung tới.',
  'buy.noteStudio':
    'Độc bản, đang được xưởng giữ. Hãy viết cho chúng tôi, xưởng sẽ xác nhận tình trạng, kích thước và cách gửi hàng.',
  'buy.seeInStore': 'Xem tác phẩm này ở cửa hàng',
  'buy.noteShipping':
    'Gửi chuyển phát nhanh toàn cầu có bảo hiểm, đóng thùng gỗ riêng. Nhận đổi trả trong 30 ngày, miễn phí.',
  'buy.buyDirect': 'Hoặc mua trực tiếp tác phẩm này',
  'buy.selectSize': 'Chọn một cỡ để tiếp tục.',
  'buy.decreaseQty': 'Giảm số lượng',
  'buy.increaseQty': 'Tăng số lượng',
  'buy.quantityN': 'Số lượng {count}',
  'buy.enquirySubject': 'Hỏi thăm — {name}',

  'cart.eyebrow': 'Lựa chọn của bạn',
  'cart.title': 'Giỏ hàng',
  'cart.close': 'Đóng giỏ hàng',
  'cart.emptyLine': 'Chưa chọn món nào.',
  'cart.emptyBody':
    'Những tác phẩm bạn chọn sẽ tụ lại ở đây. Việc thanh toán, giao nhận đều thực hiện ở cửa hàng của chúng tôi.',
  'cart.browse': 'Xem bộ sưu tập',
  'cart.each': 'mỗi chiếc',
  'cart.remove': 'Bỏ',
  'cart.subtotal': 'Tạm tính',
  'cart.connecting': 'Đang kết nối…',
  'cart.checkout': 'Thanh toán ở cửa hàng',
  'cart.taxNote': 'Thuế và phí gửi thùng gỗ có bảo hiểm được tính khi thanh toán.',
  'cart.handoffError':
    'Hiện chưa kết nối được tới cửa hàng. Vui lòng thử lại, hoặc viết cho {email} để xưởng hoàn tất đơn hàng trực tiếp với bạn.',
  'cart.overlayTitle': 'Đang đưa bạn tới trang thanh toán an toàn…',
  'cart.overlayNote': 'Lựa chọn của bạn đang được chuyển đi',
  'cart.decrease': 'Giảm số lượng {name}',
  'cart.increase': 'Tăng số lượng {name}',
  'cart.removeAria': 'Bỏ {name} khỏi giỏ hàng',
  'cart.viewName': 'Xem {name}',

  /* Favourites */
  'fav.save': 'Lưu {name} vào danh sách đã lưu',
  'fav.remove': 'Bỏ {name} khỏi danh sách đã lưu',
  'fav.savedTitle': 'Đã lưu trên trình duyệt này',
  'fav.saveTitle': 'Lưu trên trình duyệt này',
  'fav.saved': 'Đã lưu',
  'fav.saveLabel': 'Lưu',

  /* Quick view */
  'qv.close': 'Đóng xem nhanh',
  'qv.image': 'Ảnh {index}',
  'qv.fullDetails': 'Xem đầy đủ',
  'qv.note':
    'Nung tại Kiến Dương · kèm hộp trình bày có chữ ký xưởng và giấy chứng nhận lần nung.',
  'qv.detailAlt': '{name} — chi tiết {index}',

  /* Search */
  'search.dialog': 'Tìm kiếm',
  'search.placeholder': 'Tìm tác phẩm, men, tạp chí…',
  'search.inputAria': 'Tìm tác phẩm, men và tạp chí',
  'search.close': 'Đóng tìm kiếm',
  'search.pieces': 'Tác phẩm',
  'search.selected': 'Tác phẩm chọn sẵn',
  'search.empty': 'Không có tác phẩm nào khớp “{query}”.',
  'search.journal': 'Tạp chí',

  /* Lightbox */
  'lb.dialog': 'Xem ảnh',
  'lb.close': 'Đóng trình xem ảnh',
  'lb.prev': 'Ảnh trước',
  'lb.next': 'Ảnh sau',
  'lb.counter': 'Ảnh {index} trên {total}',
  'lb.hint': 'Nhấp đúp hoặc chụm hai ngón để phóng to · Dùng phím mũi tên để xem · Esc để đóng',

  /* Media fallback */
  'media.unavailable': 'Không tải được ảnh',

  /* ---------------------------------------------------------------- */
  /* Craft page                                                        */
  /* ---------------------------------------------------------------- */
  'craft.eyebrow': 'Nghề làm',
  'craft.title1': 'Chậm,',
  'craft.title2': 'vì phải thế',
  'craft.lede':
    'Chén Kiến phụ thuộc vào vài biến số không thể tách rời: đất, độ dày lớp men, đường đi của nhiệt, và tốc độ nguội của lò.',
  'craft.process': 'Quy trình',
  'craft.processTitle': 'Năm công đoạn, một tác phẩm',
  'craft.processBody':
    'Trình tự dưới đây là trình tự thường lệ. Không phải màn trình diễn: mỗi công đoạn tồn tại vì bỏ qua nó sẽ đổi kết quả theo cách về sau không sửa được.',
  'craft.s1t': 'Đất',
  'craft.s1b':
    'Đất sét nhiều sắt của địa phương được nhào tay rồi để nghỉ. Hàm lượng sắt cao chính là thứ sau này nuôi tinh thể và màu của men.',
  'craft.s2t': 'Tạo hình',
  'craft.s2b':
    'Mỗi chén nặn riêng trên bàn xoay — miệng, thành, đế thành hình trong một lần ngồi. Độ dày đo bằng tay chứ không bằng thước.',
  'craft.s3t': 'Tráng men',
  'craft.s3b':
    'Men phủ thành nhiều lớp mỏng, nhiều khi cố ý không đều. Chỗ mỏng sau này sẽ tối hơn; chỗ dày men sẽ đọng lại.',
  'craft.s4t': 'Nung',
  'craft.s4b':
    'Nung củi kéo dài nhiều ngày, người thay phiên nhau canh. Tro lắng xuống, khí quyển trong lò đổi, rồi lò được để nguội thật chậm — thường đây mới là công đoạn quyết định.',
  'craft.s5t': 'Tuyển chọn',
  'craft.s5b':
    'Sau khi nguội, phần lớn tác phẩm được xếp riêng. Những chiếc còn lại được xét theo bề mặt, dáng và công năng, chứ không theo độ lạ.',
  'craft.kilnEyebrow': 'Chiếc lò',
  'craft.kilnTitle': 'Một lần nung quyết định nhiều hơn người làm',
  'craft.kilnBody':
    'Hai chén cùng một mẻ, nặn cùng kích thước, có thể ra lò như đến từ hai xưởng khác nhau. Vị trí trong buồng lò, luồng gió và tốc độ nguội đều để lại dấu. Đó không phải lớp trang trí thêm vào sau — đó là cách vật liệu ghi lại điều đã xảy ra với nó.',
  'craft.kilnCta': 'Xem kết quả',
  'craft.kilnAlt': 'Than hồng rực qua cửa lò củi',
  'craft.handsEyebrow': 'Trong xưởng',
  'craft.handsTitle': 'Bàn tay, không khuôn',
  'craft.fig1': 'Tạo hình — độ dày thành đo bằng tay',
  'craft.fig2': 'Men — pha và thử trên mảnh vụn',
  'craft.handsAlt1': 'Đôi tay nặn chén trên bàn xoay',
  'craft.handsAlt2': 'Nghệ nhân nặn đất bằng cả hai tay',
  'craft.handsAlt3': 'Men và dụng cụ làm gốm trên bàn xưởng',
  'craft.claimsEyebrow': 'Một lời về những tuyên bố',
  'craft.claimsTitle': 'Điều chúng tôi có thể nói thẳng',
  'craft.claimsBody':
    'Chúng tôi không mô tả tác phẩm của mình là ngang tầm bảo tàng hay đã được chứng nhận. Mạch nguồn chúng tôi nhận là một cách làm, không phải một danh hiệu: những lò Kiến thời Tống ở Phúc Kiến, đất nhiều sắt, lò rồng và lửa củi. Ngoài những điều đó, chúng tôi chỉ đưa ra chất liệu, lần nung và năm — phần còn lại để chiếc chén nói.',
  'craft.claimsCta': 'Về xưởng',

  /* ---------------------------------------------------------------- */
  /* About page                                                        */
  /* ---------------------------------------------------------------- */
  'about.eyebrow': 'Về chúng tôi',
  'about.lede':
    'Một xưởng chỉ theo đuổi một câu hỏi hẹp: một chiếc chén có thể kể gì về ngọn lửa đã làm ra nó?',
  'about.statement': 'Tuyên ngôn',
  'about.statementTitle': 'Sang trọng là sự tiết chế, không phải một phong cách',
  'about.p1':
    'Chúng tôi làm việc với một số ít dáng và một số ít loại men. Điều đáng quan tâm không nằm ở cái mới, mà ở sự lặp lại: làm cùng một dáng cho tới khi khác biệt giữa từng chiếc trở thành điều đáng nói.',
  'about.p2':
    'Mỗi chén trong danh mục này đều ra từ một lần nung củi. Có chiếc đẹp theo cách thường được khen; có chiếc lặng hơn, hay không đều hơn. Chúng tôi đặt chúng cạnh nhau vì sự khác biệt ấy là thật, và vì giả vờ rằng mỗi lần nung đều có thể chuẩn hoá sẽ là nói dối về chất liệu.',
  'about.p3':
    'Chúng tôi cố ý tách việc xem khỏi việc mua. Nhìn một chiếc chén và mua nó là hai hành động khác nhau, và không hành động nào nên bị hành động kia thúc giục.',
  'about.figAria': 'Hình ảnh xưởng',
  'about.fig1': 'Bên bàn xoay',
  'about.fig2': 'Bàn làm việc',
  'about.figAlt1': 'Nghệ nhân tạo hình chén bên bàn xoay trong ánh sáng yếu',
  'about.figAlt2': 'Dụng cụ và vật liệu trong xưởng',
  'about.quote': '“Chiếc chén đã hoàn tất từ lâu trước khi có ai quyết rằng nó đẹp.”',
  'about.quoteBy': '— Ghi chú xưởng',
  'about.principles': 'Nguyên tắc',
  'about.principlesTitle': 'Bốn điều chúng tôi giữ',
  'about.v1t': 'Chất liệu trước tiên',
  'about.v1d':
    'Đất nhiều sắt từ nguồn rõ ràng, men pha tại xưởng, không in hay dán bất kỳ bề mặt nào.',
  'about.v2t': 'Một lần nung, một tác phẩm',
  'about.v2d':
    'Chúng tôi không sao chép kết quả. Nếu một bề mặt không thể lặp lại, nó được giới thiệu như một tác phẩm đơn chiếc, không phải một dòng sản phẩm.',
  'about.v3t': 'Mô tả, không thổi phồng',
  'about.v3d':
    'Không chứng nhận tự đặt ra, không khan hiếm dàn dựng. Chúng tôi nêu tên lò, chất liệu và năm, rồi để chiếc chén mang lời ấy.',
  'about.v4t': 'Làm để dùng',
  'about.v4d':
    'Đây là những vật dụng dùng được. Sưu tầm chúng không có nghĩa là cất vào tủ kính.',
  'about.cta1': 'Xem bộ sưu tập',
  'about.cta2': 'Đọc tạp chí',

  /* ---------------------------------------------------------------- */
  /* Journal                                                           */
  /* ---------------------------------------------------------------- */
  'journal.eyebrow': 'Tạp chí',
  'journal.title': 'Ghi chép từ xưởng',
  'journal.lede':
    'Bài viết ngắn, thực dụng về men, về nung và về cách sống cùng những món đồ này. Do xưởng viết; không mượn tên tác giả khách mời.',
  'journal.listAria': 'Các bài tạp chí',
  'journal.ctaEyebrow': 'Đang tìm điều gì?',
  'journal.ctaBody':
    'Bộ sưu tập giữ chính những món đồ; tạp chí nói về cách đọc chúng.',
  'journal.ctaBtn': 'Xem bộ sưu tập',
  'journal.postNotFoundTitle': 'Bài viết này không còn tồn tại',
  'journal.postNotFoundCta': 'Tất cả bài tạp chí',
  'journal.publishedBy': 'Xuất bản bởi xưởng JIANZHAN',
  'journal.continue': 'Đọc tiếp',
  'journal.more': 'Thêm bài từ tạp chí',
  'journal.minRead': '{count} phút đọc',
  'journal.min': '{count} phút',

  /* ---------------------------------------------------------------- */
  /* Policies shared                                                   */
  /* ---------------------------------------------------------------- */
  'policy.notFoundEyebrow': 'Không tìm thấy',
  'policy.notFoundTitle': 'Không tìm thấy chính sách này',
  'policy.notFoundBody':
    'Trang có thể đã được chuyển. Mọi chính sách đều có liên kết ở chân trang của bất kỳ trang nào trong site.',
  'policy.notFoundCta': 'Về trang chủ',
  'policy.updated': 'Cập nhật lần cuối {date}',
  'policy.contents': 'Nội dung',
  'policy.contentsAria': 'Nội dung {title}',
  'policy.footBody':
    'Có câu hỏi về chính sách này, về một đơn hàng, hay về món đồ đang trong tay bạn? Xưởng trả lời mọi tin nhắn trong vòng một ngày làm việc.',
  'policy.footCta1': 'Liên hệ xưởng',
  'policy.footCta2': 'Xem bộ sưu tập',
  'policy.others': 'Cũng trong mục này',

  /* ---------------------------------------------------------------- */
  /* 404                                                               */
  /* ---------------------------------------------------------------- */
  'nf.title': 'Trang này đã rời lò',
  'nf.body':
    'Địa chỉ không khớp với mục nào trong danh mục. Những gì hiện có đều nằm trong bộ sưu tập.',
  'nf.cta1': 'Bộ sưu tập',
  'nf.cta2': 'Trang chủ',

  /* ---------------------------------------------------------------- */
  /* Page titles & meta descriptions                                   */
  /* ---------------------------------------------------------------- */
  'meta.homeTitle': 'JIANZHAN — Chén Kiến | Nghề xưa, vẻ đẹp còn mãi',
  'meta.homeDesc':
    'JIANZHAN giới thiệu tuyển chọn chén Kiến — men Du Tích, Thỏ Hào, Diệu Biến và men ngọc, thành hình bởi lửa, đất và thời gian. Xem bộ sưu tập, nghề làm và tạp chí.',
  'meta.collectionTitle': 'Bộ sưu tập — Chén Kiến & bình trà | JIANZHAN',
  'meta.collectionDesc':
    'Xem bộ sưu tập chén Kiến và bình trà của JIANZHAN: men Du Tích, Thỏ Hào, Diệu Biến và men ngọc. Lọc theo men và loại, xem nhanh, và hỏi về đơn đặt riêng.',
  'meta.productTitle': '{name} — {price} | JIANZHAN',
  'meta.productNotFound': 'Không tìm thấy tác phẩm | JIANZHAN',
  'meta.craftTitle': 'Nghề làm — Lửa, đất và thời gian | JIANZHAN',
  'meta.craftDesc':
    'Chén Kiến được làm thế nào: đất nhiều sắt, nặn tay, men nhiều lớp và nung củi nhiều ngày. Một bản mô tả thẳng thắn, không tô vẽ.',
  'meta.aboutTitle': 'Về chúng tôi — Xưởng | JIANZHAN',
  'meta.aboutDesc':
    'JIANZHAN là xưởng giới thiệu chén Kiến như những món đồ sưu tầm. Một lời tuyên ngôn ngắn về ý định, chất liệu và cách làm.',
  'meta.journalTitle': 'Tạp chí — Men, quy trình và sưu tầm | JIANZHAN',
  'meta.journalDesc':
    'Bài viết và ghi chép về cách đọc men Kiến, nung củi, bảo quản và sưu tầm. Viết thực dụng, không bịa lịch sử.',
  'meta.postTitle': '{title} — Tạp chí | JIANZHAN',
  'meta.postNotFound': 'Không tìm thấy bài viết | JIANZHAN',
  'meta.policyNotFound': 'Không tìm thấy chính sách | JIANZHAN',
  'meta.nfTitle': 'Không tìm thấy trang | JIANZHAN',
  'meta.nfDesc': 'Trang bạn tìm không có ở đây.',
}

export default vi
