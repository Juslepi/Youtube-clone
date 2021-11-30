const Tag = ({ text }) => {
  return (
    <div>
      <p className="text-sm bg-gray-600 mx-2 px-2 py-1 border border-opacity-20 rounded-full whitespace-nowrap cursor-pointer">
        {text}
      </p>
    </div>
  );
};

export default Tag;
