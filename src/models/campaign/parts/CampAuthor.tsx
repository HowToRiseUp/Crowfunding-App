
const CampAuthor = ({ image = 'https://i.pinimg.com/564x/fa/89/c6/fa89c65a15f925dfc18adda3ddae1607.jpg', author = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src={image}
        className="object-cover w-8 h-8 rounded-full"
        alt=""
      ></img>
      <p className="text-xs text-text3">
        By <span className="font-semibold text-text2">{author}</span>
      </p>
    </div>
  );
};

export default CampAuthor;
