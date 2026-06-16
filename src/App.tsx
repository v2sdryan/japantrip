import {
  Baby,
  CalendarDays,
  Car,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ExternalLink,
  Fuel,
  Hotel,
  MapPin,
  Navigation,
  ShieldCheck,
  Soup,
  TreePine,
} from 'lucide-react';
import { divIcon } from 'leaflet';
import { useMemo, useState } from 'react';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { days, getGoogleDirectionsUrl, safetyNotes, sources, type DayPlan, type Stop, type StopKind } from './data';

const dayVisualSuggestions: Record<number, { focus: string; tip: string; bubble: string }> = {
  1: {
    focus: '洞爺湖湖畔酒店、溫泉晚餐、20:45 煙花',
    tip: '第一程較長，泊好車後唔再外出駕車。',
    bubble: '攞車後直去酒店，今晚以安全同休息為先。',
  },
  2: {
    focus: '洞爺湖遊客中心、有珠山 Ropeway、富良野補給',
    tip: '全程最長轉場日，Ropeway 可因天氣或疲勞取消。',
    bubble: '上午火山景點，下午長途轉場去富良野。',
  },
  3: {
    focus: 'Farm Tomita、Lavender East、芝士工房、Ningle Terrace',
    tip: '7 月薰衣草旺季，要早出發同只用正式停車場。',
    bubble: '薰衣草、芝士、森林木屋係今日主角。',
  },
  4: {
    focus: '四季彩之丘、青池、白鬚瀑布、返千歲',
    tip: '午餐後直接南返千歲，唔再加景點。',
    bubble: '美瑛影相日，黃昏返近機場減壓。',
  },
  5: {
    focus: '鮭魚水族館、加油、12:00 前到租車公司',
    tip: '時間緊就跳過水族館，還車優先。',
    bubble: '最後半日輕鬆玩，還車一定行先。',
  },
};

const kindIcon: Record<StopKind, typeof MapPin> = {
  airport: Navigation,
  hotel: Hotel,
  drive: Car,
  sight: TreePine,
  food: Soup,
  onsen: ShieldCheck,
  kids: Baby,
};

const kindLabel: Record<StopKind, string> = {
  airport: '機場',
  hotel: '住宿',
  drive: '休息',
  sight: '景點',
  food: '食',
  onsen: '溫泉',
  kids: '親子',
};

const getPosterStops = (day: DayPlan) =>
  day.routeStops.filter((stop) => stop.kind !== 'drive' && stop.kind !== 'hotel').slice(0, 5);

const getPosterHighlights = (day: DayPlan) => {
  const highlights = day.routeStops.filter((stop) => ['sight', 'kids', 'onsen', 'food'].includes(stop.kind));
  return highlights.length >= 3 ? highlights.slice(0, 3) : day.routeStops.slice(0, 3);
};

const getRouteLeg = (stop: Stop) => {
  if (!stop.driveFromPrevious) {
    return '';
  }
  const timeMatch = stop.driveFromPrevious.match(/約\s*([^，]+?)(?:，|$)/);
  const compactTime = timeMatch?.[1] ?? (stop.driveFromPrevious.includes('步行') ? '步行' : stop.driveFromPrevious);
  return stop.distanceFromPrevious ? `${compactTime} · ${stop.distanceFromPrevious}` : compactTime;
};

function App() {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [activeStop, setActiveStop] = useState<Stop | null>(selectedDay.routeStops[0]);

  const onSelectDay = (day: DayPlan) => {
    setSelectedDay(day);
    setActiveStop(day.routeStops[0]);
  };

  return (
    <main>
      <Hero selectedDay={selectedDay} onSelectDay={onSelectDay} />
      <section className="route-panel" id="plan">
        <div className="route-copy">
          <SectionTitle
            title="五日四夜自駕節奏"
            text="按你第一次外國自駕、香港一年駕駛經驗、2 大 2 小朋友同兩件細行李設計。第一晚住洞爺湖，之後富良野住 2 晚，最後一晚返千歲，重點係避開札幌市中心、少搬酒店、每日留足休息時間。"
          />
          <DayTabs selectedDay={selectedDay} onSelectDay={onSelectDay} />
          <DayDetail day={selectedDay} onStopFocus={setActiveStop} />
        </div>
        <aside className="map-column" aria-label="北海道行程地圖">
          <TripMap day={selectedDay} activeStop={activeStop} />
          <a className="map-link" href={getGoogleDirectionsUrl(selectedDay.routeStops)} target="_blank" rel="noreferrer">
            <Navigation size={18} />
            用 Google Maps 開 Day {selectedDay.day} 路線
            <ExternalLink size={16} />
          </a>
        </aside>
      </section>

      <section className="section-grid" id="posters">
        <SectionTitle
          title="每日圖像建議"
          text="參考你提供嘅可愛手帳路線圖風格生成，每日一張完整 poster；日期、景點、美食同自駕提醒已直接放入圖入面。"
        />
        <div className="poster-grid">
          {days.map((day) => {
            const suggestion = dayVisualSuggestions[day.day];
            const posterStops = getPosterStops(day);
            const highlights = getPosterHighlights(day);
            return (
              <article className="poster-card" key={day.day}>
                <div className="poster-sheet" aria-label={`Day ${day.day} ${day.title} 圖文版行程建議`}>
                  <img className="poster-art" src={`/day-posters/day-${day.day}.jpg`} alt="" aria-hidden="true" />
                  <div className="poster-hero">
                    <img src={`/day-posters/day-${day.day}.jpg`} alt="" aria-hidden="true" />
                    <div className="poster-title">
                      <span>Day {day.day} · {day.date}</span>
                      <h3>{day.title}</h3>
                      <p>{day.base}</p>
                    </div>
                    <p className="poster-bubble">{suggestion.bubble}</p>
                  </div>

                  <div className="poster-map" aria-label="當日迷你路線">
                    <div className="poster-map-head">
                      <span>自駕路線</span>
                      <b>{day.driveTotal}</b>
                    </div>
                    <ol>
                      {posterStops.map((stop, index) => (
                        <li key={`${stop.id}-${index}`}>
                          <span className="poster-pin">{index + 1}</span>
                          <div>
                            {index > 0 && <small>{getRouteLeg(stop)}</small>}
                            <strong>{stop.name}</strong>
                            <em>{stop.time}</em>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="poster-highlight-strip" aria-label="沿路推薦景點">
                    {highlights.map((stop, index) => {
                      const Icon = kindIcon[stop.kind];
                      return (
                        <div className="poster-highlight" key={`${stop.id}-${index}`}>
                          <img src={`/day-posters/day-${day.day}.jpg`} alt="" aria-hidden="true" />
                          <span>{index + 1}</span>
                          <Icon size={15} />
                          <strong>{stop.name}</strong>
                        </div>
                      );
                    })}
                  </div>

                  <div className="poster-food-strip" aria-label="必吃美食">
                    <b>必吃美食</b>
                    {day.foodFocus.slice(0, 3).map((food, index) => (
                      <span key={food}>
                        <Soup size={15} />
                        {index + 1}. {food}
                      </span>
                    ))}
                  </div>

                  <div className="poster-footer-note">
                    <span>自駕提醒</span>
                    <p>{suggestion.tip}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-grid" id="food">
        <SectionTitle title="食物建議" text="每一日都有 plan A 同容易泊車/排隊少嘅 fallback，避免小朋友餓住等位。" />
        <div className="food-board">
          {days.map((day) => (
            <article className="food-card" key={day.day}>
              <span>Day {day.day}</span>
              <h3>{day.date} · {day.base}</h3>
              <ul>
                {day.foodFocus.map((food) => (
                  <li key={food}>
                    <Soup size={16} />
                    {food}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="driver">
        <SectionTitle title="新手海外自駕設定" text="行程已改成 7/13 第一晚住洞爺湖：不入札幌市中心，不去登別。以下係出車前同每日要守嘅簡單規則。" />
        <div className="safety-list">
          {safetyNotes.map((note) => (
            <div className="safety-row" key={note}>
              <CheckCircle2 size={19} />
              <p>{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-grid sources" id="sources">
        <SectionTitle title="資料來源" text="營業時間、停車同道路 pass 出發前要再覆核一次，特別係洞爺湖煙花同 7 月富良野薰衣草旺季。" />
        <div className="source-links">
          {sources.map((source) => (
            <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
              {source.label}
              <ExternalLink size={15} />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function Hero({ selectedDay, onSelectDay }: { selectedDay: DayPlan; onSelectDay: (day: DayPlan) => void }) {
  return (
    <section className="hero">
      <img src="/hokkaido-spring-roadtrip.png" alt="北海道夏季自駕路線，遠方有雪山同綠色田野" />
      <div className="hero-shade" />
      <header className="topbar">
        <a href="#plan" className="brand" aria-label="Japantrip 首頁">
          <MapPin size={24} />
          japantrip
        </a>
        <nav aria-label="頁面導覽">
          <a href="#plan">行程</a>
          <a href="#posters">圖像</a>
          <a href="#food">食物</a>
          <a href="#driver">自駕</a>
          <a href="#sources">來源</a>
        </nav>
      </header>
      <div className="hero-content">
        <div>
          <h1>7 月北海道 4 夜親子自駕</h1>
          <p>
            2026/7/13-17，16:30 新千歲攞車，最後日 13:00 新千歲還車。第一晚住洞爺湖，之後去富良野、美瑛同千歲；不入札幌市中心，唔去登別。
          </p>
          <div className="hero-actions">
            <a href="#plan">
              <CalendarDays size={18} />
              睇每日行程
            </a>
            <a href={getGoogleDirectionsUrl(selectedDay.routeStops)} target="_blank" rel="noreferrer">
              <Navigation size={18} />
              開今日路線
            </a>
          </div>
        </div>
        <div className="hero-card">
          <span>建議車款</span>
          <strong>Compact SUV / Sienta / Freed</strong>
          <p>2 大 2 小朋友 + 兩件細行李，唔建議租太細車。6 歲小朋友一定預約 child seat / booster；9 歲按身高建議 booster。</p>
          <div className="mini-stats">
            <div>
              <Clock3 size={16} />
              <b>最長日</b>
              <small>約 4.5-5.25 小時含休息</small>
            </div>
            <div>
              <Fuel size={16} />
              <b>還車日</b>
              <small>12:00 到租車公司</small>
            </div>
          </div>
        </div>
      </div>
      <div className="day-ribbon" aria-label="快速選擇日期">
        {days.map((day) => (
          <button className={day.day === selectedDay.day ? 'active' : ''} key={day.day} type="button" onClick={() => onSelectDay(day)}>
            <span>D{day.day}</span>
            {day.title}
          </button>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ title, text }: { title: string; text: string }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function DayTabs({ selectedDay, onSelectDay }: { selectedDay: DayPlan; onSelectDay: (day: DayPlan) => void }) {
  return (
    <div className="day-tabs" aria-label="選擇每日行程">
      {days.map((day) => (
        <button className={selectedDay.day === day.day ? 'active' : ''} key={day.day} type="button" onClick={() => onSelectDay(day)}>
          <span>Day {day.day}</span>
          <b>{day.date}</b>
        </button>
      ))}
    </div>
  );
}

function DayDetail({ day, onStopFocus }: { day: DayPlan; onStopFocus: (stop: Stop) => void }) {
  return (
    <article className="day-detail">
      <div className="day-head">
        <div>
          <span>{day.date} · {day.base}</span>
          <h2>{day.title}</h2>
          <p>{day.summary}</p>
        </div>
        <div className="drive-box">
          <Car size={20} />
          <b>{day.driveTotal}</b>
          <small>{day.routeStyle}</small>
        </div>
      </div>

      <div className="driver-note">
        <ShieldCheck size={19} />
        <p>{day.newDriverNote}</p>
      </div>

      <div className="timeline">
        {day.routeStops.map((stop) => {
          const Icon = kindIcon[stop.kind];
          return (
            <button className="stop-row" key={`${day.day}-${stop.id}-${stop.time}`} type="button" onClick={() => onStopFocus(stop)}>
              <time>{stop.time}</time>
              <div className="stop-dot">
                <Icon size={16} />
              </div>
              <div className="stop-content">
                <div className="stop-title">
                  <span>{kindLabel[stop.kind]}</span>
                  <h3>{stop.name}</h3>
                  <ChevronRight size={17} />
                </div>
                <p>{stop.note}</p>
                {stop.driveFromPrevious && (
                  <small>
                    <Car size={14} />
                    {stop.driveFromPrevious}
                    {stop.distanceFromPrevious ? ` · ${stop.distanceFromPrevious}` : ''}
                  </small>
                )}
                {stop.food && (
                  <div className="stop-foods">
                    {stop.food.map((food) => (
                      <span key={food}>{food}</span>
                    ))}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="backup">
        <b>雨天 / 塞車 fallback</b>
        <p>{day.backup}</p>
      </div>
    </article>
  );
}

function TripMap({ day, activeStop }: { day: DayPlan; activeStop: Stop | null }) {
  const positions = day.routeStops.map((stop) => [stop.lat, stop.lng] as [number, number]);
  const center = useMemo(() => {
    const latitude = positions.reduce((sum, item) => sum + item[0], 0) / positions.length;
    const longitude = positions.reduce((sum, item) => sum + item[1], 0) / positions.length;
    return [latitude, longitude] as [number, number];
  }, [positions]);

  return (
    <div className="map-wrap">
      <div className="map-head">
        <div>
          <span>互動地圖</span>
          <h3>Day {day.day} route</h3>
        </div>
        <small>{day.driveTotal}</small>
      </div>
      <MapContainer center={center} zoom={activeStop ? 9 : 7} scrollWheelZoom={false} className="leaflet-map" key={day.day}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={positions} pathOptions={{ color: '#147f8d', weight: 4, opacity: 0.8 }} />
        {day.routeStops.map((stop, index) => (
          <Marker
            icon={makeMarkerIcon(index + 1, activeStop?.id === stop.id)}
            key={`${stop.id}-${stop.time}`}
            position={[stop.lat, stop.lng]}
          >
            <Popup>
              <strong>{stop.time} · {stop.name}</strong>
              <br />
              {stop.note}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

function makeMarkerIcon(index: number, active: boolean) {
  return divIcon({
    className: '',
    html: `<span class="route-marker ${active ? 'active' : ''}">${index}</span>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}

export default App;
