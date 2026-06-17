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
  distanceFromPrevious?: string;
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
  shiraoiDinner: {
    id: 'shiraoi-dinner',
    name: '白老晚餐 / 早晚餐',
    time: '17:35',
    area: 'Shiraoi',
    lat: 42.5514,
    lng: 141.3557,
    kind: 'food',
    note: '第一日攞車後先喺白老食飯，建議揀有停車場、唔使排長龍嘅白老牛或海鮮餐廳；食完再去洞爺湖。',
    food: ['白老牛', '海鮮丼', '便利店補水'],
  },
  toyakoHotel: {
    id: 'toyako-hotel',
    name: '洞爺觀光酒店',
    time: '19:15',
    area: 'Lake Toya',
    lat: 42.5663,
    lng: 140.8192,
    kind: 'onsen',
    note: '第一晚指定住洞爺觀光酒店。泊好車後唔再揸出街，晚上視乎小朋友精神步行睇洞爺湖煙花。',
    food: ['白老晚餐後入住', '溫泉', '便利店補給'],
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
  lakeHillFarm: {
    id: 'lake-hill-farm',
    name: 'Lake Hill Farm',
    time: '09:45',
    area: 'Toyako',
    lat: 42.6095,
    lng: 140.8589,
    kind: 'sight',
    note: '洞爺湖往富良野前先去 Lake Hill Farm，食 gelato、望羊蹄山，停留 45-60 分鐘就出發長途轉場。',
    food: ['gelato', '牛奶甜品', '咖啡'],
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
    name: 'Wonderland Furano Maple',
    time: '16:45',
    area: 'Furano',
    lat: 43.3427,
    lng: 142.3619,
    kind: 'hotel',
    note: '第 2-3 晚住 Wonderland Furano Maple，地址 Kitanomine-cho 26-26, Furano 076-0034。兩晚同一住宿，少搬行李。',
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
    title: '新千歲攞車，白老食飯，再入洞爺湖',
    base: '住洞爺觀光酒店',
    driveTotal: '約 2 小時至 2 小時 30 分，另加取車同晚餐時間',
    routeStyle: '新千歲 → 白老 → 洞爺湖；唔入札幌市中心',
    summary: '16:30 喺新千歲攞車，先到白老食白老牛或海鮮，之後入住洞爺觀光酒店。泊好車後視乎精神步行睇 20:45 洞爺湖煙花。',
    newDriverNote: '第一晚會較夜到酒店，白老食飯唔好拖太耐。導航分兩段設：白老餐廳停車場，再設洞爺觀光酒店。',
    routeStops: [
      { ...routeStops.airport, time: '16:30' },
      { ...routeStops.shiraoiDinner, driveFromPrevious: '新千歲到白老約 45-60 分鐘', distanceFromPrevious: '約 46km' },
      { ...routeStops.toyakoHotel, driveFromPrevious: '白老到洞爺觀光酒店約 1 小時 10-30 分鐘', distanceFromPrevious: '約 79km' },
      { ...routeStops.toyakoFireworks, driveFromPrevious: '酒店泊車後步行到湖邊', distanceFromPrevious: '步行約 0.5km' },
    ],
    foodFocus: ['白老牛', '白老海鮮丼', '便利店買水同早餐', '煙花前後不再駕車'],
    backup: '如果取車或航班延誤，白老只買外賣/便利店，直接去洞爺觀光酒店；煙花視天氣同小朋友精神決定。',
  },
  {
    day: 2,
    date: '2026/7/14（二）',
    title: '洞爺湖出發，Lake Hill Farm，轉場去富良野',
    base: '住 Wonderland Furano Maple',
    driveTotal: '約 4 小時至 5 小時，含 Lake Hill Farm 同休息',
    routeStyle: '洞爺湖 → Lake Hill Farm → 由仁/夕張休息 → 富良野',
    summary: '早上由洞爺觀光酒店出發，先去 Lake Hill Farm 食 gelato 同影相，之後長途轉場去富良野，入住 Wonderland Furano Maple。',
    newDriverNote: '今日係長車日，火山博物館取消。Lake Hill Farm 停留控制 45-60 分鐘，之後專心轉場。',
    routeStops: [
      { ...routeStops.toyakoHotel, time: '08:45' },
      { ...routeStops.lakeHillFarm, driveFromPrevious: '洞爺觀光酒店到 Lake Hill Farm 約 20 分鐘', distanceFromPrevious: '約 16km' },
      { ...routeStops.yuniBreak, driveFromPrevious: 'Lake Hill Farm 到由仁/夕張約 1 小時 20 分鐘', distanceFromPrevious: '約 84km' },
      { ...routeStops.furanoMarche, time: '15:30', driveFromPrevious: '休息後到富良野約 1 小時 45 分至 2 小時', distanceFromPrevious: '約 119km' },
      { ...routeStops.furanoHotel, driveFromPrevious: '富良野 Marche 到 Wonderland 約 10 分鐘', distanceFromPrevious: '約 3km' },
    ],
    foodFocus: ['Lake Hill Farm gelato', '道之驛/便利店午餐', '富良野 Marche 補給', '富良野晚餐'],
    backup: '如天氣差或司機疲累，Lake Hill Farm 只停 20 分鐘買雪糕，午餐改便利店，優先 17:00 前到 Wonderland。',
  },
  {
    day: 3,
    date: '2026/7/15（三）',
    title: '富良野花田，富田農場、薰衣草東部、夜遊森林精靈陽台',
    base: '住 Wonderland Furano Maple',
    driveTotal: '約 1 小時至 1 小時 45 分',
    routeStyle: '短途花田日，早出發避開停車高峰',
    summary: '完整一日留畀富良野。早上富田農場同 Lavender East，中午富良野市中心補給，下午休息，晚上去森林精靈陽台。',
    newDriverNote: '7 月中富田農場停車場會忙，早到最重要。森林精靈陽台放夜晚，但如果小朋友攰就取消。',
    routeStops: [
      { ...routeStops.furanoHotel, time: '08:00' },
      { ...routeStops.farmTomita, driveFromPrevious: 'Wonderland 到富田農場約 20-30 分鐘', distanceFromPrevious: '約 11km' },
      { ...routeStops.lavenderEast, driveFromPrevious: 'Farm Tomita 約 10-15 分鐘', distanceFromPrevious: '約 6km' },
      { ...routeStops.furanoMarche, time: '12:15', driveFromPrevious: 'Lavender East 到富良野市中心約 25-35 分鐘', distanceFromPrevious: '約 13km' },
      { ...routeStops.ningleTerrace, time: '19:00', driveFromPrevious: 'Wonderland / 富良野市中心約 10-15 分鐘', distanceFromPrevious: '約 5km' },
      { ...routeStops.furanoHotel, time: '20:30', driveFromPrevious: '森林精靈陽台返 Wonderland 約 10 分鐘', distanceFromPrevious: '約 4km' },
    ],
    foodFocus: ['Farm Tomita 薰衣草雪糕', '富良野 Marche', '富良野咖喱/蛋包飯', 'Ningle Terrace 咖啡'],
    backup: '如天氣太熱或小朋友累，下午回 Wonderland 午睡；晚上森林精靈陽台視乎精神決定。',
  },
  {
    day: 4,
    date: '2026/7/16（四）',
    title: '美瑛重點遊，四季彩之丘、青池、白鬚瀑布，黃昏返機場附近',
    base: '住千歲或機場附近',
    driveTotal: '約 4 小時至 5 小時，含景點間移動同休息',
    routeStyle: '早上美瑛，下午長途返千歲，唔再加札幌或登別',
    summary: '早上由 Wonderland 出發去美瑛，玩四季彩之丘、青池、白鬚瀑布。午餐後直接南返千歲/機場附近酒店。',
    newDriverNote: '今日係第二個長車日。午餐後唔好加景點，目標 17:30 前到千歲酒店，讓司機休息同預備還車。',
    routeStops: [
      { ...routeStops.furanoHotel, time: '08:00' },
      { ...routeStops.shikisai, driveFromPrevious: 'Wonderland 到四季彩之丘約 45-55 分鐘', distanceFromPrevious: '約 27km' },
      { ...routeStops.bluePond, driveFromPrevious: '四季彩之丘約 35-45 分鐘', distanceFromPrevious: '約 15km' },
      { ...routeStops.shirahige, driveFromPrevious: '青池約 5-10 分鐘', distanceFromPrevious: '約 3km' },
      { ...routeStops.bieiLunch, driveFromPrevious: '白鬚瀑布約 30-40 分鐘', distanceFromPrevious: '約 20km' },
      { ...routeStops.chitoseHotel, driveFromPrevious: '美瑛到千歲約 2.5-3.5 小時，建議中途停一次', distanceFromPrevious: '約 158km' },
    ],
    foodFocus: ['四季彩之丘 soft serve', 'Biei Senka 輕食', '便利店野餐', '千歲 / 機場附近晚餐'],
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
      { ...routeStops.chitoseSalmon, driveFromPrevious: '千歲酒店約 5-15 分鐘', distanceFromPrevious: '約 2km' },
      { ...routeStops.returnFuel, driveFromPrevious: '水族館到油站約 10-15 分鐘', distanceFromPrevious: '約 10km' },
      { ...routeStops.airport, time: '12:00', driveFromPrevious: '油站到租車公司約 10-20 分鐘', distanceFromPrevious: '約 4km' },
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
  '第一晚洞爺湖：16:30 攞車後先去白老食飯，再入住洞爺觀光酒店；抵達後不再駕車外出。',
  '導航：手機 Google Maps 加租車 GPS 雙保險。目的地優先輸入酒店停車場、景點停車場或道之驛，不要只輸入景點大名。',
  '路線：不入札幌市中心，不去登別，不去火山博物館。Day 2 洞爺湖到富良野、Day 4 美瑛返千歲係長車日，中途一定休息。',
  '7 月旺季：洞爺湖煙花、Lake Hill Farm、富田農場、薰衣草東部、青池停車場會多人，每日只放 2-3 個重點。所有官方營業時間出發前 3-7 日再覆核。',
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
    label: '洞爺觀光酒店',
    url: 'https://toya-colors.com/en/spot/toya-kanko-hotel',
  },
  {
    label: 'Lake Hill Farm',
    url: 'https://toya-colors.com/en/spot/lake-hill-farm',
  },
  {
    label: 'Wonderland Furano Maple',
    url: 'https://www.wonderlandfurano.com/maple-reservation/',
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
