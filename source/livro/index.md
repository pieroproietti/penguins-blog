---
title: livro
layout: page
date: 2020-06-20 07:38:32
---

# Introdução

Um sistema reprodutivo para pinguins!

Penguin's eggs nasceram com a idéia de "reprodução" e "seleção de populações" aplicadas aos sistemas operacionais.

Era a época do remastersys e do systemBack, dois dos programas mais populares para remasterizar um sistema operacional - em algum momento - ambos os remastersys, que sempre sofreram problemas de manutenção por parte do autor e que systembacks foram interrompidos de alguma forma. (Veja a nota)

Na verdade, por um tempo não houve problema, mas quando as "primeiras dores" começaram a não ser capazes de remasterizar as versões mais recentes das minhas distribuições favoritas, essencialmente Debian e derivados, o que era uma idéia, começaram a tomar forma.

Eu queria uma nova ferramenta, escrita em uma linguagem moderna comum a várias distribuições, com seu próprio sistema de empacotamento. A escolha recaiu sobre nodejs, com javascript, depois mudei para o texto datilografado como uma linguagem de desenvolvimento.

Imaginei um processo de produção de ovos, chamado **produce**, a operação de incubação - ou **install** - originalmente chamada **hatch**. Os outros comandos vieram por conta própria, com **kill** preferencial para abort para tirar os ISOs do caminho, **update** para atualizações, **prerequisites** para instalar os pacotes .deb necessários para o processo, **calamares** para a instalação e configuração do instalador gráfico.

Mais cedo ou mais tarde, como se trata de um ovo, também vou encontrar uma maneira de implementar um servidor PXE que o distribua pela rede local; no momento, além da intenção, existe o nome e só poderia ser **cuckoo** (cuco), a partir do comportamento do cuco que tem seus ovos chocados por outros.

O que outras pessoas estão dizendo

Nota: a situação systemBack não é mais a do início dos ovos. Recentemente, conheci o bom Franco Conidi (Edmond), que ainda cuida das atualizações.

# Instalação
Faça o download dos pacotes de instalação dos ovos ou use o código-fonte diretamente

## Pacote Debian
A instalação do pacote Debian é certamente a mais fácil. Basta baixar a versão mais recente do eggs no site sourceforge e instalar com o comando:

```bash
sudo dpkg -i eggs-7.5.81-1.deb
```

## Pacote npm (nodejs)

Sendo um software desenvolvido com nodejs, a versão original e preferível, e sempre a mais atualizada. Além disso, uma vez instalada, esta versão sempre pode ser atualizada simplesmente com o comando:

```bash
sudo eggs update
```

Para instalar esta versão, você deve primeiro instalar o pacote nodejs. A descrição de quais nodejs usar e como instalar nodejs são relatados no arquivo README, md incluído no repositório eggs.

A instalação dos ovos do pacote npm é simples e segura, apenas estes comandos:

```bash
sudo npm config set unsafe-perm true
sudo npm install penguins-eggs -g
```

Para atualizar o pacote - uma vez instalado - para as versões subseqüentes, apenas o comando:

```bash
sudo eggs update
```

### Uso de eggs do código fonte
O uso de eggs de fontes pode ser extremamente útil para debug e colaboração no desenvolvimento. Depois de baixar a fonte com o comando:

```bash
git clone https://github.com/pieroproietti/penguins-eggs
```

entrar depois, no diretório penguins-eggs e dê o comando:
```bash
cd penguins-eggs
npm install
```

Para desenvolvedores ou curiosos, será possível visualizar, relatar ou corrigir o código.


# Pré-requisitos e configuração
Coisas a fazer antes de iniciar a produção de ovos.

Depois que o pacote for instalado como na página anterior, teremos um novo comando em nosso sistema:

```bash
eggs
```

Comece os ovos sem nenhum comando, obteremos a lista de comandos disponíveis:


![eggs-senza-parametri](/images/eggs-senza-parametri.png)

A primeira coisa que precisamos fazer neste momento é permitir que os eggs baixem os pacotes Debian necessários para que ele funcione. Para fazer isso, basta executar o comando:


```bash
sudo eggs prerequisites
```

![eggs-senza-parametri](/images/eggs-prerequisites-yes-no.png)

Selecionar Yes aceitará a instalação dos pacotes necessários para o funcionamento do eggs e a produção de imagens iso. Basicamente, podemos dividir os pacotes instalados em três:

* Pacotes para Inicializar em Máquinas UEFI

* Pacotes para criar a imagem ISO

* Pacotes para o instalador gráfico calamares

Todas as embalagens para a operação de eggs e a produção de ISO são instaladas pelo comando:

```bash
eggs prerequisites
```

Ele instalará os seguintes pacotes: ```isolinux, live-boot, live-boot-initramfs-tools, lvm2, squashfs-tools, xorriso, xterm, whois```.

Neste ponto, se quisermos usar o instalador gráfico, o calamares também deverá ser instalado com o comando:

```bash
eggs calamares
```
que instalará calamares e os módulos qml-module-qtquick2, qml-module-qtquick-controls necessários para visualizar os slides durante a instalação do sistema.

## Realização de imagens ISO compatíveis com UEFI

se queremos que nossos ISOs sejam criados compatíveis com UEFI (aviso: isso só foi testado com o Debian Buster, provavelmente no Ubuntu ainda não funciona), devemos instalar o pacote grub-efi-amd64, com o comando:

```bash
apt install grub-efi-amd64
```

## File de configuração Penguins-eggs.conf
Normalmente, não é necessário intervir no **etc/penguins-eggs.conf**, o eggs é auto-configurado e se adapta às necessidades da presente distribuição. De qualquer forma, para a documentação, consulte os comentários no mesmo file.

Eu só quero ressaltar que, ao editar este arquivo, você pode alterar o nome do usuário ativo, a senha dele e a senha de administração.

Se você optou por não tocar no /etc/penguins-eggs.conf no momento, lembre-se de que, por padrão, o eggs está configurado com a evolução do usuário e da senha, a mesma senha é definida para o login raiz.

Se, em vez disso, você modificou ou excluiu o arquivo de configuração, sempre poderá restaurá-lo com o comando:

```bask
sudo eggs prerequisites -c
```

## eggs está pronto!

Bem, agora estamos finalmente prontos para usar ovos para a reprodução do nosso pinguim.

Nota: caso desejemos criar uma imagem inicializável no modo UEFI e instalamos o grub-efi-amd64 após a instalação dos pré-requisitos, precisamos editar o arquivo **/etc/penguins-eggs.conf** e definir **make_efi = yes**.


# Os comandos
Comandos e opções de Eggs

## Controles e opções
O eggs precisam de direitos de root, portanto - exceto informações sobre o eggs - DEVE ser chamado precedido por da **sudo**.

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

Não se assuste com esses poucos comandos, os que você usará são essencialmente dois: produce para criar o ISO e kill para excluí-lo.

Cada comando pode ter alguns flag, o mais importante dos quais é o flag -f o --fast do comando produce, que permitirá que o eggs usem lz4 como um algoritmo de compactação em vez do xz padrão, permitindo assim economizar muito tempo durante as fases desenvolvimento do seu remix.

Outro flag importante e presente em quase todos os casos é o flag -v ou --verbose, que mostrará na tela a sucessão dos vários comandos.

Vamos ilustrar os comandos em ordem alfabética estrita, para a conveniência do escritor. Lembre-se de que os comandos que você normalmente usa são kill e produce.

```bash
eggs adjust
```

Adapta o vídeo aos recursos do monitor ou ao tamanho da janela no caso de uma máquina virtual. Eu acho muito conveniente redimensionar máquinas virtuais com interfaces gráficas diferentes do cinnamon, gnome3 e kde, para as quais não é necessário. Basicamente, eggs chama xrandr para adaptar a tela à resolução atual.


```bash
eggs calamares
```

Instale e configure o instalador gráfico universal calamares. Também pode ser usado no caso de um ISO feito sem calamares e que, durante a instalação, você deseja instalar com ele.

```bash
eggs help
```
Como o próprio comando diz, ele gera a lista de comandos disponíveis. Por sua vez, cada comando com os problemas de sinalizador -h ou --help usa sua descrição.


```bash
eggs howto
```

Mostre ao vídeo algumas dicas muito curtas. No momento, inicialize a partir do grub rescue e como configurar o eggs.

```bash
eggs howto:grub
```
Como começar do resgate grub.

```bash
eggs howto:configure
```

Como configurar o eggs.

```bash
eggs info
```

Mostre a configuração dos ovos e o sistema na tela. É o único comando que pode ser usado sem o sudo.


Inicie o instalador de eggs cli. Como alternativa, com a opção -g ou --gui, inicie o calamares. 

```bash
eggs install
```

Atenção, o instalador do cli é mais rápido que o calamares, mas é MUITO rudimentar e não é recomendado para não especialistas. Ele apagará completamente o disco rígido alvo! Use-o apenas em máquinas ou computadores virtuais limpos ou limpos.

```bash
eggs kill
```

Exclua as imagens e o diretório de trabalho do eggs (o ninho). Execute **rm /home/eggs -rf** para excluir todo o iso criado. Ele também possui um flag útil -u que, antes de prosseguir com a remoção, tenta desmontar qualquer sistema de arquivos presente nele.

```bash
eggs prerequisites
```

Instale os pacotes deb necessários para os ovos funcionarem. Em particular, o seguinte está instalado:

'isolinux', 'live-boot', 'live-boot-initramfs-tools', 'live-config-systemd', 'squashfs-tools', 'xorriso', 'xterm', 'whois'

e, se você optou por instalar calamares:

calamares', 'qml-module-qtquick2', 'qml-module-qtquick-controls'

Além disso, os arquivos de configuração são criados.


```bash
eggs produce
```

Este é o comando que você mais usará, na verdade, basicamente o único, juntamente com o kill, usado para se livrar das imagens ISO criadas.
Utilizado sem parâmetros, produz o ISO com compressão tipo xz. Verifique também se os pré-requisitos estão instalados ou não e se os arquivos de configuração foram criados e, de fato, ele produz o iso.
Possui algumas flag utilizáveis:

```
-b, --basename=basename basename egg
-c, --compress max compression 
-f, --fast compression fast 
-h, --info show CLI help 
-v, --verbose verbose
```

De longe o modo de uso que eu prefiro, pessoalmente é:

```
eggs produce -fv
```

o que me permite ter uma remasterização rápida e observar os vários comandos lançados na tela.


```
eggs produce -fv
```

```
eggs skel
```

Com este comando, recriamos o diretório / etc / skel do nosso remix. É útil para dar uma aparência coerente e personalizada ao usuário ativo e aos futuros usuários que criaremos quando o sistema estiver instalado. Essencialmente, copia as configurações do usuário principal ou do usuário passado com o sinalizador -u na pasta **/etc/skel**, que será usada para gerar o esqueleto da casa dos usuários criados.

Considerando que existem vários gerenciadores de desktop, gnome2, gnome3, cinnamonn, mate, kde, lxqt, lxde, etc, e que uma operação é executada para limpar possíveis dados confidenciais, é um comando que está sempre evoluindo. Atualmente, é bastante confiável para cinnamon e, para os testes que fiz com os outros Desktop Managers.

```
eggs sterilize
```

É o comando inverso dos pré-requisitos, basicamente remove os pacotes listados acima, tornando nosso sistema não mais capaz de se reproduzir.


```
eggs update
```

Atualize o pacote de ovos para a versão atual. Atenção, a atualização do eggs funciona apenas com a versão empacotada npm, para a versão lançada como um pacote deb, precisaríamos de um repositório que não está disponível no momento.


# Vamos criar nosso próprio remix

A criação do nosso remix iso é um processo que requer paciência e paixão, mas pode nos dar uma grande satisfação e, em muitos casos, em última análise, economizará tempo e esforço.

## Pré-requisitos

Instalamos nossa distribuição Debian Buster ou derivada favorita e instalamos o eggss com um dos métodos descritos acima.

Instalamos o eggs e certifique-se de carregar os pré-requisitos e criar os arquivos de configuração, dando o comando:

```
eggs prerequisites
```

Além de instalar os vários pacotes Debian necessários, o arquivo de configuração com as configurações padrão será criado. Encontre o arquivo de configuração em **/etc/penguins-eggs.conf** e você pode editá-lo para modificar as configurações. Encontre a documentação das opções usadas diretamente nos comentários do próprio arquivo.

Nesse ponto, o eggs está pronto para trabalhar e criar a imagem iso do nosso sistema.


## Adicionado instalador gráfico Calamares
Se você deseja usar o calamares como instalador gráfico, é melhor instalá-lo agora.

Apenas continue com o comando:

```
eggs calamares
```

Como alternativa, se você não quiser calamares, edite o arquivo de instalação **/etc/penguins-eggs.conf** e defina **force_installer = No** o egg não será instalado em seu nome.

Posteriormente, essa imagem deve ser colocada em um stick ou em um disco de DVD e pode ser reinstalada com o instalador gráfico da calamares ou - de maneira mais espartana - com seu próprio instalador cli. Para o calamares do instalador gráfico, deixe o arquivo de configuração como está, enquanto se você decidir não usá-lo, precisará editar o arquivo de configuração **/etc/penguins-eggs.com** e colocar **force-installer = no**.

Eu também recomendo a instalação do bleachbit, porque isso permitirá limpar facilmente nossos remixes sem queimar dados inúteis. Você também pode fazer isso no terminal com o comando:

```
apt install bleachbit
```

## Vamos limpar nosso sistema

Primeiro - por isso instalamos o bleachbit - sugiro que você limpe seu sistema.

Normalmente, o bleachbit limpa tudo, exceto a localização - caso contrário, os idiomas estrangeiros não funcionam - liberam espaço em disco e memória.


![bleachbit-selezione](/images/bleachbit-selezione.png)
