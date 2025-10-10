'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const dynasties = [
  {
    period: 'Trước TK III TCN',
    era: 'Cổ Đại',
    name: 'Văn Lang – Âu Lạc',
    rulers: 'Vua Hùng, An Dương Vương',
    color: 'from-amber-600 to-yellow-500',
    years: '2879 TCN - 257 TCN',
    icon: '🏛️',
    description: 'Thời kỳ dựng nước đầu tiên của dân tộc Việt Nam'
  },
  {
    period: 'TK III TCN – 938',
    era: 'Bắc Thuộc',
    name: 'Dưới ách thống trị Bắc thuộc',
    rulers: 'Bà Triệu, Hai Bà Trưng, Mai Thúc Loan',
    color: 'from-slate-700 to-slate-500',
    years: '257 TCN - 938',
    icon: '⚔️',
    description: 'Hơn 1000 năm đấu tranh giành độc lập dân tộc'
  },
  {
    period: '939 – 1858',
    era: 'Trung Đại',
    name: 'Ngô – Đinh – Tiền Lê',
    rulers: 'Ngô Quyền, Đinh Tiên Hoàng, Lê Hoàn',
    color: 'from-emerald-600 to-teal-500',
    years: '939 - 1009',
    icon: '👑',
    description: 'Thời kỳ dựng nước và giữ nước đầu tiên'
  },
  {
    period: '1009 – 1225',
    era: 'Trung Đại',
    name: 'Nhà Lý',
    rulers: 'Lý Thái Tổ, Lý Thánh Tông, Lý Thường Kiệt',
    color: 'from-blue-600 to-cyan-500',
    years: '1009 - 1225',
    icon: '🏯',
    description: 'Thời kỳ phát triển rực rỡ, xây dựng Thăng Long'
  },
  {
    period: '1225 – 1400',
    era: 'Trung Đại',
    name: 'Nhà Trần',
    rulers: 'Trần Hưng Đạo, Trần Thái Tông, Trần Nhân Tông',
    color: 'from-red-600 to-rose-500',
    years: '1225 - 1400',
    icon: '🛡️',
    description: 'Ba lần đánh thắng quân Nguyên-Mông'
  },
  {
    period: '1428 – 1788',
    era: 'Trung Đại',
    name: 'Nhà Lê',
    rulers: 'Lê Lợi, Lê Thánh Tông, Nguyễn Trãi',
    color: 'from-purple-600 to-violet-500',
    years: '1428 - 1788',
    icon: '📜',
    description: 'Thời kỳ văn hóa phát triển rực rỡ'
  },
  {
    period: '1802 – 1945',
    era: 'Cận – Hiện Đại',
    name: 'Nhà Nguyễn',
    rulers: 'Gia Long, Minh Mạng, Tự Đức',
    color: 'from-orange-600 to-amber-500',
    years: '1802 - 1945',
    icon: '🏰',
    description: 'Triều đại phong kiến cuối cùng của Việt Nam'
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeEra, setActiveEra] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCA0MmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMCAwaDYwdjYwSDB6IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          ></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent animate-gradient">
              Đại Việt Ký Số
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-yellow-400">
                大越記數
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light italic">
            &ldquo;Dân tộc ta từ ngàn xưa đã là một dân tộc anh hùng&rdquo;
          </p>
          <p className="text-lg sm:text-xl text-gray-400 mb-12">
            Hành trình 4000 năm dựng nước và giữ nước
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              href="/timeline"
              className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                🗓️ Khám Phá Timeline
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/map"
              className="group relative px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-yellow-500/50 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                🗺️ Bản Đồ Lịch Sử
              </span>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Dynasties Timeline */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            Các Triều Đại Lịch Sử
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Từ thời Hùng Vương đến cuối thời phong kiến
          </p>

          <div className="space-y-8">
            {dynasties.map((dynasty, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveEra(index)}
              >
                <div className={`relative bg-gradient-to-r ${dynasty.color} p-1 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${activeEra === index ? 'shadow-2xl scale-105' : ''}`}>
                  <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      {/* Icon */}
                      <div className="md:col-span-2 flex justify-center">
                        <div className="text-6xl sm:text-7xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          {dynasty.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-10 space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="px-4 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">
                            {dynasty.era}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {dynasty.years}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                          {dynasty.name}
                        </h3>
                        
                        <p className="text-gray-300 text-lg">
                          <span className="text-yellow-400 font-semibold">Nhân vật nổi bật:</span> {dynasty.rulers}
                        </p>
                        
                        <p className="text-gray-400 italic">
                          {dynasty.description}
                        </p>

                        <button className={`mt-4 px-6 py-2 bg-gradient-to-r ${dynasty.color} rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                          Tìm Hiểu Thêm →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < dynasties.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-red-500 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive History Tree - REDESIGNED */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              🌳 Cây Lịch Sử Việt Nam
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              Hành trình 4000 năm từ rễ đến ngọn
            </p>
            <p className="text-gray-400">
              Click vào mỗi lá để khám phá triều đại
            </p>
          </div>

          {/* Tree Container */}
          <div className="relative h-[700px] mx-auto max-w-5xl">
            
            {/* SVG for Tree Branches - Background Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 700" preserveAspectRatio="xMidYMax meet">
              {/* Tree Trunk */}
              <rect x="385" y="500" width="30" height="200" fill="#92400e" rx="5"/>
              <rect x="380" y="480" width="40" height="30" fill="#78350f" rx="5"/>
              
              {/* Main Branches - Thick visible branches */}
              {/* Left branches */}
              <path d="M 400 500 Q 300 450, 150 400" stroke="#059669" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.9"/>
              <path d="M 400 480 Q 280 430, 120 360" stroke="#0ea5e9" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.9"/>
              <path d="M 400 460 Q 250 400, 100 300" stroke="#8b5cf6" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.9"/>
              
              {/* Right branches */}
              <path d="M 400 490 Q 520 440, 650 380" stroke="#dc2626" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.9"/>
              <path d="M 400 470 Q 550 420, 680 340" stroke="#ea580c" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.9"/>
              
              {/* Center top branch */}
              <path d="M 400 450 Q 400 350, 400 200" stroke="#eab308" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.9"/>
              
              {/* Roots */}
              <path d="M 390 700 Q 350 720, 300 750" stroke="#92400e" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.6"/>
              <path d="M 410 700 Q 450 720, 500 750" stroke="#92400e" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.6"/>
            </svg>

            {/* Dynasty Cards (Leaves) positioned on branches */}
            
            {/* Root - Văn Lang */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-amber-900/60 backdrop-blur-sm border-2 border-amber-600 rounded-xl p-3 w-48 hover:scale-110 hover:shadow-xl hover:shadow-amber-500/50 transition-all cursor-pointer">
                <div className="text-2xl mb-1 text-center">🏛️</div>
                <h3 className="text-sm font-bold text-amber-300 text-center">Văn Lang - Âu Lạc</h3>
                <p className="text-xs text-amber-200/80 text-center">2879-257 TCN</p>
              </div>
            </div>

            {/* Trunk label - Bắc Thuộc */}
            <div className="absolute bottom-[180px] left-1/2 -translate-x-1/2 z-10">
              <div className="bg-slate-800/90 backdrop-blur-sm border-2 border-slate-600 rounded-lg p-2 w-36 hover:scale-110 transition-all cursor-pointer">
                <div className="text-xl mb-1 text-center">⚔️</div>
                <h3 className="text-xs font-bold text-red-400 text-center">Bắc Thuộc</h3>
                <p className="text-xs text-slate-400 text-center">257TCN-938</p>
              </div>
            </div>

            {/* Left Branch - Ngô-Đinh-Tiền Lê */}
            <div className="absolute" style={{ left: '50px', top: '280px', zIndex: 20 }}>
              <div className="bg-gradient-to-br from-emerald-600 to-green-500 rounded-xl p-4 w-48 shadow-lg hover:shadow-emerald-500/60 hover:scale-110 transition-all cursor-pointer border-2 border-emerald-300">
                <div className="text-3xl mb-2">👑</div>
                <h3 className="text-base font-bold text-white">Ngô-Đinh-Tiền Lê</h3>
                <p className="text-xs text-emerald-100">939 - 1009</p>
                <p className="text-xs text-emerald-200 mt-1">Dựng nước độc lập</p>
              </div>
            </div>

            {/* Left Branch - Nhà Lý */}
            <div className="absolute" style={{ left: '20px', top: '220px', zIndex: 20 }}>
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl p-4 w-48 shadow-lg hover:shadow-blue-500/60 hover:scale-110 transition-all cursor-pointer border-2 border-blue-300">
                <div className="text-3xl mb-2">🏯</div>
                <h3 className="text-base font-bold text-white">Nhà Lý</h3>
                <p className="text-xs text-blue-100">1009 - 1225</p>
                <p className="text-xs text-blue-200 mt-1">Xây Thăng Long</p>
              </div>
            </div>

            {/* Left Branch - Nhà Lê */}
            <div className="absolute" style={{ left: '0px', top: '140px', zIndex: 20 }}>
              <div className="bg-gradient-to-br from-purple-600 to-violet-500 rounded-xl p-4 w-48 shadow-lg hover:shadow-purple-500/60 hover:scale-110 transition-all cursor-pointer border-2 border-purple-300">
                <div className="text-3xl mb-2">📜</div>
                <h3 className="text-base font-bold text-white">Nhà Lê</h3>
                <p className="text-xs text-purple-100">1428 - 1788</p>
                <p className="text-xs text-purple-200 mt-1">Văn hóa thịnh vượng</p>
              </div>
            </div>

            {/* Right Branch - Nhà Trần (FEATURED) */}
            <div className="absolute" style={{ right: '40px', top: '240px', zIndex: 20 }}>
              <div className="bg-gradient-to-br from-red-600 to-rose-500 rounded-xl p-5 w-56 shadow-2xl hover:shadow-red-500/70 hover:scale-110 transition-all cursor-pointer border-4 border-yellow-400">
                <div className="absolute -top-3 -right-3 bg-yellow-400 rounded-full p-2 text-lg animate-pulse">⭐</div>
                <div className="text-4xl mb-2">🛡️</div>
                <h3 className="text-lg font-bold text-white">Nhà Trần</h3>
                <p className="text-xs text-red-100">1225 - 1400</p>
                <p className="text-xs text-yellow-300 font-bold mt-1">⚔️ Đánh thắng Mông Cổ 3 lần!</p>
              </div>
            </div>

            {/* Right Branch - Nhà Nguyễn */}
            <div className="absolute" style={{ right: '20px', top: '180px', zIndex: 20 }}>
              <div className="bg-gradient-to-br from-orange-600 to-amber-500 rounded-xl p-4 w-48 shadow-lg hover:shadow-orange-500/60 hover:scale-110 transition-all cursor-pointer border-2 border-orange-300">
                <div className="text-3xl mb-2">🏰</div>
                <h3 className="text-base font-bold text-white">Nhà Nguyễn</h3>
                <p className="text-xs text-orange-100">1802 - 1945</p>
                <p className="text-xs text-orange-200 mt-1">Triều đại cuối</p>
              </div>
            </div>

            {/* Top Center - Việt Nam Hiện Đại */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-gradient-to-br from-yellow-400 via-red-600 to-red-700 rounded-2xl p-6 w-64 shadow-2xl hover:shadow-yellow-500/60 hover:scale-110 transition-all cursor-pointer border-4 border-yellow-300">
                <div className="text-5xl mb-2 text-center animate-bounce">🇻🇳</div>
                <h3 className="text-xl font-bold text-white text-center">Việt Nam Hiện Đại</h3>
                <p className="text-sm text-yellow-100 text-center font-semibold">Độc lập - Tự do - Hạnh phúc</p>
                <p className="text-xs text-yellow-200 text-center mt-2">1945 - Nay</p>
              </div>
            </div>

            {/* Floating Decorations */}
            <div className="absolute text-3xl animate-float pointer-events-none" style={{ left: '15%', top: '10%', animationDelay: '0s' }}>🍃</div>
            <div className="absolute text-2xl animate-float pointer-events-none" style={{ right: '15%', top: '15%', animationDelay: '1s' }}>🍂</div>
            <div className="absolute text-2xl animate-float pointer-events-none" style={{ left: '25%', top: '50%', animationDelay: '2s' }}>🌿</div>
            <div className="absolute text-xl animate-float pointer-events-none" style={{ right: '25%', top: '60%', animationDelay: '1.5s' }}>🦋</div>
          </div>

          {/* Legend */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-3">
              <span className="text-2xl">💡</span>
              <p className="text-gray-300">
                <strong className="text-yellow-400">Mẹo:</strong> Hover và click vào các lá để khám phá!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Gamification */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              📊 Khám Phá Lịch Sử Qua Số Liệu
            </h2>
            <p className="text-gray-400 text-lg">
              Những con số ấn tượng của lịch sử Việt Nam
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {[
              { 
                icon: '⏰', 
                number: '4,904', 
                label: 'Năm Lịch Sử',
                color: 'from-blue-500 to-cyan-500',
                desc: 'Từ Hùng Vương đến nay'
              },
              { 
                icon: '👑', 
                number: '15+', 
                label: 'Triều Đại',
                color: 'from-purple-500 to-pink-500',
                desc: 'Các vương triều anh hùng'
              },
              { 
                icon: '⚔️', 
                number: '1,000+', 
                label: 'Trận Chiến',
                color: 'from-red-500 to-orange-500',
                desc: 'Giữ vững độc lập'
              },
              { 
                icon: '🦸', 
                number: '500+', 
                label: 'Anh Hùng',
                color: 'from-yellow-500 to-amber-500',
                desc: 'Người hùng dân tộc'
              },
              { 
                icon: '🏆', 
                number: '100%', 
                label: 'Chiến Thắng',
                color: 'from-green-500 to-emerald-500',
                desc: 'Tinh thần bất khuất'
              }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:scale-110 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.desc}
                  </div>
                </div>

                {/* Progress bar animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700">
                  <div className={`h-full bg-gradient-to-r ${stat.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Badges Preview */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                🎖️ Hệ Thống Huy Hiệu Thành Tích
              </h3>
              <p className="text-gray-400">
                Mở khóa huy hiệu khi học lịch sử và hoàn thành thử thách!
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {[
                { emoji: '🎓', name: 'Học Giả', locked: false },
                { emoji: '⚔️', name: 'Chiến Binh', locked: false },
                { emoji: '👑', name: 'Hoàng Gia', locked: true },
                { emoji: '📚', name: 'Sử Gia', locked: false },
                { emoji: '🏆', name: 'Vô Địch', locked: true },
                { emoji: '🌟', name: 'Huyền Thoại', locked: true }
              ].map((badge, idx) => (
                <div 
                  key={idx}
                  className={`relative aspect-square rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                    badge.locked 
                      ? 'bg-slate-800/50 border-2 border-slate-700 cursor-not-allowed grayscale' 
                      : 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500 hover:scale-110 cursor-pointer animate-glow'
                  }`}
                >
                  <div className="text-4xl">
                    {badge.locked ? '🔒' : badge.emoji}
                  </div>
                  <div className="text-xs font-semibold text-center px-2">
                    {badge.name}
                  </div>
                  {!badge.locked && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full font-bold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50">
                Xem Tất Cả Huy Hiệu →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            Tính Năng Nổi Bật
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: '📚', title: 'Thư Viện Lịch Sử', desc: '1000+ sự kiện lịch sử', link: '/library' },
              { icon: '👥', title: 'Nhân Vật Anh Hùng', desc: '100+ nhân vật nổi bật', link: '/heroes' },
              { icon: '🎮', title: 'Quiz Tương Tác', desc: 'Học lịch sử qua game', link: '/quiz' },
              { icon: '🗺️', title: 'Bản Đồ 3D', desc: 'Khám phá địa lý lịch sử', link: '/map' }
            ].map((feature, idx) => (
              <Link
                key={idx}
                href={feature.link}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {feature.desc}
                </p>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Khám phá</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Today in History */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-500 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">📅</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Ngày Này Trong Lịch Sử
                </h3>
                <p className="text-gray-400">
                  09 Tháng 10 - Sự kiện đáng nhớ
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-red-500 transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏛️</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-semibold">
                        10/10/1954
                      </span>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold">
                        Giải Phóng
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      Giải Phóng Thủ Đô Hà Nội
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Quân đội nhân dân Việt Nam tiến vào tiếp quản Thủ đô Hà Nội, đánh dấu sự kết thúc 9 năm kháng chiến chống Pháp ở miền Bắc.
                    </p>
                    <div className="mt-3 text-yellow-400 text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                      <span>Đọc thêm</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⚔️</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                        10/10/1010
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                        Kinh Đô
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      Dời Đô Về Thăng Long
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Vua Lý Thái Tổ ra chiếu dời đô từ Hoa Lư về Đại La (Thăng Long), mở ra thời kỳ phát triển rực rỡ của đất nước.
                    </p>
                    <div className="mt-3 text-blue-400 text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                      <span>Đọc thêm</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-yellow-500 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Xem Tất Cả Sự Kiện Lịch Sử →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            🇻🇳 Tự hào về lịch sử dân tộc 🇻🇳
          </p>
          <p className="text-gray-400 mb-4">
            Được phát triển với ❤️ bởi cộng đồng người Việt
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <Link href="/about" className="hover:text-yellow-400 transition-colors">
              Về Chúng Tôi
            </Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors">
              Liên Hệ
            </Link>
            <Link href="/contribute" className="hover:text-yellow-400 transition-colors">
              Đóng Góp
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
