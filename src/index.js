import { gestures } from "./gestures.js";
var config = {
  video: {
    width: 640,
    height: 480,
    // width: 1600,
    // height: 1200,
    fps: 30,
    id: "a3dc5cfceb7702555d7fe91a370b7c994e719f225ab9cbf7be4cdb69d05b1642",
    // id: "4ec56c4bca74019477a3fe847094540cd68bc3a88b8ccdfbf7265889b01a4028",
  },
};

const landmarkColors = {
  thumb: "red",
  index: "blue",
  middle: "yellow",
  ring: "green",
  pinky: "pink",
  wrist: "white",
};

const gestureStrings = {
  thumbs_up: "👍 \n Legal!",
  rock: "✊️ Punho",
  paper: "🖐 Oi",
  scissors: "✌️ Vitória!",
  middle: "🖕 Toma!",
  fazol: "👆 Faz o L",
  ok: "👌 OK!",
  pinching: "🤏  Vish",
  thumbs_down: "👎 Péssimo!",
  painLeft: "👈  Bolsonaro?",
  top: "☝️  Acima",
  yes: "🤟  Rock",
  horn: "🤘 Corno?",
  rightHand: "🫱 Deitado",
  show: "🤙 Show",
};

const base = ["Horizontal ", "Diagonal Up "];
const dont = {
  left: [...base].map((i) => i.concat(`Right`)),
  right: [...base].map((i) => i.concat(`Left`)),
};

async function createDetector() {
  return window.handPoseDetection.createDetector(
    window.handPoseDetection.SupportedModels.MediaPipeHands,
    {
      runtime: "mediapipe",
      modelType: "full",
      maxHands: 2,
      solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915`,
    }
  );
}

async function main() {
  const video = document.querySelector("#pose-video");
  const canvas = document.querySelector("#pose-canvas");
  const ctx = canvas.getContext("2d");

  const resultLayer = {
    right: document.querySelector("#pose-result-right"),
    left: document.querySelector("#pose-result-left"),
  };
  // configure gesture estimator
  const knownGestures = [
    // fp.Gestures.ThumbsUpGesture,
    ...gestures,
  ];
  const GE = new fp.GestureEstimator(knownGestures);
  // load handpose model
  const detector = await createDetector();
  console.log("mediaPose model loaded");
  const pair = new Set();

  function checkGestureCombination(chosenHand, poseData) {
    const addToPairIfCorrect = (chosenHand) => {
      const containsHand = poseData.some((finger) =>
        dont[chosenHand].includes(finger[2])
      );
      if (!containsHand) return;
      pair.add(chosenHand);
    };

    addToPairIfCorrect(chosenHand);
    if (pair.size !== 2) return;
    resultLayer.left.innerText = resultLayer.right.innerText =
      gestureStrings.dont;
    pair.clear();
  }
  // main estimation loop
  const estimateHands = async () => {
    // clear canvas overlay
    ctx.clearRect(0, 0, config.video.width, config.video.height);
    resultLayer.right.innerText = "";
    resultLayer.left.innerText = "";

    // get hand landmarks from video
    const hands = await detector.estimateHands(video, {
      flipHorizontal: true,
    });

    for (const hand of hands) {
      for (const keypoint of hand.keypoints) {
        const name = keypoint.name.split("_")[0].toString().toLowerCase();
        const color = landmarkColors[name];
        drawPoint(ctx, keypoint.x, keypoint.y, 7, color);
      }

      const keypoints3D = hand.keypoints3D.map((keypoint) => [
        keypoint.x,
        keypoint.y,
        keypoint.z,
      ]);
      const predictions = GE.estimate(keypoints3D, 9);
      if (!predictions.gestures.length) {
        updateDebugInfo(predictions.poseData, "left");
      }

      if (predictions.gestures.length > 0) {
        const result = predictions.gestures.reduce((p, c) =>
          p.score > c.score ? p : c
        );
        const found = gestureStrings[result.name];
        // find gesture with highest match score
        const chosenHand = hand.handedness.toLowerCase();
        updateDebugInfo(predictions.poseData, chosenHand);

        if (found !== gestureStrings.dont) {
          resultLayer[chosenHand].innerHTML = "<span> " + found + "</span>";
          continue;
        }
        checkGestureCombination(chosenHand, predictions.poseData);
      }
    }
    // ...and so on
    setTimeout(() => {
      estimateHands();
    }, 1000 / config.video.fps);
  };

  estimateHands();
  console.log("Starting predictions");
}

async function initCamera(width, height, fps, deviceIdentifier) {
  const constraints = {
    audio: false,
    video: {
      facingMode: "user",
      width: width,
      height: height,
      deviceId: deviceIdentifier
        ? {
            exact: deviceIdentifier,
          }
        : undefined,
      frameRate: { max: fps },
    },
  };

  navigator.mediaDevices
    .enumerateDevices()
    .then(function (devices) {
      var ul = document.getElementById("cameras");

      devices.forEach(function (item) {
        var li = document.createElement("li");
        if (item.deviceId.length != 0) {
          console.log(item.label.toString() + " | " + item.deviceId.toString());

          li.appendChild(
            document.createTextNode(
              item.label.toString() + " | " + item.deviceId.toString()
            )
          );
          ul.appendChild(li);
        }
      });
    })
    .catch(function (err) {
      console.log(err.name + ": " + error.message);
    });

  const video = document.querySelector("#pose-video");
  video.width = width;
  video.height = height;

  // get video stream
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}

function drawPoint(ctx, x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function updateDebugInfo(data, hand) {
  const summaryTable = `#summary-${hand}`;
  for (let fingerIdx in data) {
    document.querySelector(`${summaryTable} span#curl-${fingerIdx}`).innerHTML =
      data[fingerIdx][1];
    document.querySelector(`${summaryTable} span#dir-${fingerIdx}`).innerHTML =
      data[fingerIdx][2];
  }
}

// export function initEvent() {
window.addEventListener("DOMContentLoaded", () => {
  initCamera(
    config.video.width,
    config.video.height,
    config.video.fps,
    config.video.id
  ).then((video) => {
    video.play();
    video.addEventListener("loadeddata", (event) => {
      console.log("Camera is ready");
      main();
    });
  });

  const canvas = document.querySelector("#pose-canvas");
  canvas.width = config.video.width;
  canvas.height = config.video.height;
  console.log("Canvas initialized");
});
