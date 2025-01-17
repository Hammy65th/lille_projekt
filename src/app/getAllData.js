
export const getAllData = async () => {
  const res = await fetch('https://api.jsonbin.io/v3/b/67878ba5ad19ca34f8ed79a9');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};