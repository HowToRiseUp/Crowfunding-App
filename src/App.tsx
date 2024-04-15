
import "./App.css";

const travelItem: {
  image: string;
  name: string;
  totalReviews: number;
  rating: number;
  location: string;
  price: number;
  date: string;
  departure: string;
  features: {
    freeWifi: boolean;
    freePacking: boolean;
    specialOffer: boolean;
  };
}[] = [
  {
    image: "link",
    name: "con cac",
    totalReviews: 1,
    rating: 1,
    location: "nha tao",
    price: 1,
    date: "14/8.2003",
    departure: "cc",
    features: { freePacking: true, freeWifi: false, specialOffer: false },
  },
];
console.log("🚀 ~ travelItem:", travelItem);

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-900">
        Hello world!
      </h1>
      <h1 className="text-3xl font-bold underline text-red-900">
        World: Lo Con cac I Have a BoyFriend !
      </h1>
    </>
  );
}

export default App;
