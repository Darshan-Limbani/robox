// storageUtils.js

// Key used to store reward points in localStorage
const POINT_KEY = 'reward_points';

// Key used to store daily limit usage in localStorage
const LIMIT_KEY = 'daily_limit_usage';

/**
 * Retrieves the current reward points from localStorage.
 * @returns {number} The current reward points, or 0 if not set.
 */
export function getPoints() {
  return parseInt(localStorage.getItem(POINT_KEY)) || 0;
}

/**
 * Sets the reward points in localStorage.
 * @param {number} points - The number of points to set.
 */
export function setPoints(points) {
  localStorage.setItem(POINT_KEY, points);
}

/**
 * Adds a specified amount to the current reward points.
 * @param {number} amount - The amount of points to add.
 * @returns {number} The updated reward points.
 */
export function addPoints(amount) {
  const current = getPoints();
  const updated = current + amount;
  setPoints(updated);
  return updated;
}

/**
 * Subtracts a specified amount from the current reward points.
 * Ensures the points do not go below zero.
 * @param {number} amount - The amount of points to subtract.
 * @returns {number} The updated reward points.
 */
export function subtractPoints(amount) {
  const current = getPoints();
  const updated = Math.max(current - amount, 0);
  setPoints(updated);
  return updated;
}

/**
 * Generates a unique key for tracking daily usage of a feature.
 * @param {string} feature - The feature name.
 * @returns {string} The generated key for today's usage of the feature.
 */
export function getTodayKey(feature) {
  const today = new Date().toISOString().split('T')[0]; // e.g., "2025-05-02"
  return `${LIMIT_KEY}_${feature}_${today}`;
}

/**
 * Retrieves the current usage count for a specific feature from localStorage.
 * @param {string} feature - The feature name.
 * @returns {number} The current usage count, or 0 if not set.
 */
export function getUsage(feature) {
  return parseInt(localStorage.getItem(getTodayKey(feature))) || 0;
}

/**
 * Increments the usage count for a specific feature in localStorage.
 * @param {string} feature - The feature name.
 * @returns {number} The updated usage count.
 */
export function incrementUsage(feature) {
  const usage = getUsage(feature) + 1;
  localStorage.setItem(getTodayKey(feature), usage);
  return usage;
}

/**
 * Checks if a feature can still be used based on its daily limit.
 * @param {string} feature - The feature name.
 * @param {number} [limit=3] - The daily usage limit (default is 3).
 * @returns {boolean} True if the feature can still be used, false otherwise.
 */
export function canUseFeature(feature, limit = 3) {
  return getUsage(feature) < limit;
}