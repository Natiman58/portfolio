import Sidebar from '../Sidebar';
import './index.scss';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
      <div className='App'>
        <Sidebar />
        <div className='page'>
          <span className='tags top-tags'>&lt;body&gt;</span>
          <Outlet />
          <span className='tags bottom-tags'>&lt;/body&gt;</span>
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
          <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
          rel="stylesheet"
          type="text/css"
        />
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        </div>
      </div>
    );
  };

  export default Layout;
