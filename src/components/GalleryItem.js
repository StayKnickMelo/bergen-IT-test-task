import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ photosRow }) => {

  return (
    <div className="gallery-row">
      {photosRow.map(photo => (
        <Fragment>
          <div style={{ background: `url('${photo.url}')` }} className="gallery-item">
            <div className="gallery-item-link">
              <Link className="link" to={`/photo/${photo.id}`}>More</Link>
            </div>
          </div>
        </Fragment>
      ))}
    </div>

  );
};

export default GalleryItem
