---
authors: pieroproietti
slug: wardrobe-accessories
title: 'wardrobe: accessories'
---

Ieri ho creato un "vestitino" giusto per aggiungerlo ad una remix di Linuxmint elsie che, come noto, è di base estremamente completa.

Ho pensato a qualcosa per effettuare le modifiche che normalmente faccio e cioè:
- aggiungere la repository di penguins-eggs-ppa;
- aggiuntere code e nodejs per poter utilizzare la remix per sviluppare eggs.

Questa soluzione è molto comoda, di norma, anche se ho sempre preferito lasciare le varie distribuzioni così come le trovato, rimasterizzarle aveva principalmente come obiettivo quello di "provare" il funzionamento di eggs e, permettere, agli utenti una propria customizzazione, nondimeno andavo ad aggiungere almeno spice-vdagent per ridimensionare le finustre delle mia macchine virtuali e poter effetture il copia ed incolla.

basic mi evita questo, la customizzazione di base è a portata di riga di comando completamente automatizzata.

Di più, ovvio che una customizzazione di questo genere, non porta con se la conseguenza di ridenominare l'host e neppure quella di effettuare il reset del sistema a fine installazione.

E se mi organizzassi per accessori?

Mi spiego: un costume potrebbe essere composto di "materiale" proprio e di richiami ad accessori. Potremmo definire accessori dei particolari del costume, dei sottoinsiemi, ad esempio:

- **basic**: repository penguins-eggs-ppa, packages: spice-vdagent, dirs/usr/share/backgrounds/penguins-wallpapers:
- **eggs-dev**: repository: code, nodesource, packages: code, nodejs:
- **firmware**: firmware non necessari per immagini che girano solo su VM:
- **office**: libreoffice
- 
A questo punto, prendendo per riferimento hen, avremmo una bella semplificazione:

```
# hen
---
name: hen
description: desktop xfce3, all I need to develop eggs and firmware
author: artisan
release: 0.0.3
distroId: Debian
codenameId: bullseye
releaseId: stable
applyTo: naked
sequence:
  repositories:
    sourcesList:
      main: true
      contrib: true
      nonFree: true
    sourcesListD:
        curl -fsSL "https://keys.anydesk.com/repos/DEB-GPG-KEY" | gpg --dearmor
        -o /usr/share/keyrings/anydesk-stable.gpg
      - >-
        echo "deb [signed-by=/usr/share/keyrings/anydesk-stable.gpg]
        http://deb.anydesk.com/ all main" | tee
        /etc/apt/sources.list.d/anydesk-stable.list > /dev/null
    update: true
    full-upgrade: true
  dependencies:
    - null
  packages:
    - adwaita-qt
    - firefox-esr
    - libxfce4ui-utils
    - lightdm
    - network-manager-gnome
    - network-manager-openvpn
    - network-manager-openvpn-gnome
    - qt5ct
    - tango-icon-theme
    - thunar
    - xarchiver
    - xfce4-appfinder
    - xfce4-panel
    - xfce4-pulseaudio-plugin
    - xfce4-session
    - xfce4-settings
    - xfce4-terminal
    - xfce4-whiskermenu-plugin
    - xfconf
    - xfdesktop4
    - xfwm4
  debs: false
  dirs: true
  accessories:
  - basic
  - eggs-dev
  - firmware
  - office
  hostname: true
  customizations:
    scripts:
      - null
  reboot: true
```
Il nuovo costume hen, andrebbe a prendere XFCE4 da se stesso e potrebbe aggiungere gli accessori: basic, eggs-dev. firmware ed office.

Non solo, ovviamente firmware potrebbe essere un accessorio per gwaydroid e kwaydroid e, più in generale per dove si vuole ottenere una remix installabile su hw reale.
Lo stesso varrebbe per gli altri accessori, esempio: vogliamo che con la iso di gwaydroid si prossa utilizzare per lo sviluppo di eggs? Aggiungiamo eggs-dev, ci occorre la suite office per una remix "corposa" aggoimgiamo office.

Il tutto al momento è solamente un'idea, ma scrivendolo sto già pensando a come organizzarmi.

![accessories](/images/accessories.jpg)

# Dove mettere gli accessori?
Un accessorio potrebbe comprendere anche grafica e, quindi, dovrebbe andare in penguins-wardrobe più che in wardrobe.d interno ad eggs. D'altra parte sarebbe comodo avere basic all'interno di eggs per eseguire una customizzazione leggera. 

Gli accessori dovrebbero essere distinti dai costumi?

E' scocciante, però penso di si, si potrebbe creare una directory all'interno del wardrobe per gli accessori. Peò un accessorio è pur sempre un costime e, quinid, in sede di ricarca dovremmo cercare prima tra i costumi e poi nel tiretto degli accessori.

Quale è la migliore soluzione? Non lo sò, al momento, ma l'idea di un settimino all'interno del guardaroba mi attizza.

