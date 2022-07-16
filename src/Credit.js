import { Component } from "react";
import _ from 'lodash/fp';
/* import axios from 'axios'; */

class Credit extends Component {

    constructor(props) {
        super(props);
        this.state = {
        customer: {
            sfAccID: "",
            cardOwner: "",
            cardNum: "",
            expMonth: "",
            expYear: "",
            sCode: "",
            zCode: "",
        }};
      }


    savePaymentDetails = () => {
        const formattedInfo = {
          value: {
            cc_data: {
              creditCardSFDCID: this.state.sfAccID,
              creditCardFirstName: this.state.cardOwner,
              creditCardNumber: this.state.cardNum,
              creditCardExpMonth: this.state.expMonth,
              creditCardExpYear: this.state.expYear,
              creditCardSecurityCode: this.state.sCode,
              creditCardZipCode: this.state.zCode
            }
          },
          collection: 'creditcards'
        };
        console.log(JSON.stringify(formattedInfo.value.cc_data.creditCardSFDCID))
        alert("Payment Saved!")
        /* 
        axios({
            method: 'POST',
            url: `/api/users/update_payment_method`,
            data: formattedInfo
          })
            .then(() => {
              alert("Payment Saved!");
              window.location.reload();
            })
        */
    };

    handleChange(event) {
        var customer        = this.state.customer;
        customer.sfAccID  = event.target.value;

        this.setState({ customer: customer });
    }

    handleFirstNameChanged(event) {
        var customer        = this.state.customer;
        customer.cardOwner  = event.target.value;
    
        this.setState({ customer: customer });
    }

    handleCardChanged(event) {
        var customer        = this.state.customer;
        customer.cardNum  = event.target.value;
    
        this.setState({ customer: customer });
    }

    handleExpMMChanged(event) {
        var customer        = this.state.customer;
        customer.expMonth  = event.target.value;
    
        this.setState({ customer: customer });
    }

    handleExpYYChanged(event) {
        var customer        = this.state.customer;
        customer.expYear  = event.target.value;
    
        this.setState({ customer: customer });
    }

    handleCVVChanged(event) {
        var customer        = this.state.customer;
        customer.sCode  = event.target.value;
    
        this.setState({ customer: customer });
    }

    handleZipChanged(event) {
        var customer        = this.state.customer;
        customer.zCode  = event.target.value;
    
        this.setState({ customer: customer });
    }

    /* from in product update form */
    storeCreditInfo = (event: React.FormEvent<HTMLInputElement>): void => {
        let value = _.get('currentTarget.value', event);
        value = value.replace(/_/g, '');
        value = value.replace(/-/g, '');
        const field: string = _.get('currentTarget.id', event);
        const newState = {};
        newState[field] = value;

        this.setState(newState);
    };


    render() {
        return (
            <div className="credit-info-container">
                <div className="credit-form-container">
                    <form className="credit-form">
                        <div className="form-group">
                            <label for="billing-account-id">
                                <h6>Account ID</h6>
                                <input type="text" value={this.state.sfAccID} onChange={this.handleChange.bind(this)} name="sfAccID" label="billing-account-id" placeholder="SFDC Billing Account ID" required className="form-control "  />
                            </label>
                        </div>
                        <div className="form-group"> 
                            <label for="username">
                                <h6>Card Owner</h6>
                            </label> 
                            <input type="text" name="cardOwner" label="username" placeholder="Card Owner Name" required className="form-control " 
                            value={this.state.cardOwner} onChange={this.handleFirstNameChanged.bind(this)} /> 
                        </div>
                        <div className="form-group"> <label for="cardNumber">
                                <h6>Card number</h6>
                            </label>
                            <div className="input-group"> <input type="text" label="cardNumber" name="cardNum" value={this.state.cardNum} 
                                    onChange={this.handleCardChanged.bind(this)} placeholder="Valid card number" className="form-control " required />
                                <div className="input-group-append"> <span className="input-group-text text-muted"> <i className="fab fa-cc-visa mx-1 m-1"></i> <i className="fab fa-cc-mastercard mx-1"></i> <i className="fab fa-cc-amex mx-1"></i> </span> </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="form-group"> <label><span className="hidden-xs">
                                            <h6>Expiration Date</h6>
                                        </span></label>
                                    <div className="input-group"> 
                                        <input type="number" placeholder="MM" name="expMonth" label="Expiration Month" 
                                            value={this.state.expMonth} onChange={this.handleExpMMChanged.bind(this)} className="form-control" required /> 
                                        <input type="number" placeholder="YY" name="expYear" label="Expiration Year" 
                                            value={this.state.expYear} onChange={this.handleExpYYChanged.bind(this)} className="form-control" required /> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group"> 
                                    <label data-toggle="tooltip" title="Security code on the back or front the card">
                                        <h6>CVV <i className="fa fa-question-circle d-inline"></i></h6>
                                    </label> 
                                    <input type="number" name="sCode" label="Security Code" 
                                        value={this.state.sCode} onChange={this.handleCVVChanged.bind(this)} required className="form-control" /> 
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group mb-4"> 
                                    <label for="zip"><h6> Zip Code </h6>
                                    </label> 
                                    <input type="number" name="zCode" label="Zip Code"
                                        value={this.state.zCode} onChange={this.handleZipChanged.bind(this)} required className="form-control" /> 
                                </div>
                            </div>
                        </div>
                        <div className="card-footer"> 
                            <button type="button" className="save btn btn-primary btn-block shadow-sm" 
                              onClick={this.savePaymentDetails}  > 
                            Save Payment 
                            </button> 
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

/* onClick={() => alert("Card Owner: " + `${JSON.stringify(this.state.customer.cardOwner)}`
                                                       + " SFDCID: " + `${JSON.stringify(this.state.customer.sfAccID)}`
                                                       + " Card #: " + `${JSON.stringify(this.state.customer.cardNum)}`) */

export default Credit;