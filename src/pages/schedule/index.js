import React, { Component } from "react";
import moment from 'moment-timezone'
import Layout from "../../components/layout";
import Alternate from "../../components/Alternate";
import rawScheduleData from "../../content/schedule.json";
import Text from "../../components/Text";

const DEFAULT_TIMEZONE = 'US/Eastern'
const TIMEZONE_STORAGE_KEY = 'schedule.timezone'

const SCHEDULE_WITH_TIMES_PARSED = rawScheduleData.map((entry) => ({
    ...entry,
    time: moment(`2021-08-20T${entry.USEDT}`)
}))

const TIMEZONES = {
    "US/Eastern":"Eastern",
    "US/Central":"Central",
    "US/Mountain":"Mountain",
    "US/Pacific":"Pacific",
    "US/Alaska":"Alaska",
    "US/Hawaii":"Hawaii",
}

console.log(SCHEDULE_WITH_TIMES_PARSED[0].time.format())

const timeSort = (a, b) => {
    if (a.time.unix() === b.time.unix()) {
        return a.Room > b.Room ? 1 : -1;
    }
    return a.time.unix() > b.time.unix() ? 1 : -1;
}

const trackSort = (a, b) => {
    if (a.Room === b.Room) {
        return a.time.unix() > b.time.unix() ? 1 : -1;
    }
    return a.Room > b.Room ? 1 : -1;
}

const getInitialTimezone = () => {
    const stored = typeof window !== 'undefined' && window.localStorage?.getItem?.(TIMEZONE_STORAGE_KEY)
    return stored || DEFAULT_TIMEZONE
}

const persistTimezone = (timezone) =>{
    // eslint-disable-next-line
    typeof window !== 'undefined' && window.localStorage?.setItem?.(TIMEZONE_STORAGE_KEY, timezone)
}

const updateTimezone = (schedule, timezone) =>
    schedule.map((entry) => ({
        ...entry,
        // moment.tz() mutates its subject, so .clone() first
        time: entry.time.clone().tz(timezone)
    }))

export default class scheduleTime extends Component {
    constructor(props) {
        super(props);
        const timezone = getInitialTimezone();
        this.scheduleData = updateTimezone(SCHEDULE_WITH_TIMES_PARSED, timezone).sort(timeSort);
        this.state = {
            schedule:  this.scheduleData,
            timezone,
        };
        this.sortChange = this.sortChange.bind(this);
        this.filterChange = this.filterChange.bind(this);
        this.timezoneChange = this.timezoneChange.bind(this);
    }

    sortChange(e) {
        this.setState({
            schedule: this.scheduleData.sort(e.target.value === "time" ? timeSort : trackSort)
        });
    }

    filterChange(e) {
        if(e.target.value === "all")
        {
            const currenttimezone = getInitialTimezone();
            this.setState({
                schedule: updateTimezone(SCHEDULE_WITH_TIMES_PARSED, currenttimezone).sort(timeSort)
            });
        }
        else
        {
            this.setState({
                schedule: this.scheduleData.filter(data => data.Room === e.target.value).sort(timeSort)
            });
        }       
    }

    timezoneChange(e) {
        const newTimezone = e.target.value
        this.setState({
            timezone: newTimezone,
            schedule: updateTimezone(this.state.schedule, newTimezone)
        })
        persistTimezone(newTimezone)
    }

    render() {
        return (
            <Layout style={{justifyContent:'center'}}>
                <Alternate style={{ border: 0 }}>
               <div style={{ maxWidth: `100%`, margin: `1.45rem` ,justifyContent: 'center'}}>
            <h1>Schedule</h1>
            <h3>Workshop Day - Aug-19-2021</h3>
            <Text>Please check the workshop page for details.</Text>
            <br></br>
            <h3>Conference Day - Aug-20-2021</h3>
            <Text>Each talk is scheduled for around 50 min. TimeZone - {this.state.timezone}</Text>            
            <Text>Please use Chrome or Edge Browser to view the schedule.</Text>
            <Text>All talks will be delivered through our <a href="https://www.youtube.com/channel/UCz4LNOw6U7ncyOSx73u_YMQ/featured" target="_blank" rel="noopener noreferrer">YouTube Channel</a> and live by the speakers.</Text>
            <br></br>
            {typeof window !== 'undefined' && ( // not SSR
                <div style={{align: 'left'}}>
                    Sort by:
                    <select id="sort"  onBlur={this.sortChange} onChange={this.sortChange}>
                        <option value="time">Time</option>
                        <option value="room">Room</option>
                    </select>
                    <br></br>
                    Filter Rooms:
                    <select id="filter" onBlur={this.filterChange} onChange={this.filterChange}>
                        <option value="all">All Rooms</option>                        
                        <option value="Track1">Track-1</option>
                        <option value="Track2">Track-2</option>
                        <option value="Track3">Track-3</option>
                        <option value="Track4">Track-4</option>
                        <option value="Track5">Track-5</option>
                        <option value="Track6">Track-6</option>
                    </select>
                    <br></br>
                    Timezone:
                    <select id="timezone"  onBlur={this.timezoneChange} onChange={this.timezoneChange} value={this.state.timezone}>
                        {Object.entries(TIMEZONES).map(([key, text]) => (
                            <option key={key} value={key}>{text}</option>
                        ))}
                    </select>
                </div>
            )}
            <div style={{align:'center', overflowX:'auto'}}>
                <table>
                    <thead>
                    <tr>
                        <th colSpan="2">Time</th>
                        <th>Session Details</th>
                        <th>Speaker Name</th>
                        <th>Room</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.schedule.map((data, index) => {
                        let filterClass = "";
                        if (this.filter !== "all") {
                            if (this.filter !== data.TrackLink) {
                                filterClass = "hide";
                            }
                        }
                        return<tr key={`SessionTitle_${index}`} className={filterClass}>
                            <td colSpan="2" style={{width:'auto'}}>
                                <Text>{data.time.format('h:mm A')}</Text>
                            </td>
                    <td style={{width:'auto'}}>
                        <Text>Title : {data.SessionTitle}</Text>
                        <br></br>
                        <Text>{data.SessionDescription}</Text>
                        <br></br>
                    </td>
                    <td style={{width:'auto'}}>
                        <Text>{data.SpeakerName}</Text>
                    </td>
                    <td style={{width:'auto'}}>
                        <Text>{data.Room}</Text>
                    </td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
            <h6>Schedule subject to change.</h6>
          </div>
          </Alternate>
            </Layout>

        )
    }
}
