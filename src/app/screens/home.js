import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right, List, ListItem, Content, Icon } from "native-base";

const datas = [
  {
    name: "Item 1",
    route: "Item"
  },
];

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
          <View style={{ marginTop: 40 }} />
          <View style={{ marginBottom: 10 }}>
            <Button
              style={{ backgroundColor: "#104ADA", alignSelf: "flex-start" }}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Text>Menu >></Text>
            </Button>
            <View
              style={{
                alignItems: "center",
                marginBottom: 10,
                backgroundColor: "transparent",
              }}
            >
              <H3 >Orders</H3>
            </View>
          </View>
        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem onPress={() => this.props.navigation.navigate(data.route, {name: data.name})} >
                <Text >{data.name}</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default Home;
