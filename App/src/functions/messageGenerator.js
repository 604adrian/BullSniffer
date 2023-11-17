export default function messageGenerator(randomNumber) {

  const shaki = `To be, or not to be, that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take arms against a sea of troubles
And by opposing end them. To die—to sleep,
No more; and by a sleep to say we end
The heart-ache and the thousand natural shocks
That flesh is heir to: 'tis a consummation
Devoutly to be wish'd. To die, to sleep;
To sleep, perchance to dream—ay, there's the rub...`

  const noBsMessage = [
    "Low BS",
    "Man without original sin",
    "The purity of a baby", 
    "Impressively little BS",
    "No BS at all",
    "The innocence of a child",
    "Honesty",
    "Congrats",
    "Don't let it go to your head",
    "This is pretty cool",
    "Don't get used to it",
    "There are some good vibes in this room",
    "hakuna matata",
    "Job well done",
    "This is pretty cool",
    "Yeah, I like it",
    "Good job",
    "You make me proud",
    "You make me proud, son",
    "This is def a high-power moment",
    "Big d!-k energy",
    "That's pretty neat",
    "I love you",
    "You make my heart go pit-a-pat",
    "lofi beats to study/chill to",
    "That's chunga chunga woot woot",
    "Will you marry me?",
    "Have you ever thought 'damn I'm gonna eat you?' Because that's the kind of energy I'm picking up from you right now. Very good",
    "Nice",
    "Bruhhhh....",
    "BRUH",
    "Bruhhhhhh",
    'YEETeiu',
    'OKAY',
    'DA*m',
    'eat me',
    'rawr',
    'okay papi',
    "Like my daddy always said, never slap a goats bee-hind in the heat of August or you'll be slide-slumping in the mud rinka-doodling the diddly-doo right up behind the loopy-loo of your soopy-soo, YEEEEEEEEE HAAAWW",
    'Gee wizz',
    "Yeah, that's pretty cool",
    "Holy moly",
    "That's amazing",
    "Cool cats on patrol",
    "Papi",
    "Wow",
    "Feels like the 1990s",
    "Yeah, gonna say it: cool af",
    "Tee hee 😇", "yessir",
    "yes ma'am",
    "Sick bro",
    "YEEEEEEEEEEEEE.......",
    "....HAAAAAAWWWWWWWWWW",
    "🤠",
    "I love you",
    "Will you honky my donkey? 🥺",
    "UwU",
    "OwO",
    "uWu",
    "oWo",
    "HI",
    "don't get used to it, pumpkin",
    "NECH ŽIJE CISÁR PRAKOV",
    "POĎME",
    "دعنا نذهب",
    '走吧',
    '가자',
    'レッツゴー',
    'there are people in this world who do not even think before opening a can of peanut butter jelly time peanut butter jelly time peanut butter jelly peanut butter jelly peanut butter jelly and a baseball bat',
    'vegan snikerdoodles',
]

  const lowBsMessage = [
    "low-grade BS",
    "Bull$--t might be too strong of a word, it might be more like... bull-poop",
    "Muggy stench but otherwise passable",
    "Okay but not great",
    "OK for a compromise",
    "It's definitely bull$--t, but from a small bull", 
    "No need to contact your lawyer",
    "Not the worst stench in the world, but some airfreshener would go a long way", 
    "Enough fertilizer for a small house plant",
    "Do not ingest", 
    "B.S. LEVEL: The municipal government trying to be cool to appeal to the youngsters",
    'B.S. LEVEL: Talking about the weather',
    "B.S. LEVEL: Small talk while taking a train to work", 
    "B.S. LEVEL: yo mama", 
    "Cringy but well intentioned", 
    "A little cringe but passable", 
    "The sort of thing that your mother would bring up at a family get together and you cringe at because its boomer-humour but you love your mom anyway so you don't say anything", 
    "B.S. LEVEL: plausible deniability", 
    "B.S. LEVEL: parking tickets", 
    "B.S. LEVEL: yo mama", 
    "B.S. LEVEL: the weather-man", 
    "like the weather lady", 
    "B.S. LEVEL: Facebook drama but its actually kind of serious this time", 
    "B.S. LEVEL: Your cousins that are kind of elitist but you love them anyway because you grew up with them and are all really nice people", 
    "B.S. LEVEL: Your cousins who think you're weird because they don't get your sense of humour but you love 'em anyway and are happy for them when they think about academic stuff or whatever",
    "B.S. LEVEL: 'opposite day'",
    "B.S. LEVEL: 'I know I am but what are you?'",
    "B.S. LEVEL: playgrounds getting ride of teeter totters because they are a safety hazard",
    "B.S. LEVEL: 'celiac disease'",
    "B.S. LEVEL: glutin 'intolerances'",
    "B.S. LEVEL: arguing with someone but they make a typo and you point it out which looks petty but ffs Jerry your 35 year-old man you should know how to spell by now",
    "B.S. LEVEL: email sign-offs",
    "B.S. LEVEL: American patriotism",
    "B.S. LEVEL: idk",
    "B.S. LEVEL: nothing to worry about",
    "B.S. LEVEL: Snoop Dog (no BS at all)",
    "B.S. LEVEL: drinking water to make your pee clear",
    "B.S. LEVEL: California",
    "B.S. LEVEL: the thingy with the thing",
    "If its not crunchy no munchy",
    "Please do not blend",
    "Keep away from pets",
    "Achoo",
    "don't @ me",
    "feeling slick",
    "bom bom in the hom hom",
    "hom hom in da bom bom?",
    "oh yeah baby",
    "oH BABY ITS A TRIPLE-M'-DIPPLE wooot woooot",
    'that is seriously awesome dude',
    'bro.......',
    'BRO......',
    'BRUH....',
    'oh wow thats quite intense --  the fresh air i mean',
    'my nostrils hurt from all this freshness',
    'a face that could lead a nation',
    'this is the sort of thing that makes you want to die for your country --- godbless',
    'so happy to see this',
    'im smiling on the inside',
    'im smiling... on the OUTSIDE',
    'im smiling on the outside and messageBackupon the inside',
    'pls will you live with me?',
    'thank you so much',
    'thank you SO much',
    'thank YOU so MUCH',
    'WOOOOOOWIE',
    'okay now lets not get too excited',
    'this is based af bro homie homeslice',
    'bro homie homeslice',
    'this is based af',
    'beautiful enough to make a grown man cry',
    'im crying tears of joy',
    'you are seriously so cool',
    'can i be you?',
    'imitation is the sincerest form of flattery',
    'spelling bees before spell check',
    'spelling tests on a computer with spell check',
    'this is like... a beautiful smell. pls marry me',
    'i will remember you.... will you remember me?',
    "don't let your life, pass you by",
    'thank you',
    'thank you sincerly',
    'God bless America',
    'Long live the Queen 👑 (RIP)',
    'Long live the King',
    '🎼"If you are English, please stand up"🎵',
    "🎺 OHHHHHHHHHhhhh.... CANANNNNADAAAAAAAAAAAAAAaaaa....🇨🇦",
    "I want to have your babies",
    "Our HOME and NATIVE LAAANANNDDDDDDDDDD 🇨🇦",
    "Canadian National Anthem – Ô Canada [French version]",
    "Canadian National Anthem - Ô Canada | [French version] | [INTENSE]",
    "Canadian National Anthem - Ô Canada | [French version] | [IN THE HOOD]",
    "Ô Canada! Terre de nos aïeux, Ton front est ceint de fleurons glorieux!",
    'pls oh PLS for the love of god PLS be me',
    'hi',
    'will the real slim shady pls stand up',
    'cannibalism may be morally equivalent to meat-eating and we just think it isnt due to cultural taboos',
    'my mother loves me',
    'my mother says that i am a very handsome young man',
    'my grandma says any girl would be lucky to have me',
    'buckle up. BUCKLE... UP...',
    'if ingested rinse with water',
    'let soak for 4 hours then stir',
    'do not refrigerate',
    'keep refrigerated',
    'best if consumed 5 days after opening',
    "don't move towards the light"
  ]

  const midBsMessage = [
    "Mid-range BS",
    "Cutting it real close",
    "Enough fertilizer for a medium-sized house plant",
    "Might be time to consider getting some clothes pegs for your nose", 
    "WOW, OK then", 
    "The scent is strong, but not overpowering", 
    "If ingested, this bull$--t is enough to cause serious sickness", 
    "This is worth looking into", 
    "Definite bull$--t, but the bull might be on the smaller side", 
    "Worth getting that checked out", 
    "I certainly wouldn't eat it, if that's what you're asking", 
    "I wouldn't kiss my mother with this", 
    "Please keep away from small children",  
    "This is the sort of thing that is best not discussed publicly", 
    "This is taboo", 
    "Don't bring this level of BS to a first date", 
    "Drink some water", 
    "The air feels different", 
    "Try again", 
    "Hm......", 
    "Okay pal", 
    "Chillin' like a villin", 
    "The cool grandparents on the block who get all decked out for halloween", 
    "This is like that dad who tries really hard to be cool and his child's birthday party", 
    "Like a well intentioned humanoid", 
    "This is something to consider.... sort of", 
    "This is WOW, just WOW (in a good way... sort of)", 
    "When you say 'thank you' and the person responds with 'that wasn't a compliment' 😬", 
    "Highschool relationships on a good day", 
    "B.S. LEVEL: when a guy is drunk and ranting about string theory but you know he knows nothing about string theory but whatever you don't either and he is well intentioned so you'll let it slide",
    "B.S. LEVEL: Arts students who pretend to have a vested interest in the unification of QM and gravity", 
    "B.S. LEVEL: Arts students who pretend to understand quantum mechanics",
    "Just keep it away from my children and we shouldn't have a problem", 
    "Some thug lyfe type stuff over here", 
    "B.S. LEVEL: Your highschool English teacher", 
    "B.S. LEVEL: Your first time trying to ask someone out", 
    "Kinda cool but kinda cringe", 
    "Not sure what to say", 
    "B.S. LEVEL: 1987", 
    "B.S. LEVEL: people who hate/love Elon Musk a little too much", 
    "B.S. LEVEL: a cheese platter that smells", 
    "B.S. LEVEL: global injustice", 
    "Yo mama is not to be contained", 
    "What contains the container?", 
    "If I were a chipmunk, I would be a monk, therefore chipmunks are religious", 
    "YASSS QUEEN", 
    "Okay who tf is eating my broccoli again", 
    "I'm big mama", 
    "Ya dats right gurl", 
    "Is a queen a gurl or is every gurl a queen? 👸", 
    "The Queen of England was a fun lady", 
    "The Queen of England knew how to party", 
    "How much would a wood-chuck chuck if a wood-chuck could chuck wood?", 
    "Fantastic", 
    "Eat with caution", 
    "Preparing a meal with this? Don't", 
    "Parental advisory: rad af",
    "B.S. LEVEL: an old person talking loudly about social justice issues in public", 
    "FFS DO 👏 NOT 👏 EAT!!!! FOR THE LOVE OF GOD DO NOT EAT",
    "B.S. LEVEL: movies about plastic dolls that pretend they are doing something",
    "B.S. LEVEL: the city of Vancouver",
    "hello darkness my old friend",
    "frek frak",
    "don't tell mom",
    "don't tell dad",
    "don't tell grandma",
    "don't tell grandpa",
    "don't tell the former german chancellor angela merkel what has transpired here today",
    "B.S. LEVEL: the Quebec seperatist movement",
    "Quebecios nationalism",
    "French language inititives",
    "full metal spring sheets",
    'DO NOT LET THE DEHYDRATED PUMPKINS TURN NUMB',
    'B.S. LEVEL: carving pumpkins with power-tools 🎉🥳😏',
    "B.S. LEVEL: a large production company constantly pumping out movies no one asked for until they've sucked every last penny out of the franchise",
    '🎃 ➡️  💖',
    'B.S. LEVEL: "the colour green sleeps furiously" (or whatever)',
    'B.S. LEVEL: being radicalized by the YouTube algorthm',
    'B.S. LEVEL: being radicalized by Facebook',
    'B.S. LEVEL: being radicalized by Twitter',
    'B.S. LEVEL: being radicalized by social media',
    'B.S. LEVEL: people outside of america who follow american politics very closely as if they would have cared if not for the fact that us news agencies target international audiences',
    'B.S. LEVEL: late night talk show hosts pretending to be likeable, relatable people rather than millionaires who live in millionaires',
    'B.S. LEVEL: celebrities who pretend that they understand what its like to have money struggles',
    'B.S. LEVEL: rich politicans who pretend that they grew up working-class',
    'B.S. LEVEL: not siezing the means of production',
    'VIVA LA RESISTANCE',
    'WORKERS OF THE WORLD UNITE',
    "Offical anti-union stickers on the walls of the biggest fast food chain (look closely and you'll see them)",
    'B.S. LEVEL: people under the age of 30 who only listen to old music in an effort to be cool',
    'B.S. LEVEL: people who use vinyles and justify it by pretending that it somehow makes the music quality better or something even though they could by a digital speaker for 1/6th the price that would do exactly the same thing',
    'B.S. LEVEL: people who wear "beanies" for fashion rather than warmth',
    'B.S. LEVEL: people who vomit on public transit then try to clean it up with a pooper-scopper [big oopsie]',
    'B.S. LEVEL: farting REALLY LOUDLY on public transit during rush hour 💨 🌚 🌝',
    'B.S. LEVEL: 12 year olds wearing air-pods',
    'B.S. LEVEL: people who pretend they bought a smart watch for some reason other than showing off',
    'B.S. LEVEL: X (formerly known as Twitter)',
    'B.S. LEVEL: chatGTP',
    'B.S. LEVEL: AI doomers',
    'the spores impinge your nostril like an icile stabbing in the rain',
    'ingestion is ill-advised',
    'YOWZA',
    'wheewww doggy 🤠',
    '👈😎👈',
    'backing away slowly right now',
    'if ingested call poison control',
    'B.S. LEVEL: Jason Mraz'
  ]

  const highBsMessage = [
    "Advanced BS", 
    "B.S. LEVEL: the paleo diet",
    "This is seriously concerning", 
    "Higher than the WHO guidelines", 
    "More BsPPL (BS Particles Per Liter) than recommended by the World Health Organization international guidelines", 
    "The stench is overpowering", 
    "B.S. LEVEL: most modern philosophy departments", 
    "In some jurisdictions, this level of BS is considered a public health hazard", 
    "In some jurisdictions, this level of BS is a criminal offense",
    "This app is not a replacement for qualitifed medical advice. Please seek medical assistance if you fear that the BS levels in your area are too high",
    "B.S. LEVEL: a dimly lit room full of drunk Joe-Rogan-bros talking about DMT",
    "Not that crazy but still pretty crazy when you think about it",
    "So this is what the world has come to",
    "Choo choo",
    "Here comes the choo choo train 😏",
    "Please for the love of God do not eat this",
    "This is NOT 👏 EDIBLE 👏",
    "Don't hand this in for your homework unless you know what you are doing",
    "Smells like a paper written for the sake of being published",
    "Publish-or-perish-type content",
    "Seriously.... what are you guys doing?",
    "Do not put near any holes or orifices",
    "Have you tried turning it on and off again?",
    "Yoodle-dee-hoo",
    "Yee doggy, never slap a pigs buttocks in the mud in the heat of December, or you'll get your cow right up your honky",
    "Yo... my man",
    "Enough BS to fertilize an entire army base",
    "Enough BS to fertilize an entire cornfield",
    "Selling this BS as cheap fertilizer might be a good business idea",
    "People don't kill people, BS kills people",
    "When I was a small boy this sorta BS would be the sorta thing you shovel up and put in a baggy for later",
    "This BS is potent my man",
    "This BS is really so full of nitrogen",
    "THE 👏 NITROGEN 👏 CYCLE",
    "Whheeeew doggy, I'm feeling fertile around here with all this fertilizer",
    "Enough fertilizer to power an entire fertility clinic",
    "Smells like a farm",
    "Dag gummnit",
    "Lets get to the bottom of this",
    "Okay now",
    "WHERU",
    "I'm big daddy",
    "Enough BS to make a dung beetle a very happy man",
    "We come in peace",
    "Yeehaw",
    "Okay now there Doggy Ba-John-Gee",
    "Lets hit the road",
    "B.S. LEVEL: Yoga moms who think they understand quantum mechanics",
    "Smells like yo mama",
    "B.S. LEVEL: the LessWrong forum",
    "B.S. LEVEL: outspoken atheists who think they are really smart but are actually just emotionally unintelligent",
    "B.S. LEVEL: self-proclaimed 'skeptics' who think they are really smart but are actually just really annoying",
    "the man who ate a penguin",
    "penguin city more like penguin fiddy",
    "i love u",
    "rectum ad hectum",
    "B.S. LEVEL: people who pretend to understand string theory",
    "this must be a government conspiracy",
    "censorship",
    "do not eat a penguin",
    "why would anyone eat a penguin?",
    "penguins are seriously cute, but this on the other hand...",
    ". . .",
    "no comment",
    "bro, seriously?",
    "i'm not mad, just disapointed",
    "frikity frak",
    "carbon monoxide",
    "pls do not inhale",
    "FOR THE LOVE OF GOD DO NOT INHALE",
    'ABORT MISSION',
    'RETREAT',
    'the spores are in my lungs',
    'tiki da dodo',
    'this reminds me of that one time when i ate too many burritos',
    'HGYNNNNNNNN 😖 --- stomach pain',
    'this is quite something',
    'this is like that time when people punched other people for fear of god',
    "don't ever drink my pee pee again, you hear me???",
    "i'm a god fearing man, so i shall not speak on thiss issue",
    'thou shalt not park',
    "don't park your vehicle in front of this",
    '. . .',
    'wow.... just wow',
    'wtf',
    'you finally did it',
    'if i had a dollar for everytime an american called me cute, id have exactly zero dollars because the exchange rates are wild',
    'man on the moon more like man on your spoon lmao gotem',
    'you broke it',
    'my mother taught me that if i have nothing nice to say to say nothing at all',
    'i do not have any further comments at this time',
    'pls stop... for the love of god pls stop',
    'government censorship might censor this, please store in a safe environment',
    'there are places on earth where eating a burrito is not even an option. just think about that for a second',
    "i'll wrap you up and eat you like a burrito 😼 rawr",
    'im a fan of your work',
    'you saved my life',
    'seriously... ur cute, but u need to stop',
    'this is not the way',
    'im pretty sure this is against the bible or something',
    "can't put my finger on it exactly but i'm pretty sure this is sinful somehow",
    "don't chonky my donkey if you're not going to blonky my sponky",
    'woot woot',
    'mixing in the mud',
    'a meat grinder for human meat',
    'cannabilism may be morally equivalent to meat-eating and we just think it isnt due to cultural taboos',
     "Critically high BS", 
    "HOLY COW", 
    "Yeeeee dogggyyyy", 
    "whEEEEw, that's a doozy", 
    "Reminis", 
    "Enough BS to give Jean Paul Satre a run for his money", 
    "Evacuate the area if safe to do so", 
    "Prolonged exposure may cause nose blindness", 
    "Someone in this room has studied philosophy", 
    "Someone in this room thinks they understand quantum mechanics by watching YouTube videos", 
    "Too many podcasts", 
    "Stinks of the man", 
    "Stick it to the man or his bull$--t will kill you", 
    "okay this is not funny", 
    "guys?", 
    "aSSFNSDNFSJENCSCESAJNR395JT23", 
    "wooopoooooooooooo dogggygyyyyyyyyyyrey9eiry", 
    "...", 
    "ffs", 
    "help", 
    "pls help", 
    shaki,
    "boxy not foxy",
    "don't do it",
    "why you always lying?",
    'no thanks',
    'please stay hydrated',
    'for the LOVE OF GOD',
    'no',
    'pls no', 
    'mommy',
  ]

  const maxBsMessage = [
    "Deadly BS",
    "Pure BS",
    "The level of BS here is so high that honestly it's downright impressive", 
    "There is a certain purity here", 
    "The Platonic form of BS",
    "Someone's having a bad day", 
    "Smells like the public relations board for a large corporation", 
    "Blinding", 
    "Powerful stench", 
    "Cool", 
    "Game over",
    "B.S. LEVEL: illusionism about consciousness",
    "B.S. LEVEL: eliminative materialism",
    'B.S. LEVEL: corporate personhood',
    'sneaky',
    "don't do it again",
    'wowie',
    'oogles the mind',
    'boggles the mind',
    'geez',
    'nose blindness on the way',
    'do not sniff',
    'i sniffed but i regret it',
    'man this is really something',
    'my precious',
    'thank you',
    'seriously, thank you',
    'if i wasnt a donkey, id be a honkey',
    'loud',
    "can't smell",
    "tell my family i love them",
    'if im not out in 10 minutes, call for help',
    'okay sir',
    "okay ma'am",
    '1v1',
    'pls God no',
    'NOOOOOOO',
    'not good',
    'merde',
    'B.S. LEVEL: (ノಥ,_｣ಥ)ノ彡┻━┻',
    '┻━┻︵ヽ(`Д´)ﾉ︵ ┻━┻',
    "B.S. LEVEL: the abstract analysis of English literature", 
    "B.S. LEVEL: modern academia", 
    '(ノಠ益ಠ)ノ彡┻━┻',
    "B.S. LEVEL: academics who pretend that their opinion is objective fact",
    'B.S. LEVEL: pretencious uni profs who have never worked a real job and have no practical knowledge of the real world yet think they can lecture you about ethics due to abstract calculations they do while sitting on their ass',
    "B.S. LEVEL: pretencious uni profs that psychoanalyze people who aren't atheists as if not being an atheist is some sort of mental disorder",
    "B.S. LEVEL: pretencious uni profs that are overly confident in their beliefs even though they obviously only believe that s--t because its trendy rn",
    "B.S. LEVEL: academics who think they are so much smarter than the public because they can think in abstractions but really their abstractions verge on psychosis",
    "B.S. LEVEL: people who think that A.I. is going to take over the world",
    "B.S. LEVEL: academic psychology",
    "B.S. LEVEL: the replication crisis",
    "B.S. LEVEL: parents who cite the love they have for their children as an example of kin-selection in action; it's not incorrect it's just creepy",
    "B.S. LEVEL: people who go on Twitter/X too much",
    "B.S. LEVEL: any operating system other than GNU/Linux",
    "B.S. LEVEL: a school that sounds like 'The Univershmercity of Brimish Colshlumbia'",
    "B.S. LEVEL: people over the age of 30 who dye their hair bright green",
    "B.S. LEVEL: outspoken polyamorists",
    "drive by shooting",
    "i weep",
    "I saw the face of God and it was weeping",
    "DON'T DIE ON ME"
  ]

  if (randomNumber < 10) {
    const particularMessage = Math.floor(Math.random() * noBsMessage.length)
    return noBsMessage[particularMessage-1]
    //setShading('transparent');
  } else if (randomNumber >= 10 && randomNumber < 33) {
    const particularMessage = Math.floor(Math.random() * lowBsMessage.length)
    return lowBsMessage[particularMessage-1];
    //setShading('rgba(255, 255, 0, 0.33)');
  } else if (randomNumber >= 33 && randomNumber < 65) {
    const particularMessage = Math.floor(Math.random() * midBsMessage.length)
    return midBsMessage[particularMessage-1];
    //setShading('rgba(232, 205, 0, 0.28)');
  } else if (randomNumber >= 65 && randomNumber < 93) {
    let particularMessage = Math.floor(Math.random() * highBsMessage.length)
    return highBsMessage[particularMessage-1];
    //setShading('rgba(255, 0, 0, 0.28)');
  } else if (randomNumber >= 93) {
    const particularMessage = Math.floor(Math.random() * maxBsMessage.length)
    return maxBsMessage[particularMessage-1];
    //setShading('rgba(255, 0, 0, 0.46)');
  } else {
    return "Error in message generation --- see MessageGenerator.js";
  }

}