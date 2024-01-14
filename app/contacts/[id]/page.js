"use client";
import { getContactsId } from "../../../services/getContacts";
import { useEffect, useState } from "react";
import { FormikForm, selectType } from "./components/FormikForm";

export default function Contact({ params: { id } }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getContactsId(id);
        const { profile, login, name, dof } = result[0];
        const hobbiesData = selectType("HOBBIES").reduce(
          (accumulator, currentValue, index) => {
            accumulator[currentValue.slug + "_H"] = [];

            profile.hobbies.forEach((element) => {
              const numberPart = element.split("_")[0];
              if (numberPart == index) {
                accumulator[currentValue.slug + "_H"].push(element);
              }
            });

            return accumulator;
          },
          []
        );
        const initialValues = {
          name: name,
          login: login,
          dof: dof,
          ...profile,
          ...hobbiesData,
        };
        setProfile(initialValues);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return <FormikForm profile={profile} />;
}
