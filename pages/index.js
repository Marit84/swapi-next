import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';

class Index extends React.Component {
static async getInitialProps(){
    let planets = [];
  
    try {
        const response = await fetch("https://swapi.dev/api/planets?page=1");
        const data = response.json();
        planets = data.response;
            
    } catch (error) {
        console.log(error);
        planets = [];
    }

   
return { planets };

}
    render() {
        const { planets } = this.props;

        if(planets.length === 0) {
            return <Error statusCode={503}/>
        }

    
        return (
    
            <div>
                <h1>Swapi next</h1>
                <div>
                    {planets.map(planet => (
                        <h2 key={planet.id}>{planet.name}</h2>
                    ))}
                </div>
            </div>
        )
    }
}

export default Index;
