import json
import os

os.makedirs("chinese-hsk-website/source-data/conversations/hsk-1/hsk3", exist_ok=True)

# UNIT 1
unit1 = {
    "id": "hsk-1-hsk3-unit-1",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 1,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第1课：AI小语，你好！",
        "en": "Lesson 1: Hello, AI Xiaoyu!",
        "ar": "الدرس 1: مرحباً يا ذكاء اصطناعي شياويو!"
    },
    "dialogue": [
        # Text 1
        {
            "id": "1-1-1",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "AI小语，你好！",
            "pinyin": "AI Xiǎoyǔ, nǐ hǎo!",
            "translation": {
                "en": "Hello, AI Xiaoyu!",
                "ar": "مرحباً يا ذكاء اصطناعي شياويو!"
            },
            "audio": None
        },
        {
            "id": "1-1-2",
            "role": "小语 (Xiaoyu)",
            "hanzi": "王老师，你好！",
            "pinyin": "Wáng lǎoshī, nǐ hǎo!",
            "translation": {
                "en": "Hello, Ms. Wang!",
                "ar": "مرحباً يا أستاذة وانغ!"
            },
            "audio": None
        },
        # Text 2
        {
            "id": "1-2-1",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "大家好！",
            "pinyin": "Dàjiā hǎo!",
            "translation": {
                "en": "Hello, everyone!",
                "ar": "مرحباً بالجميع!"
            },
            "audio": None
        },
        {
            "id": "1-2-2",
            "role": "学生们 (Students)",
            "hanzi": "老师，您好！",
            "pinyin": "Lǎoshī, nín hǎo!",
            "translation": {
                "en": "Hello, teacher!",
                "ar": "أهلاً وسهلاً بكِ يا معلمتنا!"
            },
            "audio": None
        },
        {
            "id": "1-2-3",
            "role": "小语 (Xiaoyu)",
            "hanzi": "你们好！",
            "pinyin": "Nǐmen hǎo!",
            "translation": {
                "en": "Hello, all of you!",
                "ar": "مرحباً بكم جميعاً!"
            },
            "audio": None
        },
        {
            "id": "1-2-4",
            "role": "学生们 (Students)",
            "hanzi": "你好，小语！",
            "pinyin": "Nǐ hǎo, Xiǎoyǔ!",
            "translation": {
                "en": "Hello, Xiaoyu!",
                "ar": "مرحباً يا شياويو!"
            },
            "audio": None
        },
        # Text 3
        {
            "id": "1-3-1",
            "role": "学生们 (Students)",
            "hanzi": "谢谢！",
            "pinyin": "Xièxie!",
            "translation": {
                "en": "Thank you!",
                "ar": "شكراً لكِ!"
            },
            "audio": None
        },
        {
            "id": "1-3-2",
            "role": "小语 (Xiaoyu)",
            "hanzi": "不客气！",
            "pinyin": "Bú kèqi!",
            "translation": {
                "en": "You're welcome!",
                "ar": "على الرحب والسعة!"
            },
            "audio": None
        },
        {
            "id": "1-3-3",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "同学们，再见！",
            "pinyin": "Tóngxuémen, zàijiàn!",
            "translation": {
                "en": "Goodbye, class!",
                "ar": "إلى اللقاء يا طلابي!"
            },
            "audio": None
        },
        {
            "id": "1-3-4",
            "role": "学生们 (Students)",
            "hanzi": "老师，再见！",
            "pinyin": "Lǎoshī, zàijiàn!",
            "translation": {
                "en": "Goodbye, teacher!",
                "ar": "إلى اللقاء يا معلمتنا!"
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Honorific Pronoun 您 (Nín)",
            "explanation": "‘您’ is the respectful second-person singular pronoun in Chinese, used when speaking to teachers, elders, superiors, or esteemed guests.",
            "arExplanation": "الضمير '您' هو صيغة التبجيل والاحترام لضمير المخاطب المفرد، ويُستخدم لمخاطبة المعلمين، كبار السن، والضيوف."
        },
        {
            "point": "Plural Suffix 们 (men)",
            "explanation": "‘们’ is suffixed to personal pronouns and person nouns to indicate plurality: 你们 (you all), 同学们 (classmates), 学生们 (students).",
            "arExplanation": "اللاحقة '们' تلحق بضمائر وأسماء الأشخاص للدلالة على الجمع مثل: 你们 (أنتم)، 同学们 (أيها الزملاء والطلاب)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Respecting Teachers in Chinese Culture (尊师重道)",
            "detail": "Addressing teachers as '老师' (Lǎoshī) followed by '您好' (Nín hǎo) is a fundamental courtesy deeply rooted in Chinese social etiquette.",
            "arDetail": "مناداة المعلم بلقب '老师' متبوعة بـ '您好' تُعد من أهم قواعد الأدب والاحترام المتجذرة في الثقافة الصينية."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q1-1",
            "question": "What is the respectful greeting students use to address Teacher Wang?",
            "arQuestion": "ما هي التحية المليئة بالاحترام التي استخدمها الطلاب لمخاطبة المعلمة وانغ؟",
            "options": [
                "老师，您好！ (Lǎoshī, nín hǎo!)",
                "王老师，你好！ (Wáng lǎoshī, nǐ hǎo!)",
                "AI小语，你好！ (AI Xiǎoyǔ, nǐ hǎo!)",
                "大家好！ (Dàjiā hǎo!)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q1-2",
            "question": "How does Xiaoyu respond when students say '谢谢' (Xièxie)?",
            "arQuestion": "بماذا تجيب شياويو عندما يقول الطلاب '谢谢' (شكراً)؟",
            "options": [
                "不客气！ (Bú kèqi!)",
                "再见！ (Zàijiàn!)",
                "你好！ (Nǐ hǎo!)",
                "没关系！ (Méi guānxi!)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 1."
}

# UNIT 2
unit2 = {
    "id": "hsk-1-hsk3-unit-2",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 2,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第2课：我叫李文",
        "en": "Lesson 2: My Name Is Li Wen",
        "ar": "الدرس 2: اسمي لي ون"
    },
    "dialogue": [
        # Text 1
        {
            "id": "2-1-1",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "请问，你叫什么名字？",
            "pinyin": "Qǐngwèn, nǐ jiào shénme míngzi?",
            "translation": {
                "en": "Excuse me, what is your name?",
                "ar": "من فضلك، ما اسمك؟"
            },
            "audio": None
        },
        {
            "id": "2-1-2",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "我叫陈天中。",
            "pinyin": "Wǒ jiào Chén Tiānzhōng.",
            "translation": {
                "en": "My name is Chen Tianzhong.",
                "ar": "اسمي تشن تيانتشونغ."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "2-2-1",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "你好，安妮！",
            "pinyin": "Nǐ hǎo, Ānnī!",
            "translation": {
                "en": "Hello, Annie!",
                "ar": "مرحباً يا آني!"
            },
            "audio": None
        },
        {
            "id": "2-2-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "你好，陈天中！我不是安妮，我是白家月。",
            "pinyin": "Nǐ hǎo, Chén Tiānzhōng! Wǒ bú shì Ānnī, wǒ shì Bái Jiāyuè.",
            "translation": {
                "en": "Hello, Chen Tianzhong! I am not Annie, I am Bai Jiayue.",
                "ar": "مرحباً تشن تيانتشونغ! أنا لست آني، أنا باي جيايويه."
            },
            "audio": None
        },
        {
            "id": "2-2-3",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "对不起！",
            "pinyin": "Duìbuqǐ!",
            "translation": {
                "en": "I am sorry!",
                "ar": "أنا آسف جداً!"
            },
            "audio": None
        },
        {
            "id": "2-2-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "没关系！",
            "pinyin": "Méi guānxi!",
            "translation": {
                "en": "That's all right! (No worries)",
                "ar": "لا بأس! (لا عليك)"
            },
            "audio": None
        },
        # Text 3
        {
            "id": "2-3-1",
            "role": "李文 (Li Wen)",
            "hanzi": "你好！我叫李文。",
            "pinyin": "Nǐ hǎo! Wǒ jiào Lǐ Wén.",
            "translation": {
                "en": "Hello! My name is Li Wen.",
                "ar": "مرحباً! اسمي لي ون."
            },
            "audio": None
        },
        {
            "id": "2-3-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "你好！我叫白家月。",
            "pinyin": "Nǐ hǎo! Wǒ jiào Bái Jiāyuè.",
            "translation": {
                "en": "Hello! My name is Bai Jiayue.",
                "ar": "مرحباً! اسمي باي جيايويه."
            },
            "audio": None
        },
        {
            "id": "2-3-3",
            "role": "李文 (Li Wen)",
            "hanzi": "很高兴认识你。",
            "pinyin": "Hěn gāoxìng rènshi nǐ.",
            "translation": {
                "en": "Nice to meet you.",
                "ar": "سررت جداً بمعرفتك."
            },
            "audio": None
        },
        {
            "id": "2-3-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "认识你我也很高兴。",
            "pinyin": "Rènshi nǐ wǒ yě hěn gāoxìng.",
            "translation": {
                "en": "Nice to meet you too.",
                "ar": "وأنا أيضاً مسرورة بمعرفتك."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Basic Word Order in Chinese (主谓宾)",
            "explanation": "Chinese follows Subject + Verb (Predicate) + Object order: 我 (Subject) 叫 (Verb) 陈天中 (Object).",
            "arExplanation": "ترتيب الجملة البسيطة في اللغة الصينية: الفاعل + الفعل + المفعول به، مثل: 我 (أنا) 叫 (أُدعى) 陈天中."
        },
        {
            "point": "The Adverb 也 (yě - also)",
            "explanation": "‘也’ is placed before verbs or adjectives to mean 'also/too': 认识你我也很高兴 (Meeting you, I am also very glad).",
            "arExplanation": "الظرف '也' يأتي قبل الأفعال والصفات ليفيد معنى 'أيضاً'."
        }
    ],
    "culturalNotes": [
        {
            "title": "Chinese Name Structure (姓 + 名)",
            "detail": "In Chinese names, the family surname comes first, followed by the given name. For example, in 陈天中, 陈 (Chen) is the surname and 天中 (Tianzhong) is the given name.",
            "arDetail": "في الأسماء الصينية، يأتي اسم العائلة (اللقب) أولاً، يليه الاسم الشخصي؛ مثل 陈天中، حيث 陈 هو اللقب و 天中 هو الاسم الشخصي."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q2-1",
            "question": "Whom did Chen Tianzhong mistake Bai Jiayue for?",
            "arQuestion": "من هي الفتاة التي ظن تشن تيانتشونغ بالخطأ أن باي جيايويه هي إياها؟",
            "options": [
                "安妮 (Annie)",
                "王老师 (Teacher Wang)",
                "小语 (Xiaoyu)",
                "李文 (Li Wen)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q2-2",
            "question": "How do you say 'Nice to meet you too' in Chinese?",
            "arQuestion": "كيف تقول 'وأنا أيضاً مسرور بلقائك' بالصينية؟",
            "options": [
                "认识你我也很高兴。 (Rènshi nǐ wǒ yě hěn gāoxìng.)",
                "对不起，没关系。 (Duìbuqǐ, méi guānxi.)",
                "请问，你叫什么名字？ (Qǐngwèn, nǐ jiào shénme míngzi?)",
                "老师，再见！ (Lǎoshī, zàijiàn!)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 2."
}

# UNIT 3
unit3 = {
    "id": "hsk-1-hsk3-unit-3",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 3,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第3课：我是中国人",
        "en": "Lesson 3: I Am Chinese",
        "ar": "الدرس 3: أنا صيني"
    },
    "dialogue": [
        # Text 1
        {
            "id": "3-1-1",
            "role": "李文 (Li Wen)",
            "hanzi": "我是中国人。",
            "pinyin": "Wǒ shì Zhōngguó rén.",
            "translation": {
                "en": "I am Chinese.",
                "ar": "أنا صيني."
            },
            "audio": None
        },
        {
            "id": "3-1-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我是法国人。我的中文老师也是中国人。",
            "pinyin": "Wǒ shì Fǎguó rén. Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.",
            "translation": {
                "en": "I am French. My Chinese language teacher is also Chinese.",
                "ar": "أنا فرنسية. ومعلمتي للغة الصينية صينية أيضاً."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "3-2-1",
            "role": "安妮 (Annie)",
            "hanzi": "这是谁？",
            "pinyin": "Zhè shì shéi?",
            "translation": {
                "en": "Who is this?",
                "ar": "من هذا؟ (أو من هذه؟)"
            },
            "audio": None
        },
        {
            "id": "3-2-2",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "这是我女朋友。",
            "pinyin": "Zhè shì wǒ nǚpéngyou.",
            "translation": {
                "en": "This is my girlfriend.",
                "ar": "هذه صديقتي (حبيبتي)."
            },
            "audio": None
        },
        {
            "id": "3-2-3",
            "role": "安妮 (Annie)",
            "hanzi": "你女朋友是哪国人？",
            "pinyin": "Nǐ nǚpéngyou shì nǎ guó rén?",
            "translation": {
                "en": "What nationality is your girlfriend?",
                "ar": "ما جنسية صديقتك؟"
            },
            "audio": None
        },
        {
            "id": "3-2-4",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "她也是泰国人。",
            "pinyin": "Tā yě shì Tàiguó rén.",
            "translation": {
                "en": "She is also Thai.",
                "ar": "هي أيضاً تايلاندية."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "3-3-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "喂，一飞！",
            "pinyin": "Wèi, Yīfēi!",
            "translation": {
                "en": "Hello, Yifei!",
                "ar": "أهلاً يا ييفي!"
            },
            "audio": None
        },
        {
            "id": "3-3-2",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "姐姐！",
            "pinyin": "Jiějie!",
            "translation": {
                "en": "Elder sister!",
                "ar": "أختي الكبرى!"
            },
            "audio": None
        },
        {
            "id": "3-3-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你工作还忙吗？",
            "pinyin": "Nǐ gōngzuò hái máng ma?",
            "translation": {
                "en": "Are you still busy with work?",
                "ar": "هل ما زلتِ مشغولة في العمل؟"
            },
            "audio": None
        },
        {
            "id": "3-3-4",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "对，还很忙。你也很忙吗？",
            "pinyin": "Duì, hái hěn máng. Nǐ yě hěn máng ma?",
            "translation": {
                "en": "Yes, still very busy. Are you also very busy?",
                "ar": "نعم، ما زلت مشغولة جداً. هل أنتِ أيضاً مشغولة؟"
            },
            "audio": None
        },
        {
            "id": "3-3-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "我不太忙。我们很想你。",
            "pinyin": "Wǒ bú tài máng. Wǒmen hěn xiǎng nǐ.",
            "translation": {
                "en": "I'm not too busy. We miss you a lot.",
                "ar": "لست مشغولة كثيراً. نحن نشتاق إليكِ كثيراً."
            },
            "audio": None
        },
        {
            "id": "3-3-6",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "我也想你们。",
            "pinyin": "Wǒ yě xiǎng nǐmen.",
            "translation": {
                "en": "I miss you all too.",
                "ar": "وأنا أيضاً أشتاق إليكم جميعاً."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "The '是' Sentence (是字句)",
            "explanation": "‘是’ (shì) acts as the copula 'to be' linking subject and nominal predicate: 我是中国人 (I am Chinese). Negation is '不是' (bú shì).",
            "arExplanation": "فعل الكينونة '是' يربط بين المبتدأ والخبر الاسمي: 我是中国人 (أنا صيني). وصيغة النفي هي '不是'."
        },
        {
            "point": "Yes-No Questions with 吗 (ma)",
            "explanation": "Adding '吗' at the end of a declarative statement turns it into a yes/no question without changing word order: 你很忙吗？ (Are you busy?).",
            "arExplanation": "إضافة أداة الاستفهام '吗' في نهاية الجملة الخبرية يحولها إلى سؤال بنعم أو لا دون تغيير ترتيب الكلمات."
        }
    ],
    "culturalNotes": [
        {
            "title": "Country Names and Nationalities in Chinese",
            "detail": "Nationalities in Chinese are formed logically by combining the country name with '人' (rén, person): 中国 (China) -> 中国人 (Chinese), 法国 (France) -> 法国人 (French).",
            "arDetail": "تتكون الجنسيات في اللغة الصينية بتركيبة قياسية سهلة: اسم الدولة + 人 (شخص)؛ مثل: 中国 + 人 = صيني، 法国 + 人 = فرنسي."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q3-1",
            "question": "What is Bai Jiayue's nationality?",
            "arQuestion": "ما هي جنسية باي جيايويه؟",
            "options": [
                "法国人 (French)",
                "中国人 (Chinese)",
                "泰国人 (Thai)",
                "美国人 (American)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q3-2",
            "question": "Who called Wang Yifei to ask about her work?",
            "arQuestion": "من التي اتصلت بـ وانغ ييفي للاطمئنان على عملها؟",
            "options": [
                "王一雪 (Her elder sister Wang Yixue)",
                "白家月 (Bai Jiayue)",
                "安妮 (Annie)",
                "小语 (Xiaoyu)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 3."
}

# UNIT 4
unit4 = {
    "id": "hsk-1-hsk3-unit-4",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 4,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第4课：我有两个孩子",
        "en": "Lesson 4: I Have Two Children",
        "ar": "الدرس 4: لدي طفلان"
    },
    "dialogue": [
        # Text 1
        {
            "id": "4-1-1",
            "role": "刘明 (Liu Ming)",
            "hanzi": "一飞忙吗？",
            "pinyin": "Yīfēi máng ma?",
            "translation": {
                "en": "Is Yifei busy?",
                "ar": "هل ييفي مشغولة؟"
            },
            "audio": None
        },
        {
            "id": "4-1-2",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "她很忙。",
            "pinyin": "Tā hěn máng.",
            "translation": {
                "en": "She is very busy.",
                "ar": "إنها مشغولة جداً."
            },
            "audio": None
        },
        {
            "id": "4-1-3",
            "role": "刘明 (Liu Ming)",
            "hanzi": "她有多少个学生？",
            "pinyin": "Tā yǒu duōshao gè xuésheng?",
            "translation": {
                "en": "How many students does she have?",
                "ar": "كم طالباً لديها؟"
            },
            "audio": None
        },
        {
            "id": "4-1-4",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "她有二十个学生。",
            "pinyin": "Tā yǒu èrshí gè xuésheng.",
            "translation": {
                "en": "She has twenty students.",
                "ar": "لديها عشرون طالباً."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "4-2-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "我有两个哥哥，你呢？",
            "pinyin": "Wǒ yǒu liǎng gè gēge, nǐ ne?",
            "translation": {
                "en": "I have two elder brothers, what about you?",
                "ar": "لدي أخوان أكبر مني، وأنت؟"
            },
            "audio": None
        },
        {
            "id": "4-2-2",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "我没有哥哥。",
            "pinyin": "Wǒ méiyǒu gēge.",
            "translation": {
                "en": "I don't have any elder brothers.",
                "ar": "ليس لدي إخوة كبار."
            },
            "audio": None
        },
        {
            "id": "4-2-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你家有几口人？",
            "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?",
            "translation": {
                "en": "How many people are there in your family?",
                "ar": "كم فرداً في عائلتك؟"
            },
            "audio": None
        },
        {
            "id": "4-2-4",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "我家有四口人，爸爸、妈妈、妹妹和我。",
            "pinyin": "Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.",
            "translation": {
                "en": "There are four people in my family: my dad, my mom, my younger sister, and me.",
                "ar": "في عائلتي أربعة أفراد: أبي، أمي، أختي الصغرى وأنا."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "4-3-1",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "这是您儿子吗？",
            "pinyin": "Zhè shì nín érzi ma?",
            "translation": {
                "en": "Is this your son?",
                "ar": "هل هذا ابنكِ؟"
            },
            "audio": None
        },
        {
            "id": "4-3-2",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "是的。我有两个孩子，一个儿子，一个女儿。",
            "pinyin": "Shì de. Wǒ yǒu liǎng gè háizi, yí gè érzi, yí gè nǚ'ér.",
            "translation": {
                "en": "Yes. I have two children: one son and one daughter.",
                "ar": "نعم. لدي طفلان، ابن وابنة."
            },
            "audio": None
        },
        {
            "id": "4-3-3",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "您儿子几岁？",
            "pinyin": "Nín érzi jǐ suì?",
            "translation": {
                "en": "How old is your son?",
                "ar": "كم عمر ابنكِ؟"
            },
            "audio": None
        },
        {
            "id": "4-3-4",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "他今年五岁。",
            "pinyin": "Tā jīnnián wǔ suì.",
            "translation": {
                "en": "He is five years old this year.",
                "ar": "عمره خمس سنوات هذا العام."
            },
            "audio": None
        },
        {
            "id": "4-3-5",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "您女儿多大？",
            "pinyin": "Nín nǚ'ér duō dà?",
            "translation": {
                "en": "How old is your daughter?",
                "ar": "كم عمر ابنتكِ؟"
            },
            "audio": None
        },
        {
            "id": "4-3-6",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "她今年十二。",
            "pinyin": "Tā jīnnián shí'èr.",
            "translation": {
                "en": "She is twelve this year.",
                "ar": "عمرها اثنا عشر عاماً هذا العام."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "The '有' Sentence for Possession (有字句)",
            "explanation": "‘有’ (yǒu) expresses possession ('to have'). Its negative form is '没有' (méiyǒu), never '不有'. Example: 我有两个孩子 (I have two children).",
            "arExplanation": "الفعل '有' يدل على الملكية ووجود الشيء، ونفيه يكون دائماً بـ '没有' ولا يجوز استخدام '不'."
        },
        {
            "point": "Distinction between 二 (èr) and 两 (liǎng)",
            "explanation": "‘两’ is used before measure words to denote quantity (两个孩子, 两口人), whereas ‘二’ is used for counting numbers and decimals (十二, 二十).",
            "arExplanation": "تُستخدم '两' مع كلمات القياس للدلالة على الكمية (طفلان، شخصان)، بينما تُستخدم '二' للعد والترتيب والأعداد المركبة (12، 20)."
        },
        {
            "point": "Asking Age: 几岁 (jǐ suì) vs 多大 (duō dà)",
            "explanation": "‘几岁’ is typically used for children under 10 years old, while ‘多大’ is used for older children, adolescents, and adults.",
            "arExplanation": "السؤال بـ '几岁' مخصص للأطفال دون سن العاشرة، بينما يُستخدم '多大' للأشخاص الأكبر سناً والبالغين."
        }
    ],
    "culturalNotes": [
        {
            "title": "Family Measure Word 口 (kǒu)",
            "detail": "‘口’ literally means mouth, poetically symbolizing the number of mouths to feed in a traditional household: 我家有四口人.",
            "arDetail": "كلمة القياس '口' تعني حرفياً 'فم'، وتُستخدم تقليدياً لعد أفراد الأسرة تعبيراً عن عدد الأفواه التي يتم إطعامها في البيت."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q4-1",
            "question": "How many children does Wang Yixue have?",
            "arQuestion": "كم طفلاً لدى وانغ ييشيويه؟",
            "options": [
                "两个孩子 (Two children: a son and a daughter)",
                "一个孩子 (One child)",
                "三个孩子 (Three children)",
                "没有孩子 (No children)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q4-2",
            "question": "How old is Wang Yixue's son?",
            "arQuestion": "كم يبلغ عمر ابن وانغ ييشيويه؟",
            "options": [
                "五岁 (5 years old)",
                "十二岁 (12 years old)",
                "二十岁 (20 years old)",
                "四岁 (4 years old)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 4."
}

# UNIT 5
unit5 = {
    "id": "hsk-1-hsk3-unit-5",
    "curriculum": "hsk3",
    "hskLevel": 1,
    "unitId": 5,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第5课：今天我休息",
        "en": "Lesson 5: I Am Off Today",
        "ar": "الدرس 5: اليوم لدي يوم عطلة"
    },
    "dialogue": [
        # Text 1
        {
            "id": "5-1-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "今天几号？",
            "pinyin": "Jīntiān jǐ hào?",
            "translation": {
                "en": "What's the date today?",
                "ar": "ما تاريخ اليوم؟"
            },
            "audio": None
        },
        {
            "id": "5-1-2",
            "role": "刘明 (Liu Ming)",
            "hanzi": "今天9月8号。",
            "pinyin": "Jīntiān jiǔ yuè bā hào.",
            "translation": {
                "en": "Today is September 8th.",
                "ar": "اليوم الثامن من سبتمبر."
            },
            "audio": None
        },
        {
            "id": "5-1-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "星期几？",
            "pinyin": "Xīngqī jǐ?",
            "translation": {
                "en": "What day of the week is it?",
                "ar": "أي يوم من أيام الأسبوع؟"
            },
            "audio": None
        },
        {
            "id": "5-1-4",
            "role": "刘明 (Liu Ming)",
            "hanzi": "星期日。今天我休息。",
            "pinyin": "Xīngqīrì. Jīntiān wǒ xiūxi.",
            "translation": {
                "en": "Sunday. I'm off today.",
                "ar": "يوم الأحد. اليوم أنا في عطلة وراحة."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "5-2-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你会做饭吗？",
            "pinyin": "Nǐ huì zuò fàn ma?",
            "translation": {
                "en": "Can you cook? / Do you know how to cook?",
                "ar": "هل تجيد الطهي وإعداد الطعام؟"
            },
            "audio": None
        },
        {
            "id": "5-2-2",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "我会做。",
            "pinyin": "Wǒ huì zuò.",
            "translation": {
                "en": "Yes, I can.",
                "ar": "نعم، أجيد ذلك."
            },
            "audio": None
        },
        {
            "id": "5-2-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你会做什么？",
            "pinyin": "Nǐ huì zuò shénme?",
            "translation": {
                "en": "What can you make?",
                "ar": "ماذا تجيد أن تطهو؟"
            },
            "audio": None
        },
        {
            "id": "5-2-4",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "我会做面条儿、饺子，也会做一些菜。星期天我也做饭。",
            "pinyin": "Wǒ huì zuò miàntiáor, jiǎozi, yě huì zuò yìxiē cài. Xīngqītiān wǒ yě zuò fàn.",
            "translation": {
                "en": "I can make noodles, dumplings, and also some dishes. I also cook on Sundays.",
                "ar": "أجيد إعداد النودلز، الزلابية الصينية (الدمبلينغ)، وبعض الأطباق المتنوعة. كما أنني أطبخ يوم الأحد أيضاً."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "5-3-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "同乐，下班吗？",
            "pinyin": "Tónglè, xiàbān ma?",
            "translation": {
                "en": "Tongle, are you finishing work now?",
                "ar": "يا تونغله، هل انتهيت من دوام العمل؟"
            },
            "audio": None
        },
        {
            "id": "5-3-2",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "下班。",
            "pinyin": "Xiàbān.",
            "translation": {
                "en": "Yes, finishing work.",
                "ar": "نعم، انتهى الدوام."
            },
            "audio": None
        },
        {
            "id": "5-3-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "这是你的新电脑吗？",
            "pinyin": "Zhè shì nǐ de xīn diànnǎo ma?",
            "translation": {
                "en": "Is this your new computer?",
                "ar": "هل هذا حاسوبك الجديد؟"
            },
            "audio": None
        },
        {
            "id": "5-3-4",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "是的，是我的新电脑。",
            "pinyin": "Shì de, shì wǒ de xīn diànnǎo.",
            "translation": {
                "en": "Yes, it is my new computer.",
                "ar": "نعم، إنه حاسوبي الجديد."
            },
            "audio": None
        },
        {
            "id": "5-3-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "真好看！",
            "pinyin": "Zhēn hǎokàn!",
            "translation": {
                "en": "It looks really nice!",
                "ar": "جميل وأنيق حقاً!"
            },
            "audio": None
        },
        {
            "id": "5-3-6",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "我也很喜欢它。",
            "pinyin": "Wǒ yě hěn xǐhuan tā.",
            "translation": {
                "en": "I really like it too.",
                "ar": "وأنا أيضاً أحبه ومعجب به جداً."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Expressing Dates and Days (时间的表达)",
            "explanation": "Chinese expresses dates from largest to smallest unit: Month + Day + Day of Week, e.g., 9月8号 星期日 (September 8th, Sunday).",
            "arExplanation": "تُصاغ التواريخ في الصينية من الوحدة الأكبر إلى الأصغر: الشهر + اليوم + يوم الأسبوع؛ مثل: 9月8号 星期日."
        },
        {
            "point": "Modal Verb 会 (huì - learned ability)",
            "explanation": "‘会’ expresses an ability acquired through learning or practice: 我会做饭 (I can cook / I know how to cook). Negation is '不会' (bú huì).",
            "arExplanation": "فعل المقدرة '会' يعبر عن مهارة أو قدرة مكتسبة بالتعلم والتمرين، مثل: 我会做饭 (أجيد الطهي). والنفي: 不会."
        }
    ],
    "culturalNotes": [
        {
            "title": "Sunday: 星期日 (Xīngqīrì) vs 星期天 (Xīngqītiān)",
            "detail": "Both words refer to Sunday. 星期日 is often used in written or formal contexts, while 星期天 is common in casual spoken conversation.",
            "arDetail": "كلا اللفظين يعنيان 'يوم الأحد'. 星期日 يُستخدم غالباً في السياقات المكتوبة والرسمية، بينما 星期天 أكثر شيوعاً في المحادثات اليومية الشفهية."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q5-1",
            "question": "What Chinese dishes can Yang Tongle make?",
            "arQuestion": "ما هي الأطباق التي يستطيع يانغ تونغله طهيها؟",
            "options": [
                "面条儿、饺子和一些菜 (Noodles, dumplings, and dishes)",
                "烤鸭和米饭 (Roast duck and rice)",
                "蛋糕和面包 (Cakes and bread)",
                "他不会做饭 (He cannot cook)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q5-2",
            "question": "What does Wang Yixue say about Yang Tongle's new computer?",
            "arQuestion": "ماذا قالت وانغ ييشيويه عن حاسوب يانغ تونغله الجديد؟",
            "options": [
                "真好看！ (It looks really nice!)",
                "太贵了！ (Too expensive!)",
                "很大！ (Very big!)",
                "真便宜！ (Really cheap!)"
            ],
            "answerIndex": 0
        }
    ],
    "shadowingPractice": {
        "enabled": True,
        "mode": "line-by-line"
    },
    "authoringNote": "Official New HSK 3.0 Course (FLTRP 2026) Lesson 5."
}

# Write files
units = [unit1, unit2, unit3, unit4, unit5]
for idx, u in enumerate(units, 1):
    path = f"chinese-hsk-website/source-data/conversations/hsk-1/hsk3/unit-{idx}.json"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(u, f, ensure_ascii=False, indent=2)
    print(f"Wrote {path}")
