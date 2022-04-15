import './style.css'

function Border(props) {
    return (
      <div className='border-page'>
          <div className='border-side'></div>
          <div className='border-side'></div>
          {props.children}
      </div>
    );
  }
  
  export default Border;
  