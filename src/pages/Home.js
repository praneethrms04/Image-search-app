import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "../components/Gallery";
const apiKey = process.env.REACT_APP_API_KEY;
const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {});

  const submitHandler = (e) => {
    e.preventDefault();
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data.photos.photo);
        // console.log(res.data.photos.photo);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-dark">
      <div className="text-center pt-4 ">
        <h4>Image Gallery App</h4>
      </div>
      <div className="d-flex justify-content-center pt-4">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">search</button>
        </form>
      </div>
      <div className="pt-5">
        {data.length >= 1 ? <Gallery data={data} /> : <>No Imgaes</>}
      </div>
    </div>
  );
};

export default Home;
