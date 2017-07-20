import React, { Component } from "react";
import { Content, Text, View } from "native-base";

class Item extends Component {

  render() {
    return (
      <Content>
        <View style={{ marginTop: 40 }} />
        <Text>{this.props.navigation.state.params.name}</Text>
      </Content>
    );
  }
}

export default Item;