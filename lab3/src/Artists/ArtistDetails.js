import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

let ArtistDetails = () => {
  let { id } = useParams();
  let [artist, setArtist] = useState({});

  let renderAlbums = () => {
    if (artist.albums.length > 0) {
      return artist.albums.map((album) => {
        return (
          <div className="col-12 mb-5">
            <div>
              <img
                alt="artist"
                className="album-images"
                src={`../imagesDay3/albums/${album.cover}.jpg`}
              />
            </div>
            <div className="text-secondary mt-3">
              <b>Title</b>: <span className="text-light">{album.title}</span>
            </div>
            <div className="text-secondary">
              <b>Year</b>: <span className="text-light">{album.year}</span>
            </div>
            <div className="text-secondary">
              <b>Price</b>: <span className="text-light">{album.price}$</span>
            </div>
          </div>
        );
      });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3002/artists/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArtist(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  let renderArtist = () => {
    if (artist.name) {
      return (
        <div className="container background text-center py-3 my-4">
          <div className="my-2">
            <img alt="album" src={`../imagesDay3/covers/${artist.cover}.jpg`} />
          </div>
          <p style={{ fontSize: "70px" }} className="text-primary">
            {artist.name}
          </p>
          <div>
            <p
              className="text-left"
              style={{ fontSize: "18px", color: "gray" }}
            >
              {artist.bio}
            </p>
          </div>
          <div className="text-primary">
            <p style={{ fontSize: "50px" }}>Albums</p>
            {renderAlbums()}
          </div>
        </div>
      );
    } else {
      return <h1>No artist</h1>;
    }
  };

  return (
    <div>
      <Navbar />
      {renderArtist()}
    </div>
  );
};

export default ArtistDetails;