import * as React from 'react';
import json, { User } from '../../utils/api';

interface SummaryItem{
    collapsed: boolean,
    class: string,
    title:string,
    body: string,
    id: number
}
interface IWeeklySummaryState {
    item1:SummaryItem;
    item2:SummaryItem;
    item3:SummaryItem;
    summaries:[]
}

interface IWeeklySummaryProps {}

export default class WeeklySummary extends React.Component<IWeeklySummaryProps, any> {
    constructor(props: IWeeklySummaryProps) {
        super(props);
        this.state = {
            item1:
            {
                collapsed: false,
                class: "show",
                title:"",
                body: "",
                id: 0
            },
            item2:
            {
                collapsed: true,
                class: "",
                title:"",
                body: "",
                id: 0
            },
            item3:
            {
                collapsed: true,
                class: "",
                title:"",
                body: "",
                id: 0
            },
            summaries: []
        }
        this.handlesClick = this.handlesClick.bind(this);
    }

    async componentWillMount() {

        let { item1, item2, item3 } = this.state;
        let id =User.userid;
       let data = await json(`api/q/weeklysummary/${id}`);
        await data.forEach((element:any,index:any) => {
            data[index].date= new Date(element.date).toDateString();
            switch(index){
                case 0:
                    item1.title=element.date;
                    item1.body=element.content;
                    item1.id=0;
                    break;
                case 1:
                    item2.title=element.date;
                    item2.body=element.content;
                    item2.id=1;
                    break;
                case 2:
                    item3.title=element.date;
                    item3.body=element.content;
                    item3.id=2;
                    break;
                default:
                    break;
            }
        });
            
        

        this.setState({
            item1,
            item2,
            item3,
            summaries:data
        });


    }

    handlesClick(e: any) {
        e.preventDefault();
        let targetName = e.target.name;
        let { item1, item2, item3 } = this.state;
        let items = { item1, item2, item3 };        
        if (targetName.includes("item")) {
            this.collapse(targetName, items);
        } else if (targetName === "previous" || targetName === "next") {
            this.cycle(targetName, items);
        }
    }

    cycle(targetName: any, items: any) {

        for (let item in items) {
            let id = this.state[`${item}` as any]["id"];
            let cardObj = this.state[`${item}` as any];
            if (targetName === "previous") {
                let index = id - 1;
                cardObj.body = this.state.summaries[index]["content"];
                cardObj.title = this.state.summaries[index]["date"];
                cardObj.id = index;
            } else if (targetName === "next") {
                let index = id + 1;
                cardObj.body = this.state.summaries[index]["content"];
                cardObj.title = this.state.summaries[index]["date"];
                cardObj.id = index;
            }
            this.setState({
                [`${item}`]: cardObj
            });
        }
    }

    collapse(targetName: any, items: any) {
        
            for (let item in items) {
            let cardObj = this.state[`${item}`];
            if (item !== targetName) {
                cardObj.collapsed=true;
                cardObj.class="";
                this.setState({
                    [`${item}`]:cardObj                      
                });
            }
            else {
                cardObj.collapsed = !cardObj.collapsed;         
                cardObj.class= cardObj.class === "show"? "":"show";
                this.setState({
                    [`${item}`]:cardObj                      
                });
            }
        }
    }


    render() {
        let { item1, item2, item3 } = this.state;
        let items = [item1, item2, item3];
        let N = this.state.summaries.length;
        let cardList = items.map((item, index) => {
            let i = index + 1;
            let id = item.id+1;
            let lftBtn = <button type="button" name="previous" className="btn btn-primary float-left" onClick={this.handlesClick} disabled={item.id === 0 ? true : false}><span aria-hidden="true">&laquo;</span> <span className="sr-only">Previous</span></button>;
            let rgtBtn = <button type="button" name="next" className="btn btn-primary float-right" onClick={this.handlesClick} disabled={item.id === N - 3 ||N<3? true : false}><span aria-hidden="true">&raquo;</span><span className="sr-only">Next</span></button>;

            return (
                <div className={`card ${index === 0?'clearfix':''}`} key={id}>
                    <div className="card-header" id={`heading${i}`}>
                        {index === 0 ? lftBtn : null}
                        {index === 0 ? rgtBtn : null}
                        <h5 className="mb-0">
                            <button className="btn btn-link" type="button" name={`item${i}`} aria-expanded="true" aria-controls="collapseOne" onClick={this.handlesClick}>
                                {`${item.title}`}
                            </button>
                        </h5>
                    </div>

                    <div id={`collapse${i}`} className={`collapse ${item.class}`} aria-labelledby={`heading${i}`}>
                        <div className="card-body">
                            {item.body}
                        </div>
                    </div>
                </div>

            );

        });

        cardList =cardList.filter((card,index)=>{
            return index < N;
        });


        return (
            <div className="wSum d-flex justify-content-center mb-3">
                <div className="accordion shadow-lg" id="accordionExample">
                    {cardList}
                </div>
            </div>

        );

    }


}
