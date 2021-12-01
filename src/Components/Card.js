const Card = ({ title, channel, views, thumbnail }) => {
  const viewerAmount = (views) => {
    if (views < 1000) return `${views} katselukertaa`;
    else if (views < 1000000)
      return `${Math.round((views / 1000) * 10) / 10} t. katselukertaa`;
    else return `${Math.round((views / 1000000) * 10) / 10} m. katselukertaa`;
  };
  return (
    <div className="card m-2 text-gray-400 text-xs cursor-pointer">
      <div className="flex flex-col">
        <img src={thumbnail} className="thumbnail mb-2" alt="thumbnail" />
        <div className="flex flex-row">
          <div className="">
            <div className="avatar bg-gray-400 rounded-full">A</div>
          </div>
          <div className="ml-1">
            <p className="mb-2 text-white text-base font-semibold leading-4">
              {title}
            </p>
            <p>{channel}</p>
            <p>{viewerAmount(views)}</p>
            <p>2 kuukautta sitten</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
