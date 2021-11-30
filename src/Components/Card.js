const Card = () => {
  //Thumnail, uploader, views, upload-time
  return (
    <div className="card m-2 text-gray-400 text-xs cursor-pointer">
      <div id="thumbnail" className="thumbnail mb-2">
        ?
      </div>
      <div className="flex">
        <div className="avatar bg-gray-400 rounded-full">A</div>
        <div className="ml-2">
          <p className="mb-2 text-white text-base font-semibold leading-4">
            Very interesting video
          </p>
          <p>Uploader</p>
          <p>Views</p>
          <p>2 kuukautta sitten</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
