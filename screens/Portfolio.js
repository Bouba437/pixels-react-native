import { useLayoutEffect } from 'react';
import { Button, Image, Text, View, Platform, ScrollView, StyleSheet } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { globalStyles } from '../styles/AppStyles'
import Colors from '../styles/Colors';
import MaterialIconsHeader from '../components/MaterialIconsHeader';
import TouchableImage from '../components/TouchableImage';

// const Logo = () => {
//     return <Image 
//         source={require("../assets/images/camera.png")}
//         style={{width: 30, height: 30}}
//     />
// }

const Portfolio = ({ navigation, route }) => {

    
    const name = route.params.name;
    const country = route.params.country;
    const favColor = route.params.favColor;
    const profileImg = route.params.img;
    const desc = route.params.desc;
    const photoArray = route.params.photos;

    const handlePress = () => {
        return alert("cliqué")
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `Portfolio de ${name}`,
            headerRight: () => <MaterialIconsHeader iconName="info-outline" iconColor="white" onPressIcon={handlePress} />
        });
    }, [navigation]);

    const selectPhoto = (photo) => {
        navigation.navigate("Photo", photo)
    }
    

    return (
        <ScrollView style={globalStyles.container}>
            <View style={{backgroundColor: favColor, ...styles.profileInfos}}>
                <Image 
                    style={styles.smallProfileImg}
                    source={{uri: profileImg}}
                />
                <Text style={styles.profileName}>{name}</Text>
            </View>
            <View style={styles.profileDescription}>
                <Text style={styles.titleBioText}>Bio: </Text>
                <Text style={styles.textBio}>{desc} </Text>
            </View>
            <View>
                {
                    photoArray.map( photo => (
                        <TouchableImage 
                            key={photo.id}
                            imgUrl={photo.url}
                            imgTitle={photo.title}
                            onSelectPhoto={() => selectPhoto(photo)}
                        />
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    profileInfos: {
        alignItems: "center",
        padding: 10,
    },
    smallProfileImg: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        margin: 9,
        borderWidth: 6,
        borderColor: Colors.white,
    },
    profileName: {
        fontFamily: "InriaSans_700Bold",
        color: Colors.white,
        fontSize: 25
    },
    profileDescription: {
        backgroundColor: Colors.ghost,
        padding: 15,
        fontSize: 25,
        fontFamily: "InriaSans_400Regular",
    },
    titleBioText: {
        fontSize: 25,
        padding: 9,
        fontFamily: "InriaSans_700Bold",
    },
    textBio: {
        fontFamily: "InriaSans_400Regular",
        fontSize: 20,
        padding: 9,
    },
})

export default Portfolio