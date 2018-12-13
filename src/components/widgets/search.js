import React from 'react'
import './search.css'
const Search = (props) => (
  <form onSubmit={props.handleSubmit} className="Search">
    <input ref={props.setRef} className="Search-input" type="text" placeholder="Busca to video favorito" name="search"/>
  </form>
)

export default Search