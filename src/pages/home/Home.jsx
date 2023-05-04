import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const shows = props.shows;

  return (
    <div>
      <h1>TV Shows</h1>

      {shows.map((show) => (
        <div className="card mb-3" key={show.show.id}>
          {show.show.image && (
            <img
              src={show.show.image.medium}
              alt={show.show.name}
              className="card-img-top"
              width={400}
              height={500}
            />
          )}
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/show/${show.show.id}`}>{show.show.name}</Link>
            </h5>
            <p className="card-text">Status : {show.show.status}</p>
            <p className="card-text">Language : {show.show.language}</p>
            <p className="card-text">Time : {show.show.schedule.time}</p>
            <p className="card-text">Rating : {show.show.rating.average}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
