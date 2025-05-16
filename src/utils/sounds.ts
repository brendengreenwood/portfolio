// Small utility to manage sound effects
export const playSound = (frequency: number, duration: number, type: OscillatorType = 'sine', volume = 0.1) => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  
  gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
};

// Base frequency for the musical scale (C4 = 261.63 Hz)
const baseFrequency = 261.63;

// Create a major scale frequency multiplier for each position
const getMajorScaleMultiplier = (position: number) => {
  const majorScale = [1, 1.125, 1.25, 1.333, 1.5, 1.667, 1.875, 2];
  return majorScale[position % majorScale.length];
};

// Predefined sound effects
export const sounds = {
  hover: () => playSound(440, 0.05, 'sine', 0.03),
  buttonHover: () => playSound(880, 0.05, 'sine', 0.02),
  open: () => playSound(330, 0.15, 'sine', 0.1),
  close: () => playSound(220, 0.15, 'sine', 0.1),
  // New function for playing notes in the scale
  playNote: (position: number) => {
    const frequency = baseFrequency * getMajorScaleMultiplier(position);
    playSound(frequency, 0.1, 'sine', 0.05);
  }
};