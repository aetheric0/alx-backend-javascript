export default function updateUniqueItems(MapData) {
  if (!(MapData instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of MapData.entries()) {
    if (value === 1) {
      MapData.set(key, 100);
    }
  }
}
