import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('public/day-posters/final');
fs.mkdirSync(outDir, { recursive: true });

const imageDataUri = (day) => {
  const file = path.resolve(`public/day-posters/day-${day}.jpg`);
  const base64 = fs.readFileSync(file).toString('base64');
  return `data:image/jpeg;base64,${base64}`;
};

const posterData = [
  {
    day: 1,
    date: '2026/7/13（一）',
    title: '新千歲 → 白老 → 洞爺湖',
    titleLines: ['新千歲 → 白老', '→ 洞爺湖'],
    subtitle: '白老晚餐 × 洞爺觀光酒店 × 湖畔煙花',
    base: '住：洞爺觀光酒店',
    theme: ['#ff9eb3', '#8ed6d1', '#fff6e8'],
    route: [
      ['16:30', '新千歲機場攞車', 'START'],
      ['17:35', '白老晚餐', '約45-60分 · 46km'],
      ['19:15', '洞爺觀光酒店', '約1h10-1h30 · 79km'],
      ['20:45', '洞爺湖煙花', '步行 · 0.5km'],
    ],
    spots: ['白老牛 / 海鮮丼', '洞爺觀光酒店溫泉', '20:45 洞爺湖煙花'],
    foods: ['白老牛', '白老海鮮丼', '便利店早餐補給'],
    tips: ['第一晚較夜到，白老食飯唔好拖太耐', '泊好車後唔再外出駕車', '煙花視天氣同小朋友精神決定'],
    bubble: '先食飯再入洞爺，今晚以安全同休息為先。',
  },
  {
    day: 2,
    date: '2026/7/14（二）',
    title: '洞爺湖 → Lake Hill Farm → 富良野',
    titleLines: ['洞爺湖 → Lake Hill Farm', '→ 富良野'],
    subtitle: '湖畔早餐 × Gelato × 長途轉場',
    base: '住：Wonderland Furano Maple',
    theme: ['#ffb36d', '#75c6b7', '#fff8e9'],
    route: [
      ['08:45', '洞爺觀光酒店出發', 'START'],
      ['09:45', 'Lake Hill Farm', '約20分 · 16km'],
      ['13:20', '由仁 / 夕張休息', '約1h20 · 84km'],
      ['15:30', '富良野 Marche', '約1h45-2h · 119km'],
      ['16:45', 'Wonderland Maple', '約10分 · 3km'],
    ],
    spots: ['Lake Hill Farm', '富良野 Marche', 'Wonderland Maple'],
    foods: ['Farm gelato', '便利店午餐', '富良野晚餐'],
    tips: ['火山博物館取消', 'Lake Hill Farm 停45-60分鐘就好', '今日係長車日，中途必休息'],
    bubble: '今日重點係轉場，唔好塞太多景點。',
  },
  {
    day: 3,
    date: '2026/7/15（三）',
    title: '富良野花田一日',
    titleLines: ['富良野花田一日'],
    subtitle: '富田農場 × 薰衣草東部 × 森林精靈陽台',
    base: '住：Wonderland Furano Maple',
    theme: ['#c69af2', '#79c7a3', '#fff7f3'],
    route: [
      ['08:00', 'Wonderland 出發', 'START'],
      ['08:45', '富田農場', '約20-30分 · 11km'],
      ['10:35', 'Lavender East', '約10-15分 · 6km'],
      ['12:15', '富良野 Marche', '約25-35分 · 13km'],
      ['19:00', '森林精靈陽台', '約10-15分 · 5km'],
      ['20:30', '返 Wonderland', '約10分 · 4km'],
    ],
    spots: ['富田農場', '薰衣草東部', '森林精靈陽台（夜）'],
    foods: ['薰衣草雪糕', '富良野 Marche', '富良野咖喱 / 蛋包飯'],
    tips: ['7月中花田旺季，越早到越好', '只用正式停車場', '夜遊森林精靈陽台，攰就取消'],
    bubble: '薰衣草同夜晚森林小屋係今日主角。',
  },
  {
    day: 4,
    date: '2026/7/16（四）',
    title: '美瑛 → 千歲 / 機場附近',
    titleLines: ['美瑛 → 千歲', '/ 機場附近'],
    subtitle: '四季彩之丘 × 青池 × 白鬚瀑布',
    base: '住：新千歲機場附近',
    theme: ['#7dbcf2', '#8bd28b', '#fff9ee'],
    route: [
      ['08:00', 'Wonderland 出發', 'START'],
      ['08:45', '四季彩之丘', '約45-55分 · 27km'],
      ['10:55', '白金青池', '約35-45分 · 15km'],
      ['11:40', '白鬚瀑布', '約5-10分 · 3km'],
      ['13:00', '美瑛午餐', '約30-40分 · 20km'],
      ['17:30', '千歲酒店', '約2.5-3.5h · 158km'],
    ],
    spots: ['四季彩之丘', '白金青池', '白鬚瀑布'],
    foods: ['花田雪糕', 'Biei Senka', '千歲晚餐'],
    tips: ['午餐後直接南返千歲', '唔再加札幌或登別', '13:30前最好開始返程'],
    bubble: '美瑛影相日，下午要果斷返機場附近。',
  },
  {
    day: 5,
    date: '2026/7/17（五）',
    title: '千歲輕鬆半日，13:00 還車',
    titleLines: ['千歲輕鬆半日', '13:00 還車'],
    subtitle: '鮭魚水族館 × 加油 × 機場午餐',
    base: '還車日',
    theme: ['#78c7d8', '#f4b36b', '#fff8ef'],
    route: [
      ['09:00', '酒店出發', 'START'],
      ['09:30', '千歲鮭魚水族館', '約5-15分 · 2km'],
      ['11:20', '機場附近油站', '約10-15分 · 10km'],
      ['12:00', '租車公司還車', '約10-20分 · 4km'],
      ['12:45', '新千歲機場午餐', '步行'],
    ],
    spots: ['千歲鮭魚水族館', '機場附近油站', '新千歲機場'],
    foods: ['酒店早餐', '機場拉麵 / 海鮮丼', 'Royce / LeTAO 手信'],
    tips: ['12:00前到租車公司最安心', '時間緊就跳過水族館', '加油收據同車身相放同一袋'],
    bubble: '最後半日唔貪心，還車優先。',
  },
];

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const textLines = (items, x, y, options = {}) => {
  const {
    gap = 42,
    size = 28,
    fill = '#22383d',
    weight = 800,
    prefix = '',
    max = items.length,
  } = options;
  return items.slice(0, max).map((item, index) => {
    const safe = escapeXml(`${prefix}${item}`);
    return `<text x="${x}" y="${y + index * gap}" font-size="${size}" font-weight="${weight}" fill="${fill}">${safe}</text>`;
  }).join('\n');
};

const routeRows = (route) => route.map(([time, place, drive], index) => {
  const y = 365 + index * 95;
  const isLast = index === route.length - 1;
  return `
    ${!isLast ? `<line x1="816" y1="${y + 35}" x2="816" y2="${y + 86}" stroke="#7bbfc3" stroke-width="6" stroke-dasharray="10 10" stroke-linecap="round"/>` : ''}
    <circle cx="816" cy="${y}" r="27" fill="#0e8a95"/>
    <text x="816" y="${y + 9}" text-anchor="middle" font-size="24" font-weight="900" fill="#fff">${index + 1}</text>
    <text x="858" y="${y - 8}" font-size="24" font-weight="900" fill="#183238">${escapeXml(place)}</text>
    <text x="858" y="${y + 24}" font-size="22" font-weight="900" fill="#f06f66">${escapeXml(time)}</text>
    ${drive !== 'START' ? `<text x="858" y="${y + 55}" font-size="19" font-weight="800" fill="#597076">${escapeXml(drive)}</text>` : ''}
  `;
}).join('\n');

const heroScene = (data) => {
  const [accent, green] = data.theme;
  const common = `
    <g clip-path="url(#hero-${data.day})">
      <rect x="42" y="300" width="690" height="420" fill="#fffaf0"/>
      <circle cx="660" cy="350" r="58" fill="#ffe58a" opacity="0.9"/>
      <path d="M40 464 C160 350 252 382 354 452 C468 342 590 370 734 456 L734 720 L42 720 Z" fill="#bfe2d8"/>
      <path d="M42 500 C180 420 286 430 388 510 C506 420 604 432 734 492 L734 720 L42 720 Z" fill="${green}" opacity="0.58"/>
    </g>
  `;

  if (data.day === 1) {
    return `${common}
      <g clip-path="url(#hero-${data.day})">
        <ellipse cx="395" cy="616" rx="360" ry="94" fill="#73c8e9" opacity="0.82"/>
        <path d="M158 646 C286 590 420 600 596 654" fill="none" stroke="#fff" stroke-width="10" opacity="0.72"/>
        <path d="M110 718 C220 632 345 620 468 718" fill="none" stroke="#616bd6" stroke-width="16" stroke-linecap="round" stroke-dasharray="18 18"/>
        <rect x="142" y="626" width="118" height="62" rx="22" fill="${accent}" stroke="#27333a" stroke-width="4"/>
        <circle cx="172" cy="690" r="16" fill="#27333a"/><circle cx="232" cy="690" r="16" fill="#27333a"/>
        <path d="M468 430 l16 -42 l18 42 l42 -18 l-24 38 l36 24 l-44 4 l-8 44 l-26 -36 l-42 14 l26 -36 l-30 -34 Z" fill="#ffd563" opacity="0.92"/>
        <text x="520" y="648" font-size="28" font-weight="900" fill="#0e5962">洞爺湖畔</text>
      </g>`;
  }

  if (data.day === 2) {
    return `${common}
      <g clip-path="url(#hero-${data.day})">
        <path d="M86 666 C196 560 320 540 438 642 C526 548 624 548 734 626" fill="none" stroke="#5f6bd8" stroke-width="18" stroke-linecap="round" stroke-dasharray="22 18"/>
        <rect x="348" y="598" width="118" height="60" rx="20" fill="#6fb5ff" stroke="#27333a" stroke-width="4"/>
        <circle cx="378" cy="660" r="15" fill="#27333a"/><circle cx="438" cy="660" r="15" fill="#27333a"/>
        <path d="M118 542 C160 476 226 472 260 542 Z" fill="#fff" stroke="#915c2c" stroke-width="5"/>
        <path d="M162 542 l34 112 l34 -112 Z" fill="#e8b56a" stroke="#915c2c" stroke-width="4"/>
        <circle cx="196" cy="520" r="34" fill="#f6c174"/>
        <text x="502" y="632" font-size="28" font-weight="900" fill="#0e5962">Lake Hill Farm</text>
      </g>`;
  }

  if (data.day === 3) {
    return `${common}
      <g clip-path="url(#hero-${data.day})">
        ${Array.from({ length: 7 }, (_, i) => `<path d="M${64 + i * 94} 720 C${112 + i * 92} 610 ${132 + i * 78} 545 ${186 + i * 86} 462" fill="none" stroke="${i % 2 ? '#8e69d6' : '#b778e9'}" stroke-width="22" stroke-linecap="round" opacity="0.86"/>`).join('')}
        <path d="M82 430 h148 v88 h-148 Z" fill="#fff4d9" stroke="#6c4f38" stroke-width="5"/>
        <path d="M70 430 l86 -70 l86 70 Z" fill="#7a4a37" stroke="#6c4f38" stroke-width="5"/>
        <path d="M506 532 h108 v72 h-108 Z" fill="#714e3e" stroke="#fff" stroke-width="5"/>
        <path d="M492 532 l68 -58 l68 58 Z" fill="#3f6e56" stroke="#fff" stroke-width="5"/>
        <circle cx="600" cy="424" r="38" fill="#ffeaa0" opacity="0.9"/>
        <text x="284" y="430" font-size="30" font-weight="900" fill="#6d3faa">Lavender Day</text>
      </g>`;
  }

  if (data.day === 4) {
    return `${common}
      <g clip-path="url(#hero-${data.day})">
        <path d="M42 590 L734 470 L734 720 L42 720 Z" fill="#f3d96a" opacity="0.82"/>
        <path d="M42 654 L734 528 L734 720 L42 720 Z" fill="#db77ac" opacity="0.75"/>
        <path d="M42 710 L734 604 L734 720 L42 720 Z" fill="#84d177" opacity="0.82"/>
        <ellipse cx="512" cy="518" rx="126" ry="54" fill="#68c8ed" opacity="0.9"/>
        <path d="M610 400 C592 482 638 526 594 600" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="round"/>
        <path d="M610 400 C592 482 638 526 594 600" fill="none" stroke="#73c8e9" stroke-width="8" stroke-linecap="round"/>
        <text x="112" y="438" font-size="30" font-weight="900" fill="#0e5962">美瑛花田 + 青池</text>
      </g>`;
  }

  return `${common}
    <g clip-path="url(#hero-${data.day})">
      <rect x="82" y="472" width="410" height="126" rx="20" fill="#e8eef2" stroke="#24333a" stroke-width="5"/>
      <rect x="124" y="420" width="324" height="60" rx="12" fill="#fff" stroke="#24333a" stroke-width="5"/>
      <text x="286" y="462" text-anchor="middle" font-size="30" font-weight="900" fill="#0e5962">CTS AIRPORT</text>
      <path d="M530 548 C590 500 640 502 684 552 C634 596 584 596 530 548 Z" fill="#7cc8df" stroke="#24333a" stroke-width="5"/>
      <circle cx="594" cy="548" r="10" fill="#f06f66"/>
      <rect x="158" y="624" width="126" height="58" rx="18" fill="${accent}" stroke="#27333a" stroke-width="4"/>
      <circle cx="190" cy="686" r="14" fill="#27333a"/><circle cx="252" cy="686" r="14" fill="#27333a"/>
      <text x="344" y="654" font-size="28" font-weight="900" fill="#0e5962">13:00 還車</text>
    </g>`;
};

const miniScene = (day, index, x, y, accent, green) => {
  const sky = `<rect x="${x}" y="${y}" width="286" height="205" rx="22" fill="#dff5ff"/>`;
  const hill = `<path d="M${x} ${y + 126} C${x + 82} ${y + 54} ${x + 164} ${y + 90} ${x + 286} ${y + 52} L${x + 286} ${y + 205} L${x} ${y + 205} Z" fill="${green}" opacity="0.76"/>`;
  if (day === 1 && index === 0) {
    return `${sky}${hill}<rect x="${x + 70}" y="${y + 72}" width="126" height="78" rx="16" fill="#ffd89a" stroke="#70492e" stroke-width="5"/><text x="${x + 132}" y="${y + 122}" text-anchor="middle" font-size="26" font-weight="900" fill="#70492e">白老牛</text>`;
  }
  if (day === 1) {
    return `${sky}<ellipse cx="${x + 152}" cy="${y + 132}" rx="150" ry="54" fill="#75c7ea"/>${hill}<circle cx="${x + 222}" cy="${y + 58}" r="28" fill="#ffd563"/>`;
  }
  if (day === 2 && index === 0) {
    return `${sky}${hill}<path d="M${x + 88} ${y + 68} C${x + 124} ${y + 20} ${x + 178} ${y + 28} ${x + 202} ${y + 72}" fill="#fff" stroke="#8a5c35" stroke-width="5"/><path d="M${x + 122} ${y + 78} l32 ${y + 92 - y} l32 -92 Z" fill="#e7aa58" stroke="#8a5c35" stroke-width="5"/>`;
  }
  if (day === 3) {
    return `${sky}${Array.from({ length: 5 }, (_, i) => `<path d="M${x + i * 70} ${y + 205} C${x + 44 + i * 48} ${y + 142} ${x + 62 + i * 36} ${y + 90} ${x + 112 + i * 38} ${y + 44}" fill="none" stroke="${i % 2 ? '#9c6de1' : '#c57dea'}" stroke-width="16" opacity="0.9"/>`).join('')}<circle cx="${x + 230}" cy="${y + 48}" r="26" fill="#ffe48c"/>`;
  }
  if (day === 4) {
    return `${sky}<path d="M${x} ${y + 106} L${x + 286} ${y + 58} L${x + 286} ${y + 205} L${x} ${y + 205} Z" fill="#f1d86d"/><path d="M${x} ${y + 150} L${x + 286} ${y + 92} L${x + 286} ${y + 205} L${x} ${y + 205} Z" fill="${accent}" opacity="0.72"/><ellipse cx="${x + 166}" cy="${y + 84}" rx="82" ry="34" fill="#6dc7ec"/>`;
  }
  return `${sky}${hill}<rect x="${x + 72}" y="${y + 78}" width="142" height="70" rx="14" fill="#fff" stroke="#2b3a40" stroke-width="5"/><text x="${x + 143}" y="${y + 122}" text-anchor="middle" font-size="25" font-weight="900" fill="#0e5962">AIRPORT</text>`;
};

const spotCards = (spots, day, accent, green) => spots.map((spot, index) => {
  const x = 52 + index * 320;
  const y = 1040;
  const cropY = 60 + index * 320;
  return `
    <clipPath id="spot-${day}-${index}"><rect x="${x}" y="${y}" width="286" height="205" rx="22"/></clipPath>
    <image href="${imageDataUri(day)}" x="${x}" y="${y - cropY}" width="286" height="430" preserveAspectRatio="xMidYMid slice" clip-path="url(#spot-${day}-${index})"/>
    <g clip-path="url(#spot-${day}-${index})" opacity="0.9">${miniScene(day, index, x, y, accent, green)}</g>
    <rect x="${x}" y="${y}" width="286" height="205" rx="22" fill="none" stroke="#fff" stroke-width="8"/>
    <rect x="${x}" y="${y + 135}" width="286" height="70" rx="0" fill="rgba(21,43,50,0.68)"/>
    <circle cx="${x + 36}" cy="${y + 36}" r="28" fill="#0e8a95"/>
    <text x="${x + 36}" y="${y + 45}" text-anchor="middle" font-size="24" font-weight="900" fill="#fff">${index + 1}</text>
    <text x="${x + 18}" y="${y + 180}" font-size="26" font-weight="900" fill="#fff">${escapeXml(spot)}</text>
  `;
}).join('\n');

const posterSvg = (data) => {
  const [accent, green, paper] = data.theme;
  const art = imageDataUri(data.day);
  const titleLines = data.titleLines ?? [data.title];
  const titleSvg = titleLines.map((line, index) =>
    `<text x="58" y="${index === 0 ? 164 : 222}" font-size="56" font-weight="900" fill="#172f36">${escapeXml(line)}</text>`
  ).join('\n');
  const subtitleY = titleLines.length > 1 ? 268 : 214;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1600" viewBox="0 0 1080 1600">
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#23343a" flood-opacity="0.18"/>
    </filter>
    <clipPath id="hero-${data.day}"><rect x="42" y="300" width="690" height="420" rx="32"/></clipPath>
  </defs>
  <rect width="1080" height="1600" fill="${paper}"/>
  <image href="${art}" x="0" y="0" width="1080" height="1600" preserveAspectRatio="xMidYMid slice" opacity="0.23"/>
  <rect x="24" y="24" width="1032" height="1552" rx="34" fill="rgba(255,255,255,0.72)" stroke="${accent}" stroke-width="4" stroke-dasharray="14 12"/>
  <path d="M64 78 C190 28 348 42 460 78 C570 116 760 54 990 80" fill="none" stroke="${green}" stroke-width="10" stroke-linecap="round" opacity="0.5"/>
  <rect x="56" y="62" width="185" height="58" rx="29" fill="${accent}"/>
  <text x="148" y="101" text-anchor="middle" font-size="28" font-weight="900" fill="#fff">北海道親子自駕</text>
  ${titleSvg}
  <text x="62" y="${subtitleY}" font-size="28" font-weight="900" fill="#f06f66">${escapeXml(data.subtitle)}</text>
  <rect x="780" y="72" width="244" height="118" rx="30" fill="#fff" stroke="#333" stroke-width="3"/>
  <text x="902" y="118" text-anchor="middle" font-size="28" font-weight="900" fill="#172f36">Day ${data.day}</text>
  <text x="902" y="156" text-anchor="middle" font-size="25" font-weight="900" fill="#172f36">${escapeXml(data.date)}</text>

  <image href="${art}" x="42" y="160" width="690" height="650" preserveAspectRatio="xMidYMid slice" clip-path="url(#hero-${data.day})" opacity="0.2"/>
  ${heroScene(data)}
  <rect x="42" y="300" width="690" height="420" rx="32" fill="none" stroke="#fff" stroke-width="10"/>
  <rect x="68" y="596" width="638" height="100" rx="24" fill="rgba(255,255,255,0.88)" filter="url(#shadow)"/>
  <text x="94" y="638" font-size="28" font-weight="900" fill="#0e8a95">${escapeXml(data.base)}</text>
  <text x="94" y="674" font-size="26" font-weight="900" fill="#f06f66">${escapeXml(data.bubble)}</text>

  <g filter="url(#shadow)">
    <rect x="762" y="236" width="278" height="700" rx="30" fill="rgba(255,255,255,0.9)" stroke="#b9e1e3" stroke-width="4"/>
    <rect x="792" y="268" width="128" height="44" rx="22" fill="#f06f66"/>
    <text x="856" y="299" text-anchor="middle" font-size="24" font-weight="900" fill="#fff">自駕路線</text>
    ${routeRows(data.route)}
  </g>

  <rect x="58" y="750" width="674" height="214" rx="28" fill="rgba(255,255,255,0.9)" filter="url(#shadow)"/>
  <text x="88" y="802" font-size="32" font-weight="900" fill="#172f36">今日重點</text>
  ${textLines(data.spots, 92, 850, { gap: 38, size: 28, fill: '#0e5962', prefix: '★ ' })}
  <text x="88" y="954" font-size="24" font-weight="900" fill="#f06f66">每段行車時間同公里數：請睇右側路線表</text>

  <text x="58" y="1015" font-size="34" font-weight="900" fill="#172f36">沿路景點</text>
  ${spotCards(data.spots, data.day, accent, green)}

  <g filter="url(#shadow)">
    <rect x="54" y="1290" width="972" height="122" rx="30" fill="rgba(255,255,255,0.9)"/>
    <rect x="78" y="1316" width="154" height="70" rx="22" fill="${green}"/>
    <text x="155" y="1360" text-anchor="middle" font-size="28" font-weight="900" fill="#fff">必吃美食</text>
    ${data.foods.map((food, index) => `<text x="${270 + index * 250}" y="1360" font-size="25" font-weight="900" fill="#f06f66">${index + 1}. ${escapeXml(food)}</text>`).join('\n')}
  </g>

  <g filter="url(#shadow)">
    <rect x="54" y="1440" width="972" height="106" rx="28" fill="rgba(255,255,255,0.92)" stroke="#b9e1e3" stroke-width="4" stroke-dasharray="12 10"/>
    <rect x="78" y="1468" width="142" height="48" rx="24" fill="#0e8a95"/>
    <text x="149" y="1500" text-anchor="middle" font-size="24" font-weight="900" fill="#fff">小提醒</text>
    ${textLines(data.tips, 250, 1482, { gap: 30, size: 23, fill: '#172f36', prefix: '✓ ', max: 3 })}
  </g>
</svg>`;
};

for (const data of posterData) {
  fs.writeFileSync(path.join(outDir, `day-${data.day}.svg`), posterSvg(data));
}

console.log(`Generated ${posterData.length} final poster SVG files in ${outDir}`);
