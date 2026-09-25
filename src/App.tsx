import { useState } from "react";
import { supabase } from "./lib/supabase";

export default function App() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<"trainer" | "client">("client");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            role,
          },
        },
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      setMessage("Account created. Please check your email for confirmation.");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Login successful.");
  }

  return (
    <main>
      <h1>Trainer Fitness Platform</h1>

      <h2>{mode === "login" ? "Login" : "Create Account"}</h2>

      <form onSubmit={handleSubmit}>
        {mode === "signup" && (
          <>
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value as "trainer" | "client")
              }
            >
              <option value="client">Client</option>
              <option value="trainer">Trainer</option>
            </select>
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />

        <button type="submit">
          {mode === "login" ? "Login" : "Create Account"}
        </button>
      </form>

      {message && <p>{message}</p>}

      <button
        type="button"
        onClick={() => {
          setMode(mode === "login" ? "signup" : "login");
          setMessage("");
        }}
      >
        {mode === "login"
          ? "Create a new account"
          : "Already have an account? Login"}
      </button>
    </main>
  );
}
