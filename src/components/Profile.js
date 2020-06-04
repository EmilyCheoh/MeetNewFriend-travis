import React, { useEffect, useState } from 'react';
import { Container, ButtonGroup, Button, Card, Field, Label } from "rbx";
import 'firebase/database';
import 'firebase/auth';
import React from 'react';
import { Card, Label } from "rbx";

const Profile = ({ person, people }) => {

    // stylize CSS of cards
    //click name search it in people
    return (

        people["profiles"].filter(name => name["name"] === person).map(filteredPerson => (

            <li>
                <li>
                    {/* <Card>
                        <Field> */}
                    <Label style={{ padding: 80 }}> Major:{" "}
                        {filteredPerson["major"]}</Label>
                    <br />
                    {/* </Field>
                    </Card> */}

                    {/* <Card>
                        <Field> */}
                    <Label style={{ padding: 80 }}> Year:{" "}
                        {filteredPerson["year"]}</Label><br />
                    {/* </Field>
                    </Card> */}

                    {/* <Card>
                        <Field> */}
                    <Label style={{ padding: 80, flexDirection: 'row' }}> About Me:{" "}

                        {filteredPerson["aboutme"]}

                    </Label><br />

                    {/* </Field>
                    </Card> */}
                </li>


                <Card.Image>
                    <img src={filteredPerson.imageURL} style={{ width: 70, height: 68.5 }} alt="Logo" />
                </Card.Image>


                <br />

            </li>

        )
        ));
};

export default Profile;