---
title: F.A.Q.
authors: pieroproietti
slug: faq
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# `Error: ENOENT: no such file or directory, stat '/filesystem.squashfs' Code: ENOENT` #[411](https://github.com/pieroproietti/penguins-eggs/issues/411)

![error](https://private-user-images.githubusercontent.com/958613/399631752-6e72b640-002a-4e48-ae23-6915947791cd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzU4MDYzOTIsIm5iZiI6MTczNTgwNjA5MiwicGF0aCI6Ii85NTg2MTMvMzk5NjMxNzUyLTZlNzJiNjQwLTAwMmEtNGU0OC1hZTIzLTY5MTU5NDc3OTFjZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwMlQwODIxMzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZWVhMDJmN2FjNjg0ZjYyMjdmZjNlODgwOGIyYThmNmFlNTQ3MmY3NDg5NWYyM2FlZTNkMDI4ODY4MzI1ZGE1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.oSaDcemLik1mjje9lRjOMSGQtv1btJs04LqAcnc8Oig)

Use always `sudo eggs kill`, before to produce an ISO. The command `eggs love` already include this, so it's not necessary, but if you are creating an ISO using `sudo eggs produce` and get this error, just use `sudo eggs kill` before to it.

