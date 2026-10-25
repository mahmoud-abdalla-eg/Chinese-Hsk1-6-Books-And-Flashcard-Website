# Tasks

## 1. Schema Preparation & Vocabulary Mapping

- [x] 1.1 Verify HSK 1 vocabulary IDs against `chinese-hsk-website/source-data/hsk/hsk-1.json` and ensure vocabulary references match database keys.
- [x] 1.2 Update conversation normalizer and database schema mapper in `chinese-hsk-website/lib/admin/course-conversations.js` to support `contentType` (`dialogue` | `passage`).

## 2. Authoring HSK 1 Lessons 1 to 5 (Foundations & Daily Greetings)

- [x] 2.1 Author Unit 1 ("你好" / Hello), Unit 2 ("谢谢你" / Thank you), and Unit 3 ("你叫什么名字" / What's your name) with full dialogue turns, Hanzi, Pinyin diacritics, English, Arabic, and comprehension checks.
- [x] 2.2 Author Unit 4 ("她是我的汉语老师" / She is my Chinese teacher) and Unit 5 ("她女儿今年二十岁" / Her daughter is 20 years old this year) with complete multi-turn dialogues and vocabulary linkage.

## 3. Authoring HSK 1 Lessons 6 to 10 (Daily Life & Social Inquiries)

- [x] 3.1 Author Unit 6 ("我会说汉语" / I can speak Chinese), Unit 7 ("今天几号" / What's the date today?), and Unit 8 ("我想喝茶" / I'd like some tea) with authentic speaker dialogue lines and translations.
- [x] 3.2 Author Unit 9 ("你儿子在哪儿工作" / Where does your son work?) and Unit 10 ("我能坐这儿吗" / Can I sit here?) with realistic dialogues and cultural notes.

## 4. Authoring HSK 1 Lessons 11 to 15 (Time, Weather, Actions & Travel)

- [x] 4.1 Author Unit 11 ("现在几点" / What's the time now?), Unit 12 ("明天天气怎么样" / What will the weather be like tomorrow?), and Unit 13 ("他在学做中国菜呢" / He is learning to cook Chinese food) with dialogues and audio track references.
- [x] 4.2 Author Unit 14 ("她买了不少衣服" / She has bought quite a few clothes) and Unit 15 ("我是坐飞机来的" / I came here by plane) completing all 15 official textbook units.

## 5. Database Synchronization & System Verification

- [x] 5.1 Execute database seeder script to upsert all 15 authored HSK 1 conversation units into Supabase `course_conversations` and verify record count.
- [x] 5.2 Verify `/conversations/hsk/1` in the browser or build environment to confirm that all 15 lessons render with speech synthesis, pinyin/translation toggles, and zero pending placeholders.
