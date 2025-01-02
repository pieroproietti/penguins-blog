---
title: F.A.Q.
authors: pieroproietti
slug: faq
lang: it
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# `Error: ENOENT: no such file or directory, stat '/filesystem.squashfs' Code: ENOENT #411`

![](https://private-user-images.githubusercontent.com/958613/399631752-6e72b640-002a-4e48-ae23-6915947791cd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzU4MDUyODUsIm5iZiI6MTczNTgwNDk4NSwicGF0aCI6Ii85NTg2MTMvMzk5NjMxNzUyLTZlNzJiNjQwLTAwMmEtNGU0OC1hZTIzLTY5MTU5NDc3OTFjZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwMlQwODAzMDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YjE3YTU0ZDAwYWI4NWYzMDdiMTE3ZWRiOTcyYTFkYzhiMWJiMWQ1N2MyMjdkOTAzODllMTE5ZDU3OGRlZTU3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Vi0pKJ3JIdFz8NV9jmLu7QubJ8NdOzafJRK8OMg-NHI)

Use always `sudo eggs kill`, before to produce an ISO. The command `eggs love` already include this, so it's not necessary, but if you are creating an ISO using `sudo eggs produce` and get this error, just use `sudo eggs kill` before to it.

