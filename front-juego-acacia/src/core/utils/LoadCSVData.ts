export async function LoadCSVFromFile(path: string): Promise<number[]> {
  const res = await fetch(path);
  const text = await res.text();

  return text
    .trim()
    .split('\n')
    .map(line => parseInt(line.trim(), 10))
    .filter(num => !isNaN(num));
}
