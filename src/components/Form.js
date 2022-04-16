import React from 'react';

export default function Form() {
    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submitted a form")
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <button type="submit"> Submit </button>
        </form>
    </>
  );
}
