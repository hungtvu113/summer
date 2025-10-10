import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Đại Việt Ký Số - Lịch Sử Việt Nam 4000 Năm",
  description: "Khám phá lịch sử Việt Nam qua 4000 năm dựng nước và giữ nước. Từ thời Hùng Vương đến các triều đại phong kiến. Timeline tương tác, bản đồ lịch sử, và hơn 1000 sự kiện lịch sử.",
  keywords: ["lịch sử việt nam", "vua hùng", "triều đại", "timeline", "historical", "vietnamese history"],
  authors: [{ name: "Đại Việt Ký Số Team" }],
  openGraph: {
    title: "Đại Việt Ký Số - Lịch Sử Việt Nam",
    description: "Hành trình 4000 năm lịch sử dân tộc Việt Nam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
