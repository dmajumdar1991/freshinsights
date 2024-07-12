import Trending from "../components/Trending";
import TrendingGrid from "../components/TrendingGrid";
import PopularPost from "../components/PopularPost";
import News from "../components/News";
import Newsletter from "../components/NewsLetter";

const Home = () => {
  return (
    <>
      <Trending />
      <TrendingGrid />
      <PopularPost />
      <News />
      <Newsletter />
    </>
  );
};

export default Home;
