---
authors: pieroproietti
slug: customized-isos
title: Customized ISOs
lang: it
---

[English](https://penguins--eggs-net.translate.goog/blog/customized-isos?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true) (Machine translation from Italian)


A volte può essere pratico modificare la ISO prima di crearla, per varie ragioni.

Nel tempo si è affermato un programma che prendendo una ISO precedentemente creata o una originale, permetteva di customizzarla.

Il programma, denominato [Cubic](https://github.com/PJ-Singh-001/Cubic), almeno ad un primo approccio non può essere utilizzato con le iso prodotte da penguins-eggs, poichè termina con una schermata di errore dopo l'estrazione del ```filesystem.squashfs```.

![eggs-cubic-errot](/img/blog/2023-04-02/eggs-cubic-error.png)

## Possiamo tuttavia utilizzare un approccio diverso

eggs quando produce una ISO, genera sempre degli script nella directory ```/home/eggs/ovarium```:
* bind
* mksquashfs
* mkisofs
* ubind

Nella stessa directory sono presenti anche due importanti cartelle: 
* filesystem.squashfs
* iso

La prima ```filesystem.squashfs``` contiene il filesystem live, mentre la seconda ```iso```, tutta la ISO. In pratica, queste cartelle, secondo la denominazione di Cubic, corrispondono a ```custom-root``` e ```custom-disk```.

C'è però una differenza, mentre ```custom-root``` è una vera e propria copia del filesystem completo, la cartella ```filesystem.squashfs``` è semplicemente una immagine ottenuta montando binded il filesystem della macchina host sulla quale stiamo lavorando.

Questo comporta diversi vantaggi di prestazione e di tempi attesa essendo istantanea.

Purtuttavia, presenta lo svantaggio che una modifica fatta in ```filesystem.squashfs``` può riflettersi anche nel filesystem della macchina host, con l'eccezione delle cartelle: ```/etc```, ```/boot```, ```/usr``` e ```/var``` che vengono montate in overlay per renderle scrivibili.

## Montare il filesystem live

Quindi, prima di andare a modificare il filesystem live secondo le nostre esigenze, dobbiamo montarlo. 

Basterà procedere con lo script ```sudo ./bind```, quindi si potra eseguire un ```chroot ./filesystem.squashfs``` e fare le modifiche all'immagine live.

Terminate le nostre modifiche al filesystem dell'immagine live, usciamo con exit e passiamo eventualmente a customizzare altri aspetti dell'immagine.

## Modificare la cartella iso

Nella cartella iso, abbiamo le seguenti directory:
* boot
* efi
* isolinux
* live

In boot ed in isolinux, ad esempio, abbiamo splash.png che possiamo sostituire con una altra immagine, oppure editare grub.cfg o isolinux.cfg per aggiungere o togliere versioni.

## Creare la nostra live customizzata

Finito il nostro lavoro, non dovremo far altro che lanciare i comandi:
* sudo ./mksquashfs
* sudo ./ubind
* sudo ./mkisofs

Per ottenere la nostra immagine customizzata.






