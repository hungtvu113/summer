// Dữ liệu chi tiết cho các triều đại
export const dynastyData = {
  vanLang: {
    id: 'van-lang',
    name: 'Văn Lang - Âu Lạc',
    period: '2879 - 257 TCN',
    icon: '🏛️',
    color: 'amber',
    gradient: 'from-amber-900 to-amber-700',
    rulers: ['Vua Hùng', 'An Dương Vương'],
    keyEvents: [
      'Vua Hùng dựng nước Văn Lang (2879 TCN)',
      'Thời kỳ 18 đời Hùng Vương',
      'An Dương Vương dựng nước Âu Lạc (257 TCN)',
      'Xây dựng thành Cổ Loa'
    ],
    description: 'Thời kỳ đầu tiên của lịch sử dân tộc Việt Nam. Người Việt cổ xây dựng nền văn minh lúa nước, tạo nền tảng cho dân tộc.',
    achievements: ['Văn hóa Đông Sơn', 'Trống đồng', 'Nông nghiệp lúa nước'],
    importance: 5,
    funFact: '🎯 Vua Hùng là người đặt tên nước ta là "Văn Lang" - nghĩa là đất nước văn minh!'
  },
  bacThuoc: {
    id: 'bac-thuoc',
    name: 'Bắc Thuộc',
    period: '257 TCN - 938',
    icon: '⚔️',
    color: 'slate',
    gradient: 'from-slate-800 to-slate-700',
    rulers: ['Hai Bà Trưng', 'Bà Triệu', 'Mai Thúc Loan', 'Phùng Hưng'],
    keyEvents: [
      'Khởi nghĩa Hai Bà Trưng (40-43)',
      'Khởi nghĩa Bà Triệu (248)',
      'Khởi nghĩa Mai Thúc Loan (722)',
      'Phùng Hưng làm Bố Cái Đại Vương (791)'
    ],
    description: 'Hơn 1000 năm Bắc thuộc với nhiều cuộc khởi nghĩa anh dũng giành độc lập dân tộc.',
    achievements: ['Giữ gìn bản sắc dân tộc', 'Tinh thần bất khuất', 'Các cuộc khởi nghĩa'],
    importance: 4,
    funFact: '💪 Hai Bà Trưng từng đánh bại 65 thành của nhà Hán chỉ trong vài tháng!'
  },
  ngo: {
    id: 'ngo-dinh-le',
    name: 'Ngô - Đinh - Tiền Lê',
    period: '939 - 1009',
    icon: '👑',
    color: 'emerald',
    gradient: 'from-emerald-600 to-green-500',
    rulers: ['Ngô Quyền', 'Đinh Tiên Hoàng', 'Lê Đại Hành'],
    keyEvents: [
      'Trận Bạch Đằng 938 - Ngô Quyền đánh thắng Nam Hán',
      'Đinh Tiên Hoàng xưng đế, đặt tên nước Đại Cồ Việt (968)',
      'Lê Đại Hành đánh thắng Tống (981)',
      'Củng cố chính quyền trung ương'
    ],
    description: 'Thời kỳ dựng nước độc lập đầu tiên sau 1000 năm Bắc thuộc.',
    achievements: ['Giành độc lập', 'Thiết lập chính quyền', 'Đánh thắng Tống'],
    importance: 5,
    funFact: '🔥 Ngô Quyền dùng cọc nhọn cắm dưới sông Bạch Đằng để đánh bại quân Nam Hán!'
  },
  ly: {
    id: 'ly',
    name: 'Nhà Lý',
    period: '1009 - 1225',
    icon: '🏯',
    color: 'blue',
    gradient: 'from-blue-600 to-cyan-500',
    rulers: ['Lý Thái Tổ', 'Lý Thánh Tông', 'Lý Thường Kiệt'],
    keyEvents: [
      'Lý Công Uẩn dời đô về Thăng Long (1010)',
      'Xây dựng Chùa Một Cột (1049)',
      'Lý Thường Kiệt đánh thắng Tống (1077)',
      'Phát triển văn hóa Phật giáo'
    ],
    description: 'Thời kỳ phồn vinh nhất của phong kiến Việt Nam. Thăng Long trở thành kinh đô.',
    achievements: ['Dời đô Thăng Long', 'Văn hóa Phật giáo', 'Kiến trúc phát triển'],
    importance: 5,
    funFact: '🏛️ Chùa Một Cột được xây dựng theo hình bông sen nổi trên nước!'
  },
  tran: {
    id: 'tran',
    name: 'Nhà Trần',
    period: '1225 - 1400',
    icon: '🛡️',
    color: 'red',
    gradient: 'from-red-600 to-rose-500',
    rulers: ['Trần Thái Tông', 'Trần Nhân Tông', 'Trần Hưng Đạo'],
    keyEvents: [
      'Chiến thắng Mông Cổ lần 1 (1258)',
      'Chiến thắng Mông Cổ lần 2 (1285)',
      'Chiến thắng Bạch Đằng lần 3 (1288)',
      'Thời kỳ hưng thịnh văn hóa'
    ],
    description: 'Triều đại anh hùng nhất lịch sử, 3 lần đánh thắng đế chế Mông Cổ hùng mạnh.',
    achievements: ['3 lần đánh thắng Mông Cổ', 'Chiến thuật quân sự cao', 'Đoàn kết dân tộc'],
    importance: 5,
    funFact: '⭐ Trần Hưng Đạo được coi là thiên tài quân sự vĩ đại nhất Việt Nam!'
  },
  le: {
    id: 'le',
    name: 'Nhà Lê',
    period: '1428 - 1788',
    icon: '📜',
    color: 'purple',
    gradient: 'from-purple-600 to-violet-500',
    rulers: ['Lê Lợi', 'Lê Thánh Tông', 'Nguyễn Trãi'],
    keyEvents: [
      'Lê Lợi khởi nghĩa Lam Sơn (1418-1428)',
      'Lê Thánh Tông cải cách (1460-1497)',
      'Phát triển văn hóa, giáo dục',
      'Hoàng Việt luật lệ - Bộ luật đầu tiên'
    ],
    description: 'Thời kỳ văn hóa phát triển rực rỡ với nhiều cải cách quan trọng.',
    achievements: ['Giành độc lập khỏi Minh', 'Cải cách hành chính', 'Phát triển văn học'],
    importance: 5,
    funFact: '📚 Lê Thánh Tông là vua thi hào, có tài văn chương xuất sắc!'
  },
  nguyen: {
    id: 'nguyen',
    name: 'Nhà Nguyễn',
    period: '1802 - 1945',
    icon: '🏰',
    color: 'orange',
    gradient: 'from-orange-600 to-amber-500',
    rulers: ['Gia Long', 'Minh Mạng', 'Tự Đức'],
    keyEvents: [
      'Gia Long thống nhất đất nước (1802)',
      'Xây dựng kinh thành Huế',
      'Kháng chiến chống Pháp',
      'Chấm dứt chế độ phong kiến (1945)'
    ],
    description: 'Triều đại phong kiến cuối cùng của Việt Nam.',
    achievements: ['Thống nhất đất nước', 'Xây dựng Huế', 'Mở rộng lãnh thổ'],
    importance: 4,
    funFact: '🏯 Kinh thành Huế là di sản văn hóa thế giới UNESCO!'
  },
  modern: {
    id: 'modern',
    name: 'Việt Nam Hiện Đại',
    period: '1945 - Nay',
    icon: '🇻🇳',
    color: 'red',
    gradient: 'from-yellow-500 via-red-600 to-red-700',
    rulers: ['Chủ tịch Hồ Chí Minh', 'Đảng Cộng sản Việt Nam'],
    keyEvents: [
      'Tuyên ngôn độc lập (02/09/1945)',
      'Chiến thắng Điện Biên Phủ (1954)',
      'Giải phóng miền Nam (30/04/1975)',
      'Đổi mới (1986)',
      'Phát triển kinh tế'
    ],
    description: 'Việt Nam độc lập, tự do, phát triển và hội nhập quốc tế.',
    achievements: ['Độc lập dân tộc', 'Thống nhất đất nước', 'Phát triển kinh tế'],
    importance: 5,
    funFact: '🌟 Việt Nam là một trong những nền kinh tế tăng trưởng nhanh nhất thế giới!'
  }
};

// Thống kê thú vị
export const historyStats = {
  totalYears: 4904,
  totalDynasties: 15,
  majorWars: 8,
  legendaryHeroes: 50,
  culturalAchievements: 100
};
