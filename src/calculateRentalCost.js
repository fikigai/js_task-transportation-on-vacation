/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayCost = 40;
  const DURATION_THREE = 3;
  const DISCOUNT_FIRST = 20;
  const DURATION_WEEK = 7;
  const DISCOUNT_SECOND = 50;
  let totalCost = days * dayCost;

  if (days >= DURATION_WEEK) {
    totalCost -= DISCOUNT_SECOND;
  } else if (days >= DURATION_THREE && days < DURATION_WEEK) {
    totalCost -= DISCOUNT_FIRST;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
