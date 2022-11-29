import React from 'react';
import { View, StyleSheet,} from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import {
  Title,
  Caption,
  Text,
  TouchableRipple,
  
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const App = () => {
  const radius = 70;
  const circleCircumference = 2 * Math.PI * radius;

  const recusa = 25;
  const aceito = 30;
  const concluido = 50;
  const total = recusa + aceito + concluido;

  const recusaPercentage = (recusa / total) * 100;
  const aceitoPercentage = (aceito / total) * 100;
  const concluidoPercentage = (concluido / total) * 100;

  const recusaStrokeDashoffset =
    circleCircumference - (circleCircumference * recusaPercentage) / 100;
  const aceitoStrokeDashoffset =
    circleCircumference - (circleCircumference * aceitoPercentage) / 100;
  const concluidoStrokeDashoffset =
    circleCircumference - (circleCircumference * concluidoPercentage) / 100;

  const recusaAngle = (recusa / total) * 360;
  const aceitoAngle = (aceito / total) * 360;
  const concluidoAngle = recusaAngle + aceitoAngle;

  return (
    <View style={styles.container}>
      <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:30,
              marginBottom: 5,
            }]}>Dashboard</Title>
            <Caption style={styles.caption}>Usuario</Caption>
          </View>
      <View style={styles.graphWrapper}>
        <Svg height="160" width="160" viewBox="0 0 180 180">
          <G rotation={-90} originX="90" originY="90">
            { total === 0 ? (
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke="#F1F6F9"
                fill="transparent"
                strokeWidth="40"
              />
             ) : (
               <>
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#F05454"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={recusaStrokeDashoffset}
                  rotation={0}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                 />
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#efbc1c"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={aceitoStrokeDashoffset}
                  rotation={recusaAngle}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                 />
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#62a744"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={concluidoStrokeDashoffset}
                  rotation={concluidoAngle}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                />
               </>
             )
            }
          </G>
        </Svg>
        <Text style={styles.label}>{total}</Text>
      </View>


      <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <MaterialCommunityIcons  name="account-group" color="#c9c7c7" size={25}/>
          <Text style={styles.menuItemText}>Total= 100</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <MaterialCommunityIcons  name="account-switch" color="#efbc1c" size={25}/>
          <Text style={styles.menuItemText}>Em Andamento= 25</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <MaterialCommunityIcons  name="account-multiple-check" color="#62a744" size={25}/>
          <Text style={styles.menuItemText}>Concluidos= 50</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <MaterialCommunityIcons  name="account-multiple-remove" color="#F05454" size={25}/>
          <Text style={styles.menuItemText}>Recusados= 25</Text>
          </View>
        </TouchableRipple>


        <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#292929',
            borderRightWidth: 1
          }]}>
            <Caption style={[styles.duplo, { color:'#c9c7c7'}]}>Meta</Caption>
            <Title style={[styles.duplo, { color:'#c9c7c7'}]}>200</Title>

          </View>
          <View style={styles.infoBox}>
            <Caption style={[styles.duplo, { color:'#c9c7c7'}]}>Atual</Caption>
            <Title style={[styles.duplo, { color:'#c9c7c7'}]}>100</Title>

          </View>
      </View>

    </View>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#191919"
  },
  graphWrapper: {
    marginTop:25,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    position: "absolute",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 24,
    color:"#c9c7c7"
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#c9c7c7',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  title: {
    color:'#c9c7c7',
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    color:'#c9c7c7',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },

  infoBoxWrapper: {
    borderBottomColor: '#292929',
    borderBottomWidth: 1,
    borderTopColor: '#292929',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    color:'#c9c7c',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
duplo:{
    color:"#c9c7c"
  },
});