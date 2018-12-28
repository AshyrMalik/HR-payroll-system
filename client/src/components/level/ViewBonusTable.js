import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getLevels, deleteBonus} from '../../actions/levelActions';
import { toast } from 'react-toastify';

class ViewBonusTable extends Component {

    componentDidMount = () => {
      this.props.getLevels();
    }

    onDelete(levelId, bonusId) {
        this.props.deleteBonus(levelId, bonusId)
        .then(res => {
            if(res.type === 'DELETE_LEVEL'){
                toast.success('Bonus Deleted!')
            }
        })
        .catch(err => console.log(err))
    }
    
  render() {
     
    const formatMoney = money => {
        let formatedValue = money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        return formatedValue;
      }

    const {levels} = this.props.levels

      let bonusTableContainer; 
      

      if(levels !== undefined && Object.keys(levels).length > 0){

        bonusTableContainer = levels.map(level => (
            <div key={level._id} className="col-md-5 mx-auto card card-primary mt-2">
                    <p className="mt-3"><strong>Level Name</strong> : {level.name}</p>
                    <p className="mt-2"><strong>Level Salary</strong> : {formatMoney(level.basic)}</p>
                    <h5 className="text-center">Bonus</h5>
                    {level.bonuses.map(bonus => (
                        <div key={bonus._id} className="text-center mb-3">
                            <p>Bonus name: {bonus.name}</p>
                            <p>Amount: {formatMoney(bonus.amount)}</p>
                            <div>
                                <button className="btn btn-sm btn-danger" onClick={this.onDelete.bind(this, level._id, bonus._id)}>Delete</button>
                            </div>
                        </div>
                    ))}
            </div>
        ))
          
      }
        
    else {
          bonusTableContainer = (
              <div className="col-md-10 justify-content-center">
                <h4>No previous entry of employee level!</h4>
              </div>
          )
      }

    return (
        <div className="row">
            {bonusTableContainer}
        </div>
    )
  }
}

ViewBonusTable.propTypes = {
    levels: PropTypes.object.isRequired,
    getLevels: PropTypes.func.isRequired,
    deleteBonus: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    levels: state.levels
})

export default connect(mapStateToProps, {getLevels, deleteBonus})(ViewBonusTable);
