import React, { Component} from 'react';
import { View, Text, ScrollView, ProgressBarAndroid } from 'react-native';
import { Header } from '../../components/Header';
import { DetailsLayout } from './components/DetailsLayout';
import { Loading } from './components/Loading';
import axios from '../../../utils/axios';
import { CardPhoto } from './components/CardPhoto';
import { Description } from './components/Description';

class Details extends Component {
    state = {
        loading: true,
        pokemon: null
    }

    async componentDidMount() {
        const pokemonName = this.props.navigation.getParam('name', 'default value');
        try {
            const pokemon = await axios.get(`/pokemon/${pokemonName}`);
            const extra = await axios.get(`pokemon-species/${pokemonName}`)
            this.setState({pokemon: {...pokemon.data, ...extra.data}, loading: false});
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * @description Transforma el nombre a Capitalize
     */
    toCapitalize = (name) => {
        return name.substr(0, 1).toUpperCase() + name.substr(1, name.length - 1)
    }

    render() {
        return(
            <DetailsLayout>
                {
                    this.state.loading ?
                    <View>
                        <Header title="Loading..." navigation={this.props.navigation} />
                        <Loading />
                    </View> :
                    <View>
                        <Header title={this.toCapitalize(this.state.pokemon.name)} navigation={this.props.navigation} />
                        <ScrollView>
                            <CardPhoto pokemon={this.state.pokemon} />
                            <Description pokemon={this.state.pokemon} />
                        </ScrollView>
                    </View>
                }
            </DetailsLayout>
        )
    }
}

export default Details;