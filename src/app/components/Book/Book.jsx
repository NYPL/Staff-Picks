import React from 'react';
import PropTypes from 'prop-types';
import { EReaderIcon, BookIcon } from '@nypl/dgx-svg-icons';
import { isEmpty as _isEmpty, isString as _isString } from 'underscore';
import config from '../../../../appConfig';
import utils from '../../utils/utils';

const Book = ({ pick, isJsEnabled }) => {
  const isStringEmpty = (string) => (!_isString(string) || _isEmpty(string.trim()));

  const getBookObject = (obj) => (obj.book || {});

  const getReviewsArray = (obj) => (obj.reviews || []);

  const getTagClasses = (arrayOfTags) => (
    !_isEmpty(arrayOfTags) ? arrayOfTags.join(' ') : '');

  const renderBookCoverImage = (imageUrl) => {
    const defaultImageUrl = `${config.baseUrl}src/client/images/book-place-holder.png`;
    const fullImgSrc = isStringEmpty(imageUrl) ? defaultImageUrl : imageUrl;
    return (
      <div className="book-item-image-box">
        <img alt="" src={fullImgSrc} />
      </div>
    );
  };

  const renderTitle = (title) => (
    !isStringEmpty(title) ? <h3 className="book-item-title">{title}</h3> : null
  );

  const renderAuthor = (author) => (
    !isStringEmpty(author) ? <p className="book-item-author">{author}</p> : null
  );

  const renderIllustrator = (illustrator) => (
    !isStringEmpty(illustrator) ?
      <p className="book-item-illustrator">Illustrated by {illustrator}</p> : null
  );

  const renderTranslator = (translator) => (
    !isStringEmpty(translator) ?
      <p className="book-item-translator">Translated by {translator}</p> : null
  );

  const renderCatalogLinks = (catalogUrl, ebookUrl) => {
    const catalogLink = !isStringEmpty(catalogUrl) ?
      <a href={catalogUrl} className="catalog-url">
        <BookIcon width="32px" height="32px" ariaHidden />
        <span>{config.requestUrlsText.catalog}</span>
      </a> : null;

    const ebookLink = !isStringEmpty(ebookUrl) ?
      <a href={ebookUrl} className="ebook-url">
        <EReaderIcon ariaHidden />
        <span>{config.requestUrlsText.ebook}</span>
      </a> : null;

    return (catalogLink || ebookLink) ?
      <div className="book-item-catalog-links">
        {catalogLink}
        {ebookLink}
      </div> : null;
  };

  const renderDescription = (reviewsArray) => {
    if (!_isEmpty(reviewsArray) && reviewsArray[0].text && reviewsArray[0].text.trim() !== '') {
      const text = reviewsArray[0].text;
      return <p className="book-item-description">{text}</p>
    }
    return null;
  };

  const renderTags = (tags, isJsEnabled) => {
    const tagsMarkup = !_isEmpty(tags) ?
      tags.map((tag, i) => <span key={i}>{tag}{i !== (tags.length - 1) ? ', ' : ''}</span>) : null;
    const hiddenClass = isJsEnabled ? 'visuallyHidden' : '';

    return (tagsMarkup) ? <p className={`book-item-tags ${hiddenClass}`}>{tagsMarkup}</p> : null;
  };

  if (_isEmpty(pick)) {
    return null;
  }

  const book = getBookObject(pick);
  const reviewsArray = getReviewsArray(pick);
  const tagsArray = utils.getPickTags(pick);
  const hasIllustratorTranslatorClass = !isStringEmpty(book.translator)
    && !isStringEmpty(book.illustrator) ? 'withTranslatorIllustrator' : '';

  return (
    <li
      className={`book-item ${getTagClasses(tagsArray)} ${hasIllustratorTranslatorClass}`}
      key={!isStringEmpty(book.title) ? book.title : null}
    >
      {renderBookCoverImage(book.imageUrl)}
      {renderTitle(book.title)}
      {renderAuthor(book.author)}
      {renderIllustrator(book.illustrator)}
      {renderTranslator(book.translator)}
      {renderCatalogLinks(book.catalogUrl, book.ebookUrl)}
      {renderDescription(reviewsArray)}
      {renderTags(tagsArray, isJsEnabled)}
    </li>
  );
};

Book.propTypes = {
  pick: PropTypes.object,
  isJsEnabled: PropTypes.bool,
};

export default Book;
