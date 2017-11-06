import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import App from "../App"

import Story from "../components/Story";
import { RemoveButton } from "../components/Story/Styles";

const Wrapper = styled.div`margin: 20px;`;

export default class StoryList extends Component {

    render() {
        const items = this.props.items;
        return (
            <Wrapper>
                {items.map((item, i) =>
                    <Story key={item.id} item={item} rank={i + 1}>
                        <RemoveButton>
                            <span onClick={this.handleClick.bind(this, items, {i})}>x</span>
                        </RemoveButton>
                    </Story>
                )}
            </Wrapper>
        );
    }

    handleClick(items, i) {
        this.props.hoge.call(this, items, i);
    }
}
