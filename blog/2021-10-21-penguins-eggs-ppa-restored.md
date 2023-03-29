---
authors: pieroproietti
slug: penguins-eggs-ppa-restored
title: penguins-eggs-ppa
---

After a bit of trial and error I finally managed to recreate the ppa [penguins-eggs-ppa](https://pieroproietti.github.io/penguins-eggs-ppa/) repository.

This repository currently includes only the amd64 version, I don't know the method to include also the i386 and ARM versions.

I think it's not so difficult to create this repository with all architectures but, unfortunately, I'm not an expert in this field. If someone can help is, of course, welcome.

# Usage
Copy and past the follow two lines:

```
curl -SsL  https://pieroproietti.github.io/penguins-eggs-ppa/KEY.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/penguins-eggs-ppa-keyring.gpg
sudo curl -s --compressed -o /etc/apt/sources.list.d/penguins-eggs-ppa.list "https://pieroproietti.github.io/penguins-eggs-ppa/penguins-eggs-ppa.list"
```

Then
```
sudo apt update
sudo install eggs
```

After that you can continue following the [eggs official book](https://penguins-eggs.net/docs/tutorial-eggs/italiano.html). 
