import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const items = [
    { name: 'addfolder', value: 'Entradas' },
    { name: 'tagso', value: 'Compras' },
    { name: 'creditcard', value: 'Carteira' },
    { name: 'barcode', value: 'Boletos' },
    { name: 'setting', value: 'Conta'}
]

export default function Actions(){
    return(
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            
            {items.map(
                (item, index) => (
                    <TouchableOpacity key={index} style={styles.actionButton}>

                        <View style={styles.areaButton}>
                            <AntDesign name={item.name} size={26} color="#000"/>
                        </View>
                        <Text style={styles.labelButton}>
                            {item.value}
                        </Text>

                    </TouchableOpacity>
                )
            )}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32
    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})