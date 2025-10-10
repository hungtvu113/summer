# Development Guide - Đại Việt Ký Số

## 🚀 Getting Started

### Prerequisites

Trước khi bắt đầu, đảm bảo bạn đã cài đặt:

- **Node.js** 18.17 hoặc cao hơn
- **npm** / **yarn** / **pnpm** / **bun**
- **Git**
- **PostgreSQL** 14+ (cho local development)
- **Redis** (optional, cho caching)
- **Code Editor**: VS Code (khuyến nghị)

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "prisma.prisma",
    "ms-vscode.vscode-typescript-next",
    "usernamehw.errorlens",
    "streetsidesoftware.code-spell-checker",
    "eamodio.gitlens"
  ]
}
```

## 📦 Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/dai-viet-ky-so.git
cd dai-viet-ky-so
```

### 2. Install Dependencies

```bash
cd frontendapp
npm install
```

### 3. Environment Variables

Tạo file `.env.local` trong thư mục `frontendapp`:

```bash
cp .env.example .env.local
```

Cấu hình các biến môi trường:

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Đại Việt Ký Số"

# Database (PostgreSQL)
DATABASE_URL="postgresql://postgres:password@localhost:5432/daivietkyso"

# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-generate-with-openssl

# OAuth Providers (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret

# Email (Optional - for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Storage (Optional)
CLOUDFLARE_ACCOUNT_ID=your-account-id
CLOUDFLARE_R2_ACCESS_KEY=your-access-key
CLOUDFLARE_R2_SECRET_KEY=your-secret-key

# Maps (Optional)
NEXT_PUBLIC_MAPBOX_TOKEN=your-mapbox-token

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 4. Database Setup

#### Cài đặt PostgreSQL (nếu chưa có)

**Windows:**
```bash
# Download từ https://www.postgresql.org/download/windows/
# Hoặc dùng chocolatey
choco install postgresql
```

**macOS:**
```bash
brew install postgresql
brew services start postgresql
```

**Linux:**
```bash
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql
```

#### Tạo Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE daivietkyso;

# Create user (optional)
CREATE USER daiviet WITH PASSWORD 'yourpassword';
GRANT ALL PRIVILEGES ON DATABASE daivietkyso TO daiviet;

# Exit
\q
```

#### Setup Prisma

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed database với sample data
npx prisma db seed
```

### 5. Run Development Server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

## 🛠️ Development Workflow

### Project Structure

```
frontendapp/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   ├── lib/             # Utilities, hooks, helpers
│   ├── types/           # TypeScript types
│   └── styles/          # Global styles
├── public/              # Static files
├── prisma/              # Database schema
└── tests/               # Test files
```

### Coding Standards

#### TypeScript

- Luôn sử dụng TypeScript, tránh `any`
- Define interfaces/types rõ ràng
- Sử dụng strict mode

```typescript
// ✅ GOOD
interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): Promise<User> {
  // ...
}

// ❌ BAD
function getUser(id: any): any {
  // ...
}
```

#### React Components

- Sử dụng functional components
- Prefer named exports
- Props interface bằng TypeScript

```typescript
// ✅ GOOD
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

// ❌ BAD
export default function Button(props: any) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
```

#### Styling

- Sử dụng Tailwind CSS
- Tạo reusable components cho common patterns
- Avoid inline styles

```tsx
// ✅ GOOD
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-bold">Title</h2>
</div>

// ❌ BAD
<div style={{ display: 'flex', padding: '16px', backgroundColor: '#fff' }}>
  <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Title</h2>
</div>
```

### File Naming

- **Components**: PascalCase (`UserProfile.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Hooks**: camelCase with "use" (`useAuth.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Pages**: kebab-case (`user-profile/page.tsx`)

### Git Workflow

#### Branch Naming

```
feature/timeline-component
fix/navbar-mobile-bug
docs/update-readme
refactor/api-structure
```

#### Commit Messages

Sử dụng [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat(timeline): add filter by dynasty
fix(map): resolve marker positioning issue
docs(readme): update installation guide
style(button): adjust padding and colors
refactor(api): optimize database queries
test(quiz): add unit tests for quiz logic
chore(deps): update Next.js to 15.4.5
```

#### Before Committing

```bash
# Lint code
npm run lint

# Format code
npm run format

# Run tests (khi có)
npm run test

# Build check
npm run build
```

### Testing

#### Unit Tests (Jest)

```typescript
// components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

#### E2E Tests (Playwright)

```typescript
// tests/e2e/timeline.spec.ts
import { test, expect } from '@playwright/test';

test('timeline page loads correctly', async ({ page }) => {
  await page.goto('/timeline');
  await expect(page.locator('h1')).toContainText('Timeline Lịch Sử');
});
```

## 🔧 Common Tasks

### Create New Component

```bash
# Create component file
touch src/components/features/MyComponent.tsx

# Create test file
touch src/components/features/MyComponent.test.tsx
```

### Add New Page

```bash
# Create page in app directory
mkdir src/app/my-page
touch src/app/my-page/page.tsx
```

### Database Changes

```bash
# Edit schema
nano prisma/schema.prisma

# Create migration
npx prisma migrate dev --name add_new_field

# Generate Prisma Client
npx prisma generate
```

### Add New Dependency

```bash
# Install package
npm install package-name

# Install dev dependency
npm install -D package-name

# Update all packages
npm update
```

## 🐛 Debugging

### Next.js Debugging

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    }
  ]
}
```

### Common Issues

#### Port already in use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

#### Database connection issues

```bash
# Check PostgreSQL is running
psql -U postgres -c "SELECT 1"

# Reset database
npx prisma migrate reset
```

#### Node modules issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## 📊 Performance Optimization

### Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/images/event.jpg"
  alt="Description"
  width={800}
  height={600}
  placeholder="blur"
  quality={85}
/>
```

### Code Splitting

```tsx
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
```

### Caching

```typescript
// app/api/events/route.ts
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  // ... fetch data
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

Đảm bảo set tất cả environment variables trên hosting platform:

- Vercel: Project Settings > Environment Variables
- AWS/Azure: Application Configuration

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)

### Learning
- [Next.js Tutorial](https://nextjs.org/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Patterns](https://reactpatterns.com/)

### Tools
- [VS Code](https://code.visualstudio.com/)
- [Figma](https://www.figma.com/)
- [Postman](https://www.postman.com/)
- [TablePlus](https://tableplus.com/)

## 💬 Need Help?

- 📖 Check [Documentation](./docs/)
- 💬 Join [Discord](https://discord.gg/daivietkyso)
- 📧 Email: dev@daivietkyso.vn
- 🐛 [Report Issues](https://github.com/dai-viet-ky-so/issues)

---

Happy Coding! 🎉
