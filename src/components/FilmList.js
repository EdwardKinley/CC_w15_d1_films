import React from 'react';
import Film from './Film.js';

class FilmList extends React.Component {
  render() {
    const filmComponents = this.props.films.map((film) => {
      return (<Film name={film.name} watchlist={film.watchlist} filmLink={film.filmLink} timesLink={film.timesLink}>{film.name}</Film>);
    });
    return (
      <table className="film-list">
        {filmComponents}
      </table>
    );
  }
}

export default FilmList;
