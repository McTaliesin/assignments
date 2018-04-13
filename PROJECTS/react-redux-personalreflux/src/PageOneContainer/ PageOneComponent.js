import React from "react";

function PageOneComponent(props){
    return (
      <form onSubmit={props.handleSubmit}>
          <label>
              Norris:
              <input
                  name="norris"
                  value={props.norris}
                  onChange={props.handleChange}
              />
          </label>
          <button>Nother Joke</button>
      </form>
    )
}

export default PageOneComponent;
