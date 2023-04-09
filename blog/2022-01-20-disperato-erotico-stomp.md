---
authors: pieroproietti
slug: disperato-erotico-stomp
title: Disperato erotico stomp
lang: it
---

import Translactions from '@site/src/components/Translactions';

<Translactions path="blog/disperato-erotico-stomp"/>


<iframe width="560" height="315" src="https://www.youtube.com/embed/jSQ_ovNRIec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Sono due giorni che sto combattendo con UEFI. Ho sempre cordialmente odiato UEFI, purtroppo mi ci tocca convivere!

Per di più utilizzando e - non potendo fare altrimenti delle VM - vengono aggiunti anche i problemi della virtualizzazione. 

In effetti, l'anno scorso dopo un duro rincorrere i codici del buon refracta-snapshot-base di fsmithred di cui potete vedere questa [intervista](https://www.youtube.com/watch?v=oGhH05ilIyc) del 2019. [Refracta](https://distrowatch.com/table.php?distribution=refracta), in qualche modo ha fatto la Storia - visto che da questa base si sono sviluppati almeno altri tre progetti: l'installer di [Devuan](https://git.devuan.org/devuan/refractasnapshot-base) dello stesso autore, quello di MX-linux  [mx-remaster](https://github.com/MX-Linux/mx-remaster) ed il mio [penguins-eggs](https://github.com/pieroproietti/penguins-eggs). 

Leggendo, sforzandomi di capire la logica, e ritraducendo il tutto in un misto di typescript e comandi di terminale - più gestibile per i miei gusti - ero riuscito a farlo funzionare.

Non uso molto UEFI però, normalmente sulla stazione di lavoro composta da Proxmox VE sul quale ho installato una interfaccia grafica cinnamon ed i strumenti di sviluppo, le macchine nascono con BIOS standardd e l'UEFI ha rappresentato sempre  - come dire - una inutile "rottura". Così non mi sono accorto di quando era successo il "fattaccio".

Sono andato a tentoni, cercando di ritrovare una immagine funzionante, ma ne faccio e ne cancello così tante che non c'è stato verso.

In effetti avevo anche un problema sulla virtualizzazione, o meglio qualche cambio della stessa, di cui non mi ero reso conto.


# Tutti i nodi vengono al pettine

Avendo però attualmente un collega, che sta sviluppando una distribuzione con interfaccia Android,  l'esigenza di utilizzare un notebook Microsoft, ci siamo trovati di fronte al problema,

Non mi capacitavo del perchè era sempre rimasto alla versione 8.17.x di eggs. Mi riferiva di avere problemi con la versione corrente, ma non avevo compreso che il problema era proprio la sua necessità del funzionamento UEFI, a me le nuove versioni andavano, a lui no.  Io d'altra parte ero impossibilitato dal compremdere, in UEFI semplicemente non mi funzionavano ne' le versioni della serie 8.x, ne quelle della 9.x e quindi, non conoscevo quando s'era rotto il codice.

In effetti era successa una cosa diversa: l'emulazione di Proxmox andava riconfigurata, si può avviare con UEFI ma sono disabilitando il secure boot.

Ieri, preso dal panico che l'amico dovesse rinunciare alla collaborazione in ragione del fatto che non riuscivo ad assicurargli l'avvio UEFI, ho cominciato ad indagare.

Il primo passo è stato richiedere allo stesso una "ultima" iso funzionante.

Con sorpresa, l'ultima iso funzionante era proprio quella che mi aveva appena condiviso.

Quindi, una volta segnato il punto è cominciata la caccia!


Per prima cosa ho provato con una chiavetta USB e, finalmente scopro che in effetti l'immagine che mi era stata inviata funziona in UEFI dalla chiavetta USB. Era solo dall virtualizzatore che non riuscivo ad avviarla.

Una volta assicuratomi di questo e, dopo la meritata dormita notturna, fresco al risveglio ho cercato di capuire che problemi avessi su Proxmox dove la stessa immagine non veniva avviata.

Dopo una oretta di bestemmie varie, ho compreso che il problema risiedeva nella configurazione interna delle VM UEFI, ho fatto i seguenti passi:

Avvio la macchina virtuale, precedentemente configurata con BIOS: ```OMVF (UEFI)``` e la avvio premendo il tast ESC.
![uefi-ovmf](/images/uefi-ovmf.png)

e vado a selezionare il: Device manager:
![uefi-device-manager](/images/uefi-device-manager.png)

A questo punto, scelgo: secure boot configuration
![uefi-secure-boot-configuration](/images/uefi-secure-boot-configuration.png)

Mi trovo la seguente schermata, nella quale come si può vedere, lo stato corrente di Secure Boot è enabled.
![uefi-seture-boot-state-enabled](/images/uefi-seture-boot-state-enabled.png)

Non ci resta che modificare lo stato e disabilitarlo:
![uefi-current-state](/images/uefi-current-state.png)

Adesso le nostre immagini potranno essere avviate con UEFI. 

Mi resta ancora da capire, perchè le distro originali Debian/Ubuntu/etc funzionano comunque. anche con il ```Current Secure Boot State enable```, ma questo ce lo portiamo appreso per una prossima fase. Si accettano però suggerimenti.

# Inizio della comparazione del codice 8.17.x con la versione 9.0.x

La versione 9.0.x ha subito diverse riscritture rispetto alla versione originale e, tornare indietro, è discretamente impossibile. Per cui mi sno concentrato sulle differenze tra le due versioni, comparando i file cruciali per il boot UEFI: grub.template e grub.theme.cfg con quelli dell'altra versione.

Mi sono subito accorto che, addirittura, manco li avevo aggiornati, erano ancora con i vecchi parametri che, nella versione 9.x, ho dovuto riunire in un unico paramtro ```kernel_paremeters``` per gestire meglio le varie famiglie di linux.

Il processo è durato almeno due ore buone, perchè l'unico modo che conosco per controllare grub è quello di generare una nuova iso e testarla. Ho scoperto oggi grub-emu, un emutatore di grub discretamente funzionante, ma alla fine non l'ho trovato pratico.

Sistemato, con alterne fortune il template di grub ed il codice per il suo riempimento ho notato di avere comunque errori. 

La macchina si avvia, ma va in grub rescue. Però immettendo:

```
set root=(cd0)
set prefix=(cd0)/boot/grub
normal
```

e dando invio. Pur senza caricare il tema - nel quale ho poi scoperto altri problemi - esegue correttamente il boot in UEFI.

A domani per il definitivo bugfix ed il completamento dell'articolo.

Se qualcuno vuole darci una occhiata, questi sono i file di configurazione:
* [grub.template](https://github.com/pieroproietti/penguins-eggs/blob/master/addons/templates/grub.template)
* [grub.theme.cfg](https://github.com/pieroproietti/penguins-eggs/blob/master/addons/eggs/theme/livecd/grub.theme.cfg)

mentre il codice che compone i kernel_parameter si trova in [ovary.ts](https://github.com/pieroproietti/penguins-eggs/blob/96d4ab163a3c27121487f31732671643b16cfe35/src/classes/ovary.ts), nella fuzione makeEfi() dalla linea [1335](https://github.com/pieroproietti/penguins-eggs/blob/96d4ab163a3c27121487f31732671643b16cfe35/src/classes/ovary.ts#L1353)


# Conclusioni
Con la versione eggs-9.0.10 possiamo finalmente dire: la stagione di caccia è finita!

Le ragioni del non funzionamento erano molteplici:
* problematiche di configurazione delle VM utilizzate che mi hanno impedito di rendermi conto immediatamente del problema;
* problematiche legate alla difficoltà di creare degli splash compatibili con grub;
* questa istruzione, in makeEfi() di ovary.ts

```
// make a tarred "memdisk" to embed in the grub image
await exec(`tar -cvf ${memdiskDir}/memdisk ${memdiskDir}/boot`, echo)
```

che si portava dietro tutto il path di ```memdiskDir```, ed stata così modificata:

```
// make a tarred "memdisk" to embed in the grub image
/**
* NOTE: it's CRUCIAL to chdir before tar!!!
*/
const currentDir = process.cwd()
process.chdir(memdiskDir)
await exec(`tar -cvf memdisk boot`, echo)
process.chdir(currentDir)
```

Va bene, la rampa di lancio è stata approntata, si resta in attesa dell'arrivo dei missili e del conto alla rovescia.

Buon viaggio in UEFI a tutti!
