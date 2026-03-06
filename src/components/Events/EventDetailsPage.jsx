import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const eventImages = {
  1: [
    "/images/events/booksdistribution/1.jpg",
    "/images/events/booksdistribution/2.jpg",
    "/images/events/booksdistribution/3.jpg",
    "/images/events/booksdistribution/4.jpg",
    "/images/events/booksdistribution/5.jpg",
    "/images/events/booksdistribution/6.jpg",
    "/images/events/booksdistribution/7.jpg",
    "/images/events/booksdistribution/8.jpg",
    "/images/events/booksdistribution/9.jpg",
  ],
  2: [
    "/images/events/clothesdistribution/1.jpg",
    "/images/events/clothesdistribution/2.jpg",
    "/images/events/clothesdistribution/3.jpg",
    "/images/events/clothesdistribution/4.jpg",
    "/images/events/clothesdistribution/5.jpg",
    "/images/events/clothesdistribution/6.jpg",
    "/images/events/clothesdistribution/7.jpg",
    "/images/events/clothesdistribution/8.jpg",
  ],
  3: [
    "/images/events/freedomfighterbooks/1.jpg",
    "/images/events/freedomfighterbooks/2.jpg",
    "/images/events/freedomfighterbooks/3.jpg",
  ],
  4: [
    "/images/events/kalinali/1.jpg",
    "/images/events/kalinali/2.jpg",
    "/images/events/kalinali/3.jpg",
    "/images/events/kalinali/4.jpg",
    "/images/events/kalinali/5.jpg",
    "/images/events/kalinali/6.jpg",
    "/images/events/kalinali/7.jpg",
    "/images/events/kalinali/8.jpg",
    "/images/events/kalinali/9.jpg",
    "/images/events/kalinali/10.jpg",
    "/images/events/kalinali/11.jpg",
    "/images/events/kalinali/12.jpg",
    "/images/events/kalinali/13.jpg",
    "/images/events/kalinali/14.jpg",
    "/images/events/kalinali/15.jpg",
    "/images/events/kalinali/16.jpg",
    "/images/events/kalinali/17.jpg",
    "/images/events/kalinali/18.jpg",
    "/images/events/kalinali/19.jpg",
    "/images/events/kalinali/20.jpg",
    "/images/events/kalinali/21.jpg",
    "/images/events/kalinali/22.jpg",
    "/images/events/kalinali/23.jpg",
    "/images/events/kalinali/24.jpg",
    "/images/events/kalinali/25.jpg",
  ],
  5: [
    "/images/events/kargil/1.jpg",
    "/images/events/kargil/2.jpg",
    "/images/events/kargil/3.jpg",
    "/images/events/kargil/4.jpg",
    "/images/events/kargil/5.jpg",
    "/images/events/kargil/6.jpg",
  ],
  6: [
    "/images/events/notebookdistribution/1.jpg",
    "/images/events/notebookdistribution/2.jpg",
    "/images/events/notebookdistribution/3.jpg",
    "/images/events/notebookdistribution/4.jpg",
    "/images/events/notebookdistribution/5.jpg",
    "/images/events/notebookdistribution/6.jpg",
    "/images/events/notebookdistribution/7.jpg",
    "/images/events/notebookdistribution/8.jpg",
    "/images/events/notebookdistribution/9.jpg",
  ],
  7: [
    "/images/events/templecleaning/1.jpg",
    "/images/events/templecleaning/2.jpg",
    "/images/events/templecleaning/3.jpg",
    "/images/events/templecleaning/4.jpg",
    "/images/events/templecleaning/5.jpg",
    "/images/events/templecleaning/6.jpg",
    "/images/events/templecleaning/7.jpg",
  ],
  8: [
    "/images/events/vanavasiseva/1.jpg",
    "/images/events/vanavasiseva/2.jpg",
    "/images/events/vanavasiseva/3.jpg",
    "/images/events/vanavasiseva/4.jpg",
    "/images/events/vanavasiseva/5.jpg",
    "/images/events/vanavasiseva/6.jpg",
    "/images/events/vanavasiseva/7.jpg",
  ],
  9: ["/images/events/abhimani/1.jpg", "/images/events/abhimani/2.jpg"],
  10: [
    "/images/events/achieversintro/1.jpg",
    "/images/events/achieversintro/2.jpg",
    "/images/events/achieversintro/3.jpg",
    "/images/events/achieversintro/4.jpg",
  ],
  11: [
    "/images/events/chinnarachittara/1.jpg",
    "/images/events/chinnarachittara/2.jpg",
    "/images/events/chinnarachittara/3.jpg",
  ],
  12: [
    "/images/events/desham/1.jpg",
    "/images/events/desham/2.jpg",
    "/images/events/desham/3.jpg",
    "/images/events/desham/4.jpg",
    "/images/events/desham/5.jpg",
    "/images/events/desham/6.jpg",
    "/images/events/desham/7.jpg",
    "/images/events/desham/8.jpg",
    "/images/events/desham/9.jpg",
    "/images/events/desham/10.jpg",
    "/images/events/desham/11.jpg",
    "/images/events/desham/12.jpg",
    "/images/events/desham/13.jpg",
  ],
  13: [
    "/images/events/drvijaya/1.jpg",
    "/images/events/drvijaya/2.jpg",
    "/images/events/drvijaya/3.jpg",
    "/images/events/drvijaya/4.jpg",
    "/images/events/drvijaya/5.jpg",
  ],
  14: [
    "/images/events/educate/1.jpg",
    "/images/events/educate/2.jpg",
    "/images/events/educate/3.jpg",
    "/images/events/educate/4.jpg",
  ],
  15: [
    "/images/events/girlchildday/1.jpg",
    "/images/events/girlchildday/2.jpg",
  ],
  16: [
    "/images/events/gurupoornima/1.jpg",
    "/images/events/gurupoornima/2.jpg",
    "/images/events/gurupoornima/3.jpg",
    "/images/events/gurupoornima/4.jpg",
  ],
  17: [
    "/images/events/niveditha/1.jpg",
    "/images/events/niveditha/2.jpg",
    "/images/events/niveditha/3.jpg",
    "/images/events/niveditha/4.jpg",
    "/images/events/niveditha/5.jpg",
  ],
  18: [
    "/images/events/public/1.jpg",
    "/images/events/public/2.jpg",
    "/images/events/public/3.jpg",
    "/images/events/public/4.jpg",
    "/images/events/public/5.jpg",
    "/images/events/public/6.jpg",
    "/images/events/public/7.jpg",
    "/images/events/public/8.jpg",
    "/images/events/public/9.jpg",
    "/images/events/public/10.jpg",
    "/images/events/public/11.jpg",
    "/images/events/public/12.jpg",
    "/images/events/public/13.jpg",
    "/images/events/public/14.jpg",
    "/images/events/public/15.jpg",
    "/images/events/public/16.jpg",
    "/images/events/public/17.jpg",
    "/images/events/public/18.jpg",
    "/images/events/public/19.jpg",
    "/images/events/public/20.jpg",
    "/images/events/public/21.jpg",
    "/images/events/public/22.jpg",
    "/images/events/public/23.jpg",
  ],
  19: [
    "/images/events/sanskritclass/1.jpg",
    "/images/events/sanskritclass/2.jpg",
    "/images/events/sanskritclass/3.jpg",
  ],
  20: [
    "/images/events/school/1.jpg",
    "/images/events/school/2.jpg",
    "/images/events/school/3.jpg",
    "/images/events/school/4.jpg",
    "/images/events/school/5.jpg",
  ],
  21: [
    "/images/events/sharadapooja/1.jpg",
    "/images/events/sharadapooja/2.jpg",
    "/images/events/sharadapooja/3.jpg",
    "/images/events/sharadapooja/4.jpg",
    "/images/events/sharadapooja/5.jpg",
    "/images/events/sharadapooja/6.jpg",
    "/images/events/sharadapooja/7.jpg",
    "/images/events/sharadapooja/8.jpg",
  ],
};

export default function EventDetailsPage() {
  const { id } = useParams();
  const eventId = parseInt(id);
  const images = eventImages[eventId] || [];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ✅ Scroll to top when event changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [eventId]);

  // ✅ Reset slide to first when event changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [eventId]);

  // ✅ Auto-slide
  useEffect(() => {
    if (!images.length || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images, isPaused]);

  const goToSlide = (index) => setCurrentSlide(index);

  if (!images.length) {
    return (
      <div className="flex justify-center items-center h-96 text-xl text-gray-700">
        No images found for this event.
      </div>
    );
  }

  // const images = useMemo(() => {
  //   return event?.images || [];
  // }, [event]);

  return (
    // <div className="flex flex-col items-center py-10 px-4">
    //   <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
    //     Event Gallery
    //   </h2>

    <div className="flex flex-col items-center py-10 px-4">
      {" "}
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Event Gallery
      </h2>
      <div className="w-full max-w-4xl flex justify-end mb-4">
        <Link
          to="/events"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          ← Back to Events
        </Link>
      </div>
      {/* Carousel */}
      <div
        className="w-full max-w-4xl overflow-hidden relative rounded-xl shadow-lg"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[80vh] object-cover object-center"
                onError={(e) => {
                  e.target.src = "/images/fallback.jpg";
                  e.target.alt = "Image not available";
                }}
              />
            </div>
          ))}
        </div>

        {/* <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[80vh] object-cover object-center"
                onError={(e) => {
                  e.target.src = "/images/fallback.jpg";
                  e.target.alt = "Image not available";
                }}
              />
            </div>
          ))}
        </div> */}
      </div>
      {/* Dot Indicators */}
      <div className="flex items-center mt-5 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === idx ? "bg-red-600" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
