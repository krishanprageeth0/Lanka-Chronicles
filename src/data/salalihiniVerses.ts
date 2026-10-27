// Classical Salalihini Sandeshaya corpus, authored c. 1450 CE by Sri Rahula Thera of Totagamuwa
// Authentic 111 classical verses, 20 thematic cantos, and 11 geographical landmarks

export interface SalalihiniVerse {
  n: number;
  lines: string[];
  si: string;
  en: string;
  note?: {
    si: string;
    en: string;
  };
}

export interface SalalihiniCanto {
  id: string;
  from: number;
  to: number;
  si: string;
  en: string;
  theme: string;
  silhouette: string;
  descSi: string;
  descEn: string;
}

export interface SalalihiniLandmark {
  id: string;
  si: string;
  en: string;
  x: number;
  z: number;
  verses: [number, number];
  blurbEn: string;
  blurbSi: string;
  pin: number;
  pad: number;
}

export interface SceneryLabel {
  id: string;
  en: string;
  si: string;
  x: number;
  z: number;
  y: number;
}

export const SALALIHINI_ALL_111_VERSES: SalalihiniVerse[] = [
{
  "n": 1,
  "lines": [
    "සැරදෙ සුලකළකුරු – මියුරු තෙපලෙන් රඳනා",
    "රජකුල රහසැ මැතිනිය – සියනිහි සැළලිහිණි සඳ"
  ],
  "si": "සුලකළ අකුරින් හා මියුරු වදනින් යුතු වූ, රජකුලයේ රහස් දන්නා වූ මැතිනියක බඳු, තමාගේ ඥාතීන් සමඟ සතුටින් වෙසෙන සැළලිහිණි මිතුරිය, ඔබ දීර්ඝායුෂ ලබා වැජඹෙන්න.",
  "en": "May you live long, noble starling, endowed with sweet and eloquent speech, a trusted confidante versed in the secrets of the royal house, dwelling in joy among your kin.",
  "note": {
    "si": "සැළලිහිණි සංදේශයේ සමාරම්භක ආශිර්වාදය හා පණිවුඩ පැවරීම.",
    "en": "Opening invocation and royal charge of the Salalihini Sandeshaya."
  }
},
{
  "n": 2,
  "lines": [
    "පුල් මල් කෙසරු මෙන් – රන්වනි තෙලෙ සරණ යුග",
    "සපුමල් කැලෙව් තුඬ මඳ රතිනි මනහර",
    "නිලුපුල් දෙලෙව් සම්වනි පිය පිය පතර",
    "මලින් කළ රූවෙව් – එබැවින් නුබින් එන වර",
    "නිලූ ද ළද සිදඹුවො දිගු වරල නිලූ",
    "නිලූ ද වට බිඟු පෙළ අද තඹර නිලූ",
    "වනදෙව් ලියෝ නොකොළොද සවන අබරණ?",
    "එනමග දුකෙක් නොවී ද සබඳිනි කලණ",
    "සෙනහස බැඳුණු තැනැ නොහරින කැරැ දියුණ",
    "වෙන සැප කුමට තොප දකිනා එම පමණ?"
  ],
  "si": "ඔබේ පාද යුගල මල් රේණු මෙන් රන්වන් ය; හොට සපු මල් කැකුළක් මෙන් මද රතු ය; ඇස් නිල් මහනෙල් පෙති මෙනි. මල්වලින්ම තැනූ රුවක් බඳු ඔබ දුටු වන දෙවඟනන් ඔබ කන් ආභරණයක් ලෙස නොගත්තේදැයි මම පුදුම වෙමි. යහළුව, ඔබ ආ මඟ දුකක් නොවීද? ඔබ දකින සතුටට වඩා මට වෙන කවර සැපයක් ද?",
  "en": "Your twin feet are golden as flower pollen, your beak faintly red like a champak bud, your eyes like blue lotus petals; you seem made of blossoms. Did the forest goddesses not take you for an earring? Dear friend, was the road you travelled free of trouble? What joy do I need beyond the sight of you?",
  "note": {
    "si": "මෙම කවිය අනෙක් කවිවලට වඩා දිගු ය. එහි පද හුවමාරුවෙන් සකස් වූ විශේෂ රටාවක් ඇත.",
    "en": "This verse is longer than the rest and uses an unusual interlaced layout of lines and end-words."
  }
},
{
  "n": 3,
  "lines": [
    "ලප නොම වන් සඳ වන් සොමි ගුණ ගිහිණි",
    "ඔප වැඩි ගත හෙල්මැලි සියුමැලි පැමිණි",
    "සැප රිසි දෙන වැනි රස බසැති සිතුමිණි",
    "තොප දැකුමෙන් අප පින් කළ බව දැනිණි"
  ],
  "si": "කැලැල් නැති සඳක් මෙන් සෝමා ගුණ ඇති, ඔප වැඩි සිරුරකින් යුතු, සියුමැලි, මිහිරි බස් ඇති, සිතූ දේ දෙන සිතුමිණක් බඳු ඔබ දැක්මෙන් අප කලින් පින් කළ බව මට වැටහේ.",
  "en": "You are bright as the moon, yet without its spots: gentle, glossy, delicate and sweet of speech, a wish-granting jewel. Seeing you, I know that we must once have done good deeds."
},
{
  "n": 4,
  "lines": [
    "මිතුරු තුමෝ දුක් සැප දෙකෙහි ම පැවති",
    "බිතු සිතුවම් රූ මෙන් පිටු නොපාවිති",
    "යුතු මතු වැඩම තෙපළ එවැනි ගුණ ඇති",
    "සිතු නතු කර අස යහළුව වඩන රුති"
  ],
  "si": "සැබෑ මිතුරෝ දුක සැප දෙකෙහිම සමඟ සිටිති. බිත්ති සිතුවම් රූ මෙන් ඔවුහු කිසිදා පිටු නොපාති. එවැනි ගුණවත් ඔබ, සිත සන්සුන් කරගෙන, මා කියන දෙය ප්‍රිය සිතින් අසන්න.",
  "en": "True friends stand by us in sorrow and in joy; like figures painted on a wall, they never turn their backs. You are such a friend. Calm your mind, then, and listen gladly to what I ask."
},
{
  "n": 5,
  "lines": [
    "පව් රද කඳ නා ලෝ මුල් දිගතු බර බර",
    "ලෙව් තුරු සුසැදු යස මිණිමුතු මල් පතර",
    "සව් සිරි පිරි සුරපුර වන් කැලණි පුර",
    "දෙව් මෙහසුන් විබිසණ සුරිඳුට පවර"
  ],
  "si": "දෙව් නුවරක් බඳු, සියලු සම්පත් පිරි, මැණික් මුතු මල් පිපුණු කල්පවෘක්ෂ වැනි තුරු ඇති කැලණි පුරයේ වැඩ සිටින විභීෂණ දෙව් රජුට මාගේ මේ පණිවුඩය ගෙන ගොස් භාර දෙන්න.",
  "en": "Take this message to the lord of the gods, Vibhishana, in Kelaniya: a city like heaven, rich in every splendour, its trees bright with jewel and pearl blossoms.",
  "note": {
    "si": "කැලණිය විභීෂණ දෙවියන්ගේ පුද බිම ලෙස පැරණි කාලයේ සිට ප්‍රසිද්ධ ය.",
    "en": "Kelaniya has been known since ancient times as the seat of the guardian deity Vibhishana."
  }
},
{
  "n": 6,
  "lines": [
    "ගනවන් මියුරු නද දෙන ගුවන වන් විට",
    "විලසින් මෙමා කරවන මිතුර මන් තුට",
    "එහසුන් පැසුළු පවසමි රස නුසුන් කොට",
    "අසදැන් ත යන මග සලකුණු මෙතැන් සිට"
  ],
  "si": "ඔබ ගුවන් තලයේ මිහිරි නාද නඟමින් පියාසර කරන විට, මිතුරිය, මම සතුටින් මෙය නීරස නොකොට රසවත්ව කියමි. දැන් අසන්න: මෙතැන් සිට ඔබ යන මඟ දැක්වෙන සළකුණු මම පවසමි.",
  "en": "As you wing through the sky with your sweet cries, friend, I will tell you this gladly, and without dullness. Listen now: from here on, these are the landmarks of your way."
},
{
  "n": 7,
  "lines": [
    "පොහොසද්දන ඇති තුනුරුවන බැති පෙමා",
    "මුළුවද්දන සුරපුර පිරි සිරින් හැමා",
    "ජයවද්දන කැරුමෙන් සුසැදු තම නමා",
    "ජයවද්දන පුරවර දනු මිතුරු තුමා"
  ],
  "si": "මෙය ජයවර්ධනපුරය ය. ධනයෙන් පොහොසත්, රත්නත්‍රයට භක්තිවන්ත ජනයා වෙසෙන, දෙව් නුවරකට සමාන සිරියෙන් පිරුණු, ‘ජයවර්ධන’ නමින් ගොඩනගන ලද නගරය යි. මිතුරිය, මේ උතුම් පුරවරය බලන්න.",
  "en": "This is Jayawardhanapura: a city of wealthy people devoted to the Triple Gem, brimming with a splendour like heaven's own, built and named 'Jayawardhana', the Increase of Victory. Look upon it, friend.",
  "note": {
    "si": "ජයවර්ධනපුර කෝට්ටේ 15 වන සියවසේ ලංකාවේ රාජධානිය විය.",
    "en": "Jayawardhanapura Kotte was the capital of the island in the fifteenth century."
  }
},
{
  "n": 8,
  "lines": [
    "සැදි රත තඹර පෙළ රන තිසරුන් රුවැති",
    "විදි දිය දහර ලෙළ දෙන දිගු නරු පටැති",
    "රැඳි රළ රළැති හොය දියවන්නා නමැති",
    "ඇඳි පුර අඟන පටසළු සිරි රැපැයි නිති"
  ],
  "si": "රතු නෙළුම් පිරි විල් ද, පුළුල් දිය දහර ලෙළවමින් ගලන ‘දියවන්නා’ නම් ඇල ද මේ නගරය වටා ඇත. එය නගර කාන්තාවක් හැඳි සියුම් පට රෙද්දක් බඳු සිරියක් දරයි.",
  "en": "Ponds of red lotus fill the city, and a broad, rippling stream called Diyawanna winds around it, like a fine silk garment worn by a city-maiden.",
  "note": {
    "si": "දියවන්නා ඔය අදටත් කෝට්ටේ ආසන්නයේ ගලා බසී.",
    "en": "The Diyawanna still flows by Kotte today."
  }
},
{
  "n": 9,
  "lines": [
    "සමනොළ මුහුළ මහ සමුදුර මෙවුල් බර",
    "සුලකළ පුවල ලකඟන සිරි යොවුන් වර",
    "තරකළ විසල් වාසල් යතුරු මෙ නුවර",
    "බැඳහළ රුවන් තනපට කියලි ය පවුර"
  ],
  "si": "මහ සමුද්‍රය මෙවුල් පටිය කරගත්, සමනළ කන්ද අසල පිහිටි, යෞවන රූසිරුවක් බඳු මෙම නගරයේ දැවැන්ත දොරටු යතුරු දමා ඇත. මැණික් බැඳි පවුර තද කර බැඳි කාන්තාවකගේ තනපටයක් මෙනි.",
  "en": "With the great ocean as its girdle and Samanala peak on the horizon, the city is like a lovely young woman: its enormous gates fastened with great keys, its jewelled rampart a bodice bound close."
},
{
  "n": 10,
  "lines": [
    "දුවන බඳ කිකිණි හය කුර පහර නද",
    "සවන තල නිනද ගිජිඳුන් සෙමෙර බඳ",
    "රවන නොයෙක තුරු ජය සක් හඬ නොමඳ",
    "දෙවන මුහුද මෙන් ගුම් ගනි පුර නිබඳ"
  ],
  "si": "ඇතුන්ගේ කකුල්වල කිකිණි හඬ, අශ්වයන්ගේ කුර සද්දය, සෙමර සහ ජය සක් හඬ නිරන්තරයෙන් නැගේ. එබැවින් මේ නගරය දෙවැනි සාගරයක් මෙන් නිබඳව ගුම් ගුම් නද දෙයි.",
  "en": "Anklet-bells on the elephants, the clatter of horses' hooves, drums and victory conches: the city rumbles day and night like a second ocean."
},
{
  "n": 11,
  "lines": [
    "සිහිල් සපු සුවඳ ගෙන එන උයන් වල",
    "සිහිල් නෙලෙන් හඬවන මිණි කිකිණි කැළ",
    "විපුල් රත් සෙමෙර බඳ රන් දද සසල",
    "ළකල් මෙපුර තුළ වළහා රිවි තැවුල"
  ],
  "si": "සපු මලේ සිහිල් සුවඳ ගෙන එන උයන්වල, සිහිල් නාදයෙන් නාද වන මැණික් කිකිණි රැසක්, රත් සෙමර සහ රන් දඬු සෙලවෙන පැහැයෙන් දිලෙන මේ නගරයෙහි, හිරුගේ රස්නය දැනෙන්නේම නැත.",
  "en": "Gardens carry the cool scent of champak, jewelled bells tinkle softly, and crimson chowries and golden staves sway. Inside this city one never feels the sun's heat."
},
{
  "n": 12,
  "lines": [
    "තරසර හිවි මහල් මෙහි පහ පෙළ නිතොර",
    "සුරසිදු විදුදරන් සැදි සඳලු මනහර",
    "කරවන මඟුල් කෙළියෙන් නොමැති අවසර",
    "පුරසිරි බලන ලෙස බට සුර විමන් යුර"
  ],
  "si": "මෙහි උස් මහල් ගොඩනැගිලිවල පහන් පෙළ නොනැවතී දැල්වේ. මනහර සඳලු තලවලින් සැදි මාළිගා ඇත. මංගල උත්සව නොසිඳෙන බැවින්, ඒ නගර සිරි බලන්නට දෙව් විමාන ද බසී.",
  "en": "Tall mansions glow with endless rows of lamps and moon-white terraces. Festivals never cease, so that even the celestial chariots descend to look upon the city's glory."
},
{
  "n": 13,
  "lines": [
    "සිසි වන වුවන ඉඟ සුඟ ගත හැකි මිටින",
    "නිසි පුළුලුකුළ රිය සක යුරු තිසර තන",
    "දිසි රන ලියෙව් රූ සිරි යුත් මෙපුරඟන",
    "ඇසි පිය හෙළන පමණින් නොවෙති දෙවඟන"
  ],
  "si": "මිටින් අල්ලා ගත හැකි තරම් සිහිලැසි ඉණ, රථ රෝද බඳු කලවා, රන් ලියක් බඳු රූ සිරි ඇති මේ නගරයේ ස්ත්‍රීන් දෙවඟනන් නොවන්නේ ඇස් පිය හෙළන බව පමණකින් පමණි.",
  "en": "Waists so slender a fist could circle them, hips like chariot wheels, forms like golden creepers: the women of this city differ from goddesses only in that they blink.",
  "note": {
    "si": "දෙවඟනන් ඇස් පිය නොහෙළන බව පැරණි විශ්වාසයකි. මෙම කවිය සුප්‍රසිද්ධ ය.",
    "en": "Gods and goddesses were believed never to blink. This is one of the most quoted verses of the poem."
  }
},
{
  "n": 14,
  "lines": [
    "සොඳුරු සිය නදන් අනුතුරු දෙස සිටින",
    "කිනුරු නිසසරන් කදහස වෙත නොවන",
    "ඉසුරු දනද සිය නිකෙලෙස් තැන රඳන",
    "උතුරු දිගිඳු පුර දිනි මෙපුර වැජඹෙන"
  ],
  "si": "කුවේර නම් උතුරු දිග අධිපතියාගේ අලකමන්ද පුරය පවා දිනූ මෙම නගරය, කිඳුරන්ට ද නොලැබෙන සැපතින් බබළයි. ධනයෙන් ද නිකෙලෙස් සතුටින් ද පිරුණු මේ පුරවරය ඒ නිසා ම උතුරු දිගපතිගේ නුවරටත් ඉහළින් බබළයි.",
  "en": "This city has outshone even Alakamanda, the city of Kubera, lord of the north. Rich, joyful and without blemish, it shines brighter than the heavens of the gods."
},
{
  "n": 15,
  "lines": [
    "උදේ සැපත් සුරගුරු අලු කැරැ අවට",
    "සඳේ මුදුන් පත අස්විද නැකතැ සිට",
    "නඳේ සිතින් තම කුල දෙවිය සිහි කොට",
    "යෙදේ ගමන් යහළුව මෙපුරෙන් තොපට"
  ],
  "si": "සුරගුරුගේ (බ්‍රහස්පති) සුබ බලය ඇති මොහොතක, සඳ අශ්වනි නැකතේ මුදුනට පැමිණි විට, ඔබේ කුල දෙවියන් සතුටින් සිහිකර, මිතුරිය, මේ නගරයෙන් ගමන් අරඹන්න.",
  "en": "When the guru-planet is favourable and the moon stands high in a fortunate asterism, remember your family deity gladly, friend, and set out from this city.",
  "note": {
    "si": "පැරණි ලංකාවේ ගමන් අරඹන්නේ සුබ නැකතකිනි; කවියා ඒ සිරිත මෙහි දක්වයි.",
    "en": "Journeys in old Lanka began at an auspicious time chosen by astrology, a custom the poet gently includes here."
  }
},
{
  "n": 16,
  "lines": [
    "නල මුදු සුවඳ පිරි කුඹු මියුරු අඹ ගෙඩි ගෙඩි",
    "පුල හෙළ කුසුම ලිය පිය තෙපල රන් කෙඬි",
    "සල සුදු සෙමෙර සෙසත් ගිජිඳුනොද වැඩි",
    "බල සුබ නිමිති පෙරමග නැකතටත් වැඩි"
  ],
  "si": "සිහිල් සුවඳ සුළං, පැසුණු මිහිරි අඹ ගෙඩි, සියුමැලි මල්, මිහිරි බස්, සුදු සෙමර, ඇතුන් ආදී සුබ නිමිති මඟ ඉදිරියේ දකින්න. ඒවා කිසිදු නැකතකටත් වැඩි ය.",
  "en": "A cool scented breeze, ripe sweet mangoes, soft blossoms, gentle voices, white chowries and elephants: watch for these good omens on the way ahead. They are worth more than any auspicious hour."
},
{
  "n": 17,
  "lines": [
    "ලොවැ විහිදා සුදු පැහැ සඳ රැසෙව් සැදි",
    "දෙන නොමදා සිරි සග මොක් සැප නිසැදි",
    "ලද මුනිදා දම් කඳ පහස මන බැඳි",
    "වඳු දළදා හිමි තෙමහල් පහයැ රැඳි"
  ],
  "si": "සඳ කිරණ මෙන් සුදු රැස් ලොව පුරා විහිදෙන, ස්වර්ග සහ නිර්වාණ සැප ලබා දෙන, මුනිවරයාණන්ගේ දළදා වහන්සේ තෙමහල් මාළිගාවේ වැඩ සිටී. ධර්මය කෙරෙහි සිත බැඳ එය වඳින්න.",
  "en": "Its pale light spreads over the world like moonbeams, bringing the bliss of heaven and of nirvana: the Tooth Relic of the Sage rests in its three-storey shrine. Bow to it with a mind turned to the Dhamma.",
  "note": {
    "si": "හයවන පරාක්‍රමබාහු රජු කෝට්ටේ තෙමහල් දළදා මාළිගාවක් ඉදි කළේය.",
    "en": "Parakramabahu VI built a three-storey temple for the Tooth Relic in Kotte."
  }
},
{
  "n": 18,
  "lines": [
    "ගනරන් කොතින් දිලිහෙන මිණි රැස් විහිදු",
    "පවනින් ලෙළෙන පල අග මුතුලැල් සිනිඳු",
    "සඳකැන් මිණෙන් බඳ යුතු බිතු පෙළින් රුදු",
    "එතැනින් ගොසින් සැණෙකින් රජ විමන් වදු වදු"
  ],
  "si": "උස් රන් කොත්වල මැණික් රැස් දිලිසෙයි. සුළඟින් ලෙළවෙන පතාක අග මුතු ඔබ්බවා ඇත. සඳකැන් මැණික් බිත්ති ඇති මේ මැදුරෙන් ඉක්මනින් රජතුමාගේ මාළිගාව වෙත යන්න.",
  "en": "Jewels flash from the golden finials; pearl tassels sway on the flags in the wind; walls of moonstone gleam. From here, fly swiftly to the royal palace."
},
{
  "n": 19,
  "lines": [
    "රිවි බිම්බා යුරු රිවි කුල කමලකර",
    "පියුමම්බා නිතොර ව රැඳි උර මැඳුර",
    "මෙනරම්බා හිමි රූ සිරිනි පැහැසර",
    "පැරකුම්බා නරනිඳු සඳ දකු මිතුර"
  ],
  "si": "හිරු මඬල බඳු තේජසින් බබළන, හිරු වංශයේ උපන්, ලක්ෂ්මී දේවිය නිරන්තරයෙන් හදවත තුළ වැඩ සිටින, අති රූපශ්‍රී ඇති පැරකුම්බා නරපතීන් චන්ද්‍රයා මෙන් මිතුරිය දැක ගන්න.",
  "en": "Radiant as the sun's disc, born of the solar line, Lakshmi ever resting upon his heart, of matchless beauty: look upon King Parakramabahu, the moon among kings, my friend."
},
{
  "n": 20,
  "lines": [
    "උනු නොව බරණ සිවු සැට වොටුනුත් පැළඳ",
    "වෙනු මෙන් පසක් උන් සඳ සීහසුන් මැද",
    "මනු රජ කුලෙන් පැවතෙන පිළිවෙළ නොසිඳ",
    "ගනු අවසර එ නිරිඳු සිරි පතුල් වැඳ"
  ],
  "si": "සැට හතර අබරණින් සැරසී, ඉන්ද්‍රයා මෙන් සභාව මැද සිංහාසනයේ වැඩ සිටින, මනු රජ කුලයෙන් පැවත එන පරම්පරාව නොසිඳ රකින ඒ රජුගේ සිරි පතුල් වැඳ අවසර ගන්න.",
  "en": "Adorned with sixty-four ornaments, enthroned like Indra amid his court, upholder of the unbroken royal line descended from Manu: bow at that king's feet and ask his leave."
},
{
  "n": 21,
  "lines": [
    "පෙරව සඳ කිරණ පිපි කුමුදු මල් වටින්",
    "පරව තඹර පෙති ගිලි දිය තලා පිටින්",
    "තරව සිහි ඇතිව පරතෙරට යන අටින්",
    "කරව පියාසර සකි කොන්ත ගං තොටින්"
  ],
  "si": "සඳ කිරණවලින් කුමුදු මල් පිපෙන, නෙළුම් පෙති හැකිළෙන සැඳෑවේදී, සිත ඇතිව, පරතෙරට යන ගංතොටේ දිගේ, මිතුරිය, පියාසර කරන්න.",
  "en": "At nightfall, when moonbeams open the water-lilies and lotus petals close, set off, friend, with a steady mind, and fly along the river crossing."
},
{
  "n": 22,
  "lines": [
    "කළුවැල් කපුරු දුම තුළ ලෙළෙන දද පෙළ",
    "සුවිසල් මිහිඟු සක් සන් මිණි හඬ පතළ",
    "කැරැ ලොල් සතන් පවසන තියු ගී දෙමළ",
    "මනකල් ඉසුරු කෝවිලැ ලගිනේ ලකළ"
  ],
  "si": "කපුරු දුම අතර පහන් දැල් සෙලවෙයි. විශාල සක්, නාද හොරණෑ, ඝණ්ටා හඬ ඇසෙයි. බැතිමතුන් දෙමළ ගී ගයති. මේ ‘ඊශ්වර’ කෝවිලේ රාත්‍රිය ගත කරන්න.",
  "en": "Lamps flicker in camphor smoke. Great conches, horns and bells sound, and worshippers sing Tamil hymns. Spend the night at this Hindu shrine, friend.",
  "note": {
    "si": "සිංහල කවියෙකු හින්දු කෝවිල ගැන මෙතරම් උණුසුම්ව ලියා තිබීම ඒ යුගයේ ආගමික සහජීවනය පෙන්වයි.",
    "en": "That a Buddhist monk describes a Hindu shrine so warmly says much about religious coexistence in fifteenth-century Lanka."
  }
},
{
  "n": 23,
  "lines": [
    "වෙසඟන තුඟු තන යුග රොන් කොකුමඟර",
    "පිස එත මඳ පවන් හැද විල් ලිහිණි සර",
    "ගොස අලුයම පස තුරු සවනතෙහි කැර",
    "ඇස නිදිගැට හැර නැඟ සිටු උදා හිර"
  ],
  "si": "ස්ත්‍රීන්ගේ උස් පියයුරුවල රොන් බර ගෙන, විල් වලින් එන මද සුළඟ හමයි. අලුයම ඇති ගස් අතර පක්ෂීන් හඬවන විට, නින්ද ගැට හැර ඇස් විවර කර නැගිටින්න. උදා හිරු එයි.",
  "en": "A soft breeze comes from the lakes, heavy with pollen. Dawn calls from the trees: untie the knots of sleep, open your eyes and rise, friend. The morning sun is here."
},
{
  "n": 24,
  "lines": [
    "උදා ගිරි කසුන් රිටි වැට හිස බැබළි",
    "එදා සහසකර පහනෙව් කරත හෙළි",
    "යොදා නුවන් ඉසුරුට කරන පුද කෙළි",
    "විදා පියා නිලඹර යන් නොවී මැළි"
  ],
  "si": "උදා ගිරි මුදුනේ රන් කොඩි රුකක් මෙන් හිරු බබළයි. දහසක් කිරණ ඇති ඒ දෙවියන්ට පිදුමක් ලෙස ගුවන් නිල් අහස පසා පියාසර කරන්න. මැළි නොවන්න.",
  "en": "Atop the eastern mountain the sun blazes like a golden banner, a lamp of a thousand rays. Honour it by flying through the blue sky. Do not linger."
},
{
  "n": 25,
  "lines": [
    "සුරරද සමන් සමගින් සුරඟන එවර",
    "පැහැනද මදාරා පරසතු මල් පතර",
    "කරපුද වඳින රැඳි මුනි සිරි පා තඹර",
    "සකිසඳ පෙනේ සමනොළ ගල නැගෙනහිර"
  ],
  "si": "සමන් දෙවියන් ද සුරඟනන් ද මන්දාර මල් වැස්සක් වස්වමින් මුනිවරයාගේ සිරි පා කමල වඳිති. නැගෙනහිරින් පෙනෙන්නේ ඒ සමනොළ කන්දයි. මිතුරිය, පිරිසිදු සඳ බඳු එය බලන්න.",
  "en": "The god Saman and the celestial maidens shower mandara blossoms and worship the Sage's lotus-feet. To the east rises Samanala, the mountain of the sacred footprint. Look, friend, it shines like the moon.",
  "note": {
    "si": "සමනළ කන්ද මත ශ්‍රී පාදය ඇත; එය බෞද්ධයන් බහුල ගෞරවයෙන් වඳියි.",
    "en": "Samanala is Adam's Peak, where the sacred footprint is venerated by Buddhists and others."
  }
},
{
  "n": 26,
  "lines": [
    "ගනේ මිණි බැබළි කිරණෙව් සතපාය",
    "රනේ යටග සැවුළිඳු දද ගළපාය",
    "අනේ ලකර කළ පුර අප නර පාය",
    "පෙනේ දකුණැ මහසෙන් දෙව් රද පාය"
  ],
  "si": "මැණික් රැස් විහිදෙන, රන් බැබළෙන සිරි සහිත ප්‍රදේශ මග දිගට පෙනේ. දකුණු දිග බලන්න: එහි මහසෙන් දෙවියන්ගේ (කතරගම) උතුම් තැන පෙනෙනු ඇත. (මෙම කවියේ පද රටාව ඉතා සංකීර්ණ ය; මෙය සාමාන්‍ය අර්ථයකි.)",
  "en": "Gem-bright rays and golden splendour mark the way. Look south, where the holy seat of the god Mahasen (Skanda, of Kataragama) can be seen. (The wordplay here is very dense; this is a general sense.)"
},
{
  "n": 27,
  "lines": [
    "වලඳින අදහසින් මෙන් සුර ගඟ අඟන",
    "නලබල සසල දළ රළ පෙළ නුබ නැගෙන",
    "වෙලළසැ ගැවසි මුතු සක් පබළු බබළන",
    "බල මහ මුහුද එම සඳ උතුරෙන් පෙනන"
  ],
  "si": "පානය කිරීමේ අදහසින් මෙන් ගංගා දේවිය සමඟ සමුද්‍රයේ දළ රළ පෙළ නැගේ. වෙරළේ මුතු, සක් කටු විසිරී බබළයි. උතුරු පැත්තේ මහා සයුර පෙනේ.",
  "en": "As though eager to drink from the heavenly Ganges, the sea lifts its great waves. Pearls and conch shells lie scattered and gleaming on the shore. To the north you will see the vast ocean."
},
{
  "n": 28,
  "lines": [
    "සන්නන් සිහින් ගෙඳි සෙවණලු වැලි තෙලෙන",
    "තැන් තැන් වල ම සැතපී සියුමැලි බැවින",
    "රන්වන් කරල් ගෙන එන ගිරවුන් අතින",
    "යන්මන් තොසින් මග තොරතුරු නියම දැන"
  ],
  "si": "වැලි සෙවණ සහිත සිහිල් ඉවුරුවල තැන් තැන්වල සැතපෙමින් සියුමැලි ඔබ ගමන් කළ යුතුය. රන්වන් කරල් ගෙන එන ගිරවුන්ගෙන් මඟ ගැන නියම තොරතුරු දැන, සතුටින් යන්න.",
  "en": "Rest here and there in the cool shade of the sandy banks, for you are delicate. Ask the parrots who bring golden ears of rice for true news of the road, and go on gladly."
},
{
  "n": 29,
  "lines": [
    "නිල තුරඟුට නැඟෙමින් රිවි දෙව් සිරින",
    "දුල කැරැ සේසත් මිණි බරණ කිරණින",
    "බලපිරි සෙන් සහ යාපා පටුන් ගෙන",
    "බල සේනානායක සපු කුමරු එන"
  ],
  "si": "නිල් අශ්වයෙකු පිට නැගී, හිරු දෙවියන් මෙන් බබළමින්, සේසත් සහ මැණික් ආභරණවල කිරණ විහිදමින්, මහත් සේනාව සමඟ යාපා පටුන ජයගෙන, සේනාධිනායක සපුමල් කුමරු එමින් සිටී.",
  "en": "Riding a blue horse, glorious as the sun, his parasols and jewelled ornaments throwing off rays of light, Prince Sapumal, the army's commander, returns in triumph with his host after conquering Yapa Patuna (Jaffna).",
  "note": {
    "si": "සපුමල් කුමරු යාපනය ජය ගත් කතාව මෙහි සඳහන් වේ. ඒ ආසන්න වශයෙන් 1450 පමණ ය.",
    "en": "This is the poem's glimpse of Prince Sapumal's return from conquering Jaffna, around 1450, one of the few historical anchors in the text."
  }
},
{
  "n": 30,
  "lines": [
    "අග පිපි මල් මලිගිය ලිය කැලේ යා",
    "වග බැඳ හෙන රජ හස පුල් විලේ යා",
    "ළඟ තුරු මල් ගිලිහුණු රොනවුලේ යා",
    "මඟ බැස යව පළ හෙළ වැලි තෙලේ යා"
  ],
  "si": "අග පිපුණු මල් මැලවී ගිය ලියන් ඇති වනය ද, වග බැඳගෙන ඇදෙන රාජහංස රංචු ඇති පුල් විල ද, තරු මල් ගිලිහුණු රොන් පිරි තැන් ද පසු කර, පලා ගිය (ගියවුන්) පාර සලකා යන්න. (මෙම කවියේ අන්ත පද රටාව ඉතා සංකීර්ණ ය.)",
  "en": "Pass the forest where blossoms fade on the creepers, the lake where flocks of royal swans glide in file, and the places dusted with fallen pollen, and follow the trail. (The end-rhymes here are extremely intricate; this is the general sense.)"
},
{
  "n": 31,
  "lines": [
    "අයිරාවණ වුවත් නවතන රිසින් එන",
    "අයිරා දහස් දිලි දුනු කොත් සිපත් ගෙන",
    "කයිකාවලෙහි දැක සෙබළුන් රැක සිටින",
    "වයි යා කරන් මල් තුරු ගන වන හිසින"
  ],
  "si": "ඛේමා නොවන ඇතුන් පවා නවතා ගන්නා ආකාරයෙන් වනය ගන ය. දුනු, කොත්, ඇදුම් ගත් සෙබළුන් වනයේ රැකවල් සිටිනු දැක, මල් තුරු ගැවසුණු වනයේ ඉහළින් පියාසර කරන්න.",
  "en": "The forest is so dense it could halt even elephants like Airavana. You will see armed soldiers keeping guard at the outposts; fly above the canopy of flowering trees."
},
{
  "n": 32,
  "lines": [
    "නිමල් සඳ පහන් වැනි වැලි පිට උදුළ",
    "සුපුල් මල් යහන් ලිය මඬු ලිය ගෙපෙළ",
    "එකල් කෙළින වන දෙව් ලිය දැක කොමළ",
    "ළසල් රුකෙක සැතපෙව ළපලු සිහිලළ"
  ],
  "si": "පිරිසිදු සඳ කිරණ වැනි වැලි පිට, මල් යහනක් වැනි සිහිල් ඉවුරු. පෙරදා කෙළි කළ දෙවඟනක් සේ සියුමැලි ඔබ මද සිහිලැසි දළු ඇති ගසක සැතපෙන්න.",
  "en": "Sand pale as moonlight, banks cool as beds of flowers: delicate as a goddess at play, rest on a tree of soft new leaves."
},
{
  "n": 33,
  "lines": [
    "මල්දම් සුවඳ දුම් දුන් සොඳ වරලසිනි",
    "කල්ගිම් නිවා සැනහෙන සිහිලස රසිනි",
    "කොල්ලම් ගසින් නිල් ඉවුරැති පොකුණසිනි",
    "වල් අම්බලම දැක යාගන් සහතොසිනි"
  ],
  "si": "මල්දම් සුවඳ ගෙන දුම් දෙන ලෙස සැඩපරුෂ නැති සුන්දර ලලනාවන් මෙන්, ගින්දරක් වැනි රස්නය නිවන සිහිල් රසින් යුතු පොකුණු සහ වන අම්බලම දැක, හඳ සතුටින් පහළට බසින්න.",
  "en": "Like fair women bearing garlands and scented smoke, cool tanks quench the heat, and a wayside rest-house stands under the trees. See it, and alight there with a glad heart."
},
{
  "n": 34,
  "lines": [
    "කස්තුරු තිලක සැදි නළලත සුමුටාන",
    "පුලමහනෙල් මල් දම් හිස දවටාන",
    "සලෙළුන් යනෙන නිති කැරැ කෙළි කවටාන",
    "රිවි මුදුනත වන මැද වදු සුමුටාන"
  ],
  "si": "කස්තුරි තිලක නළලේ ඇති, මල්දම් හිස සරසා ඇති, නිතර කෙළි කවටකම් කරමින් ගමන් බිමන් යන ගැහැනු දරුවන් මැද, මධ්‍යාහ්නයේ හිරු මුදුනට එන විට වන මැද විවේක ගන්න.",
  "en": "Women with musk marks on their foreheads and garlands on their heads pass to and fro in cheerful play. When the noon sun stands overhead, take your rest in the wood."
},
{
  "n": 35,
  "lines": [
    "මඟ නිලමින් සිටි නා දොඹ නී පියල",
    "පියසලමින් මලගෙහි කෙළැ රොනිනවල",
    "තතුඬ ලමින් බිඳැ විලිකුන් මියුරු පල",
    "ඉසුඹු ලමින් යෙහි සැළ දඹ පඳුරුවල"
  ],
  "si": "මඟ දෙපස නා, දොඹ, නීප ගස් ය. මල්ගෙවල රොන් පිරි මල් පැසී ඇත. වල් අඹ, ඉසුඹු, දඹ පඳුරුවල බිඟු මල් පානය කරයි. පැසුණු මිහිරි පල විඳගන්න.",
  "en": "Along the road stand ironwood, domba and nipa trees; bees sip at pollen-laden flowers, and the wild mango and jambu bushes hang heavy with sweet ripe fruit. Enjoy them as you pass."
},
{
  "n": 36,
  "lines": [
    "රිවිතැවුලේ පිපි කමලේ විල් ගැවසී",
    "මත කොවුලේ තුරු වදලේ හඬන නිසී",
    "වන සැවුලේ මඟ අසලේ පොර සැලසී",
    "ගුරු බැවුලේ යව අවුලේ නො වී කිසි"
  ],
  "si": "හිරු රස්නයෙන් දැඩි වන විට පියුම් පිපි විල් ගැවසී ඇති; කෝකිලයන් මල් තුරුවල හඬවයි; වන කුකුළන් මඟ අයිනේ පොර පොර කරයි. සිහිල් බැවුම් දිගේ නොව්වේ ගමන් කරන්න. කිසිම බියක් නැත.",
  "en": "In the sun's heat, lotus lakes spread wide, koels call from the flowering trees, and jungle fowl squabble beside the path. Fly down the cool slopes, friend; there is nothing to fear."
},
{
  "n": 37,
  "lines": [
    "වනසිරි පියුම් රා බඳ රනබරණ යුරු",
    "වටසිරි සුපුල් දුනුකේ මල් මුරුත තුරු",
    "බිඟු පිරිවැරූ ඔලුපුලැඹුලවල තඹුරු",
    "හිම සරි සිහිල් දිය හෙබ දැක යන් මිතුරු"
  ],
  "si": "වනයේ සිරි පියුම් රා ය; රන් බරණින් සැරසුණු තුරු ය; සුපුල් මල් වැදගත් දුනුකේ ගස් ය; මුත්තන් පිරිවරා ඉදුණු තඹුරු ගස් ය. හිම මෙන් සිහිල් දියෙන් පිරි විල දැක මිතුරිය, ඉදිරියට යන්න.",
  "en": "The forest glows with lotus-red, trees wear golden blossoms, bees circle the ripe king-coconuts. See the lake whose water is cool as snow, and go onward, friend."
},
{
  "n": 38,
  "lines": [
    "සලාදුලා පියොවුරු තඹර රොන් රත",
    "පුලා නිලා උපුලන් ලා ගෙන කනත",
    "කලා පිලා නො ව ඇල් ගෙවි කෙළින ඉත",
    "බලා පලා යව අස්වන් ගුරුළු කෙත"
  ],
  "si": "සලාදූලා පියොවුරු තඹර රොනින් රත් වී ඇත. නෙළුම් නීලෝත්පල මල් ගෙන ඇල් දිය ගලන වගුරු අසල ඇල්වල ගුරුළු කෙත් වටා කෙළි කරති. බලා පලා යන්න, ඒවා අස්වන්න සමයේ ගුරුළු පැටවුන් ය.",
  "en": "Lotus pollen reddens the water; lilies float on the streams, and birds play over the paddy fields. Look and move on: this is harvest season, and the fields are alive with birds."
},
{
  "n": 39,
  "lines": [
    "බන්නේ මරා මිණි දුල පබළු මුතු පට",
    "වැන්නේ ගමඹු ගෙලෙ පල මල් කුමුකු වට",
    "ගන්නේ තසිත එබැවින් නො වැද කෙළියට",
    "යන්නේ වෙළෙඳගොඩ දැක මඳ කලක් සිට"
  ],
  "si": "ගමඹු ගෙලේ මල් පල කුමුකු වැනි වට ඇති ගස් ය. කෙළියට නොයා, මඳ වේලාවක් විවේක ගන්නට වෙළඳගොඩ දකිමින් ඉදිරියට යන්න. (මෙම කවියේ ඇතැම් පද අපැහැදිලි ය.)",
  "en": "Trees wear garlands of flowers and fruit like jewelled necklaces. Do not stop to play, but keep on, and rest awhile when you see the market-ground. (Some words in this verse are obscure.)"
},
{
  "n": 40,
  "lines": [
    "අවට සුපිපි සපු දුනුකේ සලළාන",
    "හඬන තැනින් තැන විලිකුළු කිරළාන",
    "පැසී නැමි කරල් රත් හැල් සහළාන",
    "වඩින මැනවි මහ වෙල මැද වෙරළාන"
  ],
  "si": "අවට සපුමල් පිපී ඇත; ඒ ඒ තැන විලිකුළු කිරිළ පක්ෂීන් හඬවයි; රත් හැල් කරල් පැසී නැමී ඇත. විශාල වෙල්යාය මැදින්, වෙරළ දෙසට සිහිල් සුළඟ හමනා තැනින් වඩින්න.",
  "en": "Champak blooms all around, water-birds calling here and there, and red rice-ears ripe and bowed down. Pass over the great expanse of paddy and fly toward the breezy shore."
},
{
  "n": 41,
  "lines": [
    "පත් ගන පුල් මල් දොඹ තුරෙක පියකරු",
    "සිත් පිනවා ඉඳ සැළලිහිණින් අතුරු",
    "ගත් සරතස හැර විඳ සුවඳ මඳ මරු",
    "කිත්සිරිමේ වෙහෙරට වදුව පස්වරු"
  ],
  "si": "පත් ගන පුල් මල් දොඹ ගසක සිත් ඇදගන්නා ලෙස මඳක් නැවතී, සැළලිහිණිය, ඔබේ තෙහෙට පහ කරගෙන, සුවඳ හමන සුළඟ විඳගෙන, පස්වරුවේ කිත්සිරිමේ විහාරයට පැමිණෙන්න.",
  "en": "Pause a moment in a lovely domba tree thick with leaf and bloom, dear starling. Shake off your weariness in the fragrant breeze, and by afternoon reach the Kitsirimevan Vihara.",
  "note": {
    "si": "කිත්සිරිමේවන් විහාරය කෝට්ටේ සිට කැලණිය දෙසට යන ගමනේ පිහිටි පැරණි විහාරයකි.",
    "en": "Kitsirimevan was a temple on the road between Kotte and Kelaniya; the poet marks it as a waypoint."
  }
},
{
  "n": 42,
  "lines": [
    "සොඳ මුනිරද පිඬු කළ යස මෙරද සම",
    "පුද කළ ඔහු නෙත් නිල් කැලුමෙව් බැරම",
    "සඳ යුරු සඳ වෙලෙන් රැඳි රුසිරු මනරම",
    "වඳනෙහි තෝ දාගැප් මහ බෝ පිළිම"
  ],
  "si": "ඉතා උතුම් මුනිවරයාණන්ගේ සිරුර මෙරු කන්ද වැනි පින් රැසක් ලෙස පුදා ඇති දාගැබ සහ මහ බෝ පිළිම දෙසට නෙත් යොමා, එහි වඳිමින් සිටින්න.",
  "en": "Direct your gaze to the stupa and the great Bo tree and Buddha images, moon-bright and shining, and worship them there, for they stand as high as a mountain of merit."
},
{
  "n": 43,
  "lines": [
    "සල් සපු කීණ දොඹ රෑරඟ නා මිදෙලි",
    "පුල් එරහැඳි හෝ පලු මීඅඹ පළොලි",
    "පොල් පුවකිගු රඹ මලබුලත සලිමලි",
    "නිල් ගන සා සෙවණලු දෙතෙරැ මනකලි"
  ],
  "si": "සල්, සපු, කීණ, දොඹ, රෑරඟ, නා, මිදෙල්ලි, එරහැඳි, මීඅඹ, පොල්, පුවක්, රඹ, සලිමලි ආදී ගස්වල නිල් ගන සෙවණ කැලණි ගඟේ දෙපස ඇති සිත් ඇදගන්නා දසුනකි.",
  "en": "Sal, champak, kina, domba, iron-wood, coconut, areca and banana: the deep blue-green shade of many trees lines both banks of the Kelani River, a pleasing sight."
},
{
  "n": 44,
  "lines": [
    "ගවසා සුපුල් කඩුපුල් මල් නිල් වරල",
    "සලසා උකුළු වට රසුදුළ මිණි මෙවුල",
    "සකසා දෙතන හර සඳුනෙන් කැරැ සිහිල",
    "දෙපසා ඉසින නිල් පැහැ නෙතැ දිගු පුළුල"
  ],
  "si": "කැලණි ගඟේ ස්නානය කරන තරුණියන් නිල් වරල නිලුපුල් සහ කඩුපුල් මලින් සරසා, උකුල් වට රසකිඳු රන් මෙවුල් බැඳ, සිරුරේ සඳුන් ගල්වා සිහිලැසි වී, දෙපස නිල් නෙත් දිගු පුළුල් බැල්මෙන් යුතුව දිය ඉසිති.",
  "en": "Young women bathing in the Kelani adorn their dark hair with blue lilies, fasten golden girdles at their hips, anoint themselves with sandal, and splash water on every side, their long dark eyes sparkling."
},
{
  "n": 45,
  "lines": [
    "මනහර නා මණෙවියනිඳ ළවැලි පිට",
    "ගෙන මිණි වෙණ තත් නියගින් මැද රුවට",
    "කන හෙවැ කියන බුදු ගුණ ගී මියුරු කොට",
    "සැනහෙව කැලණි ගඟ බඩ මඳ කලක් සිට"
  ],
  "si": "කැලණි ගඟ බඩ වැලි තලාවේ නා රජුගේ දූවරු මැණික් වීණා තත් නියමයෙන් වයමින්, කන් බලා යන බුදුගුණ ගී මිහිරි ලෙස ගයති. මඳ වේලාවක් එහි නැවතී, සිත සැනසිලිමත් කරගන්න.",
  "en": "On the sandy bank, the daughters of the naga king play jewelled veenas and sing the Buddha's virtues sweetly. Linger here a while, and let your heart be at peace.",
  "note": {
    "si": "කැලණියේ නාග රජු වන මණිඅක්ඛික බුදුන්ට ඇරයුම් කළ බව සිරිතයි.",
    "en": "Tradition says Kelaniya's naga king, Maniakkhika, invited the Buddha to the island."
  }
},
{
  "n": 46,
  "lines": [
    "සපුමල් යොහොඹු ලා බැඳ වරල මනරඟ",
    "පැහැදුල් දොඹ කැකුළු හර කර ලා තනග",
    "රොනවුල් නා කුසුම් කන ලා කොඬොල් රඟ",
    "දහවල් උයන් කෙළි කෙළැ සළෙලුන් සමග"
  ],
  "si": "සපුමල් යොහොඹු කැකුළු ඔබ්බවා වරල බැඳ, දොඹ කැකුළු මාලා කරවල පැළඳ, නා මල් රොන් කනට පළඳා, දහවල් උයන් කෙළි කෙළින කන්‍යාවන් සමඟ,",
  "en": "With champak buds twined in their hair, garlands of domba around their necks, ironwood pollen on their ears, the women who played all day in the gardens (join the bathing party at the river)."
},
{
  "n": 47,
  "lines": [
    "නුවනින් නිල් උපුල් මඳහසිනි හෙළැඹුල",
    "වුවනින් කමල් පෑ ලවනතිනි රතුපුල",
    "පවනින් අඹළ රන ලිය වන් ලියන් කැල",
    "රුවනින් ලකළ ගඟ දිය කෙළැ නිමුණු කල"
  ],
  "si": "නිල් උපුල් බඳු නෙත්, හෙළ මඳ සිනා, ලවන වැනි රතු තොල්; තඹර බඳු මුහුණු ඇති රන් ලියන් වැනි යුවතියන් ගඟ දියේ කෙළි කරති. සවස වන විට ඔවුන් කෙළිය නිමා කරයි.",
  "en": "Eyes like blue lotus, soft smiles, lips red as coral, faces like lotus blossoms: golden-limbed women sport in the river's water until the evening ends their play."
},
{
  "n": 48,
  "lines": [
    "වදිමින් සවස නල හැසිරෙන දිගතුවල",
    "සොබමන් සුනිල් මිණි නිල් නුබ තුර විපුල",
    "පතසන් අවර ගිරි නැටියෙන් වැටෙන කල",
    "විලිකුන් සුරත් පල වැනි වේ රිවි මඬල"
  ],
  "si": "සවස් සුළං හමන්නට පටන් ගන්නා විට, දිගතේ නිල් ගසට වන්නේ බබළන මැණික් මෙනි. හිරු ගිරිය නැටිය බැස යන විට රිවි මඬල ගසේ ගිලිහෙන පලයක් මෙන් දිස්වේ.",
  "en": "As the evening breeze begins, the far trees gleam like sapphires. When the sun slips behind the western hill, its disc looks like a ripe fruit falling from a tree."
},
{
  "n": 49,
  "lines": [
    "මහතුන් හසළ තම හට යස පිහිට ලෙස",
    "නිසැකින් නො හළ යුතු බව පැමිණෙත වෙහෙස",
    "සුදනන් පැවති සිරිතැයි දන්වන විලස",
    "නුබමින් සමඟ ගෙවෙනුය දවහල් දවස"
  ],
  "si": "උතුමන් හට පිහිට පතා එන්නවුන් අත්හරින්නේ නැත යන්න සත්පුරුෂයන්ගේ සිරිත ය. එබැවින් ඔබ සමඟ ගත කරන මෙම දවස නිමා වේ. (එතැන් පටන් නිශාව උදා වේ.)",
  "en": "It is the way of good people never to abandon one who comes seeking shelter, so this day is spent in your company, friend. Now the evening comes on."
},
{
  "n": 50,
  "lines": [
    "සැදෑ ළෙන් වරුණ දෙව් රද මුහුද විසූ විසූ",
    "සදෑ සහසකර එන මහවත සැලසූ",
    "විඳෑ උපුල් පිළ මෙන් රත් පටින් වැසූ",
    "සැඳෑ වලා පෙළ පැළ දිග පෙනුණු පසු"
  ],
  "si": "සැන්දෑ සුළඟේ වරුණ දෙවියන්ගේ සමුද්‍රයෙන් එන රත් වලාකුළු මහ පටක් මෙන් අහස වසා ගනී. නෙළුම් රතු පටින් වැසූ අහස හා සමාන ය. සැන්දෑ වලා පෙළ එක් පසෙක පැළී දිග් වන විට දක්නට ලැබේ.",
  "en": "Out of Varuna's ocean, red clouds spread across the evening sky like a lotus-red silken cloth, and the line of sunset clouds splits and stretches across the sky."
},
{
  "n": 51,
  "lines": [
    "උදුළ සොමි කැලුම් නිසයුරු හිමි පුවළ",
    "පහළ වන බැවින් තම වෙත නිසඹු දොළ",
    "ලකළ ගුවන තල සිරි යහන නිකසළ",
    "අතුළ කුසුම් විලසින් සැදෙත තුරු වැළ"
  ],
  "si": "සඳ උදා වී සෝමයන්ගේ එළිය පැතිරෙන විට, ගුවන් තලයේ සිරි යහනේ අතුළ කුසුම් මෙන් තුරු වැල් පෙනේ. (මෙම කවියේ අන්ත පද රටාව සංකීර්ණ ය.)",
  "en": "As the moon rises and spills its cool light, the trees look like flowers strewn across the sky's bed. (The end-rhymes in this verse are dense; this is the general sense.)"
},
{
  "n": 52,
  "lines": [
    "දනගෙන වුත් දමන ගොදුරට නොහැකිළිය",
    "පැනපැන දියෙන් ඔවුනොවුනැඟෙහි පෙරැළිය",
    "ලෙහෙලුන කෙළින කැරැ පෙණ පිඬු රළ රැළිය",
    "එතැනින පියාසර කැරැ දකු මස්කෙළිය"
  ],
  "si": "ගොදුර සොයා පැන පැන දියෙහි කෙළිය කරන පක්ෂීන් ඔවුනොවුන් ඇඟෙහි පෙරළෙමින් රළ පෙණ ඉස කෙළි කරයි. ඒ තැනින් ඔබ ද පියාසර කර (මස්කෙළි) සමුද්‍රයේ ඔවුන් දකින්න.",
  "en": "Water-birds leap and dive after food, rolling on one another and tossing up foam and ripples in their play. From there, fly on and see them at their sport on the sea."
},
{
  "n": 53,
  "lines": [
    "පැහැසරණිය මිණි පැමිණිය කොත් අගට",
    "බඳ කිකිණිය දද ගිහිණිය විමන් වට",
    "නොව පැරණිය වන රමණිය විටින් විට",
    "සැළලිහිණිය වදු කැලණිය පුරවරට"
  ],
  "si": "මැණික් බැබළෙන කොත් අගට කිකිණි බඳ විමාන වටා ඇති පෙනෙයි. මේ පැරණි නොව වන සිරි මෙන් නවයි. සැළලිහිණිය, කැලණි පුරවරය වෙත පිවිසෙන්න.",
  "en": "Jewelled spires glitter above, bells ring around the palaces, and everything looks fresh, not old. Starling, enter the city of Kelaniya."
},
{
  "n": 54,
  "lines": [
    "දියකඳ ගැඹර පිරි පුවතර මහ සයුර",
    "මුවරද ලෙසින් වත අගතිසි කර තඹර",
    "මනනඳ කරන මිණි ගණ මෙන් දිසි එවර",
    "පැහැනද පහන් එහි මහ වෙයැ බල මිතුර"
  ],
  "si": "ගැඹුරු දිය කඳක් සේ පැතිරි මහ සයුර වැනි විල ද, නෙළුම් පිරි විල්වල මැණික් රැසක් මෙන් දිලෙන ලෙසට පහන් දැල්වීම ද, සිත් හොරකන විහාරයක් ද එහි බලන්න, මිතුරිය.",
  "en": "Look, friend: a great pool deep as the sea, lotus petals dotted like gems, lamps lit like a spill of jewels, and the glorious temple beyond."
},
{
  "n": 55,
  "lines": [
    "උදයග පියුම්රා පැහැ වැද මෙන් රැඳුණු",
    "පෙරදිග පෙනෙන සඳ සඳ කැල්මෙන් දිලුණු",
    "මනරඟ එපුර සඳ කත ගෙහඹින් ගැලුණු",
    "සුරගඟ පතිනි දම් රැකුමෙහි ම නියැලුණු"
  ],
  "si": "නැගෙනහිර අහසේ පෙනෙන සඳ කැලුමෙන් බබළන, සඳ සේ ලස්සන කාන්තාවන් වෙසෙන, ගඟ සැමියා ලෙස ඇති ඒ නගරයේ කාන්තාවන් ධර්මය රැකීමෙහි නියැලී සිටිති.",
  "en": "The eastern sky is bright with moonlight. Moon-faced women dwell in that city beside the river, and they are devoted to keeping the Dhamma."
},
{
  "n": 56,
  "lines": [
    "සුනිල් වලා නව සඳ නිලුපුල් පබළු",
    "විමල් සක් ගිජිඳු කුඹු සිරිවස බැබළු",
    "විපුල් පුලින රඹ සිකි ගල මුතු ළ දළු",
    "ළකල් රන ලියන් සරනා බල යහළු"
  ],
  "si": "නිල් වලා වැනි නව සඳ, නිලුපුල් බඳු මුතු, සුදු සක් ගැඹුරු දිලෙන ගොඩනැගිලි, පුළුල් කුඹු ඇති රඹ ගස් මැදින් සිකි ගල මුතු පරියන් ලකළ රන් ලියන් සේ පෙනෙයි. (මෙය රූපවර්ණනාවකි; පද සංකීර්ණ ය.)",
  "en": "Blue clouds, the new moon, pearls like blue lilies, conch-white buildings, banana groves with broad leaves: the city seems strewn with gold and pearls. (A scene-painting verse; the vocabulary is dense.)"
},
{
  "n": 57,
  "lines": [
    "ඔද වැඩි කෙළි මඟුල් ලැබ තුටු නිසා කල",
    "සඳ සක් මඳොසිනැද දෙත දුණු කැන් දුහුල",
    "සොඳ පුරඟන පහ සුමුගින් පැහැ උදුල",
    "සෙද දුනඹර මතු ඇය රැස් මිණි මෙවුල"
  ],
  "si": "උත්සව කෙළි මංගල ලැබ සතුටින් පසුවන මේ නගරයේ ලස්සන කාන්තාවෝ සඳ, සක් වැනි දිලිසෙන වස්ත්‍ර හැඳ, මිණි මෙවුල් බැඳ සැරසී සිටිති. (ඇතැම් පද අපැහැදිලි ය.)",
  "en": "Joy in festivals and celebrations fills the city. Its lovely women dress in cloth pale as moon and conch and wear jewelled girdles. (A few words here are unclear.)"
},
{
  "n": 58,
  "lines": [
    "තවර කරැ කොකුම් සඳුනෙන් තුනු සියල",
    "පවර සුවඳ මල් දම් පැළඳ මනකල",
    "බැහැර සිතු නොලූ හිමිනඹුවො කෙළි ලොල",
    "එපුර ඉඳිති සඳපානේ සඳලුවල"
  ],
  "si": "සුවඳ සඳුන් කෝකුම් ගල්වා සිරුර සරසා, මල් දම් පැළඳ, සිත් නොසැලී ආදරවන්තව කෙළි කරන කාන්තාවෝ, සඳලු මුවුවල සඳ ආලෝකයෙන් යුතුව එම නගරයේ වෙසෙති.",
  "en": "Their bodies fragrant with sandal and saffron, garlands in their hair, loving and steadfast, the women of Kelaniya sit in the moonlit terraces of that city, taking delight in their play."
},
{
  "n": 59,
  "lines": [
    "මුවලඹ රඹ වලු බර රන් තැඹිලි තුරු",
    "සැදි ගෙඋයන් ගෙවමින් වේ මඟ අතුරු",
    "කරකැවෙමින් දකුණට අවුදින් මිතුරු",
    "වදු වෙහෙරට සිහි කැරැ නව ගුණ මිතුරු"
  ],
  "si": "මුවලඹ, රඹ, වළු බරින් නැමුණු රන් තැඹිලි ගස් ඇති ගෙවතු උයන් මැදින් මඟ අතුරු කර, දකුණට හැරී, විහාරයට පිවිස බුදුන්ගේ නව ගුණය සිහි කරන්න.",
  "en": "Go past gardens where banana and golden king-coconut trees bend under their fruit, turn to the right, enter the temple, and call to mind the nine virtues of the Buddha.",
  "note": {
    "si": "‘නව ගුණය’ යනු ඉතිපි සෝ භගවා ගාථාවෙන් කියැවෙන බුදුගුණ නවයයි.",
    "en": "The 'nine virtues' are those recited in the Pali verse 'Iti pi so Bhagava…' (Arahant, Fully Enlightened, and so on)."
  }
},
{
  "n": 60,
  "lines": [
    "දියතෙක් පැතිර සිටි බුදුගුණ කියා හැම",
    "සගමොක් ලබනු වස් පිය යුග ඔබා බිම",
    "සියසක් පුරා දුටු මෙන් තුටුවැ මුනි තුම",
    "වඳු ලක් තිලක ගෙහි වැඩ උන් මහ පිළිම"
  ],
  "si": "දස දිග පැතිරෙන බුදුගුණ කියා, සියල්ල ම ස්වර්ග මෝක්ෂ සැප ලැබීමට පිය යුග බිමට තබා වැඳ, ලක් දිවේ තිලකය මෙන් වැඩ සිටින මහා පිළිමය වඳින්න.",
  "en": "Speak the Buddha's virtues, which reach all ten directions, kneel and place your feet to the ground, and worship the great image enshrined there, the crown-jewel of Lanka, source of heavenly and final bliss."
},
{
  "n": 61,
  "lines": [
    "පෙර දලනිඳු දිය කඳ රට බිම් ගලත",
    "සුරකුල හිමි රකිනුව ලක මැවූ සත",
    "මනකල ඒ සමුදුර පැහැයෙන් දිමුත",
    "වඳු සල පිළිම හිමි සිරි සරණ සියපත"
  ],
  "si": "ඉපැරණි කාලයේ නාග රජවරුන් දෙදෙනෙක් මැණික් සිහසුනක් උදෙසා සටන් කළ තැන, ලංකාව මවා ගත් සත්පුරුෂ බුදුරජාණන් වහන්සේ වැඩම කළ සේක. සයුරු පැහැයෙන් දිලෙන ඒ පිළිමය වඳින්න.",
  "en": "Long ago two naga kings fought over a jewelled throne, and the Buddha himself came to that place. Bow to the image shining sea-blue that commemorates it.",
  "note": {
    "si": "මහෝදර සහ චූලෝදර නාග රජවරුන්ගේ කතාව ලංකාවේ බුදුන්ගේ දෙවන ගමනට සම්බන්ධ ය; කැලණිය තුන්වන ගමනට.",
    "en": "The tale of the naga kings Mahodara and Chulodara belongs to the Buddha's second visit to Lanka; Kelaniya is linked to the third."
  }
},
{
  "n": 62,
  "lines": [
    "ගිලිය නොදී සැට මහණන් බව මහණ",
    "මලිය දෙව් තෙරිඳු වැඩ හිඳ දෙසූ බණ",
    "දිලිය පස් මහල් පායෙහි මිණි කිරණ",
    "බැලිය හැකි වි නම් දැක වැඳ යා කලණ"
  ],
  "si": "සැට මහණුන් සමඟ බුදුරජාණන් වැඩ හිඳ දේශනා කළ තැන, මහල් පහක ප්‍රාසාදයක මැණික් කිරණ දිලිසෙයි. හැකි නම් එය දැක වඳිමින් යන්න.",
  "en": "Here the Buddha sat with sixty monks and taught the Dhamma. Jewel-light flickers from a five-storey shrine; if you can, see it and bow as you pass."
},
{
  "n": 63,
  "lines": [
    "පෙර උවිඳා ගෙන ගිරිඳා සිඳු සලත",
    "නැගි පැහැදා පෙණ සමුදා සැටි නුමුත",
    "මෙන උළිඳා පැහැ විහිදා නෙ දිගු බිත",
    "සැදි වටදා ගෙහි වඳු දා ගැබ දිමුත"
  ],
  "si": "මුහුදු රළ පෙණ නගමින් ගොඩට නැගුණු පැරණි කාලය සිහි කරවන, සුදු බිත්තිවලින් සැදි දා ගැබ් ගෙයි දිලෙන දාගැබ වඳින්න. (මෙම කවිය සංකීර්ණ ය; මෙය සාමාන්‍ය අදහසකි.)",
  "en": "Bow to the stupa shining inside its white-walled relic house, a place that recalls the ancient time when the foaming sea rose over the land. (A dense verse; this is the general sense.)"
},
{
  "n": 64,
  "lines": [
    "දිගු නෙත් නිලුපුලෙව් රතදර පබළ රඟ",
    "සිරිමත් සුපුන් සඳ වැනි වුවන මන රඟ මනරඟ",
    "පැහැපත් ලකළ රන්වන් විලසින් ලොවග",
    "වැදහොත් පිළිම හිමි වඳු පාය පැළ දිග"
  ],
  "si": "දිගු නෙත් නිලුපුල් බඳු, රත් අධර ඇති, පුන්සඳ බඳු මුහුණක් ඇති, රන් පැහැයෙන් බබළන වැදහොත් පිළිමය වඳින්න. එහි පාද යුගල පිටුපසින් පැළ දිග දැක, මිතුරිය, එය වඳින්න.",
  "en": "A reclining Buddha, long eyes like blue lotuses, lips red, a face like the full moon, the whole figure golden. Look at its feet along the length of the image, and bow."
},
{
  "n": 65,
  "lines": [
    "අහසින් අවුත් මිණිඅක් නයිඳු යැදුමට",
    "රහතන් මැදෙහි මුනි හිඳ මිණි පලඟ පිට",
    "දහමුත් දෙසූ තැන කළ සැට රියන් කොට",
    "මහ දා ගැප් හිමින් වඳු සොළොස තැන් සිට"
  ],
  "si": "අහසින් මණිඅක්ඛික නාග රජු ආරාධනා කළ පරිදි පැමිණි බුදුරජාණන් වහන්සේ රහතන් වහන්සේලා අතරේ මැණික් පලඟක වැඩහිඳ දහම් දෙසූ තැන සැට රියන් උසැති මහා දාගැබ ඇති හිමි බව කියා, සොළොස් තැනක සිට වන්දනා කරන්න.",
  "en": "Here the Buddha, invited by the naga king Maniakkhika, came through the air and sat on a jewelled seat amid arahants to teach. Venerate the great stupa, sixty cubits high, from sixteen places.",
  "note": {
    "si": "කැලණි විහාරය බුදුන් වහන්සේ ලංකාවට පැමිණි තුන්වන වාරයට සම්බන්ධ ය.",
    "en": "Kelaniya is the site of the Buddha's third visit, eight years after his enlightenment, according to Sri Lankan tradition."
  }
},
{
  "n": 66,
  "lines": [
    "සවන සතිය වැසි වසිනා දස දිගෙහි",
    "පෙණින සෙවෙනි මුදලිඳු නා දරණ ගෙහි",
    "සවන හිඳිනු දනනඳනා නෙතු යුගෙහි",
    "වඳින මැනවි පිළිමය නා පිළිම ගෙහි"
  ],
  "si": "සත් දවසක් වැස්ස වසින අවස්ථාවේ මුචලින්ද නාග රජු දෙණ විදහා බුදුන් වසා ගත් සේ, නා පිළිම ගෙයි වැඩ සිටින පිළිමය අසලට ගොස් වඳින්න.",
  "en": "For seven days the rain fell, and the naga king Mucalinda spread his hood to shelter the Buddha. In the shrine of the naga image, bow to the Buddha sheltered so."
},
{
  "n": 67,
  "lines": [
    "සසරින් මුදා ලෙවි සදහම් අමා දී",
    "එකඟින් මුනිඳු හුන් වැනි නිපරමාදී",
    "ලකුණෙන් සපිරි පිළිමය දැක සමාදී",
    "වැඳගන් මිතුර තුන් සිත කැරැ සමාදී"
  ],
  "si": "සසරින් මිදීමට සදහම් අමාදිය දෙන, එකඟ සිතින් භාවනා කරමින් සිටින මුනිඳුන් බඳු, ලකුණු පිරි පිළිමයක් දැක, තුන් සිත නැමිණ වන්දනා කරන්න, මිතුරිය.",
  "en": "See the image marked with all the signs, as though the Sage himself sat there in one-pointed meditation, offering the deathless nectar of the Dhamma to free beings from rebirth. Bow with body, speech and mind, friend."
},
{
  "n": 68,
  "lines": [
    "අප මුනිඳූ බුදු වන දින මුරුන් පිදු",
    "පැහැ විහිදූ දිලි කල දෝ යටින් යෙදූ",
    "සැදි සිනිදූ ඉඳුනිල් මිණි සතෙක බඳූ",
    "වැඳ දුමිඳූ වන පින් පල ත අත් බඳූ"
  ],
  "si": "අප මුනිඳුන් බුදු වූ දා, වෙළඳුන් මුරුන් පිදූ අවස්ථාව, ඉන්ද්‍රනීල මැණික් පාත්‍ර සතරක් බඳු සුනිල් පැහැයෙන් එහි යෙදී ඇත. වැඳ දැරූ පින් පල තමා අතේ බැඳගන්න.",
  "en": "The scene of the day our Sage became Buddha, when two merchants offered him honey cakes, is shown here with four sapphire bowls glowing blue. Worship, and bind the fruit of merit to yourself.",
  "note": {
    "si": "තපස්සු සහ භල්ලුක වෙළඳුන් බුදුන්ට පිදූ පළමු දානය මෙයයි.",
    "en": "The merchants Tapassu and Bhalluka gave the Buddha his first meal after enlightenment."
  }
},
{
  "n": 69,
  "lines": [
    "විටංක පැකිලිඳු දකුණස දොරටුයෙන",
    "නිසංකයෙන් පුද නන් තුරු ගොසසමින",
    "කලංක නොව කළ සුබ ලකුණු බබළන",
    "තිවංක නම් දෙපිළිම නැමඳ බැසගන"
  ],
  "si": "පැකිලි නැතිව දකුණු දොරටුවෙන් ඇතුළු වී, නොයෙක් මල් වර්ග ගෙන ඇති පැහැයෙන් පුද පූජා කර, තිවංක ලෙස හඳුන්වන සුබ ලකුණු බබළන පිළිම දෙකක් නමස්කාර කරන්න.",
  "en": "Without hesitation, enter by the southern door, offer many kinds of flowers, and worship the two 'tivanka' images, three-bend statues marked with auspicious signs."
},
{
  "n": 70,
  "lines": [
    "සමනොළ ගිරි ගිජිඳු දිගු කළ සොඬෙක සැටි",
    "සිහිලළ ගඟැ සිලිල් සනහා මුනි නො ගැටි",
    "පැහැදුළ තුන් සිවුරු ඇඳ පෙරෙවැ වැඩ සිටි",
    "තැන කළ සිවුරු දා ගැබ වඳු නො පෑ පිටි"
  ],
  "si": "සමනළ කන්දේ සිට ඇත් රජෙකුගේ දිගු සොඬක් මෙන් ගලා එන සිහිල් ගඟ දියෙන් නා, තුන් සිවුර ඇඳ පොරවාගෙන මුනිඳු වැඩ සිටි තැන ඉදි කළ සිවුරු දාගැබ වඳින්න.",
  "en": "The cool river runs down from Samanala like an elephant's long trunk. Where the Sage bathed in it and stood, robed in his three robes, a stupa was raised. Bow to the Siwuru (robe) stupa.",
  "note": {
    "si": "සිවුරු දාගැබ කැලණි විහාරයේ ම පිහිටි උතුම් චෛත්‍යයකි.",
    "en": "The Siwuru Dagoba is a revered monument within the Kelaniya temple complex."
  }
},
{
  "n": 71,
  "lines": [
    "නිරිඳුන් කැලණිතිස් නිවැරදි රහත් තැන",
    "සැකයෙන් ලැවූ හුණු තෙල් සැළ තුබූ තැන",
    "බැතියෙන් පිනැතියන් කළ විසිතුරු විමන",
    "වැඩහුන් පිළිම හිමි නමඳින් යහදසන"
  ],
  "si": "කැලණිතිස්ස රජු නිවැරදි රහතන් වහන්සේ නමක් සැකයෙන් උණු තෙල් කටාරමක දැමූ තැන, භක්තිමත් පින්වතුන් විසින් කරවන ලද විසිතුරු ගෙයි වැඩ සිටින පිළිමය වඳිමින් යන්න.",
  "en": "Here is the place where King Kelanitissa, in suspicion, had an innocent arahant thrown into a cauldron of boiling oil. Bow to the Buddha image in the richly decorated shrine built there by devout people.",
  "note": {
    "si": "මෙම ඛේදවාචකයෙන් පසු විහාරමහාදේවී කුමරිය පූජා කිරීම ජනප්‍රිය කතාවකි.",
    "en": "In the best-known telling, the princess Viharamahadevi was then offered to the sea to appease the gods' anger."
  }
},
{
  "n": 72,
  "lines": [
    "පිරිසිඳ නොහැකි මෙවැඳුම් පුද පින් පඬුරු",
    "මෙනබැඳ රැගෙන දෙන ලෙස දැක එ සුර විරු",
    "සුරරද පාය වන් විජයොත් නම් මහරු",
    "එමසඳ වඩන රජ ගෙට මිතුර වැඩකරු"
  ],
  "si": "මෙම වන්දනා පූජාවන්හි අපරිමිත පින් පඬුරු බැඳ ගෙන, ඒ දෙව් රදුන් වෙත ගොස්, මහරු මැණික් ගෙන ඇති රජ ගෙට වඩන්නට, මිතුරිය, ඒ කටයුත්ත ඔබ සතුය. (සංකීර්ණ පද වින්‍යාසයකි.)",
  "en": "Gather the immeasurable merit of these worships as an offering, and go to the shrine of the great god, friend, for the royal task is yours. (A syntactically dense verse.)"
},
{
  "n": 73,
  "lines": [
    "පුලා සුවඳ මලවුල් කැරැ වරල් බැඳ",
    "දුලා රන් පතින් සරසා සවන් සොඳ",
    "නිලා දිගු නුවන් රසඳුන් තනා ඇඳ",
    "බලා සිටු රඟන රඟ මඬල කල්බඳ"
  ],
  "si": "මල් මාලා පැළඳ, රන් පතින් සැරසී, නිල් නෙත් දිගු කොට රසකැඳ අඳුන් ගා, රඟ මඬල මැද රඟන අයෙක් බලන්න.",
  "en": "Dancers whose hair is bound with scented flowers, whose bodies are adorned with golden leaves, whose long dark eyes are lined with kohl: watch them as they perform in the dancing hall."
},
{
  "n": 74,
  "lines": [
    "විදෙන ලෙළෙන නරු බර පුළුලුකුළැ රැඳී",
    "හෙළන නඟන අත නුවනග බැලුම් දිදී",
    "රුවින දිලෙන අබරණ කැලුම ගත යෙදී",
    "සැලෙන පහන සිළු වැනි රඟන ලිය සැදී"
  ],
  "si": "ඉණ බර සෙලවෙන, රූ සිරි සහිත රන් ආභරණ දිලෙන, අත් විදිමින් නුවණින් බලන, පහන් සිළු සෙයින් සෙලවෙමින් රඟන තරුණියන් නැළවී නැටීමට බලන්න.",
  "en": "With swaying hips, glittering ornaments, expressive hands and glances, the dancers sway like flames in the lamp's light. Watch them."
},
{
  "n": 75,
  "lines": [
    "ලකළ පුළුලුකුළ බඳ මිණි මෙවුල්ලා",
    "සමග රන් සලඹ රැවු දී වෙවුල්ලා",
    "වයන පදට තබමින් පද කමල්ලා",
    "රඟන ළඳුන් බල රූසිරු සියල්ලා"
  ],
  "si": "මැණික් මෙවුල් බැඳි උකුල් ඇති, රන් සලඹ රැව් දෙන, වයන පදට පා තබමින් රඟන ලලනාවන් රූ සිරි බලන්න.",
  "en": "Watch the dancers with their jewelled girdles and ringing golden anklets, stepping in time with the music, in all their beauty."
},
{
  "n": 76,
  "lines": [
    "වස් දඬු බිඟු කොවුල් වීණා නද මියුරු",
    "රැස් වූ සෙයින් සත් සර රස ගී සොඳුරු",
    "අස්වන ලියන් දැක ලිය කිඳුරඟන යුරු",
    "තොස් කර තසිත සවනත නුවනත මිතුරු"
  ],
  "si": "වීණා, කෝකිල නාද වැනි මිහිරි ස්වර හතකින් රස ගී නැගෙයි. සුරඟනන් පවා ලජ්ජා වන ලෙසට රඟන තරුණියන් දැක, ඔබේ කන සහ නෙත් සතුටු කරගන්න, මිතුරිය.",
  "en": "Veena notes and koel calls blend in the seven sweet swaras, and the singing is delightful. Seeing the dancers, who might put celestial maidens to shame, delight your ears and eyes, friend."
},
{
  "n": 77,
  "lines": [
    "මෙසේ පැවති අනතුරු ගී රැඟුම් පුද",
    "තොසේ සිතින් වැඩ සිටි සුර විමන් මැද",
    "යසේ පතළ දිය තුළ උතුළ මන නඳ",
    "ඇසේ පුරා දකු විබිසණ සුරිඳු සඳ"
  ],
  "si": "මෙසේ ගී නැටුම් පුද අවසන් වූ පසු, සතුටු සිතින් වැඩ සිටින දෙවිවරයා, යස පැතළ, දිය තුළ තිබෙන ආකර්ෂණීය නිල් නෙළුම් සිහසුනක් බඳු විමානයක් මැද, සඳ බඳු රූ ඇති විභීෂණ දෙවියන් දකින්න.",
  "en": "When the offerings of song and dance are done, you will see the god Vibhishana, moon-faced, delighted, seated inside his celestial dwelling like a blue lotus on the water."
},
{
  "n": 78,
  "lines": [
    "පැමිණ සිටි අඳුන් ගිරි කුළු මුදුන් වෙත",
    "රෙහෙණ නකත් ගැල සිරි විලසින් දිමුත දිමුත",
    "සරණ මුළු ලොවට එසුරිඳු සිරස පත",
    "කලණ කිරුළ දිසි මුතු ලැල් රුවන් යුත"
  ],
  "si": "අඳුන් ගිරියේ උසැති මුදුනට පැමිණි රෙහෙණ නැකත් බඳු දිලෙන කිරුළ, ලොව වැසියන්ට සරණ වන ඒ දෙවියන්ගේ හිස මත, මුතුලැල් සහ මැණික් ඇති කිරුළ දිස්වේ.",
  "en": "On the god's head, the refuge of all the world, there sparkles a crown of pearl strands and jewels, gleaming like the star Rohini on a mountain top."
},
{
  "n": 79,
  "lines": [
    "සුනිලේ පැහැය හැර සුදු වනු ය ගන වෙලේ",
    "විදුලේ එයින් වියොවට පැමිණ වියවුලේ",
    "නිසලේ එ මේ සිරි ගත් සුරිඳුනැම කලේ",
    "උදුලේ දො හෝ රන් පට මෙන් නළල් තෙලේ?"
  ],
  "si": "සුනිල් වර්ණය හැර සුදු පැහැයක් වන තරමට ඔහුගේ නළල ගන වේ; විදුලිය එයින් දුරස් වී වියවුලට පත් වී සිටී. ඒ සුරිඳුගේ නළල් තෙල රන් පටක් වැනි යැයි සිතේ. (අපැහැදිලි ය.)",
  "en": "His brow is so luminous that blue turns white beside it, and lightning, jealous, flickers away in confusion; his forehead looks like a band of gold. (An obscure verse; this is the general sense.)"
},
{
  "n": 80,
  "lines": [
    "රුවිනේ උතුම් එසුරිඳු මිණි ඊල මෙනේ",
    "සවනේ රැඳුණු රසුදුළ තෝඩු ගන රනේ",
    "වුවනේ වැජඹි සිරි සරසවිය හැම දිනේ",
    "සොබනේ කනා කැටපත් යුවළ විලසිනේ"
  ],
  "si": "රූසිරුවෙන් උතුම් ඒ දෙවියන්ගේ කන් සරසන රන් තෝඩු මැණික් රැස් විහිදයි. සරසවිය නිතර ඔහුගේ මුවෙහි වැජඹෙන්නාක් මෙන්, කන් යුවළ කැඩපත් දෙකක් සේ බබළයි.",
  "en": "Golden earrings flash with jewel-light from the god's ears; Saraswati seems to dwell on his lips, and his ears shine like a pair of mirrors."
},
{
  "n": 81,
  "lines": [
    "නමකළ සත හැලේ සිහිලේ සැප සිලිලී",
    "බිය සෙණ රුපු කැලේ තුමුලේ දෙන නො කලී",
    "නළලත ගිරි තෙලේ සුනිලේ රැසිනිපිලී",
    "සුරරද දෙබැමලේ ගනලේ සිරි කියලී"
  ],
  "si": "නමස්කාර කරන සත්ත්වයන්ට සිහිල් සැප දෙන, බිය ගෙන එන සතුරු සේනා විනාශ කරන ඒ දෙවියන්ගේ නළලේ ඇති සුනිල් රැස් ගිරි තෙලක් සේ ය; දෙබැම සුර ගංගා සෙයින් වංගුය.",
  "en": "To those who bow, he gives cool joy; to frightening hosts of enemies, he is destruction. The blue sheen on his forehead glows, and his curved brows are like the arches of the heavenly river."
},
{
  "n": 82,
  "lines": [
    "සතුරු සුර අඳුරු එක පැහැර දුරු කළ",
    "මිතුරු තඹුරු වන නිරතුරු පුබුදු කළ",
    "අතුරු තුසර සිඳුවන දැකුමෙන් පහළ",
    "ළහිරු සිරින් දිලිහිණි හිමි නෙත් සඟල"
  ],
  "si": "ඔහුගේ දැකීමෙන් සතුරු අන්ධකාරය එකවර පලා යයි; මිතුරු නෙළුම් පුබුදයි. ඒ දෙවියන්ගේ නෙත් යුවළ උදා හිරුගේ සිරිය බඳුව දිලිසෙයි.",
  "en": "At his glance the darkness of foes flees all at once, and the lotuses of his friends open. The god's two eyes shine with the glory of the rising sun."
},
{
  "n": 83,
  "lines": [
    "යසගාන කළ තැන තැන සිදඟනන් සැදී",
    "නොළඟා එ හිමි දිගු තුඟු නැහැයට වොරැඳී",
    "සමඟා රදුන් දෙවියන් සෙවුමින් නිසැදී",
    "මුරගා අහෝ මිණි කාලම වෙහෙස විඳී"
  ],
  "si": "ඒ හිමි දිගු උස් නාසයෙහි යසගී ගයා සිදු දෙවඟනෝ සැරසී සිටිති. රදුන් සහ දෙවියන් සොයා යන්නෝ ඔහුගේ අසළ එකතු වෙති. (රූපවර්ණනා රටා පිරි කවියකි.)",
  "en": "Celestial singers gather to praise the god's tall, noble nose; kings and gods seeking him throng around. (A verse built on ornate descriptive formulas.)"
},
{
  "n": 84,
  "lines": [
    "සිරිසර හිඟුල් විලැ සේ හස වැළෙව් ගන",
    "සුරවර සලෙළ රත ලවනත දළ දුලන",
    "මනහර සඳ වලා පෙළ කෙළවර පෙනෙන",
    "පැහැසර ළ සඳ යුවළක් ඇත්නම් එමෙන"
  ],
  "si": "සිරිසර නෙළුම් විලක සුදු හංසයෙකු සේ ගන ව හඬ වැලි, සුරවරයන්ගේ සොඳුරු රතු අධරය, සඳ හා වලා පෙළ දිගහැරි ලෙස පෙනෙන, පැහැපත් ළ සඳ යුවළක් ඇත්නම් එය එබඳු ය. (අපැහැදිලි වර්ණනාවකි.)",
  "en": "His lips are red like a pair of young moons rising against a line of clouds, if there were such a pair. (A highly ornate, partially obscure image of the god's lips.)"
},
{
  "n": 85,
  "lines": [
    "කනා මිණි වළලු නැඟි රැස් මල් කැනැති",
    "මනා දිගු ඇඟිලි නව තඹ ළ පලු ඇති",
    "දනා කැමති දෙන පලඹත එ සුරපති",
    "දිනා දිමුතු අතු සිරි සුර තුරැ පැවැති"
  ],
  "si": "මැණික් වළලු රැස් විහිදෙන, නවතඹ දළු බඳු දිගු ඇඟිලි ඇති ඒ දෙවියන්ගේ අත්, කැමති දෙය දෙන කල්ප වෘක්ෂයක අතු මෙන් බබළයි.",
  "en": "Rays spill from his jewelled bracelets, and his long fingers are like young copper-red leaves. His hand shines like a branch of the wishing-tree that grants whatever is asked."
},
{
  "n": 86,
  "lines": [
    "පානා සෙනේ සසිනිඳු මඳලස බැල්ම",
    "ගානා නිමහමෙව් දෙවඟන නෙත් කැල්ම",
    "නානා සුරිඳු පුළුලුර සිරි සඳ ඇල්ම",
    "නූනා කෙළන ගලතල වැනි ඉඳු නිල්ම"
  ],
  "si": "ඔහුගේ සෙනෙහස පිරි මෘදු බැල්ම සඳ කිරණක් මෙනි. දෙවඟනන්ගේ නෙත් කැල්මද ඇදෙන ඒ බැල්මට නිල් රන් ගල්තලයක් මෙන් ය. (රූපක පිරි, සංකීර්ණ කවියකි.)",
  "en": "His gentle glance falls like moonlight, so loving that even the shining eyes of celestial women bend toward it. (An ornate, image-heavy verse; this is the general sense.)"
},
{
  "n": 87,
  "lines": [
    "ලකුළු පුළුලුකුළු වට බිම එසුර විරු",
    "වෙරළු මිණි කැලුම් පතරින් මෙවුල තුරු",
    "නැබුළු සොඳුරු සසිලිටු වටොර රඹ තුරු",
    "බැබළු සිසිල් ඉසිනා විලස සිරි දැරු"
  ],
  "si": "ඒ දෙවිඳුගේ වටපිට බිම මැණික් රැස් විහිදෙයි; ඔහුගේ මෙවුල ද රඹ ගසක් බඳු සිහිල් සරුවක් මෙනි. (වර්ණනාව සංකීර්ණ ය.)",
  "en": "The ground around the god glows with the radiance of gems; his girdle seems to shine with a cool, banana-grove freshness. (A dense descriptive verse.)"
},
{
  "n": 88,
  "lines": [
    "වඳනා සුරන් කිරුළග රුවන කැලුමෙනා",
    "බඳනා කොමළ ලතු විලසළ රතින් මනා",
    "මඬනා බැවින් සියපත එ හිමි පතුලෙනා",
    "බියෙනා ළ තඹ හෝ පලු සදිසි වෙවුලනා"
  ],
  "si": "වඳින දෙවියන්ගේ කිරුළු රැස්වලින් රත් වූ ඔහුගේ පතුල් එතරම් සියුමැලි ය; තළන විට ළා දළුවක් මෙන් බියෙන් වෙව්ලයි. (පද ක්‍රීඩා ඉතා වැඩි කවියකි.)",
  "en": "So tender are his soles, reddened by the glow of the crowns of the gods who bow, that they tremble like young leaves in fear when they are pressed. (A verse of heavy wordplay.)"
},
{
  "n": 89,
  "lines": [
    "වෙසෙසින් පහන් පැහැසර ගැඹුරු පිවිතුරු",
    "බැලුවන් ඇලුම් කරවන යළිදු බියකරු",
    "සිරිපින් රුවන් පිරි එ සුරිඳු සයුර යුරු",
    "මුවෙකින් කියා නිමවිය හැකිද රූ සිරු?"
  ],
  "si": "විශේෂයෙන් පිරිසිදු, ගැඹුරු, නිර්මල ඒ දෙවියන් බලන්නන්ට ආදරය ද භය ද එකවර ගෙන දෙයි. සිරි පින් මැණික් පිරි සයුරක් බඳු ඔහුගේ රූ සිරි කිසිවෙකුට එක මුවකින් පවසා නිමා කළ හැකිද?",
  "en": "Pure, deep and clear, he draws both love and awe from all who look. Like an ocean full of the jewels of merit, who could describe his beauty with a single mouth?"
},
{
  "n": 90,
  "lines": [
    "ලෙව් හට තමන් නම කිව රිසි දෙන විසිනි",
    "දෙව් තුරු සුරබි සුරමිණි සරි ද කෙලෙසිනි",
    "පව් රෝ දුකුදු දුරලත පොකුරඹ හසිනි",
    "දෙව් වෙද ඇසෙන පමණෙකි වියතුන් බසිනි"
  ],
  "si": "ඔහුගේ නම කීමෙන් ම ලෝකයා ගේ අපේක්ෂා ඉටු වේ. කල්පවෘක්ෂයට, සුරභී දෙනුවට, සුරමිණට සමාන ඔහු පව්, රෝග, දුක් දුරු කරයි. ‘දෙව් වෙද’ යන්න ඇසුන විට විද්වතුන්ගේ බස එපමණකි. (කවියේ පද අපැහැදිලි ය.)",
  "en": "By merely speaking his name, the world's wishes are met. Like the wishing-tree, the cow Surabhi and the wish-gem, he removes sin, sickness and sorrow. (Parts of this verse are obscure.)"
},
{
  "n": 91,
  "lines": [
    "මන් පිනවන යස සිරි තෙද නැණ විපුල",
    "සෙන් යුද ජය රජ බව තනතුරු සියල",
    "දෙන්නෙන් පැතූ විට සුබ වැඩ දිගා බල",
    "පින් නම් සතුන් කළ දෙව් රජ ම ය මෙකල"
  ],
  "si": "සිත පිනවන කීර්තිය, සිරි, තේජස, නුවණ, යුද ජය, රජකම, තනතුරු—ඒ සියල්ල පතා ඉල්ලූ විට සුබ කටයුතු සඳහා දෙන්නේ ඔහුය. පින්වත් සත්ත්වයන් කළ දෙව් රජ ම ය මෙකල.",
  "en": "Fame that delights the heart, splendour, power, wisdom, victory in war, kingship and high office: asked for sincerely, he grants them for good ends. In this age he is the king among gods whom the people's merit has made."
},
{
  "n": 92,
  "lines": [
    "තුන් ලෝ තමා නතු කළ රවුළු සොහොවුරු",
    "තුන් කල් බලා රමිඳුට වූ ඉටු මිතුරු",
    "තුන් වේ ඇදුරු පුලතිසි කුල මිණි මිතුරු",
    "තුන් විටෙක ම වඳු එ සුරිඳු පා තඹුරු"
  ],
  "si": "තුන් ලෝකය ජය ගත් රාවණාගේ සොහොයුරා වූ, තුන්කල් දන්නා, රාම රජුගේ ඉටු මිතුරා වූ, පුලස්ති ඛෂි කුලයේ මැණිකක් වන ඒ සුරිඳුගේ පා තඹරට, තුන් වරක් වන්දනා කරන්න.",
  "en": "He is the brother of Ravana, who conquered the three worlds; a knower of past, present and future; the steadfast friend of King Rama; a jewel of the line of the sage Pulastya. Bow three times at his lotus feet.",
  "note": {
    "si": "රාමායණයේ විභීෂණ ලංකාවේ රාජ්‍යයට පත් වූයේ රාවණාගේ පරාජයෙන් පසු ය. ලංකාවේ ඔහු රකවල් දෙවි වරයෙකි.",
    "en": "In the Ramayana, Vibhishana sided with Rama and became king of Lanka after Ravana's defeat. In Sri Lanka he is venerated as a guardian deity."
  }
},
{
  "n": 93,
  "lines": [
    "අනතුරු බලා අදහස අවසර විගස",
    "යුහුසුළු නො වී සලකා පසු පළමු බස",
    "පෙරදැරි කොට ම සුරිඳුට තියු වදන් ගොස",
    "සැළ කර ත ගිය කටයුතු සිට එකත් පස"
  ],
  "si": "ඉන්පසු, සුදුසු අවස්ථාවක් බලා, ඉක්මන් නොවී, පළමු සහ අවසන් වදන් පිළිබඳ සිතා බලා, පළමුව දෙවියන්ට ප්‍රශංසා වදන් කියා, එක් පසකට වී ඔබ ගිය කාරණය සැළ කරන්න.",
  "en": "Then wait for the right moment. Do not rush. Weigh first and last words, begin with praise for the god, and, standing a little aside, state your errand."
},
{
  "n": 94,
  "lines": [
    "තරසර සුනෙර තද තෙද දිමුතු දිවයුර",
    "පුවතර ගැඹර සමුදුර කැලුම නිලඹර",
    "සොමිබර පවර නිසයුර නුවණ සුරගුර",
    "සුරවර දෙසැර විබිසණ නම් කැලණි පුර"
  ],
  "si": "මහමෙර බඳු තද තේජසින් යුත්, සයුර බඳු ගැඹුරු, අහස බඳු නිර්මල, නුවණින් සුරගුරුට සමාන, සුරවර දෙවියන් අතර උතුම් ‘විබිසණ’ නම් කැලණි පුරයේ දෙවිඳුනි, (මේ ඔබට ආමන්ත්‍රණයකි).",
  "en": "Firm as Mount Meru, deep as the ocean, clear as the sky, wise as Brihaspati, greatest among the gods: lord Vibhishana of Kelaniya, this is addressed to you."
},
{
  "n": 95,
  "lines": [
    "රජකුල සුපුල් විලැ රජ හස වන් සරන",
    "පෙර මලවියා වන් රුසිරෙන් මන නඳන",
    "හැම කල විපුල සව් සැපතින් නො අඩු වන",
    "තෙද බල විකුම් ගුණ මිණි බරණින් තෙවුන"
  ],
  "si": "රජ කුලය නම් විලේ රාජහංසයෙකු සෙයින් වෙසෙන, පෙර මලවි කුමරියක් වැනි රුසිරින් සිත ප්‍රමුදිත කරවන, සැම කල්හි සියලු සැපතින් අඩු නොවන, තේජස්, බල, විකුම්, ගුණ, මැණික් ආභරණවලින් සැදුනු,",
  "en": "She lives like a royal swan in the lake of the royal house, delighting hearts with her beauty. She lacks no good fortune, and is rich in dignity, power, courage, virtue and jewelled ornaments."
},
{
  "n": 96,
  "lines": [
    "ගරුතර නන්නූරුතුනයා නමැති මැති",
    "සිහිකර නිතර මහ පුද පඬුරු දී රුති",
    "නොවිසිර ඔබට දන්වන ලෙස කී සිතැති",
    "සුරවර මඳක් කල් එපවත් ඇසිය යුති"
  ],
  "si": "ගරු කටයුතු නන්නූරුතුනයා නම් නාමයෙන් ප්‍රකට ඒ කුමරිය නිතර ඔබ සිහිකර, මහා පුද පඬුරු දී ඇත. මෙම පවත පැවසීමට අවසර ලැබිය යුතුය. දෙව් රජුනි, මඳක් කල් මේ පුවත ඇසීමට අනුකම්පා කළ මැනවි. (නාම ආශ්‍රිත අපැහැදිලි ය.)",
  "en": "That honoured princess, known by a name of great esteem, constantly remembers you and sends rich offerings. Lord of the gods, be so kind as to hear her story for a little while. (The name in this verse is unclear.)"
},
{
  "n": 97,
  "lines": [
    "රිවිකුල ලමැණි ගොත් පිරිසිදු ගුවන් මැද",
    "පැහැදුල සරා කල් පත් සහසකර බඳ",
    "කිවි කැල ගලට මුතුහර වන් යස පබඳ",
    "සිරි කල කුල නිවෙස් දිය පතළ තද තෙද"
  ],
  "si": "හිරු කුලයේ අගනා මැණික් වැනි වංශයක උපන්, පිරිසිදු අහස මැද බබළන, සහස්කර කිරණ ඇති හිරු සේ කල් පැවත දිලෙන, කවිවරුන් විසින් ස්තුති කරන ලද සිරි යස ඇති වංශයක ඇය උපන්නීය.",
  "en": "She was born in a noble family of the solar line, bright as the thousand-rayed sun in a clear sky, whose glory poets have sung."
},
{
  "n": 98,
  "lines": [
    "හළ දුසිරී දැන තෙවළා මුනිඳු බණ",
    "කෙල පත් සියලු අවි සිප් කව් නළු සතණ",
    "ඔළ මොළ රුපුන් දප මැඩ පෑ උපා නැණ",
    "කළ මුළු ලක්දිව එක් සේසත් සෙවණ"
  ],
  "si": "බුදුන්ගේ දහම අසා, සියලු අවි සහ සිප් ශිල්ප උගත්, සතුරු බලවතුන්ගේ දර්පය මැඩ, නුවණින් නැගී සිටි ඒ රජතුමා මුළු ලක්දිව ම එක් සේසත් සෙවණක් යටට ගෙන ආවේය.",
  "en": "That king heard the Buddha's teaching, mastered every weapon and craft, humbled the pride of his enemies, and with wisdom brought the whole of Lanka under a single royal parasol."
},
{
  "n": 99,
  "lines": [
    "සත නෙත දුන් රූසිරු රස අඳුන්වන",
    "පත නර ලොව පුරඳර සිරි හඳුන්වන",
    "විකුමෙන් මෙ දඹදිවැ නිරිඳුන් මුදුන්වන",
    "අප පැරකුම් නිරිඳුට දූ ළඳුන්වන"
  ],
  "si": "දෙනෙත් පුරවා රූසිරුව දුන්, මනුලොව දෙව් රජුගේ සිරි හා සමාන, විකුමෙන් මේ දඹදිව රජවරුන්ගේ මුදුන් මල් වූ අපගේ පරාක්‍රමබාහු රජුගේ දියණිය වේ ඇය.",
  "en": "Her beauty fills the eye; he rivals Indra among humans; supreme in valour over the kings of Jambudvipa: she is the daughter of our King Parakramabahu."
},
{
  "n": 100,
  "lines": [
    "සිරිසඳ වන් සව් සිරි දියුණුවැ රඳන",
    "සිතුමිණ වන් යැදි යදි හට දනින් දෙන",
    "සරසවි වන් නුවණින් පහළ වැ පෙනෙන",
    "නවසඳ වන් ලෙව් වැසි අදරින් වඳන"
  ],
  "si": "සිරිසඳ සේ සියලු සම්පත්වලින් දියුණුවට පැමිණ, ඉල්ලූවන්ට සිතුමිණක් සේ දනින් දෙන, සරසවිය සේ නුවණින් පහළව පෙනෙන, නව සඳ සේ ලොව වැසියන් ආදරයෙන් වඳින ඇයයි.",
  "en": "Like the moon in prosperity, like a wish-jewel to those who ask, like Saraswati in wisdom, she is loved and honoured by the people as the new moon is."
},
{
  "n": 101,
  "lines": [
    "යෙහෙළින් කෙරේ සකි සැප සමග සිත්මේ",
    "කුලුණෙන් දැසි දසුන් වෙත වසින වත්මේ",
    "රකිමින් පතිනි දම් යහපත් සිරිත්මේ",
    "සිහිනෙන් නිපන් වන් දස පින් පැවැත්මේ"
  ],
  "si": "මිතුරියන් සමඟ සතුටින් ද, දාසියන් සමඟ කරුණාවෙන් ද කටයුතු කරමින්, ස්වාමියාගේ ධර්මය රකිමින්, දස පින් කිරියෙන් සැදුණු යහපත් ජීවිතයක් ගත කරයි. (පද සංකීර්ණ ය.)",
  "en": "She is kind to her friends and to her servants, keeps faith with her husband, and lives a life shaped by the ten meritorious deeds. (The wording is dense.)"
},
{
  "n": 102,
  "lines": [
    "මිහිරි තෙපල තන්වැසි කිවිකම් පුරුදු",
    "ඉතිරි බැති පෙමැති පෙළ දහමෙහි මුනිඳු",
    "නොහැරි පෝය අටසිල් රැකුම පිරිසිදු",
    "සසිරි උලකුඩය දේවී හට පසිඳු"
  ],
  "si": "මිහිරි බසින් යුතු, කවි කම් පෝෂණය කරන, ධර්මයට භක්තිවන්ත, පෝය දිනට අට සිල් රකින, පිරිසිදු සිරි උලකුඩය දේවියට (පිළිසිඳ ගැනීමට සුදුසු පුතෙකු) ලැබෙත්වා.",
  "en": "Sweet in speech, patron of poets, devoted to the Dhamma, keeping the eight precepts on Poya days, pure and radiant: Princess Ulakudaya Devi is the one for whom this plea is made.",
  "note": {
    "si": "උලකුඩය දේවිය යනු හයවන පරාක්‍රමබාහු රජුගේ දියණිය වන ලෝකනාථා කුමරිය ය.",
    "en": "Ulakudaya Devi, also called Lokanatha, was a daughter of Parakramabahu VI."
  }
},
{
  "n": 103,
  "lines": [
    "දිත් රුපු කිරුළු මල් දම් සුවඳ මී වැස",
    "තෙත් සිරිපා යුත් සුරිඳුනි තිලෝ ඇස",
    "සිත් පිනවන ඇති ආසිරි නුවණ යස",
    "පුත් රුවනක් සොඳ දුන මැනවි නිසි ලෙස"
  ],
  "si": "සතුරු රජුන්ගේ කිරුළු මල්වල සුවඳ මී වැස්සක් සේ ඔබේ පා තෙමන, තිලෝ ඇසක් වූ දෙවියනි, සිත් පිනවන ආශිර්වාද, නුවණ, කීර්තිය ඇති පුත් රුවනක් සුදුසු අයුරින් දෙනු මැනවි.",
  "en": "Lord whose feet are wet with the honey-rain of fragrance from garlands, eye of the three worlds: grant her a jewel of a son, one blessed with wisdom and renown, in due and fitting form."
},
{
  "n": 104,
  "lines": [
    "බිසොවට පළමු රත්නාවලි නම් සොඳුරු",
    "සහතුට දෙවූ හිමි දිවැසින් කුලුණු පිරු",
    "මෙලකට ඉසුරු වී පැරකුම් රජ කුමරු",
    "පළකොට කිමෙක ඔබ සොඳ තෙද බල මහරු"
  ],
  "si": "මීට පෙර බිසවුන්ට රත්නාවලී නම් සොඳුරු දියණියක සතුටු සිතින් දුන් ඔබ, දිවැසින් බලා ඒ කුලය පුරවා, මේ ලෝකයේ ඉසුරු සහිත පැරකුම් කුමරු ද ලබා දුන්නේ ය. ඔබේ තේජසින් අධික බල ගැන කියා කිමෙක් ද? (අපැහැදිලි ය.)",
  "en": "You once gladdened the queen with a lovely daughter named Ratnavali, and with divine insight filled this royal house with its heirs. What more need be said of your great power? (The details of this verse are unclear.)"
},
{
  "n": 105,
  "lines": [
    "එසෙයින් දෑ සමන් මහනෙල් කුසුම් ගෙන",
    "පුදමින් එසුරවර සිරි සරණ වඳිමින",
    "බුහුමන් කරන රජ දූ සඳුට මෙ කියන",
    "දුනපින් සමග යස සිරි වඩි පුත් රුවන"
  ],
  "si": "මෙලෙසින් සමන් මහනෙල් මල් ගෙන ඒ සුරවරයාගේ සිරි සරණ වඳිමින්, බුහුමන් කරන ඒ රජ දියණිය මෙසේ කියයි: පින් සමඟ යස සිරි වඩන පුත් රුවනක් දෙනු මැනවි.",
  "en": "Thus, bearing sacred water-lilies and bowing at the god's feet in reverence, the king's daughter pleads: let a jewel of a son be born, one who will increase her merit and her glory."
},
{
  "n": 106,
  "lines": [
    "මෙහසුන් සුරිඳු හට සැළ කැරැ මෙසේ යා",
    "වඳිමින් බැතින් පැදකුණු කොට තොසේ යා",
    "දකිමින් බිසෝ දෙවියන් නොව ලසේ යා",
    "කියමින් යදින් සකි සඳ මෙ ම ලෙසේ යා"
  ],
  "si": "මෙලෙස සුර ඉදුනට පණිවුඩය සැළ කර, භක්තියෙන් වැඳ පැදකුණු කර, සතුටින් එම බිසව දෙවිවරු විලසින් දැක, සකිය එසේම කියා ඉල්ලන්න. (පද රටාව අපැහැදිලි ය.)",
  "en": "Having delivered the message to the god in this way, bow with devotion and circle him to the right. Then, joyfully, ask on behalf of the princess, your friend, in just these words. (The phrasing is obscure.)"
},
{
  "n": 107,
  "lines": [
    "පැහැපත් පුන් සඳෙව් කිරි සමුදුරැ පළට",
    "සියගොත් බබුළුවන දෙව් රජ කුමර හට",
    "නැවතත් එකලාව අවසර ලැබුණු විට",
    "මෙපවත් කියව සැළ කරනුව සුර රදුට"
  ],
  "si": "කිරි සයුරේ පුන් සඳ පළ වන සේ බබළන, තම කුලය බබළවන දෙව් රජ කුමරුට හුදෙකලාව අවසර ලැබෙන කලක මේ පුවත කියන්න. සුරරදුට සැළ කරන්න.",
  "en": "When you find a quiet moment alone with the lord of gods, bright as the full moon rising from the Milk Ocean and lighting up his whole family, speak this message and tell it to the king of the gods."
},
{
  "n": 108,
  "lines": [
    "මේ සියලුම අදහස කුලුණෙන් ගිහිණි",
    "සේ සිය පත සලසා උදය දිනමිණි",
    "නෑ සිය ඉටු මිතුරු සමගින් සැළලිහිණි",
    "වා සිය පවතු සිතු ලෙස සැපතින් පැමිණි"
  ],
  "si": "මේ සියලු අදහස් කුලුණෙන් ගිය පසු, සැළලිහිණිය උදා හිරු සේ සිය පත ඉටු කරගෙන, මිතුරන් සමඟ නැවත පැමිණේවා. ඇයට සැප සමෘද්ධිය සිතූ ලෙස ම ලැබේවා.",
  "en": "When all these wishes are delivered, may the starling, bright as the morning sun, return safely to her friends with her task accomplished, and may good fortune be hers as she wishes."
},
{
  "n": 109,
  "lines": [
    "පැරකුම් රජුට පන්තිස් වනු නවම් මස",
    "මනරම් කැරැ බඳුතු මෙහසුන් නො වී ලස",
    "අයදුම් ලෙසට සිදුකැරැ කිවිඳු අදහස",
    "දෙව්රම් මිතුරු දුන් ගැබ බිසොවට සකස"
  ],
  "si": "පරාක්‍රමබාහු රජුගේ රාජ්‍යයේ තිස් පස්වන වසරේ, නව් මස, කවියා මෙම අස්න මිහිරි ලෙස සම්පාදනය කළේ, ඒ රජ දියණියගේ ඉල්ලීම ඉටු කරන අදහසිනි. ඒ අයැදීමට සුරිඳු බිසවට ගැබ දුන්නේ ය.",
  "en": "In the thirty-fifth year of King Parakramabahu's reign, in the month of Navam, the poet composed this lovely message to fulfil the princess's wish, and the god who was petitioned granted the queen a child.",
  "note": {
    "si": "මෙහි සඳහන් වසර ගණන මත පදනම්ව කාව්‍යය ආසන්න වශයෙන් 1447 පමණ ලියූ බව සැලකේ.",
    "en": "Counting from Parakramabahu's accession (about 1412), the stated year puts the composition around 1447; many scholars say about 1450."
  }
},
{
  "n": 110,
  "lines": [
    "සතිස් වනු නවමැ පුර අස්ලිස නකත",
    "පහස් ලැබ සුපුන් සඳ නුබ තුරැ පැනෙත",
    "සහස්කර කුලට වැඩ වන ලෙස සතත",
    "වෙසෙස් රජ කුමරු විලසින් දැකුම් පත"
  ],
  "si": "පසු වසරක නවම් පුන් පොහෝ දින, අස්ලිස නැකතින් පහස ලැබ, සුපුන් සඳක් උදා වූ සේ, සහස්කර කුලයට (හිරු වංශයට) අලංකාරය වන ලෙස ම, රාජ කුමරුවෙකු සිරියෙන් දකින්නට ලැබේ.",
  "en": "In the following year, on the Navam full-moon day under the asterism Aslisa, a prince was born, like the rising full moon, to the glory of the solar line."
},
{
  "n": 111,
  "lines": [
    "කඳවුරු කුලමැඳුරැ මිණි පහනෙව් සුසැදි",
    "නැණ ගුරු සබස සමය ද දැනුමෙහි වොරැඳි",
    "රජගුරු විජයබා පිරුවන් හිමි පැහැදි",
    "මෙමියුරු පදැති සැළලිහිණිය අස්න යෙදි"
  ],
  "si": "මැණික් පහන් දැල්වුණු කුල මැඳුරේ, නැණවත් ගුරුවරුන්ගේ සභාවේදී, රජගුරු විජයබා පිරිවෙනේ හිමි පැහැදුණු විට, මිහිරි පද ඇති මේ සැළලිහිණි අස්න කවියා සම්පාදනය කළේ ය.",
  "en": "In the royal hall lit by jewelled lamps, in an assembly of the learned, when the royal preceptor of Vijayabahu Pirivena was pleased, the poet composed this sweet-worded Salalihini message.",
  "note": {
    "si": "ජනප්‍රවාදයට අනුව උලකුඩය දේවියට උපන්නේ ‘විජයබා’ කුමරුවයි; ඔහු පසුව රජ විය.",
    "en": "The epilogue's child is traditionally identified as Prince Vijayabahu, who later took the throne after Parakramabahu VI's death in 1467."
  }
}
];

export const SALALIHINI_CANTOS: SalalihiniCanto[] = [
  {
    "id": "blessing",
    "from": 1,
    "to": 1,
    "si": "ආසී",
    "en": "The Invocation",
    "theme": "dawn",
    "silhouette": "none",
    "descSi": "කවිය ආරම්භ වන්නේ ආශිර්වාදයකිනි. කවියා සැළලිහිණි දූතියට ආමන්ත්‍රණය කරයි.",
    "descEn": "Every classical Sinhala poem opens with a blessing. Here the poet turns to greet the starling who will carry his message."
  },
  {
    "id": "greeting",
    "from": 2,
    "to": 3,
    "si": "සැපදුක් විමසුම්",
    "en": "Greetings & Inquiry",
    "theme": "dawn",
    "silhouette": "none",
    "descSi": "කවියා දූතියගේ රූපශ්‍රීය වර්ණනා කරමින්, ඇය පැමිණි ගමන පහසුවෙන් අවසන් වූයේදැයි සුවදුක් විමසයි.",
    "descEn": "The poet praises the starling's beauty and asks, as a good host would, whether her journey here was safe and easy."
  },
  {
    "id": "errand",
    "from": 4,
    "to": 5,
    "si": "කටයුතු නිදෙස්",
    "en": "The Errand",
    "theme": "dawn",
    "silhouette": "none",
    "descSi": "සැබෑ මිතුරුකමේ ගුණ කියා, කවියා තම ඉල්ලීම පළමු වරට හෙළි කරයි: කැලණි විභීෂණ දෙවියන්ට පණිවුඩයක් ගෙන යන්න.",
    "descEn": "After a word on true friendship, the poet names the task: carry a message to the god Vibhishana at Kelaniya."
  },
  {
    "id": "city",
    "from": 6,
    "to": 14,
    "si": "ජයවද්දන පුර වැනුම්",
    "en": "The City of Jayawardhanapura",
    "theme": "court",
    "silhouette": "city",
    "descSi": "කෝට්ටේ රාජධානිය වන ජයවර්ධනපුරයේ ප්‍රාකාර, දොරටු, උයන්, මාළිගා සහ නගර කාන්තාවන් පිළිබඳ ආකර්ෂණීය වර්ණනාවකි.",
    "descEn": "A dazzling portrait of Jayawardhanapura Kotte, the capital: its moat, gates, gardens, mansions and the women of the city."
  },
  {
    "id": "setting-out",
    "from": 15,
    "to": 16,
    "si": "ගමන් පිරුම",
    "en": "Setting Out",
    "theme": "dusk",
    "silhouette": "city",
    "descSi": "ගමන ආරම්භ කළ යුතු සුබ මොහොත සහ මඟ දිගට පෙනෙන සුබ නිමිති පිළිබඳ කවි.",
    "descEn": "Choosing the auspicious hour to leave, and the good omens that greet the traveller on the road."
  },
  {
    "id": "tooth-relic",
    "from": 17,
    "to": 17,
    "si": "දළදා වැනුම",
    "en": "The Tooth Relic",
    "theme": "dusk",
    "silhouette": "temple",
    "descSi": "දළදා වහන්සේ වැඩ සිටින තෙමහල් මාළිගාව වැඳ ගැනීමට දූතියට උපදෙස් ලැබේ.",
    "descEn": "The starling is told to pay homage to the Sacred Tooth Relic, kept in its three-storey shrine at Kotte."
  },
  {
    "id": "king",
    "from": 18,
    "to": 20,
    "si": "රජ දැක්ම",
    "en": "Before the King",
    "theme": "court",
    "silhouette": "city",
    "descSi": "රන් කොත් දිලිහෙන රාජ මාළිගාව සහ සෙංකඩගල සිංහාසනයේ වැඩ සිටින හයවන පරාක්‍රමබාහු රජතුමා පිළිබඳ වර්ණනාව.",
    "descEn": "The golden-spired palace, and King Parakramabahu VI seated on his lion throne. The bird must take the king's leave."
  },
  {
    "id": "departure",
    "from": 21,
    "to": 21,
    "si": "නික්මුම",
    "en": "Departure",
    "theme": "dusk",
    "silhouette": "city",
    "descSi": "සඳ පායන සැඳෑවේ දී සැළලිහිණිය නගරයෙන් පිටත් වේ.",
    "descEn": "As moonlight opens the night lilies, the starling finally takes wing from the city."
  },
  {
    "id": "night",
    "from": 22,
    "to": 22,
    "si": "නිසා වැනුම්",
    "en": "The Night",
    "theme": "night",
    "silhouette": "kovil",
    "descSi": "රාත්‍රිය ගත කිරීමට යෝජනා කෙරෙන කෝවිලේ දර්ශනය: කපුරු දුම, සක් හඬ, දෙමළ ගී.",
    "descEn": "A night's rest at a Hindu kovil: camphor smoke, conch calls and Tamil hymns, all described with warmth."
  },
  {
    "id": "dawn",
    "from": 23,
    "to": 24,
    "si": "උදා වැනුම්",
    "en": "Dawn",
    "theme": "morning",
    "silhouette": "palms",
    "descSi": "උදාවන හිරු සහ මලින් සුවඳ ගෙන එන පාන්දර සුළං සමඟ දූතිය අවදි කෙරේ.",
    "descEn": "Morning breezes and the rising sun wake the starling for the long day's flight."
  },
  {
    "id": "road",
    "from": 25,
    "to": 42,
    "si": "මග වැනුම්",
    "en": "The Road",
    "theme": "road",
    "silhouette": "mountain",
    "descSi": "සමනළ කන්ද, මහ සයුර, වෙල්යායවල්, විල් සහ වන රොක් පසු කරමින් කැලණිය කරා යන ගමනේ සිතුවම්.",
    "descEn": "The longest stretch: mountains, sea, paddy fields, lotus lakes and forest, all seen from the starling's wings."
  },
  {
    "id": "river",
    "from": 43,
    "to": 45,
    "si": "කැලණි නදී වැනුම්",
    "en": "The Kelani River",
    "theme": "river",
    "silhouette": "palms",
    "descSi": "කැලණි ගඟේ දෙපස තුරු සෙවණ, ස්නානය කරන කාන්තාවන් සහ බුදුගුණ ගී වයන නාග කුමරියන්.",
    "descEn": "Shaded riverbanks, bathing women, and naga maidens playing the veena and singing the Buddha's virtues."
  },
  {
    "id": "evening",
    "from": 46,
    "to": 52,
    "si": "සැඳෑ වැනුම්",
    "en": "Evening",
    "theme": "sunset",
    "silhouette": "palms",
    "descSi": "හිරු බසින රතු අහස, සවස ගඟේ කෙළි සහ සඳ උදාවන ආකාරය විස්තර වේ.",
    "descEn": "A long, glowing sunset: women playing in the river, the red sky, and the first moonrise."
  },
  {
    "id": "kelaniya-city",
    "from": 53,
    "to": 58,
    "si": "කැලණි පුර වැනුම්",
    "en": "The City of Kelaniya",
    "theme": "lamplight",
    "silhouette": "stupa",
    "descSi": "ගමනේ ගමනාන්තය වන කැලණි පුරවරයේ වර්ණනාව.",
    "descEn": "At last the starling reaches Kelaniya, shining under the moon with lamps and festivals."
  },
  {
    "id": "merit",
    "from": 59,
    "to": 71,
    "si": "පින්කම් වැනුම්",
    "en": "Worship at the Temple",
    "theme": "sacred",
    "silhouette": "stupa",
    "descSi": "කැලණි රජ මහා විහාරයේ බුද්ධ ප්‍රතිමා, චෛත්‍ය සහ බෝධිය වැඳීමට යොමු කරන කවි. බුදුන්ගේ තුන්වන ලංකා ගමන සිහිපත් කෙරේ.",
    "descEn": "A pilgrimage through Kelaniya's great temple: its Buddha images and stupa, recalling the Buddha's third visit to Lanka."
  },
  {
    "id": "devale",
    "from": 72,
    "to": 76,
    "si": "දෙව් මැඳුරු වැනුම්",
    "en": "The God's Shrine",
    "theme": "devale",
    "silhouette": "temple",
    "descSi": "දෙවොල් මැඳුරේ සංගීතය හා නැටුම්, සුරඟනන් මෙන් රඟන නර්තන ශිල්පිනීන්.",
    "descEn": "Entering the shrine of the deity: music, offerings and dancers who move like celestial nymphs."
  },
  {
    "id": "vibhishana",
    "from": 77,
    "to": 92,
    "si": "විබිසණ දෙව් වැනුම්",
    "en": "Vibhishana, the God",
    "theme": "divine",
    "silhouette": "none",
    "descSi": "කිරුළේ සිට පා දක්වා විභීෂණ දෙවියන්ගේ අලංකාර වර්ණනාව. කවි පහළොවක් පුරා විහිදේ.",
    "descEn": "Fifteen verses portray the deity from crown to feet, ending with his legendary role as Ravana's wise brother."
  },
  {
    "id": "message",
    "from": 93,
    "to": 107,
    "si": "අස්න",
    "en": "The Message",
    "theme": "moonlit",
    "silhouette": "none",
    "descSi": "කවියේ හදවත: රජුගේ දියණිය උලකුඩය දේවියට පුතෙකු දෙන ලෙස විභීෂණ දෙවියන්ට කරන ආයාචනය.",
    "descEn": "The heart of the poem: the plea that Vibhishana grant a son to Princess Ulakudaya Devi, daughter of the king."
  },
  {
    "id": "blessing-end",
    "from": 108,
    "to": 108,
    "si": "ආසී",
    "en": "Closing Blessing",
    "theme": "dawn",
    "silhouette": "none",
    "descSi": "සියලු අදහස් සඳහා සැළලිහිණියට සුබ පැතුම්.",
    "descEn": "A closing blessing: may the starling return safely, her task done."
  },
  {
    "id": "colophon",
    "from": 109,
    "to": 111,
    "si": "පුරාණ සන්නයේ අගට යෙදුණු කවි",
    "en": "The Colophon",
    "theme": "dawn",
    "silhouette": "none",
    "descSi": "පැරණි සන්නයේ අගට එක් කළ කවි තුන: කාලය, අරමුණ සහ කවියාගේ ගුරුකුලය සඳහන් කරයි.",
    "descEn": "Three verses added in the old commentary: when the poem was made, why, and who inspired it."
  }
];

export const SALALIHINI_MAP_LANDMARKS: SalalihiniLandmark[] = [
  {
    "id": "kotte",
    "si": "ජයවර්ධනපුරය (කෝට්ටේ)",
    "en": "Jayawardhanapura (Kotte)",
    "x": 0,
    "z": 5,
    "verses": [
      1,
      16
    ],
    "blurbEn": "The royal capital, ringed by the Diyawanna waters. The poem opens here and the starling sets out at an auspicious hour.",
    "blurbSi": "දියවන්නා ඔයෙන් වටවූ රාජධානිය. කවිය ඇරඹෙන්නේත් සැළලිහිණිය සුබ මොහොතක පිටත් වන්නේත් මෙතැනිනි.",
    "pin": 3.2,
    "pad": 2.3
  },
  {
    "id": "dalada",
    "si": "දළදා මාළිගාව",
    "en": "Tooth Relic shrine",
    "x": 1.25,
    "z": 5.7,
    "verses": [
      17,
      17
    ],
    "blurbEn": "A three-storey shrine for the Sacred Tooth Relic, built by Parakramabahu VI.",
    "blurbSi": "හයවන පරාක්‍රමබාහු රජු කරවූ දළදා වහන්සේ වැඩ සිටින තෙමහල් මාළිගාව.",
    "pin": 1.9,
    "pad": 0.9
  },
  {
    "id": "palace",
    "si": "රාජ මාළිගාව",
    "en": "The royal palace",
    "x": -0.9,
    "z": 4.3,
    "verses": [
      18,
      21
    ],
    "blurbEn": "King Parakramabahu receives the bird, and she takes his leave as the moon rises.",
    "blurbSi": "පරාක්‍රමබාහු රජු දැක අවසර ගෙන, සඳ පායන විට සැළලිහිණිය පිටත් වේ.",
    "pin": 2.1,
    "pad": 1
  },
  {
    "id": "kovil",
    "si": "ඊශ්වර කෝවිල",
    "en": "Isvara kovil",
    "x": -0.8,
    "z": 1.3,
    "verses": [
      22,
      24
    ],
    "blurbEn": "A Hindu shrine where the starling is told to rest for the night, then wakes at dawn.",
    "blurbSi": "රාත්‍රිය ගත කිරීමට යෝජනා කෙරෙන හින්දු කෝවිල; උදාවන විට නැවත ගමන ඇරඹේ.",
    "pin": 2.3,
    "pad": 0.9
  },
  {
    "id": "samanala",
    "si": "සමනළ කන්ද",
    "en": "Samanalakanda (Adam's Peak)",
    "x": 29,
    "z": 6,
    "verses": [
      25,
      26
    ],
    "blurbEn": "Seen far to the east. The mountain of the sacred footprint, with the god Saman and celestial maidens worshipping it.",
    "blurbSi": "නැගෙනහිරින් දුරින් පෙනෙන ශ්‍රී පාද කන්ද; සමන් දෙවියන් සහ සුරඟනන් එය වඳිති.",
    "pin": 8.8,
    "pad": 0
  },
  {
    "id": "sea",
    "si": "මහ සයුර",
    "en": "The great ocean",
    "x": -15.5,
    "z": -3,
    "verses": [
      27,
      28
    ],
    "blurbEn": "Waves rise as if to drink from the heavenly Ganges, and the shore glitters with pearls and conches.",
    "blurbSi": "ගංගාවෙන් පානය කරන්නාක් මෙන් රළ නැගේ; වෙරළ මුතු සහ සක් කටුවලින් බබළයි.",
    "pin": 2.2,
    "pad": 0
  },
  {
    "id": "sapumal",
    "si": "සපුමල් කුමරුගේ සේනාව",
    "en": "Prince Sapumal's army",
    "x": -1.5,
    "z": -1.7,
    "verses": [
      29,
      40
    ],
    "blurbEn": "The prince returns in triumph from conquering Yapa Patuna (Jaffna), with parasols and banners. The road runs on through forest and paddy.",
    "blurbSi": "යාපා පටුන ජයගෙන සපුමල් කුමරු සේනාව සමඟ ආපසු එයි. මඟ වන සහ කෙත් මැදින් දිගටම යයි.",
    "pin": 1.9,
    "pad": 0.7
  },
  {
    "id": "kitsiri",
    "si": "කිත්සිරිමේවන් විහාරය",
    "en": "Kitsirimevan Vihara",
    "x": -1,
    "z": -4.2,
    "verses": [
      41,
      42
    ],
    "blurbEn": "A temple and Bo tree on the road, where the starling is told to rest by afternoon.",
    "blurbSi": "මඟ අසල පිහිටි විහාරය සහ බෝධිය; පස්වරුවේ මෙහි නැවතෙන්නැයි කියැවේ.",
    "pin": 1.8,
    "pad": 0.8
  },
  {
    "id": "kelani",
    "si": "කැලණි ගඟ",
    "en": "The Kelani River",
    "x": -2.6,
    "z": -8.1,
    "verses": [
      43,
      52
    ],
    "blurbEn": "Shaded banks, bathing women, naga maidens playing the veena, and a long red sunset.",
    "blurbSi": "සෙවණ ඉවුරු, ස්නානය කරන කාන්තාවෝ, වීණා වයන නාග කුමරියෝ සහ දිගු රන් සැඳෑව.",
    "pin": 1.7,
    "pad": 0
  },
  {
    "id": "kelaniya",
    "si": "කැලණි රජ මහා විහාරය",
    "en": "Kelaniya temple",
    "x": -1,
    "z": -7,
    "verses": [
      53,
      71
    ],
    "blurbEn": "The destination city. The great stupa, the Bo tree and the images recall the Buddha's third visit to Lanka.",
    "blurbSi": "ගමනාන්තය වන කැලණි පුරවරය; මහා චෛත්‍යය, බෝධිය සහ ප්‍රතිමා බුදුන්ගේ තුන්වන ලංකා ගමන සිහි කරවයි.",
    "pin": 3,
    "pad": 1.5
  },
  {
    "id": "devale",
    "si": "විභීෂණ දේවාලය",
    "en": "Vibhishana's shrine",
    "x": 0.9,
    "z": -6.2,
    "verses": [
      72,
      111
    ],
    "blurbEn": "The god's shrine: music, dancers, a portrait of Vibhishana, and the plea for a son for Princess Ulakudaya Devi.",
    "blurbSi": "දෙවොල් මැඳුර: සංගීතය, නැටුම්, විභීෂණ දෙවියන්ගේ වර්ණනාව සහ උලකුඩය දේවියට පුතෙකු පතා කරන ආයාචනය.",
    "pin": 2.4,
    "pad": 0.9
  }
];

export const SALALIHINI_SCENERY_LABELS: SceneryLabel[] = [
  { id: "colombo", en: "Colombo", si: "කොළඹ", x: -8.2, z: -2.4, y: 1.4 },
  { id: "mouth", en: "Kelani estuary", si: "කැලණි මෝය", x: -9.5, z: -9.6, y: 0.9 }
];

export const SALALIHINI_TRAJECTORY_NODES = [
  { x: -0.9, z: 4.3 },
  { x: -0.5, z: 2.7 },
  { x: -0.8, z: 1.3 },
  { x: -1.5, z: -0.4 },
  { x: -1.5, z: -1.7 },
  { x: -1.1, z: -2.9 },
  { x: -1.0, z: -4.2 },
  { x: -1.2, z: -5.0 },
  { x: -2.4, z: -7.1 },
  { x: -1.0, z: -5.8 },
  { x: 0.9, z: -6.0 }
];

export const SALALIHINI_VERSE_TO_NODE_MAP: [number, number][] = [
  [1, 0],
  [16, 0],
  [21, 0.7],
  [22, 2],
  [24, 2],
  [25, 3],
  [29, 4],
  [41, 6],
  [42, 6],
  [43, 7],
  [52, 8],
  [53, 9],
  [71, 9],
  [72, 10],
  [111, 10]
];
