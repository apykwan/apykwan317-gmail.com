import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>Then info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is previate info. Please don't freaking share it</p> }
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent  {...props} />: <p>Please log in to see the details</p>  }
            
        </div>
    )
}

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the secrets" />, document.getElementById('app'));