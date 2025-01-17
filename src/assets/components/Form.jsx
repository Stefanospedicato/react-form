import { useState } from "react"

const Form = () => {



  return (
    <>
      <form>
        <div className="container my-5">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Scrivi titolo da aggiungere..." aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon1">Aggiungi</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Form