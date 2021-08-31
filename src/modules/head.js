//biblioteca
import {Helmet} from "react-helmet";
import ico from "../img/icons/sla.ico"

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    return(
        <Helmet title="ABC"
        meta={[
            { name: "ABC", content: "ABC" }
        ]}
        link={[
              {"rel": "icon", 
               "type": "image/jpg", 
               "href": ico
              }
        ]} 
        />
    )
}