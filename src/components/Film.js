import React from 'react';

const Film = function (props) {
  return (
    <tr>
      <td>{props.watchlist}</td>
      <td><a href={props.filmLink}>{props.name}</a></td>
      <td><a href={props.timesLink}>Showtimes</a></td>
    </tr>
  );
}

export default Film;
