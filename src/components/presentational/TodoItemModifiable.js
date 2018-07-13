import React, {Fragment} from "react";
import PropTypes from "prop-types";

const TodoItemModifiable = ({text, editTodoItemHandler, toggleIsModifiable}) => (
    <Fragment>
        <input type="text" onChange={editTodoItemHandler} onKeyPress={(evt) => {
            if (evt.charCode === 13) {
                toggleIsModifiable(evt);
            }
        }} value={text}/>
        <button onClick={toggleIsModifiable}>Save</button>
    </Fragment>
);


TodoItemModifiable.propTypes = {
    text: PropTypes.string.isRequired,
    editTodoItemHandler: PropTypes.func.isRequired,
    toggleIsModifiable: PropTypes.func.isRequired,
};

export default TodoItemModifiable;