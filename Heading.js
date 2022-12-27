import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    heading : {
        backgroundColor : '#FF6161',
        padding : 10
    },
    heading_title : {
        color : 'white',
        fontSize : 40,
        fontStyle : 'italic',
        textAlign : 'center'
    },
})

const Heading = (props) => {
    return (
        <View style = {styles.heading}>
            <Text style = {styles.heading_title}>
                {props.heading_title}
            </Text>
        </View>
    )
}

export default Heading;