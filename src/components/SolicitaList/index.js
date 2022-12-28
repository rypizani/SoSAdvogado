import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, View, ScrollView, StyleSheet } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TouchableRipple,
  Text,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SolicitaList({ data }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>

          <Card style={styles.card}>
            <Card.Title title={data.nome} />
            <Card.Content>
              
              <Title>{data.assunto}</Title>

              <Paragraph>{data.previa}</Paragraph>

            </Card.Content>
            <Card.Actions>
              

              <TouchableRipple onPress={() => console.log(assunto)}>
                <View style={styles.menuItem}>
                  <MaterialCommunityIcons
                    name="archive"
                    color="#000"
                    size={20}
                  />
                  <Text style={styles.menuItemText}>Aceitar</Text>
                </View>
              </TouchableRipple>
            </Card.Actions>
          </Card>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:2,
    borderRadius: 10,
    marginTop: 17

  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 15,
    
  },
  menuItemText: {
    color: "#c9c7c7",
    marginLeft: 5,
    fontWeight: "600",
    fontSize: 15,
    
  },
 

});
