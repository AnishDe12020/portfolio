// One matrix-rain frame renderer — the :rain ambience (Hacker) and the
// matrix screensaver (Saver) both draw through it. Callers own the canvas,
// the drops array, and the pacing; this just paints one step.
export const RAIN_GLYPHS = 'アイウエオカキクケコサシスセソタチツテト0123456789$+*:・';

export function rainFrame(
  g: CanvasRenderingContext2D,
  w: number,
  h: number,
  drops: number[],
  size: number,
  font: string,
  trail: number,
  body: string,
  lead = body,
  leadChance = 0,
) {
  g.fillStyle = `rgba(0,0,0,${trail})`;
  g.fillRect(0, 0, w, h);
  g.font = `${size}px ${font}`;
  for (let i = 0; i < drops.length; i++) {
    g.fillStyle = leadChance && Math.random() < leadChance ? lead : body;
    g.fillText(RAIN_GLYPHS[(Math.random() * RAIN_GLYPHS.length) | 0], i * size, drops[i] * size);
    drops[i] = drops[i] * size > h && Math.random() > 0.975 ? 0 : drops[i] + 1;
  }
}
