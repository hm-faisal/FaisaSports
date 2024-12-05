const Carousel = () => {
  return (
    <>
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full h-[500px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1671436822885-0ef977b97959?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D"
              className="w-full h-[500px]"
            />
            <div className="absolute w-full h-full flex justify-center items-center flex-col">
              <h2 className="text-4xl font-bold text-black">Basketball</h2>
              <p className="text-lg text-black">
                Improves cardiovascular health, coordination, and teamwork.
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1504305754058-2f08ccd89a0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNvY2NlcnxlbnwwfHwwfHx8MA%3D%3D"
              className="w-full h-[500px]"
            />
            <div className="absolute w-full h-full flex justify-center items-center flex-col">
              <h2 className="text-4xl font-bold text-black">Soccer</h2>
              <p className="text-lg text-black">
                Enhances endurance, flexibility, and teamwork.
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1516742720271-6ae39cbc5bd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRlbm5pc3xlbnwwfHwwfHx8MA%3D%3D"
              className="w-full h-[500px]"
            />
            <div className="absolute w-full h-full flex justify-center items-center flex-col">
              <h2 className="text-4xl font-bold text-black">Tennis</h2>
              <p className="text-lg text-black">
                Boosts mental focus, agility, and coordination.
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3dpbW1pbmd8ZW58MHx8MHx8fDA%3D"
              className="w-full h-[500px]"
            />
            <div className="absolute w-full h-full flex justify-center items-center flex-col">
              <h2 className="text-4xl font-bold text-black">Swimming</h2>
              <p className="text-lg text-black">
                Improves flexibility, endurance, and overall body strength.
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
