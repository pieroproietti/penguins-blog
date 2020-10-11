---
title: guia de usuario
layout: page
lang: pt_BR
date: 2020-06-20 07:38:32
---
# Índice
* [Introdução](#introdução)
* [Instalação](#instalação)
* [Pré-requisitos e configuração](#prerequisites-e-configuração)
* [Os comandos](#i-comandos)
* Vamos fazer nossa própria remixagem * (*cream-our own-remix)
* [Baixar imagens ISO](#download-images-iso)

# Atualização
Este manual do usuário de eggs de pingüim é atualizado para 9 de outubro de 2020, eggs-7.6.57-1.deb. 

# Introdução

Um sistema de criação para pinguins!

Os penguin's eggs nasceram com a idéia de "reprodução" e "seleção da população" aplicada aos sistemas operacionais. 

Era o tempo de Remastersys e Systemback, dois dos programas mais populares para remasterizar um sistema operacional - em um ponto - ambos Remastersys, que sempre sofreram de problemas de manutenção por seu autor, e Systemback foram de alguma forma descontinuados. _ver* nota**__

Na verdade, por um tempo não houve nenhum problema, mas quando as "primeiras dores" começaram a começar, para que eu não pudesse mais remasterizar as últimas versões de minhas distros favoritas, essencialmente Debian e derivado, o que era uma idéia, começou a tomar forma.

Eu queria uma nova ferramenta, escrita em uma linguagem moderna comum a várias distribuições, com seu próprio sistema de embalagem. A escolha recaiu sobre nodejs, com javascript, então mudei para typescript como a linguagem de desenvolvimento.

Imaginei um processo de produção de eggs, chamado produce (produção), a operação de nascimento - ou install - originalmente chamada hatch (eclosão). Os outros comandos vieram por si mesmos com kill preferindo abort para se livrar da iso produzida, update para atualizações, prerequisitess para instalar os pacotes .deb necessários para o processo, calamares para a instalação e configuração do instalador gráfico.

Cedo ou tarde, sendo um ovo, encontrarei também uma maneira de implementar um servidor PXE que o distribua através da rede local, no momento além da intenção de que haja o nome e não poderia ser esse coocku (cuco), pelo comportamento do cuco que faz os outros chocarem seus eggs.



**Nota**: _a situação do Systemback na verdade não é mais a do início dos eggs. Recentemente conheci o bom Franco Conidi que ainda o mantém em dia.

# Instalação

Coisas a fazer antes de começarmos a fazer eggs.

### Pacote Debian

A instalação como um pacote Debian é certamente a mais fácil. Basta baixar a última versão dos eggs de [sourceforge](https://sourceforge.net/projects/penguins-eggs/files/DEBS/) e instalá-la com o comando:

```
sudo dpkg -i eggs-7.6.57-1.deb
```

A versão .deb inclui nodejs para que você não precise deste pacote. 

### Pacote npm (nodejs)

Sendo os eggs um software desenvolvido com nodejs, a versão original pode ser a preferida, é sempre a mais atualizada. Além disso, uma vez instalado, ele pode ser atualizado para as seguintes versões com o comando `sudo eggs update`.

Para instalar esta versão é necessário, portanto, instalar primeiro o pacote nodejs. A descrição de quais nodejs usar e como instalar nodejs está descrita no arquivo README,md incluído no [repositório de eggs](https://github.com/pieroproietti/penguins-eggs).

A instalação de eggs da embalagem npm é simples e segura, somente estes comandos:

```
sudo npm config set unsafe-perm true
sudo npm instalar pingüins-eggs -g
```

Para atualizar o pacote - uma vez instalado - para as versões subseqüentes, basta usar o comando

```
sudo eggs update
```

### Usando eggs do código fonte

O uso de eggs de fontes pode ser extremamente útil tanto para a depuração como para a colaboração no desenvolvimento. Uma vez que você tenha feito o download da fonte com o

```
git clone https://github.com/pieroproietti/penguins-eggs
```

depois entrar no diretório de pinguins-eggs e dar o comando

```
npm install
```

Neste ponto, a partir do próprio diretório de pinguins-eggs, você pode usar a fonte diretamente. Por exemplo:

```
sudo ./eggs produz -fv
```

Para os desenvolvedores ou curiosos, será possível ver, relatar ou corrigir o código. 


---

# Pré-requisitos e configuração

Uma vez instalado o pacote, como na página anterior, teremos um novo comando em nosso sistema: 

```
eggs
```

Iniciamos os eggs sem nenhum comando e obtemos a lista de comandos disponíveis:

![eggs-commands](/images/eggs-commands.png)

### Tornando as imagens iso compatíveis com a UEFI

Embora nas versões anteriores, os pré-requisitos eram necessários antes que uma iso pudesse ser produzida, agora também é possível começar diretamente com:
```
sudo eggs produce
```

eggs, detectada a ausência dos pré-requisitos necessários, prosseguirá com a instalação. Durante esta fase, você também será perguntado, se estamos em um ambiente gráfico, se você deseja instalar lulas. Recomendo vivamente responder "sim" e os pré-requisitos serão carregados, possivelmente os pacotes para EFI, lulas e os links necessários. 

### eggs prerequisites

Para fazer funcionar os eggs são necessárias algumas ferramentas instaladas, os pré-requisitos. Para baixar os pacotes Debian necessários para que ele funcione, basta executar o comando

```
eggs prerequisites
```
![eggs-prerequisites](/images/eggs-prerequisites.png)

A seleção de Sim aceita a instalação das embalagens necessárias para a operação dos eggs e a produção de imagens iso. Basicamente, podemos dividir os pacotes instalados em quatro:

* pacotes para inicializar em máquinas UEFI
* pacotes de criação de imagens iso
* pacotes de instaladores gráficos calamares
- pacotes de localização

Todas as embalagens para operação de eggs e produção de iso são instaladas pelo controle:

```
sudo eggs prerequisites
```

que instalará então os seguintes pacotes:

* grub-efi-amd64
* isolinux, syslinux, rsync, squashfs-tools, xorriso, xterm, whois, live-boot, live-boot-initramfs-tools
* calamares, qml-module-qtquick2, qml-module-qtquick-controls
* live-task-localisation, task-italian, task-english, task-spanish, task-brazilian-portuguese, task-french, task-german

Os arquivos de localização só serão instalados para o Debian/Devuan, também, serão instalados com a opção sem recomendações de instalação, caso contrário, todos os idiomas seriam instalados.

### Diretório de configuração penguins-eggs.d

Normalmente não é necessário intervir em /etc/penguins-eggs.d/eggs.conf. eggs auto-configuráveis para atender às necessidades da atual distro. De qualquer forma, para documentação, consulte os comentários sobre o mesmo arquivo e o README.md no diretório.

Quero apenas ressaltar que editando /etc/penguins-eggs.d/eggs.conf você pode mudar tanto o nome do usuário ao vivo, sua senha e a senha de administração.

No momento não é possível modificar as variáveis de locales e locales, adicionando ou removendo neggs idiomas para instalar na versão ao vivo. No entanto, sempre será possível obter o sistema instalado em todos os idiomas disponíveis.

Se você optou por não tocar /etc/penguins-eggs.d/eggs.conf por enquanto, lembre-se que por padrão os eggs são configurados com o usuário **live** e senha **evolution**, a mesma senha é configurada para login de root.

Se você modificou, arruinou ou apagou o arquivo de configuração, você pode sempre restaurá-lo com o comando:

```
sudo eggs prerequisites -c
```

### eggs está pronto!

Bem, agora estamos finalmente prontos para usar eggs para criar nosso pinguim.


---

# Os controles

### Comandos e opções 

Os eggs precisam de direitos de raiz, portanto - exceto para informações sobre eggs e comandos de exportação - devem ser chamados precedidos de `sudo`.

* adapt
* calamares
* export
* help
* info
* install
* kill
* prerequisites
* produce
* sterilize
* tools
* update

Não se assuste com estes poucos comandos, há essencialmente dois que você usará: produce para criar a iso e kill para apagá-la.

Cada comando pode ter algumas bandeiras, a mais importante das quais é a bandeira -f ou --fast do comando produce, que permitirá que os eggs utilizem lz4 como algoritmo de compressão ao invés do xz padrão, poupando muito tempo durante o desenvolvimento de sua remixagem. 

Outra bandeira certamente para conhecer e apresentar em quase todos os casos é a bandeira -v ou --verbose que mostrará na tela a sucessão dos vários comandos. Para as bandeiras restantes basta digitar o comando -h para obter a lista e a descrição.

Vamos ilustrar os comandos em ordem alfabética rigorosa, para a conveniência do escritor. Tenha em mente que os comandos que você normalmente usará são principalmente produzir e matar.

#### eggs adapt

Adaptar o vídeo às capacidades do monitor ou ao tamanho da janela, no caso de uma máquina virtual. Acho muito conveniente para redimensionar máquinas virtuais com interfaces gráficas de usuário que não sejam canela, gnome3 e kde, para as quais não é necessário. Na prática, os eggs lembram o xrandr para adaptar a tela à resolução atual. Não está estritamente relacionado com a produção de ISO, mas eu o considero indispensável no desenvolvimento.

### sudo eggs calamares
Configurar o instalador gráfico calamares. Também pode ser usado para configurar uma iso que - produzida sem calamares - você deseja instalar com ela. Basta dar o comando: sudo eggs calamares -i e você terá tanto a instalação quanto a configuração do pacote.

```
command: calamares

USAGE
  $ eggs calamares

OPTIONS
  -h, --help     show CLI help
  -i, --install  install calamares and it's dependencies
  -v, --verbose

  --final        final: remove eggs prerequisites, calamares and all it's 
                 dependencies

  --theme=theme  theme/branding for eggs and calamares

EXAMPLES
  ~$ sudo eggs calamares 
  install calamares and create configuration
```

### eggs export
```
export package eggs-v7-6-x-1.deb in the destination host

USAGE
  $ eggs export:COMMAND

COMMANDS
  export:deb   export package eggs-v7-6-x-1.deb in the destination host
  export:docs  export docType documentation of the sources in the destination host
  export:iso   export iso in the destination host
```
#### export:deb
exporta pacotes debian;

#### export:docs
exporta a documentação;

#### export:iso
imagem iso exportação

Você pode modificar tanto o host de exportação quanto o caminho associado à vontade, note que este comando é conveniente especialmente para desenvolvedores.

#### eggs help

Como diz o próprio comando, ele gera a lista de comandos disponíveis. Por sua vez, cada comando com a bandeira -h ou --help utiliza sua descrição.

#### eggs info

Mostrar na tela a configuração dos eggs e do sistema. É o único comando que pode ser usado sem suar.

![eggs-info](/images/eggs-info.png)

### sudo eggs install

Lançar o instalador de eggs Cli Cli. 

Alternativamente com a opção -g ou --gui lança a lula em seu lugar.

Atenção, o cliente instalador é mais rápido que a lula, mas é MUITO rudimentar e não é recomendado para não especialistas. Ele irá apagar completamente o disco rígido alvo! Use-o somente em máquinas ou computadores virtuais limpos ou limpos.

### sudo eggs kill

Ele elimina as imagens feitas e o diretório de trabalho dos eggs (o ninho). Executar rm /home/eggs -rf para excluir todos os isos criados. 
Em caso de interrupção da produção do comando, será impossível apagar os diretórios montados. O caminho mais curto é uma reinicialização e o próximo lançamento do comando.

```
command: kill

kill the eggs/free the nest

USAGE
  $ eggs kill

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  verbose

EXAMPLE
  $ eggs kill
  kill the eggs/free the nest
```

### sudo eggs prerequisites

Instalar as embalagens deb necessárias para a operação de eggs. 

Podemos dividir os pacotes necessários em três partes:
* embalagens necessárias para executar eggs: isolinux, syslinux, rsync, squashfs-tools, xorriso, xterm, whois, live-boot, live-boot-initramfs-tools;
* pacotes necessários para o funcionamento do instalador de calamares: calamari, qml-module-qtquick2, qml-module-qtquick-controls
* pacotes de localização (somente debian e devuan). Atualmente, temos duas variáveis no arquivo de eggs.cfg que definem o idioma; locale e locales. Estas variáveis, com o tempo de "maturação" necessário, se tornarão editáveis pelo usuário. No momento é aconselhável não tocá-los, e eles incluem locais para italiano, inglês, espanhol, português, francês e alemão. Também serão instalados os seguintes pacotes: task-italian, task-english, task-spanish, task-brazilian-portuguese, task-french, task-german e task-live-localisation.

Além disso, o diretório /etc/penguins-eggs.d, todos os arquivos de configuração e links necessários são criados.

```
command: prerequisites

install packages prerequisites to run eggs

USAGE
  $ eggs prerequisites

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  verbose

EXAMPLE
  ~$ eggs prerequisites
  install prerequisites and create configuration files
```
### sudo eggs produce

Este é o comando que você mais usará, na verdade basicamente o único usado diariamente, junto com a kill que serve, em vez disso, para se livrar das imagens iso criadas.

Utilizado sem parâmetros, produz a iso com compressão tipo xz. Quando começa, verifica a instalação dos pré-requisitos, não de calamares, e produz a iso.

Tem algumas bandeiras utilizáveis:

```
command: produce

livecd creation. The system produce an egg

USAGE
  $ eggs produce

OPTIONS
  -b, --basename=basename  basename egg
  -c, --compress           max compression
  -f, --fast               fast compression
  -h, --help               show CLI help
  -s, --script             script mode. Generate scripts to manage iso build
  -v, --verbose            verbose
  --adapt                  adapt video resolution in VM

  --final                  final: remove eggs prerequisites, calamares and all 
                           it's dependencies

  --ichoice                allows the user to choose the installation type 
                           cli/gui

  --pve                    administration of virtual machines (Proxmox-VE)

  --rsupport               remote support via dwagent

  --theme=theme            theme/branding for eggs and calamares

ALIASES
  $ eggs spawn
  $ eggs lay

EXAMPLES
  $ sudo eggs produce 
  produce an ISO called [hostname]-[arch]-YYYY-MM-DD_HHMM.iso, compressed xz 
  (standard compression).
  If hostname=ugo and arch=i386 ugo-x86-2020-08-25_1215.iso

  $ sudo eggs produce -v
  the same as the previuos, but with more explicative output

  $ sudo eggs produce -vf
  the same as the previuos, compression lz4 (fast compression, but about 30%
  less compressed compared xz standard)

  $ sudo eggs produce -vc
  the same as the previuos, compression xz -Xbcj x86 (max compression, about 10%
  more compressed compared xz standard)

  $ sudo eggs produce -vf --basename leo --theme debian --adapt 
  produce an ISO called leo-i386-2020-08-25_1215.iso compression lz4,
  using Debian theme and link to adapt

  $ sudo eggs produce -v --basename leo --theme debian --adapt 
  produce an ISO called leo-i386-2020-08-25_1215.iso compression xz,
  using Debian theme and link to adapt

  $ sudo eggs produce -v --basename leo --rsupport 
  produce an ISO called leo-i386-2020-08-25_1215.iso compression xz, using eggs
  theme and link to dwagent

  $ sudo eggs produce -vs --basename leo --rsupport 
  produce scripts to build an ISO as the previus example. Scripts can be found
  in /home/eggs/ovarium and you can customize all you need

```
De longe o modo de uso que eu prefiro, pessoalmente é

```
sudo eggs produce -fv --adapt
```

o que me permite ter uma rápida remasterização, observar na tela os vários comandos lançados e ter na área de trabalho o link para redimensionar e o vídeo final.

Entre as bandeiras disponíveis, há um tema que define um tema para eggs e calamares. Você pode criar um tema personalizado, simplesmente copiando seu uso existente e mudando seu nome e conteúdo. Os temas dos eggs estão em ./addons/${vendor}/tema, em breve acrescentarei também a possibilidade de mudar o tema para isolinux e grub para o live boot.

Outra bandeira, introduzida é --final que prepara lulas para remover programas não necessários pelo usuário final: executa a mesma ação que o comando de esterilização de eggs, mas através de lulas durante a instalação do sistema.

### eggs tools

```
clean system log, apt, etc

USAGE
  $ eggs tools:COMMAND

COMMANDS
  tools:clean     clean system log, apt, etc
  tools:initrd    Test initrd
  tools:locales   install/clean locales
  tools:sanitize  sanitize
  tools:skel      update skel from home configuration
  tools:yolk      configure eggs to install without internet
```
tools é um coletor de comandos que contém algumas ferramentas úteis durante o processamento. Alguns deles, se não a maioria, vendem diretamente chamados por produce durante a criação da ISO, em particular: clean, locaies, yolk.


#### sudo eggs tools:clean 
```
clean system log, apt, etc

USAGE
  $ eggs tools:clean

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  verbose
```

Limpa arquivos de log, cache apt, etc. Economiza espaço na ISO que você cria e reduz o tempo de espera para criação;

#### sudo eggs tools:initrd 

```
Test initrd

USAGE
  $ eggs tools:initrd

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
  --check=check  check if necessary to clean initrd.img
  --clean=clean  clean the initrd.img
```
Atualmente experimental. Remove a criptosetup e resume do initrd.img destinados ao liveCd;

#### sudo eggs toos:locales 

```
install/clean locales

USAGE
  $ eggs tools:locales

OPTIONS
  -h, --help       show CLI help
  -r, --reinstall  reinstall locales
  -v, --verbose    verbose

```
Atualmente experimental. Configure apenas no Debian/Devuan um conjunto de idiomas especificados em /etc/penguins-eggs-d/eggs.conf que você deseja suportar;

#### sudo eggs tools:sanitize 

remove de um projeto existente e arquivos gerados a partir de versões anteriores de eggs que podem esconder bugs ou criá-los (recomendado na mudança de versão);

#### sudo eggs tools:skel
Este comando recria o diretório /etc/skel de nossa remix. É útil dar um olhar coerente e personalizado ao usuário ao vivo e aos futuros usuários que criaremos assim que nosso sistema for instalado. Essencialmente copia as configurações do usuário primário ou passado com a bandeira -u no diretório /etc/skel que será então usada para gerar o esqueleto home dos usuários criados.

Considerando que existem vários gerentes de desktop, gnome2, gnome3, cinnamon, mate, kde, lxqt, lxde, etc. e que uma operação de limpeza de possíveis dados sensíveis é feita, é um comando sempre em evolução. Atualmente é bastante confiável para a cinnamon e, para os testes que fiz com os outros Desktop Managers.

```
update skel from home configuration

USAGE
  $ eggs skel

OPTIONS
  -h, --help       show CLI help
  -u, --user=user  user to be used
  -v, --verbose

EXAMPLE
  $ eggs skel --user mauro
  desktop configuration of user mauro will get used as default
```

#### sudo eggs tools:yolk

```
configure eggs to install without internet

USAGE
  $ eggs tools:yolk

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLE
  $ eggs yolk -v

```

O comando yolk cria um pequeno repositório local em /usr/local/yolk com os pacotes estritamente necessários para garantir a instalação do sistema mesmo sem uma conexão com a Internet. Yolk é SEMPRE chamada de produce, portanto seu uso não é necessário, exceto para os mais curiosos.


### sudo eggs sterilize

É o comando inverso de prerequisites, basicamente remove os pacotes listados acima, tornando nosso sistema incapaz de reproduzir.

```
command: sterilize

remove all packages installed as prerequisites and calamares

USAGE
  $ eggs sterilize

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  verbose
```

### sudo eggs update

Atualização de eggs. Funciona de forma diferente dependendo se a instalação dos eggs foi feita com a embalagem npm do nodejs ou com a embalagem debian. No primeiro caso, atualizar diretamente os eggs para a versão atual, caso contrário, sugerir as etapas de atualização via apt (se o repo para eggs estiver incluído) ou baixando o pacote e instalando-o via dpkg.

# Vamos criar nosso próprio remix
A criação de um iso nosso remix é um processo que requer paciência e paixão, mas pode nos dar grande satisfação e, em muitos casos, em última análise, nos poupar tempo e esforço.

Nós baixamos nossa distribuição que pretendemos personalizar, escolhendo entre Debian buster, Debian bullseye, Devuan beowulf, ubuntu bionic, ubuntu focal e, a partir de hoje, ubuntu groovy.

Vamos instalá-lo normalmente, talvez atualizá-lo e fazer nossas primeiras mudanças antes de passarmos à criação da ISO.

## Pré-requisitos

Instalamos os eggs, baixando-os de [sourceforge](https://sourceforge.net/projects/penguins-eggs/files/packages-deb/).

O comando para a instalação é o simples:

```
sudo dpkg -i eggs_7.6.57-1_amd64.deb
```

Bem, neste ponto, vamos nos certificar de carregar os pré-requisitos e criar os arquivos de configuração, dando o comando

```
sudo eggs prerequisites
```

Além de instalar os vários pacotes Debian necessários, o diretório de configuração /etc/penguins-eggs.d será criado e o arquivo eggs.conf com as configurações padrão configuradas dentro dele.  Encontre o arquivo de configuração em /etc/penguins-eggs.d/eggs.conf e você pode editá-lo para alterar as configurações. Você pode encontrar a documentação das opções utilizadas diretamente nos comentários do próprio arquivo.

Agora os eggs estão prontos para funcionar e criar a imagem iso do nosso sistema. 

### Produção ISO

Uma vez que os eggs e seus pré-requisitos estejam instalados, estamos prontos para o grande salto.

```
sudo eggs produce -v
```

Com este comando você inicia a construção do _ovo de pinguim_, que consiste basicamente de três etapas:

* criação de uma imagem fs montada sobreposta - que é instantânea e sem qualquer cópia de dados - para permitir modificações para o sistema de arquivos de imagem;
* compressão de todo o sistema de arquivos para /home/eggs/ovarium/iso/live/filesystem.squashfs;
* geração da imagem iso da estrutura anterior em /home/eggs/basename-X64\_YYYYY-MM-GGG-HHMM.iso

O processo tem um certo peso - inútil escondê-lo - não o culpe nem com a cópia do sistema de arquivos que você não faz, nem com a interface gráfica - já que você não o usa. 

O peso é que temos que comprimir todo o sistema de arquivos. 

Durante os ensaios, no entanto, ou sempre que achar apropriado, recomendo o uso de produtos com a opção -f ou --fast. Ao fazer isso, será utilizado o algoritmo de compressão `lz4` em vez do "mais pesado" `xz` e reduzirá pela metade o tempo de execução. Para a versão final, uma vez verificado que tudo está bem, podemos usar a compressão padrão para obter uma iso mais enxuta, ou a opção -c --comprimir que comprime um pouco mais, ao preço de mais lentidão.

Como também foi mencionado inicialmente no código, a sugestão é tomar um café nesse meio tempo e tentar reservar poder de processamento suficiente para a máquina. No meu caso - eu uso uma máquina virtual com 4 core e 4 GB de memória - para um sistema de arquivos de 7/8 GB leva cerca de _ten minutos_ com compressão xz, enquanto que a compressão lz4 reduz a espera apenas um _minuto e meio_.  Para o café não fazemos mais a tempo, um cigarro dói e a imagem resultante muda para _3,0 GB_ comparado com os _2,00_ GB de compressão xz \ (Veja **notas***).

Apenas uma recomendação. Normalmente você dá este comando na máquina onde você trabalha e talvez já tenha produzido uma versão anterior. Recomendo apagar imagens anteriores com o comando `sudo eggs kill` que remove toda a árvore de diretório sob /home/eggs.

**No entanto, nem tudo é ruim. Se considerarmos que atualmente os DVDs são usados relativamente pouco e as pen drives estão ficando cada vez mais rápidas, há casos em que nosso remix pode ser mais otimizado com um sistema de arquivos maior, mas menos comprimido! Na verdade, considerando que durante o uso - escondido de nossos olhos - haverá um processo contínuo de leitura e descompressão do sistema de arquivos, a descompressão xz é mais lenta do que lz4._ 

Mantendo em mente que não há mais o limite de tamanho de imagem iso a 4 GB, a solução de sempre usar lz4 poderia ser duplamente vantajosa, especialmente no caso de uso com máquinas virtuais que - quase sempre - lêem diretamente o arquivo de imagem no disco rígido ao invés de um DVD real.  Além disso, todos os principais programas de criação de unidades flash inicializáveis lêem arquivos iso._. 

_Por que então produzir formatos diferentes?

_Ventualmente, você poderia criar a iso com lz4 e depois comprimi-la com xz para aliviar os uploads e downloads na internet_.



---
# Download de imagens ISO feitas com eggs
Imagens das remisturas feitas pelo autor.

## Prefácio

Aqui estão uma série de remixes feitos por mim e criados com penguin's eggs. Não é meu objetivo fazer um novo remix, eu prefiro construir e manter o pacote. Mas mesmo neste caso, o ditado diz: o ovo ou a galinha nasce primeiro? E eu faço alguns remixes e continuo propondo-os.

Eles são essencialmente versões do Debian Buster, Devuan beowulf, Linux Mint, etc. 

Eles são atualmente derivados online do Debian Buster: 

* Less é uma versão muito leve, lxde-core -- sem receitas de instalação -- e apenas o que é necessário para o desenvolvimento dos eggs, que normalmente uso. 

* debu, mais confortável e refinado, cinnamon como mesa de trabalho, sempre com ferramentas de desenvolvimento e tudo o que você precisa para escritório, design, desenvolvimento etc. Esta distro mais completa só está errada - em comparação com menos - que sendo relativamente grande, 1,9GB em comparação com 900KB de menos demora mais tempo para "brincar".

Há também uma versão ainda mais leve do buster Debian, chamada naked (nua) sem interface gráfica e, por esta mesma razão, adequada como base para fazer seu próprio remix.

Recomendo basicamente debu ou less para aqueles que querem participar do desenvolvimento, naked para aqueles que querem começar de uma base e depois proceder para criar seu próprio remix. Interessante também a incubador que é basicamente uma versão do buster com a adição do ambiente de virtualização proxmox-ve, baseado em kvm, virt-viewer e ferramentas necessárias.

Uma nota separada para alguns remixes i386, sempre feitos com eggs. Poderia ser interessante patricia-i386, um remake de linux mint 19.3 tricia xfce, fino e elegante o suficiente para ser usado em computadores mais antigos. Ainda mais leve é bionic-i386 criado a partir de lubuntu-18.04 bionic mas, é claro, ainda mais fino.

### Onde posso fazer o download da iso

Todas as versões podem ser baixadas de **sourgeforge.net** procurando pelo projeto [pinguins-eggs](https://sourceforge.net/projects/penguins-eggs/files/).

#### Usuário e senha

Todas as distribuições mostradas aqui são definidas com usuário ao vivo e usuário root.

* live/evolution
* root/evolution

# Apoio e relatórios

eggs é um projeto que atualmente permite remasterizar várias versões de linux. 

- debian buster/bullseyes/stretch
- devuan beowulf
- ubuntu bionico/focal/groovy

É evidente que o desenvolvedor não pode testar fisicamente cada lançamento em todas as versões consideradas, acrescentando a necessidade de testes tanto em máquinas uefi quanto em máquinas bios padrão.

É importante, portanto, que os usuários relatem problemas.

Você pode relatar problemas na página [issue](https://github.com/pieroproietti/penguins-eggs/issues) do projeto pinguins-eggs no github.com.

Você também pode entrar em contato comigo via chat, no site https://gitter.im/penguins-eggs.

# Comunidade
Uma comunidade de usuários é fundamental para o crescimento de um projeto, criando algo versátil e prático serve basicamente relativamente pouco se as pessoas não conhecem o produto e, por outro lado, tendo um bom número de usuários, fornece feedback e motivação aos desenvolvedores, melhorando assim a qualidade do próprio projeto.

Você pode facilitar a propagação dos eggs e contribuir para seu crescimento de diversas maneiras:

* junte-se ao grupo facebook [penguin's eggs](https://www.facebook.com/groups/128861437762355)

* marque o projeto em [github.com](https://github.com/pieroproietti/penguins-eggs) com uma estrela;

* avaliar este projeto em [sourceforge](https://sourceforge.net/projects/penguins-eggs/) e/ou criar uma revisão na mesma página.

# Ação de Graças
Se você chegou até aqui, sem a ajuda do botão de rolagem rápida, você usou parte de seu tempo - um recurso valioso - para me seguir neste caminho e, portanto, é meu dever e - ainda mais desejo - agradecer-lhe por seu interesse. 

Obrigado a todos vocês e... feliz hacking!

Piero Proietti 

