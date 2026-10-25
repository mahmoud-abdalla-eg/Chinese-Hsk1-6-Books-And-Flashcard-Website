# -*- coding: utf-8 -*-
import json
import os

out_dir = "chinese-hsk-website/source-data/conversations/hsk-1/hsk3"
os.makedirs(out_dir, exist_ok=True)

# UNIT 6
unit6 = {
    "id": "hsk-1-hsk3-unit-6",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 6,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第6课：你的手机号是多少？",
        "en": "Lesson 6: What's your cell phone number?",
        "ar": "الدرس 6: ما هو رقم هاتفك المحمول؟"
    },
    "dialogue": [
        # Text 1
        {
            "id": "6-1-1",
            "role": "李文 (Li Wen)",
            "hanzi": "家月，你的手机号是多少？",
            "pinyin": "Jiāyuè, nǐ de shǒujīhào shì duōshao?",
            "translation": {
                "en": "Jiayue, what's your cell phone number?",
                "ar": "جيايوي، ما هو رقم هاتفك المحمول؟"
            },
            "audio": None
        },
        {
            "id": "6-1-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我的手机号是+33 601493190。",
            "pinyin": "Wǒ de shǒujīhào shì +33 601493190.",
            "translation": {
                "en": "My cell phone number is +33 601493190.",
                "ar": "رقم هاتفي المحمول هو +33 601493190."
            },
            "audio": None
        },
        {
            "id": "6-1-3",
            "role": "李文 (Li Wen)",
            "hanzi": "我的手机号是+86 13552721160。",
            "pinyin": "Wǒ de shǒujīhào shì +86 13552721160.",
            "translation": {
                "en": "My cell phone number is +86 13552721160.",
                "ar": "رقم هاتفي المحمول هو +86 13552721160."
            },
            "audio": None
        },
        {
            "id": "6-1-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "好的。",
            "pinyin": "Hǎo de.",
            "translation": {
                "en": "Alright.",
                "ar": "حسناً."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "6-2-1",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "家月，明天你去哪儿？",
            "pinyin": "Jiāyuè, míngtiān nǐ qù nǎr?",
            "translation": {
                "en": "Jiayue, where are you going tomorrow?",
                "ar": "جيايوي، إلى أين ستذهبين غداً؟"
            },
            "audio": None
        },
        {
            "id": "6-2-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我想去超市买东西。",
            "pinyin": "Wǒ xiǎng qù chāoshì mǎi dōngxi.",
            "translation": {
                "en": "I want to go to the supermarket to buy groceries.",
                "ar": "أريد الذهاب إلى السوبرماركت لشراء بعض الأشياء."
            },
            "audio": None
        },
        {
            "id": "6-2-3",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "你去超市买什么？",
            "pinyin": "Nǐ qù chāoshì mǎi shénme?",
            "translation": {
                "en": "What are you going to buy at the supermarket?",
                "ar": "ماذا ستشترين من السوبرماركت؟"
            },
            "audio": None
        },
        {
            "id": "6-2-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我想买些牛奶。",
            "pinyin": "Wǒ xiǎng mǎi xiē niúnǎi.",
            "translation": {
                "en": "I want to buy some milk.",
                "ar": "أريد شراء بعض الحليب."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "6-3-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "星期天我们去哪儿吃晚饭？",
            "pinyin": "Xīngqītiān wǒmen qù nǎr chī wǎnfàn?",
            "translation": {
                "en": "Where are we going for dinner on Sunday?",
                "ar": "إلى أين سنذهب لتناول العشاء يوم الأحد؟"
            },
            "audio": None
        },
        {
            "id": "6-3-2",
            "role": "刘明 (Liu Ming)",
            "hanzi": "我还想去西安饭店。",
            "pinyin": "Wǒ hái xiǎng qù Xī'ān Fàndiàn.",
            "translation": {
                "en": "I'd like to go to Xi'an Restaurant again.",
                "ar": "أود الذهاب إلى مطعم شيآن مجدداً."
            },
            "audio": None
        },
        {
            "id": "6-3-3",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "那边的包子非常好吃，我想吃包子。",
            "pinyin": "Nàbian de bāozi fēicháng hǎochī, wǒ xiǎng chī bāozi.",
            "translation": {
                "en": "The steamed stuffed buns there are very delicious—I want to eat buns.",
                "ar": "الكعك المحشو على البخار هناك لذيذ جداً، أريد أن آكل الكعك المحشو."
            },
            "audio": None
        },
        {
            "id": "6-3-4",
            "role": "刘小明 (Liu Xiaoming)",
            "hanzi": "妈妈，我想吃米饭，不想吃包子。",
            "pinyin": "Māma, wǒ xiǎng chī mǐfàn, bù xiǎng chī bāozi.",
            "translation": {
                "en": "Mom, I want to eat rice—not steamed stuffed buns.",
                "ar": "أمي، أريد أن آكل الأرز، لا أريد الكعك المحشو."
            },
            "audio": None
        },
        {
            "id": "6-3-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "好的。我们怎么去？",
            "pinyin": "Hǎo de. Wǒmen zěnme qù?",
            "translation": {
                "en": "Alright. How shall we get there?",
                "ar": "حسناً. كيف سنذهب؟"
            },
            "audio": None
        },
        {
            "id": "6-3-6",
            "role": "刘明 (Liu Ming)",
            "hanzi": "坐出租车去。",
            "pinyin": "Zuò chūzūchē qù.",
            "translation": {
                "en": "Let's take a taxi.",
                "ar": "لنذهب بسيارة الأجرة."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Modal Verb 想 (xiǎng)",
            "explanation": "‘想’ is placed before a verb to express an intention, wish, or desire: 我想去超市 (I want to go to the supermarket). The negative form is ‘不想’ (bù xiǎng).",
            "arExplanation": "الفعل المساعد '想' يوضع قبل الفعل للتعبير عن الرغبة أو النية أو التخطيط، ونفيه يكون باستخدام '不想'."
        },
        {
            "point": "Serial Verb Sentences (连动句)",
            "explanation": "Two or more verbal expressions occur in succession without a conjunction to express a sequence of actions or an action and its purpose: 去超市买东西 (go to the supermarket to buy things).",
            "arExplanation": "الجمل ذات الأفعال المتسلسلة (连动句) تأتي فيها جملتان فعليتان أو أكثر متتابعتين للدلالة على الهدف والغاية: 'ذهب إلى السوبرماركت لشراء الأغراض'."
        },
        {
            "point": "Interrogative Pronoun 怎么 (zěnme)",
            "explanation": "‘怎么’ is used before a verb to enquire about the method, manner, or vehicle used: 我们怎么去？ (How shall we go?) -> 坐出租车去 (Go by taxi).",
            "arExplanation": "اسم الاستفهام '怎么' يُستعمل قبل الفعل للسؤال عن الوسيلة أو الكيفية أو طريقة الانتقال: 'كيف سنذهب؟'."
        }
    ],
    "culturalNotes": [
        {
            "title": "Pronunciation of Digit '1' in Phone Numbers (幺 yāo)",
            "detail": "When reciting phone numbers, room numbers, or bus lines, the digit '1' (yī) is conventionally pronounced 'yāo' to avoid acoustic confusion with '7' (qī).",
            "arDetail": "عند نطق أرقام الهواتف أو أرقام الغرف، يُنطق الرقم '1' بصوت 'yāo' بدلاً من 'yī' لتجنب الالتباس الصوتي مع الرقم '7' (qī)."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q6-1",
            "question": "What does Bai Jiayue plan to buy at the supermarket?",
            "arQuestion": "ماذا تخطط باي جيايوي لشرائه من السوبرماركت؟",
            "options": [
                "牛奶 (Niúnǎi - Milk)",
                "包子 (Bāozi - Steamed buns)",
                "米饭 (Mǐfàn - Rice)",
                "苹果 (Píngguǒ - Apples)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q6-2",
            "question": "How will Wang Yixue's family travel to Xi'an Restaurant?",
            "arQuestion": "كيف ستتوجه عائلة وانغ ييشيويه إلى مطعم شيآن؟",
            "options": [
                "坐出租车 (By taxi)",
                "走路 (On foot)",
                "坐地铁 (By subway)",
                "骑自行车 (By bicycle)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 6."
}

# UNIT 7
unit7 = {
    "id": "hsk-1-hsk3-unit-7",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 7,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第7课：我晚上六点半下班",
        "en": "Lesson 7: I finish work at 6:30 in the evening",
        "ar": "الدرس 7: أنتهي من العمل في السادسة والنصف مساءً"
    },
    "dialogue": [
        # Text 1
        {
            "id": "7-1-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "现在几点？",
            "pinyin": "Xiànzài jǐ diǎn?",
            "translation": {
                "en": "What time is it now?",
                "ar": "كم الساعة الآن؟"
            },
            "audio": None
        },
        {
            "id": "7-1-2",
            "role": "安妮 (Annie)",
            "hanzi": "早上八点四十。",
            "pinyin": "Zǎoshang bā diǎn sìshí.",
            "translation": {
                "en": "It's 8:40 in the morning.",
                "ar": "إنها الثامنة وأربعون دقيقة صباحاً."
            },
            "audio": None
        },
        {
            "id": "7-1-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我上午十点十分有课。",
            "pinyin": "Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.",
            "translation": {
                "en": "I have a class at 10:10 in the morning.",
                "ar": "لدي درس في العاشرة وعشر دقائق صباحاً."
            },
            "audio": None
        },
        {
            "id": "7-1-4",
            "role": "安妮 (Annie)",
            "hanzi": "好的，我们下午两点见吧。",
            "pinyin": "Hǎo de, wǒmen xiàwǔ liǎng diǎn jiàn ba.",
            "translation": {
                "en": "Alright, let's meet at 2:00 in the afternoon.",
                "ar": "حسناً، لنلتقِ في الثانية بعد الظهر."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "7-2-1",
            "role": "李文 (Li Wen)",
            "hanzi": "下午我想去电影院看电影，你去吗？",
            "pinyin": "Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng, nǐ qù ma?",
            "translation": {
                "en": "I want to go to the cinema to watch a movie this afternoon. Are you going?",
                "ar": "أريد الذهاب إلى السينما بعد الظهر لمشاهدة فيلم، هل ستذهبين؟"
            },
            "audio": None
        },
        {
            "id": "7-2-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我不想去，下午还有事。",
            "pinyin": "Wǒ bù xiǎng qù, xiàwǔ hái yǒu shì.",
            "translation": {
                "en": "I don't want to go. I still have things to do this afternoon.",
                "ar": "لا أريد الذهاب، ما زال لدي عمل بعد الظهر."
            },
            "audio": None
        },
        {
            "id": "7-2-3",
            "role": "李文 (Li Wen)",
            "hanzi": "好的。明天呢？",
            "pinyin": "Hǎo de. Míngtiān ne?",
            "translation": {
                "en": "Okay. How about tomorrow?",
                "ar": "حسناً. وماذا عن الغد؟"
            },
            "audio": None
        },
        {
            "id": "7-2-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我明天下午两点还要上课呢，四点半下课。",
            "pinyin": "Wǒ míngtiān xiàwǔ liǎng diǎn hái yào shàngkè ne, sì diǎn bàn xiàkè.",
            "translation": {
                "en": "I still have class tomorrow afternoon at 2:00, and it finishes at 4:30.",
                "ar": "لدي درس أيضاً غداً في الثانية بعد الظهر، وينتهي عند الرابعة والنصف."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "7-3-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "喂，你在哪儿呢？",
            "pinyin": "Wèi, nǐ zài nǎr ne?",
            "translation": {
                "en": "Hey, where are you?",
                "ar": "ألو، أين أنت؟"
            },
            "audio": None
        },
        {
            "id": "7-3-2",
            "role": "刘明 (Liu Ming)",
            "hanzi": "我在家里呢。",
            "pinyin": "Wǒ zài jiā li ne.",
            "translation": {
                "en": "I'm at home.",
                "ar": "أنا في المنزل."
            },
            "audio": None
        },
        {
            "id": "7-3-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "我晚上六点半下班。",
            "pinyin": "Wǒ wǎnshang liù diǎn bàn xiàbān.",
            "translation": {
                "en": "I'll finish work at 6:30 in the evening.",
                "ar": "سأنتهي من عملي في السادسة والنصف مساءً."
            },
            "audio": None
        },
        {
            "id": "7-3-4",
            "role": "刘明 (Liu Ming)",
            "hanzi": "我八点去医院上班。",
            "pinyin": "Wǒ bā diǎn qù yīyuàn shàngbān.",
            "translation": {
                "en": "I go to work at the hospital at 8:00.",
                "ar": "سأذهب للعمل في المستشفى في الثامنة."
            },
            "audio": None
        },
        {
            "id": "7-3-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "好的，你去店里买些菜吧。",
            "pinyin": "Hǎo de, nǐ qù diàn li mǎi xiē cài ba.",
            "translation": {
                "en": "Alright, could you go to the store to buy some vegetables?",
                "ar": "حسناً، اذهب إلى المتجر واشترِ بعض الخضار."
            },
            "audio": None
        },
        {
            "id": "7-3-6",
            "role": "刘明 (Liu Ming)",
            "hanzi": "好，我十分钟后去。",
            "pinyin": "Hǎo, wǒ shí fēnzhōng hòu qù.",
            "translation": {
                "en": "Okay, I'll go in ten minutes.",
                "ar": "حسناً، سأذهب بعد عشر دقائق."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Expression of Time (时间的表达)",
            "explanation": "Chinese expresses points in time from largest unit to smallest: [Time of day] + [Hour: 点] + [Minute: 分 / 半]. E.g., 早上八点四十 (8:40 AM), 晚上六点半 (6:30 PM).",
            "arExplanation": "تُرتّب عناصر الوقت في الصينية من الأكبر إلى الأصغر: الفترة الزمنية أولاً، تليها الساعات (点)، ثم الدقائق (分) أو النصف (半)."
        },
        {
            "point": "Modal Particle 吧 (ba) for Suggestions",
            "explanation": "‘吧’ placed at the end of a sentence softens the tone into a friendly suggestion, consultation, or request: 我们下午两点见吧 (Let's meet at 2:00 PM).",
            "arExplanation": "حرف المعنى '吧' في نهاية الجملة يخفف النبرة ويحول الكلام إلى اقتراح أو تشاور لطيف: 'دعنا نلتقِ في الثانية بعد الظهر'."
        },
        {
            "point": "Modal Particle 呢 (ne) Confirming Facts",
            "explanation": "‘呢’ at sentence end confirms a current state, fact, or ongoing situation: 我在家里呢 (I am at home right now).",
            "arExplanation": "تأتي '呢' في نهاية الجملة الخبرية لتأكيد استمرار الحالة أو حقيقة معينة: 'أنا في المنزل حالياً'."
        }
    ],
    "culturalNotes": [
        {
            "title": "Daily Routine and Evening Shifts in Urban China",
            "detail": "Medical professionals and service staff in Chinese cities frequently work evening or night shifts (上夜班/晚班), while families maintain active communication regarding dinner preparation.",
            "arDetail": "يعمل العاملون في المستشفيات والخدمات في المدن الصينية بنظام المناوبات المسائية والليلية، وتهتم الأسر بالتنسيق المستمر لتحضير وجبات الطعام اليومية."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q7-1",
            "question": "What time does Wang Yixue finish work in the evening?",
            "arQuestion": "في أي ساعة تنهي وانغ ييشيويه عملها مساءً؟",
            "options": [
                "六点半 (6:30)",
                "八点四十 (8:40)",
                "两点 (2:00)",
                "八点 (8:00)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q7-2",
            "question": "What does Wang Yixue ask Liu Ming to do before his shift?",
            "arQuestion": "ماذا طلبت وانغ ييشيويه من ليو مينغ أن يفعل قبل بدء مناوبته؟",
            "options": [
                "去店里买些菜 (Go to the store to buy some vegetables)",
                "去看电影 (Go watch a movie)",
                "去学校上课 (Go to school for class)",
                "做米饭 (Cook rice)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 7."
}

# UNIT 8
unit8 = {
    "id": "hsk-1-hsk3-unit-8",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 8,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第8课：我爸爸也在医院工作",
        "en": "Lesson 8: My father also works at a hospital",
        "ar": "الدرس 8: والدي يعمل أيضاً في المستشفى"
    },
    "dialogue": [
        # Text 1
        {
            "id": "8-1-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "房间外有一只小猫。",
            "pinyin": "Fángjiān wài yǒu yì zhī xiǎomāo.",
            "translation": {
                "en": "There is a little cat outside the room.",
                "ar": "توجد قطة صغيرة خارج الغرفة."
            },
            "audio": None
        },
        {
            "id": "8-1-2",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "我没看见，它在哪儿呢？",
            "pinyin": "Wǒ méi kànjiàn, tā zài nǎr ne?",
            "translation": {
                "en": "I don't see it. Where is it?",
                "ar": "لم أرها، أين هي؟"
            },
            "audio": None
        },
        {
            "id": "8-1-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "它在桌子下呢。",
            "pinyin": "Tā zài zhuōzi xià ne.",
            "translation": {
                "en": "It's under the table.",
                "ar": "إنها تحت الطاولة."
            },
            "audio": None
        },
        {
            "id": "8-1-4",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "这只小猫真漂亮！",
            "pinyin": "Zhè zhī xiǎomāo zhēn piàoliang!",
            "translation": {
                "en": "This little cat is so beautiful!",
                "ar": "هذه القطة الصغيرة جميلة حقاً!"
            },
            "audio": None
        },
        # Text 2
        {
            "id": "8-2-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我们在哪儿见呢？",
            "pinyin": "Wǒmen zài nǎr jiàn ne?",
            "translation": {
                "en": "Where shall we meet?",
                "ar": "أين سنلتقي؟"
            },
            "audio": None
        },
        {
            "id": "8-2-2",
            "role": "李文 (Li Wen)",
            "hanzi": "在学校书店前见吧。",
            "pinyin": "Zài xuéxiào shūdiàn qián jiàn ba.",
            "translation": {
                "en": "Let's meet in front of the school bookstore.",
                "ar": "لنلتقِ أمام مكتبة المدرسة."
            },
            "audio": None
        },
        {
            "id": "8-2-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "好的。下午两点你能到吗？",
            "pinyin": "Hǎo de. Xiàwǔ liǎng diǎn nǐ néng dào ma?",
            "translation": {
                "en": "Okay. Can you arrive at 2:00 in the afternoon?",
                "ar": "حسناً. هل يمكنك الوصول عند الساعة الثانية بعد الظهر؟"
            },
            "audio": None
        },
        {
            "id": "8-2-4",
            "role": "李文 (Li Wen)",
            "hanzi": "我能到。我在学校吃午饭。",
            "pinyin": "Wǒ néng dào. Wǒ zài xuéxiào chī wǔfàn.",
            "translation": {
                "en": "Yes, I can. I'll have lunch at school.",
                "ar": "نعم، يمكنني الوصول. سأتناول الغداء في المدرسة."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "8-3-1",
            "role": "刘明 (Liu Ming)",
            "hanzi": "小胡，还没吃饭呢？",
            "pinyin": "Xiǎo Hú, hái méi chī fàn ne?",
            "translation": {
                "en": "Xiao Hu, haven't you eaten yet?",
                "ar": "شياو هو، ألم تتناول طعامك بعد؟"
            },
            "audio": None
        },
        {
            "id": "8-3-2",
            "role": "胡医生 (Dr. Hu)",
            "hanzi": "没吃呢。",
            "pinyin": "Méi chī ne.",
            "translation": {
                "en": "No, I haven't.",
                "ar": "لم آكل بعد."
            },
            "audio": None
        },
        {
            "id": "8-3-3",
            "role": "刘明 (Liu Ming)",
            "hanzi": "大医院病人多，医生非常忙。",
            "pinyin": "Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.",
            "translation": {
                "en": "Big hospitals have many patients, and doctors are very busy.",
                "ar": "المستشفيات الكبرى بها مرضى كثيرون، والأطباء مشغولون للغاية."
            },
            "audio": None
        },
        {
            "id": "8-3-4",
            "role": "胡医生 (Dr. Hu)",
            "hanzi": "是的。我爸爸也在医院工作，他也非常忙。",
            "pinyin": "Shì de. Wǒ bàba yě zài yīyuàn gōngzuò, tā yě fēicháng máng.",
            "translation": {
                "en": "True. My father also works at a hospital, and he's extremely busy too.",
                "ar": "صحيح. والدي يعمل أيضاً في المستشفى، وهو مشغول جداً أيضاً."
            },
            "audio": None
        },
        {
            "id": "8-3-5",
            "role": "刘明 (Liu Ming)",
            "hanzi": "你家有两个医生？",
            "pinyin": "Nǐ jiā yǒu liǎng gè yīshēng?",
            "translation": {
                "en": "So there are two doctors in your family?",
                "ar": "هل في عائلتك طبيبان؟"
            },
            "audio": None
        },
        {
            "id": "8-3-6",
            "role": "胡医生 (Dr. Hu)",
            "hanzi": "对。",
            "pinyin": "Duì.",
            "translation": {
                "en": "Yes.",
                "ar": "نعم."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Positional Words (方位词: 外, 下, 前)",
            "explanation": "Directional/positional words attach after nouns to indicate physical location: 房间外 (outside the room), 桌子下 (under the table), 书店前 (in front of the bookstore).",
            "arExplanation": "تُضاف كلمات الاتجاه والموضع بعد الأسماء للدلالة على المكان الفيزيائي: 'خارج الغرفة'، 'تحت الطاولة'، 'أمام المكتبة'."
        },
        {
            "point": "Preposition 在 (zài) Indicating Location of Action",
            "explanation": "The preposition ‘在’ combines with a location to indicate where an action occurs, placed before the main verb: 在学校吃午饭 (eat lunch at school), 在医院工作 (work at a hospital).",
            "arExplanation": "يأتي حرف الجر '在' مع اسم المكان قبل الفعل الرئيسي لتحديد مكان وقوع الحدث: 'يتناول الغداء في المدرسة'."
        },
        {
            "point": "Modal Verb 能 (néng) for Ability / Possibility",
            "explanation": "‘能’ expresses ability or feasibility in specific circumstances: 下午两点你能到吗？ (Can you make it at 2:00 PM?) -> 我能到 (Yes, I can).",
            "arExplanation": "يُستخدم الفعل المساعد '能' للتعبير عن الاستطاعة أو الإمكانية الظرفية للقيام بفعل معين: 'هل يمكنك الوصول؟'."
        }
    ],
    "culturalNotes": [
        {
            "title": "Endearing Workplace Address: '小 (Xiǎo) + Surname'",
            "detail": "In Chinese social and workplace settings, addressing a younger colleague or junior as '小' + surname (e.g. 小胡, Xiao Hu) conveys warm familiarity and professional warmth without disrespect.",
            "arDetail": "في بيئة العمل الصينية، تُعد مناداة الزملاء الأصغر سناً بـ '小' متبوعة باسم العائلة (مثل 小胡) صيغة محببة وودية تدل على الألفة والاهتمام."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q8-1",
            "question": "Where is the little cat that Bai Jiayue found?",
            "arQuestion": "أين توجد القطة الصغيرة التي رأتها باي جيايوي؟",
            "options": [
                "在桌子下 (Under the table)",
                "在书店前 (In front of the bookstore)",
                "在医院里 (Inside the hospital)",
                "在椅子上 (On the chair)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q8-2",
            "question": "How many doctors are there in Dr. Hu's family?",
            "arQuestion": "كم طبيباً في عائلة الطبيب هو؟",
            "options": [
                "两个 (Two)",
                "一个 (One)",
                "三个 (Three)",
                "四个 (Four)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 8."
}

# UNIT 9
unit9 = {
    "id": "hsk-1-hsk3-unit-9",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 9,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第9课：我明天上午在学校学习",
        "en": "Lesson 9: I'll be studying at school tomorrow morning",
        "ar": "الدرس 9: سأدرس في المدرسة صباح الغد"
    },
    "dialogue": [
        # Text 1
        {
            "id": "9-1-1",
            "role": "李文 (Li Wen)",
            "hanzi": "学校前边有一家电影院。",
            "pinyin": "Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.",
            "translation": {
                "en": "There is a cinema in front of the school.",
                "ar": "توجد دار سينما أمام المدرسة."
            },
            "audio": None
        },
        {
            "id": "9-1-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "对。我们晚上去那个电影院看电影吧。",
            "pinyin": "Duì. Wǒmen wǎnshang qù nàge diànyǐngyuàn kàn diànyǐng ba.",
            "translation": {
                "en": "Yes. Let's go to that cinema to watch a movie tonight.",
                "ar": "صحيح. دعينا نذهب إلى تلك السينما الليلة لمشاهدة فيلم."
            },
            "audio": None
        },
        {
            "id": "9-1-3",
            "role": "李文 (Li Wen)",
            "hanzi": "好！我们七点在电影院外边见，好吗？",
            "pinyin": "Hǎo! Wǒmen qī diǎn zài diànyǐngyuàn wàibian jiàn, hǎo ma?",
            "translation": {
                "en": "Great! Let's meet outside the cinema at 7:00, okay?",
                "ar": "رائع! لنلتقِ خارج السينما في السابعة، حسناً؟"
            },
            "audio": None
        },
        {
            "id": "9-1-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "好的，晚上七点见！",
            "pinyin": "Hǎo de, wǎnshang qī diǎn jiàn!",
            "translation": {
                "en": "Okay, see you at 7:00 in the evening!",
                "ar": "حسناً، أراكِ في السابعة مساءً!"
            },
            "audio": None
        },
        # Text 2
        {
            "id": "9-2-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "椅子上有一本中文书，那是谁的书？",
            "pinyin": "Yǐzi shang yǒu yì běn Zhōngwén shū, nà shì shéi de shū?",
            "translation": {
                "en": "There is a Chinese book on the chair. Whose book is that?",
                "ar": "يوجد كتاب لغة صينية على الكرسي، كتاب مَن هذا؟"
            },
            "audio": None
        },
        {
            "id": "9-2-2",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "是我的书，谢谢。这是我的第二本中文书。",
            "pinyin": "Shì wǒ de shū, xièxie. Zhè shì wǒ de dì-èr běn Zhōngwén shū.",
            "translation": {
                "en": "It's my book, thank you. This is my second Chinese book.",
                "ar": "إنه كتابي، شكراً لكِ. هذا هو كتابي الصيني الثاني."
            },
            "audio": None
        },
        {
            "id": "9-2-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "不客气。你明天上午在哪儿？",
            "pinyin": "Bú kèqi. Nǐ míngtiān shàngwǔ zài nǎr?",
            "translation": {
                "en": "You're welcome. Where will you be tomorrow morning?",
                "ar": "على الرحب والسعة. أين ستكون صباح الغد؟"
            },
            "audio": None
        },
        {
            "id": "9-2-4",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "我明天上午在学校学习。",
            "pinyin": "Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.",
            "translation": {
                "en": "I'll be studying at school tomorrow morning.",
                "ar": "سأكون أدرس في المدرسة صباح الغد."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "9-3-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "明天星期六，你做什么？",
            "pinyin": "Míngtiān Xīngqīliù, nǐ zuò shénme?",
            "translation": {
                "en": "Tomorrow is Saturday. What are you going to do?",
                "ar": "غداً يوم السبت، ماذا ستفعل؟"
            },
            "audio": None
        },
        {
            "id": "9-3-2",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "我白天在家里读书，晚上和朋友们去外边唱歌。",
            "pinyin": "Wǒ báitiān zài jiā li dúshū, wǎnshang hé péngyoumen qù wàibian chàng gē.",
            "translation": {
                "en": "I will read at home during the day and go out to sing with friends in the evening.",
                "ar": "سأقرأ في المنزل نهاراً، وفي المساء سأذهب مع أصدقائي للغناء بالخارج."
            },
            "audio": None
        },
        {
            "id": "9-3-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你唱歌很好听。",
            "pinyin": "Nǐ chàng gē hěn hǎotīng.",
            "translation": {
                "en": "You sing very nicely.",
                "ar": "غناؤك عذب وجميل جداً."
            },
            "audio": None
        },
        {
            "id": "9-3-4",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "谢谢！您星期六做什么？",
            "pinyin": "Xièxie! Nín Xīngqīliù zuò shénme?",
            "translation": {
                "en": "Thank you! What will you do on Saturday?",
                "ar": "شكراً لكِ! وماذا ستفعلين حضرتكِ يوم السبت؟"
            },
            "audio": None
        },
        {
            "id": "9-3-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "我在家里做饭、看电视，和孩子们、小狗玩。",
            "pinyin": "Wǒ zài jiā li zuò fàn, kàn diànshì, hé háizimen, xiǎogǒu wán.",
            "translation": {
                "en": "I'll cook at home, watch TV, and play with my children and little dog.",
                "ar": "سأطبخ في المنزل وأشاهد التلفاز وألعب مع أطفالي وكلبي الصغير."
            },
            "audio": None
        },
        {
            "id": "9-3-6",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "我也有一只小狗。",
            "pinyin": "Wǒ yě yǒu yì zhī xiǎogǒu.",
            "translation": {
                "en": "I have a little dog too.",
                "ar": "أنا لدي كلب صغير أيضاً."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Existential Sentences (存现句)",
            "explanation": "Indicates existence using the structure: [Location word] + 有 + [Noun phrase]. E.g., 学校前边有一家电影院 (There is a cinema in front of the school), 椅子上有一本书 (There is a book on the chair).",
            "arExplanation": "تُستخدم جمل الوجود (存现句) بالتركيب: [اسم المكان] + 有 + [الاسم الموجود]: 'أمام المدرسة توجد دار سينما'."
        },
        {
            "point": "Word Order for Time and Location Adverbials",
            "explanation": "When time and location co-occur as adverbials, the temporal phrase precedes the locational phrase: [Subject] + [Time] + [Location] + [Verb]. E.g., 我明天上午在学校学习 (I study at school tomorrow morning).",
            "arExplanation": "عند اجتماع الظرف الزماني والظرف المكاني في الجملة الصينية، يسبق ظرف الزمان ظرف المكان وجوباً: [الفاعل] + [الزمان] + [المكان] + [الفعل]."
        },
        {
            "point": "Ordinal Numbers with 第 (dì)",
            "explanation": "‘第’ precedes a numeral to form an ordinal number: 第一 (first), 第二 (second), 第二本中文书 (the second Chinese book).",
            "arExplanation": "تُوضع البادئة '第' قبل الأعداد لصياغة الأعداد الترتيبية: 第一 (الأول)، 第二 (الثاني)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Weekend Activities in Modern China: KTV and Leisure",
            "detail": "Going out to sing (去外边唱歌 - KTV) with friends is one of the most popular and ubiquitous social bonding activities among youth and young professionals across China.",
            "arDetail": "يُعد الذهاب للغناء مع الأصدقاء (KTV) من أشهر وأحب الأنشطة الترفيهية والاجتماعية لقضاء عطلة نهاية الأسبوع بين الشباب في الصين."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q9-1",
            "question": "Whose Chinese book was left on the chair?",
            "arQuestion": "كتاب مَن للغة الصينية كان متروكاً على الكرسي؟",
            "options": [
                "陈天中的 (Chen Tianzhong's)",
                "白家月的 (Bai Jiayue's)",
                "李文的 (Li Wen's)",
                "杨同乐的 (Yang Tongle's)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q9-2",
            "question": "What will Yang Tongle do on Saturday evening?",
            "arQuestion": "ماذا سيفعل يانغ تونغله مساء يوم السبت؟",
            "options": [
                "和朋友们去外边唱歌 (Go out to sing with friends)",
                "在家里看电视 (Watch TV at home)",
                "去学校学习 (Study at school)",
                "去超市买东西 (Go shopping at the supermarket)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 9."
}

# UNIT 10
unit10 = {
    "id": "hsk-1-hsk3-unit-10",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 10,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第10课：这里的苹果真便宜！",
        "en": "Lesson 10: The apples here are really affordable!",
        "ar": "الدرس 10: التفاح هنا رخيص جداً!"
    },
    "dialogue": [
        # Text 1
        {
            "id": "10-1-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "请问，有杯子吗？",
            "pinyin": "Qǐngwèn, yǒu bēizi ma?",
            "translation": {
                "en": "Excuse me, do you have any cups?",
                "ar": "لو سمحت، هل لديكم أكواب؟"
            },
            "audio": None
        },
        {
            "id": "10-1-2",
            "role": "售货员 (Salesperson)",
            "hanzi": "有，杯子在这边。",
            "pinyin": "Yǒu, bēizi zài zhèbiān.",
            "translation": {
                "en": "Yes, the cups are over here.",
                "ar": "نعم، الأكواب في هذه الناحية."
            },
            "audio": None
        },
        {
            "id": "10-1-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "多少钱一个？",
            "pinyin": "Duōshao qián yí gè?",
            "translation": {
                "en": "How much is one?",
                "ar": "بكم الكوب الواحد؟"
            },
            "audio": None
        },
        {
            "id": "10-1-4",
            "role": "售货员 (Salesperson)",
            "hanzi": "这些五块钱一个，那些十块钱一个。",
            "pinyin": "Zhèxiē wǔ kuài qián yí gè, nàxiē shí kuài qián yí gè.",
            "translation": {
                "en": "These are five yuan each, and those are ten yuan each.",
                "ar": "هذه بخمسة يوانات للواحد، وتلك بعشرة يوانات للواحد."
            },
            "audio": None
        },
        {
            "id": "10-1-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "我买这个吧。",
            "pinyin": "Wǒ mǎi zhège ba.",
            "translation": {
                "en": "I'll take this one, please.",
                "ar": "سآخذ هذا إذاً."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "10-2-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "这儿的水果真不少！",
            "pinyin": "Zhèr de shuǐguǒ zhēn bù shǎo!",
            "translation": {
                "en": "There's so much fruit here!",
                "ar": "الفواكه هنا وفيرة حقاً!"
            },
            "audio": None
        },
        {
            "id": "10-2-2",
            "role": "售货员 (Salesperson)",
            "hanzi": "您想买什么？",
            "pinyin": "Nín xiǎng mǎi shénme?",
            "translation": {
                "en": "What would you like to buy?",
                "ar": "ماذا ترغبين في شرائه؟"
            },
            "audio": None
        },
        {
            "id": "10-2-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "我想买两斤苹果。",
            "pinyin": "Wǒ xiǎng mǎi liǎng jīn píngguǒ.",
            "translation": {
                "en": "I'd like two jin of apples, please.",
                "ar": "أود شراء جينين (نحو كيلوغرام) من التفاح."
            },
            "audio": None
        },
        {
            "id": "10-2-4",
            "role": "售货员 (Salesperson)",
            "hanzi": "苹果三块五一斤。这些七块二，七块钱吧。",
            "pinyin": "Píngguǒ sān kuài wǔ yì jīn. Zhèxiē qī kuài èr, qī kuài qián ba.",
            "translation": {
                "en": "The apples are 3.5 yuan per jin. That's 7.2 yuan in total—let's make it 7 yuan.",
                "ar": "التفاح بثلاثة يوانات ونصف للجين. الحساب 7.2 يوان، فلنجعلها 7 يوانات."
            },
            "audio": None
        },
        {
            "id": "10-2-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "好的，这儿的苹果真便宜！",
            "pinyin": "Hǎo de, zhèr de píngguǒ zhēn piányi!",
            "translation": {
                "en": "Great! The apples here are really affordable!",
                "ar": "رائع، التفاح هنا رخيص للغاية!"
            },
            "audio": None
        },
        # Text 3
        {
            "id": "10-3-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "这家商店衣服真多！这一件一百元，怎么样？",
            "pinyin": "Zhè jiā shāngdiàn yīfu zhēn duō! Zhè yí jiàn yìbǎi yuán, zěnmeyàng?",
            "translation": {
                "en": "There are so many clothes in this store! This one is 100 yuan, what do you think?",
                "ar": "الملابس كثيرة جداً في هذا المتجر! هذه القطعة بمئة يوان، ما رأيك؟"
            },
            "audio": None
        },
        {
            "id": "10-3-2",
            "role": "刘明 (Liu Ming)",
            "hanzi": "好看，也不贵。",
            "pinyin": "Hǎokàn, yě bú guì.",
            "translation": {
                "en": "It looks great, and it's not expensive.",
                "ar": "جميلة ومظهرها رائع، وليست باهظة الثمن."
            },
            "audio": None
        },
        {
            "id": "10-3-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "小雪能穿，买一件吧。",
            "pinyin": "Xiǎoxuě néng chuān, mǎi yí jiàn ba.",
            "translation": {
                "en": "Xiaoxue can wear it. Let's get one.",
                "ar": "تناسب شياو شيويه، لنشترِ قطعة واحدة."
            },
            "audio": None
        },
        {
            "id": "10-3-4",
            "role": "刘明 (Liu Ming)",
            "hanzi": "好的。小明能穿吗？",
            "pinyin": "Hǎo de. Xiǎomíng néng chuān ma?",
            "translation": {
                "en": "Okay. Do you think Xiaoming can wear it too?",
                "ar": "حسناً. وهل تناسب شياو مينغ أيضاً؟"
            },
            "audio": None
        },
        {
            "id": "10-3-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "不能。这些是女孩子穿的衣服，男孩子的衣服在那儿。",
            "pinyin": "Bù néng. Zhèxiē shì nǚ háizi chuān de yīfu, nán háizi de yīfu zài nàr.",
            "translation": {
                "en": "No. These are girls' clothes. The boys' section is over there.",
                "ar": "لا يمكنه. هذه ملابس للفتيات، وملابس الفتيان هناك."
            },
            "audio": None
        },
        {
            "id": "10-3-6",
            "role": "刘明 (Liu Ming)",
            "hanzi": "好的。",
            "pinyin": "Hǎo de.",
            "translation": {
                "en": "Alright.",
                "ar": "حسناً."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Expression of Money Units (块, 元)",
            "explanation": "‘块’ (kuài) is the colloquial term for RMB Yuan (元). Decimals are expressed as: 三块五 (3.5 yuan), 七块二 (7.2 yuan).",
            "arExplanation": "تُستخدم '块' في المحادثة اليومية الشائعة كمرادف لليوان الصيني (元)، ويُعبّر عن الفئات العشرية مثل: 三块五 (3.5 يوان)."
        },
        {
            "point": "Adjectival Predicate Sentences (形容词谓语句)",
            "explanation": "Adjectives act directly as predicates, commonly modified by adverbs of degree such as ‘真’ (zhēn, really) or ‘不’ (bù, not): 水果真多！也不贵 (Fruit is really plentiful! Not expensive either).",
            "arExplanation": "تقوم الصفات مقام الخبر مباشرة دون الحاجة لفعل كينونة، وتُسبق عادة بظروف الدرجة: 'الفواكه كثيرة حقاً! وليست غالية'."
        },
        {
            "point": "Interrogative Pronoun 怎么样 (zěnmeyàng)",
            "explanation": "‘怎么样’ asks for someone's opinion, evaluation, or proposal: 这一件一百元，怎么样？ (This one is 100 yuan, what do you think?).",
            "arExplanation": "اسم الاستفهام '怎么样' يُستعمل لاستطلاع الرأي وطلب التقييم: 'هذه القطعة بمئة يوان، ما رأيك؟'."
        }
    ],
    "culturalNotes": [
        {
            "title": "Traditional Weight Unit '斤' (jīn) and Friendly Price Rounding",
            "detail": "In grocery markets throughout China, produce is sold by the '斤' (1 jin = 500 grams). Vendors often round odd cents down to the nearest whole integer (抹零: '七块二，七块钱吧') as a customary gesture of goodwill.",
            "arDetail": "تُباع الخضار والفواكه في أسواق الصين بوحدة 'الجين' (斤 = نصف كيلوغرام)، ومن عادات الباعة الشائعة التنازل عن القروش الفردية وتقريب المبلغ للرقم الصحيح (抹零) إكراماً للزبون."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q10-1",
            "question": "How much does the vendor actually charge Wang Yixue for the apples?",
            "arQuestion": "كم طلب البائع فعلياً من وانغ ييشيويه ثمناً للتفاح بعد التخفيض؟",
            "options": [
                "七块钱 (7 yuan)",
                "七块二 (7.2 yuan)",
                "三块五 (3.5 yuan)",
                "五块钱 (5 yuan)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q10-2",
            "question": "Why can't Xiaoming wear the clothing Wang Yixue looked at?",
            "arQuestion": "لماذا لا تناسب الملابس التي عاينتها وانغ ييشيويه الطفل شياو مينغ؟",
            "options": [
                "这些是女孩子穿的衣服 (These are girls' clothes)",
                "太贵了 (They are too expensive)",
                "太小了 (They are too small)",
                "他不想穿 (He doesn't want to wear them)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 10."
}

for u_num, u_data in [(6, unit6), (7, unit7), (8, unit8), (9, unit9), (10, unit10)]:
    path = f"{out_dir}/unit-{u_num}.json"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(u_data, f, ensure_ascii=False, indent=2)
    print(f"Generated {path} successfully!")
