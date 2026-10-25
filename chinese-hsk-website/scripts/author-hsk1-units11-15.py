# -*- coding: utf-8 -*-
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

out_dir = "chinese-hsk-website/source-data/conversations/hsk-1/hsk3"
os.makedirs(out_dir, exist_ok=True)

# ==========================================
# UNIT 11: 我读大学呢 (I'm Studying at University)
# ==========================================
unit11 = {
    "id": "hsk-1-hsk3-unit-11",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 11,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第11课：我读大学呢",
        "en": "Lesson 11: I'm studying at university",
        "ar": "الدرس 11: أنا أدرس في الجامعة"
    },
    "dialogue": [
        # Text 1
        {
            "id": "11-1-1",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "喂，李文，你什么时候能到饭店？",
            "pinyin": "Wèi, Lǐ Wén, nǐ shénme shíhou néng dào fàndiàn?",
            "translation": {
                "en": "Hello, Li Wen. When will you arrive at the restaurant?",
                "ar": "مرحباً لي ون، متى ستصل إلى المطعم؟"
            },
            "audio": None
        },
        {
            "id": "11-1-2",
            "role": "李文 (Li Wen)",
            "hanzi": "还不知道，正在找呢。",
            "pinyin": "Hái bù zhīdào, zhèngzài zhǎo ne.",
            "translation": {
                "en": "Not sure yet, I'm looking for it right now.",
                "ar": "لا أعرف بعد، ما زلت أبحث عنه الآن."
            },
            "audio": None
        },
        {
            "id": "11-1-3",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "它是不是在超市后边？",
            "pinyin": "Tā shì bu shì zài chāoshì hòubian?",
            "translation": {
                "en": "Is it behind the supermarket?",
                "ar": "أليس هو خلف السوبرماركت؟"
            },
            "audio": None
        },
        {
            "id": "11-1-4",
            "role": "李文 (Li Wen)",
            "hanzi": "是的。",
            "pinyin": "Shì de.",
            "translation": {
                "en": "Yes, it is.",
                "ar": "نعم، هو كذلك."
            },
            "audio": None
        },
        {
            "id": "11-1-5",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "你开车没开车？",
            "pinyin": "Nǐ kāichē méi kāichē?",
            "translation": {
                "en": "Are you driving or not?",
                "ar": "هل تقود السيارة أم لا؟"
            },
            "audio": None
        },
        {
            "id": "11-1-6",
            "role": "李文 (Li Wen)",
            "hanzi": "我没开车，坐车呢。",
            "pinyin": "Wǒ méi kāichē, zuò chē ne.",
            "translation": {
                "en": "I'm not driving, I'm taking a ride (riding a car).",
                "ar": "أنا لا أقود السيارة، بل أستقل وسيلة مواصلات."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "11-2-1",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "你还在读大学吗？",
            "pinyin": "Nǐ hái zài dú dàxué ma?",
            "translation": {
                "en": "Are you still studying at university?",
                "ar": "هل ما زلت تدرس في الجامعة؟"
            },
            "audio": None
        },
        {
            "id": "11-2-2",
            "role": "李文 (Li Wen)",
            "hanzi": "对，我读大学呢，还是大学生。",
            "pinyin": "Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.",
            "translation": {
                "en": "Yes, I'm studying at university—I'm still an undergraduate.",
                "ar": "نعم، أنا أدرس بالجامعة، وما زلت طالباً جامعياً."
            },
            "audio": None
        },
        {
            "id": "11-2-3",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "你们学习忙不忙？",
            "pinyin": "Nǐmen xuéxí máng bu máng?",
            "translation": {
                "en": "Are you busy with your studies?",
                "ar": "هل دراستكم مزدحمة / هل أنتم مشغولون بالدراسة؟"
            },
            "audio": None
        },
        {
            "id": "11-2-4",
            "role": "李文 (Li Wen)",
            "hanzi": "非常忙，我学医，我们的课很多。",
            "pinyin": "Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.",
            "translation": {
                "en": "Very busy. I major in medicine, and we have a lot of classes.",
                "ar": "مشغولون جداً، أنا أدرس الطب ولدينا الكثير من الحصص."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "11-3-1",
            "role": "刘明 (Liu Ming)",
            "hanzi": "弟弟起床没起床呢？",
            "pinyin": "Dìdi qǐchuáng méi qǐchuáng ne?",
            "translation": {
                "en": "Has younger brother gotten up yet?",
                "ar": "هل استيقظ أخي الصغير من الفراش أم لا؟"
            },
            "audio": None
        },
        {
            "id": "11-3-2",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "没起床呢，还在睡觉。",
            "pinyin": "Méi qǐchuáng ne, hái zài shuìjiào.",
            "translation": {
                "en": "He hasn't gotten up yet; he is still sleeping.",
                "ar": "لم يستيقظ بعد، ما زال نائماً."
            },
            "audio": None
        },
        {
            "id": "11-3-3",
            "role": "刘明 (Liu Ming)",
            "hanzi": "还睡呢？他今天去不去哪里？",
            "pinyin": "Hái shuì ne? Tā jīntiān qù bu qù nǎli?",
            "translation": {
                "en": "Still sleeping? Is he going anywhere today?",
                "ar": "ما زال نائماً؟ هل سيذهب إلى أي مكان اليوم؟"
            },
            "audio": None
        },
        {
            "id": "11-3-4",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "去哪里？",
            "pinyin": "Qù nǎli?",
            "translation": {
                "en": "Where would he go?",
                "ar": "إلى أين يذهب؟"
            },
            "audio": None
        },
        {
            "id": "11-3-5",
            "role": "刘明 (Liu Ming)",
            "hanzi": "去超市。",
            "pinyin": "Qù chāoshì.",
            "translation": {
                "en": "To the supermarket.",
                "ar": "إلى السوبرماركت."
            },
            "audio": None
        },
        {
            "id": "11-3-6",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "我昨天问他，他对我说，他不去，他今天要和小朋友玩。",
            "pinyin": "Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù, tā jīntiān yào hé xiǎopéngyǒu wán.",
            "translation": {
                "en": "I asked him yesterday. He told me he's not going; he wants to play with other kids today.",
                "ar": "سألته أمس، فقال لي إنه لن يذهب، ويريد أن يلعب مع أصدقائه الأطفال اليوم."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Progressive Aspect: 正在/在……呢 (zhèngzài/zài ... ne)",
            "explanation": "‘正在’ or ‘在’ before a verb, often paired with modal particle ‘呢’ at the end of the clause, denotes an action in progress: 正在找呢 (in the middle of searching), 还在睡觉 (still sleeping).",
            "arExplanation": "تُستخدم '正在' أو '在' قبل الفعل، وغالباً ما تقترن بـ '呢' في نهاية الجملة للدلالة على استمرار حدوث الفعل في الوقت الحاضر: '正在找呢' (أنا أبحث الآن)."
        },
        {
            "point": "Affirmative-Negative Questions (正反疑问句)",
            "explanation": "Questions formed by juxtaposing affirmative and negative forms of verbs or adjectives: ‘忙不忙’ (máng bu máng), ‘是不是’ (shì bu shì), ‘开车没开车’ (kāichē méi kāichē).",
            "arExplanation": "صيغة السؤال الإيجابي-السلبي (V-不-V أو V-没-V) تجمع بين الفعل ونفيه للسؤال عما إذا كان الفعل حاصلاً أم لا دون الحاجة لاستخدام '吗'."
        },
        {
            "point": "Preposition 对 (duì)",
            "explanation": "Used to introduce the recipient or target of an action: 他对我说 (He said to me / He told me).",
            "arExplanation": "حرف الجر '对' يُستخدم لتقديم الطرف أو الشخص الموجّه إليه الفعل: '他对我说' (قال لي)."
        }
    ],
    "culturalNotes": [
        {
            "title": "College Majors & 'Reading' University (读大学)",
            "detail": "In Chinese, attending university is colloquially expressed as '读大学' (dú dàxué, literally 'reading university') or '上大学' (shàng dàxué). Medical degrees (学医) typically require 5 to 8 rigorous years of study in China.",
            "arDetail": "في اللغة الصينية، يُعبَّر عن الالتحاق بالجامعة ومتابعة التعليم العالي بالتعبير '读大学' (قراءة الجامعة) أو '上大学'. وتستغرق دراسة الطب (学医) في الصين بين 5 إلى 8 سنوات من الجهد المكثف."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q11-1",
            "question": "What is Li Wen doing right now according to the phone call?",
            "arQuestion": "ماذا يفعل لي ون حالياً وفقاً للمكالمة الهاتفية؟",
            "options": [
                "正在找饭店 (Looking for the restaurant)",
                "正在开车 (Driving a car)",
                "在读大学 (Attending class)",
                "在超市买东西 (Shopping at supermarket)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q11-2",
            "question": "What is Li Wen studying at university?",
            "arQuestion": "ماذا يدرس لي ون في الجامعة؟",
            "options": [
                "医 (Medicine)",
                "汉语 (Chinese)",
                "电脑 (Computer science)",
                "英语 (English)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q11-3",
            "question": "Why won't the younger brother go to the supermarket today?",
            "arQuestion": "لماذا لن يذهب الأخ الأصغر إلى السوبرماركت اليوم؟",
            "options": [
                "他要和小朋友玩 (He wants to play with other kids)",
                "他生病了 (He is sick)",
                "他要上学 (He has school)",
                "他不想起床 (He doesn't want to get up)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 11."
}

# ==========================================
# UNIT 12: 昨天下雪了 (It Snowed Yesterday)
# ==========================================
unit12 = {
    "id": "hsk-1-hsk3-unit-12",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 12,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第12课：昨天下雪了",
        "en": "Lesson 12: It snowed yesterday",
        "ar": "الدرس 12: تساقطت الثلوج أمس"
    },
    "dialogue": [
        # Text 1
        {
            "id": "12-1-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "今天天气怎么样？",
            "pinyin": "Jīntiān tiānqì zěnmeyàng?",
            "translation": {
                "en": "How's the weather today?",
                "ar": "كيف حال الطقس اليوم؟"
            },
            "audio": None
        },
        {
            "id": "12-1-2",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "这里的天下不太好，下雨了。",
            "pinyin": "Zhèlǐ de tiān bú tài hǎo, xià yǔ le.",
            "translation": {
                "en": "The weather here isn't very good; it's raining.",
                "ar": "الطقس هنا ليس جيداً جداً، إنها تمطر."
            },
            "audio": None
        },
        {
            "id": "12-1-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "雨大吗？",
            "pinyin": "Yǔ dà ma?",
            "translation": {
                "en": "Is it raining heavily?",
                "ar": "هل المطر غزير؟"
            },
            "audio": None
        },
        {
            "id": "12-1-4",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "有点儿大，我觉得很冷。",
            "pinyin": "Yǒudiǎnr dà, wǒ juéde hěn lěng.",
            "translation": {
                "en": "A bit heavy, and I feel really cold.",
                "ar": "غزير نوعاً ما، وأشعر بالبرد الشديد."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "12-2-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "昨天下雪了。",
            "pinyin": "Zuótiān xià xuě le.",
            "translation": {
                "en": "It snowed yesterday.",
                "ar": "تساقطت الثلوج بالأمس."
            },
            "audio": None
        },
        {
            "id": "12-2-2",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "是的，太冷了。",
            "pinyin": "Shì de, tài lěng le.",
            "translation": {
                "en": "Yes, it was so cold.",
                "ar": "نعم، كان الجو بارداً للغاية."
            },
            "audio": None
        },
        {
            "id": "12-2-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你昨天没来公司，生病了？",
            "pinyin": "Nǐ zuótiān méi lái gōngsī, shēngbìng le?",
            "translation": {
                "en": "You didn't come to the office yesterday; were you sick?",
                "ar": "لم تأتِ إلى الشركة أمس، هل كنت مريضاً؟"
            },
            "audio": None
        },
        {
            "id": "12-2-4",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "对，我昨天去医院看病了。",
            "pinyin": "Duì, wǒ zuótiān qù yīyuàn kànbìng le.",
            "translation": {
                "en": "Yes, I went to the hospital to see a doctor yesterday.",
                "ar": "نعم، ذهبت إلى المستشفى لمراجعة الطبيب أمس."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "12-3-1",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "医生，我病了。",
            "pinyin": "Yīshēng, wǒ bìng le.",
            "translation": {
                "en": "Doctor, I'm not feeling well (I've fallen ill).",
                "ar": "يا دكتور، لقد مرضت."
            },
            "audio": None
        },
        {
            "id": "12-3-2",
            "role": "胡医生 (Doctor Hu)",
            "hanzi": "我看看。你觉得怎么样？",
            "pinyin": "Wǒ kànkan. Nǐ juéde zěnmeyàng?",
            "translation": {
                "en": "Let me take a look. How are you feeling?",
                "ar": "دعني ألقي نظرة. بماذا تشعر؟"
            },
            "audio": None
        },
        {
            "id": "12-3-3",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "我很冷。",
            "pinyin": "Wǒ hěn lěng.",
            "translation": {
                "en": "I feel very cold.",
                "ar": "أشعر ببرودة شديدة."
            },
            "audio": None
        },
        {
            "id": "12-3-4",
            "role": "胡医生 (Doctor Hu)",
            "hanzi": "好的，吃一点儿药，今天休息半天吧。",
            "pinyin": "Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàn tiān ba.",
            "translation": {
                "en": "Alright. Take some medicine and rest for half a day today.",
                "ar": "حسناً، تناول بعض الدواء واسترح نصف يوم اليوم."
            },
            "audio": None
        },
        {
            "id": "12-3-5",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "好的。",
            "pinyin": "Hǎo de.",
            "translation": {
                "en": "Okay.",
                "ar": "حسناً."
            },
            "audio": None
        },
        {
            "id": "12-3-6",
            "role": "胡医生 (Doctor Hu)",
            "hanzi": "回家后再喝些热水。",
            "pinyin": "Huí jiā hòu zài hē xiē rè shuǐ.",
            "translation": {
                "en": "Make sure to drink some warm water after you get home.",
                "ar": "واشرب بعض الماء الساخن بعد عودتك إلى المنزل."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Change of State with Modal Particle 了 (le)",
            "explanation": "‘了’ at the end of a clause indicates a change of situation, a new state, or an occurrence: 下雪了 (it started snowing / it snowed), 我病了 (I have fallen ill).",
            "arExplanation": "تُستخدم الأداة '了' في نهاية الجملة للدلالة على حدوث تغيير في الحالة أو بدء وضع جديد: '下雪了' (تساقطت الثلوج)، '我病了' (أصبحت مريضاً)."
        },
        {
            "point": "Adverb 有点儿 (yǒudiǎnr) vs Quantifier 一点儿 (yìdiǎnr)",
            "explanation": "‘有点儿’ is placed before adjectives to express a slight, often unfavorable degree: 有点儿大 (a bit heavy/big), 有点儿冷 (a bit cold). In contrast, ‘一点儿’ follows verbs or precedes nouns: 吃一点儿药 (take a bit of medicine).",
            "arExplanation": "الظرف '有点儿' يوضع قبل الصفات للتعبير عن درجة طفيفة غالباً ما تكون غير مرغوبة: '有点儿冷' (بارد بعض الشيء). أما '一点儿' فتأتي بعد الفعل أو قبل الاسم: '吃一点儿药' (تناول القليل من الدواء)."
        },
        {
            "point": "Verb Reduplication (动词重叠)",
            "explanation": "Reduplicating monosyllabic verbs (e.g. 看看 kànkan) denotes that an action is brief, casual, or an attempt: 我看看 (Let me take a quick look).",
            "arExplanation": "تكرار الفعل أحادي المقطع (مثل 看看) يشير إلى أن الفعل يستغرق وقتاً قصيراً أو يتم على سبيل التجربة والاستكشاف: 'دعني ألقِ نظرة سريعة'."
        }
    ],
    "culturalNotes": [
        {
            "title": "Drinking Hot/Warm Water (喝热水)",
            "detail": "In China, drinking warm or boiled water is believed to promote digestion, circulation, and health recovery. When people fall ill or catch a cold, the most customary warm advice is '多喝热水' (Drink more hot water).",
            "arDetail": "يُعتبر شرب الماء الدافئ أو المغلي عادة صحية متجذرة في الثقافة الصينية لتعزيز الدورة الدموية ومقاومة الأمراض. وتُعد نصيحة '多喝热水' (أكثر من شرب الماء الساخن) من أكثر العبارات شيوعاً عند المرض."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q12-1",
            "question": "Why didn't Yang Tongle go to work yesterday?",
            "arQuestion": "لماذا لم يذهب يانغ تونغله إلى العمل بالأمس؟",
            "options": [
                "他去医院看病了 (He went to hospital to see a doctor)",
                "天太冷下大雪了 (It was snowing too heavily)",
                "他在家睡觉 (He was sleeping at home)",
                "他去买东西了 (He went shopping)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q12-2",
            "question": "What did Doctor Hu advise Yang Tongle to do after returning home?",
            "arQuestion": "ماذا نصح الطبيب هو يانغ تونغله أن يفعل بعد عودته للمنزل؟",
            "options": [
                "再喝些热水 (Drink some warm water)",
                "去公司上班 (Go to work at the office)",
                "喝冰水 (Drink cold ice water)",
                "去超市买菜 (Go grocery shopping)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 12."
}

# ==========================================
# UNIT 13: 请给我一杯茶 (I'll Have a Cup of Tea, Please)
# ==========================================
unit13 = {
    "id": "hsk-1-hsk3-unit-13",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 13,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第13课：请给我一杯茶",
        "en": "Lesson 13: I'll have a cup of tea, please",
        "ar": "الدرس 13: من فضلك أعطني كوباً من الشاي"
    },
    "dialogue": [
        # Text 1
        {
            "id": "13-1-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "王老师，我可以再问您一个问题吗？",
            "pinyin": "Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?",
            "translation": {
                "en": "Teacher Wang, may I ask you one more question?",
                "ar": "أستاذة وانغ، هل يمكنني أن أطرح عليكِ سؤالاً آخر؟"
            },
            "audio": None
        },
        {
            "id": "13-1-2",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "可以。你有什么问题？",
            "pinyin": "Kěyǐ. Nǐ yǒu shénme wèntí?",
            "translation": {
                "en": "Of course. What is your question?",
                "ar": "بالتأكيد. ما هو سؤالك؟"
            },
            "audio": None
        },
        {
            "id": "13-1-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "那个小店卖不卖手机？",
            "pinyin": "Nàge xiǎodiàn mài bu mài shǒujī?",
            "translation": {
                "en": "Does that small shop sell mobile phones?",
                "ar": "هل يبيع ذلك المتجر الصغير الهواتف المحمولة؟"
            },
            "audio": None
        },
        {
            "id": "13-1-4",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "我不知道。你可以打电话问一下。",
            "pinyin": "Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.",
            "translation": {
                "en": "I'm not sure. You can call and ask them.",
                "ar": "لا أعرف. يمكنك الاتصال هاتفياً للاستفسار."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "13-2-1",
            "role": "服务员 (Waitress)",
            "hanzi": "女士，请坐！您喝什么？",
            "pinyin": "Nǚshì, qǐng zuò! Nín hē shénme?",
            "translation": {
                "en": "Madam, please take a seat! What would you like to drink?",
                "ar": "سيدتي، تفضلي بالجلوس! ماذا تحبين أن تشربي؟"
            },
            "audio": None
        },
        {
            "id": "13-2-2",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "我看一下。请给我一杯牛奶。",
            "pinyin": "Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.",
            "translation": {
                "en": "Let me see. Please give me a glass of milk.",
                "ar": "دعيني ألقي نظرة. من فضلك أعطني كوباً من الحليب."
            },
            "audio": None
        },
        {
            "id": "13-2-3",
            "role": "服务员 (Waitress)",
            "hanzi": "好的。您还要什么？",
            "pinyin": "Hǎo de. Nín hái yào shénme?",
            "translation": {
                "en": "Alright. Would you like anything else?",
                "ar": "حسناً. هل تريدين شيئاً آخر؟"
            },
            "audio": None
        },
        {
            "id": "13-2-4",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "我还没吃早饭，再要这个面包和鸡蛋吧。",
            "pinyin": "Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.",
            "translation": {
                "en": "I haven't had breakfast yet; I'll also have this bread and eggs.",
                "ar": "لم أتناول الإفطار بعد، سآخذ أيضاً هذا الخبز مع البيض."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "13-3-1",
            "role": "服务员 (Waiter)",
            "hanzi": "先生，请坐！您要什么？",
            "pinyin": "Xiānsheng, qǐng zuò! Nín yào shénme?",
            "translation": {
                "en": "Sir, please take a seat! What would you like to order?",
                "ar": "سيدي، تفضل بالجلوس! ماذا تطلب؟"
            },
            "audio": None
        },
        {
            "id": "13-3-2",
            "role": "刘明 (Liu Ming)",
            "hanzi": "我要一斤饺子。",
            "pinyin": "Wǒ yào yì jīn jiǎozi.",
            "translation": {
                "en": "I'd like one jin (500g) of dumplings.",
                "ar": "أريد جين (نصف كيلوغرام) من الزلابية (الدمبلينغ)."
            },
            "audio": None
        },
        {
            "id": "13-3-3",
            "role": "服务员 (Waiter)",
            "hanzi": "好的。一斤饺子40个。",
            "pinyin": "Hǎo de. Yì jīn jiǎozi sìshí gè.",
            "translation": {
                "en": "Alright. One jin is forty dumplings.",
                "ar": "حسناً. نصف الكيلو يحتوي على 40 حبة زلابية."
            },
            "audio": None
        },
        {
            "id": "13-3-4",
            "role": "刘明 (Liu Ming)",
            "hanzi": "40个太多了，我要一半吧。",
            "pinyin": "Sìshí gè tài duō le, wǒ yào yíbàn ba.",
            "translation": {
                "en": "Forty is too many; I'll take half (half a jin).",
                "ar": "40 حبة كثيرة جداً، سآخذ النصف فقط."
            },
            "audio": None
        },
        {
            "id": "13-3-5",
            "role": "服务员 (Waiter)",
            "hanzi": "半斤20个。您想喝什么？",
            "pinyin": "Bàn jīn èrshí gè. Nín xiǎng hē shénme?",
            "translation": {
                "en": "Half a jin is twenty. What would you like to drink?",
                "ar": "نصف جين يعادل 20 حبة. ماذا تحب أن تشرب؟"
            },
            "audio": None
        },
        {
            "id": "13-3-6",
            "role": "刘明 (Liu Ming)",
            "hanzi": "请给我一杯茶吧。",
            "pinyin": "Qǐng gěi wǒ yì bēi chá ba.",
            "translation": {
                "en": "Please give me a cup of tea.",
                "ar": "من فضلك أعطني كوباً من الشاي."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Double Object Construction (双宾语句)",
            "explanation": "Verbs like ‘给’ (give) and ‘问’ (ask) take two objects: indirect object (person) followed by direct object (thing): 请给我一杯茶 (Please give me a cup of tea), 问您一个问题 (ask you a question).",
            "arExplanation": "تأخذ بعض الأفعال مثل '给' (يعطي) و '问' (يسأل) مفعولين متتاليين: المفعول الأول غير المباشر (الشخص)، يليه المفعول الثاني المباشر (الشيء): '给我一杯茶' (أعطني كوب شاي)."
        },
        {
            "point": "Modal Verb 可以 (kěyǐ)",
            "explanation": "‘可以’ expresses permission or polite capability: 我可以问您一个问题吗？ (May I ask you a question?) -> 可以 (Yes, you may).",
            "arExplanation": "الفعل المساعد '可以' يُستخدم لطلب الإذن أو بيان الإمكانية بأدب: 'هل يمكنني أن أسألك سؤالاً؟'."
        },
        {
            "point": "Verb + 一下 (yíxià)",
            "explanation": "‘一下’ placed after a verb softens the tone and denotes doing an action briefly: 看一下 (have a quick look), 问一下 (ask briefly).",
            "arExplanation": "تُضاف '一下' بعد الفعل لتلطيف نبرة الحديث والإشارة إلى أن الفعل يُنفَّذ لفترة قصيرة أو على عجل: '看一下' (أنظر قليلاً)، '问一下' (أسأل سريعاً)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Chinese Weight Unit 斤 (Jīn) & Ordering Dumplings",
            "detail": "In China, market goods and restaurant dumplings are traditionally measured in '斤' (jīn, 1 jin = 500 grams). In northern China, dumplings are routinely ordered by weight (e.g. 半斤 = 20 dumplings). Tea (茶) is customarily served with meals.",
            "arDetail": "تُقاس الأطعمة في الأسواق والمطاعم الصينية التقليدية بوحدة الوزن الصينية '斤' (جين، يعادل 500 غرام). وغالباً ما يُطلب طبق الزلابية بالوزن (نصف جين = 20 حبة تقريباً)، ويُقدم الشاي كمشروب أساسي مع الوجبات."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q13-1",
            "question": "How many dumplings did Liu Ming end up ordering?",
            "arQuestion": "كم حبة زلابية طلب ليو مينغ في النهاية؟",
            "options": [
                "20个 (半斤 - 20 pieces)",
                "40个 (一斤 - 40 pieces)",
                "10个 (10 pieces)",
                "30个 (30 pieces)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q13-2",
            "question": "What drink did Liu Ming request with his meal?",
            "arQuestion": "ما المشروب الذي طلبه ليو مينغ مع وجبته؟",
            "options": [
                "一杯茶 (A cup of tea)",
                "一杯牛奶 (A glass of milk)",
                "一杯咖啡 (A cup of coffee)",
                "冰水 (Ice water)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 13."
}

# ==========================================
# UNIT 14: 我看了一个电影 (I Watched a Movie)
# ==========================================
unit14 = {
    "id": "hsk-1-hsk3-unit-14",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 14,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第14课：我看了一个电影",
        "en": "Lesson 14: I watched a movie",
        "ar": "الدرس 14: شاهدت فيلماً"
    },
    "dialogue": [
        # Text 1
        {
            "id": "14-1-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "你们上火车后看见王老师了吗？",
            "pinyin": "Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?",
            "translation": {
                "en": "Did you see Teacher Wang after getting on the train?",
                "ar": "هل رأيتم الأستاذة وانغ بعد ركوبكم القطار؟"
            },
            "audio": None
        },
        {
            "id": "14-1-2",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "没看见。中午车开后，有些人看书，有些人睡觉了。",
            "pinyin": "Méi kànjiàn. Zhōngwǔ chē kāi hòu, yǒuxiē rén kàn shū, yǒuxiē rén shuìjiào le.",
            "translation": {
                "en": "No, we didn't. After the train departed at noon, some people read books, and some fell asleep.",
                "ar": "لم نرها. بعد تحرك القطار ظهراً، كان بعض الأشخاص يقرأون وبعضهم نام."
            },
            "audio": None
        },
        {
            "id": "14-1-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "你呢？",
            "pinyin": "Nǐ ne?",
            "translation": {
                "en": "How about you?",
                "ar": "وأنت ماذا عنك؟"
            },
            "audio": None
        },
        {
            "id": "14-1-4",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "我看了一个电影。",
            "pinyin": "Wǒ kànle yí gè diànyǐng.",
            "translation": {
                "en": "I watched a movie.",
                "ar": "شاهدت فيلماً."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "14-2-1",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "你们会说汉语了，也会写汉字了吗？",
            "pinyin": "Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?",
            "translation": {
                "en": "Now that you can speak Chinese, can you also write Chinese characters?",
                "ar": "صرتم تجيدون التحدث بالصينية، فهل صرتم تجيدون كتابة المقاطع الصينية أيضاً؟"
            },
            "audio": None
        },
        {
            "id": "14-2-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我们都会写了。",
            "pinyin": "Wǒmen dōu huì xiě le.",
            "translation": {
                "en": "We can all write them now.",
                "ar": "أصبحنا جميعاً نعرف كيف نكتبها."
            },
            "audio": None
        },
        {
            "id": "14-2-3",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "老师，我听不见。",
            "pinyin": "Lǎoshī, wǒ tīng bú jiàn.",
            "translation": {
                "en": "Teacher, I cannot hear you.",
                "ar": "يا أستاذ، لا أستطيع سماعك."
            },
            "audio": None
        },
        {
            "id": "14-2-4",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "请大家不要说话！请听老师的问题：你们都会写哪些汉字了？",
            "pinyin": "Qǐng dàjiā búyào shuōhuà! Qǐng tīng lǎoshī de wèntí: Nǐmen dōu huì xiě nǎxiē Hànzì le?",
            "translation": {
                "en": "Everyone, please don't talk! Please listen to my question: Which Chinese characters can you all write now?",
                "ar": "رجاءً من الجميع التوقف عن الكلام! اسمعوا سؤال المعلم: ما هي المقاطع الصينية التي يمكنكم كتابتها الآن؟"
            },
            "audio": None
        },
        {
            "id": "14-2-5",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "我会写这些字了，您看！",
            "pinyin": "Wǒ huì xiě zhèxiē zì le, nín kàn!",
            "translation": {
                "en": "I know how to write these characters now, look!",
                "ar": "صرت أعرف كتابة هذه الحروف، انظر حضرتك!"
            },
            "audio": None
        },
        # Text 3
        {
            "id": "14-3-1",
            "role": "刘明 (Liu Ming)",
            "hanzi": "明年女儿上中学。",
            "pinyin": "Míngnián nǚ'ér shàng zhōngxué.",
            "translation": {
                "en": "Next year our daughter starts middle school.",
                "ar": "في العام القادم ستدخل ابنتنا المدرسة الإعدادية."
            },
            "audio": None
        },
        {
            "id": "14-3-2",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "对。儿子也上小学了。",
            "pinyin": "Duì. Érzi yě shàng xiǎoxué le.",
            "translation": {
                "en": "Right. Our son will also start primary school.",
                "ar": "صحيح. وابننا أيضاً سيبدأ المدرسة الابتدائية."
            },
            "audio": None
        },
        {
            "id": "14-3-3",
            "role": "刘明 (Liu Ming)",
            "hanzi": "我们家有了一个中学生。",
            "pinyin": "Wǒmen jiā yǒu le yí gè zhōngxuéshēng.",
            "translation": {
                "en": "Our home will have a middle schooler.",
                "ar": "سيكون في عائلتنا طالب مرحلة إعدادية."
            },
            "audio": None
        },
        {
            "id": "14-3-4",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "还有了一个小学生。",
            "pinyin": "Hái yǒu le yí gè xiǎoxuéshēng.",
            "translation": {
                "en": "And also a primary schooler.",
                "ar": "وطالب مدرسة ابتدائية أيضاً."
            },
            "audio": None
        },
        {
            "id": "14-3-5",
            "role": "刘明 (Liu Ming)",
            "hanzi": "上学后，他们都忙了。",
            "pinyin": "Shàngxué hòu, tāmen dōu máng le.",
            "translation": {
                "en": "Once school starts, they will both be busy.",
                "ar": "بعد بدء الدراسة، سيصبح كلاهما مشغولاً."
            },
            "audio": None
        },
        {
            "id": "14-3-6",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "是的。太晚了，睡觉吧。",
            "pinyin": "Shì de. Tài wǎn le, shuìjiào ba.",
            "translation": {
                "en": "Yes. It's late now, let's go to sleep.",
                "ar": "أجل. الوقت تأخر جداً، فلننم الآن."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Aspect Particle 了 (le) for Completed Action",
            "explanation": "‘了’ placed immediately after a verb indicates the completion or realization of an action: 我看了一个电影 (I watched a movie), 儿子也上小学了 (Son has entered primary school).",
            "arExplanation": "توضع أداة الإنجاز '了' بعد الفعل مباشرة للإشارة إلى اكتمال الفعل أو تحققه: '我看了一个电影' (شاهدت فيلماً)."
        },
        {
            "point": "Separable Verbs (离合词)",
            "explanation": "Verbs consisting of a verb and an object morpheme (e.g. 说话 shuōhuà, 睡觉 shuìjiào, 上课 shàngkè) can be separated by particles or modifiers: 睡了觉 (slept a sleep), 说了话 (spoke).",
            "arExplanation": "الأفعال القابلة للانفصال (离合词) تتكون من فعل ومفعول به، ويمكن إدخال أدوات أو كلمات بينهما: مثل '睡了觉' أو '说了话'."
        },
        {
            "point": "Scope Adverb 都 (dōu)",
            "explanation": "‘都’ means 'all' or 'both' and refers to the plural subject or topic preceding it: 我们都会写了 (We can all write them now), 他们都忙了 (They will both be busy).",
            "arExplanation": "الظرف الشامل '都' يعني 'جميعاً' أو 'كلاهما' ويشير إلى الفاعل الجمع المتقدم عليه: '我们都会写了' (كلنا نعرف كيف نكتبها)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Chinese Schooling Stages (小学、中学、大学)",
            "detail": "The Chinese education system generally divides schooling into 小学 (Primary School, grades 1-6), 初中 (Junior Middle School, grades 7-9), 高中 (Senior High School, grades 10-12), and 大学 (University).",
            "arDetail": "ينقسم نظام التعليم المدرسي في الصين عادة إلى المدرسة الابتدائية (小学، 6 سنوات)، والإعدادية (初中، 3 سنوات)، والثانوية (高中، 3 سنوات)، ثم المرحلة الجامعية (大学)."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q14-1",
            "question": "What did Chen Tianzhong do on the train?",
            "arQuestion": "ماذا فعل تشن تيانتشونغ على متن القطار؟",
            "options": [
                "看了一个电影 (Watched a movie)",
                "看了书 (Read a book)",
                "睡觉了 (Slept)",
                "和王老师说话 (Talked to Teacher Wang)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q14-2",
            "question": "Which schools will Liu Ming's daughter and son attend next year?",
            "arQuestion": "إلى أي مدرسة سينتقل ابنا ليو مينغ العام المقبل؟",
            "options": [
                "女儿上中学，儿子上小学 (Daughter middle school, son primary school)",
                "女儿上大学，儿子上高中 (Daughter university, son high school)",
                "都上小学 (Both primary school)",
                "都上中学 (Both middle school)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 14."
}

# ==========================================
# UNIT 15: 大兴机场见！ (See You at Daxing Airport!)
# ==========================================
unit15 = {
    "id": "hsk-1-hsk3-unit-15",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 15,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第15课：大兴机场见！",
        "en": "Lesson 15: See you at Daxing Airport!",
        "ar": "الدرس 15: نلتقي في مطار داشينغ!"
    },
    "dialogue": [
        # Text 1
        {
            "id": "15-1-1",
            "role": "李文 (Li Wen)",
            "hanzi": "你们爱吃哪个菜？",
            "pinyin": "Nǐmen ài chī nǎge cài?",
            "translation": {
                "en": "Which dish do you love eating?",
                "ar": "أي طبق تفضلون وتستمتعون بأكله؟"
            },
            "audio": None
        },
        {
            "id": "15-1-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我喜欢这个，也喜欢那个。",
            "pinyin": "Wǒ xǐhuan zhège, yě xǐhuan nàge.",
            "translation": {
                "en": "I like this one, and I like that one too.",
                "ar": "يعجبني هذا الطبق، وذلك الطبق أيضاً."
            },
            "audio": None
        },
        {
            "id": "15-1-3",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "这些菜都好吃，还很好看。",
            "pinyin": "Zhèxiē cài dōu hǎochī, hái hěn hǎokàn.",
            "translation": {
                "en": "These dishes are all delicious, and they look great too.",
                "ar": "كل هذه الأطباق لذيذة، ومظهرها جميل جداً أيضاً."
            },
            "audio": None
        },
        {
            "id": "15-1-4",
            "role": "李文 (Li Wen)",
            "hanzi": "我爱吃中国菜，也喜欢做。大家多吃点儿。",
            "pinyin": "Wǒ ài chī Zhōngguó cài, yě xǐhuan zuò. Dàjiā duō chī diǎnr.",
            "translation": {
                "en": "I love eating Chinese food, and I enjoy cooking it too. Everyone, please eat more!",
                "ar": "أنا أحب الطعام الصيني وأحب طبخه أيضاً. كلوا المزيد يا رفاق، بالهناء والشفاء."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "15-2-1",
            "role": "李文 (Li Wen)",
            "hanzi": "你们都想去哪儿？",
            "pinyin": "Nǐmen dōu xiǎng qù nǎr?",
            "translation": {
                "en": "Where do you all want to visit?",
                "ar": "إلى أين ترغبون جميعاً في السفر والزيارة؟"
            },
            "audio": None
        },
        {
            "id": "15-2-2",
            "role": "安妮 (Annie)",
            "hanzi": "去年我和男朋友去了西安，今年我想去北京。",
            "pinyin": "Qùnián wǒ hé nánpéngyou qùle Xī'ān, jīnnián wǒ xiǎng qù Běijīng.",
            "translation": {
                "en": "Last year my boyfriend and I went to Xi'an; this year I want to visit Beijing.",
                "ar": "في العام الماضي ذهبت أنا وصديقي إلى شيآن، وهذا العام أريد زيارة بكين."
            },
            "audio": None
        },
        {
            "id": "15-2-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "前几年我去了西安，非常非常好玩儿。今年我也想去北京。",
            "pinyin": "Qián jǐ nián wǒ qùle Xī'ān, fēicháng hǎowánr. Jīnnián wǒ yě xiǎng qù Běijīng.",
            "translation": {
                "en": "A few years ago I went to Xi'an, and it was so much fun. This year I want to visit Beijing too.",
                "ar": "قبل عدة سنوات ذهبت إلى شيآن وكانت ممتعة للغاية. وهذا العام أود الذهاب إلى بكين أيضاً."
            },
            "audio": None
        },
        {
            "id": "15-2-4",
            "role": "李文 (Li Wen)",
            "hanzi": "我和王老师都是北京人，北京非常漂亮。",
            "pinyin": "Wǒ hé Wáng lǎoshī dōu shì Běijīng rén, Běijīng fēicháng piàoliang.",
            "translation": {
                "en": "Ms. Wang and I are both from Beijing. Beijing is very beautiful.",
                "ar": "أنا والأستاذة وانغ من أهل بكين، وبكين مدينة فائقة الجمال."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "15-3-1",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "你们的飞机到北京要几个小时？",
            "pinyin": "Nǐmen de fēijī dào Běijīng yào jǐ gè xiǎoshí?",
            "translation": {
                "en": "How many hours will your flight take to reach Beijing?",
                "ar": "كم ساعة تستغرق رحلتكم الجوية للوصول إلى بكين؟"
            },
            "audio": None
        },
        {
            "id": "15-3-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "九个小时。",
            "pinyin": "Jiǔ gè xiǎoshí.",
            "translation": {
                "en": "Nine hours.",
                "ar": "تسع ساعات."
            },
            "audio": None
        },
        {
            "id": "15-3-3",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "我家人都在北京，星期天我姐姐也有时间，她可以去机场接你们，你们也可以住我家。",
            "pinyin": "Wǒ jiārén dōu zài Běijīng, xīngqītiān wǒ jiějie yě yǒu shíjiān, tā kěyǐ qù jīchǎng jiē nǐmen, nǐmen yě kěyǐ zhù wǒ jiā.",
            "translation": {
                "en": "My whole family is in Beijing, and my older sister has free time on Sunday. She can pick you up at the airport, and you can stay at my home.",
                "ar": "كل أفراد عائلتي في بكين، ولدى أختي الكبرى وقت فراغ يوم الأحد، يمكنها استقبالكم في المطار، كما يمكنكم الإقامة في بيتي."
            },
            "audio": None
        },
        {
            "id": "15-3-4",
            "role": "安妮 (Annie)",
            "hanzi": "我们星期日早上八点到大兴机场，早不早？",
            "pinyin": "Wǒmen xīngqīrì zǎoshang bā diǎn dào Dàxīng Jīchǎng, zǎo bu zǎo?",
            "translation": {
                "en": "We'll arrive at Daxing Airport at 8:00 on Sunday morning; is that too early?",
                "ar": "سنصل إلى مطار داشينغ صباح الأحد عند الساعة الثامنة، أليس ذلك مبكراً جداً؟"
            },
            "audio": None
        },
        {
            "id": "15-3-5",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "不早。",
            "pinyin": "Bù zǎo.",
            "translation": {
                "en": "Not too early.",
                "ar": "ليس مبكراً أبداً."
            },
            "audio": None
        },
        {
            "id": "15-3-6",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "谢谢老师！那我们和您姐姐在大兴机场见！",
            "pinyin": "Xièxie lǎoshī! Nà wǒmen hé nín jiějie zài Dàxīng Jīchǎng jiàn!",
            "translation": {
                "en": "Thank you, Teacher! We'll meet your sister at Daxing Airport then!",
                "ar": "شكراً جزيلاً يا معلمتنا! إذاً سنلتقي مع أختكِ في مطار داشينغ!"
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Compound Sentences with 也/还 (……，也/还……)",
            "explanation": "Connects coordinate clauses denoting related or progressive aspects: 我爱吃中国菜，也喜欢做 (I love eating Chinese food, and also like making it); 这些菜都好吃，还很好看 (These dishes are all delicious, and furthermore look attractive).",
            "arExplanation": "تُستخدم الجمل المركبة المتوازية المقترنة بـ '也' (أيضاً) أو '还' (علاوة على ذلك) للربط بين صفتين أو جملتين فعليتين متناسقتين."
        },
        {
            "point": "Verb 要 (yào) Indicating Required Time",
            "explanation": "‘要’ followed by a time duration expresses the amount of time needed: 要几个小时？ (How many hours does it take?) -> 九个小时 (Nine hours).",
            "arExplanation": "يُستخدم الفعل '要' متبوعاً بالمدة الزمنية للدلالة على الوقت اللازم أو المستغرق لإتمام الأمر: '要几个小时？' (كم ساعة يستغرق الأمر؟)."
        },
        {
            "point": "Meeting Expression: 地点 + 见 (jiàn)",
            "explanation": "‘[Place] + 见’ is a common colloquial farewell pattern meaning 'See you at [Place]': 大兴机场见！ (See you at Daxing Airport!).",
            "arExplanation": "الصيغة الاصطلاحية '[المكان] + 见' تعني 'أراك في [المكان]' وهي شائعة جداً في الوداع والاتفاق: '大兴机场见！' (نلتقي في مطار داشينغ!)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Hospitality Culture & Daxing Airport (大兴国际机场)",
            "detail": "Chinese dining culture emphasizes warm hospitality, with hosts frequently urging guests to eat more ('大家多吃点儿') and offering accommodation to visiting friends. Beijing Daxing International Airport (PKX) is one of the world's largest single-building airport terminals, opened in 2019.",
            "arDetail": "تتميز الثقافة الصينية بكرم الضيافة البالغ وحث الضيوف بلطف على الإكثار من الأكل ('多吃点儿') والترحيب باستضافتهم في المنازل. ويُعد مطار بكين داشينغ الدولي (PKX) من أكبر وأحدث مطارات العالم، وتم افتتاحه عام 2019 بتصميم معماري فريد."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q15-1",
            "question": "How long will the flight to Beijing take for Annie and Bai Jiayue?",
            "arQuestion": "كم من الوقت ستستغرق الرحلة الجوية إلى بكين؟",
            "options": [
                "九个小时 (9 hours)",
                "八个小时 (8 hours)",
                "七个小时 (7 hours)",
                "十个小时 (10 hours)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q15-2",
            "question": "Who will meet them at Daxing Airport?",
            "arQuestion": "من سيستقبلهم في مطار داشينغ؟",
            "options": [
                "王老师的姐姐 (Teacher Wang's older sister)",
                "李文的姐姐 (Li Wen's older sister)",
                "安妮的男朋友 (Annie's boyfriend)",
                "刘明 (Liu Ming)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 15."
}

# Write each unit out
units = [unit11, unit12, unit13, unit14, unit15]
for u in units:
    fpath = os.path.join(out_dir, f"unit-{u['unitId']}.json")
    with open(fpath, "w", encoding="utf-8") as f:
        json.dump(u, f, ensure_ascii=False, indent=2)
    print(f"Successfully generated {fpath}")

print("All Units 11 to 15 generated successfully!")
