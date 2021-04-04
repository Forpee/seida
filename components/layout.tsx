
import Footer from "./footer";


import Header from "./header";

const Layout = ({ children }) => {
  
  return (
    <div>
      <Header />
        
      <div   className="overflow-x-hidden  flex justify-center bg-gray-450">
        <div className="max-w-screen flex flex-col min-h-screen w-full">
         

          <div className="flex-grow">{children}</div>
          <Footer />
        </div> 
        <div
          hidden
          data-currency='zar'
          id="snipcart"
          data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
        ></div>
      </div>
    </div>
  );
};

export default Layout;