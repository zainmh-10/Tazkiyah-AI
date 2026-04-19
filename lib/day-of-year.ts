/** Deterministic index for rotating daily content (0-based). */
export function getDayOfYearIndex(mod: number): number {
  const d = new Date();
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return dayOfYear % mod;
}
