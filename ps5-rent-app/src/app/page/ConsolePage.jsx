import React from 'react';
import PropTypes from 'prop-types';
import Console from '../components/console-page/Console';
import { connect } from 'react-redux';
import { fetchConsoles, updateConsole } from '../actions/consoleActions'
import { checkOutItem } from '../actions/addAction'
class ConsolePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            consoles: [],
            updateConsole: this.props.consoleUpdated
        }
    }


    updateConsoleAvailable = (e) => {
        const id = parseInt(e.target.id)
        const data = {
            consoleId: id,
            available: -1
        }

        this.props.updateConsole(data)

        // const writeCheckOutItem = () => {
        //     this.props.checkOutItem(this.props.consoleUpdated)
        // }
        // const changePage = () => {
        //     this.props.history.push('/')
        // }
        // setTimeout(writeCheckOutItem, 1000);
        // setTimeout(changePage, 1100);

    }
    writeCheckOutItem = () => {
        this.props.checkOutItem(this.state.updateConsole)
    }
    changePage = () => {
        this.props.history.push('/')
    }
    componentDidMount() {
        this.props.fetchConsoles()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.consoles !== this.state.consoles) {
            let consoles = this.state.consoles
            this.setState({ consoles });
        } else if (prevState.updateConsole !== this.state.updateConsole) {
            let updateConsole = this.state.updateConsole
            this.setState({ updateConsole });
            this.writeCheckOutItem()
            this.changePage()
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.consoles !== prevState.consoles) {
            return { consoles: nextProps.consoles };
        } else if (nextProps.consoleUpdated._id !== prevState.updateConsole._id) {
            console.log("update state");
            return { updateConsole: nextProps.consoleUpdated };
        }
        else return null;
    }

    render() {
        const { consoles } = this.state
        return (
            <div className="console-page " >
                {consoles.map(console => { return <Console available={console.available} key={console.consoleId} consoleId={console.consoleId} title={console.name} update={this.updateConsoleAvailable} /> })}
            </div>
        );
    }
}

ConsolePage.propTypes = {
    fetchConsoles: PropTypes.func.isRequired,
    updateConsole: PropTypes.func.isRequired,
    checkOutItem: PropTypes.func.isRequired,
    consoles: PropTypes.array.isRequired
}

const mapStateToProps = state => ({ consoles: state.consoles.consoles, consoleUpdated: state.consoles.consoleUpdated })

export default connect(mapStateToProps, { fetchConsoles, updateConsole, checkOutItem })(ConsolePage);
