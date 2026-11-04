import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";

type Props = { formName: "contact" | "talent" };
const enc = (d: Record<string, string>) => new URLSearchParams(d).toString();

function F({ n, label, type = "text", req = false, errors }: { n: string; label: string; type?: string; req?: boolean; errors: Record<string, string> }) {
  return (
    <label className="block text-sm"><span className="mb-1 block font-medium">{label}{req && " *"}</span>
      <input name={n} type={type} className="field" aria-invalid={!!errors[n]} /><span className="text-xs text-red-600" role="alert">{errors[n]}</span></label>
  );
}

export function NetlifyForm({ formName }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const contact = formName === "contact";
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = { "form-name": formName };
    fd.forEach((v, k) => { data[k] = String(v); });
    const err: Record<string, string> = {};
    if (!data.name?.trim()) err.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email || "")) err.email = "Enter a valid email address.";
    if (contact && !data.message?.trim()) err.message = "Describe your project or question.";
    if (!data.consent) err.consent = "Please confirm consent to continue.";
    setErrors(err);
    if (Object.keys(err).length) return;
    setState("sending");
    try {
      const r = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: enc(data) });
      if (!r.ok) throw new Error();
      setState("ok");
    } catch { setState("err"); }
  }
  if (state === "ok") return <p role="status" className="rounded-md bg-mist p-5">Thank you. Your message has been sent. We will respond to the email address you provided.</p>;
  return (
    <form name={formName} method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} noValidate className="grid gap-4 md:grid-cols-2">
      <input type="hidden" name="form-name" value={formName} />
      <p hidden><label>Leave empty <input name="bot-field" /></label></p>
      <F errors={errors} n="name" label="Full name" req /><F errors={errors} n="email" label={contact ? "Business email" : "Email"} type="email" req />
      {contact ? <>
        <F errors={errors} n="company" label="Company name" /><F errors={errors} n="country" label="Country" />
        <label className="block text-sm"><span className="mb-1 block font-medium">Enquiry type</span><select name="enquiryType" className="field"><option>Business enquiry</option><option>Project consultation</option><option>Partnership</option><option>Careers</option></select></label>
        <label className="block text-sm"><span className="mb-1 block font-medium">Service of interest</span><select name="service" className="field"><option>Not sure yet</option><option>AI Consultancy</option><option>Machine Learning</option><option>Software Engineering</option><option>Data Science and Analytics</option><option>Data Mining and BI</option><option>Digital Transformation</option></select></label>
        <label className="block text-sm md:col-span-2"><span className="mb-1 block font-medium">Project description *</span><textarea name="message" rows={5} className="field" aria-invalid={!!errors.message} /><span className="text-xs text-red-600" role="alert">{errors.message}</span></label>
        <label className="block text-sm"><span className="mb-1 block font-medium">Budget range (optional)</span><select name="budget" className="field"><option value="">Prefer not to say</option><option>Under USD 5,000</option><option>USD 5,000 to 20,000</option><option>USD 20,000 to 50,000</option><option>Above USD 50,000</option></select></label>
      </> : <>
        <label className="block text-sm"><span className="mb-1 block font-medium">Area of interest</span><select name="area" className="field">{["AI/ML", "Software Engineering", "Data", "Research", "Consulting", "Business Development"].map((a) => <option key={a}>{a}</option>)}</select></label>
        <F errors={errors} n="profileUrl" label="LinkedIn or portfolio link" type="url" />
        <label className="block text-sm md:col-span-2"><span className="mb-1 block font-medium">About you</span><textarea name="message" rows={4} className="field" /></label>
      </>}
      <div className="md:col-span-2">
        <label className="flex items-start gap-2 text-sm"><input type="checkbox" name="consent" value="yes" className="mt-1" />
          <span>{contact ? "I agree that GJen Global may store my details to respond to this enquiry. See the Privacy Policy." : "I consent to GJen Global storing my profile and contacting me about future opportunities. I can ask for deletion at any time."}</span></label>
        <span className="text-xs text-red-600" role="alert">{errors.consent}</span>
      </div>
      <div className="md:col-span-2">
        <button className="btn btn-primary" disabled={state === "sending"}>{state === "sending" && <Loader2 className="animate-spin" size={16} />}{contact ? "Send enquiry" : "Join talent community"}</button>
        {state === "err" && <p role="alert" className="mt-3 text-sm text-red-600">The message could not be sent. Check your connection and try again.</p>}
      </div>
    </form>
  );
}
