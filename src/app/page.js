export const dynamic = "force-dynamic"; // this is the fix

const API_KEY = process.env.API_KEY
console.log("apikey", API_KEY);
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`);

  console.log(res)
  if(!res.ok){
    throw new Error("Failed data fetch")
  }

  
  const data = res.json();

  const results = data.results;

  // console.log(results);
  return (
   <h2 className="text-red-400">
     Hello
   </h2>
  )
}
