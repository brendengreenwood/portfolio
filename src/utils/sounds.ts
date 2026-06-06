let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new (window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext)();
  }
  return audioContext;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const playSound = (
  frequency: number,
  duration: number,
  type: OscillatorType = "sine",
  volume = 0.1
) => {
  if (prefersReducedMotion()) return;

  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      ctx.currentTime + duration
    );

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + duration);
  } catch {
    // Silently fail if audio isn't available
  }
};

const baseFrequency = 261.63;

const getMajorScaleMultiplier = (position: number) => {
  const majorScale = [1, 1.125, 1.25, 1.333, 1.5, 1.667, 1.875, 2];
  return majorScale[position % majorScale.length];
};

export const sounds = {
  hover: () => playSound(440, 0.05, "sine", 0.03),
  buttonHover: () => playSound(880, 0.05, "sine", 0.02),
  open: () => playSound(330, 0.15, "sine", 0.1),
  close: () => playSound(220, 0.15, "sine", 0.1),
  playNote: (position: number) => {
    const frequency = baseFrequency * getMajorScaleMultiplier(position);
    playSound(frequency, 0.1, "sine", 0.05);
  },
};
