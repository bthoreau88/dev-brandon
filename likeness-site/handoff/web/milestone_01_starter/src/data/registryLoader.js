export async function loadRegistry(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Registry load failed: ${path}`);
  return response.json();
}
