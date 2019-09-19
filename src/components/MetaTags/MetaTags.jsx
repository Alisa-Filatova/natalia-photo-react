import React from 'react';
import { Helmet } from 'react-helmet';
import { SITE_NAME } from '../../constants';

const MetaTags = ({ lang, title, description, keywords, image }) => {
  const titleText = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const meta = [
    description ? { name: 'description', content: description } : undefined,
    keywords ? { name: 'keywords', content: keywords } : undefined,
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: titleText },
    description ? { name: 'twitter:description', content: description } : undefined,
    image ? { name: 'twitter:image', content: window.location.origin + image } : undefined,
    { property: 'og:locale', content: lang },
    { property: 'og:url', content: window.location.href },
    { property: 'og:title', content: titleText },
    description ? { property: 'og:description', content: description } : undefined,
    image ? { property: 'og:image', content: window.location.origin + image } : undefined,
  ].filter(Boolean);

  return <Helmet htmlAttributes={{ lang }} title={titleText} meta={meta} />;

};

export default MetaTags;
