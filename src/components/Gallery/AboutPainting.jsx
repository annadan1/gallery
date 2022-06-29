import React from 'react';

const AboutPainting = ({ painting, getAuthorName, getAuthorLocation }) => (
  <div className="AboutPainting">
    <div className="PaintingName">{painting.name}</div>
    <div>
      <span className="TitleAbout">
        Author:
      </span>
      <span className="TextAbout">
        {` ${getAuthorName(painting.authorId)}`}
      </span>
    </div>
    <div>
      <span className="TitleAbout">
        Created:
      </span>
      <span className="TextAbout">
        {` ${painting.created}`}
      </span>
    </div>
    <div>
      <span className="TitleAbout">
        Location:
      </span>
      <span className="TextAbout">
        {` ${getAuthorLocation(painting.locationId)}`}
      </span>
    </div>
  </div>
);

export default AboutPainting;
