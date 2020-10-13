import { gql } from '@apollo/client';

const CREATE_CLASIFICACION = gql`
    mutation createClasificacion($subClass:String!,$clasificacion:String){
        createClasificacion(subClass:$subClass,clasificacion:$clasificacion){
            _id
            clasificacion
            subClass
        }
    }
`
export {
    CREATE_CLASIFICACION
}
