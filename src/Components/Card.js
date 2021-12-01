const Card = ({ title, channel, views, thumbnail }) => {
  //Thumnail, uploader, views, upload-time
  return (
    <div className="card m-2 text-gray-400 text-xs cursor-pointer">
      {/* <div id="thumbnail" className="thumbnail mb-2">
        ?
      </div> */}
      <div className="flex">
        <div className="avatar bg-gray-400 rounded-full">A</div>
        <img src={thumbnail} className="thumbnail" alt="thumbnail" />
        <div className="ml-2">
          <p className="mb-2 text-white text-base font-semibold leading-4">
            {title}
          </p>
          <p>{channel}</p>
          <p>{views / 1000} t. katselukertaa</p>
          <p>2 kuukautta sitten</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
