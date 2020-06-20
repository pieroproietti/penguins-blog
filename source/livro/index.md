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





