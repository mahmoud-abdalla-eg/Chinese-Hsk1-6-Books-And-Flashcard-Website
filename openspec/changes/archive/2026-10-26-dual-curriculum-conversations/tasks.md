# Tasks

## 1. Curriculum UI & Schema Foundation

- [x] 1.1 Update `chinese-hsk-website/lib/admin/course-conversations.js` and `chinese-hsk-website/lib/data/conversations.js` to normalize the `curriculum` field (`"standard"` | `"hsk3"`).
- [x] 1.2 Implement interactive client component `chinese-hsk-website/components/conversations/conversation-curriculum-filter.jsx` with tabs for All, HSK 3.0, and Standard Course, integrating curriculum badges into `ConversationLesson`.

## 2. Authoring HSK 1 New 3.0 Course Lessons (Units 1 to 15)

- [x] 2.1 Author HSK 1 New 3.0 Lessons 1 to 5 ("AI小语，你好！", "我叫李文", "我是中国人", "我有两个孩子", "今天我休息") with 4-layer dialogues (Hanzi, Pinyin with tone marks, English, Arabic), grammar notes, cultural points, and comprehension checks.
- [x] 2.2 Author HSK 1 New 3.0 Lessons 6 to 10 ("你的手机号是多少？", "我晚上六点半下班", "我爸爸也在医院工作", "我明天上午在学校学习", "这里的苹果真便宜！").
- [x] 2.3 Author HSK 1 New 3.0 Lessons 11 to 15 ("我读大学呢", "昨天下雪了", "请给我一杯茶", "我看了一个电影", "大兴机场见！").

## 3. Authoring HSK 2 New 3.0 Course Lessons (Units 1 to 15)

- [x] 3.1 Author HSK 2 New 3.0 Lessons 1 to 5 ("她请我们吃了北京烤鸭", "还是打车去北大吧", "我想去西安旅游", "你穿红色的很好看", "第一次去中国朋友家") based on official 2026 FLTRP textbook dialogues.
- [x] 3.2 Author HSK 2 New 3.0 Lessons 6 to 10 ("小雪，生日快乐！", "他篮球打得很好", "虽然你忘了，但是我记得", "我去买杯奶茶", "就要考试了").
- [x] 3.3 Author HSK 2 New 3.0 Lessons 11 to 15 ("我最喜欢吃中国菜", "这里比北京冷多了", "我们爱上中文课", "一个人过年多没意思啊", "我想再去一次中国").

## 4. Database Seeding & System Verification

- [x] 4.1 Update `seed-conversations.js` to upsert all 30 lessons for HSK 1 (15 Standard + 15 HSK 3.0) and all 30 lessons for HSK 2 (15 Standard + 15 HSK 3.0) into Supabase `course_conversations`, verifying total counts.
- [x] 4.2 Execute Next.js production build (`npm run build`) to verify that `/conversations/hsk/1` and `/conversations/hsk/2` generate cleanly with zero errors and smooth curriculum filtering.
