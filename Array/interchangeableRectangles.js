// You are given n rectangles represented by a 0-indexed 2D integer array rectangles, where rectangles[i] = [widthi, heighti] denotes the width and height of the ith rectangle.

// Two rectangles i and j (i < j) are considered interchangeable if they have the same width-to-height ratio. More formally, two rectangles are interchangeable if widthi/heighti == widthj/heightj (using decimal division, not integer division).

// Return the number of pairs of interchangeable rectangles in rectangles.

var interchangeableRectangles = function (rectangles) {
  let count = 0;
  const map = new Map();
  for (let i = 0; i < rectangles.length; i++) {
    const [first, second] = rectangles[i];
    const divide = first / second;
    const previous = map.get(divide) ?? 0;

    map.set(divide, previous + 1);
  }
  for (const frequently of map.values()) {
    if (frequently > 1) {
      count += Math.floor((frequently * (frequently - 1)) / 2);
    }
  }
  return count;
};
