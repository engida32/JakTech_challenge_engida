import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import { AuthProvider, useUser } from "./hooks/useAuth";
import Authenticated from "./pages/Authenticated";
import { ProtectedRoute } from "./components/ProtectedRoute";
import PusherTest from "./pages/PusherTest";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Authenticated />} />
            <Route path="/pusher" element={<PusherTest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
