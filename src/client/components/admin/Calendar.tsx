import * as React from "react";
import BigCalendar, { View, ViewKey } from "react-big-calendar";
import * as moment from "moment";


const localizer = BigCalendar.momentLocalizer(moment);
const allViews: View[] = Object.keys(BigCalendar.Views).map((k: ViewKey) => BigCalendar.Views[k]);

class MyCalendar extends React.Component<any, any>{
  state = {
    events: [
      {
        'title': 'All Day Event',
        'allDay': true,
        'start': new Date(2015, 3, 0),
        'end': new Date(2015, 3, 1)
      },
      {
        'title': 'Long Event',
        'start': new Date(2015, 3, 7),
        'end': new Date(2015, 3, 10)
      },
      {
        start: new Date(2015, 3, 3,5,35),
        end: new Date(moment([2015, 3, 3]).add(1, "h").format('LLLL')),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
      <div style={{ height: "600px" }}>


        <BigCalendar

          localizer={localizer}
          views={allViews}
          events={this.state.events}
          defaultDate={new Date(2015, 3, 1)}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    );
  }
}
export default MyCalendar;