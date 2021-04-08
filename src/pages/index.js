import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/header'
import Navbar from '../components/navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from '../components/about'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Contact from '../components/contact'

import '../styles/styles.css'

const IndexPage = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={About} />
    <Route path="/experience" component={Experience} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Router>
)

export default IndexPage
