---
authors: pieroproietti
slug: triple-somersault
title: "Triple somersault!"
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# Triplo salto mortale!

Una volta creato e testato eggs per l'architettura [ARM64](https://developer.arm.com/Architectures/A64%20Instruction%20Set%20Architecture), abbiamo il problema di testarlo su hardware reale.

Non essendo un esperto del caso, ho chiesto assistenza a chi conosce meglio, specificatamente al buon Jon West di [BlissOS](https://blissos.org/) ed al "solito" Stefano Capitali di [Manjaro](https://manjaro.org/), che mi ha poi re-indirizzato a Furkan che si occupa delle versioni ARM per Manjaro stesso.

Jon mi ha avvisato che, per quanto di sua conoscenza, i dispositivi ARM64 utilizzano soprattutto [uboot](https://u-boot.readthedocs.io/en/latest/) come booloader al posto di GRUB, Furkan mi ha aperto un po' di più la prospettiva spiegandomi che esistono diverse versioni di Manjaro ognuna per degli specifici dispositivi e che, non tutti i dispositivi ARM sono compatibili UEFI, ma ve ne sono alcuni, da grandi sistemi come [Ampere](https://amperecomputing.com/products/processors), a piccoli come [rockpro64](https://www.pine64.org/rockpro64/) di pine64, o [rock64](https://wiki.radxa.com/Rock4) di radxa, entrambi con il rockchip [rk3399](http://rockchip.wikidot.com/rk3399).

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

# Metodo
## SD card
Abbiamo bisogno di una card SD che verrà utilizzata per il firmware UEFI necessario al boot. Può essere piccola ed economica, ho utilizzato una card da 1 GB per il mio setup, ma se ne può utilizare anche una più piccola.

Nota: è anche possibile includere il firmware UEFI nell'installazione ESXi, ma per semplicità è più meglio averlo su una card SD.

## USB stick (or other install media)
Ora abbiamo bisogno di installare medie per il sistema, Questo può essere una chiavetta USB e, nel mio setup, sto usando la stessa chiavetta sia per avviare l'installer che come disco di installazione.

Sto usando una SAN Disk Ultra Fit da 16GB (che utilizzo anche per NUC Intel a casa).

(...)

### Prepare Raspberry Pi OS SD card and run eeprom update
Aggiorniamo la nostra PI, prima di avviarla. Non sempre è necessario e, quindi, può essere eventualmente saltato.

Per flashare la card SD sto usando Raspberry Pi Imager dove potete scegliere OS e card SD. Sto utilizzando Raspberry Pi OS (32-bit), ma può essere fatto anche in modalità CLI.

![raspberry-imager](https://rudimartinsen.com/img/esxiarm_raspbianimager.png)

Dopo aver avviato per la prima volta. 
After booting up the first time I'm stepping through setting the language and regional settings, set the password and then run the software update. After the software updates are done I'm accepting the option to reboot the Pi.

Dopo il reboot, sto riaprendo il Terminale e lancio il programma per eggiornare la eepron:

`sudo rpi-eeprom-update`

Il programma controllarà la disponibilità di aggiornamente. Se ci sono aggiornamenti dispobibili, riavviamo il programma con il flag `-a`

`sudo rpi-eeprom-update -a`

Se il sistema si è aggiornato potete riavviare.

Con il sistema aggiornato possiamo spegnere la Pi e continuare a preparare il firmware UEFI.

### 2. Prepare UEFI firmware SD card

Per poter avviare il boot UEFI, la Pi abbiamo bisogno del firmware UEFI sulla SD card

Ci sono due serie di firmware che devono essere scaricati:
* [Official Pi firmware](https://github.com/raspberrypi/firmware/archive/master.zip)
* [Community UEFI firmware](https://github.com/pftf/RPi4/releases/download/v1.20/RPi4_UEFI_Firmware_v1.20.zip)

Estraete i due file zip sul vostro laptop (nel mio esempio li ho estratti in  ~/tmp) e continuate formattando la card SD.

La card SD deve essere formattata con il filesystem FAT32. Su windows potete semplicemente dare il tasto destro del mouse sulla vostra card e cliccare format. Per linux possiamo utilizzare gparted.

Per prima cosa, andremo ad indentificare l'id del disco SD card e ci andremo ad annotare il nome del device (esempio: /dev/sdC)

Partizioniamo il disco con il formato MS-DOS e lo denominiamo `UEFI`.

Dopo averlo partizionato, possiamo copiare il necessario firmware sulla nostra SD card.

Prima di tutto rimuoviamo tutti i file `kernel*` dalla directory `firmware-master/boot`, quindi copiate l'intera directory `boot` sulla nostra SD card.



**ARTICOLO DA COMPLETARE** 

![El “salto de la muerte” de la gimnasia que teme Simone Biles](https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-1240w/public/images/article/cover/2016/08/17/simone-biles.jpg?ramen_itok=iqwQftIcTf)


Eseguire un triplo salto mortale, per me, NON è semplice! Piero


# Bibliografia

* [Raspberry Pi 4 UEFI Firmware Images](https://github.com/pftf/RPi4)
* [Raspberry Pi 4 UEFI Boot](https://www.reddit.com/r/raspberry_pi/comments/gte2lp/raspberry_pi_4_uefi_boot/)
* [ESXi on ARM - Installing ESXi on a Raspberry Pi](https://rudimartinsen.com/2020/10/07/esxi-on-arm-fling-install-on-rpi/)
