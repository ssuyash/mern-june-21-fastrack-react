import React, { Component } from 'react'

class Balancesheet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: "",
            type: "",
            remark: "",
            transactions:[]
        }
    }

    getSummary = ()=>{
        let summary = {
            income: 0,
            expense:0
        }
        this.state.transactions.forEach(txn=>{
            if(txn.type == "income"){
                summary.income += parseInt(txn.amount)
            }

            if(txn.type == "expense"){
                summary.expense += parseInt(txn.amount)
            }
        })

        return summary
    }

    saveTransaction = ()=>{
        let {amount, type, remark, transactions} = this.state
        let newTxn = {amount, type, remark}
        transactions.push(newTxn)
        this.setState({transactions})
    }


    render() {
        let {income, expense} = this.getSummary()
        return (
            <>
                <input
                    type="number"
                    value={this.state.amount}
                    onChange={(e) => this.setState({ amount: e.target.value })}
                />

                <select
                    value={this.state.type}
                    onChange={(e) => this.setState({ type: e.target.value })}
                >
                    <option value="">Select Type</option>
                    <option value="income">income</option>
                    <option value="expense">expense</option>
                </select>
                <input
                    type="text"
                    value={this.state.remark}
                    onChange={(e) => this.setState({ remark: e.target.value })}
                />
                <button onClick={this.saveTransaction}>Save Transaction</button>


                <div>
                    {this.state.transactions.length > 0 ? ( <table width="100%" border="1">
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Type</th>
                                <th>Remark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.transactions.map(txn=>{
                                return(<tr>
                                    <td>{txn.amount}</td>
                                    <td>{txn.type}</td>
                                    <td>{txn.remark}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>) : (<h1>No Data Found</h1>)}

                    <table width="50%" border="1">
                        <tr>
                            <th>Total Income</th>
                            <td>{income}</td>
                        </tr>

                        <tr>
                            <th>Total Expense</th>
                            <td>{expense}</td>
                        </tr>

                        <tr>
                            <th>Balance</th>
                        <td>{income-expense}</td>
                        </tr>
                    </table>
                   
                </div>
            </>
        )
    }

}

export default Balancesheet