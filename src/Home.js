import React from 'react';
import { async } from 'q';
class Home extends React.PureComponent {
    state = {
        premovie: 0
    }
    componentDidUpdate(prevState) {
        alert(prevState.preMovie); //will not recive prvstate
        alert(this.state.preMovie);
    }
    /* request = () => {
         this.makeRequest('Google').then((response) => {
             console.log('response received');
             return this.processRequest(response)
         }).then(processresponse => {
             console.log(processresponse);
         }).catch(err => {
             console.log('error');
         })
     }
 
      async function DoWork = () => {
        const response = await this.makeRequest('Google');
        console.log('response received');
        const processRequest = await this.processRequest(response);
        console.log('request submited')
    }
     makeRequest = (location) => {
         return new Promise((resolve, reject) => {
             if (location == 'google') {
                 resolve('clean');
             }
             else {
                 reject('not clean');
             }
         })
     }
     processRequest = (response) => {
         return new Promise((resolve, reject) => {
             console.log('Processing response');
             resolve(`Extra Information `)
         })
     }*/
    asyncEx = () => {
        console.log('person 1');
        console.log('person 2');
        const wifemovie = new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve('ticket');
            }, 3000)
        });
        const getpopcorn = wifemovie.then((t) => {
            console.log('person 3');
            return new Promise((resolve, reject) => { return resolve(`${t}Popcorn`) })
        });
        const getbutter = getpopcorn.then(t => {
            console.log(t)
            return new Promise((resolve) => {
                return resolve(`${t} butter`)
            })
        });
        getbutter.then((t) => console.log(t))
        console.log('person 4');
        // return wifemovie;
    }
    preMovie = async () => {
        console.log('person 1');
        console.log('person 2');
        const wifemovie = new Promise((resolve, reject) => {

            resolve('movie ticket brings')

        });
        let ticket;
        try {
            ticket = await wifemovie;
        } catch (e) {
            ticket = 'fail'
        }

        console.log(`got ${ticket}`);
        console.log('we should go');
        console.log('I am hungry');
        let bringpopcorn = new Promise((resolve) => { resolve('Popcorn') });
        let popcorn = await bringpopcorn;
        console.log(`got ${popcorn}`);
        console.log('we got popcorn');
        this.setState({ preMovie: this.state.premovie++ });
        console.log(this.state.premovie);

        let [ticketall, popcornall] = await Promise.all([wifemovie, bringpopcorn]); //for calling all promise
        console.log(`${ticketall}, ${popcornall}`)
        return ticket;
    }

    fetchFunction = (name) => {
        fetch(`https://api.github.com/users/${name}`)
            .then((response) => response.json())
            .then((json) => { console.log(json) });
    }
    asyncFetchAPI = async (name) => {
        let response = await fetch(`https://api.github.com/users/${name}`);
        let data = await response.json();
        console.log(data);
    }



    render() {
        return (
            <div>
                <button onClick={this.asyncEx}> Promise</button><br></br>
                <button onClick={this.preMovie}> AsynAwait</button><br></br>
                <button onClick={() => this.fetchFunction('bhardesushama')}> fetch</button>
                <button onClick={() => this.asyncFetchAPI('bhardesushama')}> asyncfetch</button></div>

        )
    }
}


export default Home;