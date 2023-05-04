import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Show.css";

function Show() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleBooking = () => {
    const bookingData = {
      movieName: show.name,
      // add more relevant details here
    };
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    // redirect to booking form
    alert("Movie name successFully added at localStorage!");
    navigate("/");
  };

  return (
    <div>
      {show && (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{show.name}</h5>
            <p class="card-text">{show.summary}</p>
            <button onClick={handleBooking} className=" btn btn-primary">
              Book Movie Ticket
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Show;
