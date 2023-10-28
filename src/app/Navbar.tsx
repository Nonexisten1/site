"use client";

import { Button, Icon, Tabs, TextInput } from "@gravity-ui/uikit";
import React, { useState } from "react";
import {
  House,
  Person,
  Gear,
  Persons,
  Magnifier,
  TriangleDownFill,
} from "@gravity-ui/icons";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [currentTab, setCurrentTab] = useState("");
  const router = useRouter();
  useEffect(() => {
    router.replace(`/${currentTab}`);
  }, [currentTab]);

  return (
    <>
      <div className="flex items-center ml-2 mr-4 my-1 justify-between">
        <Button href="/" view="outlined-action" size="xl">
          <Icon data={TriangleDownFill} />
        </Button>
        <TextInput
          placeholder="Search in our store"
          className="max-w-4xl"
          leftContent={<Magnifier></Magnifier>}
          size="xl"
        />
        <Tabs
          activeTab={currentTab}
          onSelectTab={(id) => setCurrentTab(id)}
          items={[
            { id: "/", title: "Home", icon: <House></House> },
            { id: "Account", title: "Account", icon: <Person></Person> },
            { id: "About", title: "About us", icon: <Persons></Persons> },
            { id: "Settings", title: "Settings", icon: <Gear></Gear> },
          ]}
        />
      </div>
    </>
  );
}
