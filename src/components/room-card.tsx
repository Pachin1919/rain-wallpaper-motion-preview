import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/language';
import lakeRoom from '@/assets/lake-room.jpg';
import reedRoom from '@/assets/reed-room.jpg';
export function RoomCard({ reed = false, detailed = false }: { reed?: boolean; detailed?: boolean }) {
 const { t } = useLanguage();
 const image = <img src={reed ? reedRoom : lakeRoom} alt={reed ? t('A writing desk, linen bed and reed-framed lake window', '书桌、亚麻床铺与窗外的芦苇湖景') : t('Oak bed and linen beside a broad rainy-lake window', '宽阔雨湖窗边的橡木床与亚麻床品')} loading="lazy" width={1536} height={1024}/>;
 return <article className="room-card">{reed ? <div className="room-image">{image}</div> : <Link to="/stays/lake-room" className="room-image" aria-label={t('Discover the Lake Room', '探索湖景房')}>{image}</Link>}
 <div className="room-meta"><span>{reed ? '02' : '01'} / {t('A room for slowing down', '为慢下来而留的房间')}</span><span>{reed ? t('Reed-facing', '面向芦苇') : t('Lake-facing', '面向湖面')}</span></div>
 <div className="room-title"><h3>{reed ? t('The Reed Room', '芦苇房') : t('The Lake Room', '湖景房')}</h3>{!reed && <Link to="/stays/lake-room" aria-label={t('View Lake Room', '查看湖景房')}><ArrowUpRight size={22}/></Link>}</div>
 <p>{reed ? t('A smaller, tucked-away room. A desk by the reeds, a book left open, and no reason to hurry.', '一间更小、更隐静的房间。芦苇旁的书桌，摊开的书，没有需要赶赴的事。') : t('An open view, a low linen bed, and the changing light of the lake. Space to simply settle in.', '开阔的湖景，低矮的亚麻床铺，还有随时间变换的湖光。安心住下，就很好。')}</p>
 {detailed && <dl className="room-notes"><div><dt>{t('Layout', '格局')}</dt><dd>{reed ? t('Single bed, window desk, built-in reading seat.', '单人床、临窗书桌、内嵌阅读座。') : t('Double bed, generous window, a separate reading corner.', '双人床、宽阔窗景、独立阅读角。')}</dd></div><div><dt>{t('Materials', '材质')}</dt><dd>{reed ? t('Walnut, lime plaster, linen and sage wool.', '胡桃木、石灰灰泥、亚麻与鼠尾草色羊毛。') : t('Oak, pale plaster, washed linen and charcoal wool.', '橡木、浅色灰泥、水洗亚麻与炭灰羊毛。')}</dd></div><div><dt>{t('Best for', '适合')}</dt><dd>{reed ? t('One person, a notebook, an unhurried morning.', '一个人，一本笔记，一段悠然的清晨。') : t('One or two people, reading and watching the weather.', '一至两人，阅读，或静看天气变换。')}</dd></div></dl>}
 {!reed && <Link to="/stays/lake-room" className="text-link">{t('Step inside', '走进房间')}<ArrowUpRight size={16}/></Link>}
 </article>;
}
