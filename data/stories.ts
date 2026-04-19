export type StoryKind = "prophet" | "companion" | "history";

export interface StorySection {
  heading: string;
  body: string;
}

export interface Story {
  slug: string;
  kind: StoryKind;
  title: string;
  subtitle: string;
  era?: string;
  summary: string;
  sections: StorySection[];
  lessons: string[];
  source?: string;
}

export const stories: Story[] = [
  // ============================================================
  // PROPHETS
  // ============================================================
  {
    slug: "adam",
    kind: "prophet",
    title: "Prophet Adam ﷺ",
    subtitle: "Father of humankind — the first breath, the first mistake, the first repentance",
    era: "The beginning of humanity",
    summary:
      "Allah created Adam from clay and breathed His spirit into him, teaching him the names of all things and placing him in the garden. Tested by Iblis, Adam and his wife ate from the forbidden tree, learned the weight of sin, and were taught the first dua of tawbah.",
    sections: [
      {
        heading: "Creation and honor",
        body: "Allah created Adam as a khalifah (steward) on the earth. When He commanded the angels to prostrate out of honor, all obeyed — except Iblis, whose refusal was rooted in pride: 'I am better than him; You created me from fire and him from clay.'",
      },
      {
        heading: "Life in the garden and the single prohibition",
        body: "Adam and his wife lived in the garden with one restriction: do not approach a particular tree. Iblis, now the sworn enemy of humankind, whispered to them until they both ate from it.",
      },
      {
        heading: "The first dua of repentance",
        body: "Realizing their mistake, they turned to Allah with the words Allah Himself inspired them to say: 'Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakunanna min al-khasirin' — Our Lord, we have wronged ourselves. If You do not forgive us and show us mercy, we will surely be among the losers. Allah accepted their repentance and sent them to earth.",
      },
    ],
    lessons: [
      "The first human reflex after sin should be to turn to Allah — despair is the trap of Iblis.",
      "Pride is the oldest sin; it kept Iblis out of mercy even after eons of worship.",
      "Allah does not hold us accountable for the slip but for the refusal to return.",
    ],
    source: "Qur'an 2:30-38, 7:11-25, 20:115-123",
  },
  {
    slug: "nuh",
    kind: "prophet",
    title: "Prophet Nuh ﷺ",
    subtitle: "The patient caller — 950 years of invitation and a single flood",
    era: "The early generations",
    summary:
      "Nuh called his people to Allah for 950 years — by day and by night, in public and in private — and only a handful believed. When the earth was overwhelmed with idolatry and injustice, Allah commanded him to build the ark and the flood came.",
    sections: [
      {
        heading: "Long patience with a hard people",
        body: "Nuh tried every approach: 'I invited them publicly; then I appealed to them openly and in secret.' They plugged their ears, covered themselves with their garments, and insisted on their arrogance.",
      },
      {
        heading: "The ark and the flood",
        body: "Allah commanded him to build an ark in a desert. The people mocked. When the water burst from the earth and the sky, only those who had believed were saved — even among his own family, his son refused and was lost.",
      },
      {
        heading: "A father's plea and a gentle correction",
        body: "Nuh cried out for his son; Allah answered: 'O Nuh, he is not of your family — his deed was unrighteous.' Nuh then sought forgiveness for questioning Allah's wisdom. The message: belief, not bloodline, is the true kinship.",
      },
    ],
    lessons: [
      "Sincere daʿwah is not measured by numbers but by faithfulness to the task.",
      "Even prophets have to accept Allah's decree over loved ones.",
      "Long patience is itself worship — Nuh is called one of the five ulu al-ʿazm (possessors of resolve).",
    ],
    source: "Qur'an 11:25-48, 71:1-28",
  },
  {
    slug: "ibrahim",
    kind: "prophet",
    title: "Prophet Ibrahim ﷺ",
    subtitle: "Khalilullah — friend of the Merciful, breaker of idols, pillar of hanifiyyah",
    era: "~1800 BCE approx.",
    summary:
      "Ibrahim, raised among idolaters, reasoned his way to the One God. He confronted his father, broke his people's idols, was thrown into a fire that Allah made cool, and eventually became the father of two prophetic lines — Isma'il and Ishaq — building the Ka'bah with his son.",
    sections: [
      {
        heading: "From stars to Allah",
        body: "Ibrahim looked at the star, the moon, the sun and said of each, 'This cannot be my Lord,' for what sets cannot be eternal. His fitrah and his reason led him to the unseen Lord who does not set.",
      },
      {
        heading: "The axe among the idols",
        body: "Left alone with the idols during a festival, he smashed them all except the largest, and hung the axe on its shoulder. When questioned, he invited them to think: 'Ask the large one — if they can speak.' The truth pierced; then pride took over and they threw him into the fire.",
      },
      {
        heading: "The sacrifice and the Ka'bah",
        body: "Later, at an old age, he was given Isma'il. In a dream he was shown that he must sacrifice him. Both submitted — and the sacrifice was redeemed with a ram. Father and son then raised the foundations of the Ka'bah, praying: 'Rabbana taqabbal minna innaka anta al-sami'u al-'alim.'",
      },
    ],
    lessons: [
      "True tawheed is arrived at by both fitrah and reason.",
      "Submission (Islam) sometimes looks like losing what we love — but Allah never wastes what is given for Him.",
      "Every sincere prayer at the Ka'bah today echoes Ibrahim's supplication.",
    ],
    source: "Qur'an 6:74-79, 21:51-70, 37:99-113, 2:124-129",
  },
  {
    slug: "yusuf",
    kind: "prophet",
    title: "Prophet Yusuf ﷺ",
    subtitle: "From the well to the throne — beauty, temptation, forgiveness",
    era: "Ancient Egypt",
    summary:
      "Yusuf, betrayed by his brothers and thrown in a well, was sold into slavery in Egypt. He resisted the seduction of his master's wife, was wrongly imprisoned, and eventually rose to become treasurer of Egypt. When famine brought his brothers before him, he forgave them and brought his aged father Ya'qub to join him.",
    sections: [
      {
        heading: "The dream and the betrayal",
        body: "As a boy, Yusuf dreamt of eleven stars, the sun, and moon prostrating to him. His brothers, already jealous, threw him into a well. A passing caravan found him and sold him in Egypt.",
      },
      {
        heading: "The ordeal of temptation",
        body: "The wife of the minister tried to seduce him in a locked room. He said: 'Ma'adh Allah — refuge with Allah!' He was wrongly imprisoned for years. The dungeon became his platform of daʿwah: he called inmates to the One God while interpreting their dreams.",
      },
      {
        heading: "From prison to power",
        body: "The king's dream of seven lean cows eating seven fat ones reached him. His interpretation saved Egypt from famine. He was given authority over the treasuries. When his brothers came seeking grain, he tested them and then revealed himself: 'I am Yusuf, and this is my brother. Allah has been gracious to us.'",
      },
      {
        heading: "The forgiveness that echoed",
        body: "He forgave his brothers with no reproach: 'No blame upon you today. Allah will forgive you, and He is the most merciful of the merciful.' His father's sight returned when Yusuf's shirt was cast over his face.",
      },
    ],
    lessons: [
      "Beauty of character beats beauty of form — Yusuf's restraint is his real glory.",
      "What is taken in transgression is returned in multiples when bound to Allah.",
      "Forgiveness and mercy are the signature of true nobility.",
    ],
    source: "Qur'an 12 (the whole surah)",
  },
  {
    slug: "musa",
    kind: "prophet",
    title: "Prophet Musa ﷺ",
    subtitle: "From the river basket to the mount — the splitter of the sea",
    era: "Ancient Egypt and Sinai",
    summary:
      "Musa was placed in a basket in the Nile as a baby and raised in the very palace of the tyrant who wanted him dead. As a prophet he confronted Fir'awn, led Banu Isra'il out of slavery, split the sea, received the Tawrah on Sinai, and faced the trials of a stiff-necked nation.",
    sections: [
      {
        heading: "From the river to the palace",
        body: "A mother's grief became the door to a miracle. 'And We inspired his mother: Nurse him, and when you fear for him, cast him into the river.' Allah returned him to her as a nursing infant paid by Fir'awn's own treasury.",
      },
      {
        heading: "The bush and the burden",
        body: "Years later in the desert of Madyan, Musa saw a fire on Mount Tuwa. Allah spoke to him directly: 'I am Allah; there is no god but I. So worship Me.' He was sent back to the tyrant with his brother Harun — and the famous dua: 'Rabbi ishrah li sadri, wa yassir li amri.'",
      },
      {
        heading: "The splitting of the sea",
        body: "When Fir'awn's army pursued them to the Red Sea, the Children of Israel cried out 'We are caught!' Musa replied: 'No — my Lord is with me and will guide me.' Allah commanded him to strike the sea with his staff, and it split into paths.",
      },
      {
        heading: "The long trials with his nation",
        body: "Even after witnessing signs, his people demanded a visible god, worshipped a golden calf, and refused to enter the Holy Land. Musa's patience with them fills chapter after chapter.",
      },
    ],
    lessons: [
      "Allah's help can come through the very hands that once plotted against us.",
      "Dua at the edge of despair pulls the sea apart.",
      "Prophetic work is often more patience with one's own people than fighting the enemy.",
    ],
    source: "Qur'an 20, 26, 28 and surrounding surahs",
  },
  {
    slug: "isa",
    kind: "prophet",
    title: "Prophet Isa ﷺ",
    subtitle: "Word of Allah, son of Maryam — miracles of mercy, a return awaited",
    era: "1st century Palestine",
    summary:
      "Born miraculously to the virgin Maryam, Isa spoke from the cradle, healed the blind and the leper, and raised the dead by Allah's permission. His call was to pure monotheism. He was not crucified; Allah raised him up, and he will return before the Last Day.",
    sections: [
      {
        heading: "Maryam, the chosen one",
        body: "Maryam was raised in the sanctuary, fed by unseen provision. When the angel brought the news of a son, she asked, 'How can I have a child when no man has touched me?' The reply: 'Thus — Allah creates what He wills; when He decrees a matter, He only says to it Be, and it is.'",
      },
      {
        heading: "Miracles of mercy",
        body: "He made birds from clay that flew by Allah's leave, healed those born blind and lepers, and raised the dead. His miracles pointed to the One who sent him, not to himself.",
      },
      {
        heading: "The raising and the return",
        body: "'They did not kill him nor crucify him, but it was made to appear so.' Allah raised him to Himself. He will return before the Last Day, break the cross, kill the false messiah (Dajjal), and establish justice — then die as a human.",
      },
    ],
    lessons: [
      "Miracles are Allah's signs, not the prophet's divinity.",
      "The greatest miracle of Maryam's life was patient purity — the virgin birth came after years of devotion.",
      "To honor Isa is to follow his monotheism, not to deify him.",
    ],
    source: "Qur'an 3:42-59, 19:16-36, 4:157-159",
  },
  {
    slug: "muhammad",
    kind: "prophet",
    title: "Prophet Muhammad ﷺ",
    subtitle: "Seal of the prophets — mercy to the worlds",
    era: "570 – 632 CE",
    summary:
      "Born in Makkah in the Year of the Elephant, orphaned early, raised as 'al-Amin' (the trustworthy) before revelation. At forty he received the first revelation in the cave of Hira. Thirteen years of persecution in Makkah, ten years of state-building in Madinah, ending with the Farewell Pilgrimage and a completed deen.",
    sections: [
      {
        heading: "The years before prophethood",
        body: "Orphaned of his father before birth and his mother at six. Raised by his grandfather ʿAbd al-Muttalib, then his uncle Abu Talib. Known for truthfulness and trust; the Quraysh would leave their valuables with him. He married Khadijah — older, a businesswoman, the first believer.",
      },
      {
        heading: "The cave and the first revelation",
        body: "At forty, during a retreat in the cave of Hira, the angel Jibril appeared: 'Iqra! — Read!' He returned home shaking to Khadijah, who wrapped him in a cloak and assured him: 'By Allah, Allah will never humiliate you. You keep ties, you carry the burdens of the weak, you honor guests, and you help those struck by calamity.'",
      },
      {
        heading: "Thirteen hard years in Makkah",
        body: "Mocked, boycotted, his companions tortured. Bilal, Sumayyah, and ʿAmmar endured unspeakable abuse. He lost his wife and his uncle in the 'Year of Sorrow'. He went to Ta'if and was stoned — yet he still prayed for their children's guidance rather than their destruction.",
      },
      {
        heading: "Hijrah and Madinah",
        body: "At fifty-three he emigrated with Abu Bakr, pursued by Quraysh. The cave of Thawr, a spider's web, a dove's nest — small mercies that shielded the two men on whose mission the world turned. In Madinah he built a society: a masjid, a brotherhood between Muhajirun and Ansar, a constitution, justice.",
      },
      {
        heading: "Return and farewell",
        body: "Makkah was opened almost bloodlessly in 8 AH. He entered the Ka'bah and broke the idols. At his Farewell Pilgrimage 23 years after the first revelation, he addressed 100,000+ Muslims with the declaration of rights, equality, and final deen. He passed away soon after in the lap of Aisha.",
      },
    ],
    lessons: [
      "Before prophethood comes character — reputation for truth is the soil of daʿwah.",
      "The greatest revolution in history began alone in a cave and ended with a balanced city.",
      "His response to Ta'if (mercy over vengeance) remains the highest bar of character.",
    ],
    source: "Qur'an in full; Sirah of Ibn Ishaq/Ibn Hisham, Sahih al-Bukhari & Muslim",
  },

  // ============================================================
  // COMPANIONS (Sahabah)
  // ============================================================
  {
    slug: "abu-bakr",
    kind: "companion",
    title: "Abu Bakr as-Siddiq (RA)",
    subtitle: "The truthful — first believer among men, first caliph",
    era: "~573 – 634 CE",
    summary:
      "The closest friend of the Prophet ﷺ and the first adult male to embrace Islam. He spent his wealth to free tortured slaves — Bilal among them — and stood with the Prophet ﷺ in the cave during the Hijrah. After the Prophet's death he held the ummah together through the Riddah wars.",
    sections: [
      {
        heading: "Believing without hesitation",
        body: "When the Prophet ﷺ first told him, he accepted on the spot. When the Isra' and Mi'raj were reported, even disbelievers thought Abu Bakr would doubt — but he said: 'If he said it, it is true.' That is the day he earned the title as-Siddiq.",
      },
      {
        heading: "Freeing slaves",
        body: "He emptied his fortune freeing Bilal, ʿAmir ibn Fuhayrah, and many others. His father asked why he spent so much on weak slaves; he replied, 'I seek only what is with Allah.'",
      },
      {
        heading: "The cave and the hijrah",
        body: "Pursued to the cave of Thawr, he whispered, 'If one of them merely looked down, he would see us.' The Prophet ﷺ replied: 'What do you think of two, when Allah is the third?'",
      },
      {
        heading: "Steadying the ummah",
        body: "At the Prophet's death, he steadied a shaken community: 'Whoever worshipped Muhammad — Muhammad has died. Whoever worships Allah — Allah is alive and never dies.' He fought the Riddah wars, preserved the Qur'an in written form, and died in office after two years.",
      },
    ],
    lessons: [
      "Real companionship is defending the absent and bearing their burden.",
      "Wealth used to free others is wealth multiplied in the sight of Allah.",
      "Leadership at crisis is the test of a steady iman, not a loud voice.",
    ],
  },
  {
    slug: "umar",
    kind: "companion",
    title: "ʿUmar ibn al-Khattab (RA)",
    subtitle: "Al-Faruq — the one who distinguishes truth and falsehood",
    era: "~584 – 644 CE",
    summary:
      "Once a fierce enemy of Islam, ʿUmar walked out to kill the Prophet ﷺ and came back a believer. His caliphate expanded the Islamic state across Persia, Egypt, and the Levant while he himself slept in public streets, patched his own garments, and trembled at every coin of the Muslim treasury.",
    sections: [
      {
        heading: "The day of his conversion",
        body: "On his way to harm the Prophet ﷺ he was told his own sister had embraced Islam. He went to her house, struck her, and then — his heart softened when he read pages of Surah Ta-Ha. He went straight to the Prophet ﷺ and declared faith. Makkah knew: something enormous had shifted.",
      },
      {
        heading: "The fearful leader",
        body: "As caliph of a vast empire he wore patched garments and said: 'Even if a donkey falls in Iraq, I fear Allah will ask me why I did not level the road for it.' He established the dīwān, pioneered the Islamic calendar, and welcomed the poor as first visitors.",
      },
      {
        heading: "Justice above blood",
        body: "When his own son drank wine in Egypt, the punishment was carried out in public. When a governor's son struck a Copt, ʿUmar gave the Copt the same lash against the governor's son and said to the governor: 'Since when have you enslaved people whom their mothers bore free?'",
      },
    ],
    lessons: [
      "Allah can transform the greatest enemy into the greatest ally in one afternoon.",
      "Authority is a trust — the more you have, the more sleepless the night.",
      "True justice makes no exception for one's own family.",
    ],
  },
  {
    slug: "uthman",
    kind: "companion",
    title: "ʿUthman ibn ʿAffan (RA)",
    subtitle: "Dhu al-Nurayn — possessor of two lights, preserver of the Qur'an",
    era: "~576 – 656 CE",
    summary:
      "The Prophet ﷺ married two of his daughters to him — hence Dhu al-Nurayn. A wealthy merchant who bought the well of Rumah and donated it to Madinah, equipped the Army of Hardship single-handedly, and standardized the Qur'an in one authoritative text during his caliphate.",
    sections: [
      {
        heading: "A quiet wealth given away",
        body: "He bought the only fresh-water well from a Jewish man and made it a perpetual endowment for the community of Madinah. When famine struck and the caravans arrived, he refused commercial offers and donated every grain.",
      },
      {
        heading: "Preserving the Qur'an",
        body: "As the ummah expanded and dialects diverged, ʿUthman gathered a committee led by Zayd ibn Thabit to establish one standardized Qur'anic text. Copies were sent to every major region. Every mushaf today descends from this effort.",
      },
      {
        heading: "Patience in tribulation",
        body: "When rebels surrounded his house, he refused to let blood be spilled in his defense. He was martyred while reading the Qur'an. 'Fa-sayakfikahum Allah, wa huwa as-sami'u al-'alim' — the verse was visible on the page.",
      },
    ],
    lessons: [
      "Wealth with haya (modesty) is a spring of generosity.",
      "Preserving the word of Allah is among the greatest ongoing charities.",
      "He chose to absorb injustice rather than allow the first civil sword to fall by his hand.",
    ],
  },
  {
    slug: "ali",
    kind: "companion",
    title: "ʿAli ibn Abi Talib (RA)",
    subtitle: "The lion of Allah — scholar, warrior, fourth caliph",
    era: "~601 – 661 CE",
    summary:
      "Cousin of the Prophet ﷺ, raised in his household. The first youth to accept Islam. He slept in the Prophet's bed the night of Hijrah, risking assassination. A master of knowledge and sword, he became the fourth rightly guided caliph during the first major fitnah.",
    sections: [
      {
        heading: "Courage on the night of Hijrah",
        body: "Quraysh had plotted assassins around the house. ʿAli — a teenager — volunteered to sleep in the Prophet's bed to give him cover. He rose in the morning and returned all the deposits the Prophet ﷺ had been holding in trust to their owners before making his own journey.",
      },
      {
        heading: "The depth of his knowledge",
        body: "The Prophet ﷺ said: 'I am the city of knowledge and ʿAli is its gate.' Judges in his caliphate brought cases to him that no one else could untangle.",
      },
      {
        heading: "Caliphate in civil strife",
        body: "He took the caliphate at the hardest moment — after ʿUthman's martyrdom, during open rebellion and factionalism. He was martyred at fajr in the masjid of Kufah by a Khawarij assassin.",
      },
    ],
    lessons: [
      "Youth does not disqualify someone from carrying the deen.",
      "Knowledge and courage paired produce just leadership.",
      "The early civil wars teach us to pray for the ummah and guard our tongues around them.",
    ],
  },

  // ============================================================
  // ISLAMIC HISTORY
  // ============================================================
  {
    slug: "hijrah",
    kind: "history",
    title: "The Hijrah",
    subtitle: "The migration that marked a new era — 622 CE",
    era: "1 AH",
    summary:
      "After thirteen years of persecution in Makkah, Allah permitted migration to Yathrib (soon to be Madinah). The Prophet ﷺ and Abu Bakr undertook the famous journey through the cave of Thawr while Quraysh assassins waited at the door.",
    sections: [
      {
        heading: "The pledges of ʿAqabah",
        body: "Pilgrims from Yathrib had embraced Islam at ʿAqabah — first twelve, then seventy-three men and two women. They pledged to protect the Prophet ﷺ as they protected their own households.",
      },
      {
        heading: "The cave of Thawr",
        body: "Quraysh followed the trail to the cave's mouth. A spider wove a web across the entrance; a dove laid eggs at its edge. 'This place looks untouched,' said the trackers — and turned away.",
      },
      {
        heading: "Entry into Madinah",
        body: "Madinah came out in song: 'Tala'a al-badru ʿalayna — the full moon has risen upon us.' He built the masjid and bonded brother to brother across tribal lines.",
      },
    ],
    lessons: [
      "Spiritual progress often requires a physical move — the body follows the heart's direction.",
      "Small natural things (a web, a nest) can be the Lord's armor.",
      "The Hijri calendar's start point is not a battle or a birth — it is a migration for Allah.",
    ],
  },
  {
    slug: "badr",
    kind: "history",
    title: "The Battle of Badr",
    subtitle: "The first major battle — 2 AH / 624 CE",
    era: "2 AH",
    summary:
      "313 Muslims, poorly armed, met 1000 heavily armed Quraysh at the wells of Badr. Allah sent angels and victory. Badr became 'the criterion' (yawm al-furqan) — the day Allah separated truth from falsehood on the battlefield.",
    sections: [
      {
        heading: "The prayer of a desperate night",
        body: "The Prophet ﷺ prayed all night in his canopy, hands raised: 'O Allah, if this small band is destroyed today, You will not be worshipped on earth.' Abu Bakr eventually clasped his shoulder — 'Enough, O Messenger of Allah; Allah will fulfill His promise to you.'",
      },
      {
        heading: "Angels and a battlefield",
        body: "Allah sent a thousand angels in succession. Muslims saw Quraysh as few in their eyes, and Quraysh saw Muslims as many — both signs from the Unseen.",
      },
      {
        heading: "Treatment of prisoners",
        body: "Literate prisoners could earn release by teaching ten Muslim children to read — perhaps the earliest adult-education policy tied to mercy in military history.",
      },
    ],
    lessons: [
      "Numbers are not the decisive factor when Allah is with you — but dua and discipline are.",
      "Even in victory, the Prophet ﷺ refused arrogance and sought education as ransom.",
      "Gratitude protects victory; arrogance invites defeat (as partly seen in Uhud).",
    ],
  },
  {
    slug: "conquest-of-makkah",
    kind: "history",
    title: "The Opening of Makkah",
    subtitle: "Fath Makkah — 8 AH / 630 CE",
    era: "8 AH",
    summary:
      "Eight years after being driven out, the Prophet ﷺ returned to Makkah with ten thousand companions. Makkah fell almost without bloodshed. He entered with his head bowed until his beard almost touched the saddle — in humility, not triumph.",
    sections: [
      {
        heading: "A broken treaty and a measured response",
        body: "A Quraysh-allied tribe attacked a Muslim ally in violation of the Hudaybiyyah treaty. The Prophet ﷺ quietly mobilized — Quraysh did not even know the army was coming until it was outside the city.",
      },
      {
        heading: "The unprecedented pardon",
        body: "Standing at the Ka'bah, the men who had driven him out, killed his uncle Hamzah, and tortured his companions waited for judgment. He asked: 'What do you think I will do with you?' They replied: 'A noble brother, son of a noble brother.' He said: 'Go — you are free.' Hind, Abu Sufyan, Wahshi — all spared.",
      },
      {
        heading: "Cleansing the Ka'bah",
        body: "He entered the Ka'bah and broke 360 idols, reciting: 'Truth has come and falsehood has vanished.'",
      },
    ],
    lessons: [
      "The strongest moment in life is when you could crush an enemy and choose not to.",
      "Victory without arrogance is rarer than victory itself.",
      "The cleansing of the Ka'bah is the model for cleansing our hearts.",
    ],
  },
  {
    slug: "farewell-sermon",
    kind: "history",
    title: "The Farewell Sermon",
    subtitle: "Khutbat al-Wadaʿ — 10 AH / 632 CE",
    era: "10 AH",
    summary:
      "During the Farewell Pilgrimage, the Prophet ﷺ delivered what would be his final public address to ~100,000 Muslims on the plain of ʿArafah. In it he affirmed the sanctity of life and property, the equality of all races, the rights of women, the end of tribal blood revenge, and the completeness of the deen.",
    sections: [
      {
        heading: "The foundational rights",
        body: "'Your lives, your properties, and your honor are sacred to one another, just as this day is sacred, this month is sacred, this city is sacred.'",
      },
      {
        heading: "Equality and the end of tribalism",
        body: "'No Arab has superiority over a non-Arab, no non-Arab over an Arab; no white over a black, no black over a white — except by taqwa.'",
      },
      {
        heading: "The verse that ended revelation",
        body: "During the sermon came: 'This day I have perfected for you your religion, and completed My favor upon you, and have approved for you Islam as your religion.' (Qur'an 5:3). The companions understood: he was close to the end.",
      },
    ],
    lessons: [
      "The deen is complete — nothing essential is missing.",
      "Islamic equality is not modern rhetoric; it was thundered into a patriarchal, tribal plain 1400 years ago.",
      "The last public words of the Prophet ﷺ are the constitution of the ummah.",
    ],
  },
];
