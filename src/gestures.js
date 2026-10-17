const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

const icons = [
  'thumbs_up', 'thumbs_down', 'rock', 'paper', 'scissors', 'middle', 'fazol', 'ok', 'pinching',
  'painLeft', 'top', 'show', 'yes', 'horn', 'rightHand'
]

const [
  thumbsUpGesture,
  thumbsDownGesture,
  rockGesture,
  paperGesture,
  scissorsGesture,
  middleGesture,
  fazoLGesture,
  okGesture,
  pinchingGesture,
  painLeftGesture,
  topGesture,
  showGesture,
  yesGesture,
  hornGesture,
  rightHandGesture
] = icons.map((icon) => new GestureDescription(icon))

// -----------------------------------------------------------------------------
// Thumb Up
// -----------------------------------------------------------------------------

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
thumbsUpGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
thumbsUpGesture.addDirection(
  Finger.Thumb,
  FingerDirection.DiagonalUpLeft,
  0.25
);

// all other fingers:
// - curled
// - horizontal left or right
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thumbsUpGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  thumbsUpGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
}

// -----------------------------------------------------------------------------
// Thumb Down
// -----------------------------------------------------------------------------

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
thumbsDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
thumbsDownGesture.addDirection(
  Finger.Thumb,
  FingerDirection.DiagonalDownLeft,
  0.7
);

// all other fingers:
// - curled
// - horizontal left or right
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thumbsDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  thumbsDownGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
}

// -----------------------------------------------------------------------------
// Rock
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  rockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

// -----------------------------------------------------------------------------
// Paper
// -----------------------------------------------------------------------------

for (let finger of [
  Finger.Thumb,
  Finger.Index,
  Finger.Middle,
  Finger.Ring,
  Finger.Pinky,
]) {
  paperGesture.addCurl(finger, FingerCurl.NoCurl, 0.9);
}

// Thumb
paperGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);

// Index

// Middle
paperGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.9);

// Ring
paperGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.9);

// Pinky
paperGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.9);

// -----------------------------------------------------------------------------
// rightHand
// -----------------------------------------------------------------------------

// thumb:
rightHandGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
rightHandGesture.addDirection(
  Finger.Thumb,
  FingerDirection.DiagonalUpRight,
  0.9
);

// index:
rightHandGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.9);
rightHandGesture.addDirection(
  Finger.Index,
  FingerDirection.HorizontalRight,
  0.9
);

// Middle:
rightHandGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.9);
rightHandGesture.addDirection(
  Finger.Middle,
  FingerDirection.HorizontalRight,
  0.9
);
// Ring:
rightHandGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 0.9);
rightHandGesture.addDirection(
  Finger.Ring,
  FingerDirection.HorizontalRight,
  0.9
);
// Pinky:
rightHandGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 0.9);
rightHandGesture.addDirection(
  Finger.Pinky,
  FingerDirection.HorizontalRight,
  0.9
);

//------------------------------------------------------------------------------
// Scissors
//------------------------------------------------------------------------------

// index and middle finger: stretched out
scissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring: curled
scissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

//------------------------------------------------------------------------------
// meio
//------------------------------------------------------------------------------

middleGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);

middleGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
middleGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
middleGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
middleGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

//------------------------------------------------------------------------------
// OkGesture
//------------------------------------------------------------------------------

// thumb:
okGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
okGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);

// index:
okGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
okGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.75);

// Middle:
okGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.8);

// Ring:
okGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

// Pinky:
okGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

//------------------------------------------------------------------------------
// fazoLGesture
//------------------------------------------------------------------------------

// thumb:
fazoLGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
fazoLGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);

// index:
fazoLGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
fazoLGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);

// Middle:
fazoLGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.8);

// Ring:
fazoLGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

// Pinky:
fazoLGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

//------------------------------------------------------------------------------
// pinchingGesture
//------------------------------------------------------------------------------

// thumb:
pinchingGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pinchingGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);
pinchingGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);

pinchingGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
pinchingGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);

// all other fingers:
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  pinchingGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

//------------------------------------------------------------------------------
// painLeftGesture
//------------------------------------------------------------------------------

// thumb:
painLeftGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

painLeftGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
painLeftGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.8);

// all other fingers:
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  painLeftGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  painLeftGesture.addDirection(finger, FingerDirection.HorizontalLeft, 0.8);
}

//------------------------------------------------------------------------------
// topGesture
//------------------------------------------------------------------------------

// thumb:
topGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.65);

topGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
topGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);

// all other fingers:
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  topGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

//------------------------------------------------------------------------------
// showGesture
//------------------------------------------------------------------------------

showGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
showGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);

// all other fingers:
// - curled
// - horizontal left or right
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  showGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  showGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
}
showGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
showGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

//------------------------------------------------------------------------------
// yesGesture
//------------------------------------------------------------------------------

// thumb:
yesGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
yesGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);

// index:
yesGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
yesGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.75);
// Middle:
yesGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.8);
// Ring:
yesGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
// Pinky:
yesGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

//------------------------------------------------------------------------------
// hornGesture
//------------------------------------------------------------------------------

// thumb:
hornGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

// index:
hornGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.95);
hornGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.75);

// Middle:
hornGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.9);

// Ring:
hornGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.9);

// Pinky:
hornGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

const gestures = [
  thumbsUpGesture,
  thumbsDownGesture,
  rockGesture,
  paperGesture,
  scissorsGesture,
  middleGesture,
  okGesture,
  fazoLGesture,
  pinchingGesture,
  painLeftGesture,
  topGesture,
  showGesture,
  yesGesture,
  hornGesture,
  rightHandGesture,
];

export { gestures };
