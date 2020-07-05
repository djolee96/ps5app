import React from 'react';
import PropTypes from 'prop-types';

import Tv from '../components/tv-page/Tv'

import { connect } from 'react-redux';

import { fetchTvs, updateTV } from '../actions/tvActions';
import { checkOutItem } from '../actions/addAction';

class TvPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tvs: [],
            updateTv: this.props.tvUpdated
        }
    }
    updateTvAvailable = (e) => {
        const id = parseInt(e.target.id)
        const data = {
            tvId: id,
            available: -1
        }

        this.props.updateTV(data)
    }

    changePage = () => {
        this.props.history.push('/')
    }
    writeCheckOutItem = () => {
        this.props.checkOutItem(this.state.updateTv)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.tvs !== this.state.tvs) {
            let tvs = this.state.tvs
            this.setState({ tvs });
        } else if (prevState.updateTv !== this.state.updateTv) {
            let updateTv = this.state.updateTv
            this.setState({ updateTv });
            this.writeCheckOutItem()
            this.changePage()
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.tvs !== prevState.tvs) {
            return { tvs: nextProps.tvs };
        } else if (nextProps.tvUpdated !== prevState.updateTv) {
            return { updateTv: nextProps.tvUpdated };
        }
        else return null;
    }

    componentDidMount() {
        this.props.fetchTvs()
    }
    render() {
        const { tvs } = this.state
        return (
            <div className="tv-page" >
                {tvs.map(tv => { return <Tv available={tv.available} key={tv.tvId} tvId={tv.tvId} title={tv.name} update={this.updateTvAvailable} /> })}
            </div>
        );
    }
}
TvPage.propTypes = {
    fetchTvs: PropTypes.func.isRequired,
    updateTV: PropTypes.func.isRequired,
    checkOutItem: PropTypes.func.isRequired,
    tvUpdated: PropTypes.object,

    tvs: PropTypes.array.isRequired
}
const mapStateToProps = state => ({ tvs: state.tvs.tvs, tvUpdated: state.tvs.tvUpdated })
export default connect(mapStateToProps, { fetchTvs, updateTV, checkOutItem })(TvPage);
