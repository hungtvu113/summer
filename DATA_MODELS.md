# Data Models & Schema - Đại Việt Ký Số

## 📊 Database Schema (PostgreSQL + Prisma)

### Core Entities

#### 1. Dynasty (Triều Đại)
```typescript
interface Dynasty {
  id: string;              // UUID
  name: string;            // "Nhà Trần", "Nhà Lý"
  nameVietnamese: string;  // Tên tiếng Việt
  nameEn?: string;         // "Tran Dynasty"
  startYear: number;       // 1225
  endYear: number;         // 1400
  founder: string;         // "Trần Thái Tông"
  capital: string;         // "Thăng Long"
  description: string;     // Mô tả ngắn
  content: string;         // Nội dung chi tiết (Markdown)
  image?: string;          // Hero image URL
  color: string;           // Màu đại diện "#FF5733"
  
  // Relations
  events: Event[];         // Các sự kiện trong triều đại
  rulers: Person[];        // Các vị vua
  
  // Metadata
  slug: string;            // URL-friendly: "nha-tran"
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;       // User ID
}
```

#### 2. Event (Sự Kiện Lịch Sử)
```typescript
interface Event {
  id: string;
  title: string;           // "Chiến Thắng Bạch Đằng"
  titleEn?: string;
  
  // Time
  date: Date;              // Ngày chính xác (nếu có)
  startYear: number;       // 1288
  endYear?: number;        // Cho sự kiện kéo dài nhiều năm
  
  // Content
  summary: string;         // Tóm tắt 200-300 ký tự
  content: string;         // Nội dung đầy đủ (Markdown)
  significance: string;    // Ý nghĩa lịch sử
  
  // Classification
  category: EventCategory; // "chien-tranh", "chinh-tri", "van-hoa"
  type: EventType;         // "tran-chien", "khoi-nghia", "ngoai-giao"
  importance: number;      // 1-5 stars
  
  // Location
  locationName: string;    // "Sông Bạch Đằng"
  locationLat?: number;    // 20.9517
  locationLng?: number;    // 106.8408
  
  // Media
  images: string[];        // Array of image URLs
  videos?: string[];       // Video URLs
  audio?: string;          // Audio guide URL
  
  // Relations
  dynastyId: string;       // FK to Dynasty
  dynasty: Dynasty;
  participants: EventPerson[]; // Many-to-many với Person
  relatedEvents: Event[];  // Related events
  
  // SEO & Metadata
  slug: string;
  tags: string[];
  views: number;
  likes: number;
  
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  author: User;
  status: 'draft' | 'published' | 'archived';
}

enum EventCategory {
  CHIEN_TRANH = 'chien-tranh',       // Chiến tranh
  CHINH_TRI = 'chinh-tri',           // Chính trị
  VAN_HOA = 'van-hoa',               // Văn hóa
  KINH_TE = 'kinh-te',               // Kinh tế
  XA_HOI = 'xa-hoi',                 // Xã hội
  TON_GIAO = 'ton-giao',             // Tôn giáo
  KHOA_HOC = 'khoa-hoc',             // Khoa học
  NGHE_THUAT = 'nghe-thuat',         // Nghệ thuật
}

enum EventType {
  TRAN_CHIEN = 'tran-chien',         // Trận chiến
  KHOI_NGHIA = 'khoi-nghia',         // Khởi nghĩa
  NGOAI_GIAO = 'ngoai-giao',         // Ngoại giao
  CAI_CACH = 'cai-cach',             // Cải cách
  PHAT_MINH = 'phat-minh',           // Phát minh
  XAY_DUNG = 'xay-dung',             // Xây dựng
  KHAC = 'khac',                      // Khác
}
```

#### 3. Person (Nhân Vật Lịch Sử)
```typescript
interface Person {
  id: string;
  name: string;            // "Trần Hưng Đạo"
  nameEn?: string;
  givenName: string;       // "Quốc Tuấn"
  title: string;           // "Hưng Đạo Vương"
  
  // Life
  birthYear?: number;      // 1228
  deathYear?: number;      // 1300
  birthPlace?: string;     // "Thăng Long"
  deathPlace?: string;
  
  // Information
  biography: string;       // Tiểu sử (Markdown)
  achievements: string[];  // Thành tựu
  quotes: string[];        // Danh ngôn
  
  // Classification
  role: PersonRole;        // "tuong-linh", "vua-chua"
  era: string;             // "Thời Trần"
  
  // Media
  avatar: string;          // Portrait image
  images: string[];
  
  // Relations
  dynastyId: string;
  dynasty: Dynasty;
  events: EventPerson[];   // Events participated in
  relationships: PersonRelation[]; // Family, colleagues
  
  // Stats
  views: number;
  likes: number;
  
  // Metadata
  slug: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

enum PersonRole {
  VUA_CHUA = 'vua-chua',             // Vua chúa
  TUONG_LINH = 'tuong-linh',         // Tướng lĩnh
  ANH_HUNG = 'anh-hung',             // Anh hùng
  VAN_NHAN = 'van-nhan',             // Văn nhân
  HAC_GIA = 'hac-gia',               // Học giả
  NGHE_NHAN = 'nghe-nhan',           // Nghệ nhân
  SU_GIA = 'su-gia',                 // Sử gia
  CHINH_TRI_GIA = 'chinh-tri-gia',   // Chính trị gia
  TON_GIAO = 'ton-giao',             // Tôn giáo
}
```

#### 4. Location (Địa Điểm Lịch Sử)
```typescript
interface Location {
  id: string;
  name: string;            // "Thành Nhà Hồ"
  nameEn?: string;
  alternativeNames: string[]; // Tên gọi khác
  
  // Geography
  latitude: number;
  longitude: number;
  province: string;        // "Thanh Hóa"
  region: string;          // "Miền Bắc"
  
  // Information
  description: string;
  history: string;         // Lịch sử địa điểm
  significance: string;    // Ý nghĩa
  
  // Type
  type: LocationType;      // "di-tich", "thanh-pho"
  era: string;            // Thời kỳ
  
  // Status
  currentStatus: string;   // Tình trạng hiện tại
  unescoHeritage: boolean; // Di sản UNESCO
  
  // Media
  images: string[];
  virtualTour?: string;    // 360° tour URL
  
  // Relations
  events: Event[];         // Events at this location
  
  // Metadata
  slug: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

enum LocationType {
  DI_TICH = 'di-tich',           // Di tích
  THANH_PHO = 'thanh-pho',       // Thành phố
  CUNG_DIEN = 'cung-dien',       // Cung điện
  DEN_CHUA = 'den-chua',         // Đền, chùa
  LANG_MO = 'lang-mo',           // Lăng mộ
  TRUONG_HOC = 'truong-hoc',     // Trường học
  BAO_TANG = 'bao-tang',         // Bảo tàng
}
```

#### 5. User (Người Dùng)
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  
  // Authentication
  password: string;        // Hashed
  emailVerified: boolean;
  
  // Profile
  bio?: string;
  location?: string;
  interests: string[];     // Sở thích
  
  // Roles & Permissions
  role: UserRole;
  permissions: string[];
  
  // Activity
  bookmarks: Bookmark[];
  comments: Comment[];
  contributions: Contribution[];
  
  // Gamification
  points: number;
  level: number;
  badges: Badge[];
  
  // Settings
  preferences: UserPreferences;
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}

enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  CONTRIBUTOR = 'contributor',
  USER = 'user',
}

interface UserPreferences {
  language: 'vi' | 'en';
  theme: 'light' | 'dark' | 'auto';
  notifications: {
    email: boolean;
    push: boolean;
  };
}
```

#### 6. Quiz (Câu Đố Lịch Sử)
```typescript
interface Quiz {
  id: string;
  question: string;
  questionEn?: string;
  
  // Options
  options: QuizOption[];
  correctAnswer: number;   // Index of correct option
  
  // Metadata
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  
  // Explanation
  explanation: string;     // Giải thích đáp án
  
  // Relations
  relatedEventId?: string;
  relatedPersonId?: string;
  
  // Stats
  timesAnswered: number;
  correctRate: number;     // Tỷ lệ trả lời đúng
  
  createdAt: Date;
  updatedAt: Date;
}

interface QuizOption {
  text: string;
  isCorrect: boolean;
}
```

### Relationships

#### EventPerson (Many-to-Many)
```typescript
interface EventPerson {
  eventId: string;
  personId: string;
  role: string;            // "Chủ tướng", "Tham gia"
  description?: string;    // Vai trò cụ thể
  
  event: Event;
  person: Person;
}
```

#### PersonRelation (Self-referencing)
```typescript
interface PersonRelation {
  personId: string;
  relatedPersonId: string;
  relationType: RelationType;
  description?: string;
  
  person: Person;
  relatedPerson: Person;
}

enum RelationType {
  CHA_CON = 'cha-con',
  ANH_EM = 'anh-em',
  VO_CHONG = 'vo-chong',
  THAY_TRO = 'thay-tro',
  DONG_MINH = 'dong-minh',
  DICH_THU = 'dich-thu',
}
```

## 🗄️ Sample Data

### Dynasty Example
```json
{
  "id": "uuid-1",
  "name": "Nhà Trần",
  "nameEn": "Tran Dynasty",
  "startYear": 1225,
  "endYear": 1400,
  "founder": "Trần Thái Tông",
  "capital": "Thăng Long",
  "color": "#D32F2F",
  "slug": "nha-tran"
}
```

### Event Example
```json
{
  "id": "uuid-2",
  "title": "Chiến Thắng Bạch Đằng 1288",
  "titleEn": "Battle of Bach Dang 1288",
  "startYear": 1288,
  "date": "1288-01-18T00:00:00Z",
  "summary": "Trận chiến quyết định đánh bại quân Nguyên-Mông lần thứ ba",
  "category": "CHIEN_TRANH",
  "type": "TRAN_CHIEN",
  "importance": 5,
  "locationName": "Sông Bạch Đằng",
  "locationLat": 20.9517,
  "locationLng": 106.8408,
  "dynastyId": "uuid-1",
  "slug": "chien-thang-bach-dang-1288"
}
```

### Person Example
```json
{
  "id": "uuid-3",
  "name": "Trần Hưng Đạo",
  "nameEn": "Tran Hung Dao",
  "givenName": "Trần Quốc Tuấn",
  "title": "Hưng Đạo Vương",
  "birthYear": 1228,
  "deathYear": 1300,
  "role": "TUONG_LINH",
  "dynastyId": "uuid-1",
  "slug": "tran-hung-dao"
}
```

## 📈 Indexes for Performance

```sql
-- Events
CREATE INDEX idx_events_dynasty ON events(dynasty_id);
CREATE INDEX idx_events_year ON events(start_year);
CREATE INDEX idx_events_category ON events(category);
CREATE INDEX idx_events_slug ON events(slug);

-- People
CREATE INDEX idx_people_dynasty ON people(dynasty_id);
CREATE INDEX idx_people_role ON people(role);
CREATE INDEX idx_people_slug ON people(slug);

-- Locations
CREATE INDEX idx_locations_coordinates ON locations(latitude, longitude);
CREATE INDEX idx_locations_type ON locations(type);
```

---

**Note**: Schema sẽ được implement với Prisma ORM
