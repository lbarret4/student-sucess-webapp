import * as React from 'react';
import json, { User } from '../../utils/api';


export default class WeeklySummary extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            item1:
            {
                collapsed: false,
                class: "show",
                body: "",
                id: 0
            },
            item2:
            {
                collapsed: true,
                class: "",
                body: "",
                id: 0
            },
            item3:
            {
                collapsed: true,
                class: "",
                body: "",
                id: 0
            },
            body: []
        }
        this.handlesClick = this.handlesClick.bind(this);
    }

    componentWillMount() {

        let { item1, item2, item3 } = this.state;
        let body = [
            "Anim pariatur cliche (1) reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
            "Anim pariatur cliche (2) reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
            "Anim pariatur cliche (3) reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
            "Anim pariatur cliche (4) reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
            "Anim pariatur cliche (5) reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
            "Anim pariatur cliche (6) reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
            "Anim pariatur cliche (7) reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
        ];
        [
            item1.body,
            item2.body,
            item3.body
        ] = body.slice(0, 3);
        [item1.id, item2.id, item3.id] = [0, 1, 2]

        this.setState({
            item1,
            item2,
            item3,
            body
        })


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
            let id = this.state[`${item}`]["id"];
            let cardObj = this.state[`${item}`];
            if (targetName === "previous") {
                let index = id - 1;
                cardObj.body = this.state.body[index];
                cardObj.id = index;
            } else if (targetName === "next") {
                let index = id + 1;
                cardObj.body = this.state.body[index];
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
        let N = this.state.body.length;
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
                                {`Collapsible Group Item #${id}`}
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
