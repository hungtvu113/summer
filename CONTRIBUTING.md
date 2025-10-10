# Hướng Dẫn Đóng Góp cho Đại Việt Ký Số

Cảm ơn bạn đã quan tâm đến việc đóng góp cho dự án **Đại Việt Ký Số**! 🇻🇳

## 📋 Mục Lục
- [Code of Conduct](#code-of-conduct)
- [Cách Bắt Đầu](#cách-bắt-đầu)
- [Quy Trình Đóng Góp](#quy-trình-đóng-góp)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 🤝 Code of Conduct

- Tôn trọng mọi thành viên trong cộng đồng
- Không sử dụng ngôn ngữ thù địch, phân biệt đối xử
- Chấp nhận phê bình mang tính xây dựng
- Tập trung vào điều tốt nhất cho cộng đồng
- Thể hiện sự đồng cảm với các thành viên khác

## 🚀 Cách Bắt Đầu

### 1. Fork Repository
```bash
# Fork repo trên GitHub, sau đó clone về máy
git clone https://github.com/YOUR_USERNAME/dai-viet-ky-so.git
cd dai-viet-ky-so
```

### 2. Cài Đặt Dependencies
```bash
cd frontendapp
npm install
```

### 3. Tạo Branch Mới
```bash
git checkout -b feature/ten-tinh-nang
# hoặc
git checkout -b fix/ten-loi
```

### 4. Chạy Development Server
```bash
npm run dev
```

## 🔄 Quy Trình Đóng Góp

### Đóng Góp Code

1. **Tìm Issue hoặc Tạo Issue Mới**
   - Kiểm tra [Issues](https://github.com/dai-viet-ky-so/issues) có sẵn
   - Tạo issue mới nếu chưa có
   - Comment vào issue để được assign

2. **Phát Triển**
   - Viết code theo coding standards
   - Thêm comments cho code phức tạp
   - Viết tests cho tính năng mới
   - Đảm bảo không có lỗi lint

3. **Testing**
   ```bash
   npm run lint        # Kiểm tra code style
   npm run build       # Test build production
   npm run test        # Chạy unit tests (khi có)
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: thêm timeline tương tác"
   ```

5. **Push và Create PR**
   ```bash
   git push origin feature/ten-tinh-nang
   ```
   Sau đó tạo Pull Request trên GitHub

### Đóng Góp Nội Dung Lịch Sử

1. **Tạo File Markdown**
   - Đặt file trong thư mục `content/`
   - Đặt tên file rõ ràng: `su-kien-bach-dang-1288.md`

2. **Format Nội Dung**
   ```markdown
   ---
   title: "Chiến Thắng Bạch Đằng 1288"
   date: "1288-01-18"
   category: "su-kien"
   tags: ["Trần", "Mông Cổ", "Chiến Tranh"]
   hero: "/images/bach-dang.jpg"
   ---

   # Nội dung chi tiết...
   ```

3. **Nguồn Trích Dẫn**
   - Luôn ghi rõ nguồn tham khảo
   - Sử dụng nguồn đáng tin cậy
   - Tránh thông tin sai lệch

### Đóng Góp Thiết Kế

1. **Thiết Kế UI/UX**
   - Sử dụng Figma để thiết kế
   - Tuân thủ Design System của dự án
   - Đảm bảo accessibility

2. **Assets**
   - Hình ảnh: `.webp` hoặc `.jpg` (tối ưu dung lượng)
   - Icons: `.svg` vector
   - Fonts: Google Fonts hoặc open source

## 💻 Coding Standards

### TypeScript / React

```typescript
// ✅ GOOD
interface User {
  id: string;
  name: string;
  email: string;
}

export function UserProfile({ user }: { user: User }) {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// ❌ BAD
function profile(u: any) {
  return <div><h2>{u.name}</h2></div>
}
```

### File Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── features/        # Feature-specific components
│   └── layout/          # Layout components
├── lib/                 # Utilities, helpers
├── types/               # TypeScript types
├── hooks/               # Custom React hooks
├── styles/              # Global styles
└── constants/           # Constants, configs
```

### Naming Conventions

- **Components**: PascalCase (`UserProfile.tsx`)
- **Hooks**: camelCase with "use" prefix (`useHistoryData.ts`)
- **Utils**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_TIMELINE_ITEMS`)
- **CSS Classes**: kebab-case (`timeline-item`)

## 📝 Commit Guidelines

Sử dụng [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types:
- `feat`: Tính năng mới
- `fix`: Sửa lỗi
- `docs`: Thay đổi documentation
- `style`: Code formatting (không ảnh hưởng logic)
- `refactor`: Refactor code
- `test`: Thêm/sửa tests
- `chore`: Cập nhật build, dependencies

### Examples:
```bash
feat(timeline): thêm filter theo triều đại
fix(map): sửa lỗi hiển thị marker
docs(readme): cập nhật hướng dẫn cài đặt
style(navbar): điều chỉnh spacing
refactor(api): tối ưu query database
test(quiz): thêm unit tests cho quiz component
chore(deps): cập nhật Next.js lên 15.4.5
```

## 🔍 Pull Request Process

### PR Title Format
```
[Type] Short description
```
Example: `[Feature] Thêm timeline tương tác cho lịch sử Việt Nam`

### PR Description Template
```markdown
## Mô Tả
Brief description của changes

## Loại Thay Đổi
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Code tuân thủ coding standards
- [ ] Đã thêm comments cho code phức tạp
- [ ] Đã cập nhật documentation
- [ ] Đã test trên local
- [ ] Không có lỗi lint
- [ ] Build thành công

## Screenshots (nếu có)
[Thêm screenshots nếu có thay đổi UI]

## Related Issues
Closes #123
```

### Review Process

1. Ít nhất 1 reviewer approve
2. Tất cả comments được resolved
3. CI/CD checks pass
4. Không có conflicts với main branch

## 🎨 Design Guidelines

### Colors
- Primary: Vietnamese red `#DA251D`
- Secondary: Golden yellow `#FFCD00`
- Background: White `#FFFFFF`, Dark `#1A1A1A`
- Text: `#333333`, `#FFFFFF`

### Typography
- Headings: Geist Sans / Inter
- Body: System fonts / Noto Sans Vietnamese
- Code: Geist Mono

### Spacing
- Base unit: 4px
- Common values: 4, 8, 12, 16, 24, 32, 48, 64

## 🐛 Báo Cáo Lỗi

Khi báo cáo lỗi, vui lòng bao gồm:

1. **Mô tả ngắn gọn về lỗi**
2. **Các bước tái hiện**
   ```
   1. Vào trang '...'
   2. Click vào '....'
   3. Scroll down to '....'
   4. Lỗi xuất hiện
   ```
3. **Kết quả mong đợi**
4. **Kết quả thực tế**
5. **Screenshots** (nếu có)
6. **Môi trường**
   - OS: [e.g. Windows 11]
   - Browser: [e.g. Chrome 120]
   - Version: [e.g. 1.0.0]

## 💡 Đề Xuất Tính Năng

Khi đề xuất tính năng mới:

1. **Mô tả tính năng**
2. **Vấn đề cần giải quyết**
3. **Giải pháp đề xuất**
4. **Các giải pháp thay thế** (nếu có)
5. **Mockups / Wireframes** (nếu có)

## 📞 Liên Hệ

- **GitHub Issues**: [Create new issue](https://github.com/dai-viet-ky-so/issues/new)
- **Discord**: [Join our server](https://discord.gg/daivietkyso)
- **Email**: contributors@daivietkyso.vn

---

**Cảm ơn bạn đã đóng góp cho dự án! 🙏**
