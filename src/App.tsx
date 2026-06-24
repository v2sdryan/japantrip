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
            text="按你第一次外國自駕、香港一年駕駛經驗、2 大 2 小朋友同兩件細行李設計。第一晚改住 Tomamu，第二朝 4:00 起身坐雲海 Gondola；Day 2-3 住 Wonderland Furano Maple，最後一晚返千歲/機場附近。"
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
          text="每一日只顯示一張完整大 poster 圖，路線、時間、公里數、住宿、美食同提醒全部已經編排入同一張圖入面。"
        />
        <div className="poster-grid">
          {days.map((day) => (
            <article className="poster-card" key={day.day}>
              <img
                className="single-day-poster"
                src={`/day-posters/gemini/day-${day.day}.png?v=20260624-family`}
                alt={`Day ${day.day} ${day.date} ${day.title} 完整一日行程圖`}
              />
            </article>
          ))}
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
        <SectionTitle title="新手海外自駕設定" text="行程已改成 7/13 第一晚住 Tomamu，7/14 清晨睇雲海後去富良野，7/14-16 住 Wonderland Furano Maple：不入札幌市中心，不去登別，不去火山博物館。" />
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
        <SectionTitle title="資料來源" text="營業時間、停車同道路 pass 出發前要再覆核一次，特別係 Tomamu 雲海 Gondola、7 月富良野薰衣草旺季同美瑛停車。" />
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
            2026/7/13-17，16:30 新千歲攞車，最後日 13:00 新千歲還車。第一晚住 Tomamu，第二朝 4:00 起身睇雲海，再去富良野、美瑛同千歲；Day 2-3 住 Wonderland Furano Maple。
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
