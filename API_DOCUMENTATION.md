# API Documentation - Đại Việt Ký Số

## Base URL
```
Development: http://localhost:3000/api
Production: https://daivietkyso.vn/api
```

## Authentication

Sử dụng JWT tokens cho authentication.

```typescript
// Request header
Authorization: Bearer <token>
```

## API Endpoints

### 1. Events API

#### GET /api/events
Lấy danh sách sự kiện lịch sử

**Query Parameters:**
```typescript
{
  page?: number;        // Default: 1
  limit?: number;       // Default: 20, Max: 100
  dynasty?: string;     // Filter by dynasty slug
  category?: string;    // Filter by category
  year?: number;        // Filter by year
  search?: string;      // Search in title and content
  sort?: 'asc' | 'desc'; // Sort by year, default: 'asc'
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "events": [
      {
        "id": "uuid-1",
        "title": "Chiến Thắng Bạch Đằng 1288",
        "summary": "Trận chiến quyết định...",
        "startYear": 1288,
        "category": "chien-tranh",
        "slug": "chien-thang-bach-dang-1288",
        "image": "/images/bach-dang.jpg",
        "dynasty": {
          "id": "uuid-2",
          "name": "Nhà Trần",
          "slug": "nha-tran"
        }
      }
    ],
    "pagination": {
      "total": 1000,
      "page": 1,
      "limit": 20,
      "totalPages": 50
    }
  }
}
```

#### GET /api/events/:slug
Lấy chi tiết một sự kiện

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid-1",
    "title": "Chiến Thắng Bạch Đằng 1288",
    "content": "# Nội dung đầy đủ...",
    "startYear": 1288,
    "category": "chien-tranh",
    "locationName": "Sông Bạch Đằng",
    "locationLat": 20.9517,
    "locationLng": 106.8408,
    "images": ["/images/1.jpg"],
    "dynasty": {...},
    "participants": [
      {
        "person": {
          "id": "uuid-3",
          "name": "Trần Hưng Đạo",
          "slug": "tran-hung-dao"
        },
        "role": "Chủ tướng"
      }
    ],
    "relatedEvents": [...]
  }
}
```

#### POST /api/events
Tạo sự kiện mới (Requires authentication & editor role)

**Request Body:**
```json
{
  "title": "Tên sự kiện",
  "summary": "Tóm tắt",
  "content": "Nội dung đầy đủ",
  "startYear": 1288,
  "category": "chien-tranh",
  "dynastyId": "uuid-2"
}
```

#### PUT /api/events/:id
Cập nhật sự kiện (Requires authentication)

#### DELETE /api/events/:id
Xóa sự kiện (Requires authentication & admin role)

---

### 2. People API

#### GET /api/people
Lấy danh sách nhân vật lịch sử

**Query Parameters:**
```typescript
{
  page?: number;
  limit?: number;
  dynasty?: string;
  role?: string;        // Filter by role
  search?: string;
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "people": [
      {
        "id": "uuid-3",
        "name": "Trần Hưng Đạo",
        "title": "Hưng Đạo Vương",
        "birthYear": 1228,
        "deathYear": 1300,
        "role": "tuong-linh",
        "avatar": "/images/avatars/tran-hung-dao.jpg",
        "slug": "tran-hung-dao",
        "dynasty": {...}
      }
    ],
    "pagination": {...}
  }
}
```

#### GET /api/people/:slug
Lấy chi tiết một nhân vật

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid-3",
    "name": "Trần Hưng Đạo",
    "givenName": "Trần Quốc Tuấn",
    "title": "Hưng Đạo Vương",
    "biography": "# Tiểu sử...",
    "achievements": ["..."],
    "quotes": ["..."],
    "events": [...],
    "relationships": [...]
  }
}
```

---

### 3. Dynasties API

#### GET /api/dynasties
Lấy danh sách triều đại

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid-2",
      "name": "Nhà Trần",
      "nameEn": "Tran Dynasty",
      "startYear": 1225,
      "endYear": 1400,
      "founder": "Trần Thái Tông",
      "capital": "Thăng Long",
      "color": "#D32F2F",
      "slug": "nha-tran"
    }
  ]
}
```

#### GET /api/dynasties/:slug
Lấy chi tiết một triều đại

---

### 4. Locations API

#### GET /api/locations
Lấy danh sách địa điểm lịch sử

**Query Parameters:**
```typescript
{
  type?: string;        // Filter by type
  province?: string;    // Filter by province
  bounds?: {            // Filter by map bounds
    north: number;
    south: number;
    east: number;
    west: number;
  }
}
```

#### GET /api/locations/:slug
Lấy chi tiết một địa điểm

---

### 5. Search API

#### GET /api/search
Tìm kiếm toàn bộ

**Query Parameters:**
```typescript
{
  q: string;            // Required
  type?: 'events' | 'people' | 'all';
  limit?: number;
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "events": [...],
    "people": [...],
    "total": 45
  }
}
```

---

### 6. Quiz API

#### GET /api/quiz
Lấy câu hỏi quiz ngẫu nhiên

**Query Parameters:**
```typescript
{
  count?: number;       // Default: 10
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid-quiz-1",
      "question": "Trận Bạch Đằng năm 1288 do ai chỉ huy?",
      "options": [
        {"text": "Trần Hưng Đạo", "isCorrect": true},
        {"text": "Lý Thường Kiệt", "isCorrect": false},
        {"text": "Ngô Quyền", "isCorrect": false},
        {"text": "Lê Lợi", "isCorrect": false}
      ],
      "difficulty": "medium",
      "points": 10
    }
  ]
}
```

#### POST /api/quiz/submit
Nộp câu trả lời (Requires authentication)

**Request Body:**
```json
{
  "quizId": "uuid-quiz-1",
  "selectedAnswer": 0
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "correct": true,
    "points": 10,
    "explanation": "Trần Hưng Đạo là chủ tướng..."
  }
}
```

---

### 7. User API

#### GET /api/user/profile
Lấy thông tin profile (Requires authentication)

#### PUT /api/user/profile
Cập nhật profile

#### GET /api/user/bookmarks
Lấy danh sách bookmarks

#### POST /api/user/bookmarks
Thêm bookmark

#### DELETE /api/user/bookmarks/:id
Xóa bookmark

---

### 8. Stats API

#### GET /api/stats
Lấy thống kê tổng quan

**Response:**
```json
{
  "success": true,
  "data": {
    "totalEvents": 1000,
    "totalPeople": 100,
    "totalDynasties": 10,
    "totalUsers": 5000,
    "popularEvents": [...],
    "recentEvents": [...]
  }
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "error": "Invalid parameters",
  "details": [...]
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "error": "Authentication required"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "error": "Insufficient permissions"
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Internal server error"
}
```

---

## Rate Limiting

- **Anonymous**: 100 requests / hour
- **Authenticated**: 1000 requests / hour
- **Premium**: 10000 requests / hour

Rate limit headers:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1234567890
```

---

## Webhooks

Đăng ký webhooks để nhận thông báo real-time về:
- Sự kiện mới được publish
- Nhân vật mới được thêm
- Comments mới
- User mentions

---

## SDK & Libraries

### JavaScript/TypeScript
```bash
npm install @daivietkyso/sdk
```

```typescript
import { DaiVietKySo } from '@daivietkyso/sdk';

const client = new DaiVietKySo({
  apiKey: 'your-api-key'
});

const events = await client.events.list({ dynasty: 'nha-tran' });
```

---

## Changelog

See [API_CHANGELOG.md](./API_CHANGELOG.md) for version history and breaking changes.
