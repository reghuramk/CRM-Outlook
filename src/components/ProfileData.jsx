import React from "react";

/**
 * Renders information about the user obtained from MS Graph
 * @param props 
 */
export const ProfileData = ({graphData}) => {
    console.log(graphData);

    return (
        <div id="profile-div">
            <p><strong>First Name: </strong> {graphData.givenName}</p>
            <p><strong>Last Name: </strong> {graphData.surname}</p>
            <p><strong>Email: </strong> {graphData.userPrincipalName}</p>
            <p><strong>Id: </strong> {graphData.id}</p>
        </div>
    );
};