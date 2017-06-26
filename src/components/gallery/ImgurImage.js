import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ImgurImage = ({image}) => {
  const getUrl = () => {
    if (image.cover) {
      return `//imgur.com/${image.cover}.jpg`;
    } else {
      return image.link.replace('http://', '//');
    }
  };

  return (
    <div className="col-xs-12 item panel panel-primary pv-no-padding">
      <div className="panel-heading">{image.title}</div>
      <div className="panel-body">
        <a href={image.link}>
        <img className="img img-responsive" src={getUrl()} height="400" width="400"/>
        </a>
      </div>
      <div className="panel-footer">
        <div className=" col-xs-3">
          <div className="glyphicon glyphicon-thumbs-up"/>
          {image.ups}</div>
        <div className=" col-xs-3">
          <div className="glyphicon glyphicon-thumbs-down col-xs-3"/>
          {image.downs}</div>
        <div className=" col-xs-3">
          <div className="glyphicon glyphicon-eye-open col-xs-3"/>
          {image.views}</div>
        <div className=" col-xs-3">
          <div className="glyphicon glyphicon-comment col-xs-3"/>
          {image.comment_count}</div>
      </div>
    </div>
  );
};

ImgurImage.propTypes = {
  image: PropTypes.Object
};

export default ImgurImage;
