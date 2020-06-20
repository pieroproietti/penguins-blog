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


