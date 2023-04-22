# Fingerpose Detect Gestures

## 🌟 About

fingerpose-gestures is a library built on top of Fingerpose classifier for hand landmarks detected by TensorFlow.js' handpose model. It can detect hand gestures inside a webcam source picture.

## How it works

Gesture detection works in 3 steps:

1. Detect the hand landmarks inside the video picture
2. Estimating the direction and curl of each individual finger
3. Comparing the result to a set of gesture description

**Step (1) is performed by TensorFlow's "[handpose](https://www.npmjs.com/package/@tensorflow-models/handpose)",
Step (2) and (3) are handled by [fingerpose](https://www.npmjs.com/package/fingerpose) library.**

## 👨‍💻 Technologies used

<p>

<img alt="CSS" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">
<img alt="HMTL5" src="	https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img alt="TensorFlow" src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white">

## Gestures - Emoji + Strings

| name        | emoji           |
| ----------- | --------------- |
| thumbs_up   | "👍 Legal!"     |
| rock        | "✊️ Punho"     |
| paper       | "🖐 Oi"         |
| scissors    | "✌️ Vitória!"   |
| middle      | "🖕 Toma!"      |
| fazol       | "👆 Faz o L"    |
| ok          | "👌 OK!"        |
| pinching    | "🤏 Vish"       |
| thumbs_down | "👎 Péssimo!"   |
| painLeft    | "👈 Bolsonaro?" |
| top         | "☝️ Acima"      |
| yes         | "🤟 Rock"       |
| horn        | "🤘 Corno?"     |
| rightHand   | "🫱 Deitado"     |
| show        | "🤙 Show"       |

## Running the project

Obs: Requirements: Node installed

Below are the instructions for you to run the project on your machine.

Start by cloning the repository and installing its dependencies:

```sh
git clone https://github.com/davigomesflorencio/fingerpose_gestures
cd fingerpose_gestures
npm install
```

start application

```sh
npm start
```

## Licence 📃

[MIT](https://github.com/davigomesflorencio/fingerpose_gestures/LICENSE)
