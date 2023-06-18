import React, { Component } from "react";
import { Link } from "gatsby"; 
import Layout from "../../components/layout"; 
import Card from "../../components/Card"; 
import { Flex } from "@rebass/grid"; 
import Text from "../../components/Text";
import { Link as ButtonLink } from "../../components/Button";
import Session from "../../components/Session";


export default class Sessions2023 extends Component{
    constructor(props){
        super(props);

    }

    render() {

        return (
            <Layout style={{justifyContent:'center'}}>
            <h1 style={{color: 'white', textAlign:'center'}}>Sessions - 2023</h1>

            <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center" style={{ padding: "2rem", width: "" }}>
                <Session title="State of WebML: Machine learning for frontend devs" speaker="Shivay Lamba" description="" track="Automation & AI" />
                <Session title="JavaScript Metaprogramming" speaker="Dave Fancher" description="" track="Design & Performance" />
                <Session title="All Things Functions in Javascript" speaker="Rey Riel" description="" track="Web Development" />
                <Session title="Understanding Probabilistic Data Structures with 112,092 UFO Sightings" speaker="Guy Royse" description="" track="Design & Performance" />
                <Session title="Javascript and The Edge" speaker="Varsha Thirumakil" description="" track="Web Development, Miscellaneous" />
                <Session title="Using MySQL Document Store with Node.js" speaker="Scott Stroz" description="" track="Middleware" />
                <Session title="Meet Your New BFF: Backend to Frontend without the Duct Tape" speaker="Dev Agrawal" description="" track="Design & Performance, Middleware, Web Development" />
                <Session title="The Illustrated Guide to Object Prototypes and OOP in JavaScript" speaker="Ramón Huidobro" description="" track="Miscellaneous" />
                <Session title="JSON Data Modeling in Document Databases" speaker="Matthew Groves" description="" track="Miscellaneous" />
                <Session title="Measuring the Cost of a GraphQL Query" speaker="Marco Ippolito" description="" track="Web Development, Design & Performance" />
                <Session title="The Automation Firehose: Be Strategic and Tactical" speaker="Thomas Haver" description="" track="Automation & AI, Testing" />
                <Session title="Vue for React Developers" speaker="Alex Riviere" description="" track="Web Development" />
                <Session title="TypeScript - Beyond the Basics" speaker="Eric Potter" description="" track="Web Development" />
                <Session title="Just the fun stuff: embracing low code as a hardcore developer" speaker="Rey Riel" description="" track="Web Development" />
                <Session title="Tracking Aircraft with Streams + Software-Defined Radio" speaker="Guy Royse" description="" track="Miscellaneous" />
                <Session title="From Front-End to Fullstack" speaker="Russell Skaggs" description="" track="Web Development" />
                <Session title="Building a real-time web app using ReactJS and Firebase" speaker="Tomas Piaggio" description="" track="Middleware, Web Development" />
                <Session title="Building an Accessible Component Library" speaker="Russell Skaggs" description="" track="Web Development" />
                <Session title="Memory First: An Introduction to Redis" speaker="Guy Royse" description="" track="Web Development" />
                <Session title="Debugging Burnout" speaker="Samuel Shaw" description="" track="Soft Skills" />
                <Session title="CI/CD: A Game-Changer for Code Quality and Production Stability" speaker="Siddharth Verma" description="" track="Miscellaneous" />
                <Session title="Peaks and Meadows: API design and learning curves in web frameworks" speaker="Dan Jutan" description="" track="Web Development" />
                <Session title="Node.js Multithreading" speaker="Dave Fancher" description="" track="Design & Performance" />
                <Session title="The End… for mobile apps – Enter ASP.NET Core Blazor WebAssembly PWAs" speaker="Heath Murphy" description="" track="Mobile Development, Web Development" />
                <Session title="How to be a Leader" speaker="Chad Green" description="" track="Soft Skills" />
                <Session title="Zero Pain Frontend to Fullstack in Minutes with Open Source" speaker="Dev Agrawal" description="" track="Design & Performance, Middleware, Web Development" />
                <Session title="Asynchronous JavaScript (Part 1): Livin' On A Prayer" speaker="Bob Fornal" description="" track="Web Development" />
                <Session title="A Look Inside Observables" speaker="Bob Fornal" description="" track="Web Development" />
                <Session title="What to Avoid When Writing Unit Tests" speaker="Bob Fornal" description="" track="Testing" />
                <Session title="The Science of Testing" speaker="THomas Haver" description="" track="Testing, Soft Skills" />
            </Flex>

            <h4 style={{color: 'white', textAlign:'center'}}>###### Sessions subject to change.</h4>
        </Layout>

        )
    }


}