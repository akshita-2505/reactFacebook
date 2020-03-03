import React, { Component } from 'react'
import Buttons from './Buttons'
import './App.css'
import * as firebase from "firebase";

class Home extends React.Component{
    state = {
        uploading: false,
    }

    onChange = e => {
        const files = Array.from(e.target.files)
        this.setState({ uploading: true })

        const formData = new FormData()

        files.forEach((file, i) => {
            formData.append(i, file)
        })
        debugger

        firebase.storage().ref('test/').put(files).then((snapshot) => {
debugger
        }).catch(e => console.log(e))

        /*fetch(`${API_URL}/image-upload`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(images => {
                this.setState({
                    uploading: false,
                    images
                })
            })*/
    }

    render() {
        return (
            <div>
                <div className='buttons'>
                    <Buttons onChange={this.onChange} />
                </div>
            </div>
        )
    }
}

export default Home;
