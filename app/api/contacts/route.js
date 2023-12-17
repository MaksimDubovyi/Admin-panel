import { NextResponse } from "next/server";
import {contacts}  from './sm.users';




export async function GET(req)
{
   
     const {searchParams} = new URL(req.url)

     const contact = searchParams.get('contact')
     const search = searchParams.get('search')

     let currentContacts = contacts;

     if (contact) {
          currentContacts = contacts.filter(contactItem => contactItem._id.$oid === contact);
      } else if (search) {
          currentContacts = contacts.filter(contactItem => contactItem.name.toLowerCase().includes(search.toLowerCase()));
      }
     return NextResponse.json(currentContacts)
}

