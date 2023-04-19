function isWithinDegrees(delta: number, src: number, target: number) {
  return src >= target - delta && src <= target + delta;
}

export default isWithinDegrees;
