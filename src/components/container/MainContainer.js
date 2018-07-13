import React, {Component} from "react";
import InputContainer from "../container/InputContainer";
import TodoItemListContainer from "./TodoItemListContainer";
import CompletedFilter from "../presentational/CompletedFilter";
import Summary from "../presentational/Summary";


class MainContainer extends Component {
    render() {
        return (
            <div>
                <InputContainer/>
                <CompletedFilter />
                <TodoItemListContainer />
                <Summary />
            </div>
        );
    }
}

export default MainContainer;
