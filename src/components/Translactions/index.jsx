import React from 'react';
import {useLocation} from '@docusaurus/router';

export default function Translactions({path}) {
  // function
  let getLink = (label, tl, hl, path)=> {
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
      {getLink('Deutsch', 'de', 'de', path)}
      {getLink('English', 'en', 'en', path )}
      {getLink('Español', 'sp', 'sp', path)} {/* spagnolo */}
      {getLink('Français', 'fr', 'fr',path)}
      {getLink('Italiano', 'it', 'it', path)}
      {getLink('Polska', 'pl', 'pl', path)} {/* polacco */}
      {getLink('Portuguese', 'pt', 'pt', path)} {/* portoghese */}
      {getLink('Български', 'bg', 'bg', path)} {/* bulgaro */}
      {getLink('Русский', 'ru', 'ru', path)} {/* russo */}
      {getLink('Українська', 'uk', 'uk', path)} {/* ucraino */}
      {getLink('やまと', 'ja', 'ja', path)} {/* giapponese */}
      {getLink('中国', 'zh', 'zh', path)} {/* cinese */}
      <br/><br/>
    </span>
  );
}
