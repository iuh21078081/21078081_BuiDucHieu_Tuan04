import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [lengthPass, setLengthPass] = useState<number>(0);
  const [password, setPassword] = useState<string>("");
  const [isCheckedLowerCase, setCheckedLowerCase] = useState(false);
  const [isCheckedUpperCase, setCheckedUpperCase] = useState(false);
  const [isCheckedNumber, setCheckedNumber] = useState(false);
  const [isCheckedSpecialSymbol, setCheckedSpecialSymbol] = useState(false);
  const handleGeneratePassWord = () => {
    let password = '';
    let characters =''
    if(isCheckedLowerCase){
      characters+='abcdefghijklmnopqrstuvwxyz';
    }
    if(isCheckedUpperCase){
      characters+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(isCheckedNumber){
      characters+='0123456789';
    }
    if(isCheckedSpecialSymbol){
      characters+='!@#$%^&*()_+';
    }
    if(characters.length===0){
      setPassword("");
    }
    for(let i=0;i<lengthPass;i++){
      password+=characters.charAt(Math.floor(Math.random() * characters.length))
    }
    setPassword(password);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textHeader}>
        <Text style={[styles.textWhite, { textAlign: 'center' }]}>PASSWORD</Text>
        <Text style={styles.textWhite}>GENERATOR</Text>
      </View>
      <View>
        <TextInput style={styles.inputPassword} value={password} editable={false} />
      </View>
      <View>
        <View style={styles.row}>
          <Text style={styles.textLabel}>Password length</Text>
          <TextInput style={styles.textInputLengthPass} onChangeText={(value)=>setLengthPass(+value)}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.textLabel}>Include lower case letters</Text>
          <Checkbox style={styles.checkBox} value={isCheckedLowerCase} onValueChange={()=>setCheckedLowerCase(!isCheckedLowerCase)} />
        </View>
        <View style={styles.row}>
          <Text style={styles.textLabel}>Include upcase letters</Text>
          <Checkbox style={styles.checkBox} value={isCheckedUpperCase} onValueChange={()=>setCheckedUpperCase(!isCheckedUpperCase)}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.textLabel}>Include number</Text>
          <Checkbox style={styles.checkBox} value={isCheckedNumber} onValueChange={()=>setCheckedNumber(!isCheckedNumber)}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.textLabel}>Include special symbol</Text>
          <Checkbox style={styles.checkBox} value={isCheckedSpecialSymbol} onValueChange={()=>setCheckedSpecialSymbol(!isCheckedSpecialSymbol)}/>
        </View>
      </View>
      <TouchableOpacity onPress={handleGeneratePassWord}>
        <View style={{ backgroundColor: "#3B3B98", width: 300, height: 60, justifyContent: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: '700', textAlign: 'center', color: 'white' }}>GENERATE PASSWORD</Text>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23235B',
    alignItems: 'center',
    padding: 20
    // justifyContent: 'center',
  },
  textHeader: {
    justifyContent: 'center',
    marginTop: 100,
    // flex:1,
  },
  textWhite: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputPassword: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#151537",
    borderRightWidth: 1,
    borderColor: "#151537",
    width: 300,
    height: 60,
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
  },
  textLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  textInputLengthPass: {
    backgroundColor: "#FFFFFF",
    width: 120,
    height: 35,
    color: 'black',
    padding: 5,
    textAlign: 'center',
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  row: {
    marginBottom: 50,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  checkBox: {
    borderColor: "#FFFFFF",
    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
    color:"black"
  }


});
