import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity, Modal, ScrollView, Image, ActivityIndicator, TextInput, Alert } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { StatusBar } from 'expo-status-bar';
import Header from './shared/header';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


const ModalPopUp = ({ visible, children }:  { visible: any, children: any}) => {
  const [showModal, setShowModal] = React.useState(visible);
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () =>{
    if (visible){
      setShowModal(true);
    }else {
      setShowModal(false);
    }
  };
  return <Modal transparent visible={showModal}>
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>{children}</View>
            </View>
         </Modal>
};

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <Header text={'Juan Ad Concept'}></Header>
      <View style={styles.content}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>Pre-Made Designs</Text>
        </View>

        <View style={styles.productsRow}>
          <View style={styles.productsShowcase}>
            <ModalPopUp visible={visible}>
                <View style={{alignItems: 'center'}}>
                  <View style={styles.popupHeader}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                    <AntDesign name="closecircle" size={24} color="white" />
                    </TouchableOpacity>
                  </View>

                </View>
                <View style={{alignItems: 'center'}}>
                  <Image source={require('../tshirtDesign1.jpg')} style={styles.popupProductImage}/>
                </View>
                <View style={styles.popupTextContainer}>
                  <Text style={styles.popupText}>T-shirt Design</Text>
                  <Text style={styles.popupText}>Price: 150.00</Text>
                </View>

              </ModalPopUp>

            <View style={styles.productImageContainer}>
              <Image source={require('../tshirtDesign1.jpg')} style={styles.productImage}/>
            </View>
            <View style={styles.productInfo}>
              <Button title="Show"  onPress={() => setVisible(true)}></Button>
            </View>
          </View>
          
          <View style={styles.productsShowcase}>
            <View style={styles.productImageContainer}>
              <Image source={require('../tshirtDesign2.jpg')} style={styles.productImage}/>
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productInfoText}>T-shirt Design</Text>
              <Text style={styles.productInfoText}>Price: 120.0 php</Text>
            </View>
            </View>
        </View>
        <View style={styles.productsRow}>
          <View style={styles.productsShowcase}>
            <View style={styles.productImageContainer}>
              <Image source={require('../jacketDesign1.jpg')} style={styles.productImage}/>
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productInfoText}>Jacket Design</Text>
              <Text style={styles.productInfoText}>Price: 200.0 php</Text>
            </View>
          </View>
          <View style={styles.productsShowcase}>
            <View style={styles.productImageContainer}>
              <Image source={require('../jacketDesign2.jpg')} style={styles.productImage}/>
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productInfoText}>Jacket Design</Text>
              <Text style={styles.productInfoText}>Price: 165.0 php</Text>
            </View>
          </View>
        </View>
        <View style={styles.productsRow}>
          <View style={styles.productsShowcase}>
            <View style={styles.productImageContainer}>
              <Image source={require('../tarpDesign1.jpg')} style={styles.productImage}/>
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productInfoText}>Tarpaulin Design</Text>
              <Text style={styles.productInfoText}>Price: 350.0 php</Text>
            </View>
          </View>
          <View style={styles.productsShowcase}>
            <View style={styles.productImageContainer}>
              <Image source={require('../tarpDesign2.jpg')} style={styles.productImage}/>
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productInfoText}>Tarpaulin Design</Text>
              <Text style={styles.productInfoText}>Price: 220.0 php</Text>
            </View>
            </View>
        </View>
      </View>
      <View style={styles.navigation}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  content:{
    height: '100%',
    width: '85%',
    alignItems: 'center',
  },
  descriptionContainer:{
    height: 60,
    width: '100%',
    paddingTop: 20,
  },
  descriptionText:{
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 1,
  },
  productsRow:{
    height: 170,
    width: '100%',
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productsShowcase:{
    height: '100%',
    width: '49%',
    flexDirection: 'column',
    borderRadius: 15,
    overflow: 'hidden'
  },
  productImageContainer:{
    height: '80%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation:{
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CDCFD1',
    overflow: 'hidden',
  },
  productInfoText:{
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CDCFD1',
    overflow: 'hidden',
  },
  productInfo:{
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CDCFD1',
    overflow: 'hidden',
  },
  showButton:{
    height: '100%',
    width: '100%',
  },
  productImage: {
    height:'100%',
    width:'100%',
  },
  modalBackground:{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer:{
    width:'80%',
    backgroundColor: 'white', 
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  popupHeader:{
    width:'100%',
    height: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  popupProductImage:{
    height: 150,
    width: 150,
    marginVertical: 10
  },
  popupTextContainer:{
    height: 50,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupText:{
    fontSize: 20,
  },
});