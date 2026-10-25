# Tasks

## 1. Vocabulary Mapping & Authoring Setup

- [x] 1.1 Verify HSK 2 vocabulary IDs against `chinese-hsk-website/source-data/hsk/hsk-2.json` and ensure vocabulary references match database keys.
- [x] 1.2 Build HSK 2 authoring pipeline script `chinese-hsk-website/scripts/author-all-hsk2.js` supporting multilingual text and comprehension schemas.

## 2. Authoring HSK 2 Lessons 1 to 5 (Travel, Schedules & Shopping)

- [x] 2.1 Author Unit 1 ("九月去北京旅游最好" / September is best for travel), Unit 2 ("我每天六点起床" / I get up at 6 every day), and Unit 3 ("左边那个红色的是我的" / The red one on the left is mine) with full speaker dialogues, Hanzi, Pinyin diacritics, English, Arabic, and comprehension checks.
- [x] 2.2 Author Unit 4 ("这个工作是他帮我介绍的" / He recommended this job) and Unit 5 ("就买这件吧" / Take this one) with complete multi-turn dialogues and vocabulary linkage.

## 3. Authoring HSK 2 Lessons 6 to 10 (Daily Routine, Distance & Decisions)

- [x] 3.1 Author Unit 6 ("你怎么不吃了" / Why don't you eat more?), Unit 7 ("你家离公司远吗" / Do you live far from your company?), and Unit 8 ("让我想想再告诉你" / Let me think about it) with authentic speaker dialogue lines and translations.
- [x] 3.2 Author Unit 9 ("题太多，我没做完" / Too many questions, I didn't finish) and Unit 10 ("别找了，手机在桌子上呢" / Stop looking, phone is on the table) with realistic dialogues and cultural notes.

## 4. Authoring HSK 2 Lessons 11 to 15 (Comparisons, Aspect & Festive Occasions)

- [x] 4.1 Author Unit 11 ("他比我大三岁" / He is 3 years older than me), Unit 12 ("你穿得太少了" / You wear too little), and Unit 13 ("门开着呢" / The door is open) with dialogues and audio track references.
- [x] 4.2 Author Unit 14 ("你看过那个电影吗" / Have you seen that movie?) and Unit 15 ("新年就要到了" / New Year is coming) completing all 15 official textbook units.

## 5. Database Synchronization & System Verification

- [x] 5.1 Execute database seeder script to upsert all 15 authored HSK 2 conversation units into Supabase `course_conversations` and verify record count.
- [x] 5.2 Verify `/conversations/hsk/2` in the browser or build environment to confirm that all 15 lessons render with speech synthesis, pinyin/translation toggles, and zero pending placeholders.
