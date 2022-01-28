import {createContext, Component} from 'react';

export const TitleContext = createContext();

class TitleContextProvider extends Component {
    state = "";

    setHeaderTitle=(newTitle)=>{
        this.setState(newTitle);
    }

    render() { 
        return ( 
        <TitleContext.Provider value={
            {...this.state, setHeaderTitle:this.setHeaderTitle}}>
            {this.props.children}
        </TitleContext.Provider> );
    }
}
 
export default TitleContextProvider;