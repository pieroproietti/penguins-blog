import React from 'react';

export default function Translactions({path}) {
  let l1 = 'https://penguins--eggs-net.translate.goog/'
  let l2 = '?_x_tr_sl=auto&_x_tr_tl='
  let l3 = '&_x_tr_hl='
  let l4 = '&_x_tr_pto=wapp&_x_tr_hist=true'
  let enLink = l1 + path + l2 + 'en' + l3 + 'en'
  let frLink = l1 + path + l2 + 'fr' + l3 + 'fr'
  let itLink = l1 + path + l2 + 'it' + l3 + 'it'
  let ptLink = l1 + path + l2 + 'pt' + l3 + 'pt'
  let spLink = l1 + path + l2 + 'es' + l3 + 'es'
  let ruLink = l1 + path + l2 + 'ru' + l3 + 'ru'
  let deLink = l1 + path + l2 + 'de' + l3 + 'de'
  let ukLink = l1 + path + l2 + 'uk' + l3 + 'uk'
  let bgLink = l1 + path + l2 + 'bg' + l3 + 'bg'
  let plLink = l1 + path + l2 + 'pl' + l3 + 'pl'

  let origin = "https://penguins-eggs.net"+path
  return (
    <span>
      Google translate:&nbsp;
      <a href={bgLink}>Български</a>&nbsp;
      <a href={deLink}>Deutsch</a>&nbsp;
      <a href={enLink}>English</a>&nbsp;
      <a href={frLink}>Français</a>&nbsp;
      <a href={itLink}>italiano</a>&nbsp;
      <a href={plLink}>Polska</a>&nbsp;
      <a href={ptLink}>Portuguese</a>&nbsp;
      <a href={ruLink}>Русский</a>&nbsp;
      <a href={spLink}>Espagnol</a>&nbsp;
      <a href={ukLink}>Українська</a>&nbsp;
      <br/><br/>
    </span>
  );

}
