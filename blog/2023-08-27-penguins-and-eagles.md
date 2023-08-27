---
authors: pieroproietti
slug: penguins-and-eagles
title: "penguins and eagles"
lang: it
enableComments: true
---

Credo di aver nuovamente incontrato il Principe Serendip.

Non è la prima volta, ormai stiamo diventando amici e ci stimiamo a vicenda.

In questi giorni, tra indecisioni ed altro, alla fine ho aggiunto la capacità - in realtà piuttosto semplice - di configurare calamares con diversi filesystem, in particolare btrfs.

Prova e riprova però non riuscivo a farlo effettivamente funzionare, sino a quando Stefano Capitali mi ha suggerito di dare una occhiata a Garuda, tra l'altro suo concorrente perchè Stefano fa parte della board di Manjaro ed ha contribuito non poco al porting di eggs su Manjaro e quindi su Arch e derivate.

# Garuda
Perchè garuda? Perchè su garuda il filesystem installato è, appunto btrfs e, come dire deve esserci tutto l'occorrente per farlo funzionare.

Inoltre, garuda utilizza direttamente la repository aur chaotic nella quale penguins-eggs è presente, manco serve configurare niente per installarlo.

# Proviamo
Ho fatto una prima installazione di garuda nella versione XFCE, quindi ho preso la versione dr4gonized ed installata con il nome plasma.

`sudo pacman -Syu penguins-eggs`
`sudo eggs dad -d`
`sudo eggs calamares --install`
`sudo eggs tools clean`
`sudo eggs produce

Tutto fatto!

![garuda](/images/garuda-plasma.png)
