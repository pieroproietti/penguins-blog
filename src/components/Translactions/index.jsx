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

  return (
    <span>
      Google translate:&nbsp;
      <a href={enLink}>English</a>&nbsp;
      <a href={frLink}>Français</a>&nbsp;
      <a href={itLink}>italiano</a>&nbsp;
      <a href={ptLink}>Portuguese</a>&nbsp;
      <a href={spLink}>Espagnol</a>&nbsp;
      <br/><br/>
    </span>
  );

}
