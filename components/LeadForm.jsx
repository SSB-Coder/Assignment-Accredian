"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const TEAM_SIZES = ["1 – 50", "51 – 200", "201 – 500", "501 – 1,000", "1,000+"];

const inputCls =
  "w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white " +
  "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent " +
  "placeholder:text-gray-400 transition";

export default function LeadForm() {
  const [form, setForm] = useState({
    name:     "",
    email:    "",
    company:  "",
    role:     "",
    teamSize: "",
    message:  "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    try {
      const res  = await fetch("/api/leads", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setErrMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  /* ── Success state ────────────────────────────────────────── */
  if (status === "success") {
    return (
      <section id="lead-form" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm">
            <CheckCircle size={56} className="mx-auto text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              You&apos;re all set!
            </h3>
            <p className="text-gray-500 mb-6">
              Thank you,{" "}
              <span className="font-medium text-gray-700">{form.name}</span>.
              Our enterprise team will reach out to{" "}
              <span className="font-medium text-gray-700">{form.email}</span>{" "}
              within 24 hours.
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                setForm({ name:"", email:"", company:"", role:"", teamSize:"", message:"" });
              }}
              className="text-sm text-brand-500 hover:underline font-medium"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* ── Form ─────────────────────────────────────────────────── */
  return (
    <section id="lead-form" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3 block">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Request a{" "}
            <span className="text-brand-500">Free Demo</span>
          </h2>
          <p className="text-gray-500">
            Fill in your details and our enterprise team will reach out within
            24 hours with a tailored proposal.
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5"
        >
          {/* Row 1: Name + Email */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Priya Sharma"
                required
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="priya@company.com"
                required
                className={inputCls}
              />
            </div>
          </div>

          {/* Row 2: Company + Role */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Infosys BPM"
                required
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Role
              </label>
              <input
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="Head of L&D / CHRO"
                className={inputCls}
              />
            </div>
          </div>

          {/* Team Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Team Size
            </label>
            <select
              name="teamSize"
              value={form.teamSize}
              onChange={handleChange}
              className={inputCls}
            >
              <option value="">Select team size</option>
              {TEAM_SIZES.map((s) => (
                <option key={s} value={s}>
                  {s} employees
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your team's learning goals or skill gaps…"
              className={`${inputCls} resize-none`}
            />
          </div>

          {/* Error message */}
          {status === "error" && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600">
              <AlertCircle size={16} className="shrink-0" />
              {errMsg}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-colors shadow-md shadow-brand-500/20"
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Submitting…
              </>
            ) : (
              <>
                <Send size={15} />
                Submit Request
              </>
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            No spam, ever. We respect your privacy.
          </p>
        </form>
      </div>
    </section>
  );
}
