import React, { Component } from 'react';
import Home from './pages/home';
import aboutUs from './pages/aboutUs';
import Contact from './pages/contact';
import faq from './pages/faq';
import Navtabs from './navtabs';

class Root extends Component {
    state = {
        currentPage: "Home"
    }
    handlePageChange = page => {
        this.setState({ currentPage: page })
    }
    renderPage = () => {
        switch (this.state.currentPage) {
            case "aboutUs":
                return <aboutUs />
            case "Contact":
                return <Contact />
            case "faq":
                return <faq />
            default:
                return <Home />
        }
    }
    render() {
        return (
            <div className="Root">
                <Navtabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}
            </div>
        );
    }
}

export default Root;