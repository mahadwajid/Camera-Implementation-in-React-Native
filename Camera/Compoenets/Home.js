import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function Home() {
    const navigation = useNavigation();
    return(
        <View style = {{flex: 1, justifyContent: "center", flexDirection: 'column', alignItems: 'center',}}>
        {/* <ImageBackground style = {styles.container} source={require('../../assets/images/imageBackground.png')} resizeMode="cover"> */}
        <Text style = {styles.heading}>
            Welcome To Assignment 02
        </Text>
        <View style = {styles.buttonConatiner}>
            <Button mode="contained" onPress={() => navigation.navigate('TakePicture')}>Open Camera</Button>
            <Button mode="contained" onPress={() => navigation.navigate('ViewPicture')}>View Pictures</Button>
        </View>
        {/* </ImageBackground> */}
   </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    heading: {
        marginBottom: 250,
        fontWeight: '800',
        fontSize: 25,
    },
    buttonConatiner: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
    },
});
export default Home;