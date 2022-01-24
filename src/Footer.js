import {Link,useLocation} from 'react-router-dom'


const Footer = () => {
    
    const location = useLocation()
    return (
  <div className='footer'>
     <p> copyright &copy; 2022</p>
     { location.pathname ==='/' && <Link to = '/about'>About</Link>  }
  </div>
  )
};

export default Footer;
