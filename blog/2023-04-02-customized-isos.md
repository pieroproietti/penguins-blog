---
authors: pieroproietti
slug: customized-isos
title: Customized ISOs
lang: it
---

A volte può essere pratico customizzare la ISO prima di crearla, per varie ragioni.

Nel tempo si è affermato un programma che prendendo una ISO precedentemente creata o originale, permette di customizzarla.

Il programma. denominato [Cubic](https://github.com/PJ-Singh-001/Cubic), purtroppo ad un primo approccio non può essere utilizzato con penguins-eggs e termina con una schermata di errore dopo l'estrazione del filesystem.squashfs.

![eggs-cubic-errot](/img/blog/2023-04-02/eggs-cubic-error.png)

Possiamo tuttavia utilizzare un approccio diverso: eggs quando produce una ISO, genera sempre degli script nella directory ```/home/eggs/ovarium```:
* bind
* mksquashfs
* mkisofs
* ubind

Nella stessa directory sono presenti anche due importanti cartelle: 
* filesystem.squashfs
* iso

La prima: filesysten.squashfs il filesystem live e la seconda contiene tutta la ISO. In pratica, secondo la denominazione di Cubic, dovrebbero corrispondere a custom-root e custom-disk.

C'è però una differenza, mentre ```custom-root``` è una vera e propria copia del filesystem completo, la cartella ```filesystem.squashfs``` è semplicemente una immagine ottenuta montando binded il filesystem della macchine sulla quale stiamo lavorando.

Quindi, prima di andarla a modificare secondo le nostre esigenze, dobbiamo montare il filesystem stesso. 

Basterà procedere con lo script ```sudo ./bind```, quindi si potra eseguire un ```chroot ./filesystem.squashfs``` e fare le modifiche all'immagine live.

Terminate le nostre modifiche al filesystem dell'immagine live, usciamo con exit e passare magari a customizzare altri aspetti dell'immagine iso.

Nella cartella iso, abbiamo le seguenti directory:
* boot
* efi
* isolinux
* live

In boot ed in isolinux, ad esempio, abbiamo splash.png che possiamo sostuire con una altra immagine, oppure editare grub.cfg o isolinux.cfg per aggiungere o togliere versioni.

Finito il nostro lavoro, non dovremo far altro che lanciare i comandi:
* sudo ./mksquashfs
* sudo ./ubind
* sudo ./mkisofs

Per ottenere la nostra immagine customizzata.






