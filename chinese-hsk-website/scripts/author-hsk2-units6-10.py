# -*- coding: utf-8 -*-
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

out_dir = "chinese-hsk-website/source-data/conversations/hsk-2/hsk3"
os.makedirs(out_dir, exist_ok=True)

# ==========================================
# UNIT 6: 小雪，生日快乐！ (Happy Birthday, Xiaoxue!)
# ==========================================
unit6 = {
    "id": "hsk-2-hsk3-unit-6",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 6,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第6课：小雪，生日快乐！",
        "en": "Lesson 6: Happy birthday, Xiaoxue!",
        "ar": "الدرس 6: عيد ميلاد سعيد يا شياوشيويه!"
    },
    "dialogue": [
        # Text 1: 在家里，刘明和王一雪在聊天儿。
        {
            "id": "6-1-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "明天就是女儿的生日了。",
            "pinyin": "Míngtiān jiù shì nǚ'ér de shēngrì le.",
            "translation": {
                "en": "Tomorrow is our daughter's birthday.",
                "ar": "غداً هو يوم ميلاد ابنتنا."
            },
            "audio": None
        },
        {
            "id": "6-1-2",
            "role": "刘明 (Liu Ming)",
            "hanzi": "你不说，我还真忘了。我们给她准备个什么礼物呢？",
            "pinyin": "Nǐ bù shuō, wǒ hái zhēn wàng le. Wǒmen gěi tā zhǔnbèi ge shénme lǐwù ne?",
            "translation": {
                "en": "If you hadn't mentioned it, I would have completely forgotten. What gift should we prepare for her?",
                "ar": "لو لم تذكري ذلك لكنت نسيت حقاً. ما الهدية التي يجب أن نعدها لها؟"
            },
            "audio": None
        },
        {
            "id": "6-1-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "她喜欢画画，你觉得画笔怎么样？",
            "pinyin": "Tā xǐhuan huà huà, nǐ juéde huàbǐ zěnmeyàng?",
            "translation": {
                "en": "She loves drawing. What do you think about color pens?",
                "ar": "هي تحب الرسم، ما رأيك في أقلام الرسم والتلوين؟"
            },
            "audio": None
        },
        {
            "id": "6-1-4",
            "role": "刘明 (Liu Ming)",
            "hanzi": "就送画笔吧！",
            "pinyin": "Jiù sòng huàbǐ ba!",
            "translation": {
                "en": "Let's give her color pens then!",
                "ar": "فلنهدها أقلام التلوين إذاً!"
            },
            "audio": None
        },
        {
            "id": "6-1-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "那我明天上午就去买。",
            "pinyin": "Nà wǒ míngtiān shàngwǔ jiù qù mǎi.",
            "translation": {
                "en": "Then I'll go buy them tomorrow morning.",
                "ar": "سأذهب لشرائها صباح الغد إذاً."
            },
            "audio": None
        },
        {
            "id": "6-1-6",
            "role": "刘明 (Liu Ming)",
            "hanzi": "好的！我再给她买个大大的生日蛋糕。",
            "pinyin": "Hǎo de! Wǒ zài gěi tā mǎi ge dàdà de shēngrì dàngāo.",
            "translation": {
                "en": "Great! I'll also buy her a big birthday cake.",
                "ar": "حسناً! وسأشتري لها أيضاً كعكة عيد ميلاد كبيرة جداً."
            },
            "audio": None
        },
        # Text 2: 送礼物 (Giving the gift)
        {
            "id": "6-2-1",
            "role": "刘明 (Liu Ming)",
            "hanzi": "小雪，生日快乐！",
            "pinyin": "Xiǎoxuě, shēngrì kuàilè!",
            "translation": {
                "en": "Xiaoxue, happy birthday!",
                "ar": "شياوشيويه، عيد ميلاد سعيد!"
            },
            "audio": None
        },
        {
            "id": "6-2-2",
            "role": "刘小明 (Liu Xiaoming)",
            "hanzi": "姐姐，生日快乐！",
            "pinyin": "Jiějie, shēngrì kuàilè!",
            "translation": {
                "en": "Sister, happy birthday!",
                "ar": "أختي الكبرى، عيد ميلاد سعيد!"
            },
            "audio": None
        },
        {
            "id": "6-2-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "小雪，这是爸爸、妈妈送你的礼物。",
            "pinyin": "Xiǎoxuě, zhè shì bàba, māma sòng nǐ de lǐwù.",
            "translation": {
                "en": "Xiaoxue, here is the gift from Dad and Mom.",
                "ar": "شياوشيويه، هذه هدية من والدكِ ووالدتكِ."
            },
            "audio": None
        },
        {
            "id": "6-2-4",
            "role": "刘明 (Liu Ming)",
            "hanzi": "你打开看看喜欢不喜欢。",
            "pinyin": "Nǐ dǎkāi kànkan xǐhuan bù xǐhuan.",
            "translation": {
                "en": "Open it and see if you like it.",
                "ar": "افتحيها وانظري إن كانت تعجبكِ."
            },
            "audio": None
        },
        {
            "id": "6-2-5",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "画笔！我很喜欢！",
            "pinyin": "Huàbǐ! Wǒ hěn xǐhuan!",
            "translation": {
                "en": "Color pens! I love them so much!",
                "ar": "أقلام تلوين! أحببتها كثيراً!"
            },
            "audio": None
        },
        {
            "id": "6-2-6",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "那你想画点儿什么？",
            "pinyin": "Nà nǐ xiǎng huà diǎnr shénme?",
            "translation": {
                "en": "So what would you like to draw?",
                "ar": "إذاً ماذا تودين أن ترسمي؟"
            },
            "audio": None
        },
        {
            "id": "6-2-7",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "画我们的家！有爸爸、妈妈、弟弟，还有黑色的狗、白色的猫什么的。",
            "pinyin": "Huà wǒmen de jiā! Yǒu bàba, māma, dìdi, hái yǒu hēisè de gǒu, báisè de māo shénmede.",
            "translation": {
                "en": "Draw our home! With Dad, Mom, little brother, and our black dog, white cat, and all the rest.",
                "ar": "سأرسم بيتنا! فيه أبي، وأمي، وأخي الصغير، والكلب الأسود، والقطة البيضاء، وغيرها!"
            },
            "audio": None
        },
        {
            "id": "6-2-8",
            "role": "刘小明 (Liu Xiaoming)",
            "hanzi": "那我要画一个穿白色衣服的姐姐。",
            "pinyin": "Nà wǒ yào huà yí ge chuān báisè yīfu de jiějie.",
            "translation": {
                "en": "Then I want to draw an older sister wearing white clothes.",
                "ar": "إذاً أريد أنا أن أرسم أختي وهي ترتدي ملابس بيضاء."
            },
            "audio": None
        },
        # Text 3: 庆祝生日 (Birthday Dinner)
        {
            "id": "6-3-1",
            "role": "刘明 (Liu Ming)",
            "hanzi": "小雪，看看今天有什么好吃的。",
            "pinyin": "Xiǎoxuě, kànkan jīntiān yǒu shénme hǎochī de.",
            "translation": {
                "en": "Xiaoxue, take a look at all the delicious food we have today.",
                "ar": "شياوشيويه، انظري إلى ما لدينا من طعام شهي اليوم."
            },
            "audio": None
        },
        {
            "id": "6-3-2",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "长长的面条儿，大大的蛋糕！",
            "pinyin": "Chángcháng de miàntiáor, dàdà de dàngāo!",
            "translation": {
                "en": "Long longevity noodles and a big cake!",
                "ar": "نودلز طويلة وكعكة كبيرة جداً!"
            },
            "audio": None
        },
        {
            "id": "6-3-3",
            "role": "刘明 (Liu Ming)",
            "hanzi": "看，还有鱼啊肉啊什么的，都是你最喜欢的。",
            "pinyin": "Kàn, hái yǒu yú a ròu a shénmede, dōu shì nǐ zuì xǐhuan de.",
            "translation": {
                "en": "Look, there's also fish, meat, and so on—all of your favorites.",
                "ar": "انظري، هناك سمك ولحم وغير ذلك، وكلها من أطباقكِ المفضلة."
            },
            "audio": None
        },
        {
            "id": "6-3-4",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "谢谢爸爸、妈妈！",
            "pinyin": "Xièxie bàba, māma!",
            "translation": {
                "en": "Thank you, Dad and Mom!",
                "ar": "شكراً لكما يا أبي وأمي!"
            },
            "audio": None
        },
        {
            "id": "6-3-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "快去叫弟弟过来吃饭吧，吃完饭我们还要出去玩呢。",
            "pinyin": "Kuài qù jiào dìdi guòlai chī fàn ba, chīwán fàn wǒmen hái yào chūqu wán ne.",
            "translation": {
                "en": "Hurry and call your little brother over to eat. After dinner, we're also going out to play!",
                "ar": "أسرعي ونادي أخاكِ الصغير ليتناول الطعام، فبعد العشاء سنخرج للمرح والتنزه!"
            },
            "audio": None
        },
        {
            "id": "6-3-6",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "过生日真好啊！",
            "pinyin": "Guò shēngrì zhēn hǎo a!",
            "translation": {
                "en": "Celebrating birthdays is so wonderful!",
                "ar": "كم هو رائع الاحتفال بعيد الميلاد!"
            },
            "audio": None
        },
        {
            "id": "6-3-7",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "是的，过生日就要吃好吃的，还要高高兴兴地玩。",
            "pinyin": "Shì de, guò shēngrì jiù yào chī hǎochī de, hái yào gāogāoxìngxìng de wán.",
            "translation": {
                "en": "That's right! On your birthday, you should eat delicious treats and have lots of fun joyfully.",
                "ar": "نعم، في عيد الميلاد يجب أن نتناول الطعام اللذيذ ونستمتع بمرح وسرور."
            },
            "audio": None
        },
        # Text 4: 王一雪的日记 (Wang Yixue's Diary)
        {
            "id": "6-4-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "今天是女儿的生日。我们买了蛋糕，做了面条儿，还做了鱼啊肉啊什么的。吃完晚饭，全家人去看了个电影。回家后，孩子们早早地就上床了。明天不上学，他们说要舒舒服服地睡一觉，让我们晚点儿叫他们起床。这是很忙、很累，但很快乐的一天。",
            "pinyin": "Jīntiān shì nǚ'ér de shēngrì. Wǒmen mǎile dàngāo, zuòle miàntiáor, hái zuòle yú a ròu a shénmede. Chīwán wǎnfàn, quán jiā rén qù kànle ge diànyǐng. Huí jiā hòu, háizimen zǎozǎo de jiù shàng chuáng le. Míngtiān bù shàngxué, tāmen shuō yào shūshūfúfú de shuì yí jiào, ràng wǒmen wǎndiǎnr jiào tāmen qǐchuáng. Zhè shì hěn máng, hěn lèi, dàn hěn kuàilè de yì tiān.",
            "translation": {
                "en": "Today was our daughter's birthday. We bought a cake, made noodles, and cooked fish, meat, and other dishes. After dinner, the whole family went to watch a movie. When we got home, the children went to bed early. Since there is no school tomorrow, they said they wanted to have a sound, comfortable sleep and asked us to wake them up a bit later. It was a busy, tiring, yet very happy day.",
                "ar": "اليوم كان عيد ميلاد ابنتنا. اشترينا كعكة، وصنعنا النودلز، وطهونا السمك واللحم وما شابه. بعد العشاء، ذهبت العائلة بأكملها لمشاهدة فيلم سينمائي. وبعد العودة للبيت، أوى الأطفال إلى الفراش مبكراً. وبما أنه لا توجد مدرسة غداً، فقد قالوا إنهم يريدون النوم براحة تامة وطلبوا منا إيقاظهم في وقت متأخر قليلاً. لقد كان يوماً حافلاً ومتعباً، لكنه مليء بالسعادة والبهجة."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Adjective Reduplication (形容词重叠: AA / AABB)",
            "explanation": "Monosyllabic adjectives reduplicate as 'AA' (大大, 长长, 早早) and disyllabic adjectives as 'AABB' (高高兴兴, 舒舒服服, 漂漂亮亮). Reduplication conveys vividness, deep degree, or affectionate warmth.",
            "arExplanation": "تكرار الصفات الأحادية على وزن 'AA' (مثل: 大大 كبير جداً، 长长 طويل)، والصفات الثنائية على وزن 'AABB' (مثل: 高高兴兴 بفرح وسرور، 舒舒服服 براحة تامة). يفيد التكرار التوكيد وزيادة درجة الوصف والتعبير عن الود والمحبة."
        },
        {
            "point": "The Set Phrase '什么的' (And So On / And The Like)",
            "explanation": "Attached at the end of an enumerated list to indicate 'and so forth' or 'and things like that': 鱼啊肉啊什么的 (fish, meat, and the like); 狗、猫什么的 (dogs, cats, and so on).",
            "arExplanation": "يُضاف التعبير '什么的' في نهاية سرد عناصر للدلالة على 'وما شابه ذلك' أو 'وغيرها': '鱼啊肉啊什么的' (سمك ولحم وما شابه)."
        },
        {
            "point": "Structural Particle '地' (de) for Manner Adverbials",
            "explanation": "Placed between an adjective/adverbial modifier and a verb to describe the manner or state of the action: 高高兴兴地玩 (play joyfully); 早早地就上床了 (went to bed early); 舒舒服服地睡一觉 (sleep soundly and comfortably).",
            "arExplanation": "تُوضع أداة الربط التركيبية '地' بين الصفة أو الظرف والفعل لوصف هيئة أو كيفية أداء الفعل: '高高兴兴地玩' (يمرح بفرح)، '早早地就上床了' (ذهب إلى الفراش مبكراً)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Longevity Noodles (长寿面) & Chinese Birthday Traditions",
            "detail": "In Chinese culture, eating long noodles on one's birthday is an essential tradition. Because noodles are unbroken and long, they symbolize long life, good health, and longevity (长寿). Today, Chinese families combine this ancient tradition with Western-style birthday cakes and family cinema outings.",
            "arDetail": "في الثقافة الصينية، يُعد تناول نودلز طول العمر (长寿面) تقليداً أساسياً في أعياد الميلاد؛ فطول خيوط النودلز يرمز إلى العمر المديد والصحة والبركة. واليوم، تدمج العائلات الصينية بين هذا التقليد الأصيل وكعكة عيد الميلاد والخروج في نزهة عائلية."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q6-1",
            "question": "What gift did Liu Ming and Wang Yixue prepare for their daughter Xiaoxue?",
            "arQuestion": "ما الهدية التي أعدها ليو مينغ ووانغ ييشيويه لابنتهما شياوشيويه؟",
            "options": [
                "画笔和蛋糕 (Color pens and a cake)",
                "新衣服和鞋子 (New clothes and shoes)",
                "一只小狗 (A puppy)",
                "一块新书包 (A new schoolbag)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q6-2",
            "question": "Why do Chinese people traditionally eat noodles on birthdays?",
            "arQuestion": "لماذا يتناول الصينيون النودلز تقليدياً في أعياد الميلاد؟",
            "options": [
                "因为面条长长的，寓意长寿 (Because long noodles symbolize longevity)",
                "因为做面条最便宜 (Because noodles are cheapest to make)",
                "因为面条是甜的 (Because noodles are sweet)",
                "因为大家都不会做米饭 (Because no one knows how to cook rice)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q6-3",
            "question": "What did the whole family do after dinner on Xiaoxue's birthday?",
            "arQuestion": "ماذا فعلت العائلة بأكملها بعد العشاء في يوم ميلاد شياوشيويه؟",
            "options": [
                "全家人去看了个电影 (The whole family went to watch a movie)",
                "去公园踢足球 (Went to the park to play soccer)",
                "在家里打篮球 (Played basketball at home)",
                "去商场买手表 (Went to the mall to buy watches)"
            ],
            "answerIndex": 0
        }
    ]
}

# ==========================================
# UNIT 7: 他篮球打得很好 (He Plays Basketball Very Well)
# ==========================================
unit7 = {
    "id": "hsk-2-hsk3-unit-7",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 7,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第7课：他篮球打得很好",
        "en": "Lesson 7: He plays basketball very well",
        "ar": "الدرس 7: هو يلعب كرة السلة بشكل ممتاز"
    },
    "dialogue": [
        # Text 1: 在教室，安妮和陈天中在聊天儿。
        {
            "id": "7-1-1",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "安妮，你是什么时候从北京回来的？",
            "pinyin": "Ānnī, nǐ shì shénme shíhou cóng Běijīng huílái de?",
            "translation": {
                "en": "Annie, when did you get back from Beijing?",
                "ar": "آني، متى عدتِ من بكين؟"
            },
            "audio": None
        },
        {
            "id": "7-1-2",
            "role": "安妮 (Annie)",
            "hanzi": "昨天下午。天中，你怎么一下课就往外跑？",
            "pinyin": "Zuótiān xiàwǔ. Tiānzhōng, nǐ zěnme yí xiàkè jiù wǎng wài pǎo?",
            "translation": {
                "en": "Yesterday afternoon. Tianzhong, why do you rush outside as soon as class ends?",
                "ar": "بعد ظهر أمس. يا تيانتشونغ، لماذا تهرع إلى الخارج بمجرد انتهاء الحصة؟"
            },
            "audio": None
        },
        {
            "id": "7-1-3",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "我跟同学说好了，一起去打篮球。",
            "pinyin": "Wǒ gēn tóngxué shuōhǎo le, yìqǐ qù dǎ lánqiú.",
            "translation": {
                "en": "I made plans with my classmates to go play basketball together.",
                "ar": "اتفقت مع زملائي على الذهاب للعب كرة السلة معاً."
            },
            "audio": None
        },
        {
            "id": "7-1-4",
            "role": "安妮 (Annie)",
            "hanzi": "我也想跟你们一起玩。",
            "pinyin": "Wǒ yě xiǎng gēn nǐmen yìqǐ wán.",
            "translation": {
                "en": "I'd like to join and play with you guys too.",
                "ar": "أود اللعب معتكم أيضاً."
            },
            "audio": None
        },
        {
            "id": "7-1-5",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "没问题，走吧。",
            "pinyin": "Méi wèntí, zǒu ba.",
            "translation": {
                "en": "No problem! Let's go.",
                "ar": "لا مشكلة على الإطلاق، هيا بنا."
            },
            "audio": None
        },
        # Text 2: 聊运动 (Chatting About Sports)
        {
            "id": "7-2-1",
            "role": "安妮 (Annie)",
            "hanzi": "天中，你是不是很喜欢打篮球？",
            "pinyin": "Tiānzhōng, nǐ shì bu shì hěn xǐhuan dǎ lánqiú?",
            "translation": {
                "en": "Tianzhong, do you really like playing basketball?",
                "ar": "تيانتشونغ، هل تحب حقاً لعب كرة السلة؟"
            },
            "audio": None
        },
        {
            "id": "7-2-2",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "是啊。",
            "pinyin": "Shì a.",
            "translation": {
                "en": "Yes, I do.",
                "ar": "نعم بالتأكيد."
            },
            "audio": None
        },
        {
            "id": "7-2-3",
            "role": "安妮 (Annie)",
            "hanzi": "你还喜欢什么运动？",
            "pinyin": "Nǐ hái xǐhuan shénme yùndòng?",
            "translation": {
                "en": "What other sports do you like?",
                "ar": "ما الرياضات الأخرى التي تفضلها أيضاً؟"
            },
            "audio": None
        },
        {
            "id": "7-2-4",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "我还喜欢踢足球，一到星期天就跟朋友们去踢球。",
            "pinyin": "Wǒ hái xǐhuan tī zúqiú, yí dào xīngqītiān jiù gēn péngyoumen qù tī qiú.",
            "translation": {
                "en": "I also love playing soccer. Whenever Sunday comes, I go play ball with friends.",
                "ar": "أحب أيضاً لعب كرة القدم، وبمجرد حلول يوم الأحد أذهب للعب الكرة مع الأصدقاء."
            },
            "audio": None
        },
        {
            "id": "7-2-5",
            "role": "安妮 (Annie)",
            "hanzi": "你踢得怎么样？",
            "pinyin": "Nǐ tī de zěnmeyàng?",
            "translation": {
                "en": "How well do you play?",
                "ar": "كيف هو مستواك في اللعب؟"
            },
            "audio": None
        },
        {
            "id": "7-2-6",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "我踢得还可以。",
            "pinyin": "Wǒ tī de hái kěyǐ.",
            "translation": {
                "en": "I play pretty decently.",
                "ar": "ألعب بشكل لا بأس به."
            },
            "audio": None
        },
        # Text 3: 运动水平 (Sports Skills)
        {
            "id": "7-3-1",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "你篮球打得怎么样？",
            "pinyin": "Nǐ lánqiú dǎ de zěnmeyàng?",
            "translation": {
                "en": "How are your basketball skills?",
                "ar": "كيف هو مستواكِ في كرة السلة؟"
            },
            "audio": None
        },
        {
            "id": "7-3-2",
            "role": "安妮 (Annie)",
            "hanzi": "还行吧。",
            "pinyin": "Hái xíng ba.",
            "translation": {
                "en": "It's alright, I guess.",
                "ar": "مستواي مقبول نوعاً ما."
            },
            "audio": None
        },
        {
            "id": "7-3-3",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "跑步呢？你跑得快不快？",
            "pinyin": "Pǎobù ne? Nǐ pǎo de kuài bu kuài?",
            "translation": {
                "en": "What about running? Do you run fast?",
                "ar": "وماذا عن الجري؟ هل تجرين بسرعة؟"
            },
            "audio": None
        },
        {
            "id": "7-3-4",
            "role": "安妮 (Annie)",
            "hanzi": "我跑得不快，也不太喜欢跑步。",
            "pinyin": "Wǒ pǎo de bú kuài, yě bú tài xǐhuan pǎobù.",
            "translation": {
                "en": "I don't run fast, and I don't really like running either.",
                "ar": "لا أجري بسرعة، ولا أحب الجري كثيراً في الواقع."
            },
            "audio": None
        },
        {
            "id": "7-3-5",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "那你喜欢游泳吗？",
            "pinyin": "Nà nǐ xǐhuan yóuyǒng ma?",
            "translation": {
                "en": "Then do you like swimming?",
                "ar": "إذاً هل تحبين السباحة؟"
            },
            "audio": None
        },
        {
            "id": "7-3-6",
            "role": "安妮 (Annie)",
            "hanzi": "喜欢，但我游泳游得不快。",
            "pinyin": "Xǐhuan, dàn wǒ yóuyǒng yóu de bú kuài.",
            "translation": {
                "en": "I do, but I don't swim very fast.",
                "ar": "أحبها، لكنني لا أسبح بسرعة."
            },
            "audio": None
        },
        # Text 4: 陈天中的日记 (Chen Tianzhong's Diary)
        {
            "id": "7-4-1",
            "role": "陈天中 (Chen Tianzhong)",
            "hanzi": "我的爱好是运动。从上小学开始，我每天都跟爸爸去运动。现在我篮球打得很好，足球踢得不错，游泳游得也很快。我一有时间就去运动。",
            "pinyin": "Wǒ de àihào shì yùndòng. Cóng shàng xiǎoxué kāishǐ, wǒ měi tiān dōu gēn bàba qù yùndòng. Xiànzài wǒ lánqiú dǎ de hěn hǎo, zúqiú tī de búcuò, yóuyǒng yóu de yě hěn kuài. Wǒ yì yǒu shíjiān jiù qù yùndòng.",
            "translation": {
                "en": "My hobby is doing sports. Ever since primary school, I have exercised with my dad every day. Now I play basketball very well, play soccer quite well, and swim very fast too. Whenever I have free time, I go play sports.",
                "ar": "هوايتي هي ممارسة الرياضة. منذ بدأت المرحلة الابتدائية، وأنا أمارس الرياضة مع والدي كل يوم. والآن أنا ألعب كرة السلة ببراعة، وألعب كرة القدم بشكل جيد، وأسبح بسرعة فائقة أيضاً. وبمجرد أن يتوفر لدي أي وقت، أذهب لممارسة الرياضة."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Complement of State (状态补语: Verb + 得 + Adj)",
            "explanation": "Follows a verb with structural particle '得' to describe the manner, outcome, or quality of an action: 踢得还可以 (plays decently); 玩得很高兴 (played happily); 跑得不快 (doesn't run fast). Negation places '不' directly before the adjective.",
            "arExplanation": "يأتي متمم الحالة بعد الفعل مسبوقاً بأداة '得' لبيان كيفية أو نتيجة أو جودة حدوث الفعل: '踢得还可以' (يلعب بشكل لا بأس به)، '跑得不快' (لا يجري بسرعة). وللنفي نضع '不' قبل الصفة مباشرة."
        },
        {
            "point": "Complement of State with Separable Verbs & Objects",
            "explanation": "When the verb takes an object or is a separable compound (离合词), the verbal morpheme must be repeated, or the object brought forward: 篮球打得怎么样 (object first); 游泳游得不快 (verb repeated: yóuyǒng yóu de bú kuài); 跑步跑得不快 (pǎobù pǎo de bú kuài).",
            "arExplanation": "إذا كان الفعل متعدياً لمفعول أو فعلاً انفصالياً (离合词)، يجب تكرار المقطع الفعلي أو تقديم المفعول أولاً: '游泳游得不快' (يكرر الفعل 游)، '篮球打得怎么样' (يقدم المفعول 篮球 أولاً)."
        },
        {
            "point": "Tight Complex Sentence '一……就……' (As soon as... then...)",
            "explanation": "Indicates that the second event immediately follows the first in time or condition: 一下课就往外跑 (rushes out as soon as class ends); 一到星期天就去踢球 (plays soccer as soon as Sunday arrives); 一有时间就去运动 (exercises whenever there is time).",
            "arExplanation": "تفيد جملة الربط '一……就……' أن الفعل الثاني يعقب الأول مباشرة في الزمان أو الشرط: '一下课就往外跑' (بمجرد انتهاء الحصة يهرع للخارج)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Sports and Fitness in Chinese Universities and Schools",
            "detail": "Sports like basketball, soccer, badminton (羽毛球), and table tennis (乒乓球) are extraordinarily popular on Chinese campuses. Every evening after class, university courts and running tracks are bustling with students engaging in physical fitness (全民健身).",
            "arDetail": "تحظى الرياضات مثل كرة السلة، وكرة القدم، وتنس الريشة، وكرة الطاولة بشعبية جارفة في المدارس والجامعات الصينية. ففي كل مساء بعد انتهاء المحاضرات، تمتلئ الملاعب والمسارات بالطلاب الممارسين للنشاط البدني في إطار تعزيز اللياقة البدنية الوطنية."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q7-1",
            "question": "What sport was Chen Tianzhong in a hurry to play as soon as class finished?",
            "arQuestion": "ما الرياضة التي كان تشين تيانتشونغ في عجلة للذهاب لممارستها فور انتهاء الحصة؟",
            "options": [
                "打篮球 (Play basketball)",
                "去游泳 (Go swimming)",
                "去跑步 (Go running)",
                "踢足球 (Play soccer)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q7-2",
            "question": "How did Annie describe her own running and swimming abilities?",
            "arQuestion": "كيف وصفت آني قدراتها في الجري والسباحة؟",
            "options": [
                "跑得不快，游泳也游得不快 (Runs slowly, and doesn't swim fast either)",
                "跑得很快，游泳也游得很快 (Runs very fast and swims very fast)",
                "她不会游泳 (She doesn't know how to swim)",
                "她是学校的跑步第一名 (She is the top runner in the school)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q7-3",
            "question": "Since when has Chen Tianzhong been exercising every day with his father?",
            "arQuestion": "منذ متى وتشين تيانتشونغ يمارس الرياضة كل يوم مع والده؟",
            "options": [
                "从上小学开始 (Since primary school)",
                "从上大学开始 (Since university)",
                "从昨天开始 (Since yesterday)",
                "从上个月开始 (Since last month)"
            ],
            "answerIndex": 0
        }
    ]
}

# ==========================================
# UNIT 8: 虽然你忘了，但是我记得 (Even Though You Forgot, I Remembered)
# ==========================================
unit8 = {
    "id": "hsk-2-hsk3-unit-8",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 8,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第8课：虽然你忘了，但是我记得",
        "en": "Lesson 8: Even though you forgot, I remembered",
        "ar": "الدرس 8: رغم أنكِ نسيتِ، إلا أنني أتذكر"
    },
    "dialogue": [
        # Text 1: 在商场，王一雪和刘明在购物。
        {
            "id": "8-1-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你看，这两块手表怎么样？",
            "pinyin": "Nǐ kàn, zhè liǎng kuài shǒubiǎo zěnmeyàng?",
            "translation": {
                "en": "Look, what do you think of these two watches?",
                "ar": "انظر، ما رأيك في هاتين الساعتين؟"
            },
            "audio": None
        },
        {
            "id": "8-1-2",
            "role": "刘明 (Liu Ming)",
            "hanzi": "都不错！",
            "pinyin": "Dōu búcuò!",
            "translation": {
                "en": "Both are quite nice!",
                "ar": "كلتاهما رائعتان حقاً!"
            },
            "audio": None
        },
        {
            "id": "8-1-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "我喜欢左边这个。",
            "pinyin": "Wǒ xǐhuan zuǒbian zhège.",
            "translation": {
                "en": "I like the one on the left.",
                "ar": "تعجبني التي على اليسار."
            },
            "audio": None
        },
        {
            "id": "8-1-4",
            "role": "刘明 (Liu Ming)",
            "hanzi": "我也觉得左边的比右边的好看。",
            "pinyin": "Wǒ yě juéde zuǒbian de bǐ yòubian de hǎokàn.",
            "translation": {
                "en": "I also think the one on the left looks nicer than the one on the right.",
                "ar": "وأنا أرى أيضاً أن التي على اليسار أجمل من التي على اليمين."
            },
            "audio": None
        },
        {
            "id": "8-1-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你看看要多少钱？",
            "pinyin": "Nǐ kànkan yào duōshao qián?",
            "translation": {
                "en": "Check how much it costs.",
                "ar": "انظر كم يبلغ سعرها؟"
            },
            "audio": None
        },
        {
            "id": "8-1-6",
            "role": "刘明 (Liu Ming)",
            "hanzi": "真不便宜！八千八！",
            "pinyin": "Zhēn bù piányi! Bāqiān bā!",
            "translation": {
                "en": "Definitely not cheap! 8,800 yuan!",
                "ar": "ليست رخيصة أبداً! ثمانية آلاف وثمانمائة يوان!"
            },
            "audio": None
        },
        # Text 2: 选电影 (Choosing a Movie)
        {
            "id": "8-2-1",
            "role": "刘明 (Liu Ming)",
            "hanzi": "今天有不少电影，我们看个电影吧。",
            "pinyin": "Jīntiān yǒu bù shǎo diànyǐng, wǒmen kàn ge diànyǐng ba.",
            "translation": {
                "en": "There are quite a few movies showing today. Let's watch a movie.",
                "ar": "هناك أفلام كثيرة تُعرض اليوم، فلنشاهد فيلماً."
            },
            "audio": None
        },
        {
            "id": "8-2-2",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "好啊！我们看哪个？",
            "pinyin": "Hǎo a! Wǒmen kàn nǎge?",
            "translation": {
                "en": "Great! Which one shall we watch?",
                "ar": "فكرة ممتازة! أي فيلم سنشاهد؟"
            },
            "audio": None
        },
        {
            "id": "8-2-3",
            "role": "刘明 (Liu Ming)",
            "hanzi": "我记得你喜欢看爱情片，我们看那个爱情片，怎么样？",
            "pinyin": "Wǒ jìde nǐ xǐhuan kàn àiqíngpiàn, wǒmen kàn nàge àiqíngpiàn, zěnmeyàng?",
            "translation": {
                "en": "I remember you enjoy romantic movies. How about we watch that romance film?",
                "ar": "أتذكر أنكِ تحبين مشاهدة الأفلام الرومانسية، ما رأيك في مشاهدة ذلك الفيلم الرومانسي؟"
            },
            "audio": None
        },
        {
            "id": "8-2-4",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "还是看这个吧，我看网上说这个电影比那个爱情片更有意思。",
            "pinyin": "Háishi kàn zhège ba, wǒ kàn wǎngshang shuō zhège diànyǐng bǐ nàge àiqíngpiàn gèng yǒu yìsi.",
            "translation": {
                "en": "Let's watch this one instead. I read online that this film is more interesting than that romance movie.",
                "ar": "من الأفضل أن نشاهد هذا الفيلم، لقد قرأت على الإنترنت أنه أكثر تشويقاً من ذلك الفيلم الرومانسي."
            },
            "audio": None
        },
        {
            "id": "8-2-5",
            "role": "刘明 (Liu Ming)",
            "hanzi": "好。我去买票。",
            "pinyin": "Hǎo. Wǒ qù mǎi piào.",
            "translation": {
                "en": "Alright. I'll go buy the tickets.",
                "ar": "حسناً، سأذهب لشراء التذاكر."
            },
            "audio": None
        },
        {
            "id": "8-2-6",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "到网上买吧，网上买比在这里买便宜。",
            "pinyin": "Dào wǎngshang mǎi ba, wǎngshang mǎi bǐ zài zhèlǐ mǎi piányi.",
            "translation": {
                "en": "Let's buy them online. Buying online is cheaper than buying right here.",
                "ar": "فلنشترها عبر الإنترنت، فالشراء عبر الإنترنت أرخص من الشراء هنا مباشرة."
            },
            "audio": None
        },
        # Text 3: 在饭馆 (At the Restaurant)
        {
            "id": "8-3-1",
            "role": "刘明 (Liu Ming)",
            "hanzi": "服务员，就要这几个菜吧，谢谢！",
            "pinyin": "Fúwùyuán, jiù yào zhè jǐ ge cài ba, xièxie!",
            "translation": {
                "en": "Waiter, we'll take these dishes, thank you!",
                "ar": "أيها النادل، نريد هذه الأطباق من فضلك، شكراً لك!"
            },
            "audio": None
        },
        {
            "id": "8-3-2",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "怎么点这么多菜？",
            "pinyin": "Zěnme diǎn zhème duō cài?",
            "translation": {
                "en": "Why did you order so many dishes?",
                "ar": "لماذا طلبت كل هذه الأطباق الكثيرة؟"
            },
            "audio": None
        },
        {
            "id": "8-3-3",
            "role": "刘明 (Liu Ming)",
            "hanzi": "你想想，今天是几月几号？",
            "pinyin": "Nǐ xiǎngxiang, jīntiān shì jǐ yuè jǐ hào?",
            "translation": {
                "en": "Think about it—what date is it today?",
                "ar": "فكري قليلاً، ما تاريخ اليوم؟"
            },
            "audio": None
        },
        {
            "id": "8-3-4",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "8月27号。啊！我的生日！",
            "pinyin": "Bā yuè èrshíqī hào. À! Wǒ de shēngrì!",
            "translation": {
                "en": "August 27th. Ah! It's my birthday!",
                "ar": "السابع والعشرون من أغسطس. آاه! إنه يوم ميلادي!"
            },
            "audio": None
        },
        {
            "id": "8-3-5",
            "role": "刘明 (Liu Ming)",
            "hanzi": "生日快乐！虽然你忘了，但是我记得。看看这是什么？",
            "pinyin": "Shēngrì kuàilè! Suīrán nǐ wàng le, dànshì wǒ jìde. Kànkan zhè shì shénme?",
            "translation": {
                "en": "Happy birthday! Even though you forgot, I remembered. Take a look, what is this?",
                "ar": "عيد ميلاد سعيد! رغم أنكِ نسيتِ، إلا أنني أتذكر تماماً. انظري ماذا يوجد هنا؟"
            },
            "audio": None
        },
        {
            "id": "8-3-6",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "手表！吃饭、看电影、买手表，今天花了不少钱吧？",
            "pinyin": "Shǒubiǎo! Chī fàn, kàn diànyǐng, mǎi shǒubiǎo, jīntiān huāle bù shǎo qián ba?",
            "translation": {
                "en": "The watch! Dinner, cinema, and buying a watch... you must have spent quite a lot of money today, right?",
                "ar": "ساعة اليد! عشاء، وسينما، وشراء ساعة... لا شك أنك أنفقت الكثير من المال اليوم، أليس كذلك؟"
            },
            "audio": None
        },
        {
            "id": "8-3-7",
            "role": "刘明 (Liu Ming)",
            "hanzi": "虽然花了一些钱，但是我们过了一个快乐的生日。",
            "pinyin": "Suīrán huāle yìxiē qián, dànshì wǒmen guòle yí ge kuàilè de shēngrì.",
            "translation": {
                "en": "Although we spent some money, we celebrated a truly happy birthday together.",
                "ar": "رغم أننا أنفقنا بعض المال، إلا أننا احتفلنا بعيد ميلاد مفعم بالبهجة والسرور."
            },
            "audio": None
        },
        # Text 4: 小语讲述 (Xiaoyu's Story)
        {
            "id": "8-4-1",
            "role": "小语 (Xiaoyu)",
            "hanzi": "虽然妻子忘了今天是自己的生日，但是丈夫记得。丈夫请妻子去饭馆吃饭、去电影院看电影，还给妻子买了一块非常漂亮的手表。妻子觉得今天很快乐。",
            "pinyin": "Suīrán qīzi wàngle jīntiān shì zìjǐ de shēngrì, dànshì zhàngfu jìde. Zhàngfu qǐng qīzi qù fànguǎn chī fàn, qù diànyǐngyuàn kàn diànyǐng, hái gěi qīzi mǎile yí kuài fēicháng piàoliang de shǒubiǎo. Qīzi juéde jīntiān hěn kuàilè.",
            "translation": {
                "en": "Although the wife forgot that today was her own birthday, the husband remembered. The husband treated his wife to dinner at a restaurant, took her to watch a movie at the cinema, and even bought her a gorgeous watch. The wife felt truly happy today.",
                "ar": "رغم أن الزوجة نسيت أن اليوم هو يوم ميلادها، إلا أن الزوج كان يتذكر جيداً. دعا الزوج زوجته لتناول الطعام في المطعم، ومشاهدة فيلم في السينما، واشترى لها أيضاً ساعة يد جميلة للغاية. وشعرت الزوجة بسعادة بالغة اليوم."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Comparative Sentences (比较句: A 比 B + Adj / 更 + Adj)",
            "explanation": "Compares two items using '比'. To indicate an even higher degree, '更' (even more) precedes the adjective: 左边的比右边的好看 (the left one is prettier than the right one); 这个电影比那个爱情片更有意思 (this movie is more interesting than that romance); 网上买比在这里买便宜 (buying online is cheaper than buying here).",
            "arExplanation": "تُستخدم أداة المقارنة '比' للمفاضلة بين شيئين (A 比 B + صفة). ولإفادة الزيادة في الدرجة نستخدم الظرف '更' قبل الصفة: '左边的比右边的好看' (التي على اليسار أجمل من التي على اليمين)، '网上买比在这里买便宜' (الشراء عبر الإنترنت أرخص من الشراء هنا)."
        },
        {
            "point": "Adversative Complex Sentence '虽然……，但是……' (Although..., but...)",
            "explanation": "Connects two contrasting clauses to express concession: 虽然你忘了，但是我记得 (Although you forgot, I remembered); 虽然花了一些钱，但是我们过了一个快乐的生日 (Although we spent some money, we celebrated a happy birthday). Either '虽然' or '但是' can also be used independently.",
            "arExplanation": "تُستخدم الجملة الاستدراكية '虽然……，但是……' للتعبير عن الاستدراك والتناقض الإيجابي: '虽然你忘了，但是我记得' (رغم أنكِ نسيتِ، إلا أنني أتذكر). ويمكن استخدام إحدى الأداتين بمفردها أحياناً."
        },
        {
            "point": "The Verb '花' (huā - To Spend Money or Time)",
            "explanation": "'花' means to spend money (花钱) or time (花时间): 今天花了不少钱吧 (You must have spent quite a lot of money today, right?).",
            "arExplanation": "يُستخدم الفعل '花' بمعنى إنفاق المال (花钱) أو قضاء الوقت (花时间): '今天花了不少钱吧' (أظنك أنفقت الكثير من المال اليوم)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Auspicious Numbers and Modern Anniversaries in China",
            "detail": "In Chinese culture, the number 8 (八, bā) is deeply favored because its pronunciation resembles '发' (fā - to prosper, generate wealth). Prices like 8,800 yuan (八千八) are considered highly auspicious. Modern Chinese couples also cherish anniversaries and surprise celebrations, blending dining, movies, and thoughtful keepsakes like wristwatches.",
            "arDetail": "في الثقافة الصينية، يحظى الرقم 8 (八) بمكانة خاصة ومحبوبة جداً لتشابه نطقه مع كلمة '发' (الرخاء والغنى وازدهار الثروة)، لذا تعتبر الأسعار مثل 8800 يوان (八千八) جالباً للبركة والحظ السعيد. كما يحتفي الأزواج الشباب بالذكرى والمناسبات الرومانسية عبر تقديم الهدايا التذكارية كالساعات."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q8-1",
            "question": "What did Wang Yixue realize about the date August 27th?",
            "arQuestion": "ماذا أدركت وانغ ييشيويه بخصوص تاريخ 27 أغسطس؟",
            "options": [
                "今天是她自己的生日 (Today is her own birthday)",
                "今天是丈夫的生日 (Today is her husband's birthday)",
                "今天是儿子的生日 (Today is her son's birthday)",
                "今天是开学日 (Today is the first day of school)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q8-2",
            "question": "Why did Wang Yixue suggest buying movie tickets online?",
            "arQuestion": "لماذا اقترحت وانغ ييشيويه شراء تذاكر السينما عبر الإنترنت؟",
            "options": [
                "因为网上买比在影院买更便宜 (Because buying online is cheaper than buying at the cinema)",
                "因为影院没有售票处 (Because the cinema had no ticket booth)",
                "因为网上买票可以送爆米花 (Because online tickets come with free popcorn)",
                "因为她不想看电影 (Because she didn't want to watch the movie)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q8-3",
            "question": "What surprise gift did Liu Ming buy for his wife?",
            "arQuestion": "ما الهدية المفاجئة التي اشتراها ليو مينغ لزوجته؟",
            "options": [
                "一块非常漂亮的手表 (A very beautiful wristwatch)",
                "一套新衣服 (A set of new clothes)",
                "一辆新车 (A new car)",
                "一盒画笔 (A box of color pens)"
            ],
            "answerIndex": 0
        }
    ]
}

# ==========================================
# UNIT 9: 我去买杯奶茶 (I'm Going to Buy a Cup of Bubble Tea)
# ==========================================
unit9 = {
    "id": "hsk-2-hsk3-unit-9",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 9,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第9课：我去买杯奶茶",
        "en": "Lesson 9: I'm going to buy a cup of bubble tea",
        "ar": "الدرس 9: سأذهب لشراء كوب من شاي الحليب"
    },
    "dialogue": [
        # Text 1: 在商店，王一雪和刘明在看裤子。
        {
            "id": "9-1-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "儿子的裤子坏了，我们给他买条新的吧。",
            "pinyin": "Érzi de kùzi huài le, wǒmen gěi tā mǎi tiáo xīn de ba.",
            "translation": {
                "en": "Our son's pants are worn out; let's buy him a new pair.",
                "ar": "بنطال ابننا تمزق، فلنشترِ له بنطالاً جديداً."
            },
            "audio": None
        },
        {
            "id": "9-1-2",
            "role": "刘明 (Liu Ming)",
            "hanzi": "好啊。你看这条黑色的怎么样？",
            "pinyin": "Hǎo a. Nǐ kàn zhè tiáo hēisè de zěnmeyàng?",
            "translation": {
                "en": "Sure. What do you think of this black pair?",
                "ar": "حسناً. ما رأيك في هذا البنطال الأسود؟"
            },
            "audio": None
        },
        {
            "id": "9-1-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "没有你上次买的那条好看。",
            "pinyin": "Méiyǒu nǐ shàng cì mǎi de nà tiáo hǎokàn.",
            "translation": {
                "en": "It's not as nice as the one you bought last time.",
                "ar": "ليس جميلاً مثل ذلك الذي اشتريته في المرة السابقة."
            },
            "audio": None
        },
        {
            "id": "9-1-4",
            "role": "刘明 (Liu Ming)",
            "hanzi": "旁边那个男孩儿就穿了这样的裤子，我觉得很好看啊！",
            "pinyin": "Pángbiān nàge nánháir jiù chuānle zhèyàng de kùzi, wǒ juéde hěn hǎokàn a!",
            "translation": {
                "en": "The boy next to us is wearing pants just like these, and I think they look great!",
                "ar": "الفتى الذي بجانبنا يرتدي بنطالاً كهذا تماماً، وأرى أنه يبدو أنيقاً جداً!"
            },
            "audio": None
        },
        {
            "id": "9-1-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "儿子的个子没有他那么高，穿上就不会太好看。",
            "pinyin": "Érzi de gèzi méiyǒu tā nàme gāo, chuānshang jiù bú huì tài hǎokàn.",
            "translation": {
                "en": "Our son isn't as tall as he is, so it wouldn't look as good on him.",
                "ar": "قوام ابننا ليس بطوله، ولن يبدو مناسباً عليه كثيراً."
            },
            "audio": None
        },
        {
            "id": "9-1-6",
            "role": "刘明 (Liu Ming)",
            "hanzi": "好吧，我们再去那边看看。",
            "pinyin": "Hǎo ba, wǒmen zài qù nàbian kànkan.",
            "translation": {
                "en": "Alright, let's head over there and take another look.",
                "ar": "حسناً، لنذهب إلى تلك الجهة ونلقي نظرة أخرى."
            },
            "audio": None
        },
        # Text 2: 买奶茶和咖啡 (Buying Bubble Tea and Coffee)
        {
            "id": "9-2-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "门口有家奶茶店。你想喝杯奶茶吗？",
            "pinyin": "Ménkǒu yǒu jiā nǎichǎdiàn. Nǐ xiǎng hē bēi nǎichá ma?",
            "translation": {
                "en": "There's a bubble tea shop at the entrance. Would you like a cup of bubble tea?",
                "ar": "يوجد متجر لشاي الحليب عند المدخل. هل ترغب في شرب كوب من شاي الحليب؟"
            },
            "audio": None
        },
        {
            "id": "9-2-2",
            "role": "刘明 (Liu Ming)",
            "hanzi": "我想喝咖啡，还是去咖啡店吧。",
            "pinyin": "Wǒ xiǎng hē kāfēi, háishi qù kāfēidiàn ba.",
            "translation": {
                "en": "I'd prefer coffee; let's go to a cafe instead.",
                "ar": "أود شرب القهوة، فلنذهب إلى المقهى أفضل."
            },
            "audio": None
        },
        {
            "id": "9-2-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "咖啡店离这儿有点儿远。",
            "pinyin": "Kāfēidiàn lí zhèr yǒudiǎnr yuǎn.",
            "translation": {
                "en": "The cafe is a bit far from here.",
                "ar": "المقهى بعيد قليلاً عن هنا."
            },
            "audio": None
        },
        {
            "id": "9-2-4",
            "role": "刘明 (Liu Ming)",
            "hanzi": "没关系，那家店的咖啡很好喝。",
            "pinyin": "Méi guānxi, nà jiā diàn de kāfēi hěn hǎohē.",
            "translation": {
                "en": "That's fine; that shop's coffee is really delicious.",
                "ar": "لا بأس، فالقهوة في ذلك المتجر لذيذة للغاية."
            },
            "audio": None
        },
        {
            "id": "9-2-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "那你等一下，我去买杯奶茶。",
            "pinyin": "Nà nǐ děng yíxià, wǒ qù mǎi bēi nǎichá.",
            "translation": {
                "en": "Then wait for a moment; I'll go buy a cup of bubble tea.",
                "ar": "انتظر لحظة إذاً، سأذهب لشراء كوب من شاي الحليب."
            },
            "audio": None
        },
        {
            "id": "9-2-6",
            "role": "刘明 (Liu Ming)",
            "hanzi": "你不想喝咖啡吗？",
            "pinyin": "Nǐ bù xiǎng hē kāfēi ma?",
            "translation": {
                "en": "Don't you want to drink coffee?",
                "ar": "ألا ترغبين في شرب القهوة؟"
            },
            "audio": None
        },
        {
            "id": "9-2-7",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "喝了咖啡，晚上就别想睡觉了。",
            "pinyin": "Hēle kāfēi, wǎnshang jiù bié xiǎng shuìjiào le.",
            "translation": {
                "en": "If I drink coffee, I can forget about sleeping tonight!",
                "ar": "إذا شربتُ القهوة، فلن أستطيع النوم الليلة على الإطلاق!"
            },
            "audio": None
        },
        # Text 3: 走回家 (Walking Home)
        {
            "id": "9-3-1",
            "role": "刘明 (Liu Ming)",
            "hanzi": "我们打车回去吧。",
            "pinyin": "Wǒmen dǎchē huíqu ba.",
            "translation": {
                "en": "Let's take a taxi back.",
                "ar": "فلنأخذ سيارة أجرة في طريق العودة."
            },
            "audio": None
        },
        {
            "id": "9-3-2",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "这里离家很近，还是走路吧。",
            "pinyin": "Zhèlǐ lí jiā hěn jìn, háishi zǒulù ba.",
            "translation": {
                "en": "It's very close to home from here; let's walk instead.",
                "ar": "المكان قريب جداً من البيت، فلنعد سيراً على الأقدام أفضل."
            },
            "audio": None
        },
        {
            "id": "9-3-3",
            "role": "刘明 (Liu Ming)",
            "hanzi": "要走多长时间？",
            "pinyin": "Yào zǒu duō cháng shíjiān?",
            "translation": {
                "en": "How long will the walk take?",
                "ar": "كم من الوقت سيستغرق المشي؟"
            },
            "audio": None
        },
        {
            "id": "9-3-4",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "走半个多小时就到了。",
            "pinyin": "Zǒu bàn ge duō xiǎoshí jiù dào le.",
            "translation": {
                "en": "Walking a little over half an hour will get us there.",
                "ar": "المشي لن يستغرق سوى نصف ساعة وبضع دقائق وسنصل."
            },
            "audio": None
        },
        {
            "id": "9-3-5",
            "role": "刘明 (Liu Ming)",
            "hanzi": "好的。每天上下班都坐车，今天运动运动吧。",
            "pinyin": "Hǎo de. Měi tiān shàng xià bān dōu zuò chē, jīntiān yùndòng yùndòng ba.",
            "translation": {
                "en": "Sounds good. We ride vehicles to work every day, so let's get some exercise today.",
                "ar": "حسناً. نحن نركب المواصلات يومياً للعمل، فلنتحرك ونمارس بعض الرياضة اليوم."
            },
            "audio": None
        },
        # Text 4: 王一雪的日记 (Wang Yixue's Diary)
        {
            "id": "9-4-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "这周刘明休息，我下班后跟他去了一家商店。商店里边的衣服没有大商场里的好看。我们没有买到喜欢的衣服，从商店出来就到咖啡店坐了坐。因为想运动运动，所以喝完东西，我们就走回家了。",
            "pinyin": "Zhè zhōu Liú Míng xiūxi, wǒ xiàbān hòu gēn tā qùle yì jiā shāngdiàn. Shāngdiàn lǐbian de yīfu méiyǒu dà shāngchǎng lǐ de hǎokàn. Wǒmen méiyǒu mǎidào xǐhuan de yīfu, cóng shāngdiàn chūlái jiù dào kāfēidiàn zuòle zuò. Yīnwèi xiǎng yùndòng yùndòng, suǒyǐ hēwán dōngxi, wǒmen jiù zǒuhuí jiā le.",
            "translation": {
                "en": "Liu Ming had time off this week, so after work I went to a shop with him. The clothes inside weren't as stylish as those in big department stores. We didn't find any clothes we liked, so after leaving the shop, we sat in a cafe for a bit. Because we wanted to get some exercise, after finishing our drinks, we walked home.",
                "ar": "هذا الأسبوع كان ليو مينغ في عطلة، فذهبت معه بعد انتهاء عملي إلى أحد المتاجر. لم تكن الملابس هناك بجمال تلك المعروضة في المتاجر الكبرى. لم نجد ملابس تعجبنا، وبعد الخروج من المتجر جلسنا لبعض الوقت في المقهى. ورغبة منا في ممارسة بعض النشاط الرياضي، عدنا سيراً على الأقدام إلى البيت بعد أن أنهينا مشروباتنا."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "The Preposition/Verb '离' (lí - Distance in Space or Time)",
            "explanation": "Expresses distance between two locations or points in time (A 离 B ...): 咖啡店离这儿有点儿远 (The cafe is a bit far from here); 这里离家很近 (It's very close to home from here); 学校离医院不远 (The school is not far from the hospital).",
            "arExplanation": "تُستخدم الأداة '离' للتعبير عن المسافة المكانية أو الفاصل الزمني بين نقطتين (A 离 B ...): '咖啡店离这儿有点儿远' (المقهى بعيد قليلاً عن هنا)، '这里离家很近' (هذا المكان قريب جداً من البيت)."
        },
        {
            "point": "Complement of Duration (时量补语: Verb + Duration)",
            "explanation": "Indicates the length of time an action or state lasts: 走半个多小时就到了 (walking for over half an hour); 休息十分钟 (rest for ten minutes); 学了两年 (studied for two years). When an ongoing state is indicated, a sentence-final particle '了' can be added: 他写了半个小时汉字了 (He has been writing characters for half an hour [and is still writing]).",
            "arExplanation": "يُستخدم متمم المدة الزمنية بعد الفعل لبيان طول الفترة المستغرقة في الحدث: '走半个多小时就到了' (المشي لأكثر من نصف ساعة)، '休息十分钟' (استراحة لعشر دقائق). وإذا كان الفعل مستمراً حتى الآن، يُضاف '了' في نهاية الجملة."
        },
        {
            "point": "Verb + '到' for Achieving an Objective (买到 / 找到)",
            "explanation": "Attaching resultative complement '到' indicates that an action successfully achieved its intended purpose: 没有买到喜欢的衣服 (did not manage to buy clothes we liked); 走半个多小时就到了 (arrived after walking).",
            "arExplanation": "تدل إضافة متمم النتيجة '到' بعد الفعل على تحقيق الهدف المنشود من الفعل: '没有买到喜欢的衣服' (لم نتمكن من شراء ملابس تعجبنا)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Chinese New Tea and Bubble Tea Culture (新茶饮文化)",
            "detail": "Bubble tea (奶茶) has evolved into a vibrant cultural phenomenon in China, with hundreds of tea craft brands like HeyTea and Nayuki. Chinese youth and office workers frequently order fresh fruit teas, cheese milk teas, or specialty coffees as a daily refreshment and casual gathering routine.",
            "arDetail": "تطور شاي الحليب (奶茶) ليصبح ظاهرة ثقافية وشبابية عصرية واسعة الانتشار في الصين. فالمقاهي ومتاجر الشاي الحديثة تنتشر في كل زاوية، حيث يقبل عليها الشباب والعائلات لتناول الشاي بالفواكه الطازجة أو نكهات الجبن الفريدة والاستمتاع بوقتهم."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q9-1",
            "question": "Why didn't Wang Yixue want to order coffee?",
            "arQuestion": "لماذا لم ترغب وانغ ييشيويه في شرب القهوة؟",
            "options": [
                "喝了咖啡晚上睡不着觉 (Drinking coffee prevents her from falling asleep at night)",
                "她不喜欢咖啡的味道 (She dislikes the taste of coffee)",
                "咖啡店太贵了 (The cafe is too expensive)",
                "咖啡店已经关门了 (The cafe was already closed)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q9-2",
            "question": "How did Wang Yixue and Liu Ming decide to travel back home?",
            "arQuestion": "كيف قرر ليو مينغ ووانغ ييشيويه العودة إلى البيت؟",
            "options": [
                "走路回家 (Walked home)",
                "打车回去 (Took a taxi)",
                "坐公共汽车 (Rode a public bus)",
                "骑自行车 (Rode bicycles)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q9-3",
            "question": "How long did it take them to walk home?",
            "arQuestion": "كم استغرق المشي للوصول إلى البيت؟",
            "options": [
                "半个多小时 (A little over half an hour)",
                "两个多小时 (Over two hours)",
                "十分钟 (Ten minutes)",
                "一天 (A whole day)"
            ],
            "answerIndex": 0
        }
    ]
}

# ==========================================
# UNIT 10: 就要考试了 (The Exam Is Coming)
# ==========================================
unit10 = {
    "id": "hsk-2-hsk3-unit-10",
    "curriculum": "hsk3",
    "hskLevel": 2,
    "unitId": 10,
    "contentType": "dialogue",
    "status": "ready",
    "title": {
        "zh": "第10课：就要考试了",
        "en": "Lesson 10: The exam is coming",
        "ar": "الدرس 10: الامتحانات على وشك البدء"
    },
    "dialogue": [
        # Text 1: 在房间，刘明在帮刘小明准备东西。
        {
            "id": "10-1-1",
            "role": "刘明 (Liu Ming)",
            "hanzi": "小明，你们明天开学，你准备好了吗？",
            "pinyin": "Xiǎomíng, nǐmen míngtiān kāixué, nǐ zhǔnbèi hǎo le ma?",
            "translation": {
                "en": "Xiaoming, school starts tomorrow for you. Are you ready?",
                "ar": "شياومينغ، ستبدأ مدرستكم غداً، هل استعددت جيداً؟"
            },
            "audio": None
        },
        {
            "id": "10-1-2",
            "role": "刘小明 (Liu Xiaoming)",
            "hanzi": "明天就开学啊？爸爸，我的书包你看见了吗？",
            "pinyin": "Míngtiān jiù kāixué a? Bàba, wǒ de shūbāo nǐ kànjiàn le ma?",
            "translation": {
                "en": "School starts tomorrow already? Dad, have you seen my schoolbag?",
                "ar": "المدرسة ستبدأ غداً بالفعل؟ أبي، هل رأيت حقيبتي المدرسية؟"
            },
            "audio": None
        },
        {
            "id": "10-1-3",
            "role": "刘明 (Liu Ming)",
            "hanzi": "书包在门后面。",
            "pinyin": "Shūbāo zài mén hòumian.",
            "translation": {
                "en": "Your schoolbag is behind the door.",
                "ar": "الحقيبة خلف الباب."
            },
            "audio": None
        },
        {
            "id": "10-1-4",
            "role": "刘小明 (Liu Xiaoming)",
            "hanzi": "书在哪儿呢？笔呢？",
            "pinyin": "Shū zài nǎr ne? Bǐ ne?",
            "translation": {
                "en": "Where are my books? And my pens?",
                "ar": "وأين الكتب؟ وأين الأقلام؟"
            },
            "audio": None
        },
        {
            "id": "10-1-5",
            "role": "刘明 (Liu Ming)",
            "hanzi": "书在床上，笔在桌子上。",
            "pinyin": "Shū zài chuáng shang, bǐ zài zhuōzi shang.",
            "translation": {
                "en": "The books are on the bed, and the pens are on the desk.",
                "ar": "الكتب على السرير، والأقلام على الطاولة."
            },
            "audio": None
        },
        {
            "id": "10-1-6",
            "role": "刘小明 (Liu Xiaoming)",
            "hanzi": "太好了！现在都准备好了。",
            "pinyin": "Tài hǎo le! Xiànzài dōu zhǔnbèi hǎo le.",
            "translation": {
                "en": "Awesome! Now everything is ready.",
                "ar": "رائع جداً! كل شيء جاهز الآن."
            },
            "audio": None
        },
        {
            "id": "10-1-7",
            "role": "刘明 (Liu Ming)",
            "hanzi": "这次爸爸帮你，下次你自己准备，好不好？",
            "pinyin": "Zhè cì bàba bāng nǐ, xià cì nǐ zìjǐ zhǔnbèi, hǎo bu hǎo?",
            "translation": {
                "en": "Dad is helping you this time; next time you prepare everything yourself, alright?",
                "ar": "أنا أساعدك هذه المرة، وفي المرة القادمة سترتب أغراضك بنفسك، اتفقنا؟"
            },
            "audio": None
        },
        {
            "id": "10-1-8",
            "role": "刘小明 (Liu Xiaoming)",
            "hanzi": "好！",
            "pinyin": "Hǎo!",
            "translation": {
                "en": "Deal!",
                "ar": "اتفقنا!"
            },
            "audio": None
        },
        # Text 2: 聊学习 (Talking About Studying)
        {
            "id": "10-2-1",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "小雪，你在做什么呢？",
            "pinyin": "Xiǎoxuě, nǐ zài zuò shénme ne?",
            "translation": {
                "en": "Xiaoxue, what are you doing?",
                "ar": "شياوشيويه، ماذا تفعلين؟"
            },
            "audio": None
        },
        {
            "id": "10-2-2",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "明天考试，我在看书呢。",
            "pinyin": "Míngtiān kǎoshì, wǒ zài kàn shū ne.",
            "translation": {
                "en": "I have an exam tomorrow, so I'm studying.",
                "ar": "لدي امتحان غداً، لذا أنا أراجع دروسي."
            },
            "audio": None
        },
        {
            "id": "10-2-3",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "这些词要好好看看。",
            "pinyin": "Zhèxiē cí yào hǎohāo kànkan.",
            "translation": {
                "en": "You need to review these vocabulary words thoroughly.",
                "ar": "عليكِ مراجعة هذه الكلمات جيداً."
            },
            "audio": None
        },
        {
            "id": "10-2-4",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "我看过了，意思都懂了。",
            "pinyin": "Wǒ kànguo le, yìsi dōu dǒng le.",
            "translation": {
                "en": "I've already reviewed them, and I understand all their meanings.",
                "ar": "راجعتها بالفعل، وفهمت معانيها كلها."
            },
            "audio": None
        },
        {
            "id": "10-2-5",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你的本子呢？本子上做错的题也要看一看。",
            "pinyin": "Nǐ de běnzi ne? Běnzi shang zuòcuò de tí yě yào kàn yi kàn.",
            "translation": {
                "en": "Where's your notebook? You also need to look over the questions you got wrong in your notebook.",
                "ar": "أين دفترك؟ يجب عليكِ أيضاً مراجعة المسائل والأسئلة التي أخطأتِ فيها سابقاً."
            },
            "audio": None
        },
        {
            "id": "10-2-6",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "妈妈，是您准备考试还是我准备考试？",
            "pinyin": "Māma, shì nín zhǔnbèi kǎoshì háishi wǒ zhǔnbèi kǎoshì?",
            "translation": {
                "en": "Mom, is it you who's preparing for the exam, or is it me?",
                "ar": "أمي، هل حضرتكِ من تستعد للامتحان أم أنا؟"
            },
            "audio": None
        },
        # Text 3: 考完试 (After the Exam)
        {
            "id": "10-3-1",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "妈妈，我回来了！",
            "pinyin": "Māma, wǒ huílái le!",
            "translation": {
                "en": "Mom, I'm back home!",
                "ar": "أمي، لقد عدت إلى البيت!"
            },
            "audio": None
        },
        {
            "id": "10-3-2",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "我买了奶茶，就在桌子上，你自己去拿吧。",
            "pinyin": "Wǒ mǎile nǎichá, jiù zài zhuōzi shang, nǐ zìjǐ qù ná ba.",
            "translation": {
                "en": "I bought some bubble tea; it's right on the table, go grab it yourself.",
                "ar": "لقد اشتريت شاي الحليب، وهو على الطاولة، خذيه بنفسك."
            },
            "audio": None
        },
        {
            "id": "10-3-3",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "谢谢妈妈！",
            "pinyin": "Xièxie māma!",
            "translation": {
                "en": "Thank you, Mom!",
                "ar": "شكراً لكِ يا أمي!"
            },
            "audio": None
        },
        {
            "id": "10-3-4",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "今天考试考得怎么样？",
            "pinyin": "Jīntiān kǎoshì kǎo de zěnmeyàng?",
            "translation": {
                "en": "How did your exam go today?",
                "ar": "كيف كان أداؤكِ في الامتحان اليوم؟"
            },
            "audio": None
        },
        {
            "id": "10-3-5",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "我觉得比上次好。",
            "pinyin": "Wǒ juéde bǐ shàng cì hǎo.",
            "translation": {
                "en": "I think I did better than last time.",
                "ar": "أشعر أنني أديت أفضل من المرة السابقة."
            },
            "audio": None
        },
        {
            "id": "10-3-6",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "真不错！饭菜快要做好好了，你叫弟弟一起去洗手吧。",
            "pinyin": "Zhēn búcuò! Fàncài kuàiyào zuòhǎo le, nǐ jiào dìdi yìqǐ qù xǐshǒu ba.",
            "translation": {
                "en": "That's wonderful! Dinner is almost ready, go tell your little brother to wash his hands with you.",
                "ar": "رائع حقاً! الطعام على وشك أن يجهز، نادي أخاكِ واذهبا لغسل أيديكما معاً."
            },
            "audio": None
        },
        {
            "id": "10-3-7",
            "role": "刘小明 (Liu Xiaoming)",
            "hanzi": "妈妈，我是第一名，姐姐还没洗完呢。",
            "pinyin": "Māma, wǒ shì dì-yī míng, jiějie hái méi xǐwán ne.",
            "translation": {
                "en": "Mom, I came in first! Sister hasn't finished washing yet.",
                "ar": "أمي، أنا الفائز بالمركز الأول! أختي لم تنتهِ من الغسيل بعد."
            },
            "audio": None
        },
        {
            "id": "10-3-8",
            "role": "王一雪 (Wang Yixue)",
            "hanzi": "你洗得真快啊！",
            "pinyin": "Nǐ xǐ de zhēn kuài a!",
            "translation": {
                "en": "You washed your hands so fast!",
                "ar": "لقد غسلت يديك بسرعة فائقة حقاً!"
            },
            "audio": None
        },
        # Text 4: 刘小雪的短文 (Liu Xiaoxue's Narrative)
        {
            "id": "10-4-1",
            "role": "刘小雪 (Liu Xiaoxue)",
            "hanzi": "快要开学了，爸爸帮弟弟准备书包、本子和笔。就要考试了，妈妈让我看书、看做错的题。我们上学，爸爸、妈妈比我们还忙。我问他们：“是我和弟弟上学还是你们上学？”我问完，他们都笑了。",
            "pinyin": "Kuàiyào kāixué le, bàba bāng dìdi zhǔnbèi shūbāo, běnzi hé bǐ. Jiù yào kǎoshì le, māma ràng wǒ kàn shū, kàn zuòcuò de tí. Wǒmen shàngxué, bàba, māma bǐ wǒmen hái máng. Wǒ wèn tāmen: \"Shì wǒ hé dìdi shàngxué háishi nǐmen shàngxué?\" Wǒ wènwán, tāmen dōu xiào le.",
            "translation": {
                "en": "School is about to start, and Dad is helping my little brother prepare his schoolbag, notebooks, and pens. The exam is imminent, and Mom makes me study books and review the questions I got wrong. When we go to school, Dad and Mom seem even busier than we are! I asked them: \"Is it my brother and I who are going to school, or is it you two?\" As soon as I asked, they both burst out laughing.",
                "ar": "المدرسة على وشك البدء، وأبي يساعد أخي الصغير في إعداد الحقيبة والدفاتر والأقلام. والامتحان وشيك، وأمي تطلب مني مراجعة الكتب والمسائل التي أخطأت فيها. عندما نذهب للمدرسة، يبدو أبي وأمي أكثر انشغالاً منا! سألتهما: \"هل أنا وأخي الصغير من سنذهب للمدرسة أم أنتما؟\"، وما إن سألتهما حتى ضحكا كلاهما."
            },
            "audio": None
        }
    ],
    "grammarNotes": [
        {
            "point": "Immediate Future Construction: '快要/就要……了' (About to / Imminent)",
            "explanation": "Expresses an action or event that is about to take place very soon: 就要考试了 (the exam is about to take place); 快要开学了 (school is about to start); 饭菜快要做好好了 (dinner is almost ready). If a specific time is mentioned, '就要……了' is used.",
            "arExplanation": "تُستخدم البنية '快要/就要……了' للتعبير عن حدث وشيك الوقوع في المستقبل القريب جداً: '就要考试了' (الامتحان على وشك أن يبدأ)، '快要开学了' (المدرسة على وشك البدء)."
        },
        {
            "point": "Alternative Question Construction: '是……还是……' (Is it A or B?)",
            "explanation": "Used in choice questions presenting two alternatives: 妈妈，是您准备考试还是我准备考试？ (Mom, is it you who is preparing for the exam or me?); 是我和弟弟上学还是你们上学？ (Is it my brother and I going to school or you two?).",
            "arExplanation": "تُستخدم الصيغة '是……还是……' في الأسئلة التخييرية للاستفسار بين أمرين بديلين: '是您准备考试还是我准备考试？' (هل حضرتكِ من يستعد للامتحان أم أنا؟)."
        },
        {
            "point": "Resultative Modifier '做错的' (Questions Done Incorrectly)",
            "explanation": "The verb '错' functions as a resultative complement indicating an error: 做错 (done incorrectly), 做错的题 (questions answered incorrectly).",
            "arExplanation": "تُستخدم '错' كمتمم نتيجة بعد الفعل للإشارة إلى حدوث خطأ: '做错' (فعل خاطئ)، '做错的题' (المسائل التي حُلّت خطأً)."
        }
    ],
    "culturalNotes": [
        {
            "title": "Exam Culture and Family Support in China (中国家庭教育与备考)",
            "detail": "Education and examinations occupy a central place in Chinese family life. Parents invest enormous energy into preparing stationary (文具) and stationery kits, reviewing error notebooks (错题本), and nurturing comfortable study environments at home, often experiencing more nervousness than the students themselves.",
            "arDetail": "يحتل التعليم والامتحانات مكانة محورية بالغة الأهمية في حياة الأسرة الصينية. ويكرس الآباء والأمهات طاقات هائلة لتجهيز الأدوات المدرسية والقرطاسية، ومتابعة 'دفتر الأخطاء' (错题本) ومراجعة المسائل السابقة وتوفير بيئة منزلية دافئة تدعم أبناءهم في مسيرتهم الدراسية."
        }
    ],
    "comprehensionQuestions": [
        {
            "id": "q10-1",
            "question": "Where was Liu Xiaoming's schoolbag located?",
            "arQuestion": "أين كانت حقيبة ليو شياومينغ المدرسية؟",
            "options": [
                "在门后面 (Behind the door)",
                "在床上 (On the bed)",
                "在桌子上 (On the desk)",
                "在书架上 (On the bookshelf)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q10-2",
            "question": "What did Wang Yixue advise Xiaoxue to review in her notebook?",
            "arQuestion": "بماذا نصحت وانغ ييشيويه ابنتها شياوشيويه أن تراجع في دفترها؟",
            "options": [
                "本子上做错的题 (The questions she got wrong in her notebook)",
                "本子上的画 (The drawings in the notebook)",
                "上课的日记 (The class diary)",
                "汉语拼音 (Chinese pinyin)"
            ],
            "answerIndex": 0
        },
        {
            "id": "q10-3",
            "question": "Why did the parents burst out laughing at the end?",
            "arQuestion": "لماذا ضحك الوالدان في نهاية النص؟",
            "options": [
                "因为小雪问他们到底是孩子上学还是父母上学 (Because Xiaoxue asked whether the children were going to school or the parents)",
                "因为小明洗手得了第一名 (Because Xiaoming won first place in washing hands)",
                "因为小雪考了一百分 (Because Xiaoxue scored 100 on the exam)",
                "因为爸爸找到了书包 (Because Dad found the schoolbag)"
            ],
            "answerIndex": 0
        }
    ]
}

# Write out all 5 units
units = [unit6, unit7, unit8, unit9, unit10]
for u in units:
    path = os.path.join(out_dir, f"unit-{u['unitId']}.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(u, f, ensure_ascii=False, indent=2)
    print(f"Successfully wrote {path} ({len(u['dialogue'])} turns)")

print("All HSK 2 New 3.0 Lessons 6 to 10 generated successfully!")
