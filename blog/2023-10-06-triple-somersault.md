---
authors: pieroproietti
slug: triple-somersault
title: "triple somersault"
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

Una volta creato e testato eggs per ARM64, abbiamo il problema di testarlo su hardware reale.

Non essendo un esperto del caso, ho chiesto assistenza a chi conosce meglio, specificatamente al buon Jon West di [BlissOS](https://blissos.org/) ed al "solito" Stefano Capitali di Manjaro, che mi ha poi re-indirizzato a Furkan che si occupa della versione ARM di Manjaro stesso.

Jon mi ha avvisato che, per quanto di sua conoscenza, i dispositivi ARM64 utilizzano soprattutto uboot come booloader al posto di GRUB, Furkan mi ha aperto un po' meglio la strada spiegandomi che esistono diverse versioni di Manjaro ognuna per degli specifici dispositivi.

Non tutti i dispositivi ARM sono compatibili UEFI, ma ve ne sono alcuni da grandi sistemi come [Ampere](https://amperecomputing.com/products/processors) a piccoli come [rockpro64](https://www.pine64.org/rockpro64/) di pine64, o [rock64](https://wiki.radxa.com/Rock4) di radxa, entrambi con il rockchip rk3399.

Ho continuato a documentarmi e mi sono imbattuto in [Raspberry Pi 4 UEFI Firmware Images](https://github.com/pftf/RPi4), che - nello specifico - fa proprio il caso nostro in quanto consente di avviare RPI4 con UEFI e, sembra da USB come specificato nell'articolo [ESXi on ARM - Installing ESXi on a Raspberry Pi](https://rudimartinsen.com/2020/10/07/esxi-on-arm-fling-install-on-rpi/) in bibliografia.

Disponendo quindi di un abbastanza datato RPI4 con 8 GB di RAM, mi sto accingendo a prepararmi al grande salto.

# Installazione
Scarica l'ultimo archivio dalla repository Releases.

Crea un SD card o un disco USB, con almeno una partizione formattata come FAT16 o FAT32

Nota: Avviando da USB o da ESP richiede un versione di PI EEPROM recente (così come una versione del firmware UEFI). Se state utilizzando l'ultima versione del firmware UEFI e trovate che il boot da USB o da ESP non si avvia, visitate https://github.com/raspberrypi/rpi-eeprom/releases per aggiornare la vostra EEPROM.

Estraete tutti i file dell'archivio nella partizione che avete creato precedentemente.

Notate che - a parte questo README.md, che potete rimuovere liberamente - non dovete cambiare assolutamente i nomi dei file e delle directory estratte.

# Utilizzo
Inseriti la card SD o la chiavetta USB ed accendete la vostra Raspberry PO. Dovreste vedere uno schermo multicolore (che indica che il bootloaded embedded sta leggendo i dati dalla partizione SB/USB) quindi, appare il logo Raspberry in bianco e nero una volta che il firmware UEFI è prondo.

A questo punto, potete premere il tasto ESC per entrare nel setup, FI per lanciare la shell UEFI e, se fornito, avere yn bootloader UEFI in efi/bootaa64.efi che potete avviare (sarà il default se non verrà intrapresa alcuna azione)


# Bibliografia

* [Raspberry Pi 4 UEFI Firmware Images](https://github.com/pftf/RPi4)
* [Raspberry Pi 4 UEFI Boot](https://www.reddit.com/r/raspberry_pi/comments/gte2lp/raspberry_pi_4_uefi_boot/)
* [ESXi on ARM - Installing ESXi on a Raspberry Pi](https://rudimartinsen.com/2020/10/07/esxi-on-arm-fling-install-on-rpi/)
