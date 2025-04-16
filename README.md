# Automação de Testes - App Demo

Este repositório contém um projeto de automação de testes para um aplicativo mobile demo. Ele utiliza diversas tecnologias para garantir testes eficientes e robustos.

## 📌 Pré-requisitos

Antes de executar o projeto, certifique-se de ter os seguintes componentes instalados:

- [Node.js](https://nodejs.org/)  
- [Android Studio](https://developer.android.com/studio)
- [Appium](https://appium.io/docs/en/latest/) 

Além disso, instale os pacotes necessários via **npm**:

```bash
npm install -g nodejs
npm install webdriverio
npm install appium
npm install chance
```
Para rodar o código você criar uma conexão com o appium e o Android Studio e após isso

```bash
appium -p [endereço da porta]
```
E no final abrir outro terminal e para inicializar 

```bash
npx wdio
```
