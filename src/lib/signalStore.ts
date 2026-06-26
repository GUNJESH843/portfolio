/**
 * Shared, mutable state for the global signal field. Sections set `signalTgt`
 * as you scroll into them; the field eases `signalCur` toward it every frame —
 * so the whole background morphs continuously as you travel down the page.
 */
export type SignalParams = {
  amp: number;
  freq: number;
  disp: number; // dispersion / scatter
  camX: number;
  camY: number;
};

export const SCENES: Record<string, SignalParams> = {
  hero: { amp: 1.35, freq: 0.46, disp: 0.0, camX: 0, camY: 1.0 },
  experience: { amp: 0.72, freq: 0.34, disp: 0.35, camX: -1.6, camY: 0.65 },
  education: { amp: 0.55, freq: 0.62, disp: 0.55, camX: 1.4, camY: 0.9 },
  skills: { amp: 1.05, freq: 0.92, disp: 0.12, camX: 0, camY: 1.1 },
  projects: { amp: 0.85, freq: 0.5, disp: 0.4, camX: 2.0, camY: 0.7 },
  certificates: { amp: 0.45, freq: 0.4, disp: 0.7, camX: -1.0, camY: 1.0 },
  contact: { amp: 1.2, freq: 0.52, disp: 0.0, camX: 0, camY: 1.25 },
};

export const signalCur: SignalParams = { ...SCENES.hero };
export const signalTgt: SignalParams = { ...SCENES.hero };
export const signalMouse = { x: 0, y: 0 };

export const setSignal = (p: Partial<SignalParams>) => {
  Object.assign(signalTgt, p);
};
