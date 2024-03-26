export const startSound = () => {
  const signal = new Audio('./assets/inecraft_zombie_.mp3');
  signal.volume = 1;
  return signal.play();
}

export const breakSound = () => {
  const signal = new Audio('./assets/inecraft_eating.mp3');
  signal.volume = 1;
  return signal.play();
}

export const bigBreakSound = () => {
  const signal = new Audio('./assets/inecraft_levelu.mp3');
  signal.volume = .3;
  return signal.play();
}

export const endSound = () => {
  const signal = new Audio('./assets/inecraft_death.mp3');
  signal.volume = 1;
  return signal.play();
}

