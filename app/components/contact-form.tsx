"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject")));
    const body = encodeURIComponent(
      `Nom : ${data.get("name")}\nE-mail : ${data.get("email")}\n\n${data.get("message")}`,
    );
    setStatus("Votre application e-mail va s’ouvrir avec le message prérempli.");
    window.location.href = `mailto:gnadoucarmel@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Votre nom</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="form-row">
        <label htmlFor="email">Votre e-mail</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form-row">
        <label htmlFor="subject">Sujet</label>
        <input id="subject" name="subject" required />
      </div>
      <div className="form-row">
        <label htmlFor="message">Comment puis-je vous aider ?</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <button className="button button-dark" type="submit">Préparer un e-mail <span aria-hidden="true">↗</span></button>
      <p className="form-status" aria-live="polite">{status}</p>
      <p className="form-note">Votre message s’ouvre dans votre application e-mail — rien n’est enregistré sur ce site.</p>
    </form>
  );
}
