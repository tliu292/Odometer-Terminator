import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, TextInput, Platform, Image } from 'react-native';
import CameraPage from './CameraPage.js';
import {imagefile} from './CameraPage.js';

class EditPage extends React.Component {
  state = {
    image: this.props.route.params.image,
    mileage: ''
  }

  getMileage = async() => {
    let file = {
      name: "img.jpg",
      uri: this.state.image,
      type: 'image/jpg'
    };
  
    let body_form = new FormData();
    body_form.append('image', file);

    fetch('http://18.204.130.183:8000/mock', {
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: body_form
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({ mileage: responseJson.mileage});
        console.log(this.state.mileage)
      })
      .catch((error) => {
        alert(JSON.stringify(this.state.image));
        console.error(error);
      });
  };

  render() {
    const { image,mileage } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.submit}>
          OCR
          </Text>
          <View style={styles.container3}>
            <Image 
              source = {{
                uri: image
              }}
              style = {{ width: 335, height: 295,marginLeft:1, borderRadius: 8}}
            />
          </View>

          <View>
            <TouchableOpacity
              style={styles.submitbutton}
              onPress={this.getMileage}
            >
              <Text style={[{color: 'white'},{fontSize: 25},{alignItems:'center'},{paddingTop: 5}]}> Submit </Text>
            </TouchableOpacity>
          </View>

          <Text style={[{color: 'white'},{fontSize: 20},{marginLeft: 15},{marginBottom: 5}]}>
            OCR Results:
          </Text>
          <View style={styles.container4}>
            
            <Text style={[{color: 'white'},{fontSize: 18},{paddingTop: 5}]}>
              {mileage}
            </Text>
          </View>

        </View>

      </ScrollView>
    );
  
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161620'
  },
  container2: {
    backgroundColor: '#1d1d2a',
    borderColor: '#1d1d2a',
    opacity: 0.9,
    width: 340,
    height: 680,
    borderRadius:10,
    borderWidth: 1,
    marginLeft: 15
  },
  container3: {
    width: 340,
    height: 300,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    marginLeft: 15
  },
  container4: {
    width: 340,
    height: 300,
    backgroundColor:'#1d1d2a',
    borderColor: '#1d1d2a',
    borderRadius: 10,
    borderWidth: 2,
    marginLeft: 15,
    marginBottom: 50,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  submit: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 25
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 15
  },
  submitbutton: {
    alignItems: 'center',
    backgroundColor: '#0ad48a',
    borderColor: '#0ad48a',
    width: 330,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20
  },
  input1: {
    width: 300,
    fontSize: 15,
    height: 35,
    borderRadius:7,
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 15,
    padding: 5
  },
  input2: {
    width: 300,
    fontSize: 15,
    height: 120,
    borderRadius:7,
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 15,
    padding: 5
  },
  filebutton: {
    width: 300,
    height: 120,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filetext: {
    color: '#0ad48a',
    fontSize: 20,
  }
});

export default EditPage;