# -*- coding: utf-8 -*-
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

out_dir = "chinese-hsk-website/source-data/conversations/hsk-2/hsk3"
os.makedirs(out_dir, exist_ok=True)

# ==========================================
# UNIT 11: 我最喜欢吃中国菜 (I Like Chinese Food the Most)
# ==========================================
unit11 = {
    "id": "hsk-2-hsk3-unit-11",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 11,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第11课：我最喜欢吃中国菜",
        "en": "Lesson 11: I like Chinese food the most",
        "ar": "الدرس 11: أنا أفضل تناول الطعام الصيني أكثر من أي شيء آخر"
    },
    "dialogue": [
        # Text 1: 在教室，王一飞和白家月在聊天儿。
        {
            "id": "11-1-1",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "家月，都下课了，你怎么还不回家？",
            "pinyin": "Jiāyuè, dōu xiàkè le, nǐ zěnme hái bù huí jiā?",
            "translation": {
                "en": "Jiayue, class is already over; why haven't you gone home yet?",
                "ar": "جيايوي، لقد انتهت الحصة بالفعل، لماذا لم تعودي إلى البيت بعد؟"
            },
            "audio": None
        },
        {
            "id": "11-1-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我头疼，不太舒服。",
            "pinyin": "Wǒ tóuténg, bú tài shūfu.",
            "translation": {
                "en": "I have a headache, not feeling very well.",
                "ar": "أعاني من صداع في رأسي، ولست على ما يرام."
            },
            "audio": None
        },
        {
            "id": "11-1-3",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "你这几天经常头疼，去医院看看吧。",
            "pinyin": "Nǐ zhè jǐ tiān jīngcháng tóuténg, qù yīyuàn kànkan ba.",
            "translation": {
                "en": "You've been getting headaches often these past few days; you should go to the hospital to see a doctor.",
                "ar": "لقد تكرر شعورك بالصداع هذه الأيام الأخيرة، عليكِ الذهاب إلى المستشفى للفحص."
            },
            "audio": None
        },
        {
            "id": "11-1-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我想休息一下，现在不能动。",
            "pinyin": "Wǒ xiǎng xiūxi yíxià, xiànzài bù néng dòng.",
            "translation": {
                "en": "I want to rest for a bit; I can't move right now.",
                "ar": "أود أخذ قسط من الراحة، لا أستطيع الحركة الآن."
            },
            "audio": None
        },
        {
            "id": "11-1-5",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "那你在这儿坐着，我开车送你去医院。",
            "pinyin": "Nà nǐ zài zhèr zuòzhe, wǒ kāichē sòng nǐ qù yīyuàn.",
            "translation": {
                "en": "Then stay seated right here; I'll drive you to the hospital.",
                "ar": "إذاً ابقي جالسة هنا، وسأقود السيارة لأوصلكِ إلى المستشفى."
            },
            "audio": None
        },
        {
            "id": "11-1-6",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "谢谢王老师。",
            "pinyin": "Xièxie Wáng lǎoshī.",
            "translation": {
                "en": "Thank you, Teacher Wang.",
                "ar": "شكراً جزيلاً لكِ يا أستاذة وانغ."
            },
            "audio": None
        },
        # Text 2: 去医院路上 (On the Way to the Hospital)
        {
            "id": "11-2-1",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "现在路上车多，还下着雪，我开慢一点儿。",
            "pinyin": "Xiànzài lùshang chē duō, hái xiàzhe xuě, wǒ kāi màn yìdiǎnr.",
            "translation": {
                "en": "There's heavy traffic right now and it's still snowing, so I'll drive a little slower.",
                "ar": "حركة المرور كثيفة الآن والثلوج تتساقط، لذا سأقود ببطء أكثر."
            },
            "audio": None
        },
        {
            "id": "11-2-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "没问题，现在头没那么疼了。",
            "pinyin": "Méi wèntí, xiànzài tóu méi nàme téng le.",
            "translation": {
                "en": "No problem; my headache isn't as severe now.",
                "ar": "لا بأس، الصداع لم يعد شديداً كما كان."
            },
            "audio": None
        },
        {
            "id": "11-2-3",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "好。李文来电话了，你帮我接一下。",
            "pinyin": "Hǎo. Lǐ Wén lái diànhuà le, nǐ bāng wǒ jiē yíxià.",
            "translation": {
                "en": "Good. Li Wen is calling; could you please answer it for me?",
                "ar": "حسناً. لي ون يتصل، هل يمكنكِ الرد عليه نيابة عني؟"
            },
            "audio": None
        },
        {
            "id": "11-2-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "喂，李文，王老师开着车呢，你找她有事吗？",
            "pinyin": "Wéi, Lǐ Wén, Wáng lǎoshī kāizhe chē ne, nǐ zhǎo tā yǒu shì ma?",
            "translation": {
                "en": "Hello, Li Wen! Teacher Wang is driving right now; do you need her for something?",
                "ar": "مرحباً يا لي ون! الأستاذة وانغ تقود السيارة حالياً، هل تحتاجها في أمر ما؟"
            },
            "audio": None
        },
        {
            "id": "11-2-5",
            "role": "李文 (Li Wen)",
            "hanzi": "没什么事。今天雪这么大，你们开车去哪儿啊？",
            "pinyin": "Méi shénme shì. Jīntiān xuě zhème dà, nǐmen kāichē qù nǎr a?",
            "translation": {
                "en": "Nothing urgent. With such heavy snow today, where are you two driving?",
                "ar": "لا شيء طارئ. الثلوج كثيفة جداً اليوم، إلى أين أنتما ذاهبتان بالسيارة؟"
            },
            "audio": None
        },
        {
            "id": "11-2-6",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "去医院，我头有点儿疼。",
            "pinyin": "Qù yīyuàn, wǒ tóu yǒudiǎnr téng.",
            "translation": {
                "en": "To the hospital; my head hurts a bit.",
                "ar": "إلى المستشفى، فرأسي يؤلمني قليلاً."
            },
            "audio": None
        },
        {
            "id": "11-2-7",
            "role": "李文 (Li Wen)",
            "hanzi": "那你们慢点儿开，我一会儿去看你。",
            "pinyin": "Nà nǐmen màn diǎnr kāi, wǒ yíhuìr qù kàn nǐ.",
            "translation": {
                "en": "Drive carefully then; I'll come over to visit you in a little while.",
                "ar": "قودا بحذر إذاً، وسآتي لزيارتكِ بعد قليل."
            },
            "audio": None
        },
        {
            "id": "11-2-8",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "好的，一会儿见。",
            "pinyin": "Hǎo de, yíhuìr jiàn.",
            "translation": {
                "en": "Okay, see you soon.",
                "ar": "حسناً، أراك بعد قليل."
            },
            "audio": None
        },
        # Text 3: 看望与吃中国菜 (Visiting and Cooking Chinese Food)
        {
            "id": "11-3-1",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "李文，快请进！",
            "pinyin": "Lǐ Wén, kuài qǐng jìn!",
            "translation": {
                "en": "Li Wen, come in quickly!",
                "ar": "لي ون، تفضل بالدخول سريعاً!"
            },
            "audio": None
        },
        {
            "id": "11-3-2",
            "role": "李文 (Li Wen)",
            "hanzi": "家月，你怎么样了？头还疼吗？",
            "pinyin": "Jiāyuè, nǐ zěnmeyàng le? Tóu hái téng ma?",
            "translation": {
                "en": "Jiayue, how are you feeling? Does your head still hurt?",
                "ar": "جيايوي، كيف حالك الآن؟ هل ما زال رأسك يؤلمك؟"
            },
            "audio": None
        },
        {
            "id": "11-3-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "不那么疼了。医生开了一些药，吃完就好多了。",
            "pinyin": "Bú nàme téng le. Yīshēng kāile yìxiē yào, chīwán jiù hǎoduō le.",
            "translation": {
                "en": "It doesn't hurt as much. The doctor prescribed some medicine; I feel much better after taking it.",
                "ar": "لم يعد يؤلمني كثيراً. لقد وصف الطبيب بعض الدواء، وأشعر بتحسن كبير بعد تناوله."
            },
            "audio": None
        },
        {
            "id": "11-3-4",
            "role": "李文 (Li Wen)",
            "hanzi": "那就好！",
            "pinyin": "Nà jiù hǎo!",
            "translation": {
                "en": "That's good to hear!",
                "ar": "الحمد لله، هذا رائع!"
            },
            "audio": None
        },
        {
            "id": "11-3-5",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "家月，你想不想吃点儿东西？",
            "pinyin": "Jiāyuè, nǐ xiǎng bu xiǎng chī diǎnr dōngxi?",
            "translation": {
                "en": "Jiayue, would you like to eat something?",
                "ar": "جيايوي، هل ترغبين في تناول شيء ما؟"
            },
            "audio": None
        },
        {
            "id": "11-3-6",
            "role": "李文 (Li Wen)",
            "hanzi": "吃点儿吧，身体不舒服时更要好好吃饭。",
            "pinyin": "Chī diǎnr ba, shēntǐ bù shūfu shí gèng yào hǎohāo chī fàn.",
            "translation": {
                "en": "Have a little bite; when you're not feeling well, it's even more important to eat well.",
                "ar": "تناولي شيئاً، فعندما يكون المرء متوعكاً يجب أن يتغذى بشكل أفضل."
            },
            "audio": None
        },
        {
            "id": "11-3-7",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "吃点儿什么呢？",
            "pinyin": "Chī diǎnr shénme ne?",
            "translation": {
                "en": "What should we eat?",
                "ar": "ماذا نأكل إذاً؟"
            },
            "audio": None
        },
        {
            "id": "11-3-8",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "你最喜欢吃中国菜，我做几个中国菜吧。",
            "pinyin": "Nǐ zuì xǐhuan chī Zhōngguó cài, wǒ zuò jǐ ge Zhōngguó cài ba.",
            "translation": {
                "en": "You love Chinese food the most; I'll cook a few Chinese dishes.",
                "ar": "أنتِ تفضلين الطعام الصيني أكثر من أي شيء آخر، سأطهو لكِ بعض الأطباق الصينية."
            },
            "audio": None
        },
        {
            "id": "11-3-9",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "好的，谢谢王老师！",
            "pinyin": "Hǎo de, xièxie Wáng lǎoshī!",
            "translation": {
                "en": "Alright, thank you so much, Teacher Wang!",
                "ar": "حسناً، شكراً جزيلاً لكِ يا أستاذة وانغ!"
            },
            "audio": None
        },
        # Text 4: 白家月的日记 (Bai Jiayue's Diary)
        {
            "id": "11-4-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我这几天经常头疼，从药店买了点儿药，没去医院。今天下课后，王老师看我不舒服，就送我去医院了。从医院回来，李文也来看我了。现在他们都回去了，我也要睡觉了。",
            "pinyin": "Wǒ zhè jǐ tiān jīngcháng tóuténg, cóng yàodiàn mǎile diǎnr yào, méi qù yīyuàn. Jīntiān xiàkè hòu, Wáng lǎoshī kàn wǒ bù shūfu, jiù sòng wǒ qù yīyuàn le. Cóng yīyuàn huílái, Lǐ Wén yě lái kàn wǒ le. Xiànzài tāmen dōu huíqù le, wǒ yě yào shuìjiào le.",
            "translation": {
                "en": "I've had frequent headaches these past few days. I bought some medicine from the pharmacy and hadn't gone to the hospital. After class today, Teacher Wang saw that I wasn't feeling well and took me to the hospital. After returning from the hospital, Li Wen also came to visit me. Now they have both returned, and I'm going to sleep too.",
                "ar": "عانيت من الصداع المتكرر في هذه الأيام الأخيرة، واكتفيت بشراء بعض الدواء من الصيدلية دون الذهاب إلى المستشفى. واليوم بعد انتهاء الحصة، رأت الأستاذة وانغ أنني متوعكة فأخذتني إلى المستشفى. وبعد العودة من المستشفى، جاء لي ون لعيادتي أيضاً. والآن عاد كلاهما إلى البيت، وأنا على وشك الخلود إلى النوم."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Aspect Particle '着' (zhe) for Action/State Continuation",
            "explanation": "Follows a verb to indicate ongoing continuation of a state or action: 那你在这儿坐着 (stay seated here); 还下着雪 (it's still snowing); 王老师开着车呢 (Teacher Wang is driving). The object is placed after '着'.",
            "arExplanation": "تأتي أداة المظهر '着' بعد الفعل لتدل على استمرار حالة أو فعل دون انقطاع: '坐着' (جالس)، '还下着雪' (الثلج لا يزال يتساقط)، '开着车呢' (يقود السيارة حالياً)."
        },
        {
            "point": "Adverb of Degree '最' (zuì - Most / Superlative)",
            "explanation": "Placed before adjectives or psychological verbs to express the highest superlative degree among a group: 你最喜欢吃中国菜 (You like Chinese food the most); 在我们家，爸爸最高 (In our family, Dad is the tallest).",
            "arExplanation": "يُستخدم ظرف الدرجة '最' قبل الصفات أو الأفعال الشعورية لإفادة صيغة التفضيل القصوى: '你最喜欢吃中国菜' (أنتِ تفضلين الطعام الصيني أكثر من أي شيء آخر)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Caring for the Sick and Healing Food (探病关怀与食补)",
            "detail": "In China, when a friend or student falls ill, teachers and friends often personally accompany them to the clinic and prepare fresh, nourishing home-cooked meals (如鸡汤、热粥). Eating wholesome food (好好吃饭) is viewed as fundamental to rapid recovery.",
            "arDetail": "في الثقافة الصينية، عندما يمرض صديق أو طالب، يبادر المعلمون والزملاء باصطحابه للمستشفى وطهي وجبات منزلية مغذية ودافئة له، فالغذاء الصحي المتوازن (好好吃饭) يُعد ركيزة أساسية للتعافي السريع واستعادة العافية."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q11-1",
            "question": "Why did Teacher Wang drive Bai Jiayue to the hospital?",
            "arQuestion": "لماذا قامت الأستاذة وانغ بإيصال باي جيايوي إلى المستشفى بالسيارة؟",
            "options": [
                "因为白家月头疼，身体不舒服 (Because Bai Jiayue had a headache and felt unwell)",
                "因为白家月要在医院上班 (Because Bai Jiayue works at the hospital)",
                "因为李文在医院 (Because Li Wen was at the hospital)",
                "因为下雪天没有公共汽车 (Because there were no buses on the snowy day)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q11-2",
            "question": "What did Teacher Wang offer to cook for Bai Jiayue?",
            "arQuestion": "ماذا اقترحت الأستاذة وانغ أن تطهو لباي جيايوي؟",
            "options": [
                "做几个中国菜 (Cook a few Chinese dishes)",
                "买一些面包 (Buy some bread)",
                "烤一只烤鸭 (Roast a duck)",
                "煮一碗方便面 (Cook a bowl of instant noodles)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q11-3",
            "question": "What did Bai Jiayue do before going to the hospital with Teacher Wang?",
            "arQuestion": "ماذا فعلت باي جيايوي قبل أن تذهب إلى المستشفى مع الأستاذة وانغ؟",
            "options": [
                "从药店买了点儿药 (Bought some medicine from a pharmacy)",
                "去外面跑步 (Went outside for a run)",
                "给李文买礼物 (Bought a gift for Li Wen)",
                "去商场看电影 (Went to the mall to watch a movie)"
            ],
            "answerIndex": 0
        }
    ]
}

# ==========================================
# UNIT 12: 这里比北京冷多了 (It's Much Colder Here Than in Beijing)
# ==========================================
unit12 = {
    "id": "hsk-2-hsk3-unit-12",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 12,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第12课：这里比北京冷多了",
        "en": "Lesson 12: It's much colder here than in Beijing",
        "ar": "الدرس 12: الجو هنا أبرد بكثير مما هو عليه في بكين"
    },
    "dialogue": [
        # Text 1: 在房间，王一雪接到白家月的电话。
        {
            "id": "12-1-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "喂，家月，是你啊！有什么事情吗？",
            "pinyin": "Wéi, Jiāyuè, shì nǐ a! Yǒu shénme shìqing ma?",
            "translation": {
                "en": "Hello, Jiayue, it's you! Is anything the matter?",
                "ar": "أهلاً يا جيايوي، هذه أنتِ! هل من أمر طارئ؟"
            },
            "audio": None
        },
        {
            "id": "12-1-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "没什么事，就想跟您说说话。",
            "pinyin": "Méi shénme shì, jiù xiǎng gēn nín shuōshuo huà.",
            "translation": {
                "en": "Nothing special; I just wanted to chat with you.",
                "ar": "لا شيء خاص، أردت فقط التحدث معكِ والاطمئنان عليكِ."
            },
            "audio": None
        },
        {
            "id": "12-1-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "好啊。你今天没课吗？",
            "pinyin": "Hǎo a. Nǐ jīntiān méi kè ma?",
            "translation": {
                "en": "Wonderful. Don't you have classes today?",
                "ar": "جميل جداً. أليس لديكِ دروس اليوم؟"
            },
            "audio": None
        },
        {
            "id": "12-1-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "下午有课。您那里天气怎么样？",
            "pinyin": "Xiàwǔ yǒu kè. Nín nàli tiānqì zěnmeyàng?",
            "translation": {
                "en": "I have classes in the afternoon. How is the weather where you are?",
                "ar": "لدي حصص بعد الظهر. كيف هو الطقس عندكم هناك؟"
            },
            "audio": None
        },
        {
            "id": "12-1-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "这里比北京冷多了，今天还刮大风呢。",
            "pinyin": "Zhèlǐ bǐ Běijīng lěng duō le, jīntiān hái guā dà fēng ne.",
            "translation": {
                "en": "It's much colder here than in Beijing, and strong winds are blowing today too.",
                "ar": "الجو هنا أبرد بكثير مما هو عليه في بكين، والرياح تهب بقوة اليوم أيضاً."
            },
            "audio": None
        },
        {
            "id": "12-1-6",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "那您出门要多穿点儿衣服。",
            "pinyin": "Nà nín chūmén yào duō chuān diǎnr yīfu.",
            "translation": {
                "en": "Then make sure to wear more warm clothes when going outside.",
                "ar": "عليكِ إذاً ارتداء ملابس دافئة وثقيلة عند الخروج من المنزل."
            },
            "audio": None
        },
        # Text 2: 在客厅，王一雪给王一飞打电话。
        {
            "id": "12-2-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "喂，一飞，听家月说你那边下雪了，下得大不大？",
            "pinyin": "Wéi, Yīfēi, tīng Jiāyuè shuō nǐ nàbian xià xuě le, xià de dà bu dà?",
            "translation": {
                "en": "Hello, Yifei! I heard from Jiayue that it's snowing over there. Is it snowing heavily?",
                "ar": "أهلاً يا ييفي! سمعت من جيايوي أن الثلج يتساقط عندكم، هل يتساقط بكثافة؟"
            },
            "audio": None
        },
        {
            "id": "12-2-2",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "昨天比今天下得大。今天不大了。",
            "pinyin": "Zuótiān bǐ jīntiān xià de dà. Jīntiān bú dà le.",
            "translation": {
                "en": "It snowed heavier yesterday than today. Today it's not very heavy.",
                "ar": "تساقط الثلج أمس كان أغزر من اليوم، واليوم خف تساقطه."
            },
            "audio": None
        },
        {
            "id": "12-2-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "天气不好，你去外面的时候多穿点儿衣服。",
            "pinyin": "Tiānqì bù hǎo, nǐ qù wàimiàn de shíhou duō chuān diǎnr yīfu.",
            "translation": {
                "en": "The weather is rough; put on more warm clothing when you step outside.",
                "ar": "الطقس سيئ، ارتدي ملابس إضافية عند خروجك."
            },
            "audio": None
        },
        {
            "id": "12-2-4",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "知道了，姐。这几天学校让我们上网课，我不出门。",
            "pinyin": "Zhīdào le, jiě. Zhè jǐ tiān xuéxiào ràng wǒmen shàng wǎngkè, wǒ bù chūmén.",
            "translation": {
                "en": "Got it, sister. These days the school arranged online classes for us, so I'm not going out.",
                "ar": "حسناً يا أختي. جعلتنا الجامعة نأخذ الدروس عبر الإنترنت هذه الأيام، لذلك لن أخرج."
            },
            "audio": None
        },
        {
            "id": "12-2-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "那就好，多买点儿吃的放在家里。",
            "pinyin": "Nà jiù hǎo, duō mǎi diǎnr chī de fàng zài jiā lǐ.",
            "translation": {
                "en": "That's good; buy plenty of groceries and food to keep at home.",
                "ar": "هذا مطمئن، اشتري ما يكفي من الأطعمة وخزنيها في البيت."
            },
            "audio": None
        },
        # Text 3: 跑步与天气 (Running and Weather)
        {
            "id": "12-3-1",
            "role": "李文 (Li Wen)",
            "hanzi": "喂，家月，今天天气不错，我们去跑步吧！",
            "pinyin": "Wéi, Jiāyuè, jīntiān tiānqì búcuò, wǒmen qù pǎobù ba!",
            "translation": {
                "en": "Hello, Jiayue! The weather is lovely today; let's go for a run!",
                "ar": "مرحباً يا جيايوي! الطقس رائع اليوم، هيا نذهب للجري!"
            },
            "audio": None
        },
        {
            "id": "12-3-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "你跑步跑得比我快，我们能一起跑吗？",
            "pinyin": "Nǐ pǎobù pǎo de bǐ wǒ kuài, wǒmen néng yìqǐ pǎo ma?",
            "translation": {
                "en": "You run faster than me; can we really run together?",
                "ar": "أنت تجري أسرع مني، فهل يمكننا الركض معاً؟"
            },
            "audio": None
        },
        {
            "id": "12-3-3",
            "role": "李文 (Li Wen)",
            "hanzi": "可以的，我慢慢跑，等着你。",
            "pinyin": "Kěyǐ de, wǒ mànmàn pǎo, děngzhe nǐ.",
            "translation": {
                "en": "Of course! I'll jog slowly and wait for you.",
                "ar": "بالتأكيد! سأركض ببطء وأنتظركِ."
            },
            "audio": None
        },
        {
            "id": "12-3-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "好吧。你真爱跑步啊！",
            "pinyin": "Hǎo ba. Nǐ zhēn ài pǎobù a!",
            "translation": {
                "en": "Alright then. You really do love running!",
                "ar": "حسناً إذاً. أنت تعشق الجري حقاً!"
            },
            "audio": None
        },
        {
            "id": "12-3-5",
            "role": "李文 (Li Wen)",
            "hanzi": "是啊，我从小就喜欢运动。我在你楼下等你。",
            "pinyin": "Shì a, wǒ cóngxiǎo jiù xǐhuan yùndòng. Wǒ zài nǐ lóu xià děng nǐ.",
            "translation": {
                "en": "Indeed, I've loved sports ever since I was a kid. I'll wait for you downstairs.",
                "ar": "نعم، لقد أحببت الرياضة منذ صغري. سأنتظركِ أسفل بنايتكِ."
            },
            "audio": None
        },
        {
            "id": "12-3-6",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "好的，我马上下来。",
            "pinyin": "Hǎo de, wǒ mǎshàng xiàlai.",
            "translation": {
                "en": "Great, I'll be right down.",
                "ar": "حسناً، سأنزل في الحال."
            },
            "audio": None
        },
        # Text 4: 白家月的日记 (Bai Jiayue's Diary)
        {
            "id": "12-4-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "这几天天气不好，我没有走路去学校，每天坐两站地铁去学校。今天是个晴天，李文叫我跟他一起去外面跑步。他小时候经常跑步。他跑得比我快，但是他等着我。跟李文一起跑步让我好高兴！",
            "pinyin": "Zhè jǐ tiān tiānqì bù hǎo, wǒ méiyǒu zǒulù qù xuéxiào, měitiān zuò liǎng zhàn dìtiě qù xuéxiào. Jīntiān shì ge qíngtiān, Lǐ Wén jiào wǒ gēn tā yìqǐ qù wàimiàn pǎobù. Tā xiǎoshíhou jīngcháng pǎobù. Tā pǎo de bǐ wǒ kuài, dànshì tā děngzhe wǒ. Gēn Lǐ Wén yìqǐ pǎobù ràng wǒ hǎo gāoxìng!",
            "translation": {
                "en": "The weather had been bad over the past few days, so I didn't walk to school; I took the subway for two stops to school every day. Today was a sunny day, and Li Wen asked me to go running outside with him. He often ran when he was a child. He ran faster than me, but he waited for me. Running with Li Wen made me so happy!",
                "ar": "كان الطقس رديئاً في الأيام القليلة الماضية، لذا لم أذهب مشياً إلى الجامعة، بل ركبت المترو لمحطتين يومياً. واليوم كان الجو مشمساً وصافياً، فدعاني لي ون للجري معه في الهواء الطلق. كان يمارس الجري كثيراً في طفولته. إنه يركض أسرع مني بكثير، لكنه كان يتمهل وينتظرني. لقد جعلني الجري مع لي ون سعيدة للغاية!"
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Comparative Sentences with '多了' / '得多' (Much More / Far More)",
            "explanation": "Placed after the adjective in a '比' sentence to indicate a substantial difference: 这里比北京冷多了 (It's much colder here than in Beijing); 坐飞机比坐火车快得多 (Flying is much faster than taking the train).",
            "arExplanation": "تُوضع العبارتان '多了' أو '得多' بعد الصفة في جملة المقارنة '比' للدلالة على فارق كبير وشاسع: '这里比北京冷多了' (الجو هنا أبرد بكثير مما هو في بكين)."
        },
        {
            "point": "Comparative Sentences Combined with Complement of State",
            "explanation": "When comparing how well or to what degree an action is performed: 昨天比今天下得大 (It snowed heavier yesterday than today); 李文跑得比白家月快 (Li Wen runs faster than Bai Jiayue). For separable verbs: 你跑步跑得比我快 (repeat verb '跑').",
            "arExplanation": "عند المقارنة في كيفية أو درجة وقوع الفعل: '昨天比今天下得大' (تساقط الثلج أمس كان أغزر من اليوم). وإذا كان الفعل انفصالياً يتكرر الفعل: '你跑步跑得比我快' (أنت تجري أسرع مني)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Winter Climates and Heating in Northern vs. Southern China",
            "detail": "Northern and Southern China experience starkly different winters. Northern cities like Beijing feature robust indoor central heating (集中供暖), whereas southern cities can feel quite cold and damp indoors despite higher thermometer readings.",
            "arDetail": "تختلف فصول الشتاء اختلافاً كبيراً بين شمال وجنوب الصين؛ فمدن الشمال مثل بكين تحظى بنظام تدفئة مركزية منزلية قوي وشامل (集中供暖)، بينما تشهد بعض المناطق الأخرى طقساً رطباً وبارداً في الأماكن المغلقة."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q12-1",
            "question": "How did Bai Jiayue commute to school during the recent bad weather days?",
            "arQuestion": "كيف كانت باي جيايوي تذهب إلى الجامعة خلال الأيام السابقة ذات الطقس الرديء؟",
            "options": [
                "坐两站地铁 (Took the subway for two stops)",
                "走路 (Walked)",
                "骑自行车 (Rode a bicycle)",
                "开汽车 (Drove a car)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q12-2",
            "question": "Why didn't Teacher Wang Yifei need to leave home during the snow?",
            "arQuestion": "لماذا لم تكن الأستاذة وانغ ييفي بحاجة للخروج من المنزل أثناء تساقط الثلوج؟",
            "options": [
                "因为学校安排上网课 (Because the school arranged online classes)",
                "因为她生病住院了 (Because she was hospitalized)",
                "因为学校放假一个月 (Because the school was on a one-month holiday)",
                "因为汽车坏了 (Because her car broke down)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q12-3",
            "question": "What did Li Wen do while running with Bai Jiayue?",
            "arQuestion": "ماذا فعل لي ون أثناء الجري مع باي جيايوي؟",
            "options": [
                "他慢慢跑，等着她 (He jogged slowly and waited for her)",
                "他跑得太快，把她甩在后面 (He ran too fast and left her behind)",
                "他坐地铁走了 (He took the subway and left)",
                "他跑去打篮球了 (He went to play basketball instead)"
            ],
            "answerIndex": 0
        }
    ]
}

# ==========================================
# UNIT 13: 我们爱上中文课 (We Love Attending Chinese Class)
# ==========================================
unit13 = {
    "id": "hsk-2-hsk3-unit-13",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 13,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第13课：我们爱上中文课",
        "en": "Lesson 13: We love attending Chinese class",
        "ar": "الدرس 13: نحن نعشق حضور دروس اللغة الصينية"
    },
    "dialogue": [
        # Text 1: 在教室，白家月和陈天中在聊天儿。
        {
            "id": "13-1-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "时间过得真快啊！新年就要到了。",
            "pinyin": "Shíjiān guò de zhēn kuài a! Xīnnián jiù yào dào le.",
            "translation": {
                "en": "Time truly flies! The New Year is coming so soon.",
                "ar": "الوقت يمضي بسرعة عجيبة! رأس السنة على وشك القدوم."
            },
            "audio": None
        },
        {
            "id": "13-1-2",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "这半年王老师教我们中文，每天都那么认真。",
            "pinyin": "Zhè bàn nián Wáng lǎoshī jiāo wǒmen Zhōngwén, měitiān dōu nàme rènzhēn.",
            "translation": {
                "en": "Teacher Wang has been teaching us Chinese for the past six months, always so dedicated every single day.",
                "ar": "خلال هذا النصف عام علمتنا الأستاذة وانغ الصينية بكل تفانٍ وإخلاص كل يوم."
            },
            "audio": None
        },
        {
            "id": "13-1-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我们送王老师一些花，好不好？",
            "pinyin": "Wǒmen sòng Wáng lǎoshī yìxiē huā, hǎo bu hǎo?",
            "translation": {
                "en": "How about we give Teacher Wang some flowers?",
                "ar": "ما رأيك أن نهدي الأستاذة وانغ بعض الزهور؟"
            },
            "audio": None
        },
        {
            "id": "13-1-4",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "太好了！我知道附近有一家花店，里面的花特别漂亮。",
            "pinyin": "Tài hǎo le! Wǒ zhīdào fùjìn yǒu yì jiā huādiàn, lǐmiàn de huā tèbié piàoliang.",
            "translation": {
                "en": "Wonderful! I know a flower shop nearby where the flowers are exceptionally beautiful.",
                "ar": "فكرة رائعة! أعرف متجر زهور قريباً هنا، والورود فيه غاية في الجمال."
            },
            "audio": None
        },
        {
            "id": "13-1-5",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "那下课后我们一起去看看吧。",
            "pinyin": "Nà xiàkè hòu wǒmen yìqǐ qù kànkan ba.",
            "translation": {
                "en": "Then let's go check it out together after class.",
                "ar": "فلنذهب معاً لإلقاء نظرة بعد انتهاء الحصة إذاً."
            },
            "audio": None
        },
        {
            "id": "13-1-6",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "好的！",
            "pinyin": "Hǎo de!",
            "translation": {
                "en": "Great!",
                "ar": "حسناً، اتفقنا!"
            },
            "audio": None
        },
        # Text 2: 上课学汉字 (Learning Characters in Class)
        {
            "id": "13-2-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "王老师，今天的词比昨天多了十个。",
            "pinyin": "Wáng lǎoshī, jīntiān de cí bǐ zuótiān duōle shí ge.",
            "translation": {
                "en": "Teacher Wang, today's vocabulary has ten more words than yesterday's.",
                "ar": "أستاذة وانغ، مفردات اليوم تزيد بعشر كلمات عن الأمس."
            },
            "audio": None
        },
        {
            "id": "13-2-2",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "是啊！你们都学会了吗？",
            "pinyin": "Shì a! Nǐmen dōu xuéhuì le ma?",
            "translation": {
                "en": "Yes! Have you all mastered them?",
                "ar": "نعم بالفعل! هل أتقنتموها جميعاً؟"
            },
            "audio": None
        },
        {
            "id": "13-2-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "学会了，没有问题。",
            "pinyin": "Xuéhuì le, méi yǒu wèntí.",
            "translation": {
                "en": "We've mastered them, no problem at all.",
                "ar": "تعلمناها وأتقناها، ولا توجد مشكلة."
            },
            "audio": None
        },
        {
            "id": "13-2-4",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "好。现在我来说，你们在本子上面写。",
            "pinyin": "Hǎo. Xiànzài wǒ lái shuō, nǐmen zài běnzi shàngmian xiě.",
            "translation": {
                "en": "Good. Now I'll dictate, and you write on your notebooks.",
                "ar": "ممتاز. سأملي عليكم الآن، وأنتم اكتبوا على دفاتركم."
            },
            "audio": None
        },
        {
            "id": "13-2-5",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "同学们，“洗手间”的“洗”有几笔？",
            "pinyin": "Tóngxuémen, \"xǐshǒujiān\" de \"xǐ\" yǒu jǐ bǐ?",
            "translation": {
                "en": "Students, how many strokes are there in the character \"xǐ\" (wash) of \"xǐshǒujiān\"?",
                "ar": "يا طلاب، كم عدد الخطوط والضربات (الضربات القلمية) في حرف 'xǐ' من كلمة 'xǐshǒujiān' (دورة المياه)؟"
            },
            "audio": None
        },
        {
            "id": "13-2-6",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "九笔！",
            "pinyin": "Jiǔ bǐ!",
            "translation": {
                "en": "Nine strokes!",
                "ar": "تسع ضربات!"
            },
            "audio": None
        },
        {
            "id": "13-2-7",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "写得真好！",
            "pinyin": "Xiě de zhēn hǎo!",
            "translation": {
                "en": "Written so well!",
                "ar": "خطكِ جميل ورائع جداً!"
            },
            "audio": None
        },
        # Text 3: 漂亮的本子 (The Pretty Notebook)
        {
            "id": "13-3-1",
            "role": "安妮 (Annie)",
            "hanzi": "家月，你觉得这个本子怎么样？",
            "pinyin": "Jiāyuè, nǐ juéde zhège běnzi zěnmeyàng?",
            "translation": {
                "en": "Jiayue, what do you think of this notebook?",
                "ar": "جيايوي، ما رأيك في هذا الدفتر؟"
            },
            "audio": None
        },
        {
            "id": "13-3-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "很漂亮，多少钱一个？",
            "pinyin": "Hěn piàoliang, duōshao qián yí ge?",
            "translation": {
                "en": "Very pretty! How much did it cost?",
                "ar": "جميل جداً، كم يبلغ سعره للواحد؟"
            },
            "audio": None
        },
        {
            "id": "13-3-3",
            "role": "安妮 (Annie)",
            "hanzi": "比我们一起买的那个本子贵一点儿。",
            "pinyin": "Bǐ wǒmen yìqǐ mǎi de nàge běnzi guì yìdiǎnr.",
            "translation": {
                "en": "It's a little bit more expensive than the one we bought together.",
                "ar": "أغلى بقليل من ذلك الدفتر الذي اشتريناه معاً."
            },
            "audio": None
        },
        {
            "id": "13-3-4",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "这么漂亮的本子，不可能只贵一点儿吧？",
            "pinyin": "Zhème piàoliang de běnzi, bù kěnéng zhǐ guì yìdiǎnr ba?",
            "translation": {
                "en": "Such a beautiful notebook can't just be slightly more expensive, can it?",
                "ar": "دفتر بكل هذا الجمال لا يعقل أن يكون أغلى بقليل فقط، أليس كذلك؟"
            },
            "audio": None
        },
        {
            "id": "13-3-5",
            "role": "安妮 (Annie)",
            "hanzi": "我是在网上买的，上网买比在商店买便宜，所以能便宜一些。",
            "pinyin": "Wǒ shì zài wǎngshang mǎi de, shàngwǎng mǎi bǐ zài shāngdiàn mǎi piányi, suǒyǐ néng piányi yìxiē.",
            "translation": {
                "en": "I bought it online; buying online is cheaper than in regular stores, so it's a bit less expensive.",
                "ar": "اشتريته عبر الإنترنت، والشراء عبر الإنترنت أرخص من الشراء في المتاجر، لذلك وفرت فيه."
            },
            "audio": None
        },
        {
            "id": "13-3-6",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "那样真好！我也想上网买一个。",
            "pinyin": "Nàyàng zhēn hǎo! Wǒ yě xiǎng shàngwǎng mǎi yí ge.",
            "translation": {
                "en": "That's wonderful! I'd like to buy one online too.",
                "ar": "هذا رائع حقاً! أود أنا أيضاً أن أشتري واحداً عبر الإنترنت."
            },
            "audio": None
        },
        # Text 4: 白家月的短文 (Bai Jiayue's Narrative)
        {
            "id": "13-4-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "新年就要到了，安妮送给我一个新本子。她告诉我是在网上买的，比我的本子贵一点儿。我们班同学也送了王老师漂亮的花，希望她高高兴兴地过个新年。",
            "pinyin": "Xīnnián jiù yào dào le, Ānnī sòng gěi wǒ yí ge xīn běnzi. Tā gàosu wǒ shì zài wǎngshang mǎi de, bǐ wǒ de běnzi guì yìdiǎnr. Wǒmen bān tóngxué yě sòngle Wáng lǎoshī piàoliang de huā, xīwàng tā gāogāoxìngxìng de guò ge xīnnián.",
            "translation": {
                "en": "The New Year is almost here. Annie gave me a new notebook as a gift. She told me she bought it online and that it was slightly more expensive than mine. Our classmates also gave Teacher Wang beautiful flowers, wishing her a joyful celebration for the New Year.",
                "ar": "رأس السنة على وشك القدوم، وقد أهدتني آني دفتراً جديداً. وأخبرتني أنها اشترته عبر الإنترنت، وأنه أغلى من دفتري بقليل. كما قدم طلاب فصلنا للأستاذة وانغ باقة زهور جميلة، متمنين لها قضاء رأس سنة مفعمة بالفرح والسعادة."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Double-Object Sentences with '给' (送给 / 拿给 / 卖给)",
            "explanation": "In double-object sentences, verbs like 送, 拿, or 卖 attach 给; the indirect object (person) precedes the direct object (thing): 安妮送给我一个新本子 (Annie gave me a new notebook); 送给王老师一些花 (give Teacher Wang flowers).",
            "arExplanation": "في جمل المفعولين مع حرف '给' مثل (送给 يهدي، 拿给 يناول، 卖给 يبيع)، يأتي المفعول به الأول (الشخص) قبل المفعول به الثاني (الشيء): '安妮送给我一个新本子' (أهدتني آني دفتراً جديداً)."
        },
        {
            "point": "Comparative Sentences with Numeral-Measure Phrases or '一点儿' / '一些'",
            "explanation": "To indicate the exact or slight numerical difference, place the phrase after the adjective: 今天的词比昨天多了十个 (10 more words than yesterday); 比我的本子贵一点儿 (a little bit more expensive than mine); 姐姐比我大三岁 (older by three years).",
            "arExplanation": "للتعبير عن المقدار المحدد للفارق أو الفارق الطفيف في جملة '比'، يُوضع المقدار العددي أو '一点儿/一些' بعد الصفة مباشرة: '今天的词比昨天多了十个' (أكثر بعشر كلمات)، '比我的本子贵一点儿' (أغلى بقليل)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Respecting Teachers and Chinese Classroom Etiquette (尊师重道)",
            "detail": "In Chinese culture, teachers are deeply revered (尊师重道). When semesters conclude or New Year approaches, students frequently gift teachers potted plants, fresh flowers, or handwritten gratitude cards to acknowledge their patience and guidance.",
            "arDetail": "تحظى مهنة التعليم بمكانة رفيعة وقدسية خاصة في الثقافة الصينية انطلاقاً من مبدأ 'تبجيل المعلم وإكرام العلم' (尊师重道). ومع اقتراب العام الجديد أو انتهاء الفصول الدراسية، يحرص الطلاب على إهداء معلميهم الورود وبطاقات الشكر المكتوبة بخط اليد تعبيراً عن التقدير والامتنان."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q13-1",
            "question": "What gift did the classmates decide to buy for Teacher Wang?",
            "arQuestion": "ما الهدية التي قرر زملاء الصف شراؤها للأستاذة وانغ؟",
            "options": [
                "漂亮的花 (Beautiful flowers)",
                "一个新书包 (A new schoolbag)",
                "一块手表 (A wristwatch)",
                "一本中文书 (A Chinese book)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q13-2",
            "question": "Where did Annie purchase the beautiful notebook?",
            "arQuestion": "من أين اشترت آني ذلك الدفتر الجميل؟",
            "options": [
                "在网上买的 (Bought it online)",
                "在学校商店买的 (Bought it at the school store)",
                "在花店买的 (Bought it at the flower shop)",
                "在医院买的 (Bought it at the hospital)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q13-3",
            "question": "How many words more were there in today's lesson compared to yesterday?",
            "arQuestion": "بكم كلمة زادت مفردات درس اليوم مقارنة بالأمس؟",
            "options": [
                "多了十个词 (Ten words more)",
                "多了五个词 (Five words more)",
                "多了二十个词 (Twenty words more)",
                "多了一个词 (One word more)"
            ],
            "answerIndex": 0
        }
    ]
}

# ==========================================
# UNIT 14: 一个人过年多没意思啊 (How Boring It Is to Celebrate New Year Alone!)
# ==========================================
unit14 = {
    "id": "hsk-2-hsk3-unit-14",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 14,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第14课：一个人过年多没意思啊",
        "en": "Lesson 14: How boring it is to celebrate New Year alone!",
        "ar": "الدرس 14: كم هو ممل أن يحتفل المرء بالعام الجديد بمفرده!"
    },
    "dialogue": [
        # Text 1: 在回家路上，李文和王一飞边走边聊。
        {
            "id": "14-1-1",
            "role": "李文 (Li Wen)",
            "hanzi": "王老师，你家楼下站着一个人。",
            "pinyin": "Wáng lǎoshī, nǐ jiā lóu xià zhànzhe yí ge rén.",
            "translation": {
                "en": "Teacher Wang, there is someone standing downstairs below your apartment.",
                "ar": "أستاذة وانغ، هناك شخص يقف أسفل بنايتكِ."
            },
            "audio": None
        },
        {
            "id": "14-1-2",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "我家楼下？我看看。",
            "pinyin": "Wǒ jiā lóu xià? Wǒ kànkan.",
            "translation": {
                "en": "Downstairs below my home? Let me see.",
                "ar": "أسفل بنايتي؟ دعيني أنظر."
            },
            "audio": None
        },
        {
            "id": "14-1-3",
            "role": "李文 (Li Wen)",
            "hanzi": "那个人穿着黑色的衣服，手里还拿着一个黑色的包。",
            "pinyin": "Nàge rén chuānzhe hēisè de yīfu, shǒulǐ hái názhe yí ge hēisè de bāo.",
            "translation": {
                "en": "That person is wearing black clothes and holding a black bag in his hand.",
                "ar": "ذلك الشخص يرتدي ملابس سوداء ويحمل حقيبة سوداء في يده."
            },
            "audio": None
        },
        {
            "id": "14-1-4",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "我看见那个人了，他是我男朋友！",
            "pinyin": "Wǒ kànjiàn nàge rén le, tā shì wǒ nánpéngyou!",
            "translation": {
                "en": "I see him now—he's my boyfriend!",
                "ar": "لقد رأيته، إنه صديقي (خطيبي)!"
            },
            "audio": None
        },
        {
            "id": "14-1-5",
            "role": "李文 (Li Wen)",
            "hanzi": "哈哈，王老师，您快过去吧。",
            "pinyin": "Hāhā, Wáng lǎoshī, nín kuài guòqu ba.",
            "translation": {
                "en": "Haha, Teacher Wang, hurry on over to him!",
                "ar": "هههه، أستاذة وانغ، أسرعي بالذهاب إليه!"
            },
            "audio": None
        },
        {
            "id": "14-1-6",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "好的，李文，明天见！",
            "pinyin": "Hǎo de, Lǐ Wén, míngtiān jiàn!",
            "translation": {
                "en": "Alright, Li Wen, see you tomorrow!",
                "ar": "حسناً يا لي ون، أراك غداً!"
            },
            "audio": None
        },
        # Text 2: 惊喜相见 (The Surprise Meeting)
        {
            "id": "14-2-1",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "同乐，真是你啊！上次打电话，你说有时间过来看我，没想到这么快就来了！",
            "pinyin": "Tónglè, zhēn shì nǐ a! Shàng cì dǎ diànhuà, nǐ shuō yǒu shíjiān guòlai kàn wǒ, méi xiǎngdào zhème kuài jiù lái le!",
            "translation": {
                "en": "Tongle, it really is you! Last time we spoke on the phone, you mentioned coming to see me when you had time, but I never imagined you'd arrive this quickly!",
                "ar": "تونغله، إنه أنت حقاً! في المرة الأخيرة عندما تحدثنا هاتفياً قلت إنك ستأتي لزيارتي إذا سنح الوقت، لم أتوقع أبداً أن تأتي بهذه السرعة!"
            },
            "audio": None
        },
        {
            "id": "14-2-2",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "就要过年了，你一个人在这儿多没意思啊，所以我就早早过来了。",
            "pinyin": "Jiù yào guònián le, nǐ yí ge rén zài zhèr duō méi yìsi a, suǒyǐ wǒ jiù zǎozǎo guòlai le.",
            "translation": {
                "en": "New Year is right around the corner. How dull it would be for you to celebrate all by yourself here! So I came over early.",
                "ar": "رأس السنة على وشك الحلول، وكم سيكون الأمر مملاً وموحشاً أن تحتفلي هنا بمفردكِ! لذا جئتُ مبكراً جداً."
            },
            "audio": None
        },
        {
            "id": "14-2-3",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "你能来，我太高兴了！",
            "pinyin": "Nǐ néng lái, wǒ tài gāoxìng le!",
            "translation": {
                "en": "I'm so thrilled that you could come!",
                "ar": "أنا في غاية السعادة والسرور لحضورك!"
            },
            "audio": None
        },
        {
            "id": "14-2-4",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "一飞，你旁边这位是？",
            "pinyin": "Yīfēi, nǐ pángbiān zhè wèi shì?",
            "translation": {
                "en": "Yifei, who is this person next to you?",
                "ar": "ييفي، من هذا الشخص الذي بجانبكِ؟"
            },
            "audio": None
        },
        {
            "id": "14-2-5",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "这是我的学生李文。",
            "pinyin": "Zhè shì wǒ de xuésheng Lǐ Wén.",
            "translation": {
                "en": "This is my student, Li Wen.",
                "ar": "هذا طالبي لي ون."
            },
            "audio": None
        },
        {
            "id": "14-2-6",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "李文，你好！",
            "pinyin": "Lǐ Wén, nǐ hǎo!",
            "translation": {
                "en": "Hello, Li Wen!",
                "ar": "أهلاً يا لي ون!"
            },
            "audio": None
        },
        {
            "id": "14-2-7",
            "role": "李文 (Li Wen)",
            "hanzi": "您好！王老师，你们聊，我先走了。",
            "pinyin": "Nín hǎo! Wáng lǎoshī, nǐmen liáo, wǒ xiān zǒu le.",
            "translation": {
                "en": "Hello! Teacher Wang, I'll let you two chat; I'll take my leave first.",
                "ar": "أهلاً بحضرتك! أستاذة وانغ، سأترككما تتحدثان وسأنصرف الآن."
            },
            "audio": None
        },
        # Text 3: 在客厅聊天儿 (Chatting in the Living Room)
        {
            "id": "14-3-1",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "一飞，你住的房子真不错，很大，离学校也不远。",
            "pinyin": "Yīfēi, nǐ zhù de fángzi zhēn búcuò, hěn dà, lí xuéxiào yě bù yuǎn.",
            "translation": {
                "en": "Yifei, your apartment is really nice—very spacious, and not far from the university.",
                "ar": "ييفي، الشقة التي تسكنين فيها رائعة حقاً، واسعة وقريبة من الجامعة أيضاً."
            },
            "audio": None
        },
        {
            "id": "14-3-2",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "是啊！我楼下还住着一家中国人，他们人很好。",
            "pinyin": "Shì a! Wǒ lóu xià hái zhùzhe yì jiā Zhōngguó rén, tāmen rén hěn hǎo.",
            "translation": {
                "en": "Yes! A Chinese family also lives downstairs below me; they are wonderful people.",
                "ar": "نعم! تسكن أسفلي أيضاً عائلة صينية، وهم أناس طيبون للغاية."
            },
            "audio": None
        },
        {
            "id": "14-3-3",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "这样你有事情就可以找他们帮忙。",
            "pinyin": "Zhèyàng nǐ yǒu shìqing jiù kěyǐ zhǎo tāmen bāngmáng.",
            "translation": {
                "en": "That way, if you ever need anything, you can turn to them for help.",
                "ar": "بهذا إذا احتجتِ أي مساعدة يمكنكِ اللجوء إليهم."
            },
            "audio": None
        },
        {
            "id": "14-3-4",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "对，我也帮他们家的小孩儿学中文。",
            "pinyin": "Duì, wǒ yě bāng tāmen jiā de xiǎoháir xué Zhōngwén.",
            "translation": {
                "en": "Right, and I also help their young child study Chinese.",
                "ar": "صحيح، وأنا أساعد طفلهم في تعلم اللغة الصينية أيضاً."
            },
            "audio": None
        },
        {
            "id": "14-3-5",
            "role": "杨同乐 (Yang Tongle)",
            "hanzi": "我记得你跟我说过，是个女孩儿，学得也很好。",
            "pinyin": "Wǒ jìde nǐ gēn wǒ shuōguo, shì ge nǚháir, xué de yě hěn hǎo.",
            "translation": {
                "en": "I remember you telling me about her—she's a little girl and studies very well.",
                "ar": "أتذكر أنكِ أخبرتني عنها، إنها فتاة صغيرة وتتعلم بجد وتفوق."
            },
            "audio": None
        },
        {
            "id": "14-3-6",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "是的，她经常跑上来找我玩。",
            "pinyin": "Shì de, tā jīngcháng pǎo shànglai zhǎo wǒ wán.",
            "translation": {
                "en": "Yes, she often runs upstairs to hang out with me.",
                "ar": "نعم، وهي تصعد الدرج كثيراً للمجيء واللعب معي."
            },
            "audio": None
        },
        # Text 4: 王一飞讲述 (Wang Yifei's Narrative)
        {
            "id": "14-4-1",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "我男朋友姓杨，叫杨同乐。他高个子、大眼睛，唱歌唱得很好，跳舞跳得也不错。他和我有姐姐一起工作，是姐姐介绍我们认识的。他告诉我，从见到我的第一天开始，他就喜欢上我了。",
            "pinyin": "Wǒ nánpéngyou xìng Yáng, jiào Yáng Tónglè. Tā gāo gèzi, dà yǎnjing, chànggē chàng de hěn hǎo, tiàowǔ tiào de yě búcuò. Tā hé wǒ jiějie yìqǐ gōngzuò, shì jiějie jièshào wǒmen rènshi de. Tā gàosu wǒ, cóng jiàndào wǒ de dì-yī tiān kāishǐ, tā jiù xǐhuanshang wǒ le.",
            "translation": {
                "en": "My boyfriend's surname is Yang, and his full name is Yang Tongle. He is tall with big eyes; he sings very well and dances quite well too. He works together with my older sister, and it was my sister who introduced us. He told me that from the very first day he met me, he fell in love with me.",
                "ar": "اسم عائلة صديقي هو يانغ، واسمه الكامل يانغ تونغله. وهو طويل القامة، وذو عينين واسعتين، يغني ببراعة ويرقص بشكل رائع أيضاً. وهو يعمل مع أختي الكبرى في نفس المكان، وأختي هي التي عرفتنا على بعضنا. وقد أخبرني أنه منذ أول يوم رآني فيه، وقع في حبي."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Existential Sentences with '着' (存现句: Location + Verb + 着 + Noun)",
            "explanation": "Describes what or who is located in a specific place: 你家楼下站着一个人 (There is a person standing downstairs); 楼下还住着一家中国人 (A Chinese family also lives downstairs).",
            "arExplanation": "تُستخدم الجملة الدالة على الوجود والحضور (存现句) لبيان وجود شخص أو شيء في مكان معين (المكان + الفعل + 着 + الاسم): '你家楼下站着一个人' (يقف شخص أسفل بنايتكِ)."
        },
        {
            "point": "Exclamatory Adverb of Degree '多' (duō - How...!)",
            "explanation": "Used in exclamations to convey high intensity: 一个人在这儿多没意思啊！ (How boring it is to be here alone!); 我们一起去多好啊！ (How wonderful it would be if we went together!).",
            "arExplanation": "يُستخدم ظرف الدرجة '多' في الجمل التعجبية للتعبير عن شدة التأثر أو عمق الصفة: '一个人在这儿多没意思啊！' (كم هو موحش وممل البقاء هنا وحيداً!)."
        },
        {
            "point": "Compound Direction Complements (复合趋向补语: 走上去 / 跑上来)",
            "explanation": "Combines 上/下/进/出/回/过 with 来 or 去 after a verb to signify direction towards or away from the speaker: 跑上来 (run up towards speaker); 走上去 (walk up away from speaker); 站起来 (stand up).",
            "arExplanation": "تتكون متممات الاتجاه المركبة من أفعال الاتجاه (上/下/进/出/回) متبوعة بـ (来 يأتي نحو المتكلم / 去 يبتعد عن المتكلم): '跑上来' (يركض صاعداً نحو المتكلم)، '走上去' (يصعد سيراً مبتعداً)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Spring Festival Reunion & Traveling to Companions (过年与团圆)",
            "detail": "During Chinese New Year (春节 / 过年), loneliness is contrary to the spirit of 'tuányuán' (团圆 - family togetherness). Friends and partners travel vast distances so that their loved ones do not spend the holidays isolated, sharing dumplings, reunion dinners, and Spring Festival joy.",
            "arDetail": "يُعد عيد الربيع (رأس السنة الصينية الجديدة) أهم عيد للم شمل العائلات والأحبة (团圆). وتعتبر الوحدة في هذا العيد أمراً موحشاً، لذا يقطع الأحباء والأصدقاء مسافات شاسعة لكيلا يبقى أحباؤهم بمفردهم، فيتشاركون معاً بهجة العيد ودفء اللقاء."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q14-1",
            "question": "Who was the person standing downstairs below Teacher Wang's apartment?",
            "arQuestion": "من كان الشخص الواقف أسفل بناية الأستاذة وانغ؟",
            "options": [
                "她的男朋友杨同乐 (Her boyfriend, Yang Tongle)",
                "她的学生李文 (Her student, Li Wen)",
                "她的姐姐王一雪 (Her sister, Wang Yixue)",
                "花店的服务员 (The flower shop clerk)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q14-2",
            "question": "Why did Yang Tongle travel over early to visit Wang Yifei?",
            "arQuestion": "لماذا جاء يانغ تونغله مبكراً لزيارة وانغ ييفي؟",
            "options": [
                "因为快过年了，觉得她一个人过年没意思 (Because New Year was coming, and he felt celebrating alone would be lonely)",
                "因为他要在北京找工作 (Because he wanted to find a job in Beijing)",
                "因为他要教小孩学中文 (Because he wanted to teach children Chinese)",
                "因为他的房子坏了 (Because his own house was damaged)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q14-3",
            "question": "Who introduced Wang Yifei and Yang Tongle to each other?",
            "arQuestion": "من الذي عرف وانغ ييفي ويانغ تونغله ببعضهما؟",
            "options": [
                "王一飞的姐姐王一雪 (Wang Yifei's older sister, Wang Yixue)",
                "学生李文 (Student Li Wen)",
                "白家月 (Bai Jiayue)",
                "陈天中 (Chen Tianzhong)"
            ],
            "answerIndex": 0
        }
    ]
}

# ==========================================
# UNIT 15: 我想再去一次中国 (I Want to Go to China Once More)
# ==========================================
unit15 = {
    "id": "hsk-2-hsk3-unit-15",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 15,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第15课：我想再去一次中国",
        "en": "Lesson 15: I want to go to China once more",
        "ar": "الدرس 15: أريد أن أسافر إلى الصين مرة أخرى"
    },
    "dialogue": [
        # Text 1: 在教室，同学们在考试。
        {
            "id": "15-1-1",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "考试就要开始了，请大家写上姓名，写好后就可以做题了。",
            "pinyin": "Kǎoshì jiù yào kāishǐ le, qǐng dàjiā xiěshang xìngmíng, xiěhǎo hòu jiù kěyǐ zuò tí le.",
            "translation": {
                "en": "The exam is about to begin. Everyone please write down your name; once you have written it, you may start answering questions.",
                "ar": "الامتحان على وشك البدء، يرجى من الجميع كتابة الاسم، وبعد ذلك يمكنكم البدء في الإجابة."
            },
            "audio": None
        },
        {
            "id": "15-1-2",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "老师，我做完了。",
            "pinyin": "Lǎoshī, wǒ zuòwán le.",
            "translation": {
                "en": "Teacher, I'm finished.",
                "ar": "أستاذة، لقد انتهيت من الإجابة."
            },
            "audio": None
        },
        {
            "id": "15-1-3",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "老师，我也做完了。",
            "pinyin": "Lǎoshī, wǒ yě zuòwán le.",
            "translation": {
                "en": "Teacher, I'm finished too.",
                "ar": "أستاذة، وأنا انتهيت أيضاً."
            },
            "audio": None
        },
        {
            "id": "15-1-4",
            "role": "王一飞 (Wang Yifei)",
            "hanzi": "对了，你们考完试要去哪儿？",
            "pinyin": "Duì le, nǐmen kǎowán shì yào qù nǎr?",
            "translation": {
                "en": "By the way, where are you all going after finishing the exam?",
                "ar": "بالمناسبة، إلى أين ستذهبون جميعاً بعد الانتهاء من الامتحان؟"
            },
            "audio": None
        },
        {
            "id": "15-1-5",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我想再去一次中国，因为那里太好玩了！",
            "pinyin": "Wǒ xiǎng zài qù yí cì Zhōngguó, yīnwèi nàli tài hǎowán le!",
            "translation": {
                "en": "I want to go to China once more, because it's so much fun there!",
                "ar": "أود السفر إلى الصين مرة أخرى، لأن الأجواء هناك ممتعة للغاية!"
            },
            "audio": None
        },
        # Text 2: 考完试聊旅游 (Talking About Travel After the Exam)
        {
            "id": "15-2-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "考完试了，我现在可以出国旅游了。",
            "pinyin": "Kǎowán shì le, wǒ xiànzài kěyǐ chūguó lǚyóu le.",
            "translation": {
                "en": "Exams are finished! Now I can travel abroad.",
                "ar": "انتهت الامتحانات! يمكنني الآن السفر للسياحة في الخارج."
            },
            "audio": None
        },
        {
            "id": "15-2-2",
            "role": "李文 (Li Wen)",
            "hanzi": "你要去哪儿？",
            "pinyin": "Nǐ yào qù nǎr?",
            "translation": {
                "en": "Where do you plan to go?",
                "ar": "إلى أين تخططين للذهاب؟"
            },
            "audio": None
        },
        {
            "id": "15-2-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我要再去一次北京。",
            "pinyin": "Wǒ yào zài qù yí cì Běijīng.",
            "translation": {
                "en": "I'm going to Beijing once more.",
                "ar": "سأسافر إلى بكين مرة أخرى."
            },
            "audio": None
        },
        {
            "id": "15-2-4",
            "role": "李文 (Li Wen)",
            "hanzi": "为什么还去北京？",
            "pinyin": "Wèishénme hái qù Běijīng?",
            "translation": {
                "en": "Why go to Beijing again?",
                "ar": "لماذا تسافرين إلى بكين مجدداً؟"
            },
            "audio": None
        },
        {
            "id": "15-2-5",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "因为我想再吃一次烤鸭，再喝一次奶茶，再去颐和园看一次风景……",
            "pinyin": "Yīnwèi wǒ xiǎng zài chī yí cì kǎoyā, zài hē yí cì nǎichá, zài qù Yíhé Yuán kàn yí cì fēngjǐng...",
            "translation": {
                "en": "Because I want to eat Peking duck again, drink bubble tea again, visit the Summer Palace to enjoy the sights once more...",
                "ar": "لأنني أريد تناول بط بكين المشوي مرة أخرى، وشرب شاي الحليب مجدداً، والذهاب إلى القصر الصيفي لرؤية المعالم الخلابة مرة أخرى..."
            },
            "audio": None
        },
        {
            "id": "15-2-6",
            "role": "李文 (Li Wen)",
            "hanzi": "哈哈，你已经去过两次北京了，还要再去！",
            "pinyin": "Hāhā, nǐ yǐjīng qùguo liǎng cì Běijīng le, hái yào zài qù!",
            "translation": {
                "en": "Haha, you've already been to Beijing twice, and you still want to go again!",
                "ar": "هههه، لقد زرتِ بكين مرتين من قبل، وما زلتِ ترغبين في الذهاب إليها مجدداً!"
            },
            "audio": None
        },
        {
            "id": "15-2-7",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "是啊，北京太吸引人了。我已经买好了门票，一放假就出门！",
            "pinyin": "Shì a, Běijīng tài xīyǐn rén le. Wǒ yǐjīng mǎihǎo le ménpiào, yí fàngjià jiù chūmén!",
            "translation": {
                "en": "Yes, Beijing is so captivating. I've already purchased entrance tickets; as soon as holiday begins, I'm heading out!",
                "ar": "نعم، فبكين ساحرة وجذابة للغاية. لقد اشتريت تذاكر الدخول بالفعل، وسأنطلق فور بدء العطلة!"
            },
            "audio": None
        },
        # Text 3: 聊机票与回国 (Talking About Flight Tickets)
        {
            "id": "15-3-1",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "李文，你有一年没回国了吧？",
            "pinyin": "Lǐ Wén, nǐ yǒu yì nián méi huí guó le ba?",
            "translation": {
                "en": "Li Wen, it's been about a year since you last returned to your home country, right?",
                "ar": "لي ون، لقد مضت قرابة سنة كاملة لم تعد فيها إلى وطنك، أليس كذلك؟"
            },
            "audio": None
        },
        {
            "id": "15-3-2",
            "role": "李文 (Li Wen)",
            "hanzi": "不到一年。我六月的时候回去了一次。",
            "pinyin": "Búdào yì nián. Wǒ liùyuè de shíhou huíqu le yí cì.",
            "translation": {
                "en": "Not quite a year. I went back once in June.",
                "ar": "أقل من عام؛ لقد عدت مرة واحدة في شهر يونيو."
            },
            "audio": None
        },
        {
            "id": "15-3-3",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我怎么忘了？还是我送你去机场的呢。",
            "pinyin": "Wǒ zěnme wàng le? Hái shì wǒ sòng nǐ qù jīchǎng de ne.",
            "translation": {
                "en": "How could I forget? It was actually me who took you to the airport!",
                "ar": "كيف نسيت ذلك؟ لقد كنت أنا من أوصلتك إلى المطار في الواقع!"
            },
            "audio": None
        },
        {
            "id": "15-3-4",
            "role": "李文 (Li Wen)",
            "hanzi": "是啊。",
            "pinyin": "Shì a.",
            "translation": {
                "en": "Yes, indeed.",
                "ar": "نعم، هذا صحيح."
            },
            "audio": None
        },
        {
            "id": "15-3-5",
            "role": "白家月 (Bai Jiayue)",
            "hanzi": "我记得你那次的机票很便宜。",
            "pinyin": "Wǒ jìde nǐ nà cì de jīpiào hěn piányi.",
            "translation": {
                "en": "I remember your plane ticket that time was very inexpensive.",
                "ar": "أتذكر أن تذكرة طيرانك في تلك المرة كانت رخيصة جداً."
            },
            "audio": None
        },
        {
            "id": "15-3-6",
            "role": "李文 (Li Wen)",
            "hanzi": "没错，可能因为那个时候去北京的人不多吧。这次的机票虽然有点儿贵，但想到就要飞北京了，我还是很高兴！",
            "pinyin": "Méi cuò, kěnéng yīnwèi nàge shíhou qù Běijīng de rén bù duō ba. Zhè cì de jīpiào suīrán yǒudiǎnr guì, dàn xiǎngdào jiù yào fēi Běijīng le, wǒ hái shì hěn gāoxìng!",
            "translation": {
                "en": "Exactly, probably because fewer people were traveling to Beijing back then. Although the ticket this time is slightly expensive, just thinking about flying to Beijing soon still makes me very happy!",
                "ar": "صحيح، ربما لأنه لم يكن هناك الكثير من المسافرين إلى بكين في ذلك الوقت. ورغم أن تذكرة هذه المرة أغلى قليلاً، إلا أن مجرد التفكير في أنني سأطير إلى بكين قريباً يجعلني سعيداً للغاية!"
            },
            "audio": None
        },
        # Text 4: 李文的日记 (Li Wen's Diary)
        {
            "id": "15-4-1",
            "role": "李文 (Li Wen)",
            "hanzi": "今年六月我回了一次北京，现在有半年多没回去了。我有点儿想家。春节就要到了，我要回去过年。家月也要去北京——我们都是星期五的飞机。家月说我们好像小鸟，一起飞去北京，再一起飞回来。",
            "pinyin": "Jīnnián liùyuè wǒ huíle yí cì Běijīng, xiànzài yǒu bàn nián duō méi huíqu le. Wǒ yǒudiǎnr xiǎngjiā. Chūnjié jiù yào dào le, wǒ yào huíqu guònián. Jiāyuè yě yào qù Běijīng—wǒmen dōu shì xīngqīwǔ de fēijī. Jiāyuè shuō wǒmen hǎoxiàng xiǎoniǎo, yìqǐ fēiqù Běijīng, zài yìqǐ fēihuí lái.",
            "translation": {
                "en": "I went back to Beijing once this June, and now it has been over six months since I last went back. I miss home a bit. The Spring Festival is coming, and I'll be going back to celebrate it. Jiayue is also going to Beijing—we're both on the same flight this Friday. Jiayue said we are like little birds, flying to Beijing together and then flying back here together.",
                "ar": "عدت إلى بكين مرة واحدة في شهر يونيو الماضي، وها قد مضى أكثر من ستة أشهر دون أن أعود إليها. يراودني الحنين إلى الوطن والبيت. عيد الربيع يطرق الأبواب، وسأعود للاحتفال به هناك. وجيايوي ستسافر إلى بكين أيضاً—وكلانا على متن نفس طائرة يوم الجمعة. قالت جيايوي إننا نشبه طائرين صغيرين، نطير معاً إلى بكين، ثم نطير عائدين إلى هنا معاً."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Complement of Frequency (动量补语: Verb + [Object] + Numeral + 次)",
            "explanation": "Expresses the frequency/number of times an action occurs: 我想再去一次中国 (I want to go to China once more); 回去了一次 (went back once); 去过两次北京 (been to Beijing twice). When the object is a place or person, it can appear either before or after '次'.",
            "arExplanation": "يُستخدم متمم عدد المرات (动量补语) بوضع العدد مع كلمة '次' بعد الفعل للدلالة على تكرار الحدث: '我想再去一次中国' (أريد السفر إلى الصين مرة أخرى)، '回去了 一次' (عدتُ مرة واحدة). وإذا كان المفعول اسم مكان يجوز وضعه قبل أو بعد '次'."
        },
        {
            "point": "The '有' Construction Expressing Duration (有 + Time Duration)",
            "explanation": "'有' before a time phrase indicates reaching or accumulating a significant period: 你有一年没回国了吧？ (It's been a year since you returned, right?); 现在有半年多没回去了 (Now it's been over six months since I returned).",
            "arExplanation": "تُستخدم '有' قبل التعبيرات الزمنية للدلالة على بلوغ أو استغراق فترة زمنية معتبرة: '你有一年没回国了吧？' (لقد مضت قرابة سنة لم تعد فيها لوطنك، أليس كذلك؟)."
        }
    ],
    "culturalNotes": [
        {
            "title": "China's Visa-Free Policies & Classic Beijing Landmarks (免签政策与北京胜景)",
            "detail": "China has implemented expansive visa-free transit policies (such as 144-hour and 240-hour visa-free transit and unilateral visa exemptions) allowing international travelers to explore historical marvels like the Summer Palace (颐和园), the Forbidden City (故宫), and the Great Wall (长城) with unprecedented convenience.",
            "arDetail": "طبقت الصين سياسات واسعة للإعفاء من التأشيرة وتسهيل الترانزيت (مثل ترانزيت الـ 144 ساعة والـ 240 ساعة والإعفاءات الثنائية)، مما يتيح للزوار والطلاب الدوليين استكشاف معالم بكين التاريخية الخالدة مثل القصر الصيفي (颐和园)، والمدينة المحرمة، وسور الصين العظيم بكل سهولة ويسر."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q15-1",
            "question": "What day of the week is the flight to Beijing for Li Wen and Bai Jiayue?",
            "arQuestion": "في أي يوم من أيام الأسبوع موعد رحلة الطيران إلى بكين لـ لي ون وباي جيايوي؟",
            "options": [
                "星期五 (Friday)",
                "星期六 (Saturday)",
                "星期天 (Sunday)",
                "星期一 (Monday)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q15-2",
            "question": "Why does Bai Jiayue want to visit Beijing again?",
            "arQuestion": "لماذا ترغب باي جيايوي في زيارة بكين مرة أخرى؟",
            "options": [
                "再吃一次烤鸭，再去颐和园看风景 (To eat Peking duck again and visit the Summer Palace)",
                "为了在北京找工作 (To find a job in Beijing)",
                "为了看医生 (To see a doctor)",
                "为了买衣服 (To buy clothes)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q15-3",
            "question": "How did Bai Jiayue poetically describe their journey to Beijing and back?",
            "arQuestion": "كيف وصفت باي جيايوي رحلتهما معاً إلى بكين والعودة منها بشكل شاعري؟",
            "options": [
                "好像两只小鸟一起飞去，再一起飞回来 (Like two little birds flying there together, then flying back together)",
                "好像快速的火车 (Like a high-speed train)",
                "好像天上的白云 (Like white clouds in the sky)",
                "好像春天的花朵 (Like spring flowers)"
            ],
            "answerIndex": 0
        }
    ]
}

# Write out all 5 units
units = [unit11, unit12, unit13, unit14, unit15]
for u in units:
    path = os.path.join(out_dir, f"unit-{u['unitId']}.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(u, f, ensure_ascii=False, indent=2)
    print(f"Successfully wrote {path} ({len(u['dialogue'])} turns)")

print("All HSK 2 New 3.0 Lessons 11 to 15 generated successfully!")
