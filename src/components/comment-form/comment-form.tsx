import {Fragment, useState} from 'react';
import type {FormEvent} from 'react';
import type {ReviewInput} from '@/types/offer';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

function CommentForm() {
  const [review, setReview] = useState<ReviewInput>({comment: '', rating: 0});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((rating) => (
          <Fragment key={rating}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={rating}
              id={`${rating}-stars`}
              type="radio"
              checked={review.rating === rating}
              onChange={(event) => setReview((current) => ({...current, rating: Number(event.target.value)}))}
            />
            <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={['perfect', 'good', 'not bad', 'badly', 'terribly'][5 - rating]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        value={review.comment}
        onChange={(event) => setReview((current) => ({...current, comment: event.target.value}))}
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!review.rating || review.comment.trim().length < MIN_COMMENT_LENGTH || review.comment.length > MAX_COMMENT_LENGTH}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
