// import React, { useContext, useEffect, useState } from 'react';
// import './ImageGenerator.css';
// import Navbar from '../Navbar/Navbar';
// import PointsContext from '../../context/pointsContext';

// const ImageGenerator = () => {
//   const [data, setData] = useState("");
//   const points = useContext(PointsContext);
//   const [query, setQuery] = useState("");

//   const getData = async () => {
//     const queryValue = document.getElementById('txtQuery').value;
//     if (!queryValue) return;
//     try {
//       const res = await fetch(`${process.env.BACKEND_URL}/api/v1/images`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           "Authorization": "Bearer " + localStorage.getItem('authToken')
//         },
//         body: JSON.stringify({ searchText: queryValue }),
//       });

//       if (!res.ok) {
//         throw new Error(`Error ${res.status}: ${res.statusText}`);
//       }

//       const d = await res.json();
//       console.log(d);
//       if (d?.status === 'success') {
//         console.log('Image URL:', d.data.url); // Add this log statement
//         setData(d.data.url);
//         points.setUserPoints(points.userPoints - 1);
//       }
//       // if (d?.status === 'success') {
//       //   setData(d.data.url);
//       //   points.setUserPoints(points.userPoints - 1);
//       // }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <Navbar page="image" />
//       <div className='image-generator-main-container'>
//         <h2>Image Generator</h2>
//         <div>
//           <input id='txtQuery' type='text'></input>
//           <button onClick={getData}>Go</button>
//         </div>
//         {/* If data, display */}
//         {data && <img src={data} alt="Generated Image" />}
//       </div>
//     </>
//   );
// };

// export default ImageGenerator;






// import React, { useContext, useEffect, useState } from 'react';
// import './ImageGenerator.css';
// import Navbar from '../Navbar/Navbar';
// import PointsContext from '../../context/pointsContext';

// const ImageGenerator = () => {
//   const [data, setData] = useState("");
//   const points = useContext(PointsContext);
//   const [query, setQuery] = useState("");

//   const getData = async () => {
//     const queryValue = document.getElementById('txtQuery').value;
//     if (!queryValue) return;
//     try {
//       const res = await fetch(`${process.env.BACKEND_URL}/api/v1/images`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           "Authorization": "Bearer " + localStorage.getItem('authToken')
//         },
//         body: JSON.stringify({ searchText: queryValue }),
//       });

//       if (!res.ok) {
//         throw new Error(`Error ${res.status}: ${res.statusText}`);
//       }

//       const d = await res.json();
//       console.log(d);
//       if (d?.status === 'success') {
//         console.log('Image URL:', d.data.url); // Add this log statement
//         setData(d.data.url);
//         points.setUserPoints(points.userPoints - 1);
//       }
//       // if (d?.status === 'success') {
//       //   setData(d.data.url);
//       //   points.setUserPoints(points.userPoints - 1);
//       // }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <Navbar page="image" />
//       <div className='image-generator-main-container'>
//         <h2>Image Generator</h2>
//         <div>
//           <input id='txtQuery' type='text'></input>
//           <button onClick={getData}>Go</button>
//         </div>
//         {/* If data, display */}
//         {data && <img src={data} alt="Generated Image" />}
//       </div>
//     </>
//   );
// };

// export default ImageGenerator;


import React, { useContext, useState } from 'react';
import './ImageGenerator.css';
import Navbar from '../Navbar/Navbar';
import PointsContext from '../../context/pointsContext';
require('dotenv').config();


const ImageGenerator = () => {
    const [data, setData] = useState("");
    const [error, setError] = useState("");
    const points = useContext(PointsContext);

    const getData = async () => {
        const query = document.getElementById('txtQuery').value;
        if (!query) return;

        try {
            const BACKEND_URL = process.env.BACKEND_URL

            const res = await fetch(`${BACKEND_URL}/api/v1/images`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
                },
                body: JSON.stringify({ searchText: query }),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const d = await res.json();

            if (d?.status === 'success') {
                setData(d.data.url);
                points.setUserPoints(points.userPoints - 1);
            } else {
                throw new Error('Failed to fetch image');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <Navbar page="image" />
            <div className='image-generator-main-container'>
                <h2>Image Generator</h2>
                <div>
                    <input id='txtQuery' type='text' placeholder="Enter search term" />
                    <button onClick={getData}>Go</button>
                </div>
                {error && <div className="error">{error}</div>}
                {data && <img src={data} alt='Generated' />}
            </div>
        </>
    );
};

export default ImageGenerator;