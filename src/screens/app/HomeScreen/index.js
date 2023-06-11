import * as React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,



} from 'react-native';
import { _styles } from '../../../styles';
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/icons/profile.png')}
                    style={styles.headerimg1} />
                <View style={styles.headertext}>
                    <Text style={styles.description}>John Doe</Text>
                    <Text style={styles.description}>abcd</Text>
                </View>

                <Image source={require('../../../assets/images/menu1.png')}
                    style={styles.headerimg2}
                />
            </View>
            <View style={styles.searchbar}>
                
                <TextInput placeholder='Search'
                    style={styles.searchinput}
                />
                <Image source={require('../../../assets/images/search.png')}
                    style={styles.searchimg} />

            </View>
        </View>






    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: "100%",
        padding: 10,
    },
    header: {
        flexDirection: "row",
        width: "100%",
        //backgroundColor:"grey",
        height: 40,
        //justifyContent:""
        //marginHorizontal: 0
    },
    headerimg1: {
        width: 40,
        height: "100%",
    },
    headerimg2: {
        width: 40,
        height: "100%",
        marginLeft: 160
    },
    description: {
        color: "#87BEFF",
        fontSize: 20,
        fontWeight: "bold",

    },
    headertext: {
        justifyContent: "center",
        //backgroundColor: "blue",
        marginLeft: 7
    },
    searchbar: {
        flexDirection: "row",
        width: "100%",
        height:45,
        //backgroundColor:"cyan",
        marginTop:25,
        //paddingHorizontal:10,
       // paddingRight:15
    },
    searchinput: {
        flex:1,
        //width:"100%",
        borderWidth: 1,
        borderRadius:15,
        //justifyContent:"center",
        alignSelf:"center"
    },
    searchimg: {
        width:40,
        height:"90%",
        position:"absolute",
        left:"85%"
    }



})