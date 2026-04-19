export type Evidence =
  | {
      type: "ayah";
      arabic: string;
      translation: string;
      reference: string;
    }
  | {
      type: "hadith";
      text: string;
      source: string;
    };

export interface TazkiyahTopic {
  slug: string;
  title: string;
  description: string;
  category:
    | "Heart"
    | "Worship"
    | "Character"
    | "Social"
    | "Self-discipline";
  reflection: string;
  evidence: Evidence;
  action: string;
  habit: string;
}

export const tazkiyahTopics: TazkiyahTopic[] = [
  {
    slug: "khushu",
    title: "Khushu in Salah",
    description: "Improve focus and humility in prayer",
    category: "Worship",
    reflection:
      "Many people struggle with distraction during salah — the heart wanders while the body bows. Khushu begins with recognizing that you stand before Allah, not merely completing movements. Prepare the heart before the limbs.",
    evidence: {
      type: "ayah",
      arabic: "قَدْ أَفْلَحَ الْمُؤْمِنُونَ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ",
      translation: "Certainly the believers have succeeded — those who are humble in their prayers.",
      reference: "Qur'an 23:1-2",
    },
    action: "Pray two rak'ah tonight slowly, pausing briefly after each movement.",
    habit: "Pause for three calm breaths before saying Allahu Akbar to begin.",
  },
  {
    slug: "consistency",
    title: "Consistency in Worship",
    description: "Build steady habits rather than occasional intensity",
    category: "Worship",
    reflection:
      "Spirits rise and fall, but consistency trains the heart to return. Small regular acts often reshape character more than rare grand efforts.",
    evidence: {
      type: "hadith",
      text: "The most beloved deeds to Allah are those that are most consistent, even if they are small.",
      source: "Sahih al-Bukhari & Muslim",
    },
    action: "Choose one daily act (e.g., two rak'ah sunnah or morning adhkar) and protect it for seven days.",
    habit: "After Fajr, spend two minutes in quiet dhikr before checking your phone.",
  },
  {
    slug: "anger",
    title: "Controlling Anger",
    description: "Respond with restraint when emotions flare",
    category: "Character",
    reflection:
      "Anger can cloud judgment and wound relationships. Strength in Islam includes mastering the self when provoked. Silence and delay are the anger-stopper of the strong.",
    evidence: {
      type: "hadith",
      text: "The strong is not the one who overcomes people; the strong is the one who controls himself while angry.",
      source: "Sahih al-Bukhari",
    },
    action: "When anger rises, sit down if standing, or move to wudu if possible, before speaking.",
    habit: "Silently say 'a'udhu billahi min ash-shaytan ir-rajeem' once before replying when upset.",
  },
  {
    slug: "gaze",
    title: "Lowering the Gaze",
    description: "Guard the eyes and protect the heart",
    category: "Self-discipline",
    reflection:
      "What we allow our eyes to linger on shapes our thoughts. Lowering the gaze is both obedience and self-respect — a quiet daily jihad of the heart.",
    evidence: {
      type: "ayah",
      arabic: "قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ",
      translation: "Tell the believing men to lower their gaze and guard their private parts.",
      reference: "Qur'an 24:30",
    },
    action: "Today, consciously redirect your gaze once when something inappropriate appears on a screen.",
    habit: "Keep your phone out of hand during meals and conversations with family.",
  },
  {
    slug: "gratitude",
    title: "Gratitude",
    description: "Notice blessings and respond with thankfulness",
    category: "Heart",
    reflection:
      "Gratitude turns ordinary moments into reminders of the Giver. It softens complaint and widens contentment. The ungrateful heart sees only what is missing.",
    evidence: {
      type: "ayah",
      arabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
      translation: "If you are grateful, I will surely increase you.",
      reference: "Qur'an 14:7",
    },
    action: "Write three specific blessings from today before sleeping.",
    habit: "After each prayer, say 'alhamdulillah' three times with presence of heart.",
  },
  {
    slug: "ikhlas",
    title: "Sincerity (Ikhlas)",
    description: "Purify intention for Allah alone",
    category: "Heart",
    reflection:
      "Actions may look the same outwardly, but sincerity changes their reality. Hidden riyā' (showing off) is subtle — returning often to 'why am I doing this?' helps.",
    evidence: {
      type: "hadith",
      text: "Indeed actions are by intentions, and each person will have what they intended.",
      source: "Sahih al-Bukhari & Muslim",
    },
    action: "Before one good deed today, pause and renew: 'I do this seeking Allah's pleasure alone.'",
    habit: "Each morning, briefly realign intention for worship and work in a single sincere sentence.",
  },
  {
    slug: "tawbah",
    title: "Tawbah (Repentance)",
    description: "Return to Allah without despair",
    category: "Heart",
    reflection:
      "No sin is too large for Allah's mercy, and no servant is too broken to return. The doors of tawbah do not close — not until death, not until the sun rises from the west.",
    evidence: {
      type: "ayah",
      arabic: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
      translation:
        "Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah.",
      reference: "Qur'an 39:53",
    },
    action: "Perform wudu and pray two rak'ah of tawbah tonight for a specific sin you wish to leave.",
    habit: "Say 'astaghfirullah wa atubu ilayh' 100 times daily, even outside of known sin.",
  },
  {
    slug: "tawakkul",
    title: "Tawakkul (Reliance on Allah)",
    description: "Tie the camel, then trust Allah",
    category: "Heart",
    reflection:
      "Tawakkul is not abandoning effort — it is doing what you can and leaving the outcome with the One who owns it. Anxiety often comes from forgetting that provision, timing, and results are not in our hands.",
    evidence: {
      type: "ayah",
      arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
      translation: "And whoever places his trust in Allah — He is sufficient for him.",
      reference: "Qur'an 65:3",
    },
    action: "Write down one worry, then write underneath: 'I have done my part. The rest is with Allah.'",
    habit: "Begin each task with 'bismillah, tawakkaltu ʿala Allah.'",
  },
  {
    slug: "sabr",
    title: "Sabr (Patience)",
    description: "Endure, restrain, persevere",
    category: "Character",
    reflection:
      "Sabr has three forms: patience in obedience, patience away from sin, and patience with what is decreed. All three are lamps in the night of trials.",
    evidence: {
      type: "ayah",
      arabic: "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ",
      translation: "Indeed, the patient will be given their reward without measure.",
      reference: "Qur'an 39:10",
    },
    action: "When a hardship bites today, delay complaint for ten minutes and make one dua instead.",
    habit: "Say 'inna lillahi wa inna ilayhi raji'un' at every small misfortune — losing time, keys, sleep.",
  },
  {
    slug: "dhikr",
    title: "Dhikr (Remembrance)",
    description: "Keep the tongue and heart moist with Allah",
    category: "Worship",
    reflection:
      "The living and the dead differ by the remembrance of Allah. Dhikr polishes the heart the way water cleans rust. Short formulas, repeated often, build a steady inner climate.",
    evidence: {
      type: "ayah",
      arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
      translation: "Surely in the remembrance of Allah do hearts find rest.",
      reference: "Qur'an 13:28",
    },
    action: "Say subhanallah, alhamdulillah, la ilaha illa Allah, Allahu akbar — 33 times each after a prayer.",
    habit: "Let dhikr replace idle phone moments — waiting in line, walking, before sleeping.",
  },
  {
    slug: "dua",
    title: "Duʿa (Supplication)",
    description: "Speak to your Lord — He is already listening",
    category: "Worship",
    reflection:
      "Duʿa is the weapon of the believer and the essence of worship. Allah is closer than the jugular vein; He shyness to turn away an open palm. Even what seems delayed is being answered.",
    evidence: {
      type: "ayah",
      arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
      translation: "And your Lord says, 'Call upon Me; I will respond to you.'",
      reference: "Qur'an 40:60",
    },
    action: "Write down five duas that matter to you and recite them in sujud tonight.",
    habit: "Make a short personal duʿa in your mother tongue during the last third of the night.",
  },
  {
    slug: "humility",
    title: "Humility",
    description: "Lower yourself and Allah raises you",
    category: "Character",
    reflection:
      "Arrogance is refusing truth and looking down on people. Humility is holding your gifts lightly, remembering they are on loan. Walking humbly on the earth is a sign of the servants of the Most Merciful.",
    evidence: {
      type: "ayah",
      arabic: "وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا",
      translation: "And the servants of the Most Merciful are those who walk upon the earth humbly.",
      reference: "Qur'an 25:63",
    },
    action: "Greet someone today that you normally walk past; ask how they are with presence.",
    habit: "Before entering a room, remind yourself: 'Allah is greater than anyone here.'",
  },
  {
    slug: "envy",
    title: "Uprooting Envy (Hasad)",
    description: "Rejoice for others and ask Allah directly",
    category: "Heart",
    reflection:
      "Envy is resenting the blessings Allah gave another. It eats good deeds the way fire eats dry wood. The cure is to make duʿa for the one envied — and to ask Allah to grant you similar without the loss of others.",
    evidence: {
      type: "hadith",
      text: "Beware of envy, for envy consumes good deeds just as fire consumes wood.",
      source: "Sunan Abu Dawud (sahih)",
    },
    action: "Name one person you envied this week and make three sincere duas for them now.",
    habit: "When you see a blessing on someone, say: 'Mashallah, may Allah increase them — and grant me from His bounty.'",
  },
  {
    slug: "pride",
    title: "Breaking Pride (Kibr)",
    description: "See your soul as it is",
    category: "Heart",
    reflection:
      "Kibr kept Iblis out of Paradise. The antidote is knowing your origin (a drop), your present (full of need), and your end (returning to dust). Honor belongs only to the One who lent it to you.",
    evidence: {
      type: "hadith",
      text: "None shall enter Paradise who has even a mustard seed's weight of arrogance in his heart.",
      source: "Sahih Muslim",
    },
    action: "Do a menial task today that 'someone like you' wouldn't — cleaning, carrying, serving.",
    habit: "Begin a conversation by asking more than telling.",
  },
  {
    slug: "hope-fear",
    title: "Hope and Fear (Rajaa & Khawf)",
    description: "Fly to Allah on two wings",
    category: "Heart",
    reflection:
      "Pure fear leads to despair; pure hope leads to laziness. The righteous balance the two — hopeful enough to strive, fearful enough to avoid sin. In health, lean on fear; in sickness and old age, lean on hope.",
    evidence: {
      type: "ayah",
      arabic: "يَدْعُونَ رَبَّهُمْ خَوْفًا وَطَمَعًا",
      translation: "They call on their Lord in fear and hope.",
      reference: "Qur'an 32:16",
    },
    action: "List one sin you fear and one quality of Allah that gives you hope. Sit with both.",
    habit: "In dua, alternate: 'O Allah save me from Your punishment' and 'O Allah grant me Your Paradise.'",
  },
  {
    slug: "charity",
    title: "Sadaqah (Charity)",
    description: "Secret giving extinguishes the anger of the Lord",
    category: "Social",
    reflection:
      "Charity is not what leaves your pocket — it is what the heart willingly releases. Small consistent giving is more beloved than rare large amounts.",
    evidence: {
      type: "hadith",
      text: "Charity does not decrease wealth. Allah only increases the servant in honor for his forgiveness.",
      source: "Sahih Muslim",
    },
    action: "Give something today — even a smile, a kind word, or a small amount — without mentioning it.",
    habit: "Set a fixed weekly sadaqah, however small, and protect it.",
  },
  {
    slug: "mercy",
    title: "Mercy to Creation",
    description: "Be merciful and you will be shown mercy",
    category: "Social",
    reflection:
      "The merciful are shown mercy by the Most Merciful. Mercy is not weakness; it is the fragrance of faith. Even a bird in the hand, an animal in the road, a stranger in distress — opportunities.",
    evidence: {
      type: "hadith",
      text: "The merciful are shown mercy by the Most Merciful. Be merciful to those on earth, and the One above the heavens will be merciful to you.",
      source: "Sunan at-Tirmidhi (sahih)",
    },
    action: "Go out of your way today for someone weaker than you — elderly, child, stranger, animal.",
    habit: "Before sleeping, forgive anyone who wronged you that day and ask Allah to forgive you.",
  },
  {
    slug: "zuhd",
    title: "Zuhd (Simplicity toward Dunya)",
    description: "Hold the world in your hand, not your heart",
    category: "Self-discipline",
    reflection:
      "Zuhd is not having nothing; it is owning the world without it owning you. Attachment, not ownership, is the danger. The hereafter grows clear when the heart is light.",
    evidence: {
      type: "ayah",
      arabic: "وَمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا إِلَّا لَهْوٌ وَلَعِبٌ ۚ وَإِنَّ الدَّارَ الْآخِرَةَ لَهِيَ الْحَيَوَانُ",
      translation:
        "This worldly life is nothing but diversion and amusement — and the Home of the Hereafter is the true life.",
      reference: "Qur'an 29:64",
    },
    action: "Declutter one drawer or folder today; give away something useful you don't truly need.",
    habit: "At night, ask: 'What did I own today that owned me?'",
  },
  {
    slug: "brotherhood",
    title: "Brotherhood & Forgiveness",
    description: "Keep the rope of unity unbroken",
    category: "Social",
    reflection:
      "The believers are a single body; when one member hurts, all feel the fever. Forgiveness frees the forgiver before the forgiven.",
    evidence: {
      type: "hadith",
      text: "None of you truly believes until he loves for his brother what he loves for himself.",
      source: "Sahih al-Bukhari & Muslim",
    },
    action: "Reconcile with one person you've been distant from — a message, a call, a visit.",
    habit: "Whenever someone's name comes to mind with irritation, say 'Allahumma aghfir lahu' (O Allah forgive him).",
  },
];
