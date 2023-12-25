
'use client';
import Link from "next/link";
import Image from 'next/image'
import { useEffect, useState } from "react";

import ContactsList from "../components/ContactsList";
import {ContactSearch} from "../components/ContactSearch";
import { Container } from "@mui/system";
import { getContacts } from "../../services/getContacts";
import Loading from "../loading";





export default  function Contacts () {

const [contacts, setContacts]= useState([]);

useEffect(()=>{
    getContacts().then(setContacts);
},[]);

return(
    <Container sx={{mt:'30px'}}>
        <h1>Contacts</h1>
        <ContactSearch onSearch={setContacts}/>
        <ContactsList contacts={contacts}/>
        <Loading/>
    </Container>
)
}