<p align="center">
<img src="https://github.com/zeeone-ofc/Alphabot-Md/blob/v7.1/image/lol_1.jpg" alt="ALPHA BOT" width="100"/>


</p>
<p align="center">
<a href="#"><img title="ALPHABOT MULTI DEVICE" src="https://img.shields.io/badge/ALPHABOT MULTI DEVICE-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/DikaArdnt"><img title="Author" src="https://img.shields.io/badge/Author-Dika-red.svg?style=for-the-badge&logo=github"></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md"><img title="Recode" src="https://img.shields.io/badge/Recode-ZeeoneOfc-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/zeeone-ofc/followers"><img title="Followers" src="https://img.shields.io/github/followers/zeeone-ofc?color=red&style=flat-square"></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/zeeone-ofc/Alphabot-Md?color=blue&style=flat-square"></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md/network/members"><img title="Forks" src="https://img.shields.io/github/forks/zeeone-ofc/Alphabot-Md?color=red&style=flat-square"></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/zeeone-ofc/Alphabot-Md?label=Watchers&color=blue&style=flat-square"></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md"><img title="Open Source" src="https://badges.frapsoft.com/os/v2/open-source.svg?v=103"></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md/"><img title="Size" src="https://img.shields.io/github/repo-size/zeeone-ofc/Alphabot-Md?style=flat-square&color=green"></a>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fzeeone-ofc%2FAlphabot-Md&count_bg=%2379C83D&title_bg=%23555555&icon=probot.svg&icon_color=%2300FF6D&title=hits&edge_flat=false"/></a>
<a href="https://github.com/zeeone-ofc/Alphabot-Md/graphs/commit-activity"><img height="20" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"></a>&nbsp;&nbsp;
</p>

<p align="center">
  <a href="https://github.com/zeeone-ofc/Alphabot-Md#requirements">Requirements</a> •
  <a href="https://github.com/zeeone-ofc/Alphabot-Md#instalasi">Installation</a> •
  <a href="https://github.com/zeeone-ofc/Alphabot-Md#thanks-to">Thanks to</a> •
  <a href="https://github.com/zeeone-ofc/Alphabot-Md#Official-Group"> Official Group Bot</a> •
  <a href="https://github.com/zeeone-ofc/Alphabot-Md#donate">Donate</a>
</p>
</div>


---

## Information
> Alpahbot-Md adalah bot yang awalnya memakai base dari [Chikabot](https://github.com/rashidsiregar28/chikabot/blob/main/README.md), sekarang pindah base [Hisoka-Morou](https://github.com/DikaArdnt/Hisoka-Morou). Alphabot-Md is a bot whatsapp using a Baileys library.
> Jika kamu menemukan semacam bug, harap untuk dimaklumi sementara

## Bugs and Tester
* Jika kamu menemukan bug jangan lupa buka Issues
* Info Lebih Lanjut, Chat [owner-alpha](https://wa.me/62887435047326)

# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip) (for sticker command)

# Instalasi
## Heroku Buildpack
```bash
heroku/nodejs
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```
## For Termux
```ts
termux-setup-storage
apt update && apt upgrade
pkg install nodejs git ffmpeg libwebp imagemagick
git clone https://github.com/zeeone-ofc/Alphabot-Md.git
cd Alphabot-Md
pkg install yarn
yarn install
npm i -g typescript
tsc -p ./node_modules/@adiwajshing/baileys-md/
rm -rf session.json
rm -rf store.json
npm start
```
