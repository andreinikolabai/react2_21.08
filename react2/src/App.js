import React, { Component } from 'react'
import Table from './components/Table/Table';

export default class App extends Component {

  state = {
    animals: [
      { type: `turtle`, icon: `🐢`},
      { type: `octopus`, icon: `🐙`},
      { type: `fish`, icon: `🐠`},
      { type: `flamingo`, icon: `🦩`},
      { type: `penguin`, icon: `🐧`},
    ],
  }

  render () {
    let {animals} = this.state;

    return (
        <>
          <Table list={animals}></Table>
        </>
    )
  }
}