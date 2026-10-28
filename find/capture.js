// Collect raw PCM locally; only the finished 12-second WAV leaves the browser.
class SphereCapture extends AudioWorkletProcessor {
  process(inputs) {
    if (inputs[0]?.[0]) this.port.postMessage(inputs[0][0].slice());
    return true;
  }
}
registerProcessor('sphere-capture', SphereCapture);
