import { useState } from "react";
import { toast } from "sonner";

const paperTopics = [
  "Agentic AI",
  "Multi-Agent Systems",
  "Explainable AI",
  "Small Language Models",
  "Neuro-Symbolic AI",
  "Self-Evolving Algorithms",
  "Cognitive Digital Twins",
  "6G-Enabled AI Networks",
  "Self-Healing Infrastructure",
  "Swarm Intelligence",
  "Precision Healthcare",
  "Smart Mobility 2.0",
  "Next-Gen Industrial Robotics",
  "Precision Agriculture",
  "Other",
];

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    collegeName: "",
    yearOfStudy: "",
    paperTopic: "",
    transactionId: "",
  });

  const [members, setMembers] = useState<string[]>([]);

  const addMember = () => {
    if (members.length < 3) setMembers([...members, ""]);
  };

  const removeMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const updateMember = (index: number, value: string) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.department || !form.collegeName || !form.yearOfStudy || !form.paperTopic) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Registration submitted successfully!");
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";

  const labelClass = "block mb-1.5 text-sm font-medium text-foreground";

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            <span className="text-primary">Register</span> Now
          </h1>
          <p className="text-muted-foreground text-sm">Fill in the details to register for NCFSS-AI'26</p>
        </div>

        <form onSubmit={handleSubmit} className="gradient-card rounded-2xl p-8 glow-border space-y-5">
          {/* Name */}
          <div>
            <label className={labelClass}>Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={inputClass}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className={labelClass}>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={inputClass}
            />
          </div>

          {/* Department */}
          <div>
            <label className={labelClass}>Department *</label>
            <input
              type="text"
              name="department"
              value={form.department}
              onChange={handleChange}
              placeholder="e.g., Computer Science and Engineering"
              className={inputClass}
            />
          </div>

          {/* College Name */}
          <div>
            <label className={labelClass}>College Name *</label>
            <input
              type="text"
              name="collegeName"
              value={form.collegeName}
              onChange={handleChange}
              placeholder="Enter your college name"
              className={inputClass}
            />
          </div>

          {/* Year of Study */}
          <div>
            <label className={labelClass}>Year of Study *</label>
            <select name="yearOfStudy" value={form.yearOfStudy} onChange={handleChange} className={inputClass}>
              <option value="">Select year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
              <option value="pg">PG</option>
              <option value="research">Research Scholar</option>
              <option value="faculty">Faculty / Industry</option>
            </select>
          </div>

          {/* Paper Topic */}
          <div>
            <label className={labelClass}>Paper Topic *</label>
            <select name="paperTopic" value={form.paperTopic} onChange={handleChange} className={inputClass}>
              <option value="">Select a topic</option>
              {paperTopics.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Group Members */}
          <div>
            <label className={labelClass}>Additional Group Members (Max 3, excluding yourself)</label>
            <div className="space-y-3">
              {members.map((member, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={member}
                    onChange={(e) => updateMember(index, e.target.value)}
                    placeholder={`Member ${index + 1} name`}
                    className={inputClass}
                  />
                  {members.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeMember(index)}
                      className="shrink-0 rounded-xl border border-border bg-secondary px-3 py-2 text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              {members.length < 4 && (
                <button
                  type="button"
                  onClick={addMember}
                  className="text-sm text-primary hover:underline"
                >
                  + Add Member
                </button>
              )}
            </div>
          </div>

          <div>
            <label className={labelClass}>Upload Abstract (PDF / DOC)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/20 cursor-pointer"
            />
          </div>

          {/* Payment Section */}
          <div className="border-t border-border pt-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4 text-center">
              Payment
            </h3>

            {/* QR Code Placeholder */}
            <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-2xl border-2 border-dashed border-border bg-secondary/50">
              <span className="text-xs text-muted-foreground">QR Code</span>
            </div>

            {/* Payment Screenshot Upload */}
            <div className="mb-4">
              <label className={labelClass}>Payment Screenshot (JPG / PNG) *</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                className="w-full text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/20 cursor-pointer"
              />
            </div>

            {/* Transaction ID */}
            <div>
              <label className={labelClass}>Transaction ID *</label>
              <input
                type="text"
                name="transactionId"
                value={form.transactionId}
                onChange={handleChange}
                placeholder="Enter your transaction ID"
                className={inputClass}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-full gradient-button py-3 text-sm font-semibold text-primary-foreground btn-glow"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
