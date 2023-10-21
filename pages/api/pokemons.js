export default async function handler(req, res) {
  const fetchData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const result = await fetchData.json();
  return res.status(200).json(result)
}