import React from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import TabBarMenu from './tab-bar-menu';
import TelaContatos from './tela-contatos';
import TelaListaConversas from './tela-lista-conversas';


export default TelaPrincipal = (props) => {
    const navigation = props.navigation;

    const renderScene = SceneMap({
        conversas: TelaListaConversas,
        contatos: TelaContatos,
    });
    
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'conversas', title: 'Conversas' },
        { key: 'contatos', title: 'Contatos' },
    ]);

    const renderTabBar = (props) => {
     return (
        <TabBarMenu 
            {...props}
            navigation={navigation}
            indicatorStyle={styles.indicadorTab} 
            style={styles.tab}/>
    )};
    
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            initialLayout={{ width: layout.width }} />
    );
}

const styles = StyleSheet.create({
    tab: {
        backgroundColor: '#115e54',
    },
    indicadorTab: {
        backgroundColor: '#fff',
    }
})