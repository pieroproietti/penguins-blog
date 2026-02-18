---
authors: pieroproietti
slug: musebook-k1-riscv64
title: musebook-k1-riscv64
lang: en
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />
Era la fine di dicembre, pioveva molto e faceva freddo, giorni di festa, buoni per sviluppare.

Non ricordo perchè mi venne di provare la virtualizzazione di QEMU per l'architettura RISCV64, fatto sta che mi misi all'opera e. credo che già per la festa della befana avessi una versione funzionante di eggs per RISCV64 e la rimasterizzazione completa di Debian 13 ed Ubuntu 26.04.

Mi ero già scontrato con le difficoltà della emulazione per ARM64, ma devo dire che l'emulazione di RISCV64 è un tantino più veloce, anche se non esente da difficoltà.

Gasato da questo successo, decisi di aprirmi al mondo con un [commento](https://www.cnx-software.com/2026/01/08/muse-book-laptop-review-testing-an-octa-core-risc-v-linux-laptop-in-2026/#comment-656765) su CNX Software.

Forse, prima, forse dopo scrissi a Spacemit, chiedendo se avrebbero voluto supportare il mio porting sul loro prodotto. Dopo qualche giorno mi arrivò una risposta positiva e, ad inizio di febbraio è arrivata un'unità del loro MuseBook K1.

Beh, sono soddisfazioni, ma naturalmente non voglio deluderli e mi sono buttato a capofitto nel lavoro.

## Installazione di eggs
Compilare ed installar penguins-eggs è stato relativamente semplice, non ho dovuto fare altro che trovare una versione di nodejs per RISCV64 ed il pacchetto debian di penguins-eggs ha cominciato a funzionare regolarmente.

Naturalmente il poveraccio, in vita sua ha sempre prodotto immagini ISO, ma qua non c'è modo di installare un sistema operativo in modo tradizionale, quindi ho dovuto imparare a produrre immagini img per l'installazione.

Per semplificarmi l'avvio ho proceduto a create prima una versione di img per x86_64 e solo dopo ho iniziato i passi per quella per RISCV64. Ed anche qua, non sono mancate sorprese, in un mondo di pionieri.

**La sfida del bootloader: non è la solita IMG**

Nel mondo x86 siamo abituati bene: metti una ISO su una chiavetta, UEFI fa il miracolo e il sistema parte. Su RISC-V, e in particolare sul SoC Spacemit K1, siamo ancora nel "Far West". Qui il firmware non cerca una partizione avviabile generica; cerca bit specifici in posizioni millimetriche del disco.

Per far sì che il MuseBook riconoscesse la mia immagine, ho dovuto imparare a manipolare la struttura binaria della MicroSD. Non bastava copiare i file; serviva una vera e propria "Iniezione Atomica":

**Settore 0**: Una firma specifica chiamata **SDC** per dire al SoC: "Ehi, questa scheda è avviabile!".

**Offset fissi**: Iniettare `spl.bin`, `boot.bin` e l'ambiente di sistema in settori ben precisi, senza margini di errore.

## Lo schema delle 6 partizioni

Invece di lottare contro il firmware, ho deciso di assecondarlo replicando lo schema originale di Bianbu. Sei partizioni, ognuna con un compito preciso, dal caricamento dell'ambiente di runtime fino alla partizione rootfs dove risiede il cuore di eggs: lo SquashFS.

Ma la vera sorpresa è stata la scoperta del "ponte": il file `env_k1-x.txt`. Senza questo piccolo file di testo nella partizione di boot, U-Boot ignora tutto il resto. È stato il momento in cui, per la prima volta, ho visto apparire il logo di Bianbu partendo da una mia immagine. Sembra poco ma un bel passo avanti, il notebook sente la microSD avviabile e legge regolarmente la partizione di boot.

## Il muro del Reboot Loop
Tuttavia, la strada del pioniere non è mai priva di ostacoli. Attualmente mi trovo davanti a quello che chiamo "il muro del logo": il sistema parte, legge la configurazione, carica il kernel... e poi si resetta in unn ciclo infinito.

Inoltre mi sono accorto che bisogna rimuovere la configurazione di extlinux perchè. in caso contrario il sistema non parte affatt.

Ho lanciato un segnale di aiuto su Discord e nelle community specializzate. Essere tra i primi a percorrere una strada significa anche accettare di fermarsi per studiare la mappa quando il sentiero scompare.

