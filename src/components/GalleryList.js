import React, {useEffect } from 'react';
import GalleryItem from './GalleryItem';
import Loader from './Loader';

import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/photos';
import PropTypes from 'prop-types'

export const GalleryList = ({ fetchPhotos, photo: { photos } }) => {

  useEffect(() => {
    fetchPhotos()
  }, [])

  return (
    photos.length > 0 ?
      (<div className="gallery">
        {photos.map((row) => (
          <GalleryItem key={row[0].title} photosRow={row} />
        ))}
      </div>) :
      <Loader />
  )
};

const mapStateToProps = (state) => ({
  photo: state.photo
});

GalleryList.propTypes = {
  photos: PropTypes.array.isRequired,
  fetchPhotos: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { fetchPhotos })(GalleryList);
