import React, {Component} from "react"


class ArtickleList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let artickles = this.props.artickles
        let feedDescription = this.props.artickles.feedTitle
        let artickleBox;
        if (artickles){
            artickleBox =  artickles.data.map((elem, index) =>
                (<div key={index} class="artickle">
                    <a href={elem[2]} rel="noopener noreferrer" target='_blank'>
                        <span>{elem[0]}</span>
                        <span class="date">{elem[1]}</span> 
                    </a>
                </div>))
        }
        
        return (<div>
            <div class="feedTitle">{feedDescription}</div>
            <div class="artickle_wrapper">{artickleBox}</div>
            </div>
        )
    }

}

export default ArtickleList;