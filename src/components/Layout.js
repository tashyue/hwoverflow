import React, { Component } from 'react'
import Drawer from './Drawer'
import NavBar from './NavBar'
import { withStyles } from '@material-ui/core'
import Footer from './Footer'

const useStyles = theme => ({
    layout: {
        display: 'flex',
        minHeight: '10vh',
        flexDirection: 'column'
    },
    main: {
        flex: '1 0 auto'
    }
})

class Layout extends Component {
    state = {
        drawer: false
    }

    toggleDrawer = () => {
        this.setState(state => ({ drawer: !state.drawer}))
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.layout}>
                <NavBar toggleDrawer={this.toggleDrawer.bind(this)} />
                <Drawer open={this.state.drawer} toggleDrawer={this.toggleDrawer.bind(this)} />
                <main className={classes.main}>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}

export default withStyles(useStyles)(Layout)
