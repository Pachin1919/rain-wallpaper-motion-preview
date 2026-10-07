import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language';

export function SiteHeader() {
  const { t, language, toggle } = useLanguage();
  const home = useRouterState({ select: state => state.location.pathname === '/' });
  return <header className={`site-header ${home ? 'over-lake' : ''}`}>
    <Link to="/" className="wordmark" aria-label={t('Rainfield home', '雨野首页')}>rainfield<span className="brand-dot">.</span></Link>
    <nav aria-label={t('Main navigation', '主导航')}>
      <Link to="/stays" activeProps={{ 'aria-current': 'page' }}>{t('The stays', '栖居')}</Link>
      <Link to="/field-notes" activeProps={{ 'aria-current': 'page' }}>{t('Field notes', '雨野手记')}</Link>
      <Button variant="language" onClick={toggle} aria-label={t('Switch to Chinese', '切换为英文')}>{language === 'en' ? '中' : 'EN'}</Button>
    </nav>
  </header>;
}
export function SiteFooter() {
  const { t } = useLanguage();
  return <footer className="site-footer">
    <div className="footer-opening"><span className="eyebrow">{t('A quieter kind of elsewhere', '去往一处安静')}</span><p>{t('Leave a little room\nfor doing nothing.', '留一点时间，\n什么也不做。')}</p><Link to="/stays" className="text-link">{t('Find your slow stay', '寻找你的慢居')}<ArrowUpRight size={18}/></Link></div>
    <div className="footer-bottom"><Link to="/" className="wordmark">rainfield.</Link><p>{t('A fictional lakeside retreat, imagined by PACHIN.\nAn independent hospitality concept, not a place accepting bookings.', 'PACHIN 构想的虚构湖畔旅居。\n这是独立的旅居概念，并非开放预订的真实住所。')}</p><span>{t('Rain study © PACHIN', '雨景作品 © PACHIN')}</span></div>
  </footer>;
}