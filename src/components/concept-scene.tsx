import teaWindow from '@/assets/tea-window.jpg';
import reedPath from '@/assets/reed-path.jpg';
import eveningDesk from '@/assets/evening-desk.jpg';
import { useLanguage } from '@/lib/language';

const scenes = {
  tea: { src: teaWindow, width: 848, height: 1264, en: 'Warm tea on washed linen at a rain-streaked oak window, with lake and reeds beyond', zh: '雨痕橡木窗边，水洗亚麻上放着热茶，窗外是湖水与芦苇' },
  path: { src: reedPath, width: 1376, height: 768, en: 'A wet timber boardwalk between reeds, leading toward a mist-softened lake', zh: '湿润的木栈道穿过芦苇，通向薄雾轻覆的湖面' },
  evening: { src: eveningDesk, width: 1264, height: 848, en: 'An open book and small warm lamp on a timber desk beside an evening lake window', zh: '暮色湖窗旁，木书桌上摊开的书与一盏温暖小灯' },
};

export function ConceptScene({ scene, className = '', credit = false }: { scene: keyof typeof scenes; className?: string; credit?: boolean }) {
  const { t } = useLanguage();
  const image = scenes[scene];
  return <figure className={`concept-scene ${className}`}>
    <img src={image.src} width={image.width} height={image.height} loading="lazy" decoding="async" alt={t(image.en, image.zh)} />
    {credit && <figcaption>{t('The Rainfield · Concept study', '雨落田原 · 场景构想')}</figcaption>}
  </figure>;
}
