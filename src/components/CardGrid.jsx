const CardGrid = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4 md:p-8">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} className="card__image" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img
                className="card__thumb"
                src="https://i.imgur.com/7D7I6dI.png"
                alt=""
              />
              <h3 className="card__title">{card.title}</h3>
              <span className="card__status">{card.status}</span>
            </div>
            <p className="card__description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardGrid;

<a href="" className="card">
  <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
  <div className="card__overlay">
    <div className="card__header">
      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
        <path />
      </svg>
      <img
        className="card__thumb"
        src="https://i.imgur.com/7D7I6dI.png"
        alt=""
      />
      <div className="card__header-text">
        <h3 className="card__title">Jessica Parker</h3>
        <span className="card__status">1 hour ago</span>
      </div>
    </div>
    <p className="card__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
      blanditiis?
    </p>
  </div>
</a>;
