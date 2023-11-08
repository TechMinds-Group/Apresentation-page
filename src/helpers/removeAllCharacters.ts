export function removeAllCharacters(text: string) {
  return text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
}
