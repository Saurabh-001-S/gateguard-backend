# GateGuard Backend

College Entry/Exit Management System — Node.js + Express + TypeScript + Prisma

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy env and fill in your DATABASE_URL + JWT_SECRET
cp .env.example .env

# 3. Generate Prisma client
npm run db:generate

# 4. Run migrations (first time or after schema changes)
npm run db:migrate

# 5. Seed sample data
npm run db:seed

# 6. Start dev server
npm run dev
```

---

## API Reference

All responses follow `{ success, message, data? }`.

### Auth

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/api/auth/student/register` | — | Register student |
| POST | `/api/auth/student/login` | — | Login + create device session |
| POST | `/api/auth/student/logout` | Student JWT | Deactivate session |
| POST | `/api/auth/admin/login` | — | Admin login |

**Student login body:**
```json
{
  "email": "aryan@college.edu",
  "password": "Student@123",
  "deviceId": "uuid-of-device",
  "deviceName": "OnePlus 11R",
  "latitude": 23.0225,
  "longitude": 72.5714
}
```

---

### Entry / Exit (Student)

> All routes require `Authorization: Bearer <student_token>`

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/entry-exit/exit` | Request exit — auto-approved if near gate |
| POST | `/api/entry-exit/entry` | Request entry — goes to admin queue |
| GET | `/api/entry-exit/my-history` | Student's own log |

**Request body (both exit & entry):**
```json
{
  "latitude": 23.0225,
  "longitude": 72.5714
}
```

**Exit flow:**
- Student must be `INSIDE`
- If within gate radius → `AUTO_APPROVED`, status → `OUTSIDE`
- If outside radius → `REJECTED`, flagged `suspicious` if > 5× radius

**Entry flow:**
- Student must be `OUTSIDE`
- If within gate radius → `PENDING` (admin must approve)
- If outside radius → `REJECTED` immediately

---

### Admin Panel

> All routes require `Authorization: Bearer <admin_token>`

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/admin/dashboard` | Stats + recent activity |
| GET | `/api/admin/requests?status=PENDING` | Entry requests queue |
| PATCH | `/api/admin/requests/:logId/approve` | Approve entry → student `INSIDE` |
| PATCH | `/api/admin/requests/:logId/reject` | Reject entry |
| GET | `/api/admin/students` | All students (filter by `status`, `department`) |
| GET | `/api/admin/students/:id/history` | Full history for one student |
| GET | `/api/admin/audit-logs?page=1&limit=50` | Paginated full log |
| GET | `/api/admin/suspicious` | All suspicious attempts |

---

## Schema fixes vs. your original

| Issue | Original | Fixed |
|-------|----------|-------|
| Missing FK column | `department @relation(fields: [id])` | Added `departmentId Int` field |
| Non-nullable adminId on auto-exits | `adminId Int` | `adminId Int?` (nullable) |
| Non-nullable approvalTime | `approvalTime DateTime` | `approvalTime DateTime?` |
| IP uniqueness too strict | `ipaddress String @unique` | Removed `@unique` |
| Typo in field name | `latitiude` | `latitude` |
| Missing composite index | — | `@@index([studentId, requestTime])` |
| Inconsistent naming | `NAME`, `EMAIL`, `PASSWORD` | `name`, `email`, `password` |
| `roomNo Int` | Int (room "A-204" can't be int) | Changed to `String` |

---

## Business Rules enforced in code

1. **Single pending request** — `assertNoPendingRequest()` blocks duplicate requests
2. **Status-based logic** — EXIT only if `INSIDE`, ENTRY only if `OUTSIDE`
3. **Location validation** — Haversine formula, gate radius from `GateConfig`
4. **Suspicious flagging** — distance > 5× radius = `suspicious: true`
5. **Single active session** — login deactivates sessions on other devices
6. **Immutable audit trail** — logs are never deleted, only created
7. **Atomic status updates** — Prisma `$transaction` ensures log + status change together
