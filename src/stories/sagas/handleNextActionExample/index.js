import * as React from 'react';
import { worksheets } from './worksheets';
import { Worksheet } from '../components/Worksheet';

class HandleNextActionExample extends React.PureComponent {
    render(){
        return (
        <section>
            <h1>Handle next action example</h1>
            <Worksheet worksheet={worksheets[0]} />
        </section>
    );
    }
}

export {
    HandleNextActionExample
}
