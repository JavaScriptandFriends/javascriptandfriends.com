import React, { Component } from "react";
import { Link } from "gatsby"; 
import Layout from "../../components/layout"; 
import Card from "../../components/Card"; 
import { Flex } from "@rebass/grid"; 
import Speaker from "../../components/Speaker"; 
import { Hidden } from '../../components/Hidden';
import Text from "../../components/Text";
import { Link as ButtonLink } from "../../components/Button";
import amandaLange from "../../components/SpeakerImages/AmandaLange";
import bobFornalImage from "../../components/SpeakerImages/bob-fornal";
import alexRiviere from "../../components/SpeakerImages/AlexRiviere";
import chadGreen from "../../components/SpeakerImages/ChadGreen";
import daveFancher from "../../components/SpeakerImages/DaveFancher";
import ericPotter from "../../components/SpeakerImages/EricPotter";
import guyRoyse from "../../components/SpeakerImages/Guy";
import heathMurphy from "../../components/SpeakerImages/HeathMurphy";
import marcoIppolito from "../../components/SpeakerImages/MarcoIppolito";
import mattGroves from "../../components/SpeakerImages/MatthewGroves";
import reyRiel from "../../components/SpeakerImages/ReyRiel";
import russellSkaggs from "../../components/SpeakerImages/RussellSkaggs";
import samuelShaw from "../../components/SpeakerImages/SamuelShaw";
import scottStroz from "../../components/SpeakerImages/ScottStroz";
import siddarth from "../../components/SpeakerImages/SiddharthVerma";
import thomasHaver from "../../components/SpeakerImages/ThomasHaver";
import tomasPiaggio from "../../components/SpeakerImages/TomasPiaggio";
import varshaThirumakil from "../../components/SpeakerImages/VarshaThirumakil";
import shivayLamba from "../../components/SpeakerImages/ShivayLamba";
import devAgrawal from "../../components/SpeakerImages/DevAgrawal";

export default class Speakers2023 extends Component{
    constructor(props){
        super(props);

    }



    render() {
        return (
            <Layout style={{justifyContent:'center'}}>                
                <h1 style={{color: 'white', textAlign:'center'}}>Speakers - 2023</h1>
                <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center" style={{ padding: "2rem", width: "" }}>
            <ButtonLink
            href="https://www.eventbrite.com/e/javascript-and-friends-conference-2023-tickets-668633670307"
            alignSelf="center"
            mr={40}
            target="_blank" rel="noopener noreferrer"
          >
            REGISTER
          </ButtonLink>          
            </Flex>  

                <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center" style={{ padding: "2rem", width: "" }}>
                    <Speaker name="Amanda Lange" Image={amandaLange} twitter="" linkedin="amanda-lange-scrummaster"  /> 
                    <Speaker name="Varsha Thirumakil" Image={varshaThirumakil} twitter="var_sha612" linkedin="varshathirumakil"  />
                    <Speaker name="Dev Agrawal" Image={devAgrawal} twitter="devagrawal09" linkedin="dev-agr"  /> 
                    <Speaker name="Dave Fancher" Image={daveFancher} twitter="davefancher" linkedin="davefancher"  />
                    <Speaker name="Bob Fornal" Image={bobFornalImage} twitter="rfornal" linkedin="rfornal"  />
                    <Speaker name="Chad Green" Image={chadGreen} twitter="chadgreen" linkedin="chadwickgreen"  />
                    <Speaker name="Matthew Groves" Image={mattGroves} twitter="mgroves" linkedin="mgroves"  />
                    <Speaker name="Thomas Haver" Image={thomasHaver} twitter="cogsfun" linkedin="thomas-haver"  />
                    <Speaker name="Marco Ippolito" Image={marcoIppolito} twitter="satanacchio" linkedin="marcoippolito2021"  />
                    <Speaker name="Heath Murphy" Image={heathMurphy} twitter="" linkedin=""  />
                    <Speaker name="Eric Potter" Image={ericPotter} twitter="pottereric" linkedin="ericbpotter"  />
                    <Speaker name="Rey Riel" Image={reyRiel} twitter="rjriel87" linkedin="rey-riel-31156126"  /> 
                    <Speaker name="Alex Riviere" Image={alexRiviere} twitter="fimion" linkedin=""  />  
                    <Speaker name="Guy Royse" Image={guyRoyse} twitter="guyroyse" linkedin="groyse"  />
                    <Speaker name="Samuel Shaw" Image={samuelShaw} twitter="" linkedin="thesamdroid"  />
                    <Speaker name="Russell Skaggs" Image={russellSkaggs} twitter="russellskaggs" linkedin="russellskaggs"  />
                    <Speaker name="Scott Stroz" Image={scottStroz} twitter="boyzoid" linkedin="boyzoid"  />                    
                    <Speaker name="Siddharth Verma" Image={siddarth} twitter="sid_verma32" linkedin="sidverma32"  />
                </Flex>

                <h4 style={{color: 'white', textAlign:'center'}}>###### Speakers subject to change.</h4>
            </Layout>

        )
    }
}
