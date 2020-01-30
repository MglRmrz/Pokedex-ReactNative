import React, { Component} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header } from '../../components/Header';

class Details extends Component {

    render() {
        return(
            <View>
                <Header title="Pokemon Details" navigation={this.props.navigation} />
                <ScrollView>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
                </View>
            </ScrollView>
            </View>
        )
    }
}

export default Details;