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
  toyakoHotel: {
    id: 'toyako-hotel',
    name: '洞爺湖溫泉酒店',
    time: '18:45',
    area: 'Lake Toya',
    lat: 42.5661,
    lng: 140.8176,
    kind: 'onsen',
    note: '第一晚改住洞爺湖。建議揀湖畔、有停車場同晚餐方案嘅酒店，泊好車後唔再揸出街。',
    food: ['酒店晚餐', '洞爺湖溫泉街輕食', '便利店補水'],
  },
  toyakoFireworks: {
    id: 'toyako-fireworks',
    name: '洞爺湖長期煙花',
    time: '20:45',
    area: 'Toyako Onsen',
    lat: 42.5665,
    lng: 140.817,
    kind: 'sight',
    note: '2026/4/28-10/31 期間每晚 20:45-21:05，惡劣天氣可能取消。住湖畔酒店可少走路。',
  },
  toyakoVisitor: {
    id: 'toyako-visitor',
    name: '洞爺湖遊客中心 / 火山科學館',
    time: '09:15',
    area: 'Toyako Onsen',
    lat: 42.5647,
    lng: 140.8174,
    kind: 'kids',
    note: '9:00-17:00，一早先行室內館，了解有珠山火山。對小朋友比純觀景更易投入。',
  },
  usuzanRopeway: {
    id: 'usuzan-ropeway',
    name: '有珠山 Ropeway / 昭和新山',
    time: '10:20',
    area: 'Sobetsu',
    lat: 42.5439,
    lng: 140.8649,
    kind: 'sight',
    note: '夏季官方參考 8:15-17:45，停車場大但收費。若天氣差或雲低，直接跳過，保留體力去富良野。',
    food: ['昭和新山小食', '雪糕', '車上飯團'],
  },
  yuniBreak: {
    id: 'yuni-break',
    name: '由仁 / 夕張休息',
    time: '13:20',
    area: 'Yuni / Yubari',
    lat: 42.986,
    lng: 141.363,
    kind: 'drive',
    note: '洞爺湖去富良野係長車日，中途一定停 20-30 分鐘。司機飲水、伸展，小朋友去洗手間。',
    food: ['道之驛小食', '便利店午餐', '飲品補給'],
  },
  furanoMarche: {
    id: 'furano-marche',
    name: '富良野 Marche',
    time: '15:45',
    area: 'Furano',
    lat: 43.3447,
    lng: 142.3847,
    kind: 'food',
    note: 'Day 2 到富良野後只做補給同早晚餐，唔再硬排花田。讓司機同小朋友回復體力。',
    food: ['富良野咖喱蛋包飯', '薯仔/粟米小食', '北海道牛奶甜品'],
  },
  furanoHotel: {
    id: 'furano-hotel',
    name: '富良野住宿',
    time: '17:15',
    area: 'Furano',
    lat: 43.3423,
    lng: 142.3832,
    kind: 'hotel',
    note: '建議富良野住 2 晚同一酒店，少搬行李，7 月旺季亦方便早出發去花田。',
  },
  farmTomita: {
    id: 'farm-tomita',
    name: 'Farm Tomita',
    time: '08:45',
    area: 'Nakafurano',
    lat: 43.4172,
    lng: 142.4268,
    kind: 'sight',
    note: '7 月中係薰衣草旺季，早到最重要。只用正式停車場，唔好臨時路邊停車影相。',
    food: ['薰衣草雪糕', '哈密瓜甜品', '熱飲休息'],
  },
  lavenderEast: {
    id: 'lavender-east',
    name: 'Lavender East',
    time: '10:35',
    area: 'Kamifurano',
    lat: 43.4306,
    lng: 142.4658,
    kind: 'sight',
    note: 'Farm Tomita 官方 2026 預定 6/20-7/20 開放；7/15 正好在期間內。停車太滿就直接放棄。',
    food: ['薰衣草產品', '車上飲水', '小朋友小食'],
  },
  furanoCheese: {
    id: 'furano-cheese',
    name: '富良野芝士工房',
    time: '13:30',
    area: 'Furano',
    lat: 43.3268,
    lng: 142.3542,
    kind: 'kids',
    note: '下午安排室內/半室內點，避開最曬時間。pizza、雪糕同簡單體驗較親子友善。',
    food: ['pizza', '芝士雪糕', '牛奶甜品'],
  },
  ningleTerrace: {
    id: 'ningle-terrace',
    name: 'Ningle Terrace',
    time: '16:30',
    area: 'Furano',
    lat: 43.3246,
    lng: 142.3521,
    kind: 'sight',
    note: '森林木屋手作店，黃昏去較舒服。若小朋友攰，留在酒店休息更好。',
    food: ['Mori no Tokei 咖啡', '酒店區輕食', '富良野晚餐'],
  },
  shikisai: {
    id: 'shikisai-no-oka',
    name: '四季彩之丘',
    time: '08:45',
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
    time: '10:55',
    area: 'Biei',
    lat: 43.4936,
    lng: 142.6148,
    kind: 'sight',
    note: '熱門點，暑假前後都多人。停車後步行短，適合 6 歲同 9 歲。',
  },
  shirahige: {
    id: 'shirahige-falls',
    name: '白鬚瀑布',
    time: '11:40',
    area: 'Biei',
    lat: 43.4745,
    lng: 142.639,
    kind: 'sight',
    note: '同青池一齊安排，停留短。橋上影相要拖實小朋友。',
  },
  bieiLunch: {
    id: 'biei-lunch',
    name: '美瑛午餐 / 補給',
    time: '13:00',
    area: 'Biei',
    lat: 43.5883,
    lng: 142.4668,
    kind: 'food',
    note: '今日下午要返千歲，午餐唔排長龍。Biei Senka、便利店或簡單餐廳都可以。',
    food: ['Biei Senka 輕食', 'Junpei 候補', '便利店野餐'],
  },
  chitoseHotel: {
    id: 'chitose-hotel',
    name: '千歲市酒店 / 機場酒店',
    time: '17:30',
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
    title: '新千歲攞車，直去洞爺湖溫泉',
    base: '住洞爺湖',
    driveTotal: '約 1 小時 45 分至 2 小時 20 分，另加取車時間',
    routeStyle: '機場出發走高速/主要道路，唔入札幌市中心',
    summary: '16:30 喺新千歲攞車後直去洞爺湖溫泉酒店。第一晚唔加景點，泊好車、食晚餐、睇 20:45 洞爺湖煙花。',
    newDriverNote: '第一日係你第一次海外自駕第一程，天色漸暗前後行車。導航請設「酒店停車場」，中途需要就入 SA/便利店休息。',
    routeStops: [
      { ...routeStops.airport, time: '16:30' },
      { ...routeStops.toyakoHotel, driveFromPrevious: '新千歲到洞爺湖約 1 小時 45 分至 2 小時 20 分' },
      { ...routeStops.toyakoFireworks, driveFromPrevious: '酒店泊車後步行到湖邊' },
    ],
    foodFocus: ['洞爺湖酒店晚餐', '溫泉街輕食', '便利店買水同早餐', '煙花前後不再駕車'],
    backup: '如果取車或航班延誤，取消湖邊散步，直接酒店晚餐同休息；煙花視天氣同小朋友精神決定。',
  },
  {
    day: 2,
    date: '2026/7/14（二）',
    title: '洞爺湖火山半日，長途轉場去富良野',
    base: '住富良野',
    driveTotal: '約 4 小時 30 分至 5 小時 15 分，含休息',
    routeStyle: '全程最長轉場日，只排洞爺湖上午一個主景點',
    summary: '上午玩洞爺湖遊客中心同有珠山 Ropeway，午餐後開去富良野。抵達後只做補給、晚餐同早休息。',
    newDriverNote: '呢日唔排 Farm Tomita。由洞爺湖去富良野距離長，司機覺得攰就取消 Ropeway，直接早啲出發。',
    routeStops: [
      { ...routeStops.toyakoHotel, time: '08:45' },
      { ...routeStops.toyakoVisitor, driveFromPrevious: '洞爺湖溫泉街約 5 分鐘' },
      { ...routeStops.usuzanRopeway, driveFromPrevious: '遊客中心約 15-20 分鐘' },
      { ...routeStops.yuniBreak, driveFromPrevious: '有珠山到由仁/夕張約 2 小時' },
      { ...routeStops.furanoMarche, driveFromPrevious: '休息後到富良野約 1.5-2 小時' },
      { ...routeStops.furanoHotel, driveFromPrevious: '富良野 Marche 約 5-10 分鐘' },
    ],
    foodFocus: ['酒店早餐', '昭和新山小食', '道之驛/便利店午餐', '富良野 Marche 晚餐候補'],
    backup: '如天氣差或司機疲累，取消有珠山 Ropeway，10:00 前離開洞爺湖，直接去富良野。',
  },
  {
    day: 3,
    date: '2026/7/15（三）',
    title: '富良野薰衣草、芝士工房、森林木屋',
    base: '住富良野',
    driveTotal: '約 1 小時 30 分至 2 小時 15 分',
    routeStyle: '短途花田日，早出發避開停車高峰',
    summary: '用完整一日留畀富良野。早上 Farm Tomita + Lavender East，下午芝士工房，黃昏 Ningle Terrace。',
    newDriverNote: '7 月中停車場會忙。每個點只用正式停車場；如果 Farm Tomita 已經太多人，Lavender East 直接跳過。',
    routeStops: [
      { ...routeStops.furanoHotel, time: '08:00' },
      { ...routeStops.farmTomita, driveFromPrevious: '富良野住宿約 20-30 分鐘' },
      { ...routeStops.lavenderEast, driveFromPrevious: 'Farm Tomita 約 10-15 分鐘' },
      { ...routeStops.furanoMarche, time: '12:15', driveFromPrevious: 'Lavender East 到富良野市中心約 25-35 分鐘' },
      { ...routeStops.furanoCheese, driveFromPrevious: '富良野市中心約 10-15 分鐘' },
      { ...routeStops.ningleTerrace, driveFromPrevious: '芝士工房約 5-10 分鐘' },
      { ...routeStops.furanoHotel, driveFromPrevious: 'Ningle Terrace 約 10-15 分鐘' },
    ],
    foodFocus: ['Farm Tomita 薰衣草雪糕', '富良野 Marche', '富良野芝士工房 pizza', 'Mori no Tokei Cafe'],
    backup: '如天氣太熱或小朋友累，下午取消 Ningle Terrace，回酒店午睡；黃昏再附近晚餐。',
  },
  {
    day: 4,
    date: '2026/7/16（四）',
    title: '美瑛重點遊，黃昏返千歲',
    base: '住千歲或機場附近',
    driveTotal: '約 4 小時至 5 小時，含景點間移動同休息',
    routeStyle: '早上美瑛，下午長途返千歲，唔再加札幌或登別',
    summary: '早上玩四季彩之丘、青池、白鬚瀑布。午餐後直接南返千歲，最後一晚住近機場。',
    newDriverNote: '今日係第二個長車日。午餐後唔好加景點，目標 17:30 前到千歲酒店，讓司機休息同預備還車。',
    routeStops: [
      { ...routeStops.furanoHotel, time: '08:00' },
      { ...routeStops.shikisai, driveFromPrevious: '富良野約 45-55 分鐘' },
      { ...routeStops.bluePond, driveFromPrevious: '四季彩之丘約 35-45 分鐘' },
      { ...routeStops.shirahige, driveFromPrevious: '青池約 5-10 分鐘' },
      { ...routeStops.bieiLunch, driveFromPrevious: '白鬚瀑布約 30-40 分鐘' },
      { ...routeStops.chitoseHotel, driveFromPrevious: '美瑛到千歲約 2.5-3.5 小時，建議中途停一次' },
    ],
    foodFocus: ['四季彩之丘 soft serve', 'Biei Senka 輕食', '便利店野餐', '千歲市區晚餐'],
    backup: '如美瑛停車場太滿，只保留四季彩之丘 + 青池；13:30 前必須開始南返千歲。',
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
  '第一晚洞爺湖：16:30 攞車後係較長第一程，請揀有停車場及晚餐嘅湖畔酒店；抵達後不再駕車外出。',
  '導航：手機 Google Maps 加租車 GPS 雙保險。目的地優先輸入酒店停車場、景點停車場或道之驛，不要只輸入景點大名。',
  '路線：不入札幌市中心，不去登別。Day 2 洞爺湖到富良野、Day 4 美瑛返千歲係長車日，中途一定休息。',
  '7 月旺季：洞爺湖煙花、富良野薰衣草、Farm Tomita、青池停車場會多人，每日只放 2-3 個重點。所有官方營業時間出發前 3-7 日再覆核。',
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
    label: '洞爺湖長期煙花',
    url: 'https://www.laketoya.com/en/event/',
  },
  {
    label: '洞爺湖遊客中心',
    url: 'https://www.japan.travel/national-parks/parks/shikotsu-toya/see-and-do/toyako-visitor-center-and-volcano-science-museum/',
  },
  {
    label: '有珠山 Ropeway',
    url: 'https://usuzan.hokkaido.jp/en/',
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
