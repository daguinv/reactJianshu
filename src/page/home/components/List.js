import React from 'react'
import { ListItem, AddMore } from '../style'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
import { Link } from 'react-router-dom'

class List extends React.Component {
  render() {
    const { listArr, page, addMore } = this.props
    return (
      <div>
        {listArr.map((item, index) => {
          return (
            <Link to={'/detail/' + item.id}  key={index}>
              <ListItem >
                <img src={item.src} />
                <div className="listInfo">
                  <h3>{item.title}</h3>
                  <p>{item.content}
                  </p>
                </div>
              </ListItem>
            </Link>
          )
        })}
        <AddMore onClick={() => { addMore(page) }}>阅读更多</AddMore>
      </div>

    )
  }
}
const mapStateToProps = (status) => {
  return {
    listArr: status.home.listArr,
    page: status.home.page
  }
}
const mapDispatch = dispatch => {
  return {
    addMore: (page) => {
      console.log(page);
      dispatch(actionCreator.addMore(page))
    }
  }
}
export default connect(mapStateToProps, mapDispatch)(List)