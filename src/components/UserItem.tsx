import React, { FC } from "react";
import { UserInterface } from "../types/types";

interface UserItemProps {
  user: UserInterface;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: "1px solid green", marginBottom: 10 }}>
      {user.id} {user.name} live in {user.address.city} on the{" "}
      {user.address.street} street
    </div>
  );
};
