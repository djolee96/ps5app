import React from 'react';
import PropTypes from 'prop-types';
import Controller from '../components/controller-page/Controller';

import { connect } from 'react-redux';
import { fetchControllers, updateController } from '../actions/controllerActions';
import { checkOutItem } from '../actions/addAction';



class ControllerPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            controllers: [],
            updateController: this.props.controllerUpdated
        }


    }


    updateControllerAvailable = (e) => {
        const id = parseInt(e.target.id)
        const count = this.state.count
        const data = {
            controllerId: id,
            available: -count
        }
        this.props.updateController(data)
    }

    changePage = () => {
        this.props.history.push('/')
    }
    writeCheckOutItem = () => {
        this.props.checkOutItem(this.state.updateController)
    }
    componentDidMount() {
        this.props.fetchControllers()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.controllers !== this.state.controllers) {
            let controllers = this.state.controllers
            this.setState({ controllers });
        } else if (prevState.updateController !== this.state.updateController) {
            let updateController = this.state.updateController
            this.setState({ updateController });
            this.writeCheckOutItem()
            this.changePage()
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.controllers !== prevState.controllers) {
            return { controllers: nextProps.controllers };
        } else if (nextProps.controllerUpdated !== prevState.updateController) {
            console.log("updated state");
            return { updateController: nextProps.controllerUpdated };
        }
        else return null;
    }

    render() {

        const { controllers } = this.state

        return (
            <div className="controller-page" >

                {controllers.map(contr => { return <Controller available={contr.available} key={contr.controllerId} controllerId={contr.controllerId} title={contr.name} update={this.updateControllerAvailable} /> })}

            </div>
        );
    }
}

ControllerPage.propTypes = {
    fetchControllers: PropTypes.func.isRequired,
    updateController: PropTypes.func.isRequired,
    checkOutItem: PropTypes.func.isRequired,
    controllerUpdated: PropTypes.object,
    controllers: PropTypes.array.isRequired
}
const mapStateToProps = state => ({ controllers: state.controllers.controllers, controllerUpdated: state.controllers.controllerUpdated })

export default connect(mapStateToProps, { fetchControllers, updateController, checkOutItem })(ControllerPage);
