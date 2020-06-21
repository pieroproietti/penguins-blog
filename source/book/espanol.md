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

```
isolinux, live-boot, live-boot-initramfs-tools, lvm2, squashfs-tools, xorriso, xterm, whois
```

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
Eggs necesita derechos de root, por lo que, a excepción de la información sobre eggs, DEBE llamarse precedido por sudo.

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

No se asuste con estos pocos comandos, los que usará son esencialmente dos: **produce** para crear el ISO y **kill** para eliminarlo.

Cada comando puede tener algunas flag, la más importante de las cuales es  -fo --fast del comando **produce** que permitirá a los huevos usar lz4 como algoritmo de compresión en lugar de la xz predeterminada, lo que le permite ahorrar mucho tiempo durante las fases desarrollo de tu remix.

Otro flag importante y presente en casi todos los casos es el flag -v o --verbose que le mostrará en la pantalla la sucesión de los diversos comandos.

Vamos a ilustrar los comandos en estricto orden alfabético, para conveniencia del escritor. Tenga en cuenta que los comandos que usará normalmente son kill y produce.

```
eggs adjust
```

Adapta el video a las capacidades del monitor o al tamaño de la ventana en el caso de una máquina virtual. Me resulta muy conveniente cambiar el tamaño de las 
máquinas virtuales con interfaces gráficas que no sean cinnamon, gnome3 y kde para las que no es necesario. Básicamente, eggs llama a xrandr para adaptar la pantalla a la resolución actual.

```
sudo eggs calamares
```

Instale y configure el instalador gráfico universal calamares. También se puede usar en el caso de un ISO hecho sin calamares y que, durante la instalación, desea instalar con él.

```
eggs help
```
Como dice el comando en sí, genera la lista de comandos disponibles. A su vez, cada comando con los problemas de indicador -h o --help usa su descripción.

```
eggs howto
```
Muestre videos algunos consejos muy breves. Por el momento, arranque desde grub rescue y cómo configurar eggs.


```
eggs howto:grub
```
Cómo comenzar desde el rescue de grub.

```
eggs howto:configure
```
Cómo configurar eggs.

```
eggs info
```
Muestra la configuración de los huevos y el sistema en la pantalla. Es el único comando que se puede usar sin sudo.

```
sudo eggs install
```
Inicie el instalador de eggs cli. Alternativamente, con la opción -g o --gui, inicie calamares en su lugar.

Advertencia, el instalador de cli es más rápido que calamares, pero es MUY rudimentario y no recomendado para no expertos. ¡Borrará completamente el disco duro de destino! Úselo solo en máquinas o computadoras virtuales limpias o limpias.

```
sudo eggs kill
```
Eliminar las imágenes y el directorio de trabajo de eggs (el nido). Ejecute rm /home/eggs -rf para eliminar todas las iso creadas. También tiene un útil flag -u que, antes de continuar con la eliminación, intenta desmontar cualquier sistema de archivos presente en él.


```
sudo eggs prerequisites
```

Instale los paquetes deb necesarios para que los huevos funcionen. En particular, se instala lo siguiente:
```
isolinux, live-boot, live-boot-initramfs-tools, live-config-systemd, squashfs-tools, xorriso, xterm, whois
```

y en este caso si eliges instalar calamares:

```
calamares, qml-module-qtquick2, qml-module-qtquick-controls
```

Además de esto, se crean archivos de configuración.

```
sudo eggs produce
```

Este es el comando que usará más, de hecho, básicamente, el único junto con kill que sirve para deshacerse de las imágenes ISO creadas.

Usado sin parámetros, produce el ISO con compresión tipo xz. Compruebe también si los requisitos previos están instalados o no, y si se crean los archivos de configuración y, de hecho, produce la iso.

Tiene algunas flag utilizables:

```
-b, --basename=basename basename egg
-c, --compress max compression 
-f, --fast compression fast 
-h, --info show CLI help 
-v, --verbose verbose
```

Con mucho, el modo de uso que prefiero, personalmente es:

```
sudo eggs produce -fv
```

lo que me permite tener un remaster rápido y observar los diversos comandos lanzados en la pantalla.

```
sudo eggs skel
```

Con este comando recreamos el directorio /etc/skel de nuestro remix. Es útil dar un aspecto coherente y personalizado al usuario en vivo y a los futuros usuarios que crearemos una vez que nuestro sistema esté instalado. Básicamente, copia las configuraciones del usuario principal o el pasado con el indicador -u en la carpeta /etc/skel que luego se utilizará para generar el esqueleto del hogar de los usuarios creados.

Teniendo en cuenta que hay varios administradores de escritorio, gnome2, gnome3, cinnamon, mate, kde, lxqt, lxde, etc. y que se realiza una operación para limpiar posibles datos confidenciales, es un comando que siempre está en evolución. Actualmente es bastante confiable para cinnamon y para las pruebas que he realizado con los otros administradores de escritorio.

```
sudo eggs sterilize
```
Es el comando inverso de requisites, básicamente elimina los paquetes enumerados anteriormente, lo que hace que nuestro sistema ya no pueda reproducirse.

```
sudo eggs update
```
Actualice eggs a la versión actual. Advertencia, la actualización de eggs solo funciona con la versión empaquetada npm, para la versión lanzada como un paquete deb necesitaríamos un repositorio que actualmente no está disponible.





