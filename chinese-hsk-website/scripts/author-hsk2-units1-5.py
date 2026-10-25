# -*- coding: utf-8 -*-
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

out_dir = "chinese-hsk-website/source-data/conversations/hsk-2/hsk3"
os.makedirs(out_dir, exist_ok=True)

# ==========================================
# UNIT 1: 她请我们吃了北京烤鸭 (She Treated Us to Peking Duck)
# ==========================================
unit1 = {
    "id": "hsk-2-hsk3-unit-1",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 1,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第1课：她请我们吃了北京烤鸭",
        "en": "Lesson 1: She treated us to Peking Duck",
        "ar": "الدرس 1: لقد عزمتنا على بط بكين المشوي"
    },
    "dialogue": [
        # Text 1
        {
            "id": "1-1-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "请问，您是王一飞老师的姐姐吗？",
            "pinyin": "Qǐngwèn, nín shì Wáng Yīfēi lǎoshī de jiějie ma?",
            "translation": {
                "en": "Excuse me, are you Ms. Wang Yifei's older sister?",
                "ar": "لو سمحتِ، هل حضرتكِ الأخت الكبرى للأستاذة وانغ ييفي؟"
            },
            "audio": None
        },
        {
            "id": "1-1-2",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "是的，你们就是她的学生吧？",
            "pinyin": "Shì de, nǐmen jiù shì tā de xuésheng ba?",
            "translation": {
                "en": "Yes, I am. You two must be her students, right?",
                "ar": "نعم، أنتما طالباها بلا شك، أليس كذلك؟"
            },
            "audio": None
        },
        {
            "id": "1-1-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "对。我是白家月，她是安妮。",
            "pinyin": "Duì. Wǒ shì Bái Jiāyuè, tā shì Ānnī.",
            "translation": {
                "en": "Exactly. I'm Bai Jiayue, and this is Annie.",
                "ar": "صحيح. أنا باي جيايوي، وهذه آني."
            },
            "audio": None
        },
        {
            "id": "1-1-4",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你们好，我叫王一雪。一飞给我打电话了，让我来接你们。",
            "pinyin": "Nǐmen hǎo, wǒ jiào Wáng Yīxuě. Yīfēi gěi wǒ dǎ diànhuà le, ràng wǒ lái jiē nǐmen.",
            "translation": {
                "en": "Hello! I'm Wang Yixue. Yifei called me and asked me to pick you up.",
                "ar": "مرحباً بكما! اسمي وانغ ييشيويه. اتصلت بي ييفي وطلبت مني القدوم لاستقبالكما."
            },
            "audio": None
        },
        {
            "id": "1-1-5",
            "role": "白家月和安妮 (Bai Jiayue & Annie)",
            "hanzi": "谢谢您。",
            "pinyin": "Xièxie nín.",
            "translation": {
                "en": "Thank you very much.",
                "ar": "شكراً جزيلاً لحضرتكِ."
            },
            "audio": None
        },
        {
            "id": "1-1-6",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "不客气。",
            "pinyin": "Bú kèqi.",
            "translation": {
                "en": "You're welcome.",
                "ar": "على الرحب والسعة."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "1-2-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你们是第一次来北京吗？",
            "pinyin": "Nǐmen shì dì-yī cì lái Běijīng ma?",
            "translation": {
                "en": "Is this your first time visiting Beijing?",
                "ar": "هل هذه هي المرة الأولى التي تأتيان فيها إلى بكين؟"
            },
            "audio": None
        },
        {
            "id": "1-2-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "是的，我们都是第一次来。",
            "pinyin": "Shì de, wǒmen dōu shì dì-yī cì lái.",
            "translation": {
                "en": "Yes, it is the first time for both of us.",
                "ar": "نعم، كلتانا نزورها لأول مرة."
            },
            "audio": None
        },
        {
            "id": "1-2-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你们是来学中文的吗？",
            "pinyin": "Nǐmen shì lái xué Zhōngwén de ma?",
            "translation": {
                "en": "Did you come here to study Chinese?",
                "ar": "هل جئتما لتعلم اللغة الصينية؟"
            },
            "audio": None
        },
        {
            "id": "1-2-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "不是，我们是来旅游的。",
            "pinyin": "Bú shì, wǒmen shì lái lǚyóu de.",
            "translation": {
                "en": "No, we came for tourism and travel.",
                "ar": "كلا، لقد جئنا من أجل السياحة والسفر."
            },
            "audio": None
        },
        {
            "id": "1-2-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "我这几天都不忙，你们有事就找我。",
            "pinyin": "Wǒ zhè jǐ tiān dōu bù máng, nǐmen yǒu shì jiù zhǎo wǒ.",
            "translation": {
                "en": "I'm not busy these days; whenever you need anything, just reach out to me.",
                "ar": "أنا لست مشغولة هذه الأيام، إذا احتجتما لأي شيء فتواصلا معي فوراً."
            },
            "audio": None
        },
        {
            "id": "1-2-6",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "好的，谢谢您。",
            "pinyin": "Hǎo de, xièxie nín.",
            "translation": {
                "en": "Great, thank you so much.",
                "ar": "حسناً، شكراً جزيلاً لحضرتكِ."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "1-3-1",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "喂，家月，你明天有时间吗？我想请你帮个忙。",
            "pinyin": "Wèi, Jiāyuè, nǐ míngtiān yǒu shíjiān ma? Wǒ xiǎng qǐng nǐ bāng ge máng.",
            "translation": {
                "en": "Hello, Jiayue! Do you have time tomorrow? I'd like to ask you for a favor.",
                "ar": "مرحباً جيايوي! هل لديكِ متسع من الوقت غداً؟ أود أن أطلب منكِ معروفاً."
            },
            "audio": None
        },
        {
            "id": "1-3-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "不好意思，天中，我已经到北京了。",
            "pinyin": "Bù hǎoyìsi, Tiānzhōng, wǒ yǐjīng dào Běijīng le.",
            "translation": {
                "en": "I'm sorry, Tianzhong, I have already arrived in Beijing.",
                "ar": "أعتذر منك يا تيانتشونغ، لقد وصلت إلى بكين بالفعل."
            },
            "audio": None
        },
        {
            "id": "1-3-3",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "你是什么时候到的？",
            "pinyin": "Nǐ shì shénme shíhou dào de?",
            "translation": {
                "en": "When did you arrive?",
                "ar": "متى وصلتِ؟"
            },
            "audio": None
        },
        {
            "id": "1-3-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我是今天早上到的。你有事可以叫李文帮忙，他还在学校呢。",
            "pinyin": "Wǒ shì jīntiān zǎoshang dào de. Nǐ yǒu shì kěyǐ jiào Lǐ Wén bāngmáng, tā hái zài xuéxiào ne.",
            "translation": {
                "en": "I arrived this morning. If you need anything, you can ask Li Wen for help—he's still at school.",
                "ar": "وصلت صباح اليوم. إذا كان لديك أمر ما فيمكنك طلب المساعدة من لي ون، فهو لا يزال في الجامعة."
            },
            "audio": None
        },
        {
            "id": "1-3-5",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "好的，那我给他打个电话。",
            "pinyin": "Hǎo de, nà wǒ gěi tā dǎ ge diànhuà.",
            "translation": {
                "en": "Alright, then I'll give him a call.",
                "ar": "حسناً، سأتصل به هاتفياً إذاً."
            },
            "audio": None
        },
        {
            "id": "1-3-6",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "好的，再见！",
            "pinyin": "Hǎo de, zàijiàn!",
            "translation": {
                "en": "Alright, goodbye!",
                "ar": "حسناً، مع السلامة!"
            },
            "audio": None
        },
        # Text 4
        {
            "id": "1-4-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "王老师，我们已经到北京了，是您姐姐来接的我们。她请我们吃了北京烤鸭，还给我们介绍了很多东西。我们的中文不太好，有时不太懂她的意思。",
            "pinyin": "Wáng lǎoshī, wǒmen yǐjīng dào Běijīng le, shì nín jiějie lái jiē de wǒmen. Tā qǐng wǒmen chīle Běijīng kǎoyā, hái gěi wǒmen jièshàole hěn duō dōngxi. Wǒmen de Zhōngwén bú tài hǎo, yǒushí bú tài dǒng tā de yìsi.",
            "translation": {
                "en": "Teacher Wang, we have already arrived in Beijing. Your older sister came to pick us up. She treated us to Peking Duck and introduced so many things to us. Our Chinese isn't very proficient yet, so sometimes we don't quite catch her meaning.",
                "ar": "أستاذة وانغ، لقد وصلنا إلى بكين، وقد جاءت أختكِ الكبرى لاستقبالنا. لقد عزمتنا على بط بكين المشوي وشرحت لنا الكثير من الأمور. لغتنا الصينية ليست قوية بعد، لذا أحياناً لا نفهم قصدها تماماً."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Modal Particle 吧 (2) for Speculation (揣测/估计)",
            "explanation": "‘吧’ placed at the end of an interrogative statement expresses tentative estimation or polite confirmation: 你们就是她的学生吧？ (You two must be her students, right?).",
            "arExplanation": "تُستخدم الأداة النبرية '吧' في نهاية الجملة الاستفهامية للتعبير عن التخمين أو التقدير أو التأكيد المؤدب: 'أنتما طالباها بلا شك، أليس كذلك؟'."
        },
        {
            "point": "The 是……的 Construction for Emphasizing Details",
            "explanation": "Used to emphasize the time, location, manner, or agent of a completed past action: 我们是来旅游的 (We came for tourism - emphasizing purpose); 我是今天早上到的 (I arrived this morning - emphasizing time).",
            "arExplanation": "تُستخدم بنية '是……的' للتوكيد على زمان أو مكان أو طريقة أو غرض حدوث فعل وقع في الماضي: '我是今天早上到的' (وصلتُ صباح اليوم)."
        },
        {
            "point": "Pivotal Sentences (兼语句) with 请 / 让 / 叫",
            "explanation": "The object of the first causative verb functions simultaneously as the subject of the second verb: 让我来接你们 (asked me to pick you up); 她请我们吃了北京烤鸭 (she treated us to Peking Duck).",
            "arExplanation": "الجمل المحورية (兼语句) مع أفعال الطلب والأمر (请/让/叫) يكون فيها مفعول الفعل الأول هو فاعل الفعل الثاني في الوقت نفسه: '让 我 来接你们' (طلبت مني أن أستقبلكم)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Peking Duck (北京烤鸭) Dining Etiquette",
            "detail": "Peking Roast Duck is Beijing's most celebrated signature dish, famous for its crisp skin and succulent meat. It is traditionally sliced thinly in front of diners and eaten rolled in thin pancakes (春饼) with sweet bean sauce (甜面酱), scallion strips, and cucumber slices.",
            "arDetail": "يُعد بط بكين المشوي (北京烤鸭) أشهر أطباق بكين التقليدية، ويتميز بجلده المقرمش ولحمه الطري. يُقطع عادةً إلى شرائح رقيقة أمام الضيوف، ويُؤكل بلفه داخل رقائق عجين رقيقة مع صلصة الفاصوليا الحلوة وشرائح البصل الأخضر والخيار."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q1-1",
            "question": "Who came to pick up Bai Jiayue and Annie at the airport?",
            "arQuestion": "من جاء لاستقبال باي جيايوي وآني في المطار؟",
            "options": [
                "王一雪 (Teacher Wang's sister)",
                "王一飞 (Teacher Wang)",
                "陈天中 (Chen Tianzhong)",
                "李文 (Li Wen)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q1-2",
            "question": "Why did Bai Jiayue and Annie come to Beijing?",
            "arQuestion": "لماذا جاءت باي جيايوي وآني إلى بكين؟",
            "options": [
                "来旅游 (For sightseeing and travel)",
                "来学中文 (To study Chinese)",
                "来找工作 (To find a job)",
                "来看医生 (To see a doctor)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q1-3",
            "question": "What famous specialty did Wang Yixue treat them to?",
            "arQuestion": "ما الوجبة الشهيرة التي عزمتهم عليها وانغ ييشيويه؟",
            "options": [
                "北京烤鸭 (Peking Duck)",
                "饺子 (Dumplings)",
                "包子 (Steamed buns)",
                "面条 (Noodles)"
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

# ==========================================
# UNIT 2: 还是打车去北大吧 (Let's Take a Taxi to Peking University Instead)
# ==========================================
unit2 = {
    "id": "hsk-2-hsk3-unit-2",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 2,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第2课：还是打车去北大吧",
        "en": "Lesson 2: Let's take a taxi to Peking University instead",
        "ar": "الدرس 2: من الأفضل أن نأخذ سيارة أجرة إلى جامعة بكين"
    },
    "dialogue": [
        # Text 1
        {
            "id": "2-1-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "请问，这儿有到北京大学的公交车吗？",
            "pinyin": "Qǐngwèn, zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?",
            "translation": {
                "en": "Excuse me, is there a bus from here to Peking University?",
                "ar": "لو سمحت، هل توجد هنا حافلة نقل عام متجهة إلى جامعة بكين؟"
            },
            "audio": None
        },
        {
            "id": "2-1-2",
            "role": "服务员 (Hotel Staff)",
            "hanzi": "有，但车站有点儿远。",
            "pinyin": "Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.",
            "translation": {
                "en": "Yes, but the bus stop is a bit far.",
                "ar": "نعم توجد، ولكن محطة الحافلات بعيدة بعض الشيء."
            },
            "audio": None
        },
        {
            "id": "2-1-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "这儿好打车吗？",
            "pinyin": "Zhèr hǎo dǎchē ma?",
            "translation": {
                "en": "Is it easy to catch a taxi here?",
                "ar": "هل من السهل ركوب سيارة أجرة (تاكسي) من هنا؟"
            },
            "audio": None
        },
        {
            "id": "2-1-4",
            "role": "服务员 (Hotel Staff)",
            "hanzi": "好打车。",
            "pinyin": "Hǎo dǎchē.",
            "translation": {
                "en": "Yes, very easy to hail a cab.",
                "ar": "نعم، ركوب سيارة الأجرة سهل جداً هنا."
            },
            "audio": None
        },
        {
            "id": "2-1-5",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "谢谢。安妮，我们还是打车去吧。",
            "pinyin": "Xièxie. Ānnī, wǒmen háishi dǎchē qù ba.",
            "translation": {
                "en": "Thank you. Annie, let's take a taxi instead.",
                "ar": "شكراً لك. آني، من الأفضل أن نذهب بسيارة الأجرة."
            },
            "audio": None
        },
        {
            "id": "2-1-6",
            "role": "安妮 (Annie)",
            "hanzi": "好，没问题。",
            "pinyin": "Hǎo, méi wèntí.",
            "translation": {
                "en": "Sounds good, no problem.",
                "ar": "حسناً، لا مشكلة إطلاقاً."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "2-2-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "学校里人真多啊！",
            "pinyin": "Xuéxiào lǐ rén zhēn duō a!",
            "translation": {
                "en": "There are so many people on campus!",
                "ar": "الناس كثر جداً داخل الحرم الجامعي!"
            },
            "audio": None
        },
        {
            "id": "2-2-2",
            "role": "安妮 (Annie)",
            "hanzi": "是啊，北京大学有四万多名学生呢！",
            "pinyin": "Shì a, Běijīng Dàxué yǒu sìwàn duō míng xuésheng ne!",
            "translation": {
                "en": "Yes! Peking University has over 40,000 students!",
                "ar": "أجل، تضم جامعة بكين أكثر من 40 ألف طالب!"
            },
            "audio": None
        },
        {
            "id": "2-2-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "你是怎么知道的？",
            "pinyin": "Nǐ shì zěnme zhīdào de?",
            "translation": {
                "en": "How did you find that out?",
                "ar": "كيف عرفتِ ذلك؟"
            },
            "audio": None
        },
        {
            "id": "2-2-4",
            "role": "安妮 (Annie)",
            "hanzi": "是网上说的，网上还说北京大学有三千多名外国学生。",
            "pinyin": "Shì wǎngshang shuō de, wǎngshang hái shuō Běijīng Dàxué yǒu sānqiān duō míng wàiguó xuésheng.",
            "translation": {
                "en": "I read it online. It also says Peking University has more than 3,000 international students.",
                "ar": "قرأته على الإنترنت، ويقول الموقع أيضاً إن جامعة بكين تضم أكثر من 3000 طالب دولي."
            },
            "audio": None
        },
        {
            "id": "2-2-5",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我也想来这儿学习。",
            "pinyin": "Wǒ yě xiǎng lái zhèr xuéxí.",
            "translation": {
                "en": "I'd love to come and study here too.",
                "ar": "أود أنا أيضاً أن آتي للدراسة هنا."
            },
            "audio": None
        },
        {
            "id": "2-2-6",
            "role": "安妮 (Annie)",
            "hanzi": "那边就有间教室，我们去客（看）一下。",
            "pinyin": "Nàbian jiù yǒu jiān jiàoshì, wǒmen qù kàn yíxià.",
            "translation": {
                "en": "There's a classroom right over there, let's go take a look.",
                "ar": "هناك قاعة دراسية هناك، فلنذهب لنلقي نظرة."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "2-3-1",
            "role": "安妮 (Annie)",
            "hanzi": "家月，你看，学校里有家电影院！",
            "pinyin": "Jiāyuè, nǐ kàn, xuéxiào lǐ yǒu jiā diànyǐngyuàn!",
            "translation": {
                "en": "Jiayue, look! There is a cinema on campus!",
                "ar": "جيايوي، انظري! توجد دار سينما داخل الحرم الجامعي!"
            },
            "audio": None
        },
        {
            "id": "2-3-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "是啊，电影院还不小。",
            "pinyin": "Shì a, diànyǐngyuàn hái bù xiǎo.",
            "translation": {
                "en": "Yeah, and it's pretty big.",
                "ar": "أجل، والسينما ليست صغيرة على الإطلاق."
            },
            "audio": None
        },
        {
            "id": "2-3-3",
            "role": "安妮 (Annie)",
            "hanzi": "他们卖的电影票也很便宜。",
            "pinyin": "Tāmen mài de diànyǐngpiào yě hěn piányi.",
            "translation": {
                "en": "The movie tickets they sell are very cheap too.",
                "ar": "تذاكر السينما التي يبيعونها رخيصة جداً أيضاً."
            },
            "audio": None
        },
        {
            "id": "2-3-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "天哪！有的还不到二十块钱。",
            "pinyin": "Tiān na! Yǒude hái bú dào èrshí kuài qián.",
            "translation": {
                "en": "Goodness! Some are even less than twenty yuan.",
                "ar": "يا إلهي! بعضها لا يصل حتى إلى 20 يواناً."
            },
            "audio": None
        },
        {
            "id": "2-3-5",
            "role": "安妮 (Annie)",
            "hanzi": "那你想不想去看个电影？",
            "pinyin": "Nà nǐ xiǎng bu xiǎng qù kàn ge diànyǐng?",
            "translation": {
                "en": "So do you want to go watch a movie?",
                "ar": "إذاً هل تودين الذهاب لمشاهدة فيلم؟"
            },
            "audio": None
        },
        {
            "id": "2-3-6",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "还是别看电影了，北京大学就很好看！",
            "pinyin": "Háishi bié kàn diànyǐng le, Běijīng Dàxué jiù hěn hǎokàn!",
            "translation": {
                "en": "Let's skip the movie for now; Peking University itself is already so fascinating to see!",
                "ar": "من الأفضل ألا نشاهد فيلماً الآن، فجامعة بكين نفسها تستحق المشاهدة وجميلة جداً!"
            },
            "audio": None
        },
        # Text 4
        {
            "id": "2-4-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "北京大学很大，有四万多名学生。学校很漂亮，里边还有家电影院，电影票也不贵，我们有时间还想再过来看看电影。",
            "pinyin": "Běijīng Dàxué hěn dà, yǒu sìwàn duō míng xuésheng. Xuéxiào hěn piàoliang, lǐbian hái yǒu jiā diànyǐngyuàn, diànyǐngpiào yě bú guì, wǒmen yǒu shíjiān hái xiǎng zài guòlái kàn ge diànyǐng.",
            "translation": {
                "en": "Peking University is huge, with more than 40,000 students. The campus is beautiful and even has a cinema inside with inexpensive tickets. When we have free time, we'd love to come back and watch a movie.",
                "ar": "جامعة بكين واسعة جداً وتضم أكثر من أربعين ألف طالب. الحرم الجامعي جميل للغاية وفيه دار سينما وتذاكرها غير مكلفة، ونود العودة إلى هنا لمشاهدة فيلم حين يتاح لنا وقت فراغ."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Fixed Pattern 还是……吧 (háishi ... ba)",
            "explanation": "Expresses a preferential choice or suggestion after comparison ('had better / it would be better to'): 我们还是打车去吧 (Let's take a taxi instead); 还是别看电影了 (We'd better not watch a movie now).",
            "arExplanation": "تُستخدم الصيغة '还是……吧' للتعبير عن تفضيل خيار على آخر بعد المقارنة وتقديم اقتراح مستحسن: 'من الأفضل أن نأخذ سيارة أجرة'."
        },
        {
            "point": "Expressing Approximate Numbers with 多 (duō)",
            "explanation": "‘多’ placed after a round number (like 10, 100, 10,000) denotes 'more than': 四万多名学生 (over 40,000 students), 三千多名外国学生 (over 3,000 international students). When after a measure word, it indicates fractional excess: 二十多块钱.",
            "arExplanation": "توضع '多' بعد الأعداد الكاملة أو بعد كلمات القياس للإشارة إلى زيادة تقريبية: '四万多名学生' (أكثر من 40,000 طالب)."
        },
        {
            "point": "Verbs and Subject-Predicate Phrases as Attributives",
            "explanation": "Verbal phrases or clause structures can precede ‘的’ to modify a noun: 他们卖的电影票 (the movie tickets that they sell), 网上说的 (what is stated online).",
            "arExplanation": "يمكن للعبارات الفعلية أو الجمل أن تأتي قبل '的' لتعمل كصفة نعتية توضح الاسم الموصوف: '他们卖的电影票' (تذاكر السينما التي يبيعونها)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Peking University (北京大学 / 北大)",
            "detail": "Founded in 1898 as the Imperial University of Peking, Peking University (colloquially 'Beida') is China's oldest national university and a premier institution known for academic excellence, historic Weiming Lake (未名湖), Boya Pagoda, and its vibrant campus life.",
            "arDetail": "تأسست جامعة بكين (المعروفة اختصاراً بـ 'بيدا' 北大) عام 1898، وتعد أقدم جامعة وطنية في الصين وإحدى أرقى المؤسسات الأكاديمية عالمياً، وتشتهر ببحيرة وي مينغ التاريخية وبرج بويا ومعالمها الثقافية العريقة."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q2-1",
            "question": "How did Bai Jiayue and Annie decide to go to Peking University?",
            "arQuestion": "كيف قررت باي جيايوي وآني الذهاب إلى جامعة بكين؟",
            "options": [
                "打车 (By taxi)",
                "坐公交车 (By bus)",
                "走路 (On foot)",
                "坐地铁 (By subway)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q2-2",
            "question": "Approximately how many students are there at Peking University?",
            "arQuestion": "كم يبلغ عدد الطلاب تقريباً في جامعة بكين؟",
            "options": [
                "四万多名 (Over 40,000)",
                "两万多名 (Over 20,000)",
                "一万多名 (Over 10,000)",
                "三千多名 (Over 3,000)"
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

# ==========================================
# UNIT 3: 我想去西安旅游 (I Want to Visit Xi'an)
# ==========================================
unit3 = {
    "id": "hsk-2-hsk3-unit-3",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 3,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第3课：我想去西安旅游",
        "en": "Lesson 3: I want to visit Xi'an",
        "ar": "الدرس 3: أود السفر لزيارة شيآن"
    },
    "dialogue": [
        # Text 1
        {
            "id": "3-1-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "今天回来这么晚啊！",
            "pinyin": "Jīntiān huílái zhème wǎn a!",
            "translation": {
                "en": "You're back so late today!",
                "ar": "لقد عدت متأخراً جداً اليوم!"
            },
            "audio": None
        },
        {
            "id": "3-1-2",
            "role": "刘明 (Liu Ming)",
            "hanzi": "工作太多了，下班的时候没做完。",
            "pinyin": "Gōngzuò tài duō le, xiàbān de shíhou méi zuòwán.",
            "translation": {
                "en": "There was too much work; I hadn't finished it when the workday ended.",
                "ar": "كان هناك الكثير من العمل، ولم أنتهِ منه عند وقت انتهاء الدوام."
            },
            "audio": None
        },
        {
            "id": "3-1-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "菜都做好了，过来吃饭吧。",
            "pinyin": "Cài dōu zuòhǎo le, guòlái chīfàn ba.",
            "translation": {
                "en": "The food is all ready; come and have dinner.",
                "ar": "لقد أعددت الطعام كله، تعال وتناول العشاء."
            },
            "audio": None
        },
        {
            "id": "3-1-4",
            "role": "刘明 (Liu Ming)",
            "hanzi": "我想休息一下，喝杯水。",
            "pinyin": "Wǒ xiǎng xiūxi yíxià, hē bēi shuǐ.",
            "translation": {
                "en": "I'd like to rest for a moment and have a glass of water.",
                "ar": "أود أن أستريح قليلاً وأشرب كوباً من الماء."
            },
            "audio": None
        },
        {
            "id": "3-1-5",
            "role": "王一雪 (Wang Yixue)",
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
            "id": "3-2-1",
            "role": "刘明 (Liu Ming)",
            "hanzi": "我们找个时间去旅游，怎么样？",
            "pinyin": "Wǒmen zhǎo ge shíjiān qù lǚyóu, zěnmeyàng?",
            "translation": {
                "en": "How about we find some time to go on a trip?",
                "ar": "ما رأيك أن نجد وقتاً مناسباً للذهاب في رحلة سياحية؟"
            },
            "audio": None
        },
        {
            "id": "3-2-2",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "好啊，我也很想一起出去玩。",
            "pinyin": "Hǎo a, wǒ yě hěn xiǎng yìqǐ chūqù wán.",
            "translation": {
                "en": "Wonderful! I really want to go out and travel together too.",
                "ar": "رائع! أنا أيضاً أرغب بشدة في الخروج والتنزه معاً."
            },
            "audio": None
        },
        {
            "id": "3-2-3",
            "role": "刘明 (Liu Ming)",
            "hanzi": "你想去哪儿？",
            "pinyin": "Nǐ xiǎng qù nǎr?",
            "translation": {
                "en": "Where would you like to go?",
                "ar": "إلى أين ترغبين في الذهاب؟"
            },
            "audio": None
        },
        {
            "id": "3-2-4",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "我还没想好呢。",
            "pinyin": "Wǒ hái méi xiǎnghǎo ne.",
            "translation": {
                "en": "I haven't decided yet.",
                "ar": "لم أحسم قراري بعد."
            },
            "audio": None
        },
        {
            "id": "3-2-5",
            "role": "刘明 (Liu Ming)",
            "hanzi": "那你再想一想，你想好了，我来买票。",
            "pinyin": "Nà nǐ zài xiǎng yi xiǎng, nǐ xiǎnghǎo le, wǒ lái mǎi piào.",
            "translation": {
                "en": "Then think it over a bit more. Once you decide, I'll buy the tickets.",
                "ar": "إذاً فكري في الأمر أكثر، وحين تقررين سأتولى شراء التذاكر."
            },
            "audio": None
        },
        # Text 3
        {
            "id": "3-3-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "吃个苹果吧，我都洗好了。",
            "pinyin": "Chī ge píngguǒ ba, wǒ dōu xǐhǎo le.",
            "translation": {
                "en": "Have an apple; I've already washed them.",
                "ar": "تناول تفاحة، لقد غسلتها كلها."
            },
            "audio": None
        },
        {
            "id": "3-3-2",
            "role": "刘明 (Liu Ming)",
            "hanzi": "好的。",
            "pinyin": "Hǎo de.",
            "translation": {
                "en": "Thanks.",
                "ar": "شكراً."
            },
            "audio": None
        },
        {
            "id": "3-3-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "就在桌子上，你自己拿。",
            "pinyin": "Jiù zài zhuōzi shang, nǐ zìjǐ ná.",
            "translation": {
                "en": "They're on the table, just help yourself.",
                "ar": "إنها على الطاولة، خذ بنفسك."
            },
            "audio": None
        },
        {
            "id": "3-3-4",
            "role": "刘明 (Liu Ming)",
            "hanzi": "我去洗洗手。对了，我们去西安旅游，怎么样？",
            "pinyin": "Wǒ qù xǐxi shǒu. Duìle, wǒmen qù Xī'ān lǚyóu, zěnmeyàng?",
            "translation": {
                "en": "I'll go wash my hands. By the way, what do you think about traveling to Xi'an?",
                "ar": "سأغسل يدي أولاً. بالمناسبة، ما رأيك لو سافرنا إلى شيآن؟"
            },
            "audio": None
        },
        {
            "id": "3-3-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "为什么想去西安？",
            "pinyin": "Wèi shénme xiǎng qù Xī'ān?",
            "translation": {
                "en": "Why do you want to go to Xi'an?",
                "ar": "لماذا ترغب في الذهاب إلى شيآن؟"
            },
            "audio": None
        },
        {
            "id": "3-3-6",
            "role": "刘明 (Liu Ming)",
            "hanzi": "我看了看网上的介绍，这个时候去西安很不错！",
            "pinyin": "Wǒ kànle kan wǎngshang de jièshào, zhège shíhou qù Xī'ān hěn búcuò!",
            "translation": {
                "en": "I looked over the travel guides online; visiting Xi'an around this time is fantastic!",
                "ar": "ألقيت نظرة على التعريفات السياحية على الإنترنت، وزيارة شيآن في هذا التوقيت ممتازة جداً!"
            },
            "audio": None
        },
        # Text 4
        {
            "id": "3-4-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "早上，刘明开车送孩子去学校，送完孩子回家后，医院就来电话了，让他回去上班。我觉得他这个月每天都很累，真想让他休息休息。",
            "pinyin": "Zǎoshang, Liú Míng kāichē sòng háizi qù xuéxiào, sòngwán háizi huíjiā hòu, yīyuàn jiù lái diànhuà le, ràng tā huíqù shàngbān. Wǒ juéde tā zhège yuè měitiān dōu hěn lèi, zhēn xiǎng ràng tā xiūxi xiūxi.",
            "translation": {
                "en": "This morning, Liu Ming drove the child to school. Right after he returned home, the hospital phoned and asked him to return to duty. I feel he has been exhausted every single day this month; I really wish he could get some rest.",
                "ar": "في الصباح، قاد ليو مينغ السيارة لتوصيل الطفل إلى المدرسة، وفور عودته إلى البيت اتصل به المستشفى وطلبوا منه العودة إلى العمل. أشعر أنه مرهق جداً كل يوم طوال هذا الشهر، وأتمنى حقاً لو ينال قسطاً كافياً من الراحة."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Complement of Result (结果补语)",
            "explanation": "Verbs or adjectives placed directly after a verb denote the outcome or result of an action: 没做完 (didn't finish), 菜都做好了 (food is finished and ready), 我都洗好了 (I've washed them all), 送完孩子 (after finishing sending the child).",
            "arExplanation": "تُضاف مكملات النتيجة بعد الفعل مباشرة لبيان اكتمال الفعل أو النتيجة المترتبة عليه: '没做完' (لم ينتهِ من العمل)، '都做好了' (أُنجز وصار جاهزاً)."
        },
        {
            "point": "Verb Reduplication for Ongoing & Past Actions",
            "explanation": "Monosyllabic verbs can be reduplicated as A(一)A (想一想, 洗洗手) for casual brief action. For past actions, monosyllabic becomes A了A: 看了看 (took a brief look); disyllabic verbs use AB了一下: 休息了一下 (rested a bit); separable words use A了AB: 帮了帮忙.",
            "arExplanation": "تكرار الأفعال (动词重叠) يعبر عن قصر مدة الفعل وخفته: '想一想' (فكّر قليلاً)، '看了看' (ألقى نظرة سريعة)، '休息了一下' (استراح برهة)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Xi'an (西安) - Ancient Capital & Cultural Hub",
            "detail": "Xi'an, the eastern starting point of the ancient Silk Road, was the capital of 13 Chinese dynasties including the Zhou, Qin, Han, and Tang. World-famous attractions include the Terracotta Warriors (兵马俑), Big Wild Goose Pagoda, and the ancient city walls.",
            "arDetail": "تعتبر مدينة شيآن نقطة انطلاق طريق الحرير التاريخي وكانت عاصمة لـ 13 سلالة حاكمة في الصين (بما فيها تشين وهان وتانغ). وتشتهر عالمياً بجيش محاربي التيراكوتا وسور المدينة الأثري وتراثها الثقافي الغني."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q3-1",
            "question": "Why did Liu Ming come home late from work?",
            "arQuestion": "لماذا عاد ليو مينغ إلى المنزل متأخراً بعد العمل؟",
            "options": [
                "工作没做完 (Work was not finished)",
                "去外面吃饭了 (Ate out with friends)",
                "迷路了 (Got lost)",
                "去买票了 (Went to buy tickets)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q3-2",
            "question": "Where does Liu Ming propose going on vacation?",
            "arQuestion": "إلى أين اقترح ليو مينغ الذهاب في رحلة سياحية؟",
            "options": [
                "西安 (Xi'an)",
                "上海 (Shanghai)",
                "广州 (Guangzhou)",
                "成都 (Chengdu)"
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

# ==========================================
# UNIT 4: 你穿红色的很好看 (You Look Pretty Good in Red)
# ==========================================
unit4 = {
    "id": "hsk-2-hsk3-unit-4",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 4,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第4课：你穿红色的很好看",
        "en": "Lesson 4: You look pretty good in red",
        "ar": "الدرس 4: يبدو اللون الأحمر عليكِ جميلاً جداً"
    },
    "dialogue": [
        # Text 1
        {
            "id": "4-1-1",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "妈妈，我们来过这家商场吗？",
            "pinyin": "Māma, wǒmen láiguo zhè jiā shāngchǎng ma?",
            "translation": {
                "en": "Mom, have we been to this shopping mall before?",
                "ar": "أمي، هل جئنا إلى هذا المجمع التجاري من قبل؟"
            },
            "audio": None
        },
        {
            "id": "4-1-2",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "没来过，这是新开的。",
            "pinyin": "Méi láiguo, zhè shì xīn kāi de.",
            "translation": {
                "en": "No, we haven't. It just opened recently.",
                "ar": "لم نأتِ من قبل، لقد افتُتح حديثاً."
            },
            "audio": None
        },
        {
            "id": "4-1-3",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "我们进去看看吧。",
            "pinyin": "Wǒmen jìnqù kànkan ba.",
            "translation": {
                "en": "Let's go inside and have a look.",
                "ar": "فلندخل ونلقِ نظرة."
            },
            "audio": None
        },
        {
            "id": "4-1-4",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "好啊！你想买点儿什么？",
            "pinyin": "Hǎo a! Nǐ xiǎng mǎi diǎnr shénme?",
            "translation": {
                "en": "Sure! What would you like to buy?",
                "ar": "حسناً! ماذا ترغبين في شرائه؟"
            },
            "audio": None
        },
        {
            "id": "4-1-5",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "我想买条裤子。",
            "pinyin": "Wǒ xiǎng mǎi tiáo kùzi.",
            "translation": {
                "en": "I'd like to buy a pair of pants.",
                "ar": "أريد شراء بنطال."
            },
            "audio": None
        },
        {
            "id": "4-1-6",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "没问题。",
            "pinyin": "Méi wèntí.",
            "translation": {
                "en": "No problem.",
                "ar": "لا مانع إطلاقاً."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "4-2-1",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "妈妈，我想买这条白色的裤子。",
            "pinyin": "Māma, wǒ xiǎng mǎi zhè tiáo báisè de kùzi.",
            "translation": {
                "en": "Mom, I want to buy this pair of white pants.",
                "ar": "أمي، أريد شراء هذا البنطال الأبيض."
            },
            "audio": None
        },
        {
            "id": "4-2-2",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你有很多白色的衣服，为什么还买白色的？",
            "pinyin": "Nǐ yǒu hěn duō báisè de yīfu, wèi shénme hái mǎi báisè de?",
            "translation": {
                "en": "You have plenty of white clothes; why buy white again?",
                "ar": "لديكِ الكثير من الملابس البيضاء، فلماذا تشترين باللون الأبيض مجدداً؟"
            },
            "audio": None
        },
        {
            "id": "4-2-3",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "因为我喜欢白色啊！",
            "pinyin": "Yīnwèi wǒ xǐhuan báisè a!",
            "translation": {
                "en": "Because I love white!",
                "ar": "لأنني أحب اللون الأبيض!"
            },
            "audio": None
        },
        {
            "id": "4-2-4",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "我觉得这条白色的不太好看，你试试那条红色的吧。",
            "pinyin": "Wǒ juéde zhè tiáo báisè de bú tài hǎokàn, nǐ shìshi nà tiáo hóngsè de ba.",
            "translation": {
                "en": "I think this white pair doesn't look that great; why don't you try on that red pair?",
                "ar": "أرى أن هذا البنطال الأبيض ليس جميلاً جداً، جربي ذلك البنطال الأحمر."
            },
            "audio": None
        },
        {
            "id": "4-2-5",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "我没穿过红色的，红色的好看吗？",
            "pinyin": "Wǒ méi chuānguo hóngsè de, hóngsè de hǎokàn ma?",
            "translation": {
                "en": "I've never worn red before; does red look good?",
                "ar": "لم أرتدِ اللون الأحمر من قبل، هل اللون الأحمر جميل؟"
            },
            "audio": None
        },
        {
            "id": "4-2-6",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "就是因为没穿过，所以要试试嘛！",
            "pinyin": "Jiù shì yīnwèi méi chuānguo, suǒyǐ yào shìshi ma!",
            "translation": {
                "en": "Precisely because you haven't, that's why you should try it!",
                "ar": "لهذا السبب تحديداً، لأنك لم تجربيه من قبل فعليكِ تجربته الآن!"
            },
            "audio": None
        },
        # Text 3
        {
            "id": "4-3-1",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "妈妈，我想买个新书包。",
            "pinyin": "Māma, wǒ xiǎng mǎi ge xīn shūbāo.",
            "translation": {
                "en": "Mom, I want to buy a new schoolbag.",
                "ar": "أمي، أريد أن أشتري حقيبة مدرسية جديدة."
            },
            "audio": None
        },
        {
            "id": "4-3-2",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "好，那边卖书包，我们过去看看吧。",
            "pinyin": "Hǎo, nàbian mài shūbāo, wǒmen guòqu kànkan ba.",
            "translation": {
                "en": "Alright, they sell schoolbags over there; let's head over and look.",
                "ar": "حسناً، يبيعون الحقائب هناك، فلنذهب لنرى."
            },
            "audio": None
        },
        {
            "id": "4-3-3",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "这么多漂亮的书包！",
            "pinyin": "Zhème duō piàoliang de shūbāo!",
            "translation": {
                "en": "So many beautiful schoolbags!",
                "ar": "ما أجمل كل هذه الحقائب الكثيرة!"
            },
            "audio": None
        },
        {
            "id": "4-3-4",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "红色的、绿色的、黑色的，你想买哪个？",
            "pinyin": "Hóngsè de, lǜsè de, hēisè de, nǐ xiǎng mǎi nǎge?",
            "translation": {
                "en": "Red ones, green ones, black ones—which one do you want to get?",
                "ar": "حمراء، وخضراء، وسوداء—أي واحدة تريدين شراءها؟"
            },
            "audio": None
        },
        {
            "id": "4-3-5",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "绿色的吧。",
            "pinyin": "Lǜsè de ba.",
            "translation": {
                "en": "The green one, please.",
                "ar": "الحقيبة الخضراء."
            },
            "audio": None
        },
        {
            "id": "4-3-6",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "不错，我也觉得绿色的更好看。",
            "pinyin": "Búcuò, wǒ yě juéde lǜsè de gèng hǎokàn.",
            "translation": {
                "en": "Nice pick! I think the green one looks prettier too.",
                "ar": "اختيار ممتاز، وأنا أيضاً أرى أن اللون الأخضر أجمل بكثير."
            },
            "audio": None
        },
        # Text 4
        {
            "id": "4-4-1",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "我和妈妈去了一家商场。因为是新开的，所以这几天东西很便宜。商场里的衣服颜色很多。我没穿过红色的裤子，妈妈让我试了试，我觉得我穿红色的也很好看。",
            "pinyin": "Wǒ hé māma qùle yì jiā shāngchǎng. Yīnwèi shì xīn kāi de, suǒyǐ zhè jǐ tiān dōngxi hěn piányi. Shāngchǎng lǐ de yīfu yánsè hěn duō. Wǒ méi chuānguo hóngsè de kùzi, māma ràng wǒ shìle shi, wǒ juéde wǒ chuān hóngsè de yě hěn hǎokàn.",
            "translation": {
                "en": "I went to a shopping mall with Mom. Because it just opened, goods have been very affordable these days. The clothes come in lots of colors. I had never worn red pants before; Mom encouraged me to try them on, and I think I look really good in red too.",
                "ar": "ذهبت مع أمي إلى مجمع تجاري. ولأنه مفتتح حديثاً، كانت البضائع رخيصة جداً هذه الأيام. كانت ألوان الملابس متنوعة وكثيرة. لم يسبق لي أن ارتديت بنطالاً أحمر، لكن أمي شجعتني على تجربته، وشعرت أن اللون الأحمر ناسبني وبدا جميلاً جداً عليّ."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Aspect Particle 过 (guò) for Past Experience",
            "explanation": "‘过’ following a verb indicates that an action occurred as a past experience (at least once before): 我们来过这家商场吗？ (Have we visited this mall before?); 我没穿过红色的 (I've never worn red). Negative form: 没 + V + 过.",
            "arExplanation": "توضع أداة الخبرة '过' بعد الفعل للدلالة على أن الفعل قد حدث كتجربة في الماضي: '我们来过吗？' (هل زرنا هذا المكان من قبل؟). والنفي يكون باستخدام '没' قبل الفعل دون استخدام '了'."
        },
        {
            "point": "Causal Complex Sentence: 因为……，所以…… (yīnwèi ..., suǒyǐ ...)",
            "explanation": "Denotes cause and effect ('because ..., therefore ...'): 因为是新开的，所以这几天东西很便宜 (Because it's newly opened, goods are cheap these days). Either conjunction can also be used independently.",
            "arExplanation": "تُستخدم الجملة السببية المركبة '因为……，所以……' للربط بين السبب والنتيجة (لأن كذا...، لذا كذا...)."
        },
        {
            "point": "The 的-Phrase (的字短语)",
            "explanation": "Adding ‘的’ to adjectives, verbs, or pronouns turns them into nominal phrases: 红色的 (the red one), 白色的 (the white one), 绿色的 (the green one).",
            "arExplanation": "تُلحق '的' بالصفات أو الأفعال أو الضمائر لتتحول إلى عبارة اسمية تغني عن تكرار الاسم الموصوف: '红色的' (الأحمر)، '绿色的' (الأخضر)."
        }
    ],
    "culturalNotes": [
        {
            "title": "The Meaning of Red (红色) in Chinese Culture",
            "detail": "In China, red (红色 hóngsè) is the most auspicious color, symbolizing joy, prosperity, vitality, and good fortune. People wear red during the Spring Festival, weddings, and zodiac birth years (本命年) to ward off misfortune and welcome success.",
            "arDetail": "يُعد اللون الأحمر (红色) في الثقافة الصينية لون البركة والبهجة والازدهار. يرتديه الناس في عيد الربيع والأعراس والمناسبات السعيدة لجلب الحظ وطرد الطاقات السلبية."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q4-1",
            "question": "Had Liu Xiaoxue ever visited this shopping mall before?",
            "arQuestion": "هل زارت ليو شياوشيويه هذا المجمع التجاري من قبل؟",
            "options": [
                "没来过 (Never before)",
                "来过一次 (Visited once)",
                "经常来 (Visits often)",
                "昨天来过 (Visited yesterday)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q4-2",
            "question": "Which color schoolbag did Liu Xiaoxue and her mother choose?",
            "arQuestion": "أي لون حقيبة مدرسية اختارته ليو شياوشيويه وأمها؟",
            "options": [
                "绿色的 (Green)",
                "红色的 (Red)",
                "黑色的 (Black)",
                "白色的 (White)"
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

# ==========================================
# UNIT 5: 第一次去中国朋友家 (Visiting a Chinese Friend's Home for the First Time)
# ==========================================
unit5 = {
    "id": "hsk-2-hsk3-unit-5",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 5,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第5课：第一次去中国朋友家",
        "en": "Lesson 5: Visiting a Chinese friend's home for the first time",
        "ar": "الدرس 5: أول زيارة لمنزل صديق صيني"
    },
    "dialogue": [
        # Text 1
        {
            "id": "5-1-1",
            "role": "安妮 (Annie)",
            "hanzi": "家月，快下来吧，第一次去中国朋友家，别晚了。",
            "pinyin": "Jiāyuè, kuài xiàlai ba, dì-yī cì qù Zhōngguó péngyou jiā, bié wǎn le.",
            "translation": {
                "en": "Jiayue, come downstairs quickly! It's our first time visiting a Chinese friend's home, don't be late.",
                "ar": "جيايوي، انزلي بسرعة! إنها أول زيارة لنا لمنزل صديق صيني، فلا نتأخر."
            },
            "audio": None
        },
        {
            "id": "5-1-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "还有时间，你上来吧。",
            "pinyin": "Hái yǒu shíjiān, nǐ shànglai ba.",
            "translation": {
                "en": "There's still time, why don't you come up?",
                "ar": "ما زال لدينا وقت، اصعدي إليّ."
            },
            "audio": None
        },
        {
            "id": "5-1-3",
            "role": "安妮 (Annie)",
            "hanzi": "我不上去了，就在下面等你。",
            "pinyin": "Wǒ bù shàngqu le, jiù zài xiàmian děng nǐ.",
            "translation": {
                "en": "I'm not coming up; I'll just wait for you down here.",
                "ar": "لن أصعد، سأنتظركِ هنا في الأسفل."
            },
            "audio": None
        },
        {
            "id": "5-1-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "那我一会儿就下去。",
            "pinyin": "Nà wǒ yíhuìr jiù xiàqu.",
            "translation": {
                "en": "Alright, I'll be right down in a moment.",
                "ar": "حسناً، سأنزل إليكِ بعد قليل."
            },
            "audio": None
        },
        {
            "id": "5-1-5",
            "role": "安妮 (Annie)",
            "hanzi": "你快点儿吧。",
            "pinyin": "Nǐ kuài diǎnr ba.",
            "translation": {
                "en": "Hurry up please.",
                "ar": "أسرعي قليلاً من فضلك."
            },
            "audio": None
        },
        {
            "id": "5-1-6",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "没事，一雪姐说11点前到就可以。",
            "pinyin": "Méishì, Yīxuě jiě shuō shíyī diǎn qián dào jiù kěyǐ.",
            "translation": {
                "en": "Don't worry; Sister Yixue said arriving before 11 o'clock is fine.",
                "ar": "لا تقلقي، قالت الأخت ييشيويه إن الوصول قبل الساعة 11 مناسب تماماً."
            },
            "audio": None
        },
        # Text 2
        {
            "id": "5-2-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "家月、安妮，快进来！我给你们介绍一下，这是孩子们的爷爷、奶奶。",
            "pinyin": "Jiāyuè, Ānnī, kuài jìnlái! Wǒ gěi nǐmen jièshào yíxià, zhè shì háizimen de yéye, nǎinai.",
            "translation": {
                "en": "Jiayue, Annie, come right in! Let me introduce you: this is the children's grandfather and grandmother.",
                "ar": "جيايوي، آني، تفضلا بالدخول سريعاً! دعوني أعرفكم ببعض: هذا جد الأطفال وهذه جدتهم."
            },
            "audio": None
        },
        {
            "id": "5-2-2",
            "role": "白家月和安妮 (Bai Jiayue & Annie)",
            "hanzi": "爷爷、奶奶，你们好！",
            "pinyin": "Yéye, nǎinai, nǐmen hǎo!",
            "translation": {
                "en": "Grandpa, Grandma, hello!",
                "ar": "أهلاً بكما يا جدي ويا جدتي!"
            },
            "audio": None
        },
        {
            "id": "5-2-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "爸妈，这是白家月，这是安妮。她们都是一飞的学生。",
            "pinyin": "Bà mā, zhè shì Bái Jiāyuè, zhè shì Ānnī. Tāmen dōu shì Yīfēi de xuésheng.",
            "translation": {
                "en": "Mom and Dad, this is Bai Jiayue, and this is Annie. They are both Yifei's students.",
                "ar": "أمي وأبي، هذه باي جيايوي، وهذه آني. كلتاهما من طالبات ييفي."
            },
            "audio": None
        },
        {
            "id": "5-2-4",
            "role": "爷爷和奶奶 (Grandpa & Grandma)",
            "hanzi": "家月、安妮，你们好！快坐吧！",
            "pinyin": "Jiāyuè, Ānnī, nǐmen hǎo! Kuài zuò ba!",
            "translation": {
                "en": "Jiayue, Annie, welcome! Please sit down!",
                "ar": "أهلاً وسهلاً بكما يا جيايوي ويا آني! تفضلا بالجلوس سريعاً!"
            },
            "audio": None
        },
        {
            "id": "5-2-5",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "一雪姐，这是给孩子们准备的礼物。",
            "pinyin": "Yīxuě jiě, zhè shì gěi háizimen zhǔnbèi de lǐwù.",
            "translation": {
                "en": "Sister Yixue, these are gifts we prepared for the children.",
                "ar": "أختي ييشيويه، هذه هدايا أعددناها للأطفال."
            },
            "audio": None
        },
        {
            "id": "5-2-6",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你们太客气了，还拿这么多礼物来！谢谢！你们别客气，快坐吧！",
            "pinyin": "Nǐmen tài kèqi le, hái ná zhème duō lǐwù lái! Xièxie! Nǐmen bié kèqi, kuài zuò ba!",
            "translation": {
                "en": "You're both far too kind, bringing so many gifts! Thank you! Please make yourselves at home and have a seat!",
                "ar": "أنتما لطيفتان وخلوقتان جداً، لم يكن هناك داعٍ لإحضار كل هذه الهدايا! شكراً لكما! لا تكلفا على أنفسكما وتفضلا بالجلوس!"
            },
            "audio": None
        },
        # Text 3
        {
            "id": "5-3-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "都12点了，我们吃饭吧。",
            "pinyin": "Dōu shí'èr diǎn le, wǒmen chīfàn ba.",
            "translation": {
                "en": "It's already 12 o'clock; let's have our meal.",
                "ar": "لقد أصبحت الساعة 12 بالفعل، فلنتناول الطعام."
            },
            "audio": None
        },
        {
            "id": "5-3-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "这么多好吃的，您太客气了！",
            "pinyin": "Zhème duō hǎochī de, nín tài kèqi le!",
            "translation": {
                "en": "So many delicious dishes; you really shouldn't have gone to all this trouble!",
                "ar": "ما كل هذه الأطباق الشهية اللذيذة! كرمكم يفوق الوصف!"
            },
            "audio": None
        },
        {
            "id": "5-3-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "都是我自己做的，你们多吃点儿。",
            "pinyin": "Dōu shì wǒ zìjǐ zuò de, nǐmen duō chī diǎnr.",
            "translation": {
                "en": "I cooked everything myself; please eat heartily!",
                "ar": "لقد أعددتها كلها بنفسي، كلوا واستمتعوا بالطعام."
            },
            "audio": None
        },
        {
            "id": "5-3-4",
            "role": "安妮 (Annie)",
            "hanzi": "奶茶也很好喝，是您做的吗？",
            "pinyin": "Nǎichá yě hěn hǎohē, shì nín zuò de ma?",
            "translation": {
                "en": "The milk tea is also delicious; did you make it too?",
                "ar": "شاي الحليب لذيذ جداً أيضاً، هل أعددتِه أنتِ كذلك؟"
            },
            "audio": None
        },
        {
            "id": "5-3-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "不是，奶茶是爷爷买的。",
            "pinyin": "Bú shì, nǎichá shì yéye mǎi de.",
            "translation": {
                "en": "No, Grandpa bought the milk tea.",
                "ar": "كلا، شاي الحليب اشتراه الجد."
            },
            "audio": None
        },
        {
            "id": "5-3-6",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "在哪儿买的？我还没喝过这么好喝的奶茶。",
            "pinyin": "Zài nǎr mǎi de? Wǒ hái méi hēguo zhème hǎohē de nǎichá.",
            "translation": {
                "en": "Where was it bought? I have never tasted such delicious milk tea before.",
                "ar": "من أين اشتراه؟ لم يسبق لي أن شربت شاي حليب بهذه اللذة."
            },
            "audio": None
        },
        {
            "id": "5-3-7",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "就在前边的商场，吃完饭你们可以跟我去看看。",
            "pinyin": "Jiù zài qiánbian de shāngchǎng, chīwán fàn nǐmen kěyǐ gēn wǒ qù kànkan.",
            "translation": {
                "en": "Right at the shopping mall up ahead. After finishing the meal, you can come with me to check it out.",
                "ar": "في المجمع التجاري القريب هنا، وبعد أن ننتهي من تناول الطعام يمكنكما مرافقتي لنلقي نظرة عليه."
            },
            "audio": None
        },
        # Text 4
        {
            "id": "5-4-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "回国前一天，我们去一雪姐家了。到她家的时候，饭菜都做好了。刘爷爷还准备了奶茶。因为吃了太多东西，我们吃完饭是走回酒店的。",
            "pinyin": "Huí guó qián yì tiān, wǒmen qù Yīxuě jiě jiā le. Dào tā jiā de shíhou, fàncài dōu zuòhǎo le. Liú yéye hái zhǔnbèile nǎichá. Yīnwèi chīle tài duō dōngxi, wǒmen chīwán fàn shì zǒuhuí jiǔdiàn de.",
            "translation": {
                "en": "The day before returning to our home countries, we visited Sister Yixue's home. When we arrived, the food was already cooked and ready. Grandpa Liu had also prepared milk tea. Because we ate so much, we walked all the way back to the hotel after dinner.",
                "ar": "في اليوم السابق لعودتنا إلى بلادنا، ذهبنا لزيارة منزل الأخت ييشيويه. وحين وصلنا، كان الطعام جاهزاً ومعداً بالكامل، وكان الجد ليو قد جهز شاي الحليب أيضاً. ولأننا أكلنا الكثير من الطعام، عدنا سيراً على الأقدام إلى الفندق بعد العشاء."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Simple Complements of Direction (简单趋向补语: 来 / 去)",
            "explanation": "‘来’ indicates movement toward the speaker (下来吧 come down here; 快进来 come in), while ‘去’ indicates movement away from the speaker (不上去了 not going up; 一会儿就下去 I'll go down shortly).",
            "arExplanation": "تُستخدم مكملات الاتجاه البسيطة مع الأفعال: '来' تدل على حركة متجهة نحو المتكلم ('下来吧' انزل نحوي)، بينما '去' تدل على حركة مبتعدة عن المتكلم ('下去' سأنزل بعيداً عن موضعي الحالي)."
        },
        {
            "point": "Fixed Pattern 都……了 (dōu ... le)",
            "explanation": "Expresses 'already' or reaching a noteworthy extent with emphasis: 都12点了，我们吃饭吧 (It's already 12 o'clock, let's eat).",
            "arExplanation": "تدل الصيغة '都……了' على معنى 'بالفعل' أو بلوغ حد معين مع نبرة توكيد أو تنبيه: '都12点了' (لقد أصبحت الساعة 12 بالفعل)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Hospitality & Visiting Chinese Homes (到中国人家做客)",
            "detail": "When invited to a Chinese home, it is customary courtesy to bring modest gifts (礼物) such as fruit, tea, or snacks for children. Guests are greeted warmly by family elders (爷爷、奶奶), treated with generous home-cooked feasts, and encouraged to eat plentifully ('多吃点儿').",
            "arDetail": "من آداب زيارة البيوت الصينية تقديم هدايا رمزية كالفاكهة والشاي أو حلويات للأطفال، ويُحيَّى كبار السن (الجد والجدة) باحترام وتقدير، كما يحرص أهل البيت على إعداد ولائم منزلية حافلة وحث الضيوف بلطف على الأكل والشبع."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q5-1",
            "question": "What did Bai Jiayue and Annie bring when visiting Wang Yixue's home?",
            "arQuestion": "ماذا أحضرت باي جيايوي وآني معهما عند زيارة منزل وانغ ييشيويه؟",
            "options": [
                "给孩子们的礼物 (Gifts for the children)",
                "一斤饺子 (A jin of dumplings)",
                "书包 (Schoolbags)",
                "电脑 (Computers)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q5-2",
            "question": "How did Bai Jiayue and Annie return to their hotel after dinner?",
            "arQuestion": "كيف عادت باي جيايوي وآني إلى الفندق بعد العشاء؟",
            "options": [
                "走回酒店 (Walked back)",
                "打车回去 (Took a taxi)",
                "坐公交车 (Took a bus)",
                "刘明开车送 (Liu Ming drove them)"
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

# Write each unit out
units = [unit1, unit2, unit3, unit4, unit5]
for u in units:
    fpath = os.path.join(out_dir, f"unit-{u['unitId']}.json")
    with open(fpath, "w", encoding="utf-8") as f:
        json.dump(u, f, ensure_ascii=False, indent=2)
    print(f"Successfully generated {fpath}")

print("All Units 1 to 5 generated successfully!")
