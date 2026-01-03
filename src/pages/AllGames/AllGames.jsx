import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";
import AGB from "../../assets/AGB.png";

const AllGames = () => {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        fetch("/games.json")
            .then((res) => res.json())
            .then((data) => {
                setGames(data);
                setFilteredGames(data);
                const uniqueCategories = ["All", ...new Set(data.map((g) => g.category))];
                setCategories(uniqueCategories);
            })
            .catch((err) => console.error(err));
    }, []);

    const filterByCategory = (category) => {
        setActiveCategory(category);
        if (category === "All") {
            setFilteredGames(games);
        } else {
            setFilteredGames(games.filter((g) => g.category === category));
        }
    };

    return (
        <>
            <title>All Games</title>
            {/* -------------------- Full-width Banner -------------------- */}
            <div className="w-full mb-10 mt-10 flex justify-between">
                <div className="max-w-7xl mx-auto">
                    <img
                        src={AGB}
                        alt="GameHub Banner"
                        className="h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl"
                    />
                </div>
                 <div className="max-w-xl">
                    <h1 className=" text-8xl font-black text-center">Unlimited Games. Endless Fun.</h1>
                </div>
                <div className="max-w-7xl mx-auto">
                    <img
                        src={AGB}
                        alt="GameHub Banner"
                        className="h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl"
                    />
                </div>
            </div>

            {/* -------------------- Section for Categories and Games -------------------- */}
            <section className="bg-gray-50 min-h-screen">
                {/* Category Buttons */}
                <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => filterByCategory(cat)}
                            className={`btn btn-sm md:btn-md ${activeCategory === cat ? "btn-primary" : "btn-outline"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Games Grid */}
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredGames.map((game) => (
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

                            {/* View Details Button */}
                            <div className="p-4">
                                <Link
                                    to={`/games/${game.id}`}
                                    className="btn btn-outline btn-primary w-full"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default AllGames;
