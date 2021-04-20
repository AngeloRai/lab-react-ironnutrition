import React from 'react';


export class FoodList extends React.Component {
  state = {
    quantity: 1,
    
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container w-25 row">
          <article className="media container my-5 w-50 d-flex ">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={`${this.props.image}`} alt="" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.name}</strong> <br />
                  <small>{this.props.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    name="quantity"
                    type="number"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={() =>
                      this.props.onClick(
                        this.props.name,
                        this.props.calories,
                        this.props.image,
                        this.props.quantity
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default FoodList;
