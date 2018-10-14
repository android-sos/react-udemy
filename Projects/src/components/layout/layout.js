import React from 'react';
import Classes from './layout.css'
import Aux from '../../hoc/Aux/Aux'

const layout = (props) => {
    return (
        <Aux>
            <div>
                <p>Toolbar, SideBar, BackDrop</p>
            </div>
            <div className={Classes.Content}>
                {props.children}
            </div>
        </Aux>
    )
}

export default layout;