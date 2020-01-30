import React, { Component} from 'react';
import { View, ProgressBarAndroid, Alert } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { styles } from './style';
import axios from '../../../utils/axios';

import { Header } from '../../components/Header';
import { HomeLayout } from './components/HomeLayout';
import { ListOfPokemon } from './components/ListOfPokemons';
import { ButtonIcon } from '../../components/ButtonIcon';
import { PopupFilter } from './components/PopupFilter';

class Home extends Component {
    state = {
        pokemons: [],
        loadingMore: false,
        isSearch: false,
        popupOpened: false,
        canMore: true
    }

    componentDidMount() {
        this.getAllPokemons();
    }

    /**
     * @description Hace un llamado a la API para traerse todos los pokemones
     */
    getAllPokemons = async () => {
        try {
            const {data} = await axios.get('/pokemon');
            this.setState({pokemons: data.results, canMore: true});
        } catch(error) {
            console.log(error);
        }
    }

    /**
     * @description Obtiene la siguiente página de los pokemones y los pushea en el array
     */
    getMorePokemons = async (info) => {
        if (!this.state.canMore) return;
        this.setState({loadingMore: true})
        try {
            const {data} = await axios.get(`/pokemon?offset=${this.state.pokemons.length}&limit=20`);
            this.state.pokemons.push(...data.results);
            this.setState({loadingMore: false});
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * @description Cambia el estado de buscar en el header
     */
    changeSearch = () => {
        this.setState({isSearch: !this.state.isSearch})
    }

    /**
     * @description Muestra y oculta el popup
     */
    changeShowPopup = () => {
        this.setState({popupOpened: !this.state.popupOpened});
    }

    /**
     * @description Trae del API los pokemones dependiendo de los eleccionado en el filter
     */
    filterSelected = async ({select, value}) => {
        this.setState({popupOpened: false});
        try {
            if (select === 't') {
                const {data} = await axios.get(`/type/${value}`);
                this.setState({pokemons: data.pokemon.map(pokemon => pokemon.pokemon), canMore: false});
            } else if (select === 'g') {
                const {data} = await axios.get(`/generation/${value}`);
                this.setState({pokemons: data.pokemon_species, canMore: false});
            } else if (select === 'all') {
                this.getAllPokemons()
            }
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * @description Navega hasta el screen de Details
     */
    goToDetails = (pokemonName) => {
        this.props.navigation.navigate('Details', pokemonName);
    }

    /**
     * @description Busca un pokemon del API
     */
    searchPokemon = async (pokemonName) => {
        try {
            const {data} = await axios.get(`/pokemon/${pokemonName.toLowerCase()}`);
            if (data) {
                this.goToDetails(pokemonName.toLowerCase());
            }
        } catch(error) {
            console.log(error);
            if (error.response) {
                if (Number(error.response.status) === 404) {
                    Alert.alert('This pokemon does not exist', `"${pokemonName}" does not exist`,
                    [
                        {text: 'Accept'}
                    ])
                }
            }
        }
    }

    render() {
        return(
            <HomeLayout>
                <Header 
                    title="PokeDex" 
                    mode="none" 
                    search={this.state.isSearch} 
                    onChangeSearch={this.changeSearch}
                    onSearch={this.searchPokemon}
                >
                    <ButtonIcon 
                        onPress={this.changeSearch}
                        icon={<IconFA name="search" color="#282828" size={20} />}
                    />
                    <PopupFilter 
                        setShow={this.changeShowPopup}
                        opened={this.state.popupOpened}
                        onSelect={this.filterSelected}
                    />                         
                </Header>
                {/* LIST OF THE POKEMONS */}
                <ListOfPokemon 
                    list={this.state.pokemons} 
                    onEndReached={this.getMorePokemons} 
                    navigation={this.props.navigation} 
                />
                
                {
                    this.state.loadingMore && this.state.canMore &&
                    <View style={styles.progressContainer}>
                        <ProgressBarAndroid color="red" style={styles.progress} />
                    </View>
                }

            </HomeLayout>
        )
    }
}

export default Home;