import * as React from "react";
import BigCalendar, { View, ViewKey } from "react-big-calendar";
import * as moment from "moment";
import json, { User } from "../../utils/api";


const localizer = BigCalendar.momentLocalizer(moment);
const allViews: View[] = Object.keys(BigCalendar.Views).map((k: ViewKey) => BigCalendar.Views[k]);

interface IMyCalendarState {
  events: ({
    'title': string;
    'allDay': boolean;
    'start': Date;
    'end': Date;
  } | {
    'title': string;
    'start': Date;
    'end': Date;
  })[];
}

class MyCalendar extends React.Component<any, IMyCalendarState>{
  state = {
    events: [
      {
        title: "Fall Catalyst Start Date",
        start: new Date(2018, 7, 20, 9, 0),
        end: new Date(moment([2018, 7, 20, 9, 0]).add(8, "h").format('LLLL'))
      }
    ]
  };

  async componentWillMount() {

    let id = User.userid;
    let interviews = await this.getInterviews(id);
    let applications = await this.getApplications(id);
    let networking = await this.getNetworking(id);
    let services = await this.getServices(id);
    let events = [...this.state.events,...interviews,...applications,...networking,...services];
    this.setState({
      events
    });

  }

  async getInterviews(id: string) {
    let events: IMyCalendarState['events'] = [];
    let result = await json(`/api/q/interviewresults/${id}`);
    result.forEach(async (element: any) => {
      let employer = await json(`/api/employerInfo/${element.employer_id}`);
      let startInterview = moment(element["interview_date"]);
      if (element["challenge_due"] !== null) {
        let startChallenge = moment(element["challenge_due"]);
        events.push({
          'title': `Code Challenge for interview with ${employer.contact} from ${employer.company_name}`,
          'start': new Date(startChallenge.subtract(2, "h").format('YYYY-MM-DDTHH:mm')),
          'end': new Date(startChallenge.add(1, "h").format('YYYY-MM-DDTHH:mm'))
        })

      }
      events.push({
        'title': `Interview with ${employer.contact} from ${employer.company_name}`,
        'start': new Date(startInterview.format('YYYY-MM-DDTHH:mm')),
        'end': new Date(startInterview.add(1, "h").format('YYYY-MM-DDTHH:mm'))
      });
    });

    return events;
  }

  async getApplications(id: string) {
    let events: IMyCalendarState['events'] = [];
    let result = await json(`/api/applications/find`, 'POST', { userid: id });
    result.forEach(async (element: any) => {
      let employer = await json(`/api/employerInfo/${element["company_info"]}`);
      let dateSubmitted = moment(element["date_submitted"]);

      events.push({
        'title': `Application submitted to ${employer.company_name}`,
        'start': new Date(dateSubmitted.format('YYYY-MM-DDTHH:mm')),
        'end': new Date(dateSubmitted.add(10, "m").format('YYYY-MM-DDTHH:mm'))
      });
    });
    return events;
  }

  async getNetworking(id: string) {
    let events: IMyCalendarState['events'] = [];
    let result = await json(`/api/networking/find`, 'POST', { user: id });
    result.forEach(async (element: any) => {
      let company = element["company_name"];
      let contact = element["contact"];
      let date = moment(element["network_date"]);
      events.push({
        'title': `Networking with ${contact} from ${company}`,
        'start': new Date(date.format('YYYY-MM-DDTHH:mm')),
        'end': new Date(date.add(1, "h").format('YYYY-MM-DDTHH:mm'))
      });
    });
    return events;

  }

  async getServices(id: string) {
    let events: IMyCalendarState['events'] = [];
    let result1 = await json(`/api/careerservices/find`, 'POST', { userid: id });
    let result2 = await json(`/api/services`);
    let serviceType = await result2.map(async (type:any) => {
      return type['service_type'];
    });
    result1.forEach(async (element: any) => {
      let index = await element["service_type"];
      let service = await serviceType[index];
      let date = moment(element["_created"]);
      events.push({
        'title': `Career Services appointment for ${service}`,
        'start': new Date(date.format('YYYY-MM-DDTHH:mm')),
        'end': new Date(date.add(1, "h").format('YYYY-MM-DDTHH:mm'))
      });
    });
    return events;
  }

  render() {
    return (
      <main className="py-5">
        <div className="container py-5 text-center " style={{ marginLeft: "200px" }}>
          <div className="d-flex justify-content-center">


            <BigCalendar

              localizer={localizer}
              views={allViews}
              events={this.state.events}
              defaultDate={new Date()}
              startAccessor="start"
              endAccessor="end"
            />
          </div>
        </div>
      </main>
    );
  }
}
export default MyCalendar;