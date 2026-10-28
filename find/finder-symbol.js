// Lightweight monochrome variant. Capture and recognition keep their existing API.
export function createFinderSymbol(element){
  return {
    setActive(value){element.dataset.active=String(Boolean(value));},
    setFound(value){element.classList.toggle('is-found',Boolean(value));},
    setPalette(){},setEnergy(){},setSamples(){}
  };
}
