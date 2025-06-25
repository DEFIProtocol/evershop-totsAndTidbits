import React from 'react';
import PropTypes from 'prop-types';
import ColoredName from './ColoredName.svg'; // Import the SVG

export default function Logo({
  themeConfig: {
    logo: {
      src = ColoredName, // Default to ColoredName.svg
      alt = 'Tots & Tidbits',
      width = '72px',
      height = '72px'
    } = {} // Provide default empty object to avoid destructuring errors
  } = {}, // Provide default empty object to avoid destructuring errors
  dashboardUrl
}) {
  return (
    <div className="logo">
      <a href={dashboardUrl} className="flex items-end">
        <img src={src} alt={alt} width={width} height={height} />
      </a>
    </div>
  );
}

Logo.propTypes = {
  themeConfig: PropTypes.shape({
    logo: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string
    })
  }),
  dashboardUrl: PropTypes.string.isRequired
};

Logo.defaultProps = {
  themeConfig: {
    logo: {
      src: ColoredName, // Default to ColoredName.svg
      alt: 'Tots & Tidbits',
      width: '72px',
      height: '72px'
    }
  }
};

export const layout = {
  areaId: 'header',
  sortOrder: 10
};

export const query = `
  query query {
    themeConfig {
      logo {
        src
        alt
        width
        height
      }
    }
    dashboardUrl: url(routeId:"dashboard")
  }
`;
