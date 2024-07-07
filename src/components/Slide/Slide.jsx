import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import cañocristalImage from '../../assets/images/cañocristal.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles/styles.css';
import "swiper/css/effect-creative";
import { useState, useRef } from 'react';

const Slide = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);

  const swipers = [
    {
      image: cañocristalImage,
      town: "Macarena",
      site: "Caño cristales",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam accusamus ea eum nobis mollitia, mayores nulla, eligendi vero cupiditate qui ducimus eius quaerat, iusto enim magni pariatur ratione iste. Lorem, ipsum dolor sit amet consectetur"
    },
    {
      image: cañocristalImage,
      town: "Macarena",
      site: "Caño cristales",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam accusamus ea eum nobis mollitia, mayores nulla, eligendi vero cupiditate qui ducimus eius quaerat, iusto enim magni pariatur ratione iste."
    },
    {
      image: cañocristalImage,
      town: "Macarena",
      site: "Caño cristales",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam accusamus ea eum nobis mollitia, mayores nulla, eligendi vero cupiditate qui ducimus eius quaerat, iusto enim magni pariatur ratione iste."
    },
    {
      image: cañocristalImage,
      town: "Macarena",
      site: "Caño cristales",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam accusamus ea eum nobis mollitia, mayores nulla, eligendi vero cupiditate qui ducimus eius quaerat, iusto enim magni pariatur ratione iste."
    },
    {
      image: cañocristalImage,
      town: "Macarena",
      site: "Caño cristales",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam accusamus ea eum nobis mollitia, mayores nulla, eligendi vero cupiditate qui ducimus eius quaerat, iusto enim magni pariatur ratione iste. Lorem, ipsum"
    }
  ];

  const handlePause = () => {
    if (isPlaying) {
      swiperRef.current.swiper.autoplay.stop();
    } else {
      swiperRef.current.swiper.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="swiper-container">
      <div className='title'>
        <h1>Turismo del Meta</h1>
        <p>Lorem ipsum dolor sit ametc sit amet sit amet</p>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={2.5}
        spaceBetween={70}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          el: '.swiper-pagination',
          renderBullet: (index, className) => {
            return `<span class="${className}" data-index="${index + 1}" data-total="${swipers.length}"></span>`;
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {swipers.map((swiper, index) => (
          <SwiperSlide key={index}>
            <div className='slide-content'>
              <div className='placeContainer'>
                <h3 className='town'>{swiper.town}</h3>
                <h2 className='site'>{swiper.site}</h2>
              </div>
              <div className='descriptionContainer'>
                <p className='number'>{index + 1}</p>
                <p className='description'>{swiper.description}</p>
                <h2 className='next-site'>{swiper.site}</h2>
              </div>
            </div>
            <img src={swiper.image} alt={`Diapositiva ${index + 1}`} />
          </SwiperSlide>
        ))}
        <div className='paginationContainer'>
          <div className="swiper-pagination"></div>
          <div className="line"></div>
          <button className="pause-button" onClick={handlePause} data-icon={isPlaying ? 'pause' : 'play_arrow'}>
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Slide;
