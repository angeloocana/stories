import * as React from 'react';
import * as actions from "./actions";
import { Button } from "@material-ui/core";
import { store } from "./getStore";

class OneRequestAfterAnotherExample extends React.PureComponent {

    sumCallbacks = () => {
        store.dispatch(actions.sumUsingCallbacks());
    }

    sumAsyncAwait = () => {
        store.dispatch(actions.sumUsingAsyncAwait());
    }
    
    sumSaga = () => {
        store.dispatch(actions.sumUsingSaga());
    }

    render(){
        return (
            <section>
                <h1>Async Sum</h1>
                <Button onClick={this.sumCallbacks}>Callbacks</Button>
                <Button onClick={this.sumAsyncAwait}>Async Await</Button>
                <Button onClick={this.sumSaga}>Saga</Button>
            </section>
        );
    }
}

export {
    OneRequestAfterAnotherExample
}
