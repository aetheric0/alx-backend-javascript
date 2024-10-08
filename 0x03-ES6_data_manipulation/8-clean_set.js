export default function cleanSet(set, startString) {
  const filteredValues = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString) && startString !== '') {
      filteredValues.push(value.slice(startString.length));
    }
  }
  return filteredValues.join('-');
}
