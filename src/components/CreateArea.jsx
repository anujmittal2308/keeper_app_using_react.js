import React, { useState } from "react";
//import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
//import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpend, setExpend] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function Expend() {
    setExpend(true);
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpend ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          onClick={Expend}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpend ? 3 : 1}
        />
        <Zoom in={isExpend}>
          <Fab onClick={submitNote}>
            <b>
              <AddIcon />
            </b>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
