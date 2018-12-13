import React from 'react'
import {render} from 'react-dom'
import Home from '../containers/home'
import data from '../../api.json'
const container = document.getElementById('home-container')
//<What we do render> and <where we do it>.
render(<Home {...data}/>, container)