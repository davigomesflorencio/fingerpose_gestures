# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

- Updated `@tensorflow/tfjs-core` and `@tensorflow/tfjs-backend-webgl` from 3.7.0 to 4.22.0.
- Updated `@tensorflow-models/hand-pose-detection` from 2.0.0 to 2.0.1.
- Updated `@mediapipe/hands` from 0.4.1646424915 to 0.4.1675469240 (script tag and `solutionPath`).
- Updated `browser-sync` from 2.x to 3.x and refreshed vulnerable transitive dependencies.
- Moved the TensorFlow.js scripts from unpkg to the jsDelivr CDN.
- Rewrote the README: current libraries and versions, webcam configuration, guide to adding gestures and the correct license (Apache 2.0).

### Fixed

- Gestures from `scissors` onward were labeled with the previous gesture's name because `paper` appeared twice in the gesture name list. For example, ✌️ was shown as "🖐 Oi".

### Added

- This changelog.

## 2023-05-01

### Changed

- Gesture descriptions are now created by mapping a list of names instead of instantiating each one by hand ([#1](https://github.com/davigomesflorencio/fingerpose_gestures/pull/1)).

## 2023-04-23

### Added

- Screenshots in the README.

## 2023-04-22

### Added

- First version: real-time detection of 15 hand gestures for both hands, with emoji labels and a finger curl/direction debug table.
- List of available cameras and a configurable webcam id, resolution and fps.

[Unreleased]: https://github.com/davigomesflorencio/fingerpose_gestures/compare/1f7d0f7...HEAD
