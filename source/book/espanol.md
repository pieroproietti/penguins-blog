---
title: Español
layout: page
date: 2020-06-20 07:38:32
---
# índice
* [Introducción](#Introducción)

# Introducción

¡Un sistema reproductivo para pingüinos!

Penguin's eggs nacieron con la idea de "reproducción" y "selección de poblaciones" aplicada a los sistemas operativos.

Era el momento de remastersys y systemBack, dos de los programas más populares para remasterizar un sistema operativo, en algún momento, ambos remastersys, que siempre habían tenido problemas de mantenimiento por parte de su autor, y que de alguna manera se interrumpieron los sistemas de bloqueo. (Ver nota)

En realidad, por un tiempo no hubo problema, pero cuando los "primeros dolores" comenzaron a no ser capaces de remasterizar las últimas versiones de mis distribuciones favoritas, esencialmente Debian y derivados, lo que era una idea, comenzó a tomar forma.

Quería una nueva herramienta, escrita en un lenguaje moderno común a múltiples distribuciones, con su propio sistema de empaque. La elección recayó en nodejs, con javascript, luego cambié a typecript como lenguaje de desarrollo.

Imaginé un proceso de producción de huevos, llamado **produce**, la operación de **install**, es decir, la instalación, originalmente llamada **hatch**. Los otros comandos llegaron por sí solos con **kill** to abort para eliminar los ISO, 
**update** para actualizaciones, **prerequisites** previos para instalar los paquetes .deb necesarios para el proceso, **calamares** para la instalación y configuración del instalador gráfico.

Tarde o temprano, siendo un huevo, también encontraré la manera de implementar un servidor PXE que lo distribuya a través de la red local, en este momento, además de la intención, está el nombre y solo podría ser **cuckoo** (cuco), por el comportamiento del cuco que tiene sus huevos eclosionados por otros.

Nota: la situación de systemBack ya no es la de los inicios de Penguin's eggs. Recientemente conocí al buen Franco Conidi (Edmond) que todavía se encarga de las actualizaciones.

# Instalación

Descargue los paquetes de instalación de egga o use el código fuente directamente.

# Paquete Debian
La instalación desde el paquete Debian es ciertamente la más fácil. Simplemente descargue la última versión de eggs del sitio web [sourceforge](https://sourceforge.net/projects/penguins-eggs/files/packages-deb/) e instálela con el comando:

```bash
sudo dpkg -i eggs-7.5.81-1.deb
```
La versión .deb incluye nodejs dentro, por lo que no es necesario tener este paquete.

## Paquete Debian
Siendo eggs un software desarrollado con nodejs, la versión original y preferible, y siempre la más actualizada. Además, una vez instalada, esta versión siempre se puede actualizar simplemente con el comando 
```bash
sudo eggs update.
```

## Paquete npm

Para instalar esta versión, primero debe instalar el paquete nodejs. La descripción de qué nodejs usar y cómo instalar nodejs se informa en el archivo README, incluido en el repositorio de eggs.

La instalación de eggs del paquete npm es simple y segura, solo estos comandos:
```bash
sudo npm config set unsafe-perm true
sudo npm install penguins-eggs -g
```

Para actualizar el paquete, una vez instalado, a versiones posteriores, solo el comando:
```bash
sudo eggs update
```

## Uso de eggs del código fuente.
Usar eggs de fuentes puede ser extremadamente útil tanto para depurar como para colaborar en el desarrollo. Una vez descargado la fuente con el comando:

```bash
git clone https://github.com/pieroproietti/penguins-eggs
```
entrar, luego, en el directorio pingüinos-huevos y dar el comando:
```bash
npm i
```
En este punto, desde el directorio de penguins-eggs, puede usar la fuente directamente. Por ejemplo:

```
sudo ./eggs produce -fv
```
Para los desarrolladores o los curiosos, será posible ver, informar o corregir el código.

# Prerrequisitos y configuración

Cosas que hacer antes de comenzar la producción de huevos (ISO).

Una vez que el paquete esté instalado como en la página anterior, tendremos un nuevo comando en nuestro sistema:

```
eggs
```
Iniciar huevos sin ningún comando, obtendremos la lista de comandos disponibles:

![eggs-senza-parametri](/images/eggs-senza-parametri.png)

Lo primero que debemos hacer en este punto es permitir que eggs descarguen los paquetes de Debian necesarios para que funcione. Para hacer esto, solo ejecuta el comando:

```
sudo eggs prerequisites
```

![eggs-prerequisites](/images/eggs-prerequisites-yes-no.png)

Al seleccionar Yes, se aceptará la instalación de los paquetes necesarios para el funcionamiento de eggs y la producción de imágenes iso. Esencialmente podemos dividir los paquetes instalados en tres:

* Paquetes de arranque en máquinas UEFI
* Paquetes para crear la imagen ISO
* Paquetes para el instalador gráfico calamares

Todos los paquetes para la operación de huevos y la producción de ISO son instalados por el comando:

```
sudo eggs prerequisites
```

que luego instalará los siguientes paquetes:

```isolinux, live-boot, live-boot-initramfs-tools, lvm2, squashfs-tools, xorriso, xterm, whois```

## Installador grafico

En este punto, si lo necesitamos, será mejor instalar el instalador gráfico calamares, con el comando:
```
sudo eggs calamares
```

que instalará calamares y los módulos ```qml-module-qtquick2, qml-module-qtquick-controls`` necesarios para ver las diapositivas durante la instalación del sistema.

## Realización de imágenes ISO compatibles con UEFI

si queremos que nuestros ISOs se creen compatibles con UEFI (Advertencia, esto solo se ha probado con Debian Buster, probablemente en Ubuntu todavía no funciona), debemos instalar el paquete grub-efi-amd64, con el comando:

```
sudo apt install grub-efi-amd64
```

(ver nota)

## Penguins-eggs.conf archivo de configuración
Normalmente no es necesario intervenir en /etc/penguins-eggs.conf, eggs está autoconfigurado y se adapta a las necesidades de la distribución actual. En cualquier caso, para la documentación, vea los comentarios en el mismo archivo.

Solo quiero señalar que al editar este archivo puede editar tanto el nombre del usuario en vivo, su contraseña y la contraseña de administración.

Si ha optado por no tocar /etc/penguins-eggs.conf por el momento, recuerde que, de forma predeterminada, eggs está configurado con la constrassegna evolución por el usuario live, se establece la misma contraseña para el inicio de sesión de root.

Si, en cambio, ha modificado o eliminado el archivo de configuración, siempre puede restaurarlo con el comando:

```
sudo eggs prerequisites -c
```

## ¡eggs está listo!

Bueno, ahora finalmente estamos listos para usar eggs para la reproducción de nuestro pingüino.

Nota: en caso de que queramos crear una imagen de arranque en modo UEFI y hayamos instalado grub-efi-amd64 después de instalar los requisitos previos, debemos ir a editar el archivo /etc/penguins-eggs.conf y configurar make_efi = yes.


# Los comandos

## Comandos y opciones de eggs
Eggs necesita derechos de root, por lo que, a excepción de la información sobre los huevos, DEBE llamarse precedido por sudo.

* adjust
* calamares
* help
* howto
* info
* install
* kill
* prerequisites
* produce
* skel
* sterilize
* update












