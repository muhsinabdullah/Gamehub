import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";

const PopularGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error(err));
  }, []);

  // Show only first 3 games
  const popularGames = games.slice(0, 3);

  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Title & Subtitle */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Popular Games
        </h2>
        <p className="text-gray-600 mt-2 text-lg md:text-xl">
          Discover the hottest games trending in our Gamehub library
        </p>
      </div>

      {/* Games Grid (3 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {popularGames.map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
          >
            {/* Game Cover */}
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-48 md:h-52 object-cover"
            />

            {/* Game Info */}
            <div className="p-4 flex-1 flex justify-between items-center">
              <h3 className="font-semibold text-lg">{game.title}</h3>

              <div className="flex items-center mt-2">
                <Star size={18} className="text-yellow-400 mr-1" />
                <span className="text-gray-700 font-medium">{game.ratings}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Link
          to="/all-games"
          className="btn btn-outline btn-primary px-8 py-3 text-lg font-semibold"
        >
          View All Games
        </Link>
      </div>
    </section>
  );
};

export default PopularGames;
