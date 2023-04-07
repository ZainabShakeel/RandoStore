import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Navbar />

      <button className="btn btn-warning m-5 " onClick={() => navigate(-3)}>
        <p className="mb-0">Go back to 3 screens</p>
      </button>
    </div>
  );
}
