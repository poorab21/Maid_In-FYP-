import { useState } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Button,
    FlatList
} from 'react-native'
import Heading from '../Component/Heading';
import References from '../Component/Reference'
import Btn from '../Component/Btn';

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        flexDirection : 'column',
        flex : 1,
    },  
    referenceContainer : {
        display : 'flex',
        flexDirection : 'column',
        flex : 1,
    },
    header : {
        flex : 1,
    },
    referenceList : {
        display : 'flex',
        flexDirection : 'column',
    },
    buttons : {
        display : 'flex',
        flexDirection : 'row',
    },
    addBtn : {
        flex : 1,
    },
    removeBtn : {
        flex : 1
    },
    submitBtn : {
        flex : 1,
        margin : 10
    }
})

const ReferenceForm = (props) => {


    return (
        <SafeAreaView>
            <ScrollView>
                <View style = {styles.container}>
                    <View style = {styles.referenceContainer}>
                        <View style = {styles.header}>
                            <Heading heading_title = {'References'}/>
                        </View>
                        <View style = {styles.referenceList}>
                            <References/>                  
                        </View>
                        <View style = {styles.buttons}>
                            <View style = {styles.addBtn}>
                                <Btn btnText = {'Add'}/>
                            </View>
                            <View style = {styles.removeBtn}>
                                <Btn btnText = {'Remove'}/>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.submitBtn}>
                        <Button 
                        title = {'SUBMIT'}
                        color = {'black'}
                        />
                    </View>
                </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default ReferenceForm;