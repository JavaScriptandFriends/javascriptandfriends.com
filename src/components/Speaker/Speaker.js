import React from "react";
import { Flex } from "@rebass/grid";

export default function Speaker({ Image, name, talk }) {
  return (
    <div
      style={{
        width: 480,
        minWidth: 300,
        minHeight: 280,
        margin: "1rem",
        backgroundColor: "#fff",
        borderRadius: 12,
        display: "flex",
        alignItems: "center"
      }}
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={{ padding: "0.5rem", flexWrap: "wrap" }}
      >
        <div
          style={{
            margin: "0.5rem",
            flex: 2
          }}
        >
          <div style={{ width: "100%" }}>
            <div
              style={{
                borderRadius: "100%",
                overflow: "hidden",
                width: "125px",
                margin: "10px auto",
                boxShadow: "0px 3px 15px rgba(0,0,0,0.2)"
              }}
            >
              <Image />
            </div>

            <h3 style={{ textAlign: "center" }}>{name}</h3>
          </div>
        </div>

        <div style={{ width: "250px", margin: "0.5rem" }}>
          <h3 style={{ fontSize: "1rem" }}>{talk.title}</h3>
          <p style={{ fontSize: "1rem" }}>{talk.description}</p>
        </div>
      </Flex>
    </div>
  );
}
