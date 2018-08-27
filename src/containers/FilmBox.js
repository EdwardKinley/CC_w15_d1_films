import React from 'react';
import FilmList from '../components/FilmList.js';

class FilmBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [
        {name: 'The Happytime Murders', filmLink: 'https://www.imdb.com/title/tt1308728/?ref_=shtt_ov_tt', timesLink: 'https://www.imdb.com/showtimes/title/tt1308728/?ref_=shlc_li_i', watchlist: 'no'},
        {name: 'Cold War', filmLink: 'https://www.imdb.com/title/tt6543652/?ref_=shtt_ov_tt', timesLink: 'https://www.imdb.com/showtimes/title/tt6543652?date=2018-08-31&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=11468689-c6cf-4171-acbb-3b9e94cd223b&pf_rd_r=MEPHSFB44E6Y76G93SBD&pf_rd_s=center-2&pf_rd_t=15021&pf_rd_i=tt6543652&ref_=tt_wbr_sh', watchlist: 'yes'},
        {name: 'The Nun', filmLink: 'https://www.imdb.com/title/tt5814060/?ref_=rlm', timesLink: 'https://www.imdb.com/showtimes/title/tt5814060?date=2018-09-06&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=11468689-c6cf-4171-acbb-3b9e94cd223b&pf_rd_r=6H278VC3CH6KDSTA6W76&pf_rd_s=center-2&pf_rd_t=15021&pf_rd_i=tt5814060&ref_=tt_wbr_sh', watchlist: 'no'},
        {name: 'The Predator', filmLink: 'https://www.imdb.com/title/tt3829266/?ref_=rlm', timesLink: 'https://www.imdb.com/showtimes/title/tt3829266?date=2018-09-12&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=11468689-c6cf-4171-acbb-3b9e94cd223b&pf_rd_r=2HA7FBHMSKZFBSDVPCXM&pf_rd_s=center-2&pf_rd_t=15021&pf_rd_i=tt3829266&ref_=tt_wbr_sh', watchlist: 'no'}
      ],
      openings: 'https://www.imdb.com/calendar/?region=gb&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2f2bb126-46f8-48e8-a719-204cafffa9d4&pf_rd_r=J5GDK0DCRH0P6D7DYK7A&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_sm',
      showtimes: 'https://www.imdb.com/showtimes/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=7c987158-6384-4b4b-ba5a-686de6f49cfd&pf_rd_r=J5GDK0DCRH0P6D7DYK7A&pf_rd_s=right-5&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_sh_lk1'
    };
  }
  render() {
    return (
      <div className="film-box">
        UK Opening This Week
        <FilmList films={this.state.films} />
        <p><a href={this.state.openings}>See more opening this week >></a></p>
        <p><a href={this.state.showtimes}>Get showtimes >></a></p>
      </div>
    )
  }
}

export default FilmBox;
