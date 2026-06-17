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
  tomamuHotel: {
    id: 'tomamu-hotel',
    name: 'Tomamu 酒店',
    time: '18:30',
    area: 'Tomamu',
    lat: 43.0634,
    lng: 142.63,
    kind: 'hotel',
    note: '第一晚改住 Tomamu，方便第二朝 4:00 起身、5:00 坐雲海 Gondola。抵達後酒店晚餐，早睡最重要。',
    food: ['酒店晚餐', '便利店補水', '早睡預備雲海'],
  },
  unkaiGondola: {
    id: 'unkai-gondola',
    name: '雲海 Gondola / Unkai Terrace',
    time: '04:35',
    area: 'Tomamu',
    lat: 43.0649,
    lng: 142.6237,
    kind: 'sight',
    note: '官方 2026 期間 5/13-10/13；約 5:00 開始，約 13 分鐘上山。雲海係自然現象，官方季內平均出現率約 40%。',
    food: ['熱飲', '輕食', '保暖外套'],
  },
  tomamuBreakfast: {
    id: 'tomamu-breakfast',
    name: 'Tomamu 早餐 / 退房',
    time: '07:30',
    area: 'Tomamu',
    lat: 43.0634,
    lng: 142.63,
    kind: 'food',
    note: '睇完雲海後返酒店早餐同退房。司機如果瞓得少，呢日行程要保守。',
    food: ['酒店早餐', '咖啡', '車上小食'],
  },
  minamifuranoBreak: {
    id: 'minamifurano-break',
    name: '南富良野休息',
    time: '09:30',
    area: 'Minamifurano',
    lat: 43.1644,
    lng: 142.5687,
    kind: 'drive',
    note: 'Tomamu 去富良野途中短休，司機飲水伸展，小朋友去洗手間。唔舒服就直接去富良野市區。',
    food: ['便利店小食', '飲品補給', '簡單早餐加餐'],
  },
  yuniBreak: {
    id: 'yuni-break',
    name: '由仁 / 夕張休息',
    time: '14:45',
    area: 'Yuni / Yubari',
    lat: 42.986,
    lng: 141.363,
    kind: 'drive',
    note: '富良野返千歲途中一定停 20-30 分鐘。司機飲水、伸展，小朋友去洗手間。',
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
    title: '新千歲攞車，直入 Tomamu 早睡',
    base: '住 Tomamu',
    driveTotal: '約 1 小時 30 分至 2 小時，約 112km',
    routeStyle: '新千歲 → 道東自動車道 → Tomamu；唔入札幌市中心',
    summary: '16:30 喺新千歲攞車後，直接行高速入 Tomamu。第一晚重點唔係景點，而係安全抵達、食酒店晚餐、早睡，準備第二朝 4:00 起身睇雲海。',
    newDriverNote: '第一次外國自駕，第一晚只做一條高速主線。導航先設 Tomamu 酒店停車場，中途覺得攰就停 PA / SA，唔加白老、洞爺或札幌。',
    routeStops: [
      { ...routeStops.airport, time: '16:30' },
      { ...routeStops.tomamuHotel, driveFromPrevious: '新千歲到 Tomamu 約 1 小時 30 分至 2 小時', distanceFromPrevious: '約 112km' },
    ],
    foodFocus: ['機場先買水同小食', 'Tomamu 酒店晚餐', '便利店早餐補給', '早睡準備雲海'],
    backup: '如果取車或航班延誤，唔好加任何景點；直接入 Tomamu。晚餐太夜就改便利店 / 酒店輕食。',
  },
  {
    day: 2,
    date: '2026/7/14（二）',
    title: 'Tomamu 雲海，轉場去富良野花田',
    base: '住 Wonderland Furano Maple',
    driveTotal: '約 1 小時 45 分至 2 小時 30 分，景點間短途移動',
    routeStyle: 'Tomamu 雲海 → 南富良野休息 → Farm Tomita → Lavender East → 富良野住宿',
    summary: '4:00 起身，4:35 去雲海 Gondola 排隊，5:00 左右上 Unkai Terrace。返酒店早餐退房後，轉去富良野；只排富田農場、Lavender East 同市區補給，下午早啲入住休息。',
    newDriverNote: '呢日司機會早起，午餐後要降低強度。Ningle Terrace 改去 Day 3 晚上，Day 2 以花田 + 休息為主。',
    routeStops: [
      { ...routeStops.unkaiGondola, time: '04:35', driveFromPrevious: '酒店步行 / shuttle 到 Gondola 站', distanceFromPrevious: '約 0-1km' },
      { ...routeStops.tomamuBreakfast, driveFromPrevious: 'Gondola 落山後返酒店', distanceFromPrevious: '約 0-1km' },
      { ...routeStops.minamifuranoBreak, driveFromPrevious: 'Tomamu 到南富良野約 30-40 分鐘', distanceFromPrevious: '約 36km' },
      { ...routeStops.farmTomita, time: '10:45', driveFromPrevious: '南富良野到富田農場約 45-60 分鐘', distanceFromPrevious: '約 44km' },
      { ...routeStops.lavenderEast, time: '12:15', driveFromPrevious: 'Farm Tomita 約 10 分鐘', distanceFromPrevious: '約 6km' },
      { ...routeStops.furanoMarche, time: '13:15', driveFromPrevious: 'Lavender East 到富良野市中心約 15-25 分鐘', distanceFromPrevious: '約 13km' },
      { ...routeStops.furanoHotel, time: '15:30', driveFromPrevious: '富良野 Marche 到 Wonderland 約 5-10 分鐘', distanceFromPrevious: '約 2km' },
    ],
    foodFocus: ['雲海 Terrace 熱飲', 'Tomamu 酒店早餐', 'Farm Tomita 薰衣草雪糕', '富良野 Marche 午餐'],
    backup: '如雲海 Gondola 因天氣停駛，就 6:30 起身食早餐，8:30 出發去富良野；富田農場照早去，下午更早返酒店。',
  },
  {
    day: 3,
    date: '2026/7/15（三）',
    title: '美瑛重點遊，夜晚森林精靈陽台',
    base: '住 Wonderland Furano Maple',
    driveTotal: '約 2 小時至 2 小時 45 分',
    routeStyle: 'Wonderland → 四季彩之丘 → 青池 → 白鬚瀑布 → 返富良野 → 夜遊 Ningle',
    summary: 'Day 2 已睇花田，所以 Day 3 留畀美瑛。早上四季彩之丘、青池、白鬚瀑布，中午美瑛簡單食。下午返 Wonderland 休息，夜晚先去森林精靈陽台。',
    newDriverNote: '前一日 4 點起身，今日要預留午睡。夜晚 Ningle Terrace 係可取消項目，唔好為咗打卡勉強夜駕。',
    routeStops: [
      { ...routeStops.furanoHotel, time: '08:00' },
      { ...routeStops.shikisai, driveFromPrevious: 'Wonderland 到四季彩之丘約 45-55 分鐘', distanceFromPrevious: '約 27km' },
      { ...routeStops.bluePond, driveFromPrevious: '四季彩之丘約 35-45 分鐘', distanceFromPrevious: '約 15km' },
      { ...routeStops.shirahige, driveFromPrevious: '青池約 5-10 分鐘', distanceFromPrevious: '約 3km' },
      { ...routeStops.bieiLunch, driveFromPrevious: '白鬚瀑布約 30-40 分鐘', distanceFromPrevious: '約 20km' },
      { ...routeStops.furanoHotel, time: '15:30', driveFromPrevious: '美瑛午餐返 Wonderland 約 45-60 分鐘', distanceFromPrevious: '約 38km' },
      { ...routeStops.ningleTerrace, time: '19:00', driveFromPrevious: 'Wonderland 到森林精靈陽台約 10-15 分鐘', distanceFromPrevious: '約 5km' },
      { ...routeStops.furanoHotel, time: '20:30', driveFromPrevious: '森林精靈陽台返 Wonderland 約 10 分鐘', distanceFromPrevious: '約 4km' },
    ],
    foodFocus: ['四季彩之丘 soft serve', 'Biei Senka 輕食', '富良野晚餐', 'Ningle Terrace 咖啡'],
    backup: '如 Day 2 太攰，Day 3 只做四季彩之丘 + 青池，白鬚瀑布同 Ningle Terrace 二選一或取消。',
  },
  {
    day: 4,
    date: '2026/7/16（四）',
    title: '富良野慢早，下午返千歲 / 機場附近',
    base: '住千歲或機場附近',
    driveTotal: '約 2 小時 30 分至 3 小時 30 分，約 126-160km',
    routeStyle: '富良野市區輕鬆補給 → 由仁 / 夕張休息 → 千歲酒店',
    summary: '前兩日已經早起同跑美瑛，Day 4 改做慢早。上午富良野市區買手信或補拍，午餐後直接返千歲 / 機場附近酒店，為 Day 5 還車減壓。',
    newDriverNote: 'Lake Hill Farm 由 Tomamu / 富良野路線過去太繞，今版主線取消。今日重點係準時返近機場，唔入札幌市中心。',
    routeStops: [
      { ...routeStops.furanoHotel, time: '09:30' },
      { ...routeStops.furanoMarche, time: '10:00', driveFromPrevious: 'Wonderland 到富良野 Marche 約 5-10 分鐘', distanceFromPrevious: '約 2km' },
      { ...routeStops.yuniBreak, time: '14:45', driveFromPrevious: '富良野到由仁 / 夕張約 1 小時 45 分至 2 小時', distanceFromPrevious: '約 119km' },
      { ...routeStops.chitoseHotel, time: '16:30', driveFromPrevious: '由仁 / 夕張到千歲約 40-60 分鐘', distanceFromPrevious: '約 39km' },
    ],
    foodFocus: ['富良野 Marche 午餐', '富良野甜品 / 手信', '由仁 / 夕張休息小食', '千歲晚餐'],
    backup: '如 Day 3 因天氣取消美瑛，可 Day 4 早上只補四季彩之丘，之後直接返千歲；唔好再加青池同白鬚瀑布。',
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
  '第一晚 Tomamu：16:30 攞車後直入 Tomamu，酒店晚餐同早睡；第二朝 4:00 起身，4:35 去雲海 Gondola 排隊。',
  '導航：手機 Google Maps 加租車 GPS 雙保險。目的地優先輸入酒店停車場、景點停車場或道之驛，不要只輸入景點大名。',
  '路線：不入札幌市中心，不去登別，不去火山博物館。Tomamu 版本取消洞爺湖同 Lake Hill Farm 主線，避免大繞路。',
  '7 月旺季：Tomamu 雲海 Gondola、富田農場、薰衣草東部、青池停車場會多人，每日只放 2-3 個重點。所有官方營業時間出發前 3-7 日再覆核。',
  '雲海注意：雲海係自然現象，官方季內平均出現率約 40%。如果 Gondola 停駛或無雲海，直接轉成輕鬆早餐 + 早出發去富良野。',
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
    label: 'Hoshino Resorts TOMAMU 雲海 Terrace',
    url: 'https://www.snowtomamu.jp/summer/unkai/',
  },
  {
    label: 'Hoshino Resorts TOMAMU Green Season',
    url: 'https://www.snowtomamu.jp/en/',
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
