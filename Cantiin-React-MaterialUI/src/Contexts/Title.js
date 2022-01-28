import {createContext, Component} from 'react';

export const TitleContext = createContext();

class TitleContextProvider extends Component {
    state = { title: "title" };

    setHeaderTitle=(newTitle)=>{
        
        this.setState({ title: newTitle });
    }

    render() { 
        return ( 
        <TitleContext.Provider value={
            {headerTitle:this.state.title, setHeaderTitle:this.setHeaderTitle}}>
            {this.props.children}
        </TitleContext.Provider> );
    }
}
 
export default TitleContextProvider;