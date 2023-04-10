import React from 'react';

export default function Translactions({path}) {

  let getLink = (sl, hl, label)=>{
    return `https://penguins--eggs-net.translate.goog/${sl}?_x_tr_sl=auto&_x_tr_tl=${hl}&_x_tr_pto=wapp&_x_tr_hist=true`
  }
  let bgLink = getLink('en', 'en', 'Български')
  let deLink = getLink('de', 'de', 'Deutsch')
  let enLink = getLink('en', 'en', 'English')
  let frLink = getLink('fr', 'fr', 'Français')
  let itLink = getLink('it', 'it', 'Italiano')
  let plLink = getLink('pl', 'pl', 'Polska')
  let ptLink = getLink('pt', 'pt', 'Portuguese')
  let ruLink = getLink('ru', 'ru', 'Русский')
  let spLink = getLink('sp', 'ep', 'Espagnol')
  let ukLink = getLink('uk', 'uk', 'Українська')

  /*
  let l1 = ''
  let l2 = '?_x_tr_sl=auto&_x_tr_tl='
  let l3 = '&_x_tr_hl='
  let l4 = '&_x_tr_pto=wapp&_x_tr_hist=true'
  let enLink1 = l1 + path + l2 + 'en' + l3 + 'en'
  let frLink = l1 + path + l2 + 'fr' + l3 + 'fr'
  let itLink = l1 + path + l2 + 'it' + l3 + 'it'
  let ptLink = l1 + path + l2 + 'pt' + l3 + 'pt'
  let spLink = l1 + path + l2 + 'es' + l3 + 'es'
  let ruLink = l1 + path + l2 + 'ru' + l3 + 'ru'
  let deLink = l1 + path + l2 + 'de' + l3 + 'de'
  let ukLink = l1 + path + l2 + 'uk' + l3 + 'uk'
  let bgLink = l1 + path + l2 + 'bg' + l3 + 'bg'
  let plLink = l1 + path + l2 + 'pl' + l3 + 'pl'
  */

  return (
    <span>
      Google translate:&nbsp;
      <a href={bgLink}>Български</a>&nbsp;
      <a href={deLink}>Deutsch</a>&nbsp;
      <a href={enLink}>English</a>&nbsp;
      <a href={frLink}>Français</a>&nbsp;
      <a href={itLink}>Italiano</a>&nbsp;
      <a href={plLink}>Polska</a>&nbsp;
      <a href={ptLink}>Portuguese</a>&nbsp;
      <a href={ruLink}>Русский</a>&nbsp;
      <a href={spLink}>Espagnol</a>&nbsp;
      <a href={ukLink}>Українська</a>&nbsp;
      <br/><br/>
    </span>
  );

}
