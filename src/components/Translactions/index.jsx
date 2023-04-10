import React from 'react';
import {useLocation} from '@docusaurus/router';

export default function Translactions({path}) {
  // function
  let getLink = (path, tl, hl, label)=> {
    const location = useLocation();
    let link = `https://penguins--eggs-net.translate.goog${location.pathname}?_x_tr_sl=auto&_x_tr_tl=${tl}&_x_tr_hl=${hl}&_x_tr_pto=wapp&_x_tr_hist=true`
    return (
      <>
      <a href={link}>{label}</a>&nbsp;
      </>
   )
  }
  return (
    <span>
      {getLink(path, 'bg', 'bg', 'Български')} {/* bulgaro */}
      {getLink(path, 'de', 'de', 'Deutsch')}
      {getLink(path, 'en', 'en', 'English')}
      {getLink(path, 'fr', 'fr', 'Français')}
      {getLink(path, 'it', 'it', 'Italiano')}
      {getLink(path, 'ja', 'ja', 'やまと')} {/* giapponese */}
      {getLink(path, 'pl', 'pl', 'Polska')} {/* polacco */}
      {getLink(path, 'pt', 'pt', 'Portuguese')} {/* portoghese */}
      {getLink(path, 'ru', 'ru', 'Русский')} {/* russo */}
      {getLink(path, 'sp', 'ep', 'Espagnol')} {/* spagnole */}
      {getLink(path, 'uk', 'uk', 'Українська')} {/* ucraino */}
      {getLink(path, 'zh', 'zh', '中国')} {/* cinese */}
      <br/><br/>
    </span>
  );
}
