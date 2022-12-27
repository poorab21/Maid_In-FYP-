import {
    Pressable,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    btn : {
        backgroundColor : '#FF6161' ,
        margin : 10

    },
    btnContent : {
        color : 'white',
        fontSize : 25,
        textAlign : 'center'
    }
})

const Btn = (props) => {
    return (
        <Pressable style = {styles.btn} onPress={props.onClick}>
            <Text style = {styles.btnContent}>
                {props.btnText}
            </Text>
        </Pressable>
    )
}

export default Btn;