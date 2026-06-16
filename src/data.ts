export type StopKind = 'airport' | 'hotel' | 'drive' | 'sight' | 'food' | 'onsen' | 'kids';

export type Stop = {
  id: string;
  name: string;
  time: string;
  area: string;
  lat: number;
  lng: number;
  kind: StopKind;
  note: string;
  driveFromPrevious?: string;
  food?: string[];
};

export type DayPlan = {
  day: number;
  date: string;
  title: string;
  base: string;
  driveTotal: string;
  routeStyle: string;
  summary: string;
  newDriverNote: string;
  routeStops: Stop[];
  foodFocus: string[];
  backup: string;
};

export const routeStops: Record<string, Stop> = {
  airport: {
    id: 'cts-airport',
    name: '新千歲機場',
    time: '16:30',
    area: 'Chitose',
    lat: 42.7752,
    lng: 141.6923,
    kind: 'airport',
    note: '第一日 16:30 攞車，最後日 13:00 前還車。預留租車櫃位、shuttle、驗車同設定導航時間。',
  },
  chitoseHotel: {
    id: 'chitose-hotel',
    name: '千歲市酒店',
    time: '18:00',
    area: 'Chitose',
    lat: 42.8214,
    lng: 141.6509,
    kind: 'hotel',
    note: '第一晚只揸短途，早啲適應日本右軚、左上右落、雪山以外嘅普通市區路。',
  },
  sunagawaSa: {
    id: 'sunagawa-sa',
    name: '砂川 SA / 道之驛休息',
    time: '10:30',
    area: 'Central Hokkaido',
    lat: 43.5439,
    lng: 141.9004,
    kind: 'drive',
    note: '長途日每 75-90 分鐘安排廁所同飲品，對小朋友同新手司機都舒服。',
  },
  furanoMarche: {
    id: 'furano-marche',
    name: '富良野 Marche',
    time: '12:15',
    area: 'Furano',
    lat: 43.3447,
    lng: 142.3847,
    kind: 'food',
    note: '午餐、買小食同補給。泊車相對易，適合初到富良野先放慢節奏。',
    food: ['富良野咖喱蛋包飯', '薯仔/粟米小食', '北海道牛奶甜品'],
  },
  farmTomita: {
    id: 'farm-tomita',
    name: 'Farm Tomita',
    time: '14:00',
    area: 'Nakafurano',
    lat: 43.4172,
    lng: 142.4268,
    kind: 'sight',
    note: '五一未係薰衣草滿開季，但春花、溫室同甜品仍然適合家庭慢行。',
    food: ['薰衣草雪糕', '哈密瓜甜品', '熱飲休息'],
  },
  ningleTerrace: {
    id: 'ningle-terrace',
    name: 'Ningle Terrace',
    time: '17:00',
    area: 'Furano',
    lat: 43.3246,
    lng: 142.3521,
    kind: 'sight',
    note: '森林木屋手作店，天黑前去最易泊車。可順路去 Mori no Tokei Cafe。',
    food: ['Mori no Tokei 咖啡', '酒店區輕食', '富良野芝士工房 pizza'],
  },
  furanoHotel: {
    id: 'furano-hotel',
    name: '富良野住宿',
    time: '19:30',
    area: 'Furano',
    lat: 43.3423,
    lng: 142.3832,
    kind: 'hotel',
    note: '建議住 2 晚同一酒店，減少每日收拾行李，亦方便小朋友早睡。',
  },
  shikisai: {
    id: 'shikisai-no-oka',
    name: '四季彩之丘',
    time: '09:20',
    area: 'Biei',
    lat: 43.5289,
    lng: 142.4681,
    kind: 'sight',
    note: '五一可睇春季丘陵景，停車場較大。風大時小朋友要加外套。',
    food: ['農場 soft serve', '熱粟米', '簡單午餐'],
  },
  bluePond: {
    id: 'blue-pond',
    name: '白金青池',
    time: '11:30',
    area: 'Biei',
    lat: 43.4936,
    lng: 142.6148,
    kind: 'sight',
    note: '熱門點，黃金週建議上午到。停車後步行短，適合 6 歲同 9 歲。',
  },
  shirahige: {
    id: 'shirahige-falls',
    name: '白鬚瀑布',
    time: '12:15',
    area: 'Biei',
    lat: 43.4745,
    lng: 142.639,
    kind: 'sight',
    note: '同青池一齊安排，停留短。橋上影相要拖實小朋友。',
  },
  bieiLunch: {
    id: 'biei-lunch',
    name: '美瑛午餐',
    time: '13:15',
    area: 'Biei',
    lat: 43.5883,
    lng: 142.4668,
    kind: 'food',
    note: '排隊餐廳太耐就用 Biei Senka / 便利店野餐替代，避免下午太趕。',
    food: ['Junpei 炸蝦丼候補', 'Biei Senka 輕食', '咖啡店甜品'],
  },
  lakeShikotsu: {
    id: 'lake-shikotsu',
    name: '支笏湖遊客中心',
    time: '13:00',
    area: 'Lake Shikotsu',
    lat: 42.7747,
    lng: 141.4034,
    kind: 'sight',
    note: '由富良野南返千歲途中順路停。湖邊步行、遊客中心同簡單午餐，唔需要入札幌或登別。',
    food: ['湖邊餐廳輕食', '支笏湖溫泉街甜品', '熱飲休息'],
  },
  chitoseSalmon: {
    id: 'chitose-salmon',
    name: '千歲鮭魚水族館',
    time: '10:00',
    area: 'Chitose',
    lat: 42.8317,
    lng: 141.6517,
    kind: 'kids',
    note: '小型室內景點，泊車方便，適合還車日前半日。若時間緊可直接跳過去機場。',
    food: ['道之駅 Salmon Park 小食', '千歲市區午餐', '機場午餐候補'],
  },
  returnFuel: {
    id: 'return-fuel',
    name: '機場附近油站',
    time: '11:15',
    area: 'Chitose',
    lat: 42.7995,
    lng: 141.668,
    kind: 'drive',
    note: '還車前加滿油，保留收據。比 13:00 早 45-60 分鐘到租車公司最安心。',
  },
};

export const days: DayPlan[] = [
  {
    day: 1,
    date: '5 月 1 日',
    title: '新千歲攞車，千歲短途適應',
    base: '住千歲',
    driveTotal: '約 20-35 分鐘',
    routeStyle: '只走機場/千歲市區，唔入札幌',
    summary: '第一日 16:30 先攞車，唔建議即晚開去富良野。先食飯、買水、設定導航同熟習車身。',
    newDriverNote: '租車場出發前先調好座椅、鏡、導航語言；第一程只去千歲酒店，避免夜晚長途。',
    routeStops: [
      { ...routeStops.airport, time: '16:30' },
      {
        id: 'airport-dinner',
        name: '新千歲機場晚餐',
        time: '17:30',
        area: 'New Chitose Airport',
        lat: 42.7752,
        lng: 141.6923,
        kind: 'food',
        note: '攞車前後可先食，唔使摸黑揾餐廳。',
        food: ['北海道 Ramen Dojo', '海鮮丼', 'Royce / LeTAO 甜品'],
      },
      { ...routeStops.chitoseHotel, driveFromPrevious: '機場到千歲約 15-25 分鐘' },
    ],
    foodFocus: ['機場 Ramen Dojo', '千歲市區家庭餐廳', '便利店買早餐同水'],
    backup: '如果航班延誤，就直接機場食飯再酒店，第二朝先買補給。',
  },
  {
    day: 2,
    date: '5 月 2 日',
    title: '千歲去富良野，花田同森林木屋',
    base: '住富良野',
    driveTotal: '約 2 小時 45 分至 3 小時 30 分，含休息',
    routeStyle: '以高速/主要道路為主，中途休息一次',
    summary: '早上由千歲出發，避開札幌市中心，下午玩 Farm Tomita，同日黃昏去 Ningle Terrace。',
    newDriverNote: '第一個長途日只排兩個主要景點。黃金週如車多，直接刪走芝士工房或縮短花田停留。',
    routeStops: [
      { ...routeStops.chitoseHotel, time: '09:00' },
      { ...routeStops.sunagawaSa, driveFromPrevious: '千歲出發約 75-90 分鐘' },
      { ...routeStops.furanoMarche, driveFromPrevious: '休息站到富良野約 70-90 分鐘' },
      { ...routeStops.farmTomita, driveFromPrevious: '富良野市中心約 20-25 分鐘' },
      { ...routeStops.ningleTerrace, driveFromPrevious: 'Farm Tomita 約 30-40 分鐘' },
      { ...routeStops.furanoHotel, driveFromPrevious: 'Ningle Terrace 約 10-15 分鐘' },
    ],
    foodFocus: ['富良野 Marche', 'Farm Tomita 薰衣草雪糕', 'Mori no Tokei Cafe', '富良野芝士工房 pizza'],
    backup: '如落雨，改去富良野芝士工房、果醬園或酒店提早 check-in。',
  },
  {
    day: 3,
    date: '5 月 3 日',
    title: '美瑛丘陵、青池、白鬚瀑布',
    base: '住富良野',
    driveTotal: '約 2 小時 20 分至 3 小時',
    routeStyle: '鄉郊路較易揸，但丘陵路要保持慢速',
    summary: '用一日慢遊美瑛，早上先去人多景點，下午留空間比小朋友休息。',
    newDriverNote: 'Patchwork Road 一帶好多遊客停車影相，唔好路邊急停；只用正式停車場。',
    routeStops: [
      { ...routeStops.furanoHotel, time: '08:30' },
      { ...routeStops.shikisai, driveFromPrevious: '富良野約 45-55 分鐘' },
      { ...routeStops.bluePond, driveFromPrevious: '四季彩之丘約 35-45 分鐘' },
      { ...routeStops.shirahige, driveFromPrevious: '青池約 5-10 分鐘' },
      { ...routeStops.bieiLunch, driveFromPrevious: '白鬚瀑布約 30-40 分鐘' },
      { ...routeStops.furanoHotel, time: '16:30', driveFromPrevious: '美瑛返富良野約 55-70 分鐘' },
    ],
    foodFocus: ['Biei Senka', 'Junpei 炸蝦丼候補', '四季彩之丘 soft serve', '富良野晚餐：Kumagera / 咖喱'],
    backup: '如果天氣差，可把青池改成旭山動物園，但車程會增加約 60-90 分鐘。',
  },
  {
    day: 4,
    date: '5 月 4 日',
    title: '富良野南返，支笏湖慢行再住千歲',
    base: '住千歲或支笏湖',
    driveTotal: '約 3 小時至 3 小時 45 分，含休息',
    routeStyle: '主要道路南返，避開札幌同登別',
    summary: '不去登別，改為由富良野慢慢南返千歲方向。中途用支笏湖做半日自然停站，最後一晚住近機場。',
    newDriverNote: '呢日重點係把車程拆細，唔再加遠景點。支笏湖山路彎位較多，保持慢速同早啲出發。',
    routeStops: [
      { ...routeStops.furanoHotel, time: '08:45' },
      {
        id: 'shimukappu-break',
        name: '占冠 / 夕張休息',
        time: '10:20',
        area: 'Shimukappu / Yubari',
        lat: 42.983,
        lng: 142.398,
        kind: 'drive',
        note: '洗手間、咖啡、簡單小食。長途日最重要係司機休息。',
        driveFromPrevious: '富良野約 75-90 分鐘',
      },
      { ...routeStops.lakeShikotsu, driveFromPrevious: '休息後約 70-90 分鐘' },
      { ...routeStops.chitoseHotel, time: '16:30', driveFromPrevious: '支笏湖到千歲約 30-45 分鐘' },
    ],
    foodFocus: ['占冠/夕張休息小食', '支笏湖湖邊輕食', '千歲市區晚餐', '小朋友可備飯團同水果'],
    backup: '若黃金週塞車或落雨，取消支笏湖，富良野直接返千歲酒店休息。',
  },
  {
    day: 5,
    date: '5 月 5 日',
    title: '千歲輕鬆半日，13:00 還車',
    base: '還車日',
    driveTotal: '約 25-45 分鐘，另加油同還車時間',
    routeStyle: '只在千歲市內同機場附近移動',
    summary: '最後晚已住千歲，所以還車日可以好鬆動。可去鮭魚水族館，或者直接機場食飯買手信。',
    newDriverNote: '導航目的地設租車公司，不是機場客運大樓。12:00 前到租車公司，13:00 deadline 前完成還車。',
    routeStops: [
      { ...routeStops.chitoseHotel, time: '09:15' },
      { ...routeStops.chitoseSalmon, driveFromPrevious: '千歲酒店約 5-15 分鐘' },
      { ...routeStops.returnFuel, time: '11:25', driveFromPrevious: '水族館到油站約 10-15 分鐘' },
      { ...routeStops.airport, time: '12:00', driveFromPrevious: '油站到租車公司約 10-20 分鐘' },
      {
        id: 'airport-lunch',
        name: '還車後機場午餐',
        time: '12:45',
        area: 'New Chitose Airport',
        lat: 42.7752,
        lng: 141.6923,
        kind: 'food',
        note: '還車後先食午餐，唔再揸車。可以買手信同讓小朋友放電。',
        food: ['Ramen Dojo', '海鮮丼', '甜品手信'],
      },
    ],
    foodFocus: ['酒店早餐', 'Salmon Park 小食', '機場午餐', 'Royce / LeTAO 手信'],
    backup: '若小朋友攰或天氣差，跳過水族館，10:45 加油，11:15 到租車公司。',
  },
];

export const safetyNotes = [
  '車款：2 大 2 小朋友加 2 個細行李，建議 Toyota Sienta / Honda Freed / Corolla Touring / compact SUV 級別。唔建議 kei car 或太細 hatchback。',
  '兒童座椅：日本法例要求未滿 6 歲使用 child seat；6 歲同 9 歲如身高未夠安全帶貼肩貼髖，仍建議租 booster。',
  '導航：手機 Google Maps 加租車 GPS 雙保險。目的地優先輸入停車場或酒店名，不要只輸入景點大名。',
  '路線：全程避開札幌市中心、薄野、JR 札幌站周邊，亦不去登別。長途盡量用主要道路/高速，鄉郊慢車讓後車過。',
  '黃金週：停車場同餐廳會多人，每日只放 2-3 個重點。所有官方營業時間出發前 3-7 日再覆核。',
  '還車：最後日 13:00 還車，建議 12:00 到租車公司。加油收據、車身相、ETC/HEP 資料放同一個袋。',
];

export const sources = [
  {
    label: '新千歲機場租車資訊',
    url: 'https://www.new-chitose-airport.jp/en/access/rentacar/',
  },
  {
    label: 'JAF 日本交通規則及 child seat',
    url: 'https://english.jaf.or.jp/driving-in-japan/traffic-rules',
  },
  {
    label: 'NEXCO Hokkaido Expressway Pass',
    url: 'https://www.driveplaza.com/trip/drawari/hokkaido_expass/en.html',
  },
  {
    label: 'Farm Tomita 官方網站',
    url: 'https://www.farm-tomita.co.jp/en/',
  },
  {
    label: '四季彩之丘官方網站',
    url: 'https://www.shikisainooka.jp/en/',
  },
  {
    label: '美瑛白金青池觀光資訊',
    url: 'https://www.biei-hokkaido.jp/en/sightseeing/shirogane-blue-pond/',
  },
  {
    label: 'Ningle Terrace 官方資訊',
    url: 'https://www.princehotels.com/shinfurano/experience/ningle-terrace-shop/',
  },
  {
    label: '支笏洞爺國立公園官方資訊',
    url: 'https://www.japan.travel/national-parks/parks/shikotsu-toya/',
  },
  {
    label: '支笏湖遊客中心',
    url: 'https://shikotsukovc.sakura.ne.jp/index.en.html',
  },
  {
    label: '千歲鮭魚水族館觀光資訊',
    url: 'https://www.visit-hokkaido.jp/en/spot/detail_10144.html',
  },
];

export const getGoogleDirectionsUrl = (stops: Stop[]) => {
  const first = stops[0];
  const last = stops[stops.length - 1];
  const middle = stops.slice(1, -1);
  const params = new URLSearchParams({
    api: '1',
    origin: `${first.lat},${first.lng}`,
    destination: `${last.lat},${last.lng}`,
    travelmode: 'driving',
  });

  if (middle.length > 0) {
    params.set('waypoints', middle.map((stop) => `${stop.lat},${stop.lng}`).join('|'));
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
};
