import { asset } from "@/lib/asset";
import { useEffect, useRef, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createRainEngine, motionDiagnostics } from '@/lib/rain-engine';
import { useLanguage } from '@/lib/language';

export function RainHero() {
  const { t } = useLanguage();
  const frame = useRef<HTMLElement>(null), art = useRef<HTMLImageElement>(null), water = useRef<HTMLCanvasElement>(null), glass = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const engine = useRef<ReturnType<typeof createRainEngine> | null>(null);
  const pausedRef = useRef(false);
  useEffect(() => {
    if (!frame.current || !art.current || !water.current || !glass.current) return;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let inView = true;
    const instance = createRainEngine(frame.current, art.current, water.current, glass.current);
    engine.current = instance;
    // Read-only diagnostics for lifecycle QA; never used to control the experience.
    Object.assign(window, { rainfieldMotionDiagnostics: motionDiagnostics });
    const sync = () => instance.setPlaying(!pausedRef.current && !media.matches && inView && document.visibilityState === 'visible');
    const onPreference = () => { setReduced(media.matches); sync(); };
    onPreference();
    const observer = new IntersectionObserver(entries => { inView = entries[0]?.isIntersecting ?? false; sync(); }, { threshold: .05 });
    observer.observe(frame.current);
    media.addEventListener('change', onPreference);
    document.addEventListener('visibilitychange', sync);
    const onToggle = () => sync();
    frame.current.addEventListener('rainfield-pause', onToggle);
    const node = frame.current;
    return () => { observer.disconnect(); media.removeEventListener('change', onPreference); document.removeEventListener('visibilitychange', sync); node.removeEventListener('rainfield-pause', onToggle); instance.dispose(); engine.current = null; };
  }, []);
  const toggle = () => { pausedRef.current = !pausedRef.current; setPaused(pausedRef.current); frame.current?.dispatchEvent(new Event('rainfield-pause')); };
  return <section className="rain-hero" ref={frame} aria-labelledby="rainfield-title">
    <div className="rain-visual" aria-hidden="true"><img ref={art} src={asset("/assets/rain-herbarium-clean.png")} alt="" fetchPriority="high"/><canvas ref={water}/><canvas ref={glass}/><div className="rain-shade"/></div>
    <div className="hero-copy"><span className="eyebrow">{t('By the lake. Outside the rush.', '湖畔，喧嚣之外。')}</span><h1 id="rainfield-title">Rainfield</h1><p>{t('Stay a while. Let the rain set the pace.', '住下来，让雨决定步调。')}</p><Link to="/stays" className="hero-link">{t('Explore the stays', '探索栖居')}<ArrowUpRight size={18}/></Link></div>
    <div className="hero-bottom"><span className="hero-scroll"><ArrowDown size={15}/>{t('A slower way to be', '慢一点，感受此刻')}</span><Button variant="rain" onClick={toggle} aria-pressed={paused || reduced} disabled={reduced}>{paused || reduced ? <Play/> : <Pause/>}{reduced ? t('Still view', '静止画面') : paused ? t('Resume', '继续') : t('Pause', '暂停')}</Button></div>
    <span className="hero-side-note">{t('Water / weather / a little wonder', '水面 / 天气 / 一点惊喜')}</span>
  </section>;
}