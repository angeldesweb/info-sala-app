import gql from 'graphql-tag';


const SIGN_IN = gql`
        mutation signIn($cedula:String!,$password:String!){
            signIn(cedula:$cedula,password:$password){
                success
                status
                token
                usuario{
                    _id
                }
            }
        }
    `
export {
    SIGN_IN
}