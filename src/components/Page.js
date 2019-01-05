import React from 'react';
import PropTypes from 'prop-types';

class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.setYear(year);
  };
  render() {
    const { photos, year } = this.props;
    return (
      <div>
        <div>
          <button onClick={this.onBtnClick}>2014</button>
          <button onClick={this.onBtnClick}>2015</button>
          <button onClick={this.onBtnClick}>2016</button>
          <button onClick={this.onBtnClick}>2017</button>
          <button onClick={this.onBtnClick}>2018</button>
          <button onClick={this.onBtnClick}>2019</button>
        </div>
        <p>
          У тебя {photos.length} фото за {year} год
        </p>
      </div>
    );
  }
}

export default Page;

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
};
