import { Component } from "react";
import Navbar from "../Components/Navbar";
import ArtistItem from "./ArtistItem";

export default class ArtistsList extends Component {
  constructor() {
    super();
    this.state = {
      allArtists: "",
      errMsg: "",
    };
  }

  renderAllArtists = () => {
    if (this.state.allArtists.length > 0) {
      return this.state.allArtists.map((artist) => {
        return <ArtistItem key={artist.id} artistInfo={artist} />;
      });
    } else if (this.state.errMsg) {
      return (
        <h1 className="alert alert-danger">Check ur Internet Connection</h1>
      );
    } else {
      return <h1>Getting Data...</h1>;
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="my-4">{this.renderAllArtists()}</div>
      </div>
    );
  }

  componentDidMount() {
    fetch("http://localhost:3002/artists")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ allArtists: data });
        this.setState({ errMsg: "" });
      })
      .catch((err) => {
        this.setState({ errMsg: err });
      });
  }
}