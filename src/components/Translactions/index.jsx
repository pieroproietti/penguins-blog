import React from 'react';
import {useLocation} from '@docusaurus/router';

export default function Translactions() {
  const { pathname } = useLocation();
  
  // Lista delle lingue supportate
  const languages = [
    { label: 'Deutsch', code: 'de' },
    { label: 'English', code: 'en' },
    { label: 'Español', code: 'es' },
    { label: 'Français', code: 'fr' },
    { label: 'Italiano', code: 'it' },
    { label: 'Polska', code: 'pl' },
    { label: 'Portuguese', code: 'pt' },
    { label: 'Български', code: 'bg' },
    { label: 'Русский', code: 'ru' },
    { label: 'Українська', code: 'uk' },
    { label: 'やまと', 'ja' },
    { label: '中国', code: 'zh' },
    { label: 'فارsi', code: 'fa' },
  ];

  const domain = "https://penguins--eggs-net.translate.goog";

  return (
    <div style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
      {languages.map((lang, idx) => {
        const url = `${domain}${pathname}?_x_tr_sl=auto&_x_tr_tl=${lang.code}&_x_tr_hl=${lang.code}&_x_tr_pto=wapp`;
        
        return (
          <React.Fragment key={lang.code}>
            <a 
              href={url} 
              style={{ fontSize: '0.9rem', fontWeight: '500' }}
              rel="nofollow"
            >
              {lang.label}
            </a>
            {idx < languages.length - 1 && <span>&nbsp; • &nbsp;</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
}