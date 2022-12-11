export function getImageURL(image: string) {
  console.log(`/src/assets/images/${image}`);
  return new URL(`/src/assets/${image}`, import.meta.url).href;
}
