export async function getData(id) {
    const res = await fetch(`https://api.jsonbin.io/v3/b/67878ba5ad19ca34f8ed79a9${id}`);
  
    if (!res.ok) throw new Error("failed");
  
    return res.json();
  }
  