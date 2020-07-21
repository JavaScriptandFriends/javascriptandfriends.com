import React from "react";
import Layout from "../../components/layout";
import Alternate from "../../components/Alternate";
import schdeuleData from "../../content/schedule.json";
import Text from "../../components/Text";

const scheduleTime = () => (
    <Layout style={{justifyContent:'center'}}>
        <Alternate style={{ border: 0 }}>
       <div style={{ maxWidth: `100%`, margin: `1.45rem` ,justifyContent: 'center'}}>
    <h1>Schedule</h1>
    <h3>Conference Day - Aug-14-2020</h3>
    <p>TimeZone - US Eastern Time</p>
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
            {schdeuleData.map((data, index) => {
                return<tr key={`SessionTitle_${index}`}>
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

export default scheduleTime