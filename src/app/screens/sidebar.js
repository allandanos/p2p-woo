import React, { Component } from "react";
import { Image } from "react-native";

import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Button,
  View,
  StyleProvider,
  getTheme,
  variables,
} from "native-base";

const datas = [
  {
    name: "Orders",
    route: "Orders",
    icon: "paper",
    bg: "#C5F442",
  },
  {
    name: "Template",
    route: "Orders",
    icon: "image",
    bg: "#cc0000",
  },
  {
    name: "Config",
    route: "Config",
    icon: "menu",
    bg: "#BE6F50",
  },
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

  render() {
    return (
      <Container>
        <Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
          <View style={{ marginTop: 40 }} />
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
                <Left>
                  <Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
                  <Text >
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                <Right style={{ flex: 1 }}>
                  <Badge
                    style={{
                      borderRadius: 3,
                      height: 25,
                      width: 72,
                      backgroundColor: data.bg,
                    }}
                  >
                    <Text >{`${data.types} Types`}</Text>
                  </Badge>
                </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
