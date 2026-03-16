
function getTypeBadge(type: string): string {
    switch (type) {
        case "normal":
            return "bg-gray-500 text-white";
        case "fire":
            return "bg-red-500 text-white";
        case "water":
            return "bg-blue-500 text-white";
        case "electric":
            return "bg-yellow-500 text-black";
        case "grass":
            return "bg-green-500 text-white";
        case "ice":
            return "bg-cyan-500 text-black";
        case "fighting":
            return "bg-orange-500 text-white";
        case "poison":
            return "bg-purple-500 text-white";
        case "ground":
            return "bg-brown-500 text-white";
        case "flying":
            return "bg-indigo-500 text-white";
        case "psychic":
            return "bg-pink-500 text-white";
        case "bug":
            return "bg-lime-500 text-black";
        case "rock":
            return "bg-gray-700 text-white";
        case "ghost":
            return "bg-gray-800 text-white";
        case "dragon":
            return "bg-blue-700 text-white";
        case "dark":
            return "bg-gray-900 text-white";
        case "steel":
            return "bg-gray-600 text-white";
        case "fairy":
            return "bg-pink-300 text-black";
        default:
            return "bg-gray-500 text-white";
    }
}
export default function TypeBadge({ types }: Readonly<{ types: string[] }>) {
    return (
        <div className="flex gap-2">
            {types.map((type) => (
                <span key={type} className={`px-2 py-1 rounded-lg text-sm font-semibold text-white ${getTypeBadge(type)}`}>
                    {type}
                </span>
            ))}
        </div>
    );
}