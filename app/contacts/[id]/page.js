"use client";
import { getContactsId } from "../../../services/getContacts";
import { useEffect, useState } from "react";
import { FormikForm, selectType } from "./components/FormikForm";
import { useSession } from "next-auth/react";

export default function Contact({ params: { id } }) {
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);
  const { data: session } = useSession();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (session && session.user) {
          const result = await getContactsId(id, session.user.email);
          const { profile, login, name, dof, profileImage } = result[0];
          setUser(result[0]);
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
            profileImage: profileImage,
            ...profile,
            ...hobbiesData,
          };
          setProfile(initialValues);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, session]);

  return <FormikForm initialValues={profile} user={user} />;
}
