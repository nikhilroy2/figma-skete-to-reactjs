import React from 'react';
import useMetaMask from './store/dapp';
import connectWalletImage from './images/connect-wallet.png'
import disconnectWalletImage from './images/disconnect-wallet.png';
import "./App.css"
import axios from "axios";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//  Pages import
import Page1 from './Pages/Page1/Page1';
import Opportunities from './Pages/Opportunities/Opportunities';
import MyAssets from './Pages/MyAssets/MyAssets';
import CreateMarket from './Pages/CreateMarket/CreateMarket';
import FindOpportunities from './Pages/FindOpportunities/FindOpportunities';
import YourPosition from './Pages/YourPosition/YourPosition';
import RequestDemo from './Pages/RequestDemo/RequestDemo';
import LaunchShare from './Pages/LaunchShare/LaunchShare';
import RequestsDataScientist from './Pages/RequestsDataScientist/RequestsDataScientist';
import MyProjects from './Pages/MyProjects/MyProjects';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import SignIn from './Pages/SignIn/SignIn';
import PageList from './Pages/PageList/PageList';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
          <Route path="/page1" element={<Page1></Page1>}></Route>
        </Routes>
        <Routes>
          <Route path="/opportunities" element={<Opportunities></Opportunities>}></Route>
        </Routes>
        <Routes>
          <Route path="/my_assets" element={<MyAssets></MyAssets>}></Route>
        </Routes>
        <Routes>
          <Route path="/create_market" element={<CreateMarket></CreateMarket>}></Route>
        </Routes>
        <Routes>
          <Route path="/find_opportunities" element={<FindOpportunities></FindOpportunities>}></Route>
        </Routes>
        <Routes>
          <Route path="/your_position" element={<YourPosition></YourPosition>}></Route>
        </Routes>
        <Routes>
          <Route path="/request_demo" element={<RequestDemo></RequestDemo>}></Route>
        </Routes>
        <Routes>
          <Route path="/launch_share" element={<LaunchShare></LaunchShare>}></Route>
        </Routes>
        <Routes>
          <Route path="/request_data_scientist" element={<RequestsDataScientist></RequestsDataScientist>}></Route>
        </Routes>
        <Routes>
          <Route path="/my_projects" element={<MyProjects></MyProjects>}></Route>
        </Routes>
        <Routes>
          <Route path="/profile_page" element={<ProfilePage></ProfilePage>}></Route>
        </Routes>
        <Routes>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
        </Routes>
        <Routes>
          <Route path="/page_list" element={<PageList></PageList>}></Route>
        </Routes>
        <Routes>
          <Route path="/"  element={<HomePage></HomePage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


function HomePage() {
  const { mintMLModel, ConnectWallet, connected, DisconnectWallet, walletAddr, address, modelInfos } = useMetaMask();
  const [presignedUrl, setPresignedUrl] = useState("");
  const [key, setKey] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [isUpload, setIsUpload] = useState(true);
  const [uploadContent, setUploadContent] = useState("Drop your watermarked Machine Learning Model");
  function handleChange(event) {
    setUploadContent(event.target.files[0].name);
    setFile(event.target.files[0])
    var config = {
      method: 'get',
      url: 'http://localhost:5000/api/v1/get-presigned-url',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setKey(response.data.key)
        setPresignedUrl(response.data.presigned_url)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  function handleUploadFile(event) {
    event.preventDefault()
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    setUploadContent("Uploading " + file.name);
    setIsUpload(true);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    console.log(file);
    if (presignedUrl === "") return;
    axios.put(presignedUrl, formData, config)
      .then((response) => {

        setUploadContent("Drop your watermarked Machine Learning Model");
        alert("Uploaded successfully!");
        setIsUpload(false)
      })
      .catch(error => {
        // Error
        if (error.response) {
          if (error.response.status == "403") {
            alert("This presiged url was expired already!");
            return;
          }
        } else if (error.request) {
          alert("Error in uploading!")
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          alert("Error in uploading!")
        }
        alert("Error in uploading!")
      })

  }

  return (
    <div className="page-container">
      <div style={{ width: "80%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 className='text-center' style={{ fontSize: 40, color: "orange", fontFamily: "fantasy" }}>MACHINE LEARNING NFT MARKETPLACE</h2>
        <img src={connected ? disconnectWalletImage : connectWalletImage} onClick={!connected ? ConnectWallet : DisconnectWallet} width={300} alt='metamask' />
        <p>{address}</p>
        <label htmlFor="upload-file" className='m-10 text-focus-center' style={{ border: "2px solid whitesmoke", borderRadius: 10, borderStyle: "dashed", height: 200, width: 600 }}>
          <h4 style={{ color: "Background", fontFamily: 'inherit', textAlign: "center" }}>
            {
              uploadContent
            }
          </h4>
        </label>
        <input type="file" id="upload-file" onChange={handleChange} hidden />
        <button type="button" onClick={handleUploadFile} className="btn btn-dark m-10" style={{ backgroundColor: "#27761a" }}>Upload to Storj</button>
        <label style={{ color: 'white' }}>Description</label>
        <textarea rows="4" cols="50" value={description} onChange={e => setDescription(e.target.value)} />
        <button disabled={isUpload} type="button" onClick={() => mintMLModel(key, description)} className="btn btn-dark m-10" style={{ backgroundColor: "#27761a" }}>Register ML Model to Blockchain</button>
        <h3 style={{ color: 'orange' }}>Your Machine Learning Model NFTs</h3>
        <table className="table table-dark" style={{ backgroundColor: "black", width: "100%" }}>
          <thead>
            <tr>
              <th>Token Id</th>
              <th>Description</th>
              <th>Key</th>
              <th>Owner</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {
              modelInfos.map((m, i) => {
                return (
                  <tr key={i}>
                    <td>#{i + 1}</td>
                    <td>{m[0]}</td>
                    <td>{m[1]}</td>
                    <td>{
                      m[2].substring(0, 4) +
                      "..." +
                      m[2].substring(m[2].length - 6, m[2].length)
                    }</td>
                    {/* <td>
                      <div className="btn-group">
                        <button type="button" className="btn btn-dark" style={{ backgroundColor: "#27761a" }}>Install</button>
                        <button type="button" className="btn btn-dark">Uninstall</button>
                      </div>
                    </td> */}
                  </tr>
                )
              })
            }

          </tbody>
        </table>

      </div>
    </div>
  )
}