import React, { useEffect } from 'react';
import Loader from './Loader';

import { connect } from 'react-redux';
import { fetchPhoto } from '../actions/photos';
import PropTypes from 'prop-types';

const Photo = ({ match, photo, fetchPhoto }) => {

  const id = match.params.id;

  useEffect(() => {
    fetchPhoto(id);
  }, []);

  return (

    photo !== null && photo.url ? (
      <div className="photo-container">
        <h1 className="photo-title">{photo.title}</h1>
        <div className="photo" >
          <img className="photo-img" src={photo.url} alt="" />
        </div>
        <a className="photo-link" href={photo.url}>Link</a>
      </div>
    ) :
      <Loader />
  )
};

const mapStateToProps = (state) => ({
  photo: state.photo.photo
});

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
  fetchPhoto: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { fetchPhoto })(Photo)
