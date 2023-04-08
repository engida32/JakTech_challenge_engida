import React, { createContext, useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { axiosClient } from "../api";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const user = window.localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });

  const value = React.useMemo(() => [user, setUser], [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUser = () => {
  const [user] = useAuth();
  return user;
};

export const useLogin = () => {
  const [, setUser] = useAuth();

  const login = useMutation(
    async ({ phone, password }) => {
      const { data } = await axiosClient
        .post("/login", {
          phone,
          password,
        })
        .then((res) => res.data);
      return data;
    },
    {
      onSuccess: (data) => {
        console.log("Data => ", data);
        window.localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
      },
    },
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return login;
};
