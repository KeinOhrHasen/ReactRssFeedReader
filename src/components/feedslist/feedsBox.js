import React, {Component} from "react"
import ArtickleList from "./artickleList";
import { CORS_PROXY } from "../../constants/API";



class FeedBox extends Component {
    constructor(props) {
        super(props)
    }

    
    fetchFeed(url){
        fetch(CORS_PROXY + url).then((res) => {
            res.text()
            .then((xmlTxt) => {
                let domParser = new DOMParser()
                let doc = domParser.parseFromString(xmlTxt, 'application/xml');
                let artickleList = [];
                let description = doc.querySelector('description').textContent
                doc.querySelectorAll('item').forEach((item) => {
                    artickleList.push(this.extractTitleDate(item));
                    })
                this.props.addArtickleList({feedTitle:description, url: url, data:artickleList})
            })

            .catch(err => {
                console.log(err);
            })
        })
    }

    extractTitleDate(element){
        let title = element.querySelector('title').textContent
        let date = element.querySelector('pubDate').textContent
        let link = element.querySelector('link').textContent
        
        let newD = new Date(date);
        return [title, newD.toDateString(), link]
    }

    fetchAllfeeds(listOfFeeds){
        Promise.all(listOfFeeds.map(item =>
            this.fetchFeed(item.url)
        ))
    }

    render() {
        // console.log("PROPS FEED LIST", this.props.feeds)
        this.fetchAllfeeds(this.props.feeds)
        
        let ul = this.props.artickleList.map((item, index) => 
            (<ArtickleList  key={index} artickles ={item} />)
        )
 
        return (<>
            <div class="main_title" >FeedList</div>
            {ul}
            </>
        )
    }
}

export default FeedBox;