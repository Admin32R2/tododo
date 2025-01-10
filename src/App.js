import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const redirectToSubdomain = (file) => {
    navigate(`/${file}`);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => redirectToSubdomain("file1")}>Go to File1</button>
      <button onClick={() => redirectToSubdomain("file2")}>Go to File2</button>
       <button onClick={() => redirectToSubdomain("file3")}>Go to File3</button>
    </div>
  );
};

const FileDisplay = () => {
  const { fileName } = useParams();
  
  if (!["file1", "file2"].includes(fileName)) {
    return <h2>404 - File not found</h2>;
  }

  const contentMap = {
    file1: "This is File 1's content and functionality.",
    file2: "This is File 2's content and functionality.",
    file3: "This is File 3's content and functionality.",
  };

  const functionalityMap = {
    file1: () => console.log("Functionality for File 1 executed!"),
    file2: () => console.log("Functionality for File 2 executed!"),
    file3: () => console.log("Functionality for File 3 executed!"),
  };

  const handleClick = () => {
    if (functionalityMap[fileName]) {
      functionalityMap[fileName]();
    } else {
      console.log("No specific functionality for this file.");
    }
  };

  return (
    <div>
      <h2>Displaying content for {fileName}</h2>
      <p>{contentMap[fileName] || "No content available for this file."}</p>
      <button onClick={handleClick}>Run Functionality</button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:fileName" element={<FileDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;
