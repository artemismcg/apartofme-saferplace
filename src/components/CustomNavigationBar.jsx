
import * as React from 'react-native';
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper';

const CustomNavigationBar = ({title, navigation}) => {
    return (
        <Appbar.Header style={styles.header}>
            <Appbar.Content title={title}/>
            {/* <Appbar.Action icon={require('../../assets/backButton.png')} onPress={() => {navigation.goBack}} /> */}
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0
    }, 
    icon: {
        position: 'absolute',
        right: 400,
    }   
});

export default CustomNavigationBar