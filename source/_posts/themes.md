---
title: themes
layout: post
date: 2020-11-18 07:13:19
---

[Portuguese (BR)](#Portuguese-BR)

# Italiano

## Dove risiedono i temi

I temi sono un addon di eggs. 

Essi sono visti da eggs in ```/etc/penguins-eggs.d/addons``` pur risiedendo in differenti posizioni a seconda del tipo di installazione e della architettura in uso.

Da questo link, vengono compilati e copiani nelle directory di pertinenza. Per calamares ```/etc/calamares/branding```.

Non si deve, quindi, cambiare direttamente il branding di calamares in /etc/calamares, ma creare un addon in ```/etc/penguins-eggs.d/addons```.

# link /etc/penguins-eggs.d/addons

In questa directory puoi trovare, appunto, gli addons di eggs. Al momento:
* debian
* deblinux
* eggs
* ufficiozero

All'interno di queste cartelle (vendor) ci sono gli addons veri e propri. 

Ad esempio:

```
ls /etc/penguins-eggs.d/addons/eggs
```

* dwagent 
* installer-choice  
* proxmox-ve  
* theme

## I temi 

Oggi adesso parliamo solo di temi, ma lo stesso vale anche per gli altri tipi di addon.

Supponiamo che il nostro vendor sia l'utente tico. Creiamo, quindi, una cartella ```~/tico``` nella nostra home.

Copiamo in questa il contenuto di /etc/penguins-eggs.d/eggs/theme.

```
cp /etc/penguins-eggs.d/eggs/theme/ ~/tico -R
```

A questo punto dobbiamo creare un collegamento simbolico in /etc/penguins-eggs.d/ per poter utilizzare il nostro nuovo tema.

Per prima cosa vediamo dove risiede effettivamente la cartella /etc/penguins-eggs/addons. 

Per scoprirlo daremo semplicemente il comando:

```
ls /etc/penguins-eggs.d/addons -l
```

scoprendo che, con installazione deb ed architettura amd64, questo è un link alla cartella:

__/usr/lib/penguins-eggs/addons__

Quindi, a questo punto possiamo creare un link al nostro progetto di tema:

```
sudo ln -s ~/tico /usr/lib/penguins-eggs/addons/tico
```

Bene, abbiamo raggiunto il nostro scopo. 

__NB: A seguito dell'aggiornamento di eggs potremo perdere il link, cha andrà rifatto, ma non la nostra customizzazione.__

## Modifica del tema

Possiamo modificare e conservare nella nostra home il nostro progetto di tema che sarà visto da eggs come /etc/penguins-eggs.d/addons/tico.

Ora possiamo iniziare a modificare il contenuto di ```~/tico/theme```.

### La struttura del tema

Nella cartella theme ci sono tre cartelle:

* applications
* artwork
* branding

In applications troviamo semplicemente il link debian-install.desktop, in artwork l'icona debian-install.png mentre in branding troviamo il template per calamares. 

Non mi dilungo su applications ed artwork, chi si occupa di rimasterizzazione se la caverà egregiamente. Parleremo invece di branding.

In branding sono presenti due file di testo ed alcune immagini. 

* branding.desc 
* show.qml

branding.desc è solamente un segnaposto, sarà costruito da zero direttamente da eggs. 

show.qml, invece, è la nostra presentazione. 

le varie immagini: ```welcome.png``` e ```slide1.png```, etc sono invece le varie figure che scorrerenno durante l'installazione. 

Potete cambiare tutto a vostro piacimento. 

__NB: Per informazioni, consultate la documentazione di calamares__.

# Uso del nostro tema


Per usare il nostro tema tico, dovremo semplicemente specificare il flag --theme vendor in produce.

```
sudo eggs produce -vf --theme tico
```



# Portuguese (BR)

# Onde residem os temas

Os temas são um suplemento de eggs. 

Eles são vistos por eggs em /etc/penguins-eggs.d/addons enquanto residem em locais diferentes, dependendo do tipo de instalação e da arquitetura em uso.

A partir deste link, eles são compilados e copiados para os diretórios relevantes. Para calamares /etc/calamares/branding.

Portanto, você não deve alterar diretamente a marca das lulas em /etc/calamares, mas criar um addon em /etc/penguins-eggs.d/addons.

# link /etc/penguins-eggs.d/addons

Neste diretório você pode encontrar, de fato, os suplementos de eggs. No momento:
* debian
* deblinux
* eggs
* ufficiozero

Dentro destas pastas (vendors) estão os próprios addons. 

Por exemplo:

```
ls /etc/penguins-eggs.d/addons/eggs
````

* dwagent 
* installer-choice
* proxmox-ve  
* theme

## Temas 

Hoje estamos falando apenas de temas, mas o mesmo vale para os outros tipos de adições.

Vamos assumir que nosso fornecedor é o usuário ```tico```. Vamos criar uma pasta ```~/tico``` em nossa casa.

Copiamos o conteúdo de ```/etc/penguins-eggs.d/eggs/theme``` para este aqui.

```
cp /etc/penguins-eggs.d/eggs/theme/ ~/tico -R
```

Neste ponto, temos que criar um link simbólico em ```/etc/penguins-eggs.d/``` para usar nosso novo tema.

Primeiro vamos ver onde realmente reside a pasta ```/etc/penguins-eggs/addons```. 

Para saber, basta dar o comando:

```
ls /etc/penguins-eggs.d/addons -l
```

descobrindo que, com a instalação da deb e a arquitetura amd64, este é um link para a pasta:

__/usr/lib/penguins-eggs/addons__

Assim, neste momento, podemos criar um link para nosso projeto temático:

```
sudo ln -s ~/tico /usr/lib/penguins-eggs/addons/tico
```

Bem, nós atingimos nosso objetivo. 

__NB: Após a atualização dos eggs podemos perder o elo, que precisará ser reconstruído, mas não nossa customização.

## Mude o tema

Podemos modificar e manter em nossa casa nosso projeto temático que será visto pelo eggs como /etc/penguins-eggs.d/addons/tico.

Agora podemos começar a modificar o conteúdo de ```~/tico/tema```.

### A estrutura do tema

Há três pastas na pasta temática:

* applications
* artwork
* branding

Em applications nós simplesmente encontramos o link ```debian-install.desktop```, em artwork encontramos o icon ```debian-install.png``` e em ```branding``` encontramos o modelo para lula. 

Não me detenho em applications e artwork, aqueles que lidam com remasterização se sairão muito bem. Em vez disso, falaremos sobre branding.

Em branding há dois arquivos de texto e algumas imagens. 

* branding.desc 
* show.qml

O branding.desc é apenas um suporte de local, ele será construído a partir do zero diretamente do eggs. 

show.qml, ao invés disso, é nossa apresentação. 

as várias imagens: ```welcome.png``` e ```slide1.png```, etc. são as várias figuras que irão rolar durante a instalação. 

Você pode mudar tudo à sua vontade. 

__NB: Para informações, consulte a documentação de calamares__.

# Usando nosso tema


Para utilizar nosso tema tico, teremos simplesmente que especificar a bandeira --theme tico.

```
sudo eggs produce -vf --theme tico
```

# tradução

Traduzido com a versão gratuita do tradutor - www.DeepL.com/Translator

Se você quiser contribuir para a tradução para seu idioma, você pode baixar o conteúdo deste site com git.

```
git clone https://github.com/pieroproietti/penguins-blog
```

corrigi-lo e enviá-lo ao autor: piero.proietti@gmail.com

Gracias

