import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class FinanceiroIndex extends Component {

    state = {
        billsToPay: [],
    }

    componentDidMount() {
        axios.get(`http://localhost/intellect/public/api/v1/financeiro`)
            .then(res => {
                const persons = res.data;
                this.setState({
                    billsToPay: persons.data.billsToPay
                });
                console.log(this.state.billsToPay)
            })
    }




    render() {

        const categories = this.state.billsToPay.map((categorie) => {
            return (
                <div className="col-4 col-md-4">
                    <div className="card">
                        <div className="card-head">
                            <h5 key={categorie.id}>{categorie.nome} - {categorie.cor}</h5>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <h1 className="text-center">Financeiro</h1>
                <div className="row">
                    {categories}
                </div>



            </div>
        )
    }
}

const mapToProps = (state) => ({
    financeiro: state.financeiro.contas
})

export default connect(mapToProps)(FinanceiroIndex)