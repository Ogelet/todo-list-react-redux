import React, {Fragment} from "react";
import PropTypes from "prop-types";

const TodoItemViewable = ({text, toggleIsModifiable}) => (
    <Fragment>
        <label onDoubleClick={toggleIsModifiable}>{text}</label>
        <button onClick={toggleIsModifiable}>Edit</button>
    </Fragment>
);


TodoItemViewable.propTypes = {
    text: PropTypes.string.isRequired,
    toggleIsModifiable: PropTypes.func.isRequired,
};

export default TodoItemViewable;