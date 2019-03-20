import React, { Component } from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

export default function Speaker(props) {
  return (
    <div
      style={{
        width: 480,
        minWidth: 300,
        maxHeight: 280,
        margin: '1rem',
        backgroundColor: "#fff",
        borderRadius: 12
      }}
    >
      <Flex flexDirection='row' alignItems='center' style={{ padding: '1rem' }}>
        <div style={{
          margin: '0.5rem', width: '50%', textAlign: 'center'
        }}>
          <img
            src="https://via.placeholder.com/150"
            alt=""
            style={{ borderRadius: "100%" }}
          />
          <h3>Laurie Voss</h3>
        </div>

        <div style={{ margin: '0.5rem' }}>
          <h3 style={{ fontSize: '1rem' }}>Talk title here</h3>
          <p style={{fontSize: '1rem'}}>
            talk description here. talk description here. talk description
            here
            </p>
        </div>
      </Flex>
    </div>
  )
}