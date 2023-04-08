import React,{useState, useEffect, useRef} from 'react';
import axios from 'axios';

function App() {

  const [advertisements, setAdvertisements] = useState([])
  const componentref=useRef()

  useEffect(() => {
    function getAdvertisements() {
      axios.get("http://localhost:8087/api/v2/Advertisment").then((res) => {
      console.log(res.data)
        setAdvertisements(res.data);
      }).catch((err) => {
        alert(err.message)
      })
    }
    getAdvertisements();
  }, [])

  return (
    <div ref={componentref}>
            <center><caption style={{fontSize: "28px", width: "250px" }}>All Advertisements</caption></center>
            <center>
                <table style={{ width: "85%", border:"dotted"}} >
                    <tr style={{fontSize: "20px", fontWeight:"bold", paddingLeft:"10px"}}>
                        <th>Advertisement ID</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Author</th>
                        <th>Image</th>
                    </tr>

                    {advertisements && advertisements.map((advertisements, key) => (
                        <tr key={key}>
                            <td>{advertisements.adId}</td>
                            <td>{advertisements.adTitle}</td>
                            <td>{advertisements.adContent}</td>
                            <td>{advertisements.adAuthor}</td>
                            <td>{advertisements.adImage}</td>
                        </tr>
                    ))}
                </table>
            </center>
            </div>
  );
}

export default App;
