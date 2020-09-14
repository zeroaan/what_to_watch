import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;

    if (location.state) {
      const {
        location: {
          state: { genres, poster, summary, title, year },
        },
      } = this.props;

      return (
        <div className="detail__container">
          <div className="detail__poster">
            <img src={poster} alt={title} title={title} />
          </div>
          <div className="detail__data">
            <h3 className="detail__title">{title}</h3>
            <p className="detail__year">{year}</p>
            <ul className="detail__genres">
              {genres.map((genre, idx) => (
                <li key={idx} className="genres__li">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="detail__summary">{summary.slice(0, 350)}...</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
