import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage}) {
  return (
    <div className="buttons are-grouped box has-text-centered">
      {gotoPrevPage ? (
        <button className="button is-danger" onClick={gotoPrevPage}>
          Previous
        </button>
      ) : (
        <button className="button is-danger" onClick={gotoPrevPage} disabled>
          Previous
        </button>
      )}
      {gotoNextPage ? (
        <button className="button is-success" onClick={gotoNextPage}>
          Next
        </button>
      ) : (
        <button className="button is-success" onClick={gotoNextPage} disabled>
          Next
        </button>
      )}
    </div>
  );
}
