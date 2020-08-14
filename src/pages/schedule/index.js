import React, { Component } from "react";
import Layout from "../../components/layout";
import Alternate from "../../components/Alternate";
import scheduleData from "../../content/schedule.json";
import Text from "../../components/Text";

const convertTime = (time) => {
    time = time.split(/[: ]/);
    if (time[2] === "PM" && time[0] != 12) time[0] = parseInt(time[0]) + 12;
    let d = new Date();
    d.setHours(time[0]);
    return d;
}

const timeSort = (a, b) => {
    if (a.USEST === b.USEST) {
        return a.TrackLink > b.TrackLink ? 1 : -1;
    }
    a.time = convertTime(a.USEST);
    b.time = convertTime(b.USEST);
    return a.time > b.time ? 1 : -1;
}

const trackSort = (a, b) => {
    if (a.TrackLink === b.TrackLink) {
        a.time = convertTime(a.USEST);
        b.time = convertTime(b.USEST);
        return a.time > b.time ? 1 : -1;
    }
    return a.TrackLink > b.TrackLink ? 1 : -1;
}

export default class scheduleTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: scheduleData.sort(timeSort)
        };
        this.sortChange = this.sortChange.bind(this);
        this.filterChange = this.filterChange.bind(this);
    }

    sortChange(e) {
        this.setState({
            schedule: scheduleData.sort(e.target.value === "time" ? timeSort : trackSort)
        });
    }

    filterChange(e) {
        // let schedule = scheduleData.filter(data => data.TrackLink === e.target.value).sort(timeSort);
        this.setState({
            schedule: scheduleData.filter(data => data.TrackLink === e.target.value).sort(timeSort)
        });
    }

    render() {
        return (
            <Layout style={{justifyContent:'center'}}>
                <Alternate style={{ border: 0 }}>
               <div style={{ maxWidth: `100%`, margin: `1.45rem` ,justifyContent: 'center'}}>
            <h1>Schedule</h1>
            <h3>Workshop Day - Aug-13-2020</h3>  
            <Text>Please check the workshop page for details.</Text>
            <br></br>
            <h3>Conference Day - Aug-14-2020</h3>    
            <Text>Each talk is scheduled for around 50 min. TimeZone - US Eastern Time</Text>
            <br></br>
            <div style={{align: 'left'}}>
                Sort by: 
                <select id="sort" onChange={this.sortChange}>
                    <option value="time">Time</option>
                    <option value="track">Track</option>
                </select>
                <br></br>
                Filter Tracks:
                <select id="filter" onChange={this.filterChange}>
                    <option value="all">All Tracks</option>
                    <option value="Track1">Track 1</option>
                    <option value="Track2">Track 2</option>
                    <option value="Track3">Track 3</option>
                    <option value="Track4">Track 4</option>
                    <option value="Track5">Track 5</option>
                    <option value="Track6">Track 6</option>
                </select>
            </div>
            <div style={{align:'center', overflowX:'auto'}}>
                <table>
                    <thead>
                    <tr>
                        <th colSpan="2">Time</th>
                        <th>Session Title</th>
                        <th>Speaker Name</th>
                        <th>Track</th>
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
                            <td colSpan="2">
                                <Text>{data.USEST}</Text>
                            </td>
                    <td>
                        <Text>{data.SessionTitle}</Text>
                    </td>
                    <td>
                        <Text>{data.SpeakerName}</Text>
                    </td>
                    <td>
                        <Text>{data.TrackLink}</Text>
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