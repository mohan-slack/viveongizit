
export const getGradientStyle = (textColor: number, textOpacity: number) => {
  if (textColor < 1) {
    const ratio = textColor;
    return {
      from: `rgba(255, 58, 47, ${0.9 - 0.2 * ratio * textOpacity})`,
      via: `rgba(155, 48, 255, ${0.8 * textOpacity})`,
      to: `rgba(0, 255, 255, ${0.8 - 0.3 * (1-ratio) * textOpacity})`
    };
  } else if (textColor < 2) {
    const ratio = textColor - 1;
    return {
      from: `rgba(255, 58, 47, ${0.7 * textOpacity})`,
      via: `rgba(155, 48, 255, ${0.8 - 0.2 * ratio * textOpacity})`,
      to: `rgba(0, 255, 255, ${0.8 * textOpacity})`
    };
  } else {
    const ratio = textColor - 2;
    return {
      from: `rgba(255, 58, 47, ${0.7 + 0.2 * ratio * textOpacity})`,
      via: `rgba(155, 48, 255, ${0.6 * textOpacity})`,
      to: `rgba(0, 255, 255, ${0.8 - 0.3 * ratio * textOpacity})`
    };
  }
};

// Audio bar colors constant to match the reference image
export const AUDIO_BAR_COLORS = [
  "#9C56DB", // Purple
  "#854ED6", // Purple
  "#6F45D1", // Purple
  "#5F3EB0", // Purple
  "#4768D9", // Blue
  "#3E7BE0", // Blue
  "#3493E5", // Light Blue
  "#2BA9EA", // Light Blue
  "#22BFEF", // Cyan
  "#B33A8B", // Pink
];
