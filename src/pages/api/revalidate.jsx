export default async function handler(req, res) {
  try {
    await res.revalidate("/blog");
    console.log("bisa");
    return res.json({ revalidated: true });
  } catch (error) {
    return res.status(500).send("Error revalidating");
  }
}
