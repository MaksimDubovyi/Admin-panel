"use client";
import { getContactsId } from "../../../services/getContacts";
import { useEffect, useState } from "react";
import { Form } from "./components/Form";

export default function Contact({ params: { id } }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getContactsId(id);
        const { profile } = result[0];
        setProfile(profile);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChangeValue = (value, key) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [key]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(profile);
  };

  return (
    <Form
      profile={profile}
      handleSubmit={handleSubmit}
      handleChangeValue={handleChangeValue}
    />
  );
}
