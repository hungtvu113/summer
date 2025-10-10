# Cấu Trúc Dự Án - Đại Việt Ký Số

## 📁 Tổng Quan Cấu Trúc

```
dai-viet-ky-so/
├── .github/                    # GitHub configurations
│   ├── workflows/             # GitHub Actions CI/CD
│   ├── ISSUE_TEMPLATE/        # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/                      # Documentation
│   ├── api/                  # API documentation
│   ├── design/               # Design system, UI specs
│   └── guides/               # Development guides
├── frontendapp/               # Main Next.js application
│   ├── public/               # Static files
│   │   ├── images/          # Images, icons
│   │   ├── fonts/           # Custom fonts
│   │   └── data/            # Static JSON data
│   ├── src/
│   │   ├── app/             # Next.js App Router
│   │   │   ├── (auth)/     # Auth group routes
│   │   │   │   ├── login/
│   │   │   │   └── register/
│   │   │   ├── (main)/     # Main app routes
│   │   │   │   ├── timeline/
│   │   │   │   ├── map/
│   │   │   │   ├── people/
│   │   │   │   ├── events/
│   │   │   │   └── search/
│   │   │   ├── api/        # API routes
│   │   │   │   ├── events/
│   │   │   │   ├── people/
│   │   │   │   └── search/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── globals.css
│   │   │   └── not-found.tsx
│   │   ├── components/
│   │   │   ├── ui/         # Reusable UI components
│   │   │   │   ├── Button/
│   │   │   │   ├── Card/
│   │   │   │   ├── Input/
│   │   │   │   ├── Modal/
│   │   │   │   └── ...
│   │   │   ├── features/   # Feature components
│   │   │   │   ├── Timeline/
│   │   │   │   │   ├── TimelineItem.tsx
│   │   │   │   │   ├── TimelineFilter.tsx
│   │   │   │   │   └── TimelineView.tsx
│   │   │   │   ├── Map/
│   │   │   │   │   ├── HistoricalMap.tsx
│   │   │   │   │   ├── MapMarker.tsx
│   │   │   │   │   └── MapControls.tsx
│   │   │   │   ├── People/
│   │   │   │   │   ├── PersonCard.tsx
│   │   │   │   │   ├── PersonDetail.tsx
│   │   │   │   │   └── PersonList.tsx
│   │   │   │   ├── Events/
│   │   │   │   │   ├── EventCard.tsx
│   │   │   │   │   ├── EventDetail.tsx
│   │   │   │   │   └── EventTimeline.tsx
│   │   │   │   └── Quiz/
│   │   │   │       ├── QuizCard.tsx
│   │   │   │       ├── QuizQuestion.tsx
│   │   │   │       └── QuizResults.tsx
│   │   │   ├── layout/     # Layout components
│   │   │   │   ├── Header/
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   ├── Navbar.tsx
│   │   │   │   │   └── MobileMenu.tsx
│   │   │   │   ├── Footer/
│   │   │   │   │   └── Footer.tsx
│   │   │   │   └── Sidebar/
│   │   │   │       └── Sidebar.tsx
│   │   │   └── shared/     # Shared components
│   │   │       ├── Loading.tsx
│   │   │       ├── ErrorBoundary.tsx
│   │   │       └── SEO.tsx
│   │   ├── lib/            # Utilities & helpers
│   │   │   ├── api/        # API clients
│   │   │   ├── utils/      # Utility functions
│   │   │   │   ├── date.ts
│   │   │   │   ├── format.ts
│   │   │   │   └── validation.ts
│   │   │   ├── hooks/      # Custom hooks
│   │   │   │   ├── useTimeline.ts
│   │   │   │   ├── useSearch.ts
│   │   │   │   └── useAuth.ts
│   │   │   └── constants/  # Constants
│   │   │       ├── routes.ts
│   │   │       ├── config.ts
│   │   │       └── dynasty.ts
│   │   ├── types/          # TypeScript types
│   │   │   ├── event.ts
│   │   │   ├── person.ts
│   │   │   ├── dynasty.ts
│   │   │   └── api.ts
│   │   ├── styles/         # Global styles
│   │   │   └── themes/     # Theme configs
│   │   └── data/           # Static data
│   │       ├── dynasties.json
│   │       ├── events.json
│   │       └── people.json
│   ├── tests/              # Tests
│   │   ├── unit/
│   │   ├── integration/
│   │   └── e2e/
│   ├── .env.local          # Environment variables
│   ├── .env.example
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── postcss.config.mjs
│   ├── package.json
│   └── README.md
├── content/                   # Content files (Markdown)
│   ├── events/               # Historical events
│   │   ├── ancient/         # Thời cổ đại
│   │   ├── medieval/        # Trung đại
│   │   └── modern/          # Cận, hiện đại
│   ├── people/              # Historical figures
│   │   ├── kings/           # Vua chúa
│   │   ├── heroes/          # Anh hùng
│   │   └── scholars/        # Văn nhân
│   ├── dynasties/           # Triều đại
│   └── locations/           # Địa điểm lịch sử
├── scripts/                  # Utility scripts
│   ├── seed-data.ts         # Seed database
│   ├── migrate.ts           # Database migrations
│   └── generate-sitemap.ts  # Generate sitemap
├── .gitignore
├── .prettierrc
├── .eslintrc.json
├── LICENSE
├── README.md
├── CONTRIBUTING.md
└── CHANGELOG.md
```

## 📝 Chi Tiết Các Thư Mục Quan Trọng

### `/src/app` - Next.js App Router

Sử dụng App Router của Next.js 15 với các route groups:

- **(auth)**: Authentication pages (login, register)
- **(main)**: Main application pages
- **api**: API routes for backend functionality

### `/src/components` - React Components

**3 loại components chính:**

1. **UI Components** (`/ui`): Reusable, không có business logic
   - Button, Input, Card, Modal, etc.
   - Dùng Shadcn/ui hoặc tự build

2. **Feature Components** (`/features`): Có business logic
   - Timeline, Map, People, Events, Quiz
   - Kết nối với API và state management

3. **Layout Components** (`/layout`): Layout structure
   - Header, Footer, Sidebar
   - Navigation components

### `/src/lib` - Libraries & Utilities

- **api/**: API client functions
- **utils/**: Helper functions (date formatting, validation)
- **hooks/**: Custom React hooks
- **constants/**: App constants and configs

### `/content` - Content Management

Sử dụng Markdown files để quản lý nội dung:

```markdown
---
title: "Khởi Nghĩa Hai Bà Trưng"
date: "40-AD"
dynasty: "Đông Hán"
category: "khoi-nghia"
tags: ["Hai Bà Trưng", "Kháng chiến", "Nữ anh hùng"]
hero: "/images/events/hai-ba-trung.jpg"
author: "Biên tập viên"
---

# Nội dung sự kiện...
```

## 🎯 Best Practices

### Component Structure

```tsx
// PersonCard.tsx
import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type Person } from '@/types/person';

interface PersonCardProps {
  person: Person;
  variant?: 'default' | 'compact';
}

export const PersonCard: FC<PersonCardProps> = ({ 
  person, 
  variant = 'default' 
}) => {
  return (
    <article className="person-card">
      <Image
        src={person.image}
        alt={person.name}
        width={200}
        height={200}
      />
      <h3>{person.name}</h3>
      <p>{person.description}</p>
      <Link href={`/people/${person.slug}`}>
        Xem chi tiết
      </Link>
    </article>
  );
};
```

### API Route Structure

```typescript
// app/api/events/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getEvents } from '@/lib/api/events';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const dynasty = searchParams.get('dynasty');
    const category = searchParams.get('category');

    const events = await getEvents({ dynasty, category });

    return NextResponse.json({
      success: true,
      data: events,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}
```

### Custom Hook Pattern

```typescript
// lib/hooks/useTimeline.ts
import { useState, useEffect } from 'react';
import { type Event } from '@/types/event';
import { fetchEvents } from '@/lib/api/events';

export function useTimeline(dynasty?: string) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true);
        const data = await fetchEvents({ dynasty });
        setEvents(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, [dynasty]);

  return { events, loading, error };
}
```

## 🔐 Environment Variables

```env
# .env.local
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/daivietkyso

# Authentication
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# External APIs
GOOGLE_MAPS_API_KEY=your-api-key
CLOUDFLARE_ACCOUNT_ID=your-account-id
CLOUDFLARE_R2_ACCESS_KEY=your-access-key
```

## 🧪 Testing Structure

```
tests/
├── unit/
│   ├── components/
│   │   ├── PersonCard.test.tsx
│   │   └── TimelineItem.test.tsx
│   └── utils/
│       └── date.test.ts
├── integration/
│   ├── api/
│   │   └── events.test.ts
│   └── pages/
│       └── timeline.test.tsx
└── e2e/
    ├── auth.spec.ts
    ├── timeline.spec.ts
    └── search.spec.ts
```

---

**Note**: Cấu trúc này sẽ được cập nhật khi dự án phát triển.
