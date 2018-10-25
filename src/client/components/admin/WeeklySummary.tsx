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
            },
            item2:
            {
                collapsed: true,
                class: "",
            },
            item3:
            {
                collapsed: true,
                class: "",
            }
        }
        this.handlesClick = this.handlesClick.bind(this);
    }

    handlesClick(e: any) {
        e.preventDefault();
        let classAtt;
        let currentItem=this.state[`${e.target.name}`];
        let toggle =!currentItem.collapsed;       
        for (let item in this.state) {
            if (item !== e.target.name) {                         
                this.setState({
                    [`${item}`]: {
                        collapsed: true,
                        class: ""
                    }
                })
            }
        }
       
        if (this.state[`${e.target.name}`]["class"] === "show") {
            classAtt = "";
        } else {
            classAtt = "show";
        }
        this.setState({
            [`${e.target.name}`]: {
                collapsed: toggle,
                class: classAtt
            }
        });


    }


    render() {
        return (
            <div className="wSum d-flex justify-content-center mb-3">
                <div className="accordion shadow-lg" id="accordionExample">
                    <div className="card clearfix">
                        <div className="card-header" id="headingOne">
                            <button type="button" className="btn btn-primary float-left"><span aria-hidden="true">&laquo;</span> <span className="sr-only">Previous</span></button>
                            <button type="button" className="btn btn-primary float-right"><span aria-hidden="true">&raquo;</span><span className="sr-only">Next</span></button>
                            <h5 className="mb-0">
                                <button className="btn btn-link" type="button" name="item1" aria-expanded="true" aria-controls="collapseOne" onClick={this.handlesClick}>
                                    Collapsible Group Item #1
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className={`collapse ${this.state.item1.class}`} aria-labelledby="headingOne">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" name="item2" aria-expanded="false" aria-controls="collapseTwo" onClick={this.handlesClick}>
                                    Collapsible Group Item #2
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className={`collapse ${this.state.item2.class}`} aria-labelledby="headingTwo">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" name="item3" aria-expanded="false" aria-controls="collapseThree" onClick={this.handlesClick}>
                                    Collapsible Group Item #3
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className={`collapse ${this.state.item3.class}`} aria-labelledby="headingThree">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }


}
