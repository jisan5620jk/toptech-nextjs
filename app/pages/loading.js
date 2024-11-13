const loading = () => {
  return (
    <div
      className='loading-screen'
      id='loading-screen'
    >
      <span className='bar top-bar'></span>
      <span className='bar down-bar'></span>
      <div className='animation-preloader'>
        <div className='spinner'></div>
        <div className='loader'></div>
      </div>
    </div>
  );
};

export default loading;
