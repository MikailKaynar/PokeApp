import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import PokeCard from "./components/PokeCard";

function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeCard, setPokeCard] = useState();
  const fetchApi = async () => {
    setLoading(true);
    const res = await axios.get(url);
    await axios.get(url);
    setLoading(true);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      console.log(result);
      setData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="bg-[#D8A7B1]  w-full lg:w-3/5 p-6 lg:p-14">
          <Card
            pokemon={data}
            loading={loading}
            infoPokemon={(poke) => setPokeCard(poke)}
          />
          <div className="flex flex-col lg:flex-row items-center justify-center mx-auto space-y-4 lg:space-y-0 lg:space-x-4">
            {prevUrl && (
              <button
                className="bg-[#B6E2D3] w-full lg:w-auto px-6 py-3 lg:px-16 lg:py-5 rounded-2xl text-lg lg:text-xl shadow-md hover:bg-[#a3d6c2]"
                onClick={() => {
                  setData([]);
                  setUrl(prevUrl);
                }}
              >
                Prev
              </button>
            )}
            {nextUrl && (
              <button
                className="bg-[#B6E2D3] w-full lg:w-auto px-6 py-3 lg:px-16 lg:py-5 rounded-2xl text-lg lg:text-xl shadow-md hover:bg-[#a3d6c2]"
                onClick={() => {
                  setData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center items-center p-6 bg-pink-100">
          <PokeCard pokemon={pokeCard} />
        </div>
      </div>
    </>
  );
}

export default App;

/*



  const nextUrlHandler = async (res) => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${pageCount}&limit=20`)
      .then((response) => {
        setLoading(true);
        getPokemon(response.data.results);
      });

    setPageCount(pageCount + 20);
  };
  const prevUrlHandler = async (res) => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${pageCount}&limit=20`)
      .then((response) => {
        setLoading(true);
        getPokemon(response.data.results);
      });
    if (pageCount > 20) {
      setPageCount(pageCount - 20);
    }
    {
      return;
    }
  };

*/
