import React from 'react';
import PropTypes from 'prop-types';
import { EReaderIcon, BookIcon } from 'dgx-svg-icons';
import config from '../../../../appConfig.js';
import utils from '../../utils/utils';

const Book = ({ book }) => {
  const tagArray = book.tags.map(tag => tag.toLowerCase().split(' ').join('-'));
  const tagClasses = tagArray.join(' ');

  const renderBookCoverImage = (imageUrl) => {
    const defaultImageUrl = `${config.baseUrl}src/client/images/book-place-holder.png`;
    const fullImgSrc = (!imageUrl || imageUrl === '') ? defaultImageUrl : imageUrl;
    return (
      <div className="book-item-image-box">
        <img alt="" src={fullImgSrc} />
      </div>
    );
  };

  const renderTitle = (title, link) => {
    const titleClass = 'book-item-title';

    if (title && title !== '') {
      if (link && link !== '') {
        return <h4 className={titleClass}><a href={link}>{title}</a></h4>;
      }
      return <h4 className={titleClass}>{title}</h4>;
    }
    return null;
  };

  const renderAuthor = (author) =>
    (author && author !== '') ? <p className="book-item-author">{author}</p> : null;

  const renderCatalogLinks = (catalogUrl, ebookUrl) => {
    const catalogLink = (catalogUrl && catalogUrl !== '') ?
      <a href={catalogUrl} className="catalog-url">
        <BookIcon width="32px" height="32px" ariaHidden />
        <span>REQUEST THE BOOK</span>
      </a> : null;
    const ebookLink = (ebookUrl && ebookUrl !== '') ?
      <a href={ebookUrl} className="ebook-url">
        <EReaderIcon ariaHidden />
        <span>REQUEST THE E-BOOK</span>
      </a> : null;

    return (catalogLink || ebookLink) ?
      <div className="book-item-catalog-links">
        {catalogLink}
        {ebookLink}
      </div> : null;
  };

  const renderDescription = (desc) =>
    (desc && desc !== '') ? <p className="book-item-description">{desc}</p> : null;

  return (
    <li
      className={`book-item ${tagClasses}`}
      key={book.title.trim()}
    >
      {renderBookCoverImage(book.imageUrl)}
      {renderTitle(book.title, '#')}
      {renderAuthor(book.author)}
      {renderCatalogLinks('#', '#')}
      {renderDescription(book.text)}
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object,
  index: PropTypes.number,
};

export default Book;
