import React from 'react';
import PropTypes from 'prop-types';
import dateIcon from '../images/Vector.png';
import CountryIcon from '../images/local-icon.png';
import destinyIcon from '../images/destiny-icon.png';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">
          {name}
        </p>
        <div className="missions-infos">
          <div className="info-div">
            <img src={ dateIcon } alt="date-icon" className="icon-info-div" />
            <p data-testid="mission-year">
              {year}
            </p>
          </div>
          <div className="info-div">
            <img src={ CountryIcon } alt="country-icon" className="icon-info-div" />
            <p data-testid="mission-country">
              {country}
            </p>
          </div>
          <div className="info-div">
            <img src={ destinyIcon } alt="destiny-icon" className="icon-info-div" />
            <p data-testid="mission-destination">
              {destination}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
