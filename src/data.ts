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
  sapporoEastHotel: {
    id: 'sapporo-east-hotel',
    name: '札幌東側 / 苗穗 / Sapporo Factory 附近酒店',
    time: '18:15',
    area: 'Sapporo',
    lat: 43.0689,
    lng: 141.3636,
    kind: 'hotel',
    note: '第一晚住札幌，但建議揀東側、苗穗、Sapporo Factory 或札幌站北口一帶有停車場酒店，避免薄野/大通核心兜圈。',
    food: ['泊好車後步行/的士晚餐', 'Sapporo Beer Garden 成吉思汗', 'Sapporo Factory 輕食'],
  },
  sunagawaSa: {
    id: 'sunagawa-sa',
    name: '砂川 SA / 道之驛休息',
    time: '10:10',
    area: 'Central Hokkaido',
    lat: 43.5439,
    lng: 141.9004,
    kind: 'drive',
    note: '札幌出發後第一個正式休息點。小朋友去洗手間，司機飲水伸展。',
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
    note: '7 月中係薰衣草旺季，人會多。先泊車再慢行，唔好臨時路邊停車影相。',
    food: ['薰衣草雪糕', '哈密瓜甜品', '熱飲休息'],
  },
  lavenderEast: {
    id: 'lavender-east',
    name: 'Lavender East',
    time: '15:25',
    area: 'Kamifurano',
    lat: 43.4306,
    lng: 142.4658,
    kind: 'sight',
    note: 'Farm Tomita 官方 2026 預定 6/20-7/20 開放；7/14 正好在期間內。視乎停車情況決定去唔去。',
    food: ['薰衣草產品', '車上飲水', '小朋友小食'],
  },
  ningleTerrace: {
    id: 'ningle-terrace',
    name: 'Ningle Terrace',
    time: '17:15',
    area: 'Furano',
    lat: 43.3246,
    lng: 142.3521,
    kind: 'sight',
    note: '森林木屋手作店，天黑前去最舒服。可順路去 Mori no Tokei Cafe，但唔好排到小朋友太攰。',
    food: ['Mori no Tokei 咖啡', '酒店區輕食', '富良野芝士工房 pizza'],
  },
  furanoHotel: {
    id: 'furano-hotel',
    name: '富良野住宿',
    time: '19:15',
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
    note: '7 月花田色彩最靚，但停車場會忙。早上先去，避免午餐後人潮。',
    food: ['農場 soft serve', '熱粟米', '簡單午餐'],
  },
  bluePond: {
    id: 'blue-pond',
    name: '白金青池',
    time: '11:20',
    area: 'Biei',
    lat: 43.4936,
    lng: 142.6148,
    kind: 'sight',
    note: '熱門點，暑假前後都多人。停車後步行短，適合 6 歲同 9 歲。',
  },
  shirahige: {
    id: 'shirahige-falls',
    name: '白鬚瀑布',
    time: '12:05',
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
    time: '13:10',
    area: 'Lake Shikotsu',
    lat: 42.7747,
    lng: 141.4034,
    kind: 'sight',
    note: '由富良野南返千歲途中順路停。湖邊步行、遊客中心同簡單午餐，不去登別。',
    food: ['湖邊餐廳輕食', '支笏湖溫泉街甜品', '熱飲休息'],
  },
  chitoseHotel: {
    id: 'chitose-hotel',
    name: '千歲市酒店 / 機場酒店',
    time: '16:45',
    area: 'Chitose',
    lat: 42.8214,
    lng: 141.6509,
    kind: 'hotel',
    note: '最後一晚住近機場，令 7/17 13:00 還車壓力最低。',
  },
  chitoseSalmon: {
    id: 'chitose-salmon',
    name: '千歲鮭魚水族館',
    time: '09:30',
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
    time: '11:20',
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
    date: '2026/7/13（一）',
    title: '新千歲攞車，入札幌住一晚',
    base: '住札幌',
    driveTotal: '約 60-90 分鐘，另加取車時間',
    routeStyle: '只入札幌一次，建議住東側/北口/苗穗有停車場酒店',
    summary: '16:30 喺新千歲攞車後直去札幌酒店。第一晚唔安排市中心多點移動，泊好車後步行、的士或酒店附近食晚餐。',
    newDriverNote: '札幌係全程最複雜路段，所以唔住薄野/大通核心。目的地設酒店停車場，唔好先去餐廳再揾車位。',
    routeStops: [
      { ...routeStops.airport, time: '16:30' },
      { ...routeStops.sapporoEastHotel, driveFromPrevious: '新千歲到札幌東側約 60-90 分鐘，晚高峰可再加 20 分鐘' },
    ],
    foodFocus: ['泊好車後 Sapporo Beer Garden 成吉思汗', 'Sapporo Factory 輕食', '酒店附近家庭餐廳', '司機不飲酒'],
    backup: '如果航班或取車延誤，直接機場晚餐後去酒店；札幌夜晚唔再加景點。',
  },
  {
    day: 2,
    date: '2026/7/14（二）',
    title: '札幌去富良野，薰衣草主日',
    base: '住富良野',
    driveTotal: '約 3 小時 15 分至 4 小時，含休息同花田間移動',
    routeStyle: '用高速離開札幌，避開市中心；富良野只排花田同森林',
    summary: '早上由札幌出發，經砂川休息，午餐到富良野。下午 Farm Tomita + Lavender East，黃昏 Ningle Terrace。',
    newDriverNote: '7 月中富良野係旺季，最忌即興加景點。只要停車場太滿，就刪 Lavender East 或 Ningle Terrace 其中一個。',
    routeStops: [
      { ...routeStops.sapporoEastHotel, time: '08:30' },
      { ...routeStops.sunagawaSa, driveFromPrevious: '札幌出發約 70-90 分鐘' },
      { ...routeStops.furanoMarche, driveFromPrevious: '砂川到富良野約 75-95 分鐘' },
      { ...routeStops.farmTomita, driveFromPrevious: '富良野市中心約 20-25 分鐘' },
      { ...routeStops.lavenderEast, driveFromPrevious: 'Farm Tomita 約 10-15 分鐘' },
      { ...routeStops.ningleTerrace, driveFromPrevious: 'Lavender East 約 35-45 分鐘' },
      { ...routeStops.furanoHotel, driveFromPrevious: 'Ningle Terrace 約 10-15 分鐘' },
    ],
    foodFocus: ['富良野 Marche', 'Farm Tomita 薰衣草雪糕', 'Mori no Tokei Cafe', '富良野芝士工房 pizza'],
    backup: '如塞車或落雨，保留 Farm Tomita，取消 Lavender East；晚餐改酒店附近。',
  },
  {
    day: 3,
    date: '2026/7/15（三）',
    title: '美瑛丘陵、青池、白鬚瀑布',
    base: '住富良野',
    driveTotal: '約 2 小時 45 分至 3 小時 30 分',
    routeStyle: '鄉郊路較易揸，但景點停車場會多人',
    summary: '用一日慢遊美瑛，早上先去四季彩之丘，再去青池同白鬚瀑布。下午保留彈性，唔硬排旭山動物園。',
    newDriverNote: 'Patchwork Road 一帶好多遊客停車影相，唔好路邊急停；只用正式停車場同觀景點。',
    routeStops: [
      { ...routeStops.furanoHotel, time: '08:30' },
      { ...routeStops.shikisai, driveFromPrevious: '富良野約 45-55 分鐘' },
      { ...routeStops.bluePond, driveFromPrevious: '四季彩之丘約 35-45 分鐘' },
      { ...routeStops.shirahige, driveFromPrevious: '青池約 5-10 分鐘' },
      { ...routeStops.bieiLunch, driveFromPrevious: '白鬚瀑布約 30-40 分鐘' },
      { ...routeStops.furanoHotel, time: '16:30', driveFromPrevious: '美瑛返富良野約 55-70 分鐘' },
    ],
    foodFocus: ['Biei Senka', 'Junpei 炸蝦丼候補', '四季彩之丘 soft serve', '富良野晚餐：Kumagera / 咖喱'],
    backup: '如果小朋友好想睇動物，可改成旭山動物園版本，但即日車程會多約 90 分鐘，唔作新手首選。',
  },
  {
    day: 4,
    date: '2026/7/16（四）',
    title: '富良野南返，支笏湖慢行再住千歲',
    base: '住千歲或支笏湖',
    driveTotal: '約 3 小時 45 分至 4 小時 45 分，含兩次休息',
    routeStyle: '南返近機場，不去登別；支笏湖山路慢速',
    summary: '全程最長車日，但把路線拆成富良野、占冠/夕張休息、支笏湖、千歲。最後一晚住近機場，為翌日還車留 buffer。',
    newDriverNote: '支笏湖一段有彎路，唔趕、不超車。司機攰就直接富良野返千歲酒店，取消支笏湖。',
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
      { ...routeStops.lakeShikotsu, driveFromPrevious: '休息後約 90-110 分鐘' },
      { ...routeStops.chitoseHotel, driveFromPrevious: '支笏湖到千歲約 30-45 分鐘' },
    ],
    foodFocus: ['占冠/夕張休息小食', '支笏湖湖邊輕食', '千歲市區晚餐', '小朋友可備飯團同水果'],
    backup: '若天氣差或司機疲累，取消支笏湖，富良野直接返千歲酒店休息。',
  },
  {
    day: 5,
    date: '2026/7/17（五）',
    title: '千歲輕鬆半日，13:00 還車',
    base: '還車日',
    driveTotal: '約 30-50 分鐘，另加油同還車時間',
    routeStyle: '只在千歲市內同機場附近移動',
    summary: '最後晚已住千歲，所以還車日可以好鬆動。可去鮭魚水族館，或者直接機場食飯買手信。',
    newDriverNote: '導航目的地設租車公司，不是機場客運大樓。目標 12:00 前到租車公司，13:00 deadline 前完成還車。',
    routeStops: [
      { ...routeStops.chitoseHotel, time: '09:00' },
      { ...routeStops.chitoseSalmon, driveFromPrevious: '千歲酒店約 5-15 分鐘' },
      { ...routeStops.returnFuel, driveFromPrevious: '水族館到油站約 10-15 分鐘' },
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
        food: ['Ramen Dojo', '海鮮丼', 'Royce / LeTAO 手信'],
      },
    ],
    foodFocus: ['酒店早餐', 'Salmon Park 小食', '機場午餐', 'Royce / LeTAO 手信'],
    backup: '若小朋友攰或天氣差，跳過水族館，10:45 加油，11:15-11:30 到租車公司。',
  },
];

export const safetyNotes = [
  '車款：2 大 2 小朋友加 2 個細行李，建議 Toyota Sienta / Honda Freed / Corolla Touring / compact SUV 級別。唔建議 kei car 或太細 hatchback。',
  '兒童座椅：日本法例要求未滿 6 歲使用 child seat；6 歲同 9 歲如身高未夠安全帶貼肩貼髖，仍建議租 booster。',
  '札幌住宿：第一晚可住札幌，但請選酒店自家停車場、札幌東側/苗穗/Sapporo Factory/札幌站北口一帶，避免薄野同大通核心。',
  '導航：手機 Google Maps 加租車 GPS 雙保險。目的地優先輸入酒店停車場、景點停車場或道之驛，不要只輸入景點大名。',
  '路線：只入札幌一次，不去登別。長途盡量用主要道路/高速，富良野/美瑛鄉郊慢車讓後車過。',
  '7 月旺季：富良野薰衣草、Farm Tomita、青池停車場會多人，每日只放 2-3 個重點。所有官方營業時間出發前 3-7 日再覆核。',
  '還車：7/17 13:00 還車，建議 12:00 前到租車公司。加油收據、車身相、ETC/HEP 資料放同一個袋。',
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
    label: 'Farm Tomita Lavender East',
    url: 'https://www.farm-tomita.co.jp/en/east/',
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
    label: '千歲鮭魚水族館觀光資訊',
    url: 'https://www.visit-hokkaido.jp/en/spot/detail_10144.html',
  },
  {
    label: 'Sapporo Beer Museum / Garden',
    url: 'https://www.sapporobeer.jp/english/brewery/s_museum/',
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
