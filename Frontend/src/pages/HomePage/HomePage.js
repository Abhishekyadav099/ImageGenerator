// import React from 'react';
// import './HomePage.css';
// import Navbar from '../Navbar/Navbar';

// const HomePage = () => {
//     return (
//         <div>
//             <Navbar page="home" />
//             <div className="homepage-container">
//                 <div className="homepage-header">
//                     <h1>Welcome to Our Application</h1>
//                 </div>
//                 <div className="homepage-content">
//                     <p>Discover a wide range of features and functionalities designed to enhance your experience.</p>
//                     <div className="homepage-buttons">
//                         <button onClick={() => window.location.href = '/image-generator'}>Generate Images</button>
//                         <button onClick={() => window.location.href = '/history'}>View History</button>
//                     </div>
//                 </div>
//                 <div className="homepage-footer">
//                     &copy; 2024 Your Company. All rights reserved.
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePage;


// import React from 'react'
// import './HomePage.css'
// import Navbar from '../Navbar/Navbar'

// const HomePage = () => {
//     return (
//         <div>
//             <Navbar page="home" />
//             Homepage
//         </div>
//     )
// }

// export default HomePage

import React from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar page="home" />
      <div className="hero-section">
        {/* <div className='hero-inner'>
            <h1>Welcome to our website!</h1>
            <p>This is a sample homepage.</p>
            <button>Learn More</button>
        </div> */}
      </div>
      {/* <div className="features-section">
        <h2>Our Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div> */}
    </div>
  );
};

export default HomePage;