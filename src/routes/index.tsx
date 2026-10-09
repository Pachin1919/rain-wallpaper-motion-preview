import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { RainHero } from '@/components/rain-hero';
import { RoomCard } from '@/components/room-card';
import { useLanguage } from '@/lib/language';
import { pageHead } from '@/lib/page-head';
import { ConceptScene } from '@/components/concept-scene';
export const Route = createFileRoute('/')({ head: () => pageHead('Slow Stay Concept', 'The Rainfield is a fictional lakeside retreat. Explore quiet rooms, rainy-day rituals and an unhurried way to stay.'), component: Index });
function Index() {
 const { t } = useLanguage();
 return <><RainHero/>
  <section className="section welcome welcome-study"><div className="welcome-scene"><span className="eyebrow">{t('Welcome to The Rainfield', '欢迎来到雨落田原')}</span><ConceptScene scene="tea" credit/></div><div><h2>{t('Some places ask you to do more.\nThis one asks a little less.', '有的地方，让你做得更多。\n这里，想让你少做一点。')}</h2><p>{t('A small retreat imagined at the edge of a lake. A handful of quiet rooms, natural textures, and days shaped by the weather rather than the clock.', '在湖水边构想的一处小小旅居。几间安静的房间，自然的质感，让天气而不是时钟，安排一天。')}</p><p>{t('Come for the view. Stay for the feeling of having nowhere else to be.', '为风景而来，为不必赶往别处的自在而停留。')}</p></div></section>
  <section className="section stays-section home-stays"><div className="section-heading"><div><span className="eyebrow">{t('The art of staying in', '住下来的艺术')}</span><h2>{t('Two rooms. Room to breathe.', '两种栖居，一样从容。')}</h2></div><Link to="/stays" className="text-link">{t('Discover the stays', '发现栖居')}<ArrowUpRight size={17}/></Link></div><div className="room-grid home-room-spread"><RoomCard/><RoomCard reed/></div></section>
  <section className="section rhythm rhythm-study"><div className="rhythm-intro"><span className="eyebrow">{t('A day, loosely held', '松松地，过一天')}</span><h2>{t('No itinerary.\nJust a rhythm.', '没有行程。\n只有节奏。')}</h2><p>{t('A few gentle suggestions. Keep what feels right; let the rest drift away.', '几个轻柔的提议。留下喜欢的，其余随它去。')}</p></div><div className="rhythm-triptych">{([
   {time:'07:00',scene:'tea',en:'Wake with the lake',zh:'随湖醒来',body:'Open the curtains. Put the kettle on. Watch the mist lift, slowly.',bodyZh:'拉开窗帘，烧一壶水，看雾慢慢散去。'},
   {time:'10:00',scene:'path',en:'Take the long way',zh:'绕一点远路',body:'A short walk, taken slowly. Stop when something catches your eye.',bodyZh:'慢慢走一小段路。有东西吸引目光，就停下来。'},
   {time:'16:00',scene:'evening',en:'Let the afternoon linger',zh:'让午后长一点',body:'A warm cup, a good chapter, the soft percussion of rain on glass.',bodyZh:'一杯热茶，一段好文字，雨在玻璃上轻轻敲击。'},
  ] as const).map(item=><article key={item.time}><ConceptScene scene={item.scene}/><div className="rhythm-caption"><time>{item.time}</time><h3>{t(item.en,item.zh)}</h3><p>{t(item.body,item.bodyZh)}</p></div></article>)}</div></section>
  <section className="path-interlude"><ConceptScene scene="path"/><div className="path-caption"><span className="eyebrow">{t('When the rain softens', '雨渐渐轻了')}</span><p>{t('A walk without a destination.', '不设终点的散步。')}</p><span>{t('The Rainfield · Concept study', '雨落田原 · 场景构想')}</span></div></section>
  <section className="section guide-excerpt guide-paper"><div><span className="eyebrow">{t('From the field notes', '摘自雨落田原手记')}</span><h2>{t('A rainy day\nis not a lost day.', '下雨的一天，\n不算虚度。')}</h2><p>{t('What to bring, where to pause, and how to make a slow morning your own. A small guide for days with nothing to prove.', '带什么，何时停下，如何拥有一个自己的慢清晨。献给不必证明什么的日子。')}</p></div><div className="guide-reading"><ul><li>{t('A light waterproof layer and shoes with a reliable grip.', '轻便防水外衣，以及防滑的鞋。')}</li><li>{t('Warm socks and a dry change after a rain walk.', '暖袜，以及雨后可换的干衣服。')}</li><li>{t('One book, a notebook, or simply an open afternoon.', '一本书，一本笔记，或仅仅一段空白午后。')}</li></ul><Link to="/field-notes" className="text-link">{t('Read the guide', '读一读手记')}<ArrowUpRight size={17}/></Link></div></section>
 </>;
}
