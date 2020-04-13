import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

// import { firebase, googleAuthProvider } from '../firebase/firebase';

// /* Log in */
// export const login = uid => ({
//     type: 'LOGIN',
//     uid
// })

// export const startLogin = () => {
//     return () => {
//         return firebase.auth().signInWithPopup(googleAuthProvider);
//     };
// };
// /* Log Out */
// export const logout = () => ({
//     type: 'LOGOUT'
// })

// export const startLogout = () => {
//     return () => {
//         return firebase.auth().signOut();
//     }
// }