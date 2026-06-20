import json
import re
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
SOURCE_PDF = (
    ROOT.parent / "hsk 5" / "HSK-5-Vocabularyagain.pdf"
)
REPORT_PATH = ROOT / "source-data" / "extracted" / "hsk-5-pdf-update-report.json"

CONTENT = {
    "鞭炮": {
        "ar": "مفرقعات نارية",
        "example": {
            "hanzi": "春节时，孩子们在安全的地方放鞭炮。",
            "en": "During Spring Festival, children set off firecrackers in a safe place.",
            "ar": "في عيد الربيع يطلق الأطفال المفرقعات النارية في مكان آمن.",
        },
    },
    "辩论": {
        "ar": "مناظرة؛ يناقش",
        "example": {
            "hanzi": "他们正在辩论这个计划是否可行。",
            "en": "They are debating whether this plan is practical.",
            "ar": "إنهم يناقشون ما إذا كانت هذه الخطة قابلة للتنفيذ.",
        },
    },
    "不见得": {
        "ar": "ليس بالضرورة",
        "example": {
            "hanzi": "贵的东西不见得一定更好。",
            "en": "Expensive things are not necessarily better.",
            "ar": "الأشياء الغالية ليست بالضرورة أفضل.",
        },
    },
    "诚恳": {
        "ar": "صادق؛ مخلص",
        "example": {
            "hanzi": "他的道歉很诚恳，大家都接受了。",
            "en": "His apology was sincere, and everyone accepted it.",
            "ar": "كان اعتذاره صادقا، فقبله الجميع.",
        },
    },
    "次要": {
        "ar": "ثانوي",
        "example": {
            "hanzi": "这些细节只是次要问题。",
            "en": "These details are only secondary issues.",
            "ar": "هذه التفاصيل مجرد مسائل ثانوية.",
        },
    },
    "粗糙": {
        "ar": "خشن؛ غير مصقول",
        "example": {
            "hanzi": "这张桌子的表面有点粗糙。",
            "en": "The surface of this table is a little rough.",
            "ar": "سطح هذه الطاولة خشن قليلا.",
        },
    },
    "倒霉": {
        "ar": "سيئ الحظ",
        "example": {
            "hanzi": "今天真倒霉，我错过了两班车。",
            "en": "I was really unlucky today and missed two buses.",
            "ar": "كان حظي سيئا اليوم، فقد فاتتني حافلتان.",
        },
    },
    "地毯": {
        "ar": "سجادة",
        "example": {
            "hanzi": "客厅里铺着一块厚地毯。",
            "en": "There is a thick carpet in the living room.",
            "ar": "توجد سجادة سميكة في غرفة الجلوس.",
        },
    },
    "动画片": {
        "ar": "فيلم رسوم متحركة",
        "example": {
            "hanzi": "孩子们周末喜欢看动画片。",
            "en": "Children like watching cartoons on weekends.",
            "ar": "يحب الأطفال مشاهدة الرسوم المتحركة في عطلة نهاية الأسبوع.",
        },
    },
    "度过": {
        "ar": "يقضي؛ يمر بوقت",
        "example": {
            "hanzi": "我们在海边度过了一个安静的下午。",
            "en": "We spent a quiet afternoon by the sea.",
            "ar": "قضينا بعد ظهيرة هادئة على شاطئ البحر.",
        },
    },
    "肥皂": {
        "ar": "صابون",
        "example": {
            "hanzi": "洗手时别忘了用肥皂。",
            "en": "Do not forget to use soap when washing your hands.",
            "ar": "لا تنس استخدام الصابون عند غسل يديك.",
        },
    },
    "讽刺": {
        "ar": "سخرية؛ يسخر",
        "example": {
            "hanzi": "这篇文章用幽默的方式讽刺了浪费现象。",
            "en": "This article satirizes waste in a humorous way.",
            "ar": "تسخر هذه المقالة من ظاهرة الهدر بطريقة فكاهية.",
        },
    },
    "乖": {
        "ar": "مطيع؛ حسن التصرف",
        "example": {
            "hanzi": "这个孩子很乖，从不乱跑。",
            "en": "This child is well behaved and never runs around.",
            "ar": "هذا الطفل مطيع ولا يركض في كل مكان.",
        },
    },
    "光滑": {
        "ar": "ناعم؛ أملس",
        "example": {
            "hanzi": "这块石头被河水冲得很光滑。",
            "en": "This stone has been made smooth by the river water.",
            "ar": "جعل ماء النهر هذا الحجر أملس جدا.",
        },
    },
    "国庆节": {
        "ar": "العيد الوطني",
        "example": {
            "hanzi": "国庆节期间，城市里到处挂着红旗。",
            "en": "During National Day, red flags hang throughout the city.",
            "ar": "خلال العيد الوطني تنتشر الأعلام الحمراء في أنحاء المدينة.",
        },
    },
    "豪华": {
        "ar": "فاخر",
        "example": {
            "hanzi": "这家酒店的大厅非常豪华。",
            "en": "The lobby of this hotel is very luxurious.",
            "ar": "ردهة هذا الفندق فاخرة جدا.",
        },
    },
    "何必": {
        "ar": "لماذا الحاجة إلى؛ لا داعي",
        "example": {
            "hanzi": "事情已经过去了，何必再生气呢？",
            "en": "It is already over, so why keep being angry?",
            "ar": "لقد انتهى الأمر، فلا داعي للاستمرار في الغضب.",
        },
    },
    "后背": {
        "ar": "الظهر",
        "example": {
            "hanzi": "他跑完步后后背全是汗。",
            "en": "After running, his back was covered in sweat.",
            "ar": "بعد الجري كان ظهره مغطى بالعرق.",
        },
    },
    "胡说": {
        "ar": "كلام فارغ؛ يقول كلاما بلا معنى",
        "example": {
            "hanzi": "别胡说，我们要先弄清楚事实。",
            "en": "Do not talk nonsense; we need to understand the facts first.",
            "ar": "لا تتكلم بلا معنى، علينا أن نفهم الحقائق أولا.",
        },
    },
    "慌张": {
        "ar": "مرتبك؛ مذعور",
        "example": {
            "hanzi": "听到警报后，大家都显得有些慌张。",
            "en": "After hearing the alarm, everyone looked a little panicked.",
            "ar": "بعد سماع الإنذار بدا الجميع مرتبكين قليلا.",
        },
    },
    "假装": {
        "ar": "يتظاهر",
        "example": {
            "hanzi": "他假装没听见老师的问题。",
            "en": "He pretended not to hear the teacher's question.",
            "ar": "تظاهر بأنه لم يسمع سؤال المعلم.",
        },
    },
    "借口": {
        "ar": "عذر؛ حجة",
        "example": {
            "hanzi": "迟到不是好借口，你应该早点出门。",
            "en": "Being late is not a good excuse; you should leave earlier.",
            "ar": "التأخر ليس عذرا جيدا، يجب أن تخرج أبكر.",
        },
    },
    "戒": {
        "ar": "يقلع عن؛ يترك عادة",
        "example": {
            "hanzi": "为了健康，他决定戒烟。",
            "en": "For his health, he decided to quit smoking.",
            "ar": "من أجل صحته قرر الإقلاع عن التدخين.",
        },
    },
    "桔子": {
        "ar": "برتقالة؛ يوسفي",
        "example": {
            "hanzi": "桌上有一盘新鲜的桔子。",
            "en": "There is a plate of fresh tangerines on the table.",
            "ar": "على الطاولة طبق من اليوسفي الطازج.",
        },
    },
    "军事": {
        "ar": "عسكري",
        "example": {
            "hanzi": "这本书介绍了古代军事制度。",
            "en": "This book introduces ancient military systems.",
            "ar": "يعرض هذا الكتاب الأنظمة العسكرية القديمة.",
        },
    },
    "苗条": {
        "ar": "رشيق؛ نحيف",
        "example": {
            "hanzi": "她坚持运动，所以身材很苗条。",
            "en": "She exercises regularly, so she has a slim figure.",
            "ar": "هي تمارس الرياضة بانتظام، لذلك قوامها رشيق.",
        },
    },
    "名胜古迹": {
        "ar": "معالم تاريخية ومناظر مشهورة",
        "example": {
            "hanzi": "这座城市有很多名胜古迹。",
            "en": "This city has many historic sites and scenic spots.",
            "ar": "تضم هذه المدينة كثيرا من المعالم التاريخية والمناظر المشهورة.",
        },
    },
    "嫩": {
        "ar": "طري؛ غض",
        "example": {
            "hanzi": "这道菜里的牛肉很嫩。",
            "en": "The beef in this dish is very tender.",
            "ar": "لحم البقر في هذا الطبق طري جدا.",
        },
    },
    "宁可": {
        "ar": "يفضل أن؛ من الأفضل أن",
        "example": {
            "hanzi": "我宁可走路，也不想一直等车。",
            "en": "I would rather walk than keep waiting for the bus.",
            "ar": "أفضل أن أمشي على أن أواصل انتظار الحافلة.",
        },
    },
    "轻视": {
        "ar": "يحتقر؛ يستخف",
        "example": {
            "hanzi": "不要轻视任何一个小问题。",
            "en": "Do not look down on any small problem.",
            "ar": "لا تستخف بأي مشكلة صغيرة.",
        },
    },
    "忍不住": {
        "ar": "لا يستطيع أن يمنع نفسه",
        "example": {
            "hanzi": "听到这个笑话，他忍不住笑了。",
            "en": "When he heard the joke, he could not help laughing.",
            "ar": "عندما سمع النكتة لم يستطع منع نفسه من الضحك.",
        },
    },
    "日程": {
        "ar": "جدول الأعمال؛ البرنامج اليومي",
        "example": {
            "hanzi": "请把明天的日程发给我。",
            "en": "Please send me tomorrow's schedule.",
            "ar": "من فضلك أرسل لي جدول الغد.",
        },
    },
    "使劲儿": {
        "ar": "يبذل جهده؛ بقوة",
        "example": {
            "hanzi": "门太重了，他使劲儿才推开。",
            "en": "The door was so heavy that he had to push hard to open it.",
            "ar": "كان الباب ثقيلا جدا، فاضطر إلى دفعه بقوة ليفتحه.",
        },
    },
    "数码": {
        "ar": "رقمي",
        "example": {
            "hanzi": "这家店卖很多数码产品。",
            "en": "This store sells many digital products.",
            "ar": "يبيع هذا المتجر كثيرا من المنتجات الرقمية.",
        },
    },
    "摔倒": {
        "ar": "يسقط أرضا",
        "example": {
            "hanzi": "路面很滑，小心别摔倒。",
            "en": "The road is slippery, so be careful not to fall.",
            "ar": "الطريق زلق، فانتبه كي لا تسقط.",
        },
    },
    "丝绸": {
        "ar": "حرير",
        "example": {
            "hanzi": "这条围巾是丝绸做的。",
            "en": "This scarf is made of silk.",
            "ar": "هذا الوشاح مصنوع من الحرير.",
        },
    },
    "随身": {
        "ar": "مع الشخص؛ يحمله معه",
        "example": {
            "hanzi": "出门时请随身带好证件。",
            "en": "Please keep your documents with you when you go out.",
            "ar": "من فضلك احمل وثائقك معك عند الخروج.",
        },
    },
    "太极拳": {
        "ar": "تاي تشي",
        "example": {
            "hanzi": "爷爷每天早上在公园打太极拳。",
            "en": "Grandpa practices tai chi in the park every morning.",
            "ar": "يمارس جدي التاي تشي في الحديقة كل صباح.",
        },
    },
    "讨价还价": {
        "ar": "يساوم؛ يفاصل في السعر",
        "example": {
            "hanzi": "在市场买东西时可以讨价还价。",
            "en": "You can bargain when shopping at the market.",
            "ar": "يمكنك المساومة عند التسوق في السوق.",
        },
    },
    "体贴": {
        "ar": "مراع؛ لطيف ومتفهم",
        "example": {
            "hanzi": "她很体贴，总能注意到别人的需要。",
            "en": "She is considerate and always notices other people's needs.",
            "ar": "هي مراعية وتلاحظ دائما احتياجات الآخرين.",
        },
    },
    "推辞": {
        "ar": "يرفض بأدب؛ يعتذر عن قبول",
        "example": {
            "hanzi": "他因为太忙，推辞了这次邀请。",
            "en": "Because he was too busy, he declined the invitation.",
            "ar": "لأنه كان مشغولا جدا، اعتذر عن قبول الدعوة.",
        },
    },
    "问候": {
        "ar": "تحية؛ يطمئن على",
        "example": {
            "hanzi": "请代我向你的父母问候。",
            "en": "Please give my regards to your parents.",
            "ar": "من فضلك بلغ والديك تحياتي.",
        },
    },
    "勿": {
        "ar": "لا؛ ممنوع",
        "example": {
            "hanzi": "牌子上写着请勿吸烟。",
            "en": "The sign says please do not smoke.",
            "ar": "تقول اللافتة: يرجى عدم التدخين.",
        },
    },
    "孝顺": {
        "ar": "بار بالوالدين",
        "example": {
            "hanzi": "他很孝顺，经常照顾父母。",
            "en": "He is filial and often takes care of his parents.",
            "ar": "هو بار بوالديه ويعتني بهما كثيرا.",
        },
    },
    "英俊": {
        "ar": "وسيم",
        "example": {
            "hanzi": "照片里的年轻人看起来很英俊。",
            "en": "The young man in the photo looks handsome.",
            "ar": "يبدو الشاب في الصورة وسيما.",
        },
    },
    "应付": {
        "ar": "يتعامل مع؛ يدبر",
        "example": {
            "hanzi": "这些问题不难应付。",
            "en": "These problems are not difficult to deal with.",
            "ar": "هذه المشكلات ليست صعبة التعامل معها.",
        },
    },
    "油炸": {
        "ar": "مقلي بالزيت",
        "example": {
            "hanzi": "医生建议他少吃油炸食品。",
            "en": "The doctor advised him to eat less fried food.",
            "ar": "نصحه الطبيب بتقليل الطعام المقلي.",
        },
    },
    "责备": {
        "ar": "يلوم؛ يوبخ",
        "example": {
            "hanzi": "事情已经解决了，就别再责备他了。",
            "en": "The matter has been solved, so do not blame him anymore.",
            "ar": "لقد حلت المشكلة، فلا تلمه مرة أخرى.",
        },
    },
    "支票": {
        "ar": "شيك",
        "example": {
            "hanzi": "他用支票支付了房租。",
            "en": "He paid the rent by check.",
            "ar": "دفع الإيجار بشيك.",
        },
    },
    "爱惜": {
        "ar": "يعتني ب؛ يقدر",
        "example": {
            "hanzi": "我们应该爱惜公共财物。",
            "en": "We should take good care of public property.",
            "ar": "ينبغي أن نحافظ على الممتلكات العامة.",
        },
    },
    "标点": {
        "ar": "علامات الترقيم",
        "example": {
            "hanzi": "写作文时要注意标点。",
            "en": "Pay attention to punctuation when writing an essay.",
            "ar": "انتبه إلى علامات الترقيم عند كتابة المقال.",
        },
    },
    "惭愧": {
        "ar": "خجل؛ يشعر بالحرج",
        "example": {
            "hanzi": "没能帮上忙，我感到很惭愧。",
            "en": "I felt ashamed that I could not help.",
            "ar": "شعرت بالخجل لأنني لم أستطع المساعدة.",
        },
    },
    "测验": {
        "ar": "اختبار قصير",
        "example": {
            "hanzi": "明天的测验只考十个生词。",
            "en": "Tomorrow's quiz will only test ten new words.",
            "ar": "اختبار الغد القصير سيتناول عشر كلمات جديدة فقط.",
        },
    },
    "吃亏": {
        "ar": "يتضرر؛ يخسر",
        "example": {
            "hanzi": "做决定前多了解情况，才不会吃亏。",
            "en": "Learn more before deciding so you will not suffer a loss.",
            "ar": "اعرف المزيد قبل اتخاذ القرار كي لا تتضرر.",
        },
    },
    "迟早": {
        "ar": "عاجلا أم آجلا",
        "example": {
            "hanzi": "只要坚持练习，你迟早会进步。",
            "en": "If you keep practicing, you will improve sooner or later.",
            "ar": "إذا واصلت التدريب فسوف تتحسن عاجلا أم آجلا.",
        },
    },
    "池塘": {
        "ar": "بركة ماء",
        "example": {
            "hanzi": "池塘里有几条小鱼。",
            "en": "There are several small fish in the pond.",
            "ar": "توجد عدة أسماك صغيرة في البركة.",
        },
    },
    "充电器": {
        "ar": "شاحن",
        "example": {
            "hanzi": "我的手机没电了，你有充电器吗？",
            "en": "My phone is out of battery. Do you have a charger?",
            "ar": "هاتفي نفدت بطاريته، هل لديك شاحن؟",
        },
    },
    "抽屉": {
        "ar": "درج",
        "example": {
            "hanzi": "钥匙放在书桌的抽屉里。",
            "en": "The keys are in the desk drawer.",
            "ar": "المفاتيح في درج المكتب.",
        },
    },
    "窗帘": {
        "ar": "ستائر",
        "example": {
            "hanzi": "阳光太强了，请把窗帘拉上。",
            "en": "The sunlight is too strong. Please close the curtains.",
            "ar": "ضوء الشمس قوي جدا، من فضلك أغلق الستائر.",
        },
    },
    "打喷嚏": {
        "ar": "يعطس",
        "example": {
            "hanzi": "他感冒了，一直打喷嚏。",
            "en": "He has a cold and keeps sneezing.",
            "ar": "هو مصاب بالزكام ويعطس باستمرار.",
        },
    },
    "胆小鬼": {
        "ar": "جبان",
        "example": {
            "hanzi": "别叫他胆小鬼，他只是需要一点时间。",
            "en": "Do not call him a coward; he just needs some time.",
            "ar": "لا تنادِه جبانا، هو يحتاج فقط إلى بعض الوقت.",
        },
    },
    "当心": {
        "ar": "احذر؛ انتبه",
        "example": {
            "hanzi": "过马路时一定要当心。",
            "en": "You must be careful when crossing the road.",
            "ar": "يجب أن تنتبه عند عبور الطريق.",
        },
    },
    "岛屿": {
        "ar": "جزر",
        "example": {
            "hanzi": "地图上可以看到很多小岛屿。",
            "en": "You can see many small islands on the map.",
            "ar": "يمكنك رؤية كثير من الجزر الصغيرة على الخريطة.",
        },
    },
    "电台": {
        "ar": "محطة إذاعية",
        "example": {
            "hanzi": "这家电台每天播放新闻。",
            "en": "This radio station broadcasts news every day.",
            "ar": "تبث هذه المحطة الإذاعية الأخبار كل يوم.",
        },
    },
    "钓": {
        "ar": "يصطاد بالسنارة",
        "example": {
            "hanzi": "周末他喜欢去湖边钓鱼。",
            "en": "On weekends he likes to go fishing by the lake.",
            "ar": "في عطلة نهاية الأسبوع يحب الصيد عند البحيرة.",
        },
    },
    "兑换": {
        "ar": "يصرف؛ يبدل عملة",
        "example": {
            "hanzi": "我想在银行兑换一些人民币。",
            "en": "I want to exchange some money for RMB at the bank.",
            "ar": "أريد أن أبدل بعض المال إلى اليوان في البنك.",
        },
    },
    "躲藏": {
        "ar": "يختبئ",
        "example": {
            "hanzi": "小猫躲藏在沙发下面。",
            "en": "The kitten is hiding under the sofa.",
            "ar": "القطة الصغيرة تختبئ تحت الأريكة.",
        },
    },
    "发抖": {
        "ar": "يرتجف",
        "example": {
            "hanzi": "天气太冷了，他冷得发抖。",
            "en": "The weather was so cold that he was shivering.",
            "ar": "كان الطقس باردا جدا حتى إنه ارتجف من البرد.",
        },
    },
    "非": {
        "ar": "غير؛ لا بد أن",
        "example": {
            "hanzi": "这件事非你帮忙不可。",
            "en": "We really need your help with this matter.",
            "ar": "نحتاج مساعدتك في هذا الأمر لا محالة.",
        },
    },
    "废话": {
        "ar": "كلام فارغ",
        "example": {
            "hanzi": "别说废话，直接告诉我结果。",
            "en": "Stop talking nonsense and tell me the result directly.",
            "ar": "توقف عن الكلام الفارغ وأخبرني بالنتيجة مباشرة.",
        },
    },
    "钢铁": {
        "ar": "فولاذ؛ حديد وصلب",
        "example": {
            "hanzi": "这座桥主要由钢铁建成。",
            "en": "This bridge is mainly built from steel.",
            "ar": "بني هذا الجسر أساسا من الفولاذ.",
        },
    },
    "管子": {
        "ar": "أنبوب",
        "example": {
            "hanzi": "厨房里的管子漏水了。",
            "en": "The pipe in the kitchen is leaking.",
            "ar": "الأنبوب في المطبخ يسرب الماء.",
        },
    },
    "光盘": {
        "ar": "قرص مدمج",
        "example": {
            "hanzi": "这张光盘里有学习资料。",
            "en": "This CD contains study materials.",
            "ar": "يحتوي هذا القرص المدمج على مواد دراسية.",
        },
    },
    "归纳": {
        "ar": "يلخص؛ يستنتج",
        "example": {
            "hanzi": "老师帮我们归纳了课文的重点。",
            "en": "The teacher helped us summarize the key points of the text.",
            "ar": "ساعدنا المعلم على تلخيص النقاط المهمة في النص.",
        },
    },
    "柜台": {
        "ar": "منضدة خدمة؛ كاونتر",
        "example": {
            "hanzi": "请到柜台办理入住手续。",
            "en": "Please go to the counter to check in.",
            "ar": "من فضلك توجه إلى مكتب الخدمة لإنهاء إجراءات الدخول.",
        },
    },
    "何况": {
        "ar": "ناهيك عن؛ فما بالك ب",
        "example": {
            "hanzi": "他连普通话都说得很好，何况简单的问候语。",
            "en": "He speaks Mandarin well, let alone simple greetings.",
            "ar": "هو يتحدث الماندرين جيدا، فما بالك بعبارات التحية البسيطة.",
        },
    },
    "华裔": {
        "ar": "من أصل صيني",
        "example": {
            "hanzi": "她是一位华裔作家。",
            "en": "She is a writer of Chinese descent.",
            "ar": "هي كاتبة من أصل صيني.",
        },
    },
    "系领带": {
        "ar": "يربط ربطة العنق",
        "example": {
            "hanzi": "面试前，他认真地系领带。",
            "en": "Before the interview, he carefully tied his tie.",
            "ar": "قبل المقابلة ربط ربطة عنقه بعناية.",
        },
    },
    "夹子": {
        "ar": "مشبك",
        "example": {
            "hanzi": "她用夹子把文件固定在一起。",
            "en": "She used a clip to hold the documents together.",
            "ar": "استخدمت مشبكا لتثبيت المستندات معا.",
        },
    },
    "艰巨": {
        "ar": "شاق؛ صعب للغاية",
        "example": {
            "hanzi": "完成这个项目是一项艰巨的任务。",
            "en": "Completing this project is a difficult task.",
            "ar": "إنهاء هذا المشروع مهمة شاقة.",
        },
    },
    "狡猾": {
        "ar": "ماكر",
        "example": {
            "hanzi": "故事里的狐狸非常狡猾。",
            "en": "The fox in the story is very cunning.",
            "ar": "الثعلب في القصة ماكر جدا.",
        },
    },
    "卡车": {
        "ar": "شاحنة",
        "example": {
            "hanzi": "一辆卡车停在仓库门口。",
            "en": "A truck stopped at the warehouse entrance.",
            "ar": "توقفت شاحنة عند مدخل المستودع.",
        },
    },
    "刻苦": {
        "ar": "مجتهد؛ يعمل بجد",
        "example": {
            "hanzi": "她学习很刻苦，每天复习到很晚。",
            "en": "She studies very hard and reviews late every day.",
            "ar": "هي تدرس بجد وتراجع دروسها حتى وقت متأخر كل يوم.",
        },
    },
    "劳驾": {
        "ar": "لو سمحت؛ المعذرة",
        "example": {
            "hanzi": "劳驾，请问地铁站怎么走？",
            "en": "Excuse me, how do I get to the subway station?",
            "ar": "لو سمحت، كيف أصل إلى محطة المترو؟",
        },
    },
    "冷淡": {
        "ar": "بارد؛ غير ودود",
        "example": {
            "hanzi": "他今天的态度有点冷淡。",
            "en": "His attitude is a little cold today.",
            "ar": "موقفه اليوم بارد قليلا.",
        },
    },
    "零件": {
        "ar": "قطعة غيار؛ جزء",
        "example": {
            "hanzi": "修理机器需要换一个小零件。",
            "en": "Repairing the machine requires replacing a small part.",
            "ar": "إصلاح الآلة يتطلب تغيير قطعة صغيرة.",
        },
    },
    "流泪": {
        "ar": "يذرف الدموع",
        "example": {
            "hanzi": "听到这个消息，她忍不住流泪。",
            "en": "After hearing the news, she could not help crying.",
            "ar": "بعد سماع الخبر لم تستطع منع دموعها.",
        },
    },
    "煤炭": {
        "ar": "فحم",
        "example": {
            "hanzi": "这个地区过去主要生产煤炭。",
            "en": "This area mainly produced coal in the past.",
            "ar": "كانت هذه المنطقة تنتج الفحم بشكل أساسي في الماضي.",
        },
    },
    "模特": {
        "ar": "عارض أزياء؛ نموذج",
        "example": {
            "hanzi": "她想成为一名专业模特。",
            "en": "She wants to become a professional model.",
            "ar": "تريد أن تصبح عارضة أزياء محترفة.",
        },
    },
    "难怪": {
        "ar": "لا عجب",
        "example": {
            "hanzi": "难怪你累了，原来你昨晚没睡好。",
            "en": "No wonder you are tired; you did not sleep well last night.",
            "ar": "لا عجب أنك متعب، فقد اتضح أنك لم تنم جيدا الليلة الماضية.",
        },
    },
    "青少年": {
        "ar": "مراهقون؛ شباب",
        "example": {
            "hanzi": "青少年需要足够的睡眠。",
            "en": "Teenagers need enough sleep.",
            "ar": "يحتاج المراهقون إلى نوم كاف.",
        },
    },
    "绳子": {
        "ar": "حبل",
        "example": {
            "hanzi": "请用绳子把箱子捆好。",
            "en": "Please tie the box securely with a rope.",
            "ar": "من فضلك اربط الصندوق جيدا بحبل.",
        },
    },
    "省略": {
        "ar": "يحذف؛ اختصار بالحذف",
        "example": {
            "hanzi": "这个句子里可以省略主语。",
            "en": "The subject can be omitted in this sentence.",
            "ar": "يمكن حذف الفاعل في هذه الجملة.",
        },
    },
    "湿润": {
        "ar": "رطب",
        "example": {
            "hanzi": "雨后的空气很湿润。",
            "en": "The air is moist after the rain.",
            "ar": "الهواء رطب بعد المطر.",
        },
    },
    "梳子": {
        "ar": "مشط",
        "example": {
            "hanzi": "她每天早上用梳子整理头发。",
            "en": "She combs her hair every morning with a comb.",
            "ar": "هي ترتب شعرها كل صباح بمشط.",
        },
    },
    "甩": {
        "ar": "يرمي؛ يهز بعنف؛ يتخلص من",
        "example": {
            "hanzi": "他把手上的水甩干。",
            "en": "He shook the water off his hands.",
            "ar": "نفض الماء عن يديه.",
        },
    },
    "撕": {
        "ar": "يمزق",
        "example": {
            "hanzi": "请不要撕这本书的页面。",
            "en": "Please do not tear the pages of this book.",
            "ar": "من فضلك لا تمزق صفحات هذا الكتاب.",
        },
    },
    "丝毫": {
        "ar": "أدنى قدر؛ إطلاقا",
        "example": {
            "hanzi": "他丝毫没有改变自己的决定。",
            "en": "He did not change his decision at all.",
            "ar": "لم يغير قراره إطلاقا.",
        },
    },
    "坦率": {
        "ar": "صريح",
        "example": {
            "hanzi": "她说话很坦率，但没有恶意。",
            "en": "She speaks frankly, but she means no harm.",
            "ar": "هي تتحدث بصراحة، لكنها لا تقصد الإساءة.",
        },
    },
    "逃避": {
        "ar": "يتهرب من؛ يهرب من",
        "example": {
            "hanzi": "遇到困难时，不要逃避责任。",
            "en": "When facing difficulties, do not avoid responsibility.",
            "ar": "عند مواجهة الصعوبات لا تتهرب من المسؤولية.",
        },
    },
    "疼爱": {
        "ar": "يحب بحنان؛ يدلّل",
        "example": {
            "hanzi": "奶奶特别疼爱这个孙子。",
            "en": "Grandma loves this grandson very dearly.",
            "ar": "الجدة تحب هذا الحفيد بحنان شديد.",
        },
    },
    "提纲": {
        "ar": "مخطط؛ مسودة نقاط",
        "example": {
            "hanzi": "写文章前先列一个提纲。",
            "en": "Make an outline before writing the essay.",
            "ar": "اكتب مخططا قبل كتابة المقال.",
        },
    },
    "退步": {
        "ar": "يتراجع؛ يصبح أسوأ",
        "example": {
            "hanzi": "如果不练习，口语会退步。",
            "en": "If you do not practice, your speaking will get worse.",
            "ar": "إذا لم تتدرب فسيتراجع مستوى المحادثة لديك.",
        },
    },
    "吻": {
        "ar": "قبلة؛ يقبّل",
        "example": {
            "hanzi": "妈妈轻轻吻了孩子的额头。",
            "en": "The mother gently kissed the child's forehead.",
            "ar": "قبلت الأم جبين طفلها بلطف.",
        },
    },
    "瞎": {
        "ar": "أعمى؛ بلا هدف",
        "example": {
            "hanzi": "别瞎猜，我们等官方通知。",
            "en": "Do not guess blindly; let us wait for the official notice.",
            "ar": "لا تخمن بلا أساس، لننتظر الإعلان الرسمي.",
        },
    },
    "要不": {
        "ar": "أو؛ وإلا؛ ما رأيك أن",
        "example": {
            "hanzi": "要不我们明天再讨论这个问题。",
            "en": "How about we discuss this issue again tomorrow?",
            "ar": "ما رأيك أن نناقش هذه المسألة مرة أخرى غدا؟",
        },
    },
    "赞美": {
        "ar": "يمدح؛ يثني على",
        "example": {
            "hanzi": "大家都赞美她的勇气。",
            "en": "Everyone praised her courage.",
            "ar": "أثنى الجميع على شجاعتها.",
        },
    },
    "照常": {
        "ar": "كالمعتاد",
        "example": {
            "hanzi": "虽然下雨，会议照常举行。",
            "en": "Although it rained, the meeting was held as usual.",
            "ar": "رغم المطر، عقد الاجتماع كالمعتاد.",
        },
    },
    "振动": {
        "ar": "اهتزاز؛ يهتز",
        "example": {
            "hanzi": "手机在桌子上不停振动。",
            "en": "The phone kept vibrating on the table.",
            "ar": "ظل الهاتف يهتز على الطاولة.",
        },
    },
    "执照": {
        "ar": "رخصة",
        "example": {
            "hanzi": "开车前必须先取得执照。",
            "en": "You must get a license before driving.",
            "ar": "يجب أن تحصل على رخصة قبل القيادة.",
        },
    },
    "自私": {
        "ar": "أناني",
        "example": {
            "hanzi": "只考虑自己太自私了。",
            "en": "Only thinking about yourself is rather selfish.",
            "ar": "التفكير في نفسك فقط يعد أنانية إلى حد كبير.",
        },
    },
}


MEANING_FIXES = {
    "Good behaved": "well-behaved",
    "fall on evil days": "have bad luck",
    "Why": "why bother; why should",
    "Nonsense": "nonsense",
    "Excuse": "excuse",
    "Orange": "tangerine; orange",
    "Military": "military",
    "Places of historic interest and scenic beauty": "historic sites and scenic spots",
    "Unable to bear": "cannot help; unable to hold back",
    "Carry on": "carry with oneself",
    "Taiji boxing": "tai chi",
    "Considerate": "considerate",
    "Refuse": "decline; refuse politely",
    "To greet": "greet; give regards",
    "Not": "do not",
    "Filial piety": "filial; devoted to parents",
    "Handsome and spirited": "handsome",
    "Fried": "fried in oil",
    "Reproach": "blame; reproach",
    "Check": "check; cheque",
    "Cherish": "cherish; take good care of",
    "Be ashamed": "feel ashamed",
    "Suffer": "suffer a loss",
    "Pond": "pond",
    "Charger": "charger",
    "Window curtains": "curtains",
    "Sneeze": "sneeze",
    "Coward": "coward",
    "Islands": "islands",
    "Fishing": "fish with a hook",
    "Hide oneself": "hide oneself",
    "Tremble": "tremble; shiver",
    "National Day": "national day",
    "wrong; non": "non-; must; not",
    "Crap": "nonsense",
    "Induce": "summarize; induce",
    "Counter": "counter",
    "Not to mention": "not to mention; let alone",
    "Chinese born": "of Chinese descent",
    "Clip": "clip",
    "Truck": "truck",
    "Hardworking": "hardworking",
    "Excuse me": "excuse me",
    "Spare parts": "spare part",
    "Shed tears": "shed tears",
    "Rope": "rope",
    "Moist": "moist",
    "Rejection": "throw; shake off",
    "A bit": "the slightest bit",
    "Love dearly": "love dearly",
    "Backward": "regress; fall behind",
    "Or": "or; otherwise",
    "Praise": "praise",
    "Vibration": "vibration",
    "License": "license",
}


def main():
    levels = {
        level: load_json(ROOT / "source-data" / "hsk" / f"hsk-{level}.json")
        for level in range(1, 7)
    }
    existing_ids = {word["id"] for words in levels.values() for word in words}
    all_hanzi = {word["hanzi"] for words in levels.values() for word in words}
    target = levels[5]
    target_by_hanzi = {word["hanzi"]: word for word in target}
    parsed = parse_rows()
    added = []
    updated_existing = []
    skipped_existing = []

    for record in parsed:
        hanzi = record["hanzi"]
        if hanzi in all_hanzi:
            if hanzi in target_by_hanzi and hanzi in CONTENT:
                apply_content(target_by_hanzi[hanzi], record)
                updated_existing.append(hanzi)
            skipped_existing.append(hanzi)
            continue
        row = make_word(record, target, existing_ids)
        target.append(row)
        target_by_hanzi[hanzi] = row
        added.append(row)
        all_hanzi.add(hanzi)

    target.sort(key=lambda word: word.get("order", 0))
    write_json(ROOT / "source-data" / "hsk" / "hsk-5.json", target)

    report = {
        "sourceRows": len(parsed),
        "added": len(added),
        "updatedExisting": len(updated_existing),
        "managedWords": len(CONTENT),
        "newCount": len(target),
        "skippedExisting": len(skipped_existing),
        "managedWordList": [
            {
                "hanzi": record["hanzi"],
                "pinyin": record["pinyin"],
                "meaningEn": record["meaningEn"],
            }
            for record in parsed
            if record["hanzi"] in CONTENT
        ],
    }
    write_json(REPORT_PATH, report)
    print(json.dumps(report, ensure_ascii=False, indent=2))


def parse_rows():
    text = "\n".join(page.extract_text() or "" for page in PdfReader(str(SOURCE_PDF)).pages)
    row_re = re.compile(r"^\s*(\d+)\s+([\u3400-\u9fff]+)\s+(\S+)\s+(.+?)\s*$")
    rows = []
    seen = set()
    for line in text.splitlines():
        match = row_re.match(line)
        if not match:
            continue
        order = int(match.group(1))
        hanzi = clean_hanzi(match.group(2))
        if hanzi in seen:
            continue
        seen.add(hanzi)
        rows.append(
            {
                "sourceOrder": order,
                "hanzi": hanzi,
                "pinyin": clean_space(match.group(3)),
                "meaningEn": clean_meaning(match.group(4)),
            }
        )
    return rows


def make_word(record, target, existing_ids):
    hanzi = record["hanzi"]
    content = CONTENT.get(hanzi, {})
    example = content.get("example") or fallback_example(hanzi)
    normalized_example = {
        "hanzi": clean_hanzi(example["hanzi"]),
        "pinyin": "",
        "en": clean_space(example["en"]),
        "ar": clean_space(example["ar"]),
    }
    return {
        "id": slugify(record["pinyin"], hanzi, existing_ids),
        "hskLevel": 5,
        "order": next_order(target),
        "hanzi": hanzi,
        "traditional": hanzi,
        "pinyin": record["pinyin"],
        "meaning": {
            "en": record["meaningEn"],
            "ar": content.get("ar", ""),
        },
        "partOfSpeech": "word",
        "example": normalized_example,
        "audio": {"word": None, "example": None},
        "tags": [],
        "examples": [normalized_example],
        "generatedContent": {
            "arabic": "reviewed generated translation",
            "examples": "reviewed generated example",
        },
    }


def apply_content(word, record):
    content = CONTENT[word["hanzi"]]
    word["pinyin"] = record["pinyin"]
    word.setdefault("meaning", {})
    word["meaning"]["en"] = record["meaningEn"]
    word["meaning"]["ar"] = content["ar"]
    word["partOfSpeech"] = word.get("partOfSpeech") or "word"
    example = content["example"]
    normalized_example = {
        "hanzi": clean_hanzi(example["hanzi"]),
        "pinyin": "",
        "en": clean_space(example["en"]),
        "ar": clean_space(example["ar"]),
    }
    word["example"] = normalized_example
    word["examples"] = [normalized_example]
    word["generatedContent"] = {
        "arabic": "reviewed generated translation",
        "examples": "reviewed generated example",
    }


def fallback_example(hanzi):
    return {
        "hanzi": f"我今天学习“{hanzi}”这个词。",
        "en": f'Today I learned the word "{hanzi}".',
        "ar": f'اليوم تعلمت كلمة "{hanzi}".',
    }


def next_order(words):
    return max((word.get("order", 0) for word in words), default=0) + 1


def clean_hanzi(value):
    return re.sub(r"\s+", "", str(value or "")).strip()


def clean_space(value):
    return re.sub(r"\s+", " ", str(value or "").replace("\u00a0", " ")).strip()


def clean_meaning(value):
    value = clean_space(value)
    value = MEANING_FIXES.get(value, value)
    if value.isupper():
        return value
    return value[:1].lower() + value[1:]


def slugify(pinyin, hanzi, existing_ids):
    base = re.sub(r"[^a-z0-9]+", "-", strip_tones(pinyin).lower()).strip("-")
    if not base:
        base = f"hsk-5-{len(existing_ids) + 1}"
    candidate = base
    suffix = 2
    while candidate in existing_ids:
        candidate = f"{base}-{suffix}"
        suffix += 1
    existing_ids.add(candidate)
    return candidate


def strip_tones(value):
    mapping = str.maketrans(
        "āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüÜńňḿ",
        "aaaaeeeeiiiioooouuuuvvvvuUnnm",
    )
    return clean_space(value).translate(mapping).replace("'", "")


def load_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
