const MenuItem = (props) => {
  const { img, name, cost, description } = props;
  return (
    <>
      <section id='item-section'>
        <img src={img} alt='' />
        <span>
          <div className='title'>
            <h6>{name}</h6>
            <p>{cost}</p>
          </div>
          <div className='details'>
            <hr />
            <p>{description}</p>
          </div>
        </span>
      </section>
    </>
  );
};

export default MenuItem;
