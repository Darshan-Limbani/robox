// storageUtils.js
const POINT_KEY = 'reward_points';
const LIMIT_KEY = 'daily_limit_usage';

export function getPoints() {
  return parseInt(localStorage.getItem(POINT_KEY)) || 0;
}

export function setPoints(points) {
  localStorage.setItem(POINT_KEY, points);
}

export function addPoints(amount) {
  const current = getPoints();
  const updated = current + amount;
  setPoints(updated);
  return updated;
}

export function subtractPoints(amount) {
  const current = getPoints();
  const updated = Math.max(current - amount, 0);
  setPoints(updated);
  return updated;
}

export function getTodayKey(feature) {
  const today = new Date().toISOString().split('T')[0]; // e.g., "2025-05-02"
  return `${LIMIT_KEY}_${feature}_${today}`;
}

export function getUsage(feature) {
  return parseInt(localStorage.getItem(getTodayKey(feature))) || 0;
}

export function incrementUsage(feature) {
  const usage = getUsage(feature) + 1;
  localStorage.setItem(getTodayKey(feature), usage);
  return usage;
}

export function canUseFeature(feature, limit = 3) {
  return getUsage(feature) < limit;
}
