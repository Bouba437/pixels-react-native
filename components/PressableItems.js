import { Text, View, Image, Pressable } from 'react-native';
import { globalStyles } from '../styles/AppStyles';
import Colors from '../styles/Colors';
import { useNavigation } from '@react-navigation/native';

const PressableItems = ({ item }) => {

    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.navigate("Portfolio", item)}
            style={({pressed}) => [
                { backgroundColor: pressed ? Colors.clicked : Colors.white },
                globalStyles.profileItem
            ]}
        >
            <Text style={globalStyles.titleText}>{item.name}</Text>
            <Image 
                source={{uri: item.img}}
                style={globalStyles.profileImg}
            />
            <View style={globalStyles.infoContainer}>
                <Text style={globalStyles.infos}>{item.country}</Text>
                <Text style={globalStyles.infos}>{item.photos.length}</Text>
            </View>
        </Pressable>
    )
}

export default PressableItems