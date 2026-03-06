import React from "react";

const Testimonials = () => {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "John Doe",
      handle: "Frontend Developer",
      date: "June 2, 2025",
      message:
        "Integrating this component into our project was seamless and saved us countless hours of development and testing. Highly recommended!",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Jane Smith",
      handle: "UI Designer",
      date: "May 15, 2025",
      message:
        "Very easy to integrate with our existing design system. The scrolling effect is smooth and modern.",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
      name: "Arun Nair",
      handle: "Tech Consultant",
      date: "April 30, 2025",
      message: "Simple to customize and visually appealing. Great job!",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200",
      name: "Ravi Joshi",
      handle: "Web Developer",
      date: "March 18, 2025",
      message:
        "From layout to styling, everything worked out-of-the-box. The design is beautiful and efficient.",
      rating: 5,
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-red-50">
      <div className="flex gap-2">
        <img className="size-11 rounded-full" src={card.image} alt="user" />
        <div className="flex flex-col">
          <p className="font-semibold text-red-700">{card.name}</p>
          <span className="text-xs text-gray-500">{card.handle}</span>
        </div>
      </div>
      <p className="text-sm py-3 text-gray-700">{card.message}</p>
      <div className="flex items-center gap-1 text-yellow-500 text-sm">
        {Array.from({ length: card.rating }, (_, i) => (
          <span key={i}>★</span>
        ))}
        {Array.from({ length: 5 - card.rating }, (_, i) => (
          <span key={i}>☆</span>
        ))}
      </div>
      <p className="text-xs text-gray-500 text-right mt-1">{card.date}</p>
    </div>
  );

  return (
    <div className="bg-red-100 py-10">
      <h2 className="text-3xl font-bold text-center text-red-700 mb-6">
        Testimonials
      </h2>

      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-red-100 to-transparent"></div>
        <div
          className="marquee-inner flex transform-gpu min-w-[200%] pt-6 pb-5"
          style={{ animation: "marqueeScroll 25s linear infinite" }}
        >
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-red-100 to-transparent"></div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
